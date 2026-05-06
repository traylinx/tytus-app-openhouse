export const styles = `
@font-face {
  font-family: ArkPixel;
  src: url('https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@8eeb9ee71585f5d82340013a8c0bc11e57be0f49/assets/star-office/fonts/ark-pixel-12px-proportional-latin.ttf.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
.oh-root {
  --bg: #1a1a2e;
  --surface: #2c2f3a;
  --surface2: #353945;
  --surface3: #242837;
  --accent: #e94560;
  --accent-dark: #b8354c;
  --gold: #ffd700;
  --text: #f3f4f6;
  --muted: #a7adbb;
  --border: #4a4f5f;
  --shadow: 4px 4px 0 #0a0a12;
  height: 100%;
  min-height: 0;
  background: var(--bg);
  background-image: linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px);
  background-size: 8px 8px;
  color: var(--text);
  font-family: ArkPixel, "Courier New", monospace;
  display: grid;
  grid-template-rows: minmax(0, 1fr) minmax(142px, 22vh);
  gap: 8px;
  padding: 6px 6px 62px;
  overflow: hidden;
  image-rendering: pixelated;
}
.oh-root * { box-sizing: border-box; }
.oh-root button, .oh-root select { font-family: inherit; }
.oh-top {
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(250px, 18vw, 310px);
  gap: 8px;
}
.oh-game-column {
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr) 58px;
  gap: 8px;
}
.oh-office-frame {
  min-height: 0;
  position: relative;
  overflow: hidden;
  background: #111124;
  border: 4px solid var(--accent);
  box-shadow: var(--shadow), 0 0 0 2px #0f0f18;
}
.oh-office-world {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
  overflow: hidden;
  background: #161628;
}
.oh-office-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  image-rendering: pixelated;
  user-select: none;
}
.oh-office-prop {
  position: absolute;
  image-rendering: pixelated;
  pointer-events: none;
  filter: drop-shadow(3px 4px 0 rgba(0,0,0,.5));
}
.oh-server { width: 10%; right: 12.8%; top: 16%; }
.oh-coffee { width: 7.2%; left: 45%; top: 50%; }
.oh-sofa { width: 10.5%; right: 31%; top: 36%; }
.oh-office-agent {
  position: absolute;
  z-index: 5;
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transform: translate(-50%, -100%) scale(var(--agent-scale));
  transform-origin: 50% 100%;
  image-rendering: pixelated;
  filter: drop-shadow(3px 5px 0 rgba(0,0,0,.78));
}
.oh-office-agent img {
  display: block;
  max-width: 68px;
  max-height: 88px;
  image-rendering: pixelated;
}
.oh-office-agent:hover { filter: drop-shadow(0 0 0 #fff) drop-shadow(3px 5px 0 rgba(0,0,0,.8)); z-index: 9; }
.oh-office-agent.selected img { outline: 3px solid #fff; outline-offset: 2px; background: rgba(255,255,255,.16); }
.oh-office-agent.busy img, .oh-office-agent.online img { animation: ohBob 1.2s steps(2,end) infinite; }
.oh-office-agent.error img, .oh-office-agent.offline img { filter: grayscale(.22) saturate(.82); }
.oh-office-agent.ail img { filter: drop-shadow(0 0 7px rgba(103,232,249,.75)); }
.oh-agent-label {
  position: absolute;
  bottom: 100%;
  left: 50%;
  translate: -50% -4px;
  color: white;
  text-shadow: 2px 2px 0 #000, -1px -1px 0 #000;
  font-size: clamp(9px, .75vw, 11px);
  white-space: nowrap;
  font-weight: 900;
  letter-spacing: .02em;
}
.oh-bubble {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 22px);
  translate: -50% 0;
  background: #fff;
  color: #111;
  padding: 5px 8px;
  border: 3px solid #111;
  box-shadow: 3px 3px 0 rgba(0,0,0,.45);
  font-size: 10px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
.oh-office-agent:hover .oh-bubble, .oh-office-agent.selected .oh-bubble { opacity: 1; }
.oh-status-dot {
  position: absolute;
  right: 3px;
  top: 3px;
  width: 9px;
  height: 9px;
  border: 2px solid #111;
  background: #94a3b8;
}
.oh-office-agent.online .oh-status-dot, .oh-office-agent.busy .oh-status-dot { background: #22c55e; }
.oh-office-agent.error .oh-status-dot { background: #ef4444; }
.oh-office-agent.offline .oh-status-dot { background: #64748b; }
.oh-office-agent.degraded .oh-status-dot, .oh-office-agent.starting .oh-status-dot { background: #f59e0b; }
.oh-office-name {
  position: absolute;
  left: 50%;
  bottom: 10px;
  translate: -50% 0;
  min-width: min(360px, 58%);
  text-align: center;
  background: #6b4638;
  color: var(--gold);
  border: 4px solid #3b241d;
  box-shadow: 3px 3px 0 #0a0a12;
  padding: 8px 18px;
  font-size: clamp(10px, .9vw, 13px);
  text-shadow: 2px 2px 0 #000;
}
.oh-office-name span { font-size: 18px; margin: 0 14px; }
.oh-overflow-badge {
  position: absolute;
  right: 14px;
  bottom: 14px;
  background: #252536;
  border: 3px solid var(--accent);
  box-shadow: 3px 3px 0 #0a0a12;
  color: var(--gold);
  padding: 8px 10px;
  font-size: 11px;
}
.oh-toolbar {
  min-width: 0;
  min-height: 58px;
  background: #252536;
  border: 3px solid var(--border);
  box-shadow: var(--shadow);
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 9px;
  overflow: hidden;
}
.oh-toolbar label { color: var(--gold); font-size: 12px; }
.oh-toolbar select, .oh-toolbar button {
  background: var(--surface2);
  color: var(--text);
  border: 3px solid var(--border);
  box-shadow: 2px 2px 0 #0a0a12;
  border-radius: 0;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 900;
  white-space: nowrap;
}
.oh-toolbar select { max-width: 190px; }
.oh-toolbar button:hover { border-color: var(--accent); color: #fff; }
.oh-toolbar .spacer { flex: 1; min-width: 8px; }
.oh-toolbar .counter {
  border: 3px solid var(--border);
  background: #1f2330;
  padding: 8px 10px;
  color: var(--gold);
  box-shadow: 2px 2px 0 #0a0a12;
  font-size: 12px;
  white-space: nowrap;
}
.oh-side {
  min-height: 0;
  background: var(--surface);
  border: 3px solid var(--accent);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
}
.oh-side-head { padding: 11px 12px; border-bottom: 3px solid var(--border); }
.oh-side-head p { margin: 0; color: var(--gold); letter-spacing: .12em; font-size: 10px; text-transform: uppercase; }
.oh-side-head h2 { margin: 5px 0 0; font-size: clamp(17px, 1.4vw, 22px); color: #fff; line-height: 1.05; }
.oh-side-body {
  min-height: 0;
  padding: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.oh-side-card {
  background: #3a3e4d;
  border: 3px solid var(--border);
  box-shadow: 2px 2px 0 #0a0a12;
  padding: 9px;
}
.oh-side-card h3 { margin: 0 0 8px; color: var(--gold); font-size: 12px; }
.oh-side-card p { margin: 0; color: #e5e7eb; font-size: 11px; line-height: 1.35; }
.oh-side-card dl { display: grid; grid-template-columns: 72px 1fr; gap: 5px 8px; margin: 0; font-size: 11px; }
.oh-side-card dt { color: #cbd5e1; }
.oh-side-card dd { margin: 0; color: #fff; word-break: break-word; }
.oh-abilities { display: grid; gap: 6px; }
.oh-ability {
  background: #282d3d;
  border-left: 4px solid var(--gold);
  padding: 6px 7px;
}
.oh-ability strong { display: block; color: #fff; font-size: 11px; margin-bottom: 2px; }
.oh-ability span { display: block; color: #d7dce7; font-size: 10px; line-height: 1.35; }
.oh-caps, .oh-mini-caps { display: flex; flex-wrap: wrap; gap: 5px; }
.oh-caps span, .oh-mini-caps span {
  background: #252536;
  border: 2px solid #4a4f5f;
  color: #ffd700;
  padding: 4px 6px;
  font-size: 10px;
}
.oh-mini-caps { margin-top: 5px; }
.oh-mini-caps span { font-size: 9px; padding: 2px 5px; }
.oh-actions { display: grid; gap: 8px; }
.oh-actions button {
  background: #4b5162;
  color: white;
  border: 3px solid #171923;
  box-shadow: 2px 2px 0 #05070d;
  padding: 9px;
  font-weight: 900;
}
.oh-actions button:hover { border-color: var(--accent); }
.oh-history p { display: flex; justify-content: space-between; gap: 6px; }
.oh-history b { color: #fff; }
.oh-history span { color: var(--muted); }
.oh-error { color: #fecaca; border-color: #ef4444; }
.oh-bottom {
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(220px, 1.05fr) minmax(260px, .9fr) minmax(320px, 1.18fr);
  gap: 8px;
}
.oh-panel {
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 3px solid var(--accent);
  box-shadow: var(--shadow);
}
.oh-panel-title {
  color: var(--gold);
  font-size: clamp(13px, 1.1vw, 16px);
  font-weight: 900;
  text-align: center;
  letter-spacing: .08em;
  padding: 8px 10px;
  border-bottom: 3px solid var(--border);
  text-shadow: 2px 2px 0 #1a1020;
}
.oh-memo {
  background-image: url('https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@8eeb9ee71585f5d82340013a8c0bc11e57be0f49/assets/star-office/memo-bg.webp');
  background-size: cover;
  color: #5c4326;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.oh-memo .oh-panel-title { border: 0; color: #5c4326; text-shadow: none; }
.oh-memo p { font-size: clamp(10px, .9vw, 12px); margin: 0; max-width: 82%; line-height: 1.45; }
.oh-playbook p { margin: 0 14px 10px; color: #cfd5e4; font-size: 11px; line-height: 1.35; text-align: center; }
.oh-status-grid {
  min-height: 0;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 10px 12px;
}
.oh-status-grid button {
  background: var(--surface2);
  color: var(--text);
  border: 3px solid var(--border);
  box-shadow: 2px 2px 0 #0a0a12;
  font-size: clamp(11px, .95vw, 14px);
  font-weight: 900;
}
.oh-status-grid button:hover { border-color: var(--accent); }
.oh-visitor-list {
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 8px;
  overflow: auto;
}
.oh-visitor {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: 7px;
  align-items: center;
  background: #3a3e4d;
  border-left: 7px solid var(--accent);
  border-bottom: 4px solid #111827;
  padding: 8px;
}
.oh-visitor strong { display: block; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; }
.oh-visitor small { display: block; color: #d1d5db; font-size: 10px; margin-top: 2px; }
.oh-visitor button {
  background: #4b5162;
  color: white;
  border: 3px solid #171923;
  box-shadow: 2px 2px 0 #05070d;
  padding: 7px 8px;
  font-size: 10px;
}
.oh-modal-backdrop {
  position: absolute;
  inset: 0;
  z-index: 20;
  background: rgba(10,10,18,.72);
  display: grid;
  place-items: center;
}
.oh-modal {
  width: min(560px, calc(100% - 40px));
  background: #252536;
  border: 4px solid var(--accent);
  box-shadow: var(--shadow);
  padding: 16px;
  display: grid;
  gap: 12px;
}
.oh-modal-head { display: flex; align-items: center; justify-content: space-between; }
.oh-modal h2 { margin: 0; color: var(--gold); }
.oh-modal label { display: grid; gap: 6px; color: #f3f4f6; font-size: 12px; }
.oh-modal input, .oh-modal select { background: #111827; color: #fff; border: 3px solid var(--border); padding: 9px; font-family: inherit; }
.oh-modal footer { display: flex; justify-content: flex-end; gap: 10px; }
.oh-modal button { background: #3a3e4d; color: #fff; border: 3px solid var(--border); box-shadow: 2px 2px 0 #0a0a12; padding: 9px 12px; }
.oh-modal .primary { background: #8b2640; }
.oh-form-error { color: #fecaca; margin: 0; font-size: 12px; }
@keyframes ohBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -2px; } }
@media (max-width: 1180px) {
  .oh-root { overflow: auto; padding-bottom: 72px; grid-template-rows: auto auto; }
  .oh-top { grid-template-columns: 1fr; }
  .oh-game-column { grid-template-rows: minmax(390px, 55vh) auto; }
  .oh-side { min-height: 230px; }
  .oh-bottom { grid-template-columns: 1fr; min-height: 460px; }
  .oh-toolbar { flex-wrap: wrap; min-height: auto; }
}
@media (max-width: 1500px) {
  .oh-toolbar .counter { display: none; }
}
`;
