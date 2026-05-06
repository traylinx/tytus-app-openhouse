import type { AgentSourceKind, LayoutPosition, OpenHouseAgent } from '@/model/types';

interface Props {
  agents: OpenHouseAgent[];
  savedLayout: LayoutPosition[];
  selectedId?: string;
  onSelect(id: string): void;
}

const ASSET_BASE = 'https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@8eeb9ee71585f5d82340013a8c0bc11e57be0f49/assets/star-office/';
const asset = (name: string) => `${ASSET_BASE}${name}`;

type Slot = { x: number; y: number; scale: number; sprite: string; labelDx?: number; room: string };

const OFFICE_SLOTS: Slot[] = [
  { x: 22, y: 61, scale: 1.35, sprite: 'guestagent1.webp', room: 'carpet desk' },
  { x: 68, y: 30, scale: 1.18, sprite: 'guestagent2.webp', labelDx: -2, room: 'server room' },
  { x: 50, y: 63, scale: 1.12, sprite: 'guest_anim_2.webp', room: 'coffee table' },
  { x: 33, y: 79, scale: 1.18, sprite: 'star-idle.gif', room: 'entry walk' },
  { x: 40, y: 52, scale: 1.08, sprite: 'guest_anim_1.webp', room: 'remote balcony' },
  { x: 82, y: 50, scale: 1.05, sprite: 'guest_anim_3.webp', room: 'library wall' },
  { x: 15, y: 35, scale: 1.05, sprite: 'star-working.gif', room: 'bookshelf' },
  { x: 58, y: 43, scale: 1.0, sprite: 'guest_anim_2.webp', room: 'sofa' },
];

const KIND_PREFERRED_SLOTS: Partial<Record<AgentSourceKind, number[]>> = {
  'tytus-daemon': [0, 1, 2, 3],
  'ail-gateway': [4],
  'openai-compatible': [5, 4],
  'mcp-http': [5],
  'custom-health': [2, 6],
  'openhouse-probe': [3, 6, 7],
};

export function HouseScene({ agents, selectedId, onSelect }: Props) {
  const visible = agents.slice(0, OFFICE_SLOTS.length);
  const overflow = Math.max(0, agents.length - OFFICE_SLOTS.length);
  const occupied = new Set<number>();

  return (
    <div className="oh-office-frame" aria-label="OpenHouse pixel office">
      <div className="oh-office-world">
        <img className="oh-office-bg" src={asset('office_bg.webp')} alt="pixel office" draggable={false} />
        <img className="oh-office-prop oh-server" src={asset('serverroom.gif')} alt="server room" draggable={false} />
        <img className="oh-office-prop oh-coffee" src={asset('coffee-machine.gif')} alt="coffee machine" draggable={false} />
        <img className="oh-office-prop oh-sofa" src={asset('sofa-idle.webp')} alt="sofa" draggable={false} />
        {visible.map((agent, index) => {
          const slotIndex = pickSlot(agent, index, occupied);
          const slot = OFFICE_SLOTS[slotIndex] ?? OFFICE_SLOTS[0];
          return <button
            key={agent.id}
            type="button"
            className={`oh-office-agent ${agent.id === selectedId ? 'selected' : ''} ${agent.status} ${agent.sourceKind === 'ail-gateway' ? 'ail' : ''}`}
            style={{ left: `${slot.x}%`, top: `${slot.y}%`, ['--agent-scale' as string]: slot.scale }}
            onClick={() => onSelect(agent.id)}
            title={`${agent.displayName} · ${agent.status} · ${slot.room}`}
          >
            <span className="oh-agent-label" style={{ transform: `translateX(${slot.labelDx ?? 0}px)` }}>{shortName(agent.displayName)}</span>
            <span className="oh-bubble">{bubbleFor(agent)}</span>
            <img src={asset(spriteFor(agent, slot.sprite))} alt="" draggable={false} />
            <span className="oh-status-dot" />
          </button>;
        })}
        {overflow > 0 && <div className="oh-overflow-badge">+{overflow} more agents in the office</div>}
        <div className="oh-office-name"><span>★</span> OpenHouse Agent Office <span>★</span></div>
      </div>
    </div>
  );
}

function pickSlot(agent: OpenHouseAgent, fallbackIndex: number, occupied: Set<number>): number {
  const preferred = KIND_PREFERRED_SLOTS[agent.sourceKind] ?? [];
  const slotIndex = preferred.find((idx) => !occupied.has(idx))
    ?? OFFICE_SLOTS.findIndex((_, idx) => !occupied.has(idx))
    ?? fallbackIndex % OFFICE_SLOTS.length;
  occupied.add(slotIndex);
  return slotIndex;
}

function spriteFor(agent: OpenHouseAgent, fallback: string): string {
  if (agent.sourceKind === 'ail-gateway') return 'guest_anim_1.webp';
  if (agent.status === 'busy' || agent.mood === 'focused' || agent.mood === 'thinking') return 'star-working.gif';
  if (agent.status === 'error' || agent.status === 'offline' || agent.mood === 'sick') return 'guestagent2.webp';
  if (agent.sourceKind === 'mcp-http') return 'guest_anim_3.webp';
  if (agent.sourceKind === 'openai-compatible') return 'guest_anim_1.webp';
  return fallback;
}

function bubbleFor(agent: OpenHouseAgent): string {
  if (agent.sourceKind === 'ail-gateway') return 'models';
  if (agent.status === 'online') return 'ready';
  if (agent.status === 'busy') return 'working';
  if (agent.status === 'offline') return 'offline';
  if (agent.status === 'error') return 'bug';
  if (agent.status === 'degraded') return 'check me';
  return 'waiting';
}

function shortName(name: string): string {
  return name.length <= 14 ? name : `${name.slice(0, 13)}…`;
}
