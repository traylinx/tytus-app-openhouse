import { useCallback, useEffect, useMemo, useState } from 'react';
import { Plus, RefreshCw } from 'lucide-react';
import type { AppDb } from '@tytus/host-api';
import { normalizeTytusAgents } from '@/model/normalizeTytus';
import type { AgentSourceConfig, AgentSourceKind, OpenHouseAgent, ProbeHistoryRow, SessionSecrets } from '@/model/types';
import { probeExternalSource, probeTytusPod } from '@/connectors/probe';
import { addHistory, deleteSource, listHistory, listLayout, listSources, upsertSource } from '@/repo/repo';
import { HouseScene } from '@/components/HouseScene';
import { AddAgentDialog } from '@/components/AddAgentDialog';
import { styles } from './styles';
import type { OpenHouseProps } from '@/model/types';

type Filter = 'all' | AgentSourceKind | 'issues' | 'online';

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
  const selectedHistory = history.filter((h) => h.agentId === selected?.id);

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
      if (agent.sourceKind === 'tytus-daemon') {
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
    const payload = JSON.stringify({ id: agent.id, source: agent.sourceKind, status: agent.status, room: agent.room, endpoint: agent.endpointHost, lastError: agent.lastError, raw: agent.raw }, null, 2);
    void navigator.clipboard?.writeText(payload).then(() => host.notifications.notify({ title: 'OpenHouse diagnostic copied', body: agent.displayName, level: 'success' }));
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
            <option value="tytus-daemon">Tytus Lab</option>
            <option value="openai-compatible">OpenAI</option>
            <option value="custom-health">Health</option>
            <option value="openhouse-probe">OpenHouse</option>
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
              <dt>Source</dt><dd>{selected.sourceKind}</dd>
              <dt>Endpoint</dt><dd>{selected.endpointHost ?? '—'}</dd>
              <dt>Latency</dt><dd>{selected.latencyMs ? `${selected.latencyMs}ms` : '—'}</dd>
              <dt>Last seen</dt><dd>{selected.lastSeenAt ? new Date(selected.lastSeenAt).toLocaleTimeString() : '—'}</dd>
            </dl>
          </div>
          <div className="oh-side-card"><h3>Capabilities</h3><div className="oh-caps">{selected.capabilities.length ? selected.capabilities.map((c) => <span key={c}>{c}</span>) : <span>unknown</span>}</div></div>
          {selected.lastError && <div className="oh-side-card oh-error"><h3>Error</h3><p>{selected.lastError}</p></div>}
          <div className="oh-actions">
            <button type="button" onClick={() => probeAgent(selected)} disabled={probingId === selected.id}>{probingId === selected.id ? 'Testing…' : 'Test connection'}</button>
            <button type="button" onClick={() => copyDiagnostic(selected)}>Copy diagnostic</button>
            {selected.sourceKind !== 'tytus-daemon' && <button type="button" onClick={() => removeSource(selected.sourceId)}>Remove source</button>}
          </div>
        </div> : <div className="oh-side-body"><div className="oh-side-card">Add third-party agents or connect Tytus pods to populate the office.</div></div>}
      </aside>
    </div>
    <section className="oh-bottom">
      <article className="oh-panel oh-memo"><div className="oh-panel-title">— Today Memo —</div><p>{counts.issues ? `${counts.issues} residents need attention. Start with the red room.` : 'Office calm. Agents have bodies, rooms, and visible status.'}</p></article>
      <article className="oh-panel"><div className="oh-panel-title">Agent Status</div><div className="oh-status-grid"><button onClick={() => setFilter('all')}>All</button><button onClick={() => setFilter('online')}>Working</button><button onClick={() => setFilter('issues')}>Alert</button><button onClick={() => void refreshExternal()}>Sync</button></div></article>
      <article className="oh-panel"><div className="oh-panel-title">— Visitor List —</div><div className="oh-visitor-list">{allAgents.map((agent) => <div className="oh-visitor" key={agent.id}><div><strong>{agent.displayName}</strong><small>{agent.status} · {agent.mood}</small></div><button onClick={() => setSelectedId(agent.id)}>focus</button><button onClick={() => probeAgent(agent)}>probe</button></div>)}</div></article>
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
