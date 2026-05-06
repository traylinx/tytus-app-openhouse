import type { AgentBodySpec, AgentStatus } from '@/model/types';

const PALETTES: Record<AgentBodySpec['palette'], { fill: string; stroke: string; glow: string }> = {
  violet: { fill: '#8b5cf6', stroke: '#c4b5fd', glow: '#7c3aed' },
  cyan: { fill: '#06b6d4', stroke: '#a5f3fc', glow: '#0891b2' },
  green: { fill: '#22c55e', stroke: '#bbf7d0', glow: '#16a34a' },
  amber: { fill: '#f59e0b', stroke: '#fde68a', glow: '#d97706' },
  red: { fill: '#ef4444', stroke: '#fecaca', glow: '#dc2626' },
  silver: { fill: '#94a3b8', stroke: '#e2e8f0', glow: '#64748b' },
};

interface Props {
  body: AgentBodySpec;
  status: AgentStatus;
  selected?: boolean;
  label: string;
}

export function AgentBody({ body, status, selected, label }: Props) {
  const p = PALETTES[body.palette];
  const cls = `oh-agent-body oh-${body.animation} oh-status-${status}${selected ? ' oh-selected' : ''}`;
  return (
    <g className={cls} aria-label={label}>
      <filter id={`glow-${body.palette}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <ellipse cx="0" cy="38" rx="28" ry="8" fill="rgba(0,0,0,.28)" />
      {body.species === 'hologram' && <Hologram p={p} />}
      {body.species === 'owl' && <Owl p={p} />}
      {body.species === 'librarian' && <Owl p={p} book />}
      {body.species === 'forge' && <Robot p={p} tool />}
      {body.species === 'drone' && <Drone p={p} />}
      {body.species === 'ghost' && <Ghost p={p} />}
      {(body.species === 'robot' || body.species === 'custom') && <Robot p={p} />}
      <Accessory kind={body.accessory} p={p} />
      <StatusOrb status={status} />
    </g>
  );
}

function Robot({ p, tool }: { p: Palette; tool?: boolean }) {
  return <>
    <rect x="-22" y="-22" width="44" height="44" rx="12" fill={p.fill} stroke={p.stroke} strokeWidth="2" filter={`url(#glow-${paletteName(p)})`} />
    <circle cx="-9" cy="-5" r="4" fill="#0f172a" />
    <circle cx="9" cy="-5" r="4" fill="#0f172a" />
    <path d="M-10 10 Q0 18 10 10" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
    <rect x="-6" y="-38" width="12" height="15" rx="4" fill={p.stroke} />
    {tool && <path d="M24 6 l14 14 M38 6 L24 20" stroke={p.stroke} strokeWidth="4" strokeLinecap="round" />}
  </>;
}

function Hologram({ p }: { p: Palette }) {
  return <>
    <path d="M0 -36 L30 22 L-30 22 Z" fill={p.fill} opacity=".42" stroke={p.stroke} strokeWidth="2" />
    <circle cx="0" cy="-4" r="18" fill="none" stroke={p.stroke} strokeWidth="2" opacity=".8" />
    <path d="M-14 -4 H14 M-9 8 H9" stroke={p.stroke} strokeWidth="2" strokeLinecap="round" />
  </>;
}

function Owl({ p, book }: { p: Palette; book?: boolean }) {
  return <>
    <path d="M-26 -12 Q-20 -36 0 -24 Q20 -36 26 -12 Q30 22 0 30 Q-30 22 -26 -12Z" fill={p.fill} stroke={p.stroke} strokeWidth="2" />
    <circle cx="-10" cy="-6" r="8" fill="#f8fafc" /><circle cx="10" cy="-6" r="8" fill="#f8fafc" />
    <circle cx="-10" cy="-6" r="3" fill="#0f172a" /><circle cx="10" cy="-6" r="3" fill="#0f172a" />
    <path d="M0 0 l6 8 h-12z" fill="#fbbf24" />
    {book && <rect x="-32" y="18" width="64" height="18" rx="3" fill="#334155" stroke={p.stroke} />}
  </>;
}

function Drone({ p }: { p: Palette }) {
  return <>
    <rect x="-24" y="-14" width="48" height="28" rx="14" fill={p.fill} stroke={p.stroke} strokeWidth="2" />
    <circle cx="-38" cy="-20" r="10" fill="none" stroke={p.stroke} strokeWidth="3" />
    <circle cx="38" cy="-20" r="10" fill="none" stroke={p.stroke} strokeWidth="3" />
    <circle cx="-38" cy="20" r="10" fill="none" stroke={p.stroke} strokeWidth="3" />
    <circle cx="38" cy="20" r="10" fill="none" stroke={p.stroke} strokeWidth="3" />
    <circle cx="0" cy="0" r="5" fill="#0f172a" />
  </>;
}

function Ghost({ p }: { p: Palette }) {
  return <>
    <path d="M-24 24 V-6 Q-24 -30 0 -30 Q24 -30 24 -6 V24 l-8 -6 l-8 6 l-8 -6 l-8 6 l-8 -6z" fill={p.fill} stroke={p.stroke} opacity=".68" strokeWidth="2" />
    <circle cx="-8" cy="-8" r="4" fill="#0f172a" /><circle cx="8" cy="-8" r="4" fill="#0f172a" />
  </>;
}

function Accessory({ kind, p }: { kind?: AgentBodySpec['accessory']; p: Palette }) {
  if (!kind) return null;
  if (kind === 'antenna') return <path d="M0 -39 V-54 M-7 -54 H7" stroke={p.stroke} strokeWidth="3" strokeLinecap="round" />;
  if (kind === 'headphones') return <path d="M-28 -4 Q0 -36 28 -4 M-28 -4 V12 M28 -4 V12" stroke={p.stroke} strokeWidth="4" fill="none" />;
  if (kind === 'toolbelt') return <rect x="-25" y="18" width="50" height="8" rx="4" fill="#422006" opacity=".8" />;
  if (kind === 'book') return <rect x="18" y="10" width="18" height="24" rx="2" fill="#1e293b" stroke={p.stroke} />;
  if (kind === 'shield') return <path d="M33 -12 l16 6 v13 q0 14 -16 21 q-16 -7 -16 -21 V-6z" fill={p.fill} stroke={p.stroke} />;
  return <g><circle cx="-34" cy="-30" r="3" fill={p.stroke} /><circle cx="34" cy="-28" r="2" fill={p.stroke} /><circle cx="26" cy="28" r="2.5" fill={p.stroke} /></g>;
}

function StatusOrb({ status }: { status: AgentStatus }) {
  return <circle className={`oh-orb oh-orb-${status}`} cx="28" cy="-30" r="8" stroke="#0f172a" strokeWidth="2" />;
}

type Palette = { fill: string; stroke: string; glow: string };
function paletteName(p: Palette): string {
  return Object.entries(PALETTES).find(([, v]) => v === p)?.[0] ?? 'violet';
}
