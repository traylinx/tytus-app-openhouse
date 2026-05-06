import { bodyFor, coerceStatus, defaultRoom, statusToMood } from '@/model/bodyRules';
import { endpointHost, joinUrl, normalizeBaseUrl, redactSecretLike, safePath } from '@/model/security';
import type { AgentCapability, AgentSourceConfig, OpenHouseAgent, ProbeResult, SessionSecrets } from '@/model/types';

const TIMEOUT_MS = 6000;

export async function probeExternalSource(source: AgentSourceConfig, secrets: SessionSecrets): Promise<OpenHouseAgent> {
  const started = performance.now();
  try {
    const result = await probeByKind(source, secrets, TIMEOUT_MS);
    const latencyMs = Math.max(0, Math.round(performance.now() - started));
    const status = result.status;
    return {
      id: result.agentId,
      sourceId: source.id,
      sourceKind: source.kind,
      displayName: result.displayName || source.name,
      status,
      mood: result.mood || statusToMood(status),
      body: bodyFor(source.kind, status, { ...source.body, ...result.body }),
      room: source.room || defaultRoom(source.kind, source.baseUrl, status),
      endpointHost: endpointHost(source.baseUrl),
      capabilities: result.capabilities.length ? result.capabilities : ['unknown'],
      latencyMs: result.latencyMs ?? latencyMs,
      lastSeenAt: status === 'offline' ? undefined : Date.now(),
      lastError: result.lastError,
      raw: result.raw,
    };
  } catch (err) {
    const status = classifyError(err);
    const message = redactSecretLike(err);
    return {
      id: externalAgentId(source),
      sourceId: source.id,
      sourceKind: source.kind,
      displayName: source.name,
      status,
      mood: statusToMood(status),
      body: bodyFor(source.kind, status, source.body),
      room: source.room || defaultRoom(source.kind, source.baseUrl, status),
      endpointHost: endpointHost(source.baseUrl),
      capabilities: ['unknown'],
      latencyMs: Math.max(0, Math.round(performance.now() - started)),
      lastError: message,
    };
  }
}

export async function probeTytusPod(agentId: string, call: (path: string) => Promise<Response>): Promise<ProbeResult> {
  const started = performance.now();
  try {
    const res = await call('/v1/models');
    const text = await res.text().catch(() => '');
    let caps: AgentCapability[] = ['models'];
    if (text.includes('chat') || text.includes('gpt') || text.includes('model')) caps = ['models', 'chat'];
    return {
      agentId,
      sourceId: 'tytus-daemon',
      status: res.ok ? 'online' : 'degraded',
      latencyMs: Math.round(performance.now() - started),
      capabilities: caps,
      lastError: res.ok ? undefined : `HTTP ${res.status}`,
    };
  } catch (err) {
    return {
      agentId,
      sourceId: 'tytus-daemon',
      status: 'error',
      latencyMs: Math.round(performance.now() - started),
      capabilities: ['unknown'],
      lastError: redactSecretLike(err),
    };
  }
}

async function probeByKind(source: AgentSourceConfig, secrets: SessionSecrets, timeoutMs: number): Promise<ProbeResult> {
  switch (source.kind) {
    case 'openai-compatible': return probeOpenAiCompatible(source, secrets, timeoutMs);
    case 'custom-health': return probeHealth(source, timeoutMs);
    case 'openhouse-probe': return probeOpenHouseWellKnown(source, timeoutMs);
    case 'mcp-http': return probeMcpHttp(source, timeoutMs);
    default: throw new Error(`Unsupported external source kind: ${source.kind}`);
  }
}

async function probeOpenAiCompatible(source: AgentSourceConfig, secrets: SessionSecrets, timeoutMs: number): Promise<ProbeResult> {
  const res = await fetchWithTimeout(joinUrl(normalizeBaseUrl(source.baseUrl), '/v1/models'), source, secrets, timeoutMs);
  const raw = await readJsonLoose(res);
  const modelCount = Array.isArray((raw as { data?: unknown[] }).data) ? (raw as { data: unknown[] }).data.length : undefined;
  return {
    agentId: externalAgentId(source),
    sourceId: source.id,
    status: res.ok ? 'online' : res.status === 401 || res.status === 403 ? 'degraded' : 'error',
    latencyMs: undefined,
    capabilities: ['models', 'chat'],
    lastError: res.ok ? undefined : `HTTP ${res.status}`,
    raw: { modelCount },
  };
}

async function probeHealth(source: AgentSourceConfig, timeoutMs: number): Promise<ProbeResult> {
  const res = await fetchWithTimeout(joinUrl(normalizeBaseUrl(source.baseUrl), safePath(source.healthPath, '/health')), source, { bearerBySourceId: {} }, timeoutMs);
  const raw = await readJsonLoose(res);
  const rawStatus = getFirst(raw, ['status', 'state', 'health']);
  const healthy = typeof (raw as { healthy?: unknown }).healthy === 'boolean' ? (raw as { healthy: boolean }).healthy : undefined;
  const status = healthy === false ? 'error' : rawStatus ? coerceStatus(rawStatus) : res.ok ? 'online' : 'error';
  return {
    agentId: externalAgentId(source),
    sourceId: source.id,
    status,
    capabilities: parseCapabilities(raw, ['health']),
    displayName: typeof (raw as { name?: unknown }).name === 'string' ? (raw as { name: string }).name : undefined,
    lastError: res.ok ? undefined : `HTTP ${res.status}`,
    raw: summarizeRaw(raw),
  };
}

