import type { LayoutPosition, OpenHouseAgent } from '@/model/types';

interface Props {
  agents: OpenHouseAgent[];
  savedLayout: LayoutPosition[];
  selectedId?: string;
  onSelect(id: string): void;
}

const ASSET_BASE = 'https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@main/assets/star-office/';
const asset = (name: string) => `${ASSET_BASE}${name}`;

const OFFICE_SLOTS = [
  { x: 23, y: 60, scale: 1.45, sprite: 'guestagent1.webp', labelDx: 0 },
  { x: 69, y: 28, scale: 1.25, sprite: 'guestagent2.webp', labelDx: -2 },
  { x: 38, y: 82, scale: 1.35, sprite: 'guest_anim_2.webp', labelDx: 0 },
  { x: 58, y: 55, scale: 1.2, sprite: 'guest_anim_1.webp', labelDx: 0 },
  { x: 82, y: 42, scale: 1.15, sprite: 'guest_anim_3.webp', labelDx: 0 },
  { x: 17, y: 33, scale: 1.1, sprite: 'star-idle.gif', labelDx: 0 },
];

export function HouseScene({ agents, selectedId, onSelect }: Props) {
  const visible = agents.slice(0, OFFICE_SLOTS.length);
  const overflow = Math.max(0, agents.length - OFFICE_SLOTS.length);

  return (
    <div className="oh-office-frame" aria-label="OpenHouse pixel office">
      <div className="oh-office-world">
        <img className="oh-office-bg" src={asset('office_bg.webp')} alt="pixel office" draggable={false} />
        <img className="oh-office-prop oh-server" src={asset('serverroom.gif')} alt="server room" draggable={false} />
        <img className="oh-office-prop oh-coffee" src={asset('coffee-machine.gif')} alt="coffee machine" draggable={false} />
        <img className="oh-office-prop oh-sofa" src={asset('sofa-idle.webp')} alt="sofa" draggable={false} />
        {visible.map((agent, index) => {
          const slot = OFFICE_SLOTS[index] ?? OFFICE_SLOTS[0];
          return <button
            key={agent.id}
            type="button"
            className={`oh-office-agent ${agent.id === selectedId ? 'selected' : ''} ${agent.status}`}
            style={{ left: `${slot.x}%`, top: `${slot.y}%`, ['--agent-scale' as string]: slot.scale }}
            onClick={() => onSelect(agent.id)}
            title={`${agent.displayName} · ${agent.status}`}
          >
            <span className="oh-agent-label" style={{ transform: `translateX(${slot.labelDx}px)` }}>{shortName(agent.displayName)}</span>
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

function spriteFor(agent: OpenHouseAgent, fallback: string): string {
  if (agent.status === 'busy' || agent.mood === 'focused' || agent.mood === 'thinking') return 'star-working.gif';
  if (agent.status === 'error' || agent.status === 'offline' || agent.mood === 'sick') return 'guestagent2.webp';
  if (agent.sourceKind === 'tytus-daemon') return fallback;
  if (agent.sourceKind === 'mcp-http') return 'guest_anim_3.webp';
  if (agent.sourceKind === 'openai-compatible') return 'guest_anim_1.webp';
  return fallback;
}

function bubbleFor(agent: OpenHouseAgent): string {
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
