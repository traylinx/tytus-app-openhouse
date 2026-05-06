import { AlertTriangle, CheckCircle2, Copy, RefreshCw, Trash2, WifiOff } from 'lucide-react';
import type { AgentSourceConfig, OpenHouseAgent, ProbeHistoryRow } from '@/model/types';

interface Props {
  agent?: OpenHouseAgent;
  history: ProbeHistoryRow[];
  sources: AgentSourceConfig[];
  probing: boolean;
  onProbe(agent: OpenHouseAgent): void;
  onDeleteSource(id: string): void;
}

export function AgentInspector({ agent, history, sources, probing, onProbe, onDeleteSource }: Props) {
  if (!agent) {
    return <aside className="oh-inspector oh-empty"><h2>No agent selected</h2><p>Pick an agent body in the house to see operational truth.</p></aside>;
  }
  const source = sources.find((s) => s.id === agent.sourceId);
  const diag = safeDiagnostic(agent);
  return (
    <aside className="oh-inspector">
      <div className="oh-inspector-head">
        <div>
          <p className="oh-kicker">{agent.sourceKind}</p>
          <h2>{agent.displayName}</h2>
        </div>
        <StatusPill status={agent.status} />
      </div>
      <div className="oh-agent-big">
        <span className={`oh-avatar-dot oh-dot-${agent.status}`} />
        <div><strong>{agent.body.species}</strong><span>{agent.body.palette} · {agent.mood}</span></div>
      </div>
      <dl className="oh-facts">
        <dt>Room</dt><dd>{agent.room}</dd>
        <dt>Endpoint</dt><dd>{agent.endpointHost ?? '—'}</dd>
        <dt>Latency</dt><dd>{agent.latencyMs === undefined ? '—' : `${agent.latencyMs}ms`}</dd>
        <dt>Last seen</dt><dd>{agent.lastSeenAt ? new Date(agent.lastSeenAt).toLocaleTimeString() : '—'}</dd>
      </dl>
      <div className="oh-caps">{agent.capabilities.map((c) => <span key={c}>{c}</span>)}</div>
      {agent.lastError && <div className="oh-error"><AlertTriangle size={16} />{agent.lastError}</div>}
      <div className="oh-actions">
        <button onClick={() => onProbe(agent)} disabled={probing}><RefreshCw size={15} />{probing ? 'Testing…' : 'Test connection'}</button>
        <button onClick={() => void navigator.clipboard?.writeText(diag)}><Copy size={15} />Copy diagnostic</button>
        {source && source.kind !== 'tytus-daemon' && <button className="danger" onClick={() => onDeleteSource(source.id)}><Trash2 size={15} />Delete source</button>}
      </div>
      <section>
        <h3>Probe history</h3>
        <div className="oh-history">
          {history.length === 0 && <p>No probes yet.</p>}
          {history.map((h) => <div key={h.id} className="oh-history-row"><StatusIcon status={h.status} /><span>{h.status}</span><small>{h.latencyMs ?? '—'}ms · {new Date(h.createdAt).toLocaleTimeString()}</small>{h.error && <em>{h.error}</em>}</div>)}
        </div>
      </section>
    </aside>
  );
}

function StatusPill({ status }: { status: OpenHouseAgent['status'] }) {
  return <span className={`oh-pill oh-pill-${status}`}>{status}</span>;
}

function StatusIcon({ status }: { status: OpenHouseAgent['status'] }) {
  return status === 'online' || status === 'busy' ? <CheckCircle2 size={14} /> : <WifiOff size={14} />;
}

function safeDiagnostic(agent: OpenHouseAgent): string {
  return [
    `OpenHouse diagnostic`,
    `agent=${agent.displayName}`,
    `source=${agent.sourceKind}`,
    `status=${agent.status}`,
    `room=${agent.room}`,
    `endpoint_host=${agent.endpointHost ?? 'unknown'}`,
    `latency_ms=${agent.latencyMs ?? 'unknown'}`,
    `error=${agent.lastError ?? 'none'}`,
  ].join('\n');
}
