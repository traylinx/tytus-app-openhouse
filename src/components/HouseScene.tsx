import { deterministicLayout, isGroupedMode, ROOMS } from '@/model/layout';
import type { LayoutPosition, OpenHouseAgent, RoomId } from '@/model/types';
import { AgentBody } from './AgentBody';

interface Props {
  agents: OpenHouseAgent[];
  savedLayout: LayoutPosition[];
  selectedId?: string;
  onSelect(id: string): void;
}

const ROOM_FILL: Record<RoomId, string> = {
  lobby: '#1f2937',
  'tytus-lab': '#312e81',
  'local-workshop': '#064e3b',
  'remote-balcony': '#164e63',
  'mcp-library': '#451a03',
  'incident-infirmary': '#450a0a',
};

export function HouseScene({ agents, savedLayout, selectedId, onSelect }: Props) {
  const layout = deterministicLayout(agents, savedLayout);
  const pos = new Map(layout.map((p) => [p.agentId, p]));
  const grouped = isGroupedMode(agents.length);
  return (
    <div className="oh-scene-wrap">
      <svg viewBox="0 0 1400 740" role="img" aria-label="OpenHouse agent house" className="oh-scene">
        <defs>
          <linearGradient id="houseFloor" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="rgba(148,163,184,.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1400" height="740" rx="28" fill="url(#houseFloor)" />
        <rect x="0" y="0" width="1400" height="740" fill="url(#grid)" opacity=".8" />
        {ROOMS.map((room) => {
          const count = agents.filter((a) => a.room === room.id).length;
          return (
            <g key={room.id}>
              <rect x={room.x} y={room.y} width={room.w} height={room.h} rx="28" fill={ROOM_FILL[room.id]} stroke="rgba(226,232,240,.18)" strokeWidth="2" />
              <rect x={room.x + 10} y={room.y + 10} width={room.w - 20} height={room.h - 20} rx="22" fill="rgba(255,255,255,.035)" />
              <text x={room.x + 24} y={room.y + 36} fill="#e2e8f0" fontSize="18" fontWeight="800">{room.label}</text>
              <text x={room.x + room.w - 34} y={room.y + 36} textAnchor="end" fill="#94a3b8" fontSize="13">{count}</text>
            </g>
          );
        })}
        {grouped ? <GroupedAgents agents={agents} onSelect={onSelect} selectedId={selectedId} /> : agents.map((agent) => {
          const p = pos.get(agent.id);
          if (!p) return null;
          return (
            <g key={agent.id} transform={`translate(${p.x} ${p.y})`} onClick={() => onSelect(agent.id)} role="button" tabIndex={0} className="oh-agent-hit">
              <AgentBody body={agent.body} status={agent.status} selected={agent.id === selectedId} label={agent.displayName} />
              <text y="68" textAnchor="middle" fill="#e5e7eb" fontSize="12" fontWeight="700">{truncate(agent.displayName, 16)}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function GroupedAgents({ agents, selectedId, onSelect }: { agents: OpenHouseAgent[]; selectedId?: string; onSelect(id: string): void }) {
  return <>
    {ROOMS.map((room) => {
      const roomAgents = agents.filter((a) => a.room === room.id);
      if (!roomAgents.length) return null;
      const errorCount = roomAgents.filter((a) => a.status === 'error' || a.status === 'offline').length;
      const onlineCount = roomAgents.filter((a) => a.status === 'online' || a.status === 'busy').length;
      return (
        <g key={room.id} transform={`translate(${room.x + room.w / 2} ${room.y + room.h / 2 + 8})`} onClick={() => onSelect(roomAgents[0].id)} className="oh-agent-hit">
          <circle r="48" fill="rgba(15,23,42,.82)" stroke={errorCount ? '#f87171' : '#67e8f9'} strokeWidth="3" />
          <text textAnchor="middle" y="-8" fill="#f8fafc" fontSize="28" fontWeight="900">{roomAgents.length}</text>
          <text textAnchor="middle" y="18" fill="#cbd5e1" fontSize="12">agents</text>
          <text textAnchor="middle" y="38" fill={errorCount ? '#fecaca' : '#bbf7d0'} fontSize="11">{onlineCount} ok · {errorCount} issue</text>
          {selectedId && roomAgents.some((a) => a.id === selectedId) && <circle r="58" fill="none" stroke="#f8fafc" strokeDasharray="8 8" />}
        </g>
      );
    })}
  </>;
}

function truncate(s: string, max: number): string {
  return s.length <= max ? s : `${s.slice(0, max - 1)}…`;
}