async function probeOpenHouseWellKnown(source: AgentSourceConfig, timeoutMs: number): Promise<ProbeResult> {
  const res = await fetchWithTimeout(joinUrl(normalizeBaseUrl(source.baseUrl), '/.well-known/openhouse-agent.json'), source, { bearerBySourceId: {} }, timeoutMs);
  const raw = await readJsonLoose(res);
  const status = coerceStatus((raw as { status?: unknown }).status ?? (res.ok ? 'online' : 'error'));
  const body = {
    species: (raw as { species?: never }).species,
    palette: (raw as { palette?: never }).palette,
    accessory: (raw as { accessory?: never }).accessory,
  };
  return {
    agentId: String((raw as { id?: unknown }).id || externalAgentId(source)),
    sourceId: source.id,
    status,
    mood: typeof (raw as { mood?: unknown }).mood === 'string' ? ((raw as { mood: never }).mood) : undefined,
    displayName: typeof (raw as { name?: unknown }).name === 'string' ? (raw as { name: string }).name : source.name,
    capabilities: parseCapabilities(raw, ['health']),
    body,
    lastError: res.ok ? undefined : `HTTP ${res.status}`,
    raw: summarizeRaw(raw),
  };
}

async function probeMcpHttp(source: AgentSourceConfig, timeoutMs: number): Promise<ProbeResult> {
  const base = normalizeBaseUrl(source.baseUrl);
  let res: Response;
  try {
    res = await fetchWithTimeout(joinUrl(base, '/.well-known/mcp'), source, { bearerBySourceId: {} }, timeoutMs);
  } catch {
    res = await fetchWithTimeout(joinUrl(base, safePath(source.healthPath, '/health')), source, { bearerBySourceId: {} }, timeoutMs);
  }
  return {
    agentId: externalAgentId(source),
    sourceId: source.id,
    status: res.ok ? 'online' : 'degraded',
    capabilities: ['mcp', 'tools'],
    lastError: res.ok ? undefined : `HTTP ${res.status}`,
    raw: { protocol: 'mcp-http-basic' },
  };
}

async function fetchWithTimeout(url: string, source: AgentSourceConfig, secrets: SessionSecrets, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  const headers = new Headers({ Accept: 'application/json' });
  if (source.authMode === 'session-bearer') {
    const token = secrets.bearerBySourceId[source.id];
    if (token) headers.set('Authorization', `Bearer ${token}`);
  }
  try {
    return await fetch(url, { method: 'GET', headers, signal: controller.signal, cache: 'no-store' });
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') throw new Error('Probe timed out after 6s.');
    if (err instanceof TypeError) throw new Error('Network/CORS failure. If the endpoint is online, allow this Tytus origin or add a bridge.');
    throw err;
  } finally {
    window.clearTimeout(timer);
  }
}

async function readJsonLoose(res: Response): Promise<Record<string, unknown>> {
  const text = await res.text().catch(() => '');
  if (!text) return {};
  try {
    const parsed = JSON.parse(text) as unknown;
    return parsed && typeof parsed === 'object' ? parsed as Record<string, unknown> : { value: parsed };
  } catch {
    return { text: text.slice(0, 500) };
  }
}

function parseCapabilities(raw: Record<string, unknown>, fallback: AgentCapability[]): AgentCapability[] {
  const caps = raw.capabilities;
  if (!Array.isArray(caps)) return fallback;
  const allowed = new Set<AgentCapability>(['models', 'chat', 'tools', 'files', 'health', 'mcp', 'music', 'unknown']);
  const parsed = caps.map((c) => String(c).toLowerCase()).filter((c): c is AgentCapability => allowed.has(c as AgentCapability));
  return parsed.length ? parsed : fallback;
}

function summarizeRaw(raw: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const key of ['id', 'name', 'status', 'state', 'version', 'capabilities', 'healthy']) {
    if (key in raw) out[key] = raw[key];
  }
  return out;
}

function getFirst(raw: Record<string, unknown>, keys: string[]): unknown {
  for (const key of keys) if (key in raw) return raw[key];
  return undefined;
}

function externalAgentId(source: AgentSourceConfig): string {
  return `external:${source.id}`;
}

function classifyError(err: unknown): 'offline' | 'error' | 'degraded' {
  const msg = redactSecretLike(err).toLowerCase();
  if (msg.includes('cors')) return 'degraded';
  if (msg.includes('timed out')) return 'degraded';
  if (msg.includes('network')) return 'offline';
  return 'error';
}
