import { jsx as n, jsxs as l } from "react/jsx-runtime";
import { forwardRef as ue, createElement as ee, useState as m, useEffect as j, useCallback as I, useMemo as se } from "react";
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _e = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, o) => o ? o.toUpperCase() : a.toLowerCase()
), le = (e) => {
  const t = _e(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, fe = (...e) => e.filter((t, a, o) => !!t && t.trim() !== "" && o.indexOf(t) === a).join(" ").trim(), Se = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ae = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = ue(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: i,
    iconNode: d,
    ...c
  }, y) => ee(
    "svg",
    {
      ref: y,
      ...Ae,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(a) * 24 / Number(t) : a,
      className: fe("lucide", s),
      ...!i && !Se(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...d.map(([g, N]) => ee(g, N)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = (e, t) => {
  const a = ue(
    ({ className: o, ...s }, i) => ee(Ne, {
      ref: i,
      iconNode: t,
      className: fe(
        `lucide-${Ee(le(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return a.displayName = le(e), a;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], me = oe("plus", Ce);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Ie = oe("refresh-cw", Te);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Me = oe("x", Oe);
function F(e) {
  switch (e) {
    case "online":
      return "focused";
    case "busy":
      return "thinking";
    case "starting":
      return "idle";
    case "degraded":
      return "stressed";
    case "error":
      return "sick";
    case "offline":
      return "sleeping";
    default:
      return "idle";
  }
}
function G(e, t, a) {
  if (a === "error" || a === "offline") return "incident-infirmary";
  if (e === "tytus-daemon") return "tytus-lab";
  if (e === "ail-gateway") return "remote-balcony";
  if (e === "mcp-http") return "mcp-library";
  if (t)
    try {
      const o = new URL(t).hostname.toLowerCase();
      if (o === "localhost" || o === "127.0.0.1" || o === "::1") return "local-workshop";
    } catch {
    }
  return e === "custom-health" ? "lobby" : "remote-balcony";
}
function W(e, t, a) {
  const o = {
    "tytus-daemon": { species: "robot", palette: "violet", accessory: "antenna", animation: "breathe" },
    "ail-gateway": { species: "hologram", palette: "cyan", accessory: "sparkles", animation: "scan" },
    "openai-compatible": { species: "hologram", palette: "cyan", accessory: "sparkles", animation: "scan" },
    "custom-health": { species: "drone", palette: "green", accessory: "shield", animation: "pulse" },
    "openhouse-probe": { species: "robot", palette: "silver", accessory: "sparkles", animation: "breathe" },
    "mcp-http": { species: "owl", palette: "amber", accessory: "book", animation: "breathe" }
  }, s = t === "busy" ? { animation: "typing" } : t === "starting" ? { palette: "amber", animation: "pulse" } : t === "degraded" ? { palette: "amber", animation: "scan" } : t === "error" ? { palette: "red", animation: "alarm" } : t === "offline" ? { species: "ghost", palette: "silver", animation: "sleep" } : {};
  return { ...o[e], ...s, ...a };
}
function q(e) {
  const t = String(e ?? "").toLowerCase();
  return ["ready", "running", "healthy", "ok", "online", "connected", "up"].includes(t) ? "online" : ["busy", "working", "executing", "writing", "researching", "syncing"].includes(t) ? "busy" : ["starting", "booting", "warming"].includes(t) ? "starting" : ["degraded", "warning", "warn"].includes(t) ? "degraded" : ["error", "failed", "unhealthy", "down"].includes(t) ? "error" : ["offline", "stopped", "idle-offline"].includes(t) ? "offline" : "unknown";
}
const Le = [
  /Bearer\s+[A-Za-z0-9._\-~+/]+=*/gi,
  /sk-[A-Za-z0-9_\-]{12,}/g,
  /gsk_[A-Za-z0-9_\-]{12,}/g,
  /AIza[0-9A-Za-z_\-]{20,}/g
], Re = /(api[_-]?key|token|secret|authorization)(["'\s:=]+)([A-Za-z0-9._\-~+/=]{8,})/gi;
function J(e) {
  let t = e instanceof Error ? e.message : String(e ?? "");
  for (const a of Le)
    t = t.replace(a, "[REDACTED]");
  return t = t.replace(Re, (a, o, s) => `${o}${s}[REDACTED]`), t;
}
function Z(e) {
  try {
    return new URL(e).host;
  } catch {
    return e.replace(/[?#].*$/, "");
  }
}
function z(e) {
  const t = e.trim().replace(/\/+$/, "");
  if (!t) throw new Error("Base URL is required.");
  const a = new URL(t), o = a.hostname.toLowerCase(), s = o === "localhost" || o === "127.0.0.1" || o === "[::1]" || o === "::1";
  if (a.protocol === "https:") return a.toString().replace(/\/+$/, "");
  if (a.protocol === "http:" && s) return a.toString().replace(/\/+$/, "");
  throw new Error("Only HTTPS and local HTTP endpoints are allowed in OpenHouse v1.");
}
function Y(e, t) {
  const a = (e || t).trim() || t;
  return a.startsWith("/") ? a : `/${a}`;
}
function P(e, t) {
  return `${e.replace(/\/+$/, "")}${Y(t, "/")}`;
}
function de(e, t) {
  const a = new Map(t.map((i) => [i.id, i])), o = /* @__PURE__ */ new Set(), s = [];
  for (const i of e) {
    const d = a.get(i.id), c = q(i.status);
    o.add(i.id), s.push({
      id: `tytus:${i.id}`,
      sourceId: "tytus-daemon",
      sourceKind: "tytus-daemon",
      displayName: He(i, d),
      status: c,
      mood: F(c),
      body: W("tytus-daemon", c),
      room: G("tytus-daemon", d?.publicUrl, c),
      endpointHost: d?.publicUrl ? Z(d.publicUrl) : void 0,
      capabilities: d?.kind === "ail" ? ["models", "chat"] : ["unknown"],
      lastSeenAt: Date.now(),
      raw: { agent: i, pod: d }
    });
  }
  for (const i of t) {
    if (o.has(i.id)) continue;
    const d = q(i.status), c = i.kind === "ail", y = c ? "ail-gateway" : "tytus-daemon";
    s.push({
      id: `tytus:${i.id}`,
      sourceId: y,
      sourceKind: y,
      displayName: c ? Pe(i, t) : `Tytus Pod ${i.id}`,
      status: d,
      mood: F(d),
      body: W(y, d),
      room: G(y, i.publicUrl, d),
      endpointHost: i.publicUrl ? Z(i.publicUrl) : void 0,
      capabilities: c ? ["models", "chat"] : ["unknown"],
      lastSeenAt: Date.now(),
      raw: { pod: i }
    });
  }
  return s;
}
function He(e, t) {
  const a = typeof e.meta?.name == "string" ? e.meta.name : void 0, o = typeof e.meta?.kind == "string" ? e.meta.kind : t?.kind;
  return a || (o ? `${o.toUpperCase()} ${e.id}` : `Tytus Pod ${e.id}`);
}
function Pe(e, t) {
  return t.filter((o) => o.kind === "ail").length <= 1 ? "AIL" : `AIL (${e.id})`;
}
const $e = 6e3;
async function ce(e, t) {
  const a = performance.now();
  try {
    const o = await Ue(e, t, $e), s = Math.max(0, Math.round(performance.now() - a)), i = o.status;
    return {
      id: o.agentId,
      sourceId: e.id,
      sourceKind: e.kind,
      displayName: o.displayName || e.name,
      status: i,
      mood: o.mood || F(i),
      body: W(e.kind, i, { ...e.body, ...o.body }),
      room: e.room || G(e.kind, e.baseUrl, i),
      endpointHost: Z(e.baseUrl),
      capabilities: o.capabilities.length ? o.capabilities : ["unknown"],
      latencyMs: o.latencyMs ?? s,
      lastSeenAt: i === "offline" ? void 0 : Date.now(),
      lastError: o.lastError,
      raw: o.raw
    };
  } catch (o) {
    const s = Ge(o), i = J(o);
    return {
      id: U(e),
      sourceId: e.id,
      sourceKind: e.kind,
      displayName: e.name,
      status: s,
      mood: F(s),
      body: W(e.kind, s, e.body),
      room: e.room || G(e.kind, e.baseUrl, s),
      endpointHost: Z(e.baseUrl),
      capabilities: ["unknown"],
      latencyMs: Math.max(0, Math.round(performance.now() - a)),
      lastError: i
    };
  }
}
async function ze(e, t) {
  const a = performance.now();
  try {
    const o = await t("/v1/models"), s = await o.text().catch(() => "");
    let i = ["models"];
    return (s.includes("chat") || s.includes("gpt") || s.includes("model")) && (i = ["models", "chat"]), {
      agentId: e,
      sourceId: "tytus-daemon",
      status: o.ok ? "online" : "degraded",
      latencyMs: Math.round(performance.now() - a),
      capabilities: i,
      lastError: o.ok ? void 0 : `HTTP ${o.status}`
    };
  } catch (o) {
    return {
      agentId: e,
      sourceId: "tytus-daemon",
      status: "error",
      latencyMs: Math.round(performance.now() - a),
      capabilities: ["unknown"],
      lastError: J(o)
    };
  }
}
async function Ue(e, t, a) {
  switch (e.kind) {
    case "openai-compatible":
      return De(e, t, a);
    case "custom-health":
      return Ke(e, a);
    case "openhouse-probe":
      return Be(e, a);
    case "mcp-http":
      return je(e, a);
    default:
      throw new Error(`Unsupported external source kind: ${e.kind}`);
  }
}
async function De(e, t, a) {
  const o = await $(P(z(e.baseUrl), "/v1/models"), e, t, a), s = await ae(o), i = Array.isArray(s.data) ? s.data.length : void 0;
  return {
    agentId: U(e),
    sourceId: e.id,
    status: o.ok ? "online" : o.status === 401 || o.status === 403 ? "degraded" : "error",
    latencyMs: void 0,
    capabilities: ["models", "chat"],
    lastError: o.ok ? void 0 : `HTTP ${o.status}`,
    raw: { modelCount: i }
  };
}
async function Ke(e, t) {
  const a = await $(P(z(e.baseUrl), Y(e.healthPath, "/health")), e, { bearerBySourceId: {} }, t), o = await ae(a), s = Fe(o, ["status", "state", "health"]), d = (typeof o.healthy == "boolean" ? o.healthy : void 0) === !1 ? "error" : s ? q(s) : a.ok ? "online" : "error";
  return {
    agentId: U(e),
    sourceId: e.id,
    status: d,
    capabilities: be(o, ["health"]),
    displayName: typeof o.name == "string" ? o.name : void 0,
    lastError: a.ok ? void 0 : `HTTP ${a.status}`,
    raw: ge(o)
  };
}
async function Be(e, t) {
  const a = await $(P(z(e.baseUrl), "/.well-known/openhouse-agent.json"), e, { bearerBySourceId: {} }, t), o = await ae(a), s = q(o.status ?? (a.ok ? "online" : "error")), i = {
    species: o.species,
    palette: o.palette,
    accessory: o.accessory
  };
  return {
    agentId: String(o.id || U(e)),
    sourceId: e.id,
    status: s,
    mood: typeof o.mood == "string" ? o.mood : void 0,
    displayName: typeof o.name == "string" ? o.name : e.name,
    capabilities: be(o, ["health"]),
    body: i,
    lastError: a.ok ? void 0 : `HTTP ${a.status}`,
    raw: ge(o)
  };
}
async function je(e, t) {
  const a = z(e.baseUrl);
  let o;
  try {
    o = await $(P(a, "/.well-known/mcp"), e, { bearerBySourceId: {} }, t);
  } catch {
    o = await $(P(a, Y(e.healthPath, "/health")), e, { bearerBySourceId: {} }, t);
  }
  return {
    agentId: U(e),
    sourceId: e.id,
    status: o.ok ? "online" : "degraded",
    capabilities: ["mcp", "tools"],
    lastError: o.ok ? void 0 : `HTTP ${o.status}`,
    raw: { protocol: "mcp-http-basic" }
  };
}
async function $(e, t, a, o) {
  const s = new AbortController(), i = window.setTimeout(() => s.abort(), o), d = new Headers({ Accept: "application/json" });
  if (t.authMode === "session-bearer") {
    const c = a.bearerBySourceId[t.id];
    c && d.set("Authorization", `Bearer ${c}`);
  }
  try {
    return await fetch(e, { method: "GET", headers: d, signal: s.signal, cache: "no-store" });
  } catch (c) {
    throw c instanceof DOMException && c.name === "AbortError" ? new Error("Probe timed out after 6s.") : c instanceof TypeError ? new Error("Network/CORS failure. If the endpoint is online, allow this Tytus origin or add a bridge.") : c;
  } finally {
    window.clearTimeout(i);
  }
}
async function ae(e) {
  const t = await e.text().catch(() => "");
  if (!t) return {};
  try {
    const a = JSON.parse(t);
    return a && typeof a == "object" ? a : { value: a };
  } catch {
    return { text: t.slice(0, 500) };
  }
}
function be(e, t) {
  const a = e.capabilities;
  if (!Array.isArray(a)) return t;
  const o = /* @__PURE__ */ new Set(["models", "chat", "tools", "files", "health", "mcp", "music", "unknown"]), s = a.map((i) => String(i).toLowerCase()).filter((i) => o.has(i));
  return s.length ? s : t;
}
function ge(e) {
  const t = {};
  for (const a of ["id", "name", "status", "state", "version", "capabilities", "healthy"])
    a in e && (t[a] = e[a]);
  return t;
}
function Fe(e, t) {
  for (const a of t) if (a in e) return e[a];
}
function U(e) {
  return `external:${e.id}`;
}
function Ge(e) {
  const t = J(e).toLowerCase();
  return t.includes("cors") || t.includes("timed out") ? "degraded" : t.includes("network") ? "offline" : "error";
}
const We = 100;
async function V(e) {
  try {
    return (await e.query("SELECT * FROM app_openhouse_sources ORDER BY created_at ASC")).map(Ve);
  } catch {
    return [];
  }
}
async function qe(e, t) {
  await e.run(
    `INSERT INTO app_openhouse_sources
      (id, kind, name, base_url, health_path, enabled, auth_mode, keychain_ref, body_json, room, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       kind=excluded.kind, name=excluded.name, base_url=excluded.base_url,
       health_path=excluded.health_path, enabled=excluded.enabled,
       auth_mode=excluded.auth_mode, keychain_ref=excluded.keychain_ref,
       body_json=excluded.body_json, room=excluded.room, updated_at=excluded.updated_at`,
    [
      t.id,
      t.kind,
      t.name,
      t.baseUrl,
      t.healthPath ?? null,
      t.enabled ? 1 : 0,
      t.authMode,
      t.keychainRef ?? null,
      JSON.stringify(t.body ?? {}),
      t.room ?? null,
      t.createdAt,
      t.updatedAt
    ]
  );
}
async function Ze(e, t) {
  await e.run("DELETE FROM app_openhouse_sources WHERE id = ?", [t]), await e.run("DELETE FROM app_openhouse_agents WHERE source_id = ?", [t]), await e.run("DELETE FROM app_openhouse_probe_history WHERE source_id = ?", [t]);
}
async function Je(e) {
  try {
    return (await e.query("SELECT * FROM app_openhouse_layout")).map((a) => ({ agentId: a.agent_id, room: a.room, x: a.x, y: a.y, pinned: !!a.pinned, updatedAt: a.updated_at }));
  } catch {
    return [];
  }
}
async function Ye(e, t) {
  await e.run(
    `INSERT OR REPLACE INTO app_openhouse_probe_history
      (id, agent_id, source_id, status, latency_ms, error, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [t.id, t.agentId, t.sourceId, t.status, t.latencyMs ?? null, t.error ? J(t.error) : null, t.createdAt]
  ), await e.run(
    `DELETE FROM app_openhouse_probe_history
      WHERE id NOT IN (SELECT id FROM app_openhouse_probe_history ORDER BY created_at DESC LIMIT ${We})`
  );
}
async function X(e, t) {
  try {
    return (t ? await e.query("SELECT * FROM app_openhouse_probe_history WHERE agent_id = ? ORDER BY created_at DESC LIMIT 20", [t]) : await e.query("SELECT * FROM app_openhouse_probe_history ORDER BY created_at DESC LIMIT 50")).map((o) => ({ id: o.id, agentId: o.agent_id, sourceId: o.source_id, status: o.status, latencyMs: o.latency_ms, error: o.error, createdAt: o.created_at }));
  } catch {
    return [];
  }
}
function Ve(e) {
  return {
    id: e.id,
    kind: e.kind,
    name: e.name,
    baseUrl: e.base_url,
    healthPath: e.health_path ?? void 0,
    enabled: !!e.enabled,
    authMode: e.auth_mode,
    keychainRef: e.keychain_ref,
    body: Xe(e.body_json),
    room: e.room,
    createdAt: e.created_at,
    updatedAt: e.updated_at
  };
}
function Xe(e) {
  try {
    const t = JSON.parse(e);
    return t && typeof t == "object" && !Array.isArray(t) ? t : {};
  } catch {
    return {};
  }
}
const Qe = "https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@v1.1.2/assets/star-office/", H = (e) => `${Qe}${e}`, O = [
  { x: 22, y: 61, scale: 1.35, sprite: "guestagent1.webp", room: "carpet desk" },
  { x: 68, y: 30, scale: 1.18, sprite: "guestagent2.webp", labelDx: -2, room: "server room" },
  { x: 50, y: 63, scale: 1.12, sprite: "guest_anim_2.webp", room: "coffee table" },
  { x: 33, y: 79, scale: 1.18, sprite: "star-idle.gif", room: "entry walk" },
  { x: 40, y: 52, scale: 1.08, sprite: "guest_anim_1.webp", room: "remote balcony" },
  { x: 82, y: 50, scale: 1.05, sprite: "guest_anim_3.webp", room: "library wall" },
  { x: 15, y: 35, scale: 1.05, sprite: "star-working.gif", room: "bookshelf" },
  { x: 58, y: 43, scale: 1, sprite: "guest_anim_2.webp", room: "sofa" }
], et = {
  "tytus-daemon": [0, 1, 2, 3],
  "ail-gateway": [4],
  "openai-compatible": [5, 4],
  "mcp-http": [5],
  "custom-health": [2, 6],
  "openhouse-probe": [3, 6, 7]
};
function tt({ agents: e, selectedId: t, onSelect: a }) {
  const o = e.slice(0, O.length), s = Math.max(0, e.length - O.length), i = /* @__PURE__ */ new Set();
  return /* @__PURE__ */ n("div", { className: "oh-office-frame", "aria-label": "OpenHouse pixel office", children: /* @__PURE__ */ l("div", { className: "oh-office-world", children: [
    /* @__PURE__ */ n("img", { className: "oh-office-bg", src: H("office_bg.webp"), alt: "pixel office", draggable: !1 }),
    /* @__PURE__ */ n("img", { className: "oh-office-prop oh-server", src: H("serverroom.gif"), alt: "server room", draggable: !1 }),
    /* @__PURE__ */ n("img", { className: "oh-office-prop oh-coffee", src: H("coffee-machine.gif"), alt: "coffee machine", draggable: !1 }),
    /* @__PURE__ */ n("img", { className: "oh-office-prop oh-sofa", src: H("sofa-idle.webp"), alt: "sofa", draggable: !1 }),
    o.map((d, c) => {
      const y = ot(d, c, i), g = O[y] ?? O[0];
      return /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          className: `oh-office-agent ${d.id === t ? "selected" : ""} ${d.status} ${d.sourceKind === "ail-gateway" ? "ail" : ""}`,
          style: { left: `${g.x}%`, top: `${g.y}%`, "--agent-scale": g.scale },
          onClick: () => a(d.id),
          title: `${d.displayName} · ${d.status} · ${g.room}`,
          children: [
            /* @__PURE__ */ n("span", { className: "oh-agent-label", style: { transform: `translateX(${g.labelDx ?? 0}px)` }, children: rt(d.displayName) }),
            /* @__PURE__ */ n("span", { className: "oh-bubble", children: nt(d) }),
            /* @__PURE__ */ n("img", { src: H(at(d, g.sprite)), alt: "", draggable: !1 }),
            /* @__PURE__ */ n("span", { className: "oh-status-dot" })
          ]
        },
        d.id
      );
    }),
    s > 0 && /* @__PURE__ */ l("div", { className: "oh-overflow-badge", children: [
      "+",
      s,
      " more agents in the office"
    ] }),
    /* @__PURE__ */ l("div", { className: "oh-office-name", children: [
      /* @__PURE__ */ n("span", { children: "★" }),
      " OpenHouse Agent Office ",
      /* @__PURE__ */ n("span", { children: "★" })
    ] })
  ] }) });
}
function ot(e, t, a) {
  const s = (et[e.sourceKind] ?? []).find((i) => !a.has(i)) ?? O.findIndex((i, d) => !a.has(d)) ?? t % O.length;
  return a.add(s), s;
}
function at(e, t) {
  return e.sourceKind === "ail-gateway" ? "guest_anim_1.webp" : e.status === "busy" || e.mood === "focused" || e.mood === "thinking" ? "star-working.gif" : e.status === "error" || e.status === "offline" || e.mood === "sick" ? "guestagent2.webp" : e.sourceKind === "mcp-http" ? "guest_anim_3.webp" : e.sourceKind === "openai-compatible" ? "guest_anim_1.webp" : t;
}
function nt(e) {
  return e.sourceKind === "ail-gateway" ? "models" : e.status === "online" ? "ready" : e.status === "busy" ? "working" : e.status === "offline" ? "offline" : e.status === "error" ? "bug" : e.status === "degraded" ? "check me" : "waiting";
}
function rt(e) {
  return e.length <= 14 ? e : `${e.slice(0, 13)}…`;
}
const it = [
  { value: "openai-compatible", label: "OpenAI-compatible", help: "GET /v1/models" },
  { value: "custom-health", label: "Custom health", help: "GET /health or custom path" },
  { value: "openhouse-probe", label: "OpenHouse probe", help: "GET /.well-known/openhouse-agent.json" },
  { value: "mcp-http", label: "MCP HTTP/SSE", help: "Basic well-known/health probe" }
];
function st({ open: e, onClose: t, onAdd: a }) {
  const [o, s] = m("openai-compatible"), [i, d] = m(""), [c, y] = m(""), [g, N] = m("/health"), [_, v] = m("none"), [S, D] = m(""), [M, L] = m(null);
  return e ? /* @__PURE__ */ n("div", { className: "oh-modal-backdrop", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ l("form", { className: "oh-modal", onSubmit: (h) => {
    h.preventDefault();
    try {
      const k = z(c), C = Date.now(), x = `src-${C.toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
      a({
        id: x,
        kind: o,
        name: i.trim() || lt(k),
        baseUrl: k,
        healthPath: o === "custom-health" || o === "mcp-http" ? Y(g, "/health") : void 0,
        enabled: !0,
        authMode: _,
        createdAt: C,
        updatedAt: C
      }, _ === "session-bearer" ? S : void 0), d(""), y(""), D(""), v("none"), L(null), t();
    } catch (k) {
      L(k instanceof Error ? k.message : String(k));
    }
  }, children: [
    /* @__PURE__ */ l("div", { className: "oh-modal-head", children: [
      /* @__PURE__ */ n("h2", { children: "Add agent resident" }),
      /* @__PURE__ */ n("button", { type: "button", onClick: t, children: /* @__PURE__ */ n(Me, { size: 18 }) })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Connector type",
      /* @__PURE__ */ n("select", { value: o, onChange: (h) => s(h.target.value), children: it.map((h) => /* @__PURE__ */ l("option", { value: h.value, children: [
        h.label,
        " — ",
        h.help
      ] }, h.value)) })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Name",
      /* @__PURE__ */ n("input", { value: i, onChange: (h) => d(h.target.value), placeholder: "Agent Studio Local" })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Base URL",
      /* @__PURE__ */ n("input", { value: c, onChange: (h) => y(h.target.value), placeholder: "https://agent.example.com or http://localhost:8080", required: !0 })
    ] }),
    (o === "custom-health" || o === "mcp-http") && /* @__PURE__ */ l("label", { children: [
      "Health path",
      /* @__PURE__ */ n("input", { value: g, onChange: (h) => N(h.target.value), placeholder: "/health" })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Auth mode",
      /* @__PURE__ */ l("select", { value: _, onChange: (h) => v(h.target.value), children: [
        /* @__PURE__ */ n("option", { value: "none", children: "None" }),
        /* @__PURE__ */ n("option", { value: "session-bearer", children: "Session bearer (not persisted)" })
      ] })
    ] }),
    _ === "session-bearer" && /* @__PURE__ */ l("label", { children: [
      "Session bearer",
      /* @__PURE__ */ n("input", { type: "password", value: S, onChange: (h) => D(h.target.value), placeholder: "Stored in memory only" })
    ] }),
    M && /* @__PURE__ */ n("p", { className: "oh-form-error", children: M }),
    /* @__PURE__ */ l("footer", { children: [
      /* @__PURE__ */ n("button", { type: "button", onClick: t, children: "Cancel" }),
      /* @__PURE__ */ l("button", { className: "primary", children: [
        /* @__PURE__ */ n(me, { size: 16 }),
        "Add resident"
      ] })
    ] })
  ] }) }) : null;
}
function lt(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "External agent";
  }
}
const dt = `
@font-face {
  font-family: ArkPixel;
  src: url('https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@v1.1.2/assets/star-office/fonts/ark-pixel-12px-proportional-latin.ttf.woff2') format('woff2');
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
  background-image: url('https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@v1.1.2/assets/star-office/memo-bg.webp');
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
function ct({ host: e }) {
  const [t] = m(() => e.storage.current()), [a, o] = m(() => de(e.daemon.state.agents, e.daemon.state.included)), [s, i] = m([]), [d, c] = m([]), [y, g] = m([]), [N, _] = m(), [v, S] = m("all"), [D, M] = m(!1), [L, h] = m(!1), [k, C] = m(null), [x, ne] = m({ bearerBySourceId: {} });
  j(() => {
    let r = !0;
    return Promise.all([V(t), Je(t), X(t)]).then(([f, , u]) => {
      r && (i(f), g(u));
    }), () => {
      r = !1;
    };
  }, [t]), j(() => e.daemon.onStateChange((r) => {
    o(de(r.agents, r.included));
  }), [e]);
  const K = I(async (r = s, f = x) => {
    h(!0);
    try {
      const u = r.filter((A) => A.enabled), b = [];
      for (const A of pt(u, 4)) {
        const E = await Promise.all(A.map((T) => ce(T, f)));
        b.push(...E), c([...b]);
        for (const T of E) await Q(t, T);
      }
      c(b), g(await X(t));
    } finally {
      h(!1);
    }
  }, [t, x, s]);
  j(() => {
    s.length && K(s, x);
  }, [s.length]);
  const w = se(() => [...a, ...d], [a, d]), R = se(() => v === "all" ? w : v === "issues" ? w.filter(te) : v === "online" ? w.filter((r) => r.status === "online" || r.status === "busy") : w.filter((r) => r.sourceKind === v), [w, v]), p = w.find((r) => r.id === N) ?? R[0] ?? w[0], re = y.filter((r) => r.agentId === p?.id).slice(-4).reverse(), ye = p ? ft(p) : [];
  j(() => {
    !N && R[0] && _(R[0].id);
  }, [N, R]);
  const xe = I((r, f) => {
    const u = f ? { bearerBySourceId: { ...x.bearerBySourceId, [r.id]: f } } : x;
    ne(u), qe(t, r).then(async () => {
      const b = await V(t);
      i(b), await K(b, u), e.notifications.notify({ title: "OpenHouse resident added", body: `${r.name} moved into the office.`, level: "success" });
    });
  }, [t, e.notifications, K, x]), we = I((r) => {
    Ze(t, r).then(async () => {
      i(await V(t)), c((f) => f.filter((u) => u.sourceId !== r)), ne((f) => {
        const u = { ...f.bearerBySourceId };
        return delete u[r], { bearerBySourceId: u };
      });
    });
  }, [t]), ie = I((r) => {
    C(r.id), (async () => {
      if (r.sourceKind === "tytus-daemon" || r.sourceKind === "ail-gateway") {
        const u = r.id.replace(/^tytus:/, ""), b = await ze(r.id, (E) => e.daemon.callPodEndpoint(u, E)), A = { ...r, status: b.status, latencyMs: b.latencyMs, lastError: b.lastError, capabilities: b.capabilities };
        o((E) => E.map((T) => T.id === r.id ? A : T)), await Q(t, A);
      } else {
        const u = s.find((b) => b.id === r.sourceId);
        if (u) {
          const b = await ce(u, x);
          c((A) => A.map((E) => E.id === r.id ? b : E)), await Q(t, b);
        }
      }
      g(await X(t)), C(null);
    })().catch((u) => {
      e.notifications.notify({ title: "OpenHouse probe failed", body: u instanceof Error ? u.message : String(u), level: "error" }), C(null);
    });
  }, [t, e.daemon, e.notifications, x, s]), ve = I((r) => {
    const f = JSON.stringify({ id: r.id, source: r.sourceKind, status: r.status, room: r.room, endpoint: r.endpointHost, capabilities: r.capabilities, lastError: r.lastError, raw: r.raw }, null, 2);
    navigator.clipboard?.writeText(f).then(() => e.notifications.notify({ title: "OpenHouse diagnostic copied", body: r.displayName, level: "success" }));
  }, [e.notifications]), ke = I((r) => {
    const f = mt(r);
    navigator.clipboard?.writeText(f).then(() => e.notifications.notify({ title: "OpenHouse agent contract copied", body: r.displayName, level: "success" }));
  }, [e.notifications]), B = ht(w);
  return /* @__PURE__ */ l("div", { className: "oh-root", children: [
    /* @__PURE__ */ n("style", { children: dt }),
    /* @__PURE__ */ l("div", { className: "oh-top", children: [
      /* @__PURE__ */ l("section", { className: "oh-game-column", children: [
        /* @__PURE__ */ n(tt, { agents: R, savedLayout: [], selectedId: p?.id, onSelect: _ }),
        /* @__PURE__ */ l("nav", { className: "oh-toolbar", "aria-label": "OpenHouse HUD", children: [
          /* @__PURE__ */ n("label", { children: "View" }),
          /* @__PURE__ */ l("select", { value: v, onChange: (r) => S(r.target.value), children: [
            /* @__PURE__ */ n("option", { value: "all", children: "All residents" }),
            /* @__PURE__ */ n("option", { value: "tytus-daemon", children: "Tytus Pods" }),
            /* @__PURE__ */ n("option", { value: "ail-gateway", children: "AIL Gateway" }),
            /* @__PURE__ */ n("option", { value: "openai-compatible", children: "OpenAI-compatible" }),
            /* @__PURE__ */ n("option", { value: "custom-health", children: "Health checks" }),
            /* @__PURE__ */ n("option", { value: "openhouse-probe", children: "OpenHouse agents" }),
            /* @__PURE__ */ n("option", { value: "mcp-http", children: "MCP Library" }),
            /* @__PURE__ */ n("option", { value: "online", children: "Online" }),
            /* @__PURE__ */ n("option", { value: "issues", children: "Issues" })
          ] }),
          /* @__PURE__ */ l("button", { type: "button", onClick: () => M(!0), children: [
            /* @__PURE__ */ n(me, { size: 14 }),
            " Add agent"
          ] }),
          /* @__PURE__ */ l("button", { type: "button", onClick: () => void K(), disabled: L, children: [
            /* @__PURE__ */ n(Ie, { size: 14 }),
            " ",
            L ? "Refreshing…" : "Refresh external"
          ] }),
          /* @__PURE__ */ n("span", { className: "spacer" }),
          /* @__PURE__ */ l("span", { className: "counter", children: [
            w.length,
            " residents"
          ] }),
          /* @__PURE__ */ l("span", { className: "counter", children: [
            B.online,
            " online"
          ] }),
          /* @__PURE__ */ l("span", { className: "counter", children: [
            B.issues,
            " issues"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l("aside", { className: "oh-side", children: [
        /* @__PURE__ */ l("div", { className: "oh-side-head", children: [
          /* @__PURE__ */ n("p", { children: "OpenHouse" }),
          /* @__PURE__ */ n("h2", { children: p?.displayName ?? "No resident selected" })
        ] }),
        p ? /* @__PURE__ */ l("div", { className: "oh-side-body", children: [
          /* @__PURE__ */ l("div", { className: `oh-side-card ${te(p) ? "oh-error" : ""}`, children: [
            /* @__PURE__ */ n("h3", { children: p.status.toUpperCase() }),
            /* @__PURE__ */ l("dl", { children: [
              /* @__PURE__ */ n("dt", { children: "Room" }),
              /* @__PURE__ */ n("dd", { children: ut(p.room) }),
              /* @__PURE__ */ n("dt", { children: "Source" }),
              /* @__PURE__ */ n("dd", { children: pe(p.sourceKind) }),
              /* @__PURE__ */ n("dt", { children: "Endpoint" }),
              /* @__PURE__ */ n("dd", { children: p.endpointHost ?? "—" }),
              /* @__PURE__ */ n("dt", { children: "Latency" }),
              /* @__PURE__ */ n("dd", { children: p.latencyMs ? `${p.latencyMs}ms` : "—" }),
              /* @__PURE__ */ n("dt", { children: "Last seen" }),
              /* @__PURE__ */ n("dd", { children: p.lastSeenAt ? new Date(p.lastSeenAt).toLocaleTimeString() : "—" })
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "oh-side-card", children: [
            /* @__PURE__ */ n("h3", { children: "Can do" }),
            /* @__PURE__ */ n("div", { className: "oh-abilities", children: ye.map((r) => /* @__PURE__ */ l("div", { className: "oh-ability", children: [
              /* @__PURE__ */ n("strong", { children: r.title }),
              /* @__PURE__ */ n("span", { children: r.body })
            ] }, r.title)) })
          ] }),
          /* @__PURE__ */ l("div", { className: "oh-side-card", children: [
            /* @__PURE__ */ n("h3", { children: "Capabilities" }),
            /* @__PURE__ */ n("div", { className: "oh-caps", children: he(p.capabilities).map((r) => /* @__PURE__ */ n("span", { children: r }, r)) })
          ] }),
          p.lastError && /* @__PURE__ */ l("div", { className: "oh-side-card oh-error", children: [
            /* @__PURE__ */ n("h3", { children: "Error" }),
            /* @__PURE__ */ n("p", { children: p.lastError })
          ] }),
          /* @__PURE__ */ l("div", { className: "oh-actions", children: [
            /* @__PURE__ */ n("button", { type: "button", onClick: () => ie(p), disabled: k === p.id, children: k === p.id ? "Testing…" : "Test connection" }),
            /* @__PURE__ */ n("button", { type: "button", onClick: () => ke(p), children: "Copy agent contract" }),
            /* @__PURE__ */ n("button", { type: "button", onClick: () => ve(p), children: "Copy diagnostic" }),
            p.sourceKind !== "tytus-daemon" && p.sourceKind !== "ail-gateway" && /* @__PURE__ */ n("button", { type: "button", onClick: () => we(p.sourceId), children: "Remove source" })
          ] }),
          !!re.length && /* @__PURE__ */ l("div", { className: "oh-side-card oh-history", children: [
            /* @__PURE__ */ n("h3", { children: "Probe history" }),
            re.map((r) => /* @__PURE__ */ l("p", { children: [
              /* @__PURE__ */ n("b", { children: r.status }),
              " ",
              r.latencyMs ? `${r.latencyMs}ms` : "",
              " ",
              /* @__PURE__ */ n("span", { children: new Date(r.createdAt).toLocaleTimeString() })
            ] }, r.id))
          ] })
        ] }) : /* @__PURE__ */ n("div", { className: "oh-side-body", children: /* @__PURE__ */ n("div", { className: "oh-side-card", children: "Add third-party agents or connect Tytus pods to populate the office." }) })
      ] })
    ] }),
    /* @__PURE__ */ l("section", { className: "oh-bottom", children: [
      /* @__PURE__ */ l("article", { className: "oh-panel oh-memo", children: [
        /* @__PURE__ */ n("div", { className: "oh-panel-title", children: "— Today Memo —" }),
        /* @__PURE__ */ n("p", { children: B.issues ? `${B.issues} residents need attention. Start with the red room.` : "Office calm. Agents have bodies, rooms, status, and action contracts." })
      ] }),
      /* @__PURE__ */ l("article", { className: "oh-panel oh-playbook", children: [
        /* @__PURE__ */ n("div", { className: "oh-panel-title", children: "Agent Actions" }),
        /* @__PURE__ */ l("div", { className: "oh-status-grid", children: [
          /* @__PURE__ */ n("button", { onClick: () => S("all"), children: "All" }),
          /* @__PURE__ */ n("button", { onClick: () => S("online"), children: "Working" }),
          /* @__PURE__ */ n("button", { onClick: () => S("issues"), children: "Alert" }),
          /* @__PURE__ */ n("button", { onClick: () => S("ail-gateway"), children: "AIL" })
        ] }),
        /* @__PURE__ */ n("p", { children: "Original Star-Office protocol kept: join, push status, leave, memo, probe." })
      ] }),
      /* @__PURE__ */ l("article", { className: "oh-panel", children: [
        /* @__PURE__ */ n("div", { className: "oh-panel-title", children: "— Visitor List —" }),
        /* @__PURE__ */ n("div", { className: "oh-visitor-list", children: w.map((r) => /* @__PURE__ */ l("div", { className: "oh-visitor", children: [
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ n("strong", { children: r.displayName }),
            /* @__PURE__ */ l("small", { children: [
              r.status,
              " · ",
              pe(r.sourceKind)
            ] }),
            /* @__PURE__ */ n("div", { className: "oh-mini-caps", children: he(r.capabilities).slice(0, 3).map((f) => /* @__PURE__ */ n("span", { children: f }, f)) })
          ] }),
          /* @__PURE__ */ n("button", { onClick: () => _(r.id), children: "focus" }),
          /* @__PURE__ */ n("button", { onClick: () => ie(r), children: "probe" })
        ] }, r.id)) })
      ] })
    ] }),
    /* @__PURE__ */ n(st, { open: D, onClose: () => M(!1), onAdd: xe })
  ] });
}
async function Q(e, t) {
  await Ye(e, {
    id: `probe-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    agentId: t.id,
    sourceId: t.sourceId,
    status: t.status,
    latencyMs: t.latencyMs ?? null,
    error: t.lastError ?? null,
    createdAt: Date.now()
  });
}
function pt(e, t) {
  const a = [];
  for (let o = 0; o < e.length; o += t) a.push(e.slice(o, o + t));
  return a;
}
function te(e) {
  return e.status === "error" || e.status === "offline" || e.status === "degraded";
}
function ht(e) {
  const t = e.filter(te).length, a = e.filter((o) => o.status === "online" || o.status === "busy").length;
  return { issues: t, online: a };
}
function ut(e) {
  return e.replace(/-/g, " ");
}
function pe(e) {
  switch (e) {
    case "tytus-daemon":
      return "Tytus pod";
    case "ail-gateway":
      return "AIL gateway";
    case "openai-compatible":
      return "OpenAI-compatible";
    case "custom-health":
      return "Health service";
    case "openhouse-probe":
      return "OpenHouse agent";
    case "mcp-http":
      return "MCP HTTP/SSE";
  }
}
function he(e) {
  const t = e.map((a) => {
    switch (a) {
      case "models":
        return "models";
      case "chat":
        return "chat";
      case "tools":
        return "tools";
      case "files":
        return "files";
      case "health":
        return "health";
      case "mcp":
        return "mcp";
      case "music":
        return "music";
      default:
        return "unknown";
    }
  });
  return t.length ? Array.from(new Set(t)) : ["unknown"];
}
function ft(e) {
  const t = {
    "tytus-daemon": [
      { title: "Run Tytus work", body: "Native pod resident. OpenHouse can focus it, probe it, and expose daemon status." },
      { title: "Pod endpoint", body: "Uses Tytus pod calls for live checks such as /v1/models when available." }
    ],
    "ail-gateway": [
      { title: "Model gateway", body: "AIL is not a pod. It is the OpenAI-style gateway for /v1/models and chat routes." },
      { title: "Provider routing", body: "Good place for model/provider capability checks before agents use it." }
    ],
    "openai-compatible": [
      { title: "List models", body: "Probes GET /v1/models and shows online/degraded/error state." },
      { title: "Chat-capable", body: "Represents an LLM endpoint agents can use for chat/completions style work." }
    ],
    "custom-health": [
      { title: "Health heartbeat", body: "Tracks any service with /health or a custom JSON health path." },
      { title: "Ops monitor", body: "Turns backend status into a visible room/body/status in the office." }
    ],
    "openhouse-probe": [
      { title: "Resident card", body: "Reads /.well-known/openhouse-agent.json for name, body, mood, and capabilities." },
      { title: "Third-agent native", body: "Best contract for OpenClaw, Hermes, Lope, Claude, OpenCode, or custom workers." }
    ],
    "mcp-http": [
      { title: "Tool library", body: "Represents MCP servers that expose tools, resources, and prompts." },
      { title: "Probe bridge", body: "Checks /.well-known/mcp or health fallback so tool servers can live in the house." }
    ]
  }, a = [], o = new Set(e.capabilities);
  return o.has("tools") && a.push({ title: "Use tools", body: "Can expose callable tool actions to connected agents." }), o.has("files") && a.push({ title: "Use files", body: "Can work with files/workspaces if the source grants access." }), o.has("mcp") && a.push({ title: "MCP protocol", body: "Can advertise MCP resources/prompts/tools for agent workflows." }), o.has("music") && a.push({ title: "Music/media", body: "Can support media/music generation flows when the endpoint exposes it." }), [...t[e.sourceKind], ...a].slice(0, 5);
}
function mt(e) {
  return e.sourceKind === "openhouse-probe" ? `GET /.well-known/openhouse-agent.json
{
  "id": "${e.id}",
  "name": "${e.displayName}",
  "status": "online",
  "capabilities": ["health", "tools"],
  "mood": "focused"
}` : e.sourceKind === "openai-compatible" || e.sourceKind === "ail-gateway" ? `OpenAI-compatible contract:
GET /v1/models
POST /v1/chat/completions (for workers that need chat)` : e.sourceKind === "mcp-http" ? `MCP contract:
GET /.well-known/mcp or GET /health
Expose tools/resources/prompts via MCP HTTP/SSE.` : e.sourceKind === "custom-health" ? `Health contract:
GET /health -> { "status": "ok", "name": "agent-name", "capabilities": ["health"] }` : `Tytus pod contract:
host.daemon.state.agents + host.daemon.state.included
host.daemon.callPodEndpoint(podId, path) for live checks.`;
}
function yt(e) {
  return e.host.storage.current().migrate("migrations/"), function() {
    return /* @__PURE__ */ n(ct, { host: e.host });
  };
}
export {
  yt as default
};
//# sourceMappingURL=index.js.map
