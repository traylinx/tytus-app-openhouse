import type { AgentBodySpec, AgentMood, AgentSourceKind, AgentStatus, RoomId } from './types';

export function statusToMood(status: AgentStatus): AgentMood {
  switch (status) {
    case 'online': return 'focused';
    case 'busy': return 'thinking';
    case 'starting': return 'idle';
    case 'degraded': return 'stressed';
    case 'error': return 'sick';
    case 'offline': return 'sleeping';
    default: return 'idle';
  }
}

export function defaultRoom(kind: AgentSourceKind, baseUrl?: string, status?: AgentStatus): RoomId {
  if (status === 'error' || status === 'offline') return 'incident-infirmary';
  if (kind === 'tytus-daemon') return 'tytus-lab';
  if (kind === 'ail-gateway') return 'remote-balcony';
  if (kind === 'mcp-http') return 'mcp-library';
  if (baseUrl) {
    try {
      const host = new URL(baseUrl).hostname.toLowerCase();
      if (host === 'localhost' || host === '127.0.0.1' || host === '::1') return 'local-workshop';
    } catch {
      // ignore
    }
  }
  if (kind === 'custom-health') return 'lobby';
  return 'remote-balcony';
}

export function bodyFor(kind: AgentSourceKind, status: AgentStatus, override?: Partial<AgentBodySpec>): AgentBodySpec {
  const byKind: Record<AgentSourceKind, AgentBodySpec> = {
    'tytus-daemon': { species: 'robot', palette: 'violet', accessory: 'antenna', animation: 'breathe' },
    'ail-gateway': { species: 'hologram', palette: 'cyan', accessory: 'sparkles', animation: 'scan' },
    'openai-compatible': { species: 'hologram', palette: 'cyan', accessory: 'sparkles', animation: 'scan' },
    'custom-health': { species: 'drone', palette: 'green', accessory: 'shield', animation: 'pulse' },
    'openhouse-probe': { species: 'robot', palette: 'silver', accessory: 'sparkles', animation: 'breathe' },
    'mcp-http': { species: 'owl', palette: 'amber', accessory: 'book', animation: 'breathe' },
  };
  const statusPatch: Partial<AgentBodySpec> =
    status === 'busy' ? { animation: 'typing' } :
    status === 'starting' ? { palette: 'amber', animation: 'pulse' } :
    status === 'degraded' ? { palette: 'amber', animation: 'scan' } :
    status === 'error' ? { palette: 'red', animation: 'alarm' } :
    status === 'offline' ? { species: 'ghost', palette: 'silver', animation: 'sleep' } :
    {};
  return { ...byKind[kind], ...statusPatch, ...override };
}

export function coerceStatus(raw: unknown): AgentStatus {
  const s = String(raw ?? '').toLowerCase();
  if (['ready', 'running', 'healthy', 'ok', 'online', 'connected', 'up'].includes(s)) return 'online';
  if (['busy', 'working', 'executing', 'writing', 'researching', 'syncing'].includes(s)) return 'busy';
  if (['starting', 'booting', 'warming'].includes(s)) return 'starting';
  if (['degraded', 'warning', 'warn'].includes(s)) return 'degraded';
  if (['error', 'failed', 'unhealthy', 'down'].includes(s)) return 'error';
  if (['offline', 'stopped', 'idle-offline'].includes(s)) return 'offline';
  return 'unknown';
}
