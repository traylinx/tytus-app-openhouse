import { useCallback, useEffect, useMemo, useState } from 'react';
import { Plus, RefreshCw, ShieldCheck } from 'lucide-react';
import type { AppDb } from '@tytus/host-api';
import { normalizeTytusAgents } from '@/model/normalizeTytus';
import type { AgentSourceConfig, AgentSourceKind, LayoutPosition, OpenHouseAgent, ProbeHistoryRow, SessionSecrets } from '@/model/types';
import { probeExternalSource, probeTytusPod } from '@/connectors/probe';
import { addHistory, deleteSource, listHistory, listLayout, listSources, upsertSource } from '@/repo/repo';
import { HouseScene } from '@/components/HouseScene';
import { AddAgentDialog } from '@/components/AddAgentDialog';
import { AgentInspector } from '@/components/AgentInspector';
import { SourceRail, isIssue } from '@/components/SourceRail';
import { styles } from './styles';
import type { OpenHouseProps } from '@/model/types';

type Filter = 'all' | AgentSourceKind | 'issues';

export function OpenHouse({ host }: OpenHouseProps) {
  const [db] = useState<AppDb>(() => host.storage.current());
  const [tytusAgents, setTytusAgents] = useState<OpenHouseAgent[]>(() => normalizeTytusAgents(host.daemon.state.agents, host.daemon.state.included));
  const [sources, setSources] = useState<AgentSourceConfig[]>([]);
  const [externalAgents, setExternalAgents] = useState<OpenHouseAgent[]>([]);
  const [layout, setLayout] = useState<LayoutPosition[]>([]);
  const [history, setHistory] = useState<ProbeHistoryRow[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [filter, setFilter] = useState<Filter>('all');
  const [addOpen, setAddOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [probingId, setProbingId] = useState<string | null>(null);
  const [sessionSecrets, setSessionSecrets] = useState<SessionSecrets>({ bearerBySourceId: {} });

  useEffect(() => {
    let alive = true;
    void Promise.all([listSources(db), listLayout(db), listHistory(db)]).then(([s, l, h]) => {
      if (!alive) return;
      setSources(s);
      setLayout(l);
      setHistory(h);
    });
    return () => { alive = false; };
  }, [db]);

  useEffect(() => host.daemon.onStateChange((state) => {
    setTytusAgents(normalizeTytusAgents(state.agents, state.included));
  }), [host]);

  const refreshExternal = useCallback(async (nextSources = sources, secrets = sessionSecrets) => {
    setRefreshing(true);
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
    setRefreshing(false);
  }, [db, sessionSecrets, sources]);

  useEffect(() => {
    if (sources.length) void refreshExternal(sources, sessionSecrets);
    // Manual source load should probe once. Session secret changes are explicit via add flow.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources.length]);

  const allAgents = useMemo(() => [...tytusAgents, ...externalAgents], [tytusAgents, externalAgents]);
  const visibleAgents = useMemo(() => {
    if (filter === 'all') return allAgents;
    if (filter === 'issues') return allAgents.filter(isIssue);
    return allAgents.filter((a) => a.sourceKind === filter);
  }, [allAgents, filter]);
  const selected = allAgents.find((a) => a.id === selectedId) ?? visibleAgents[0];
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
      host.notifications.notify({ title: 'OpenHouse resident added', body: `${source.name} moved into the house.`, level: 'success' });
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
    void done().catch(async (err) => {
      host.notifications.notify({ title: 'OpenHouse probe failed', body: err instanceof Error ? err.message : String(err), level: 'error' });
      setProbingId(null);
    });
  }, [db, host.daemon, host.notifications, sessionSecrets, sources]);

  const counts = countStatuses(allAgents);
  return <div className="oh-root">
    <style>{styles}</style>
    <header className="oh-header">
      <div><p>OpenHouse</p><h1>Agent House</h1></div>
      <div className="oh-summary"><span>{allAgents.length} residents</span><span>{counts.issues} issues</span><span>{counts.online} online</span></div>
      <div className="oh-header-actions"><button onClick={() => setAddOpen(true)}><Plus size={16} />Add agent</button><button onClick={() => void refreshExternal()} disabled={refreshing}><RefreshCw size={16} />{refreshing ? 'Refreshing…' : 'Refresh external'}</button></div>
    </header>
    <main className="oh-main">
      <SourceRail agents={allAgents} filter={filter} onFilter={setFilter} />
      <section className="oh-stage">
        {allAgents.length === 0 && <div className="oh-zero"><ShieldCheck size={36} /><h2>No residents yet</h2><p>Tytus daemon pods appear automatically. Add third-party agents to give them a body and room.</p></div>}
        <HouseScene agents={visibleAgents} savedLayout={layout} selectedId={selected?.id} onSelect={setSelectedId} />
      </section>
      <AgentInspector agent={selected} history={selectedHistory} sources={sources} probing={probingId === selected?.id} onProbe={probeAgent} onDeleteSource={removeSource} />
    </main>
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

function countStatuses(agents: OpenHouseAgent[]) {
  const issues = agents.filter(isIssue).length;
  const online = agents.filter((a) => a.status === 'online' || a.status === 'busy').length;
  return { issues, online };
}
