import { Building2, Cloud, Cpu, Library, TriangleAlert } from 'lucide-react';
import type { AgentSourceKind, AgentStatus, OpenHouseAgent } from '@/model/types';

type Filter = 'all' | AgentSourceKind | 'issues';

interface Props { agents: OpenHouseAgent[]; filter: Filter; onFilter(filter: Filter): void; }

const FILTERS: { id: Filter; label: string; icon: typeof Building2 }[] = [
  { id: 'all', label: 'All residents', icon: Building2 },
  { id: 'tytus-daemon', label: 'Tytus Lab', icon: Cpu },
  { id: 'openai-compatible', label: 'OpenAI', icon: Cloud },
  { id: 'custom-health', label: 'Health', icon: Building2 },
  { id: 'openhouse-probe', label: 'OpenHouse', icon: Building2 },
  { id: 'mcp-http', label: 'MCP Library', icon: Library },
  { id: 'issues', label: 'Issues', icon: TriangleAlert },
];

export function SourceRail({ agents, filter, onFilter }: Props) {
  return <nav className="oh-rail">
    {FILTERS.map((f) => {
      const Icon = f.icon;
      const count = countFor(f.id, agents);
      return <button key={f.id} className={filter === f.id ? 'active' : ''} onClick={() => onFilter(f.id)}><Icon size={17} /><span>{f.label}</span><strong>{count}</strong></button>;
    })}
  </nav>;
}

function countFor(filter: Filter, agents: OpenHouseAgent[]): number {
  if (filter === 'all') return agents.length;
  if (filter === 'issues') return agents.filter(isIssue).length;
  return agents.filter((a) => a.sourceKind === filter).length;
}

export function isIssue(a: Pick<OpenHouseAgent, 'status'>): boolean {
  return (['error', 'offline', 'degraded'] as AgentStatus[]).includes(a.status);
}
