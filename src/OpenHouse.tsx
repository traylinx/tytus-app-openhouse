import { useCallback, useEffect, useMemo, useState } from 'react';
import { Plus, RefreshCw } from 'lucide-react';
import type { AppDb } from '@tytus/host-api';
import { normalizeTytusAgents } from '@/model/normalizeTytus';
import type { AgentCapability, AgentSourceConfig, AgentSourceKind, OpenHouseAgent, ProbeHistoryRow, SessionSecrets } from '@/model/types';
import { probeExternalSource, probeTytusPod } from '@/connectors/probe';
import { addHistory, deleteSource, listHistory, listLayout, listSources, upsertSource } from '@/repo/repo';
import { HouseScene } from '@/components/HouseScene';
import { AddAgentDialog } from '@/components/AddAgentDialog';
import { styles } from './styles';
import type { OpenHouseProps } from '@/model/types';

type Filter = 'all' | AgentSourceKind | 'issues' | 'online';

interface AbilityCard {
  title: string;
  body: string;
}

export function OpenHouse({ host }: OpenHouseProps) {
  const [db] = useState<AppDb>(() => host.storage.current());
  const [tytusAgents, setTytusAgents] = useState<OpenHouseAgent[]>(() => normalizeTytusAgents(host.daemon.state.agents, host.daemon.state.included));
  const [sources, setSources] = useState<AgentSourceConfig[]>([]);
  const [externalAgents, setExternalAgents] = useState<OpenHouseAgent[]>([]);
  const [history, setHistory] = useState<ProbeHistoryRow[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [filter, setFilter] = useState<Filter>('all');
  const [addOpen, setAddOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [probingId, setProbingId] = useState<string | null>(null);
  const [sessionSecrets, setSessionSecrets] = useState<SessionSecrets>({ bearerBySourceId: {} });

  useEffect(() => {
    let alive = true;
    void Promise.all([listSources(db), listLayout(db), listHistory(db)]).then(([s, , h]) => {
      if (!alive) return;
      setSources(s);
      setHistory(h);
    });
    return () => { alive = false; };
  }, [db]);

  useEffect(() => host.daemon.onStateChange((state) => {
    setTytusAgents(normalizeTytusAgents(state.agents, state.included));
  }), [host]);

  const refreshExternal = useCallback(async (nextSources = sources, secrets = sessionSecrets) => {
    setRefreshing(true);
    try {
      const enabled = nextSources.filter((s) => s.enabled);
      const results: OpenHouseAgent[] = [];
      for (const batch of chunks(enabled, 4)) {
        const settled = await Promise.all(batch.map((source) => probeExternalSource(source, secrets)));
        results.push(...settled);
        setExternalAgents([...results]);
        for (const agent of settled) await persistProbe(db, agent);
      }
      setExternalAgents(results);
      setHistory(await listHistory(db));
    } finally {
      setRefreshing(false);
    }
  }, [db, sessionSecrets, sources]);

  useEffect(() => {
    if (sources.length) void refreshExternal(sources, sessionSecrets);
    // Probe loaded external sources once. Secret updates are explicit through add flow.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources.length]);

  const allAgents = useMemo(() => [...tytusAgents, ...externalAgents], [tytusAgents, externalAgents]);
  const visibleAgents = useMemo(() => {
    if (filter === 'all') return allAgents;
    if (filter === 'issues') return allAgents.filter(isIssue);
    if (filter === 'online') return allAgents.filter((a) => a.status === 'online' || a.status === 'busy');
    return allAgents.filter((a) => a.sourceKind === filter);
  }, [allAgents, filter]);
  const selected = allAgents.find((a) => a.id === selectedId) ?? visibleAgents[0] ?? allAgents[0];
  const selectedHistory = history.filter((h) => h.agentId === selected?.id).slice(-4).reverse();
  const selectedAbilities = selected ? agentAbilities(selected) : [];

  useEffect(() => {
    if (!selectedId && visibleAgents[0]) setSelectedId(visibleAgents[0].id);
  }, [selectedId, visibleAgents]);

  const addSource = useCallback((source: AgentSourceConfig, sessionBearer?: string) => {
    const nextSecrets = sessionBearer
      ? { bearerBySourceId: { ...sessionSecrets.bearerBySourceId, [source.id]: sessionBearer } }
      : sessionSecrets;
    setSessionSecrets(nextSecrets);
    void upsertSource(db, source).then(async () => {
      const next = await listSources(db);
      setSources(next);
      await refreshExternal(next, nextSecrets);
      host.notifications.notify({ title: 'OpenHouse resident added', body: `${source.name} moved into the office.`, level: 'success' });
    });
  }, [db, host.notifications, refreshExternal, sessionSecrets]);

  const removeSource = useCallback((sourceId: string) => {
    void deleteSource(db, sourceId).then(async () => {
      setSources(await listSources(db));
      setExternalAgents((prev) => prev.filter((a) => a.sourceId !== sourceId));
      setSessionSecrets((prev) => {
        const next = { ...prev.bearerBySourceId };
        delete next[sourceId];
        return { bearerBySourceId: next };
      });
    });
  }, [db]);

  const probeAgent = useCallback((agent: OpenHouseAgent) => {
    setProbingId(agent.id);
    const done = async () => {
      if (agent.sourceKind === 'tytus-daemon' || agent.sourceKind === 'ail-gateway') {
        const podId = agent.id.replace(/^tytus:/, '');
        const result = await probeTytusPod(agent.id, (path) => host.daemon.callPodEndpoint(podId, path));
        const next = { ...agent, status: result.status, latencyMs: result.latencyMs, lastError: result.lastError, capabilities: result.capabilities };
        setTytusAgents((prev) => prev.map((a) => a.id === agent.id ? next : a));
        await persistProbe(db, next);
      } else {
        const source = sources.find((s) => s.id === agent.sourceId);
        if (source) {
          const next = await probeExternalSource(source, sessionSecrets);
          setExternalAgents((prev) => prev.map((a) => a.id === agent.id ? next : a));
          await persistProbe(db, next);
        }
      }
      setHistory(await listHistory(db));
      setProbingId(null);
    };
    void done().catch((err) => {
      host.notifications.notify({ title: 'OpenHouse probe failed', body: err instanceof Error ? err.message : String(err), level: 'error' });
      setProbingId(null);
    });
  }, [db, host.daemon, host.notifications, sessionSecrets, sources]);

  const copyDiagnostic = useCallback((agent: OpenHouseAgent) => {
    const payload = JSON.stringify({ id: agent.id, source: agent.sourceKind, status: agent.status, room: agent.room, endpoint: agent.endpointHost, capabilities: agent.capabilities, lastError: agent.lastError, raw: agent.raw }, null, 2);
    void navigator.clipboard?.writeText(payload).then(() => host.notifications.notify({ title: 'OpenHouse diagnostic copied', body: agent.displayName, level: 'success' }));
  }, [host.notifications]);

  const copyAgentContract = useCallback((agent: OpenHouseAgent) => {
    const contract = integrationContract(agent);
    void navigator.clipboard?.writeText(contract).then(() => host.notifications.notify({ title: 'OpenHouse agent contract copied', body: agent.displayName, level: 'success' }));
  }, [host.notifications]);

  const counts = countStatuses(allAgents);
  return <div className="oh-root">
    <style>{styles}</style>
    <div className="oh-top">
      <section className="oh-game-column">
        <HouseScene agents={visibleAgents} savedLayout={[]} selectedId={selected?.id} onSelect={setSelectedId} />
        <nav className="oh-toolbar" aria-label="OpenHouse HUD">
          <label>View</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value as Filter)}>
            <option value="all">All residents</option>
            <option value="tytus-daemon">Tytus Pods</option>
            <option value="ail-gateway">AIL Gateway</option>
            <option value="openai-compatible">OpenAI-compatible</option>
            <option value="custom-health">Health checks</option>
            <option value="openhouse-probe">OpenHouse agents</option>
            <option value="mcp-http">MCP Library</option>
            <option value="online">Online</option>
            <option value="issues">Issues</option>
          </select>
          <button type="button" onClick={() => setAddOpen(true)}><Plus size={14} /> Add agent</button>
          <button type="button" onClick={() => void refreshExternal()} disabled={refreshing}><RefreshCw size={14} /> {refreshing ? 'Refreshing…' : 'Refresh external'}</button>
          <span className="spacer" />
          <span className="counter">{allAgents.length} residents</span>
          <span className="counter">{counts.online} online</span>
          <span className="counter">{counts.issues} issues</span>
        </nav>
      </section>
      <aside className="oh-side">
        <div className="oh-side-head"><p>OpenHouse</p><h2>{selected?.displayName ?? 'No resident selected'}</h2></div>
        {selected ? <div className="oh-side-body">
          <div className={`oh-side-card ${isIssue(selected) ? 'oh-error' : ''}`}>
            <h3>{selected.status.toUpperCase()}</h3>
            <dl>
              <dt>Room</dt><dd>{labelRoom(selected.room)}</dd>
              <dt>Source</dt><dd>{sourceLabel(selected.sourceKind)}</dd>
              <dt>Endpoint</dt><dd>{selected.endpointHost ?? '—'}</dd>
              <dt>Latency</dt><dd>{selected.latencyMs ? `${selected.latencyMs}ms` : '—'}</dd>
              <dt>Last seen</dt><dd>{selected.lastSeenAt ? new Date(selected.lastSeenAt).toLocaleTimeString() : '—'}</dd>
            </dl>
          </div>
          <div className="oh-side-card"><h3>Can do</h3><div className="oh-abilities">{selectedAbilities.map((ability) => <div key={ability.title} className="oh-ability"><strong>{ability.title}</strong><span>{ability.body}</span></div>)}</div></div>
          <div className="oh-side-card"><h3>Capabilities</h3><div className="oh-caps">{capabilityBadges(selected.capabilities).map((c) => <span key={c}>{c}</span>)}</div></div>
          {selected.lastError && <div className="oh-side-card oh-error"><h3>Error</h3><p>{selected.lastError}</p></div>}
          <div className="oh-actions">
            <button type="button" onClick={() => probeAgent(selected)} disabled={probingId === selected.id}>{probingId === selected.id ? 'Testing…' : 'Test connection'}</button>
            <button type="button" onClick={() => copyAgentContract(selected)}>Copy agent contract</button>
            <button type="button" onClick={() => copyDiagnostic(selected)}>Copy diagnostic</button>
            {selected.sourceKind !== 'tytus-daemon' && selected.sourceKind !== 'ail-gateway' && <button type="button" onClick={() => removeSource(selected.sourceId)}>Remove source</button>}
          </div>
          {!!selectedHistory.length && <div className="oh-side-card oh-history"><h3>Probe history</h3>{selectedHistory.map((h) => <p key={h.id}><b>{h.status}</b> {h.latencyMs ? `${h.latencyMs}ms` : ''} <span>{new Date(h.createdAt).toLocaleTimeString()}</span></p>)}</div>}
        </div> : <div className="oh-side-body"><div className="oh-side-card">Add third-party agents or connect Tytus pods to populate the office.</div></div>}
      </aside>
    </div>
    <section className="oh-bottom">
      <article className="oh-panel oh-memo"><div className="oh-panel-title">— Today Memo —</div><p>{counts.issues ? `${counts.issues} residents need attention. Start with the red room.` : 'Office calm. Agents have bodies, rooms, status, and action contracts.'}</p></article>
      <article className="oh-panel oh-playbook"><div className="oh-panel-title">Agent Actions</div><div className="oh-status-grid"><button onClick={() => setFilter('all')}>All</button><button onClick={() => setFilter('online')}>Working</button><button onClick={() => setFilter('issues')}>Alert</button><button onClick={() => setFilter('ail-gateway')}>AIL</button></div><p>Original Star-Office protocol kept: join, push status, leave, memo, probe.</p></article>
      <article className="oh-panel"><div className="oh-panel-title">— Visitor List —</div><div className="oh-visitor-list">{allAgents.map((agent) => <div className="oh-visitor" key={agent.id}><div><strong>{agent.displayName}</strong><small>{agent.status} · {sourceLabel(agent.sourceKind)}</small><div className="oh-mini-caps">{capabilityBadges(agent.capabilities).slice(0, 3).map((cap) => <span key={cap}>{cap}</span>)}</div></div><button onClick={() => setSelectedId(agent.id)}>focus</button><button onClick={() => probeAgent(agent)}>probe</button></div>)}</div></article>
    </section>
    <AddAgentDialog open={addOpen} onClose={() => setAddOpen(false)} onAdd={addSource} />
  </div>;
}

async function persistProbe(db: AppDb, agent: OpenHouseAgent): Promise<void> {
  await addHistory(db, {
    id: `probe-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    agentId: agent.id,
    sourceId: agent.sourceId,
    status: agent.status,
    latencyMs: agent.latencyMs ?? null,
    error: agent.lastError ?? null,
    createdAt: Date.now(),
  });
}

function chunks<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function isIssue(agent: OpenHouseAgent): boolean {
  return agent.status === 'error' || agent.status === 'offline' || agent.status === 'degraded';
}

function countStatuses(agents: OpenHouseAgent[]) {
  const issues = agents.filter(isIssue).length;
  const online = agents.filter((a) => a.status === 'online' || a.status === 'busy').length;
  return { issues, online };
}

function labelRoom(room: string): string {
  return room.replace(/-/g, ' ');
}

function sourceLabel(kind: AgentSourceKind): string {
  switch (kind) {
    case 'tytus-daemon': return 'Tytus pod';
    case 'ail-gateway': return 'AIL gateway';
    case 'openai-compatible': return 'OpenAI-compatible';
    case 'custom-health': return 'Health service';
    case 'openhouse-probe': return 'OpenHouse agent';
    case 'mcp-http': return 'MCP HTTP/SSE';
  }
}

function capabilityBadges(capabilities: AgentCapability[]): string[] {
  const mapped = capabilities.map((cap) => {
    switch (cap) {
      case 'models': return 'models';
      case 'chat': return 'chat';
      case 'tools': return 'tools';
      case 'files': return 'files';
      case 'health': return 'health';
      case 'mcp': return 'mcp';
      case 'music': return 'music';
      default: return 'unknown';
    }
  });
  return mapped.length ? Array.from(new Set(mapped)) : ['unknown'];
}

function agentAbilities(agent: OpenHouseAgent): AbilityCard[] {
  const base: Record<AgentSourceKind, AbilityCard[]> = {
    'tytus-daemon': [
      { title: 'Run Tytus work', body: 'Native pod resident. OpenHouse can focus it, probe it, and expose daemon status.' },
      { title: 'Pod endpoint', body: 'Uses Tytus pod calls for live checks such as /v1/models when available.' },
    ],
    'ail-gateway': [
      { title: 'Model gateway', body: 'AIL is not a pod. It is the OpenAI-style gateway for /v1/models and chat routes.' },
      { title: 'Provider routing', body: 'Good place for model/provider capability checks before agents use it.' },
    ],
    'openai-compatible': [
      { title: 'List models', body: 'Probes GET /v1/models and shows online/degraded/error state.' },
      { title: 'Chat-capable', body: 'Represents an LLM endpoint agents can use for chat/completions style work.' },
    ],
    'custom-health': [
      { title: 'Health heartbeat', body: 'Tracks any service with /health or a custom JSON health path.' },
      { title: 'Ops monitor', body: 'Turns backend status into a visible room/body/status in the office.' },
    ],
    'openhouse-probe': [
      { title: 'Resident card', body: 'Reads /.well-known/openhouse-agent.json for name, body, mood, and capabilities.' },
      { title: 'Third-agent native', body: 'Best contract for OpenClaw, Hermes, Lope, Claude, OpenCode, or custom workers.' },
    ],
    'mcp-http': [
      { title: 'Tool library', body: 'Represents MCP servers that expose tools, resources, and prompts.' },
      { title: 'Probe bridge', body: 'Checks /.well-known/mcp or health fallback so tool servers can live in the house.' },
    ],
  };
  const extras: AbilityCard[] = [];
  const caps = new Set(agent.capabilities);
  if (caps.has('tools')) extras.push({ title: 'Use tools', body: 'Can expose callable tool actions to connected agents.' });
  if (caps.has('files')) extras.push({ title: 'Use files', body: 'Can work with files/workspaces if the source grants access.' });
  if (caps.has('mcp')) extras.push({ title: 'MCP protocol', body: 'Can advertise MCP resources/prompts/tools for agent workflows.' });
  if (caps.has('music')) extras.push({ title: 'Music/media', body: 'Can support media/music generation flows when the endpoint exposes it.' });
  return [...base[agent.sourceKind], ...extras].slice(0, 5);
}

function integrationContract(agent: OpenHouseAgent): string {
  if (agent.sourceKind === 'openhouse-probe') {
    return `GET /.well-known/openhouse-agent.json\n{\n  "id": "${agent.id}",\n  "name": "${agent.displayName}",\n  "status": "online",\n  "capabilities": ["health", "tools"],\n  "mood": "focused"\n}`;
  }
  if (agent.sourceKind === 'openai-compatible' || agent.sourceKind === 'ail-gateway') {
    return 'OpenAI-compatible contract:\nGET /v1/models\nPOST /v1/chat/completions (for workers that need chat)';
  }
  if (agent.sourceKind === 'mcp-http') return 'MCP contract:\nGET /.well-known/mcp or GET /health\nExpose tools/resources/prompts via MCP HTTP/SSE.';
  if (agent.sourceKind === 'custom-health') return 'Health contract:\nGET /health -> { "status": "ok", "name": "agent-name", "capabilities": ["health"] }';
  return 'Tytus pod contract:\nhost.daemon.state.agents + host.daemon.state.included\nhost.daemon.callPodEndpoint(podId, path) for live checks.';
}
