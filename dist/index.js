import { jsx as n, jsxs as l } from "react/jsx-runtime";
import { forwardRef as ce, createElement as ee, useState as f, useEffect as j, useCallback as L, useMemo as ie } from "react";
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xe = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, o) => o ? o.toUpperCase() : a.toLowerCase()
), se = (e) => {
  const t = xe(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, pe = (...e) => e.filter((t, a, o) => !!t && t.trim() !== "" && o.indexOf(t) === a).join(" ").trim(), we = (e) => {
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
var ve = {
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
const ke = ce(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: r,
    iconNode: c,
    ...d
  }, g) => ee(
    "svg",
    {
      ref: g,
      ...ve,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(a) * 24 / Number(t) : a,
      className: pe("lucide", s),
      ...!r && !we(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...c.map(([_, A]) => ee(_, A)),
      ...Array.isArray(r) ? r : [r]
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
  const a = ce(
    ({ className: o, ...s }, r) => ee(ke, {
      ref: r,
      iconNode: t,
      className: pe(
        `lucide-${ye(se(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return a.displayName = se(e), a;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], he = oe("plus", _e);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Se = oe("refresh-cw", Ee);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ne = oe("x", Ae);
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
function W(e, t, a) {
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
function q(e, t, a) {
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
function Z(e) {
  const t = String(e ?? "").toLowerCase();
  return ["ready", "running", "healthy", "ok", "online", "connected", "up"].includes(t) ? "online" : ["busy", "working", "executing", "writing", "researching", "syncing"].includes(t) ? "busy" : ["starting", "booting", "warming"].includes(t) ? "starting" : ["degraded", "warning", "warn"].includes(t) ? "degraded" : ["error", "failed", "unhealthy", "down"].includes(t) ? "error" : ["offline", "stopped", "idle-offline"].includes(t) ? "offline" : "unknown";
}
const Ce = [
  /Bearer\s+[A-Za-z0-9._\-~+/]+=*/gi,
  /sk-[A-Za-z0-9_\-]{12,}/g,
  /gsk_[A-Za-z0-9_\-]{12,}/g,
  /AIza[0-9A-Za-z_\-]{20,}/g
], Te = /(api[_-]?key|token|secret|authorization)(["'\s:=]+)([A-Za-z0-9._\-~+/=]{8,})/gi;
function G(e) {
  let t = e instanceof Error ? e.message : String(e ?? "");
  for (const a of Ce)
    t = t.replace(a, "[REDACTED]");
  return t = t.replace(Te, (a, o, s) => `${o}${s}[REDACTED]`), t;
}
function Y(e) {
  try {
    return new URL(e).host;
  } catch {
    return e.replace(/[?#].*$/, "");
  }
}
function P(e) {
  const t = e.trim().replace(/\/+$/, "");
  if (!t) throw new Error("Base URL is required.");
  const a = new URL(t), o = a.hostname.toLowerCase(), s = o === "localhost" || o === "127.0.0.1" || o === "[::1]" || o === "::1";
  if (a.protocol === "https:") return a.toString().replace(/\/+$/, "");
  if (a.protocol === "http:" && s) return a.toString().replace(/\/+$/, "");
  throw new Error("Only HTTPS and local HTTP endpoints are allowed in OpenHouse v1.");
}
function J(e, t) {
  const a = (e || t).trim() || t;
  return a.startsWith("/") ? a : `/${a}`;
}
function H(e, t) {
  return `${e.replace(/\/+$/, "")}${J(t, "/")}`;
}
function le(e, t) {
  const a = new Map(t.map((r) => [r.id, r])), o = /* @__PURE__ */ new Set(), s = [];
  for (const r of e) {
    const c = a.get(r.id), d = Z(r.status);
    o.add(r.id), s.push({
      id: `tytus:${r.id}`,
      sourceId: "tytus-daemon",
      sourceKind: "tytus-daemon",
      displayName: Ie(r, c),
      status: d,
      mood: F(d),
      body: q("tytus-daemon", d),
      room: W("tytus-daemon", c?.publicUrl, d),
      endpointHost: c?.publicUrl ? Y(c.publicUrl) : void 0,
      capabilities: c?.kind === "ail" ? ["models", "chat"] : ["unknown"],
      lastSeenAt: Date.now(),
      raw: { agent: r, pod: c }
    });
  }
  for (const r of t) {
    if (o.has(r.id)) continue;
    const c = Z(r.status), d = r.kind === "ail", g = d ? "ail-gateway" : "tytus-daemon";
    s.push({
      id: `tytus:${r.id}`,
      sourceId: g,
      sourceKind: g,
      displayName: d ? Oe(r, t) : `Tytus Pod ${r.id}`,
      status: c,
      mood: F(c),
      body: q(g, c),
      room: W(g, r.publicUrl, c),
      endpointHost: r.publicUrl ? Y(r.publicUrl) : void 0,
      capabilities: d ? ["models", "chat"] : ["unknown"],
      lastSeenAt: Date.now(),
      raw: { pod: r }
    });
  }
  return s;
}
function Ie(e, t) {
  const a = typeof e.meta?.name == "string" ? e.meta.name : void 0, o = typeof e.meta?.kind == "string" ? e.meta.kind : t?.kind;
  return a || (o ? `${o.toUpperCase()} ${e.id}` : `Tytus Pod ${e.id}`);
}
function Oe(e, t) {
  return t.filter((o) => o.kind === "ail").length <= 1 ? "AIL" : `AIL (${e.id})`;
}
const Me = 6e3;
async function de(e, t) {
  const a = performance.now();
  try {
    const o = await Le(e, t, Me), s = Math.max(0, Math.round(performance.now() - a)), r = o.status;
    return {
      id: o.agentId,
      sourceId: e.id,
      sourceKind: e.kind,
      displayName: o.displayName || e.name,
      status: r,
      mood: o.mood || F(r),
      body: q(e.kind, r, { ...e.body, ...o.body }),
      room: e.room || W(e.kind, e.baseUrl, r),
      endpointHost: Y(e.baseUrl),
      capabilities: o.capabilities.length ? o.capabilities : ["unknown"],
      latencyMs: o.latencyMs ?? s,
      lastSeenAt: r === "offline" ? void 0 : Date.now(),
      lastError: o.lastError,
      raw: o.raw
    };
  } catch (o) {
    const s = Ue(o), r = G(o);
    return {
      id: D(e),
      sourceId: e.id,
      sourceKind: e.kind,
      displayName: e.name,
      status: s,
      mood: F(s),
      body: q(e.kind, s, e.body),
      room: e.room || W(e.kind, e.baseUrl, s),
      endpointHost: Y(e.baseUrl),
      capabilities: ["unknown"],
      latencyMs: Math.max(0, Math.round(performance.now() - a)),
      lastError: r
    };
  }
}
async function Re(e, t) {
  const a = performance.now();
  try {
    const o = await t("/v1/models"), s = await o.text().catch(() => "");
    let r = ["models"];
    return (s.includes("chat") || s.includes("gpt") || s.includes("model")) && (r = ["models", "chat"]), {
      agentId: e,
      sourceId: "tytus-daemon",
      status: o.ok ? "online" : "degraded",
      latencyMs: Math.round(performance.now() - a),
      capabilities: r,
      lastError: o.ok ? void 0 : `HTTP ${o.status}`
    };
  } catch (o) {
    return {
      agentId: e,
      sourceId: "tytus-daemon",
      status: "error",
      latencyMs: Math.round(performance.now() - a),
      capabilities: ["unknown"],
      lastError: G(o)
    };
  }
}
async function Le(e, t, a) {
  switch (e.kind) {
    case "openai-compatible":
      return $e(e, t, a);
    case "custom-health":
      return He(e, a);
    case "openhouse-probe":
      return ze(e, a);
    case "mcp-http":
      return Pe(e, a);
    default:
      throw new Error(`Unsupported external source kind: ${e.kind}`);
  }
}
async function $e(e, t, a) {
  const o = await z(H(P(e.baseUrl), "/v1/models"), e, t, a), s = await ae(o), r = Array.isArray(s.data) ? s.data.length : void 0;
  return {
    agentId: D(e),
    sourceId: e.id,
    status: o.ok ? "online" : o.status === 401 || o.status === 403 ? "degraded" : "error",
    latencyMs: void 0,
    capabilities: ["models", "chat"],
    lastError: o.ok ? void 0 : `HTTP ${o.status}`,
    raw: { modelCount: r }
  };
}
async function He(e, t) {
  const a = await z(H(P(e.baseUrl), J(e.healthPath, "/health")), e, { bearerBySourceId: {} }, t), o = await ae(a), s = De(o, ["status", "state", "health"]), c = (typeof o.healthy == "boolean" ? o.healthy : void 0) === !1 ? "error" : s ? Z(s) : a.ok ? "online" : "error";
  return {
    agentId: D(e),
    sourceId: e.id,
    status: c,
    capabilities: ue(o, ["health"]),
    displayName: typeof o.name == "string" ? o.name : void 0,
    lastError: a.ok ? void 0 : `HTTP ${a.status}`,
    raw: fe(o)
  };
}
async function ze(e, t) {
  const a = await z(H(P(e.baseUrl), "/.well-known/openhouse-agent.json"), e, { bearerBySourceId: {} }, t), o = await ae(a), s = Z(o.status ?? (a.ok ? "online" : "error")), r = {
    species: o.species,
    palette: o.palette,
    accessory: o.accessory
  };
  return {
    agentId: String(o.id || D(e)),
    sourceId: e.id,
    status: s,
    mood: typeof o.mood == "string" ? o.mood : void 0,
    displayName: typeof o.name == "string" ? o.name : e.name,
    capabilities: ue(o, ["health"]),
    body: r,
    lastError: a.ok ? void 0 : `HTTP ${a.status}`,
    raw: fe(o)
  };
}
async function Pe(e, t) {
  const a = P(e.baseUrl);
  let o;
  try {
    o = await z(H(a, "/.well-known/mcp"), e, { bearerBySourceId: {} }, t);
  } catch {
    o = await z(H(a, J(e.healthPath, "/health")), e, { bearerBySourceId: {} }, t);
  }
  return {
    agentId: D(e),
    sourceId: e.id,
    status: o.ok ? "online" : "degraded",
    capabilities: ["mcp", "tools"],
    lastError: o.ok ? void 0 : `HTTP ${o.status}`,
    raw: { protocol: "mcp-http-basic" }
  };
}
async function z(e, t, a, o) {
  const s = new AbortController(), r = window.setTimeout(() => s.abort(), o), c = new Headers({ Accept: "application/json" });
  if (t.authMode === "session-bearer") {
    const d = a.bearerBySourceId[t.id];
    d && c.set("Authorization", `Bearer ${d}`);
  }
  try {
    return await fetch(e, { method: "GET", headers: c, signal: s.signal, cache: "no-store" });
  } catch (d) {
    throw d instanceof DOMException && d.name === "AbortError" ? new Error("Probe timed out after 6s.") : d instanceof TypeError ? new Error("Network/CORS failure. If the endpoint is online, allow this Tytus origin or add a bridge.") : d;
  } finally {
    window.clearTimeout(r);
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
function ue(e, t) {
  const a = e.capabilities;
  if (!Array.isArray(a)) return t;
  const o = /* @__PURE__ */ new Set(["models", "chat", "tools", "files", "health", "mcp", "music", "unknown"]), s = a.map((r) => String(r).toLowerCase()).filter((r) => o.has(r));
  return s.length ? s : t;
}
function fe(e) {
  const t = {};
  for (const a of ["id", "name", "status", "state", "version", "capabilities", "healthy"])
    a in e && (t[a] = e[a]);
  return t;
}
function De(e, t) {
  for (const a of t) if (a in e) return e[a];
}
function D(e) {
  return `external:${e.id}`;
}
function Ue(e) {
  const t = G(e).toLowerCase();
  return t.includes("cors") || t.includes("timed out") ? "degraded" : t.includes("network") ? "offline" : "error";
}
const Be = 100;
async function V(e) {
  try {
    return (await e.query("SELECT * FROM app_openhouse_sources ORDER BY created_at ASC")).map(qe);
  } catch {
    return [];
  }
}
async function je(e, t) {
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
async function Ke(e, t) {
  await e.run("DELETE FROM app_openhouse_sources WHERE id = ?", [t]), await e.run("DELETE FROM app_openhouse_agents WHERE source_id = ?", [t]), await e.run("DELETE FROM app_openhouse_probe_history WHERE source_id = ?", [t]);
}
async function Fe(e) {
  try {
    return (await e.query("SELECT * FROM app_openhouse_layout")).map((a) => ({ agentId: a.agent_id, room: a.room, x: a.x, y: a.y, pinned: !!a.pinned, updatedAt: a.updated_at }));
  } catch {
    return [];
  }
}
async function We(e, t) {
  await e.run(
    `INSERT OR REPLACE INTO app_openhouse_probe_history
      (id, agent_id, source_id, status, latency_ms, error, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [t.id, t.agentId, t.sourceId, t.status, t.latencyMs ?? null, t.error ? G(t.error) : null, t.createdAt]
  ), await e.run(
    `DELETE FROM app_openhouse_probe_history
      WHERE id NOT IN (SELECT id FROM app_openhouse_probe_history ORDER BY created_at DESC LIMIT ${Be})`
  );
}
async function X(e, t) {
  try {
    return (t ? await e.query("SELECT * FROM app_openhouse_probe_history WHERE agent_id = ? ORDER BY created_at DESC LIMIT 20", [t]) : await e.query("SELECT * FROM app_openhouse_probe_history ORDER BY created_at DESC LIMIT 50")).map((o) => ({ id: o.id, agentId: o.agent_id, sourceId: o.source_id, status: o.status, latencyMs: o.latency_ms, error: o.error, createdAt: o.created_at }));
  } catch {
    return [];
  }
}
function qe(e) {
  return {
    id: e.id,
    kind: e.kind,
    name: e.name,
    baseUrl: e.base_url,
    healthPath: e.health_path ?? void 0,
    enabled: !!e.enabled,
    authMode: e.auth_mode,
    keychainRef: e.keychain_ref,
    body: Ze(e.body_json),
    room: e.room,
    createdAt: e.created_at,
    updatedAt: e.updated_at
  };
}
function Ze(e) {
  try {
    const t = JSON.parse(e);
    return t && typeof t == "object" && !Array.isArray(t) ? t : {};
  } catch {
    return {};
  }
}
const Ye = "https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@v1.1.1/assets/star-office/", $ = (e) => `${Ye}${e}`, K = [
  { x: 23, y: 60, scale: 1.45, sprite: "guestagent1.webp", labelDx: 0 },
  { x: 69, y: 28, scale: 1.25, sprite: "guestagent2.webp", labelDx: -2 },
  { x: 38, y: 82, scale: 1.35, sprite: "guest_anim_2.webp", labelDx: 0 },
  { x: 58, y: 55, scale: 1.2, sprite: "guest_anim_1.webp", labelDx: 0 },
  { x: 82, y: 42, scale: 1.15, sprite: "guest_anim_3.webp", labelDx: 0 },
  { x: 17, y: 33, scale: 1.1, sprite: "star-idle.gif", labelDx: 0 }
];
function Ge({ agents: e, selectedId: t, onSelect: a }) {
  const o = e.slice(0, K.length), s = Math.max(0, e.length - K.length);
  return /* @__PURE__ */ n("div", { className: "oh-office-frame", "aria-label": "OpenHouse pixel office", children: /* @__PURE__ */ l("div", { className: "oh-office-world", children: [
    /* @__PURE__ */ n("img", { className: "oh-office-bg", src: $("office_bg.webp"), alt: "pixel office", draggable: !1 }),
    /* @__PURE__ */ n("img", { className: "oh-office-prop oh-server", src: $("serverroom.gif"), alt: "server room", draggable: !1 }),
    /* @__PURE__ */ n("img", { className: "oh-office-prop oh-coffee", src: $("coffee-machine.gif"), alt: "coffee machine", draggable: !1 }),
    /* @__PURE__ */ n("img", { className: "oh-office-prop oh-sofa", src: $("sofa-idle.webp"), alt: "sofa", draggable: !1 }),
    o.map((r, c) => {
      const d = K[c] ?? K[0];
      return /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          className: `oh-office-agent ${r.id === t ? "selected" : ""} ${r.status}`,
          style: { left: `${d.x}%`, top: `${d.y}%`, "--agent-scale": d.scale },
          onClick: () => a(r.id),
          title: `${r.displayName} · ${r.status}`,
          children: [
            /* @__PURE__ */ n("span", { className: "oh-agent-label", style: { transform: `translateX(${d.labelDx}px)` }, children: Xe(r.displayName) }),
            /* @__PURE__ */ n("span", { className: "oh-bubble", children: Ve(r) }),
            /* @__PURE__ */ n("img", { src: $(Je(r, d.sprite)), alt: "", draggable: !1 }),
            /* @__PURE__ */ n("span", { className: "oh-status-dot" })
          ]
        },
        r.id
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
function Je(e, t) {
  return e.status === "busy" || e.mood === "focused" || e.mood === "thinking" ? "star-working.gif" : e.status === "error" || e.status === "offline" || e.mood === "sick" ? "guestagent2.webp" : e.sourceKind === "ail-gateway" ? "guest_anim_1.webp" : e.sourceKind === "tytus-daemon" ? t : e.sourceKind === "mcp-http" ? "guest_anim_3.webp" : e.sourceKind === "openai-compatible" ? "guest_anim_1.webp" : t;
}
function Ve(e) {
  return e.status === "online" ? "ready" : e.status === "busy" ? "working" : e.status === "offline" ? "offline" : e.status === "error" ? "bug" : e.status === "degraded" ? "check me" : "waiting";
}
function Xe(e) {
  return e.length <= 14 ? e : `${e.slice(0, 13)}…`;
}
const Qe = [
  { value: "openai-compatible", label: "OpenAI-compatible", help: "GET /v1/models" },
  { value: "custom-health", label: "Custom health", help: "GET /health or custom path" },
  { value: "openhouse-probe", label: "OpenHouse probe", help: "GET /.well-known/openhouse-agent.json" },
  { value: "mcp-http", label: "MCP HTTP/SSE", help: "Basic well-known/health probe" }
];
function et({ open: e, onClose: t, onAdd: a }) {
  const [o, s] = f("openai-compatible"), [r, c] = f(""), [d, g] = f(""), [_, A] = f("/health"), [E, w] = f("none"), [N, U] = f(""), [I, O] = f(null);
  return e ? /* @__PURE__ */ n("div", { className: "oh-modal-backdrop", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ l("form", { className: "oh-modal", onSubmit: (h) => {
    h.preventDefault();
    try {
      const v = P(d), C = Date.now(), y = `src-${C.toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
      a({
        id: y,
        kind: o,
        name: r.trim() || tt(v),
        baseUrl: v,
        healthPath: o === "custom-health" || o === "mcp-http" ? J(_, "/health") : void 0,
        enabled: !0,
        authMode: E,
        createdAt: C,
        updatedAt: C
      }, E === "session-bearer" ? N : void 0), c(""), g(""), U(""), w("none"), O(null), t();
    } catch (v) {
      O(v instanceof Error ? v.message : String(v));
    }
  }, children: [
    /* @__PURE__ */ l("div", { className: "oh-modal-head", children: [
      /* @__PURE__ */ n("h2", { children: "Add agent resident" }),
      /* @__PURE__ */ n("button", { type: "button", onClick: t, children: /* @__PURE__ */ n(Ne, { size: 18 }) })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Connector type",
      /* @__PURE__ */ n("select", { value: o, onChange: (h) => s(h.target.value), children: Qe.map((h) => /* @__PURE__ */ l("option", { value: h.value, children: [
        h.label,
        " — ",
        h.help
      ] }, h.value)) })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Name",
      /* @__PURE__ */ n("input", { value: r, onChange: (h) => c(h.target.value), placeholder: "Agent Studio Local" })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Base URL",
      /* @__PURE__ */ n("input", { value: d, onChange: (h) => g(h.target.value), placeholder: "https://agent.example.com or http://localhost:8080", required: !0 })
    ] }),
    (o === "custom-health" || o === "mcp-http") && /* @__PURE__ */ l("label", { children: [
      "Health path",
      /* @__PURE__ */ n("input", { value: _, onChange: (h) => A(h.target.value), placeholder: "/health" })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Auth mode",
      /* @__PURE__ */ l("select", { value: E, onChange: (h) => w(h.target.value), children: [
        /* @__PURE__ */ n("option", { value: "none", children: "None" }),
        /* @__PURE__ */ n("option", { value: "session-bearer", children: "Session bearer (not persisted)" })
      ] })
    ] }),
    E === "session-bearer" && /* @__PURE__ */ l("label", { children: [
      "Session bearer",
      /* @__PURE__ */ n("input", { type: "password", value: N, onChange: (h) => U(h.target.value), placeholder: "Stored in memory only" })
    ] }),
    I && /* @__PURE__ */ n("p", { className: "oh-form-error", children: I }),
    /* @__PURE__ */ l("footer", { children: [
      /* @__PURE__ */ n("button", { type: "button", onClick: t, children: "Cancel" }),
      /* @__PURE__ */ l("button", { className: "primary", children: [
        /* @__PURE__ */ n(he, { size: 16 }),
        "Add resident"
      ] })
    ] })
  ] }) }) : null;
}
function tt(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "External agent";
  }
}
const ot = `
@font-face{font-family:ArkPixel;src:url('https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@v1.1.1/assets/star-office/fonts/ark-pixel-12px-proportional-latin.ttf.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap}
.oh-root{--bg:#1a1a2e;--surface:#2c2f3a;--surface2:#353945;--accent:#e94560;--accent-dark:#b8354c;--gold:#ffd700;--text:#f3f4f6;--muted:#a7adbb;--border:#4a4f5f;--shadow:4px 4px 0 #0a0a12;height:100%;min-height:0;background:var(--bg);background-image:linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px);background-size:8px 8px;color:var(--text);font-family:ArkPixel,"Courier New",monospace;display:flex;flex-direction:column;gap:6px;padding:6px;overflow:hidden;image-rendering:pixelated}.oh-root *{box-sizing:border-box}.oh-root button{font-family:inherit}.oh-top{display:flex;align-items:stretch;gap:6px;min-height:0;flex:1 1 auto}.oh-game-column{display:flex;flex-direction:column;gap:6px;min-width:0;flex:1 1 auto}.oh-office-frame{border:4px solid var(--accent);box-shadow:var(--shadow),0 0 0 2px #0f0f18;background:#111124;min-height:0;flex:1 1 auto;overflow:hidden;position:relative}.oh-office-world{position:relative;width:100%;height:100%;min-height:360px;overflow:hidden;background:#161628}.oh-office-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;image-rendering:pixelated;user-select:none}.oh-office-prop{position:absolute;image-rendering:pixelated;pointer-events:none;filter:drop-shadow(3px 4px 0 rgba(0,0,0,.5))}.oh-server{width:12%;right:12.5%;top:15%}.oh-coffee{width:9.5%;left:45%;top:50%}.oh-sofa{width:12%;right:30%;top:35%}.oh-office-agent{position:absolute;border:0;background:transparent;padding:0;margin:0;cursor:pointer;transform:translate(-50%,-100%) scale(var(--agent-scale));transform-origin:50% 100%;z-index:5;image-rendering:pixelated;filter:drop-shadow(3px 5px 0 rgba(0,0,0,.8))}.oh-office-agent img{display:block;max-width:74px;max-height:96px;image-rendering:pixelated}.oh-office-agent:hover{filter:drop-shadow(0 0 0 #fff) drop-shadow(3px 5px 0 rgba(0,0,0,.8));z-index:8}.oh-office-agent.selected img{outline:3px solid #fff;outline-offset:2px}.oh-office-agent.busy img,.oh-office-agent.online img{animation:ohBob 1.2s steps(2,end) infinite}.oh-office-agent.error img,.oh-office-agent.offline img{filter:grayscale(.2) saturate(.8)}.oh-agent-label{position:absolute;bottom:100%;left:50%;translate:-50% -4px;color:white;text-shadow:2px 2px 0 #000,-1px -1px 0 #000;font-size:10px;white-space:nowrap;font-weight:900;letter-spacing:.02em}.oh-bubble{position:absolute;left:50%;bottom:calc(100% + 22px);translate:-50% 0;background:#fff;color:#111;padding:5px 8px;border:3px solid #111;box-shadow:3px 3px 0 rgba(0,0,0,.45);font-size:10px;white-space:nowrap;opacity:0;pointer-events:none}.oh-office-agent:hover .oh-bubble,.oh-office-agent.selected .oh-bubble{opacity:1}.oh-status-dot{position:absolute;right:3px;top:3px;width:9px;height:9px;border-radius:0;border:2px solid #111;background:#94a3b8}.oh-office-agent.online .oh-status-dot,.oh-office-agent.busy .oh-status-dot{background:#22c55e}.oh-office-agent.error .oh-status-dot{background:#ef4444}.oh-office-agent.offline .oh-status-dot{background:#64748b}.oh-office-agent.degraded .oh-status-dot,.oh-office-agent.starting .oh-status-dot{background:#f59e0b}.oh-office-name{position:absolute;left:50%;bottom:10px;translate:-50% 0;min-width:330px;text-align:center;background:#6b4638;color:var(--gold);border:4px solid #3b241d;box-shadow:3px 3px 0 #0a0a12;padding:8px 18px;font-size:13px;text-shadow:2px 2px 0 #000}.oh-office-name span{font-size:18px;margin:0 16px}.oh-overflow-badge{position:absolute;right:14px;bottom:14px;background:#252536;border:3px solid var(--accent);box-shadow:3px 3px 0 #0a0a12;color:var(--gold);padding:8px 10px;font-size:11px}.oh-toolbar{flex:0 0 auto;background:#252536;border:3px solid var(--border);box-shadow:var(--shadow);padding:8px 10px;display:flex;align-items:center;gap:10px;min-height:58px}.oh-toolbar label{color:var(--gold);font-size:12px}.oh-toolbar select,.oh-toolbar button{background:var(--surface2);color:var(--text);border:3px solid var(--border);box-shadow:2px 2px 0 #0a0a12;border-radius:0;padding:8px 13px;font-size:12px;font-weight:900}.oh-toolbar button:hover{border-color:var(--accent);color:#fff}.oh-toolbar .active{background:#3d4252;color:var(--gold)}.oh-toolbar .spacer{flex:1}.oh-toolbar .counter{border:3px solid var(--border);background:#1f2330;padding:8px 10px;color:var(--gold);box-shadow:2px 2px 0 #0a0a12;font-size:12px}.oh-bottom{height:clamp(160px,25vh,260px);display:grid;grid-template-columns:1.1fr .95fr 1fr;gap:10px;flex:0 0 auto}.oh-panel{background:var(--surface);border:3px solid var(--accent);box-shadow:var(--shadow);min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column}.oh-panel-title{color:var(--gold);font-size:16px;font-weight:900;text-align:center;letter-spacing:.1em;padding:10px;border-bottom:3px solid var(--border);text-shadow:2px 2px 0 #1a1020}.oh-memo{background-image:url('https://cdn.jsdelivr.net/gh/traylinx/tytus-app-openhouse@v1.1.1/assets/star-office/memo-bg.webp');background-size:cover;color:#5c4326;align-items:center;justify-content:center;text-align:center}.oh-memo .oh-panel-title{border:0;color:#5c4326;text-shadow:none}.oh-memo p{font-size:12px;margin:0;max-width:80%}.oh-status-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px;min-height:0;flex:1}.oh-status-grid button{background:var(--surface2);color:var(--text);border:3px solid var(--border);box-shadow:2px 2px 0 #0a0a12;font-size:14px;font-weight:900}.oh-status-grid button:hover{border-color:var(--accent)}.oh-visitor-list{display:flex;flex-direction:column;gap:7px;padding:8px;overflow:auto}.oh-visitor{display:grid;grid-template-columns:1fr auto auto;gap:8px;align-items:center;background:#3a3e4d;border-left:7px solid var(--accent);border-bottom:4px solid #111827;padding:8px}.oh-visitor strong{font-size:14px}.oh-visitor small{display:block;color:#d1d5db;font-size:11px;margin-top:2px}.oh-visitor button{background:#4b5162;color:white;border:3px solid #171923;box-shadow:2px 2px 0 #05070d;padding:7px 9px;font-size:11px}.oh-side{width:290px;flex:0 0 290px;background:var(--surface);border:3px solid var(--accent);box-shadow:var(--shadow);display:flex;flex-direction:column;min-height:0}.oh-side-head{padding:12px;border-bottom:3px solid var(--border)}.oh-side-head p{margin:0;color:var(--gold);letter-spacing:.12em;font-size:11px;text-transform:uppercase}.oh-side-head h2{margin:5px 0 0;font-size:21px;color:#fff}.oh-side-body{padding:12px;overflow:auto;display:flex;flex-direction:column;gap:10px}.oh-side-card{background:#3a3e4d;border:3px solid var(--border);box-shadow:2px 2px 0 #0a0a12;padding:10px}.oh-side-card h3{margin:0 0 8px;color:var(--gold);font-size:13px}.oh-side-card dl{display:grid;grid-template-columns:78px 1fr;gap:6px 8px;margin:0;font-size:12px}.oh-side-card dt{color:#cbd5e1}.oh-side-card dd{margin:0;color:#fff;word-break:break-word}.oh-caps{display:flex;flex-wrap:wrap;gap:6px}.oh-caps span{background:#252536;border:2px solid #4a4f5f;color:#ffd700;padding:4px 6px;font-size:10px}.oh-actions{display:grid;gap:8px}.oh-actions button{background:#4b5162;color:white;border:3px solid #171923;box-shadow:2px 2px 0 #05070d;padding:9px;font-weight:900}.oh-error{color:#fecaca;border-color:#ef4444}.oh-modal-backdrop{position:absolute;inset:0;z-index:20;background:rgba(10,10,18,.72);display:grid;place-items:center}.oh-modal{width:min(560px,calc(100% - 40px));background:#252536;border:4px solid var(--accent);box-shadow:var(--shadow);padding:16px;display:grid;gap:12px}.oh-modal-head{display:flex;align-items:center;justify-content:space-between}.oh-modal h2{margin:0;color:var(--gold)}.oh-modal label{display:grid;gap:6px;color:#f3f4f6;font-size:12px}.oh-modal input,.oh-modal select{background:#111827;color:#fff;border:3px solid var(--border);padding:9px;font-family:inherit}.oh-modal footer{display:flex;justify-content:flex-end;gap:10px}.oh-modal button{background:#3a3e4d;color:#fff;border:3px solid var(--border);box-shadow:2px 2px 0 #0a0a12;padding:9px 12px}.oh-modal .primary{background:#8b2640}.oh-form-error{color:#fecaca;margin:0;font-size:12px}@keyframes ohBob{0%,100%{translate:0 0}50%{translate:0 -2px}}@media(max-width:1100px){.oh-top{flex-direction:column}.oh-side{width:auto;flex:0 0 190px}.oh-bottom{grid-template-columns:1fr;height:360px}.oh-root{overflow:auto}.oh-office-world{min-height:420px}}`;
function at({ host: e }) {
  const [t] = f(() => e.storage.current()), [a, o] = f(() => le(e.daemon.state.agents, e.daemon.state.included)), [s, r] = f([]), [c, d] = f([]), [g, _] = f([]), [A, E] = f(), [w, N] = f("all"), [U, I] = f(!1), [O, h] = f(!1), [v, C] = f(null), [y, ne] = f({ bearerBySourceId: {} });
  j(() => {
    let i = !0;
    return Promise.all([V(t), Fe(t), X(t)]).then(([b, , u]) => {
      i && (r(b), _(u));
    }), () => {
      i = !1;
    };
  }, [t]), j(() => e.daemon.onStateChange((i) => {
    o(le(i.agents, i.included));
  }), [e]);
  const M = L(async (i = s, b = y) => {
    h(!0);
    try {
      const u = i.filter((S) => S.enabled), m = [];
      for (const S of nt(u, 4)) {
        const k = await Promise.all(S.map((T) => de(T, b)));
        m.push(...k), d([...m]);
        for (const T of k) await Q(t, T);
      }
      d(m), _(await X(t));
    } finally {
      h(!1);
    }
  }, [t, y, s]);
  j(() => {
    s.length && M(s, y);
  }, [s.length]);
  const x = ie(() => [...a, ...c], [a, c]), R = ie(() => w === "all" ? x : w === "issues" ? x.filter(te) : w === "online" ? x.filter((i) => i.status === "online" || i.status === "busy") : x.filter((i) => i.sourceKind === w), [x, w]), p = x.find((i) => i.id === A) ?? R[0] ?? x[0];
  g.filter((i) => i.agentId === p?.id), j(() => {
    !A && R[0] && E(R[0].id);
  }, [A, R]);
  const me = L((i, b) => {
    const u = b ? { bearerBySourceId: { ...y.bearerBySourceId, [i.id]: b } } : y;
    ne(u), je(t, i).then(async () => {
      const m = await V(t);
      r(m), await M(m, u), e.notifications.notify({ title: "OpenHouse resident added", body: `${i.name} moved into the office.`, level: "success" });
    });
  }, [t, e.notifications, M, y]), be = L((i) => {
    Ke(t, i).then(async () => {
      r(await V(t)), d((b) => b.filter((u) => u.sourceId !== i)), ne((b) => {
        const u = { ...b.bearerBySourceId };
        return delete u[i], { bearerBySourceId: u };
      });
    });
  }, [t]), re = L((i) => {
    C(i.id), (async () => {
      if (i.sourceKind === "tytus-daemon" || i.sourceKind === "ail-gateway") {
        const u = i.id.replace(/^tytus:/, ""), m = await Re(i.id, (k) => e.daemon.callPodEndpoint(u, k)), S = { ...i, status: m.status, latencyMs: m.latencyMs, lastError: m.lastError, capabilities: m.capabilities };
        o((k) => k.map((T) => T.id === i.id ? S : T)), await Q(t, S);
      } else {
        const u = s.find((m) => m.id === i.sourceId);
        if (u) {
          const m = await de(u, y);
          d((S) => S.map((k) => k.id === i.id ? m : k)), await Q(t, m);
        }
      }
      _(await X(t)), C(null);
    })().catch((u) => {
      e.notifications.notify({ title: "OpenHouse probe failed", body: u instanceof Error ? u.message : String(u), level: "error" }), C(null);
    });
  }, [t, e.daemon, e.notifications, y, s]), ge = L((i) => {
    const b = JSON.stringify({ id: i.id, source: i.sourceKind, status: i.status, room: i.room, endpoint: i.endpointHost, lastError: i.lastError, raw: i.raw }, null, 2);
    navigator.clipboard?.writeText(b).then(() => e.notifications.notify({ title: "OpenHouse diagnostic copied", body: i.displayName, level: "success" }));
  }, [e.notifications]), B = rt(x);
  return /* @__PURE__ */ l("div", { className: "oh-root", children: [
    /* @__PURE__ */ n("style", { children: ot }),
    /* @__PURE__ */ l("div", { className: "oh-top", children: [
      /* @__PURE__ */ l("section", { className: "oh-game-column", children: [
        /* @__PURE__ */ n(Ge, { agents: R, savedLayout: [], selectedId: p?.id, onSelect: E }),
        /* @__PURE__ */ l("nav", { className: "oh-toolbar", "aria-label": "OpenHouse HUD", children: [
          /* @__PURE__ */ n("label", { children: "View" }),
          /* @__PURE__ */ l("select", { value: w, onChange: (i) => N(i.target.value), children: [
            /* @__PURE__ */ n("option", { value: "all", children: "All residents" }),
            /* @__PURE__ */ n("option", { value: "tytus-daemon", children: "Tytus Pods" }),
            /* @__PURE__ */ n("option", { value: "ail-gateway", children: "AIL Gateway" }),
            /* @__PURE__ */ n("option", { value: "openai-compatible", children: "OpenAI" }),
            /* @__PURE__ */ n("option", { value: "custom-health", children: "Health" }),
            /* @__PURE__ */ n("option", { value: "openhouse-probe", children: "OpenHouse" }),
            /* @__PURE__ */ n("option", { value: "mcp-http", children: "MCP Library" }),
            /* @__PURE__ */ n("option", { value: "online", children: "Online" }),
            /* @__PURE__ */ n("option", { value: "issues", children: "Issues" })
          ] }),
          /* @__PURE__ */ l("button", { type: "button", onClick: () => I(!0), children: [
            /* @__PURE__ */ n(he, { size: 14 }),
            " Add agent"
          ] }),
          /* @__PURE__ */ l("button", { type: "button", onClick: () => void M(), disabled: O, children: [
            /* @__PURE__ */ n(Se, { size: 14 }),
            " ",
            O ? "Refreshing…" : "Refresh external"
          ] }),
          /* @__PURE__ */ n("span", { className: "spacer" }),
          /* @__PURE__ */ l("span", { className: "counter", children: [
            x.length,
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
              /* @__PURE__ */ n("dd", { children: it(p.room) }),
              /* @__PURE__ */ n("dt", { children: "Source" }),
              /* @__PURE__ */ n("dd", { children: p.sourceKind }),
              /* @__PURE__ */ n("dt", { children: "Endpoint" }),
              /* @__PURE__ */ n("dd", { children: p.endpointHost ?? "—" }),
              /* @__PURE__ */ n("dt", { children: "Latency" }),
              /* @__PURE__ */ n("dd", { children: p.latencyMs ? `${p.latencyMs}ms` : "—" }),
              /* @__PURE__ */ n("dt", { children: "Last seen" }),
              /* @__PURE__ */ n("dd", { children: p.lastSeenAt ? new Date(p.lastSeenAt).toLocaleTimeString() : "—" })
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "oh-side-card", children: [
            /* @__PURE__ */ n("h3", { children: "Capabilities" }),
            /* @__PURE__ */ n("div", { className: "oh-caps", children: p.capabilities.length ? p.capabilities.map((i) => /* @__PURE__ */ n("span", { children: i }, i)) : /* @__PURE__ */ n("span", { children: "unknown" }) })
          ] }),
          p.lastError && /* @__PURE__ */ l("div", { className: "oh-side-card oh-error", children: [
            /* @__PURE__ */ n("h3", { children: "Error" }),
            /* @__PURE__ */ n("p", { children: p.lastError })
          ] }),
          /* @__PURE__ */ l("div", { className: "oh-actions", children: [
            /* @__PURE__ */ n("button", { type: "button", onClick: () => re(p), disabled: v === p.id, children: v === p.id ? "Testing…" : "Test connection" }),
            /* @__PURE__ */ n("button", { type: "button", onClick: () => ge(p), children: "Copy diagnostic" }),
            p.sourceKind !== "tytus-daemon" && p.sourceKind !== "ail-gateway" && /* @__PURE__ */ n("button", { type: "button", onClick: () => be(p.sourceId), children: "Remove source" })
          ] })
        ] }) : /* @__PURE__ */ n("div", { className: "oh-side-body", children: /* @__PURE__ */ n("div", { className: "oh-side-card", children: "Add third-party agents or connect Tytus pods to populate the office." }) })
      ] })
    ] }),
    /* @__PURE__ */ l("section", { className: "oh-bottom", children: [
      /* @__PURE__ */ l("article", { className: "oh-panel oh-memo", children: [
        /* @__PURE__ */ n("div", { className: "oh-panel-title", children: "— Today Memo —" }),
        /* @__PURE__ */ n("p", { children: B.issues ? `${B.issues} residents need attention. Start with the red room.` : "Office calm. Agents have bodies, rooms, and visible status." })
      ] }),
      /* @__PURE__ */ l("article", { className: "oh-panel", children: [
        /* @__PURE__ */ n("div", { className: "oh-panel-title", children: "Agent Status" }),
        /* @__PURE__ */ l("div", { className: "oh-status-grid", children: [
          /* @__PURE__ */ n("button", { onClick: () => N("all"), children: "All" }),
          /* @__PURE__ */ n("button", { onClick: () => N("online"), children: "Working" }),
          /* @__PURE__ */ n("button", { onClick: () => N("issues"), children: "Alert" }),
          /* @__PURE__ */ n("button", { onClick: () => void M(), children: "Sync" })
        ] })
      ] }),
      /* @__PURE__ */ l("article", { className: "oh-panel", children: [
        /* @__PURE__ */ n("div", { className: "oh-panel-title", children: "— Visitor List —" }),
        /* @__PURE__ */ n("div", { className: "oh-visitor-list", children: x.map((i) => /* @__PURE__ */ l("div", { className: "oh-visitor", children: [
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ n("strong", { children: i.displayName }),
            /* @__PURE__ */ l("small", { children: [
              i.status,
              " · ",
              i.mood
            ] })
          ] }),
          /* @__PURE__ */ n("button", { onClick: () => E(i.id), children: "focus" }),
          /* @__PURE__ */ n("button", { onClick: () => re(i), children: "probe" })
        ] }, i.id)) })
      ] })
    ] }),
    /* @__PURE__ */ n(et, { open: U, onClose: () => I(!1), onAdd: me })
  ] });
}
async function Q(e, t) {
  await We(e, {
    id: `probe-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    agentId: t.id,
    sourceId: t.sourceId,
    status: t.status,
    latencyMs: t.latencyMs ?? null,
    error: t.lastError ?? null,
    createdAt: Date.now()
  });
}
function nt(e, t) {
  const a = [];
  for (let o = 0; o < e.length; o += t) a.push(e.slice(o, o + t));
  return a;
}
function te(e) {
  return e.status === "error" || e.status === "offline" || e.status === "degraded";
}
function rt(e) {
  const t = e.filter(te).length, a = e.filter((o) => o.status === "online" || o.status === "busy").length;
  return { issues: t, online: a };
}
function it(e) {
  return e.replace(/-/g, " ");
}
function dt(e) {
  return e.host.storage.current().migrate("migrations/"), function() {
    return /* @__PURE__ */ n(at, { host: e.host });
  };
}
export {
  dt as default
};
//# sourceMappingURL=index.js.map
