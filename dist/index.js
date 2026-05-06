import { jsxs as l, jsx as r, Fragment as L } from "react/jsx-runtime";
import { forwardRef as fe, createElement as re, useState as f, useEffect as W, useCallback as j, useMemo as le } from "react";
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ae = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), ce = (e) => {
  const t = Ae(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ye = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), Ne = (e) => {
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
var Ce = {
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
const Ie = fe(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: i = "",
    children: a,
    iconNode: c,
    ...s
  }, d) => re(
    "svg",
    {
      ref: d,
      ...Ce,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: ye("lucide", i),
      ...!a && !Ne(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...c.map(([x, N]) => re(x, N)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m = (e, t) => {
  const n = fe(
    ({ className: o, ...i }, a) => re(Ie, {
      ref: a,
      iconNode: t,
      className: ye(
        `lucide-${Se(ce(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return n.displayName = ce(e), n;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
], X = m("building-2", Te);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Le = m("circle-check", $e);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], Oe = m("cloud", ze);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Re = m("copy", He);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
], Ue = m("cpu", Pe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = [
  ["path", { d: "m16 6 4 14", key: "ji33uf" }],
  ["path", { d: "M12 6v14", key: "1n7gus" }],
  ["path", { d: "M8 8v12", key: "1gg7y9" }],
  ["path", { d: "M4 4v16", key: "6qkkli" }]
], We = m("library", De);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], me = m("plus", je);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], be = m("refresh-cw", Be);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Ke = m("shield-check", Fe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], qe = m("trash-2", Ve);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ge = m("triangle-alert", Ge);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Ze = m("wifi-off", Ye);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Je = m("x", Qe);
function B(e) {
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
function F(e, t, n) {
  if (n === "error" || n === "offline") return "incident-infirmary";
  if (e === "tytus-daemon") return "tytus-lab";
  if (e === "mcp-http") return "mcp-library";
  if (t)
    try {
      const o = new URL(t).hostname.toLowerCase();
      if (o === "localhost" || o === "127.0.0.1" || o === "::1") return "local-workshop";
    } catch {
    }
  return e === "custom-health" ? "lobby" : "remote-balcony";
}
function K(e, t, n) {
  const o = {
    "tytus-daemon": { species: "robot", palette: "violet", accessory: "antenna", animation: "breathe" },
    "openai-compatible": { species: "hologram", palette: "cyan", accessory: "sparkles", animation: "scan" },
    "custom-health": { species: "drone", palette: "green", accessory: "shield", animation: "pulse" },
    "openhouse-probe": { species: "robot", palette: "silver", accessory: "sparkles", animation: "breathe" },
    "mcp-http": { species: "owl", palette: "amber", accessory: "book", animation: "breathe" }
  }, i = t === "busy" ? { animation: "typing" } : t === "starting" ? { palette: "amber", animation: "pulse" } : t === "degraded" ? { palette: "amber", animation: "scan" } : t === "error" ? { palette: "red", animation: "alarm" } : t === "offline" ? { species: "ghost", palette: "silver", animation: "sleep" } : {};
  return { ...o[e], ...i, ...n };
}
function V(e) {
  const t = String(e ?? "").toLowerCase();
  return ["ready", "running", "healthy", "ok", "online", "connected", "up"].includes(t) ? "online" : ["busy", "working", "executing", "writing", "researching", "syncing"].includes(t) ? "busy" : ["starting", "booting", "warming"].includes(t) ? "starting" : ["degraded", "warning", "warn"].includes(t) ? "degraded" : ["error", "failed", "unhealthy", "down"].includes(t) ? "error" : ["offline", "stopped", "idle-offline"].includes(t) ? "offline" : "unknown";
}
const Xe = [
  /Bearer\s+[A-Za-z0-9._\-~+/]+=*/gi,
  /sk-[A-Za-z0-9_\-]{12,}/g,
  /gsk_[A-Za-z0-9_\-]{12,}/g,
  /AIza[0-9A-Za-z_\-]{20,}/g
], et = /(api[_-]?key|token|secret|authorization)(["'\s:=]+)([A-Za-z0-9._\-~+/=]{8,})/gi;
function Y(e) {
  let t = e instanceof Error ? e.message : String(e ?? "");
  for (const n of Xe)
    t = t.replace(n, "[REDACTED]");
  return t = t.replace(et, (n, o, i) => `${o}${i}[REDACTED]`), t;
}
function q(e) {
  try {
    return new URL(e).host;
  } catch {
    return e.replace(/[?#].*$/, "");
  }
}
function R(e) {
  const t = e.trim().replace(/\/+$/, "");
  if (!t) throw new Error("Base URL is required.");
  const n = new URL(t), o = n.hostname.toLowerCase(), i = o === "localhost" || o === "127.0.0.1" || o === "[::1]" || o === "::1";
  if (n.protocol === "https:") return n.toString().replace(/\/+$/, "");
  if (n.protocol === "http:" && i) return n.toString().replace(/\/+$/, "");
  throw new Error("Only HTTPS and local HTTP endpoints are allowed in OpenHouse v1.");
}
function Z(e, t) {
  const n = (e || t).trim() || t;
  return n.startsWith("/") ? n : `/${n}`;
}
function O(e, t) {
  return `${e.replace(/\/+$/, "")}${Z(t, "/")}`;
}
function de(e, t) {
  const n = new Map(t.map((a) => [a.id, a])), o = /* @__PURE__ */ new Set(), i = [];
  for (const a of e) {
    const c = n.get(a.id), s = V(a.status);
    o.add(a.id), i.push({
      id: `tytus:${a.id}`,
      sourceId: "tytus-daemon",
      sourceKind: "tytus-daemon",
      displayName: tt(a, c),
      status: s,
      mood: B(s),
      body: K("tytus-daemon", s),
      room: F("tytus-daemon", c?.publicUrl, s),
      endpointHost: c?.publicUrl ? q(c.publicUrl) : void 0,
      capabilities: c?.kind === "ail" ? ["models", "chat"] : ["unknown"],
      lastSeenAt: Date.now(),
      raw: { agent: a, pod: c }
    });
  }
  for (const a of t) {
    if (o.has(a.id)) continue;
    const c = V(a.status);
    i.push({
      id: `tytus:${a.id}`,
      sourceId: "tytus-daemon",
      sourceKind: "tytus-daemon",
      displayName: `Tytus Pod ${a.id}`,
      status: c,
      mood: B(c),
      body: K("tytus-daemon", c),
      room: F("tytus-daemon", a.publicUrl, c),
      endpointHost: a.publicUrl ? q(a.publicUrl) : void 0,
      capabilities: a.kind === "ail" ? ["models", "chat"] : ["unknown"],
      lastSeenAt: Date.now(),
      raw: { pod: a }
    });
  }
  return i;
}
function tt(e, t) {
  const n = typeof e.meta?.name == "string" ? e.meta.name : void 0, o = typeof e.meta?.kind == "string" ? e.meta.kind : t?.kind;
  return n || (o ? `${o.toUpperCase()} ${e.id}` : `Tytus Pod ${e.id}`);
}
const ot = 6e3;
async function he(e, t) {
  const n = performance.now();
  try {
    const o = await nt(e, t, ot), i = Math.max(0, Math.round(performance.now() - n)), a = o.status;
    return {
      id: o.agentId,
      sourceId: e.id,
      sourceKind: e.kind,
      displayName: o.displayName || e.name,
      status: a,
      mood: o.mood || B(a),
      body: K(e.kind, a, { ...e.body, ...o.body }),
      room: e.room || F(e.kind, e.baseUrl, a),
      endpointHost: q(e.baseUrl),
      capabilities: o.capabilities.length ? o.capabilities : ["unknown"],
      latencyMs: o.latencyMs ?? i,
      lastSeenAt: a === "offline" ? void 0 : Date.now(),
      lastError: o.lastError,
      raw: o.raw
    };
  } catch (o) {
    const i = dt(o), a = Y(o);
    return {
      id: P(e),
      sourceId: e.id,
      sourceKind: e.kind,
      displayName: e.name,
      status: i,
      mood: B(i),
      body: K(e.kind, i, e.body),
      room: e.room || F(e.kind, e.baseUrl, i),
      endpointHost: q(e.baseUrl),
      capabilities: ["unknown"],
      latencyMs: Math.max(0, Math.round(performance.now() - n)),
      lastError: a
    };
  }
}
async function rt(e, t) {
  const n = performance.now();
  try {
    const o = await t("/v1/models"), i = await o.text().catch(() => "");
    let a = ["models"];
    return (i.includes("chat") || i.includes("gpt") || i.includes("model")) && (a = ["models", "chat"]), {
      agentId: e,
      sourceId: "tytus-daemon",
      status: o.ok ? "online" : "degraded",
      latencyMs: Math.round(performance.now() - n),
      capabilities: a,
      lastError: o.ok ? void 0 : `HTTP ${o.status}`
    };
  } catch (o) {
    return {
      agentId: e,
      sourceId: "tytus-daemon",
      status: "error",
      latencyMs: Math.round(performance.now() - n),
      capabilities: ["unknown"],
      lastError: Y(o)
    };
  }
}
async function nt(e, t, n) {
  switch (e.kind) {
    case "openai-compatible":
      return at(e, t, n);
    case "custom-health":
      return it(e, n);
    case "openhouse-probe":
      return st(e, n);
    case "mcp-http":
      return lt(e, n);
    default:
      throw new Error(`Unsupported external source kind: ${e.kind}`);
  }
}
async function at(e, t, n) {
  const o = await H(O(R(e.baseUrl), "/v1/models"), e, t, n), i = await ne(o), a = Array.isArray(i.data) ? i.data.length : void 0;
  return {
    agentId: P(e),
    sourceId: e.id,
    status: o.ok ? "online" : o.status === 401 || o.status === 403 ? "degraded" : "error",
    latencyMs: void 0,
    capabilities: ["models", "chat"],
    lastError: o.ok ? void 0 : `HTTP ${o.status}`,
    raw: { modelCount: a }
  };
}
async function it(e, t) {
  const n = await H(O(R(e.baseUrl), Z(e.healthPath, "/health")), e, { bearerBySourceId: {} }, t), o = await ne(n), i = ct(o, ["status", "state", "health"]), c = (typeof o.healthy == "boolean" ? o.healthy : void 0) === !1 ? "error" : i ? V(i) : n.ok ? "online" : "error";
  return {
    agentId: P(e),
    sourceId: e.id,
    status: c,
    capabilities: xe(o, ["health"]),
    displayName: typeof o.name == "string" ? o.name : void 0,
    lastError: n.ok ? void 0 : `HTTP ${n.status}`,
    raw: ke(o)
  };
}
async function st(e, t) {
  const n = await H(O(R(e.baseUrl), "/.well-known/openhouse-agent.json"), e, { bearerBySourceId: {} }, t), o = await ne(n), i = V(o.status ?? (n.ok ? "online" : "error")), a = {
    species: o.species,
    palette: o.palette,
    accessory: o.accessory
  };
  return {
    agentId: String(o.id || P(e)),
    sourceId: e.id,
    status: i,
    mood: typeof o.mood == "string" ? o.mood : void 0,
    displayName: typeof o.name == "string" ? o.name : e.name,
    capabilities: xe(o, ["health"]),
    body: a,
    lastError: n.ok ? void 0 : `HTTP ${n.status}`,
    raw: ke(o)
  };
}
async function lt(e, t) {
  const n = R(e.baseUrl);
  let o;
  try {
    o = await H(O(n, "/.well-known/mcp"), e, { bearerBySourceId: {} }, t);
  } catch {
    o = await H(O(n, Z(e.healthPath, "/health")), e, { bearerBySourceId: {} }, t);
  }
  return {
    agentId: P(e),
    sourceId: e.id,
    status: o.ok ? "online" : "degraded",
    capabilities: ["mcp", "tools"],
    lastError: o.ok ? void 0 : `HTTP ${o.status}`,
    raw: { protocol: "mcp-http-basic" }
  };
}
async function H(e, t, n, o) {
  const i = new AbortController(), a = window.setTimeout(() => i.abort(), o), c = new Headers({ Accept: "application/json" });
  if (t.authMode === "session-bearer") {
    const s = n.bearerBySourceId[t.id];
    s && c.set("Authorization", `Bearer ${s}`);
  }
  try {
    return await fetch(e, { method: "GET", headers: c, signal: i.signal, cache: "no-store" });
  } catch (s) {
    throw s instanceof DOMException && s.name === "AbortError" ? new Error("Probe timed out after 6s.") : s instanceof TypeError ? new Error("Network/CORS failure. If the endpoint is online, allow this Tytus origin or add a bridge.") : s;
  } finally {
    window.clearTimeout(a);
  }
}
async function ne(e) {
  const t = await e.text().catch(() => "");
  if (!t) return {};
  try {
    const n = JSON.parse(t);
    return n && typeof n == "object" ? n : { value: n };
  } catch {
    return { text: t.slice(0, 500) };
  }
}
function xe(e, t) {
  const n = e.capabilities;
  if (!Array.isArray(n)) return t;
  const o = /* @__PURE__ */ new Set(["models", "chat", "tools", "files", "health", "mcp", "music", "unknown"]), i = n.map((a) => String(a).toLowerCase()).filter((a) => o.has(a));
  return i.length ? i : t;
}
function ke(e) {
  const t = {};
  for (const n of ["id", "name", "status", "state", "version", "capabilities", "healthy"])
    n in e && (t[n] = e[n]);
  return t;
}
function ct(e, t) {
  for (const n of t) if (n in e) return e[n];
}
function P(e) {
  return `external:${e.id}`;
}
function dt(e) {
  const t = Y(e).toLowerCase();
  return t.includes("cors") || t.includes("timed out") ? "degraded" : t.includes("network") ? "offline" : "error";
}
const ht = 100;
async function ee(e) {
  try {
    return (await e.query("SELECT * FROM app_openhouse_sources ORDER BY created_at ASC")).map(mt);
  } catch {
    return [];
  }
}
async function pt(e, t) {
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
async function ut(e, t) {
  await e.run("DELETE FROM app_openhouse_sources WHERE id = ?", [t]), await e.run("DELETE FROM app_openhouse_agents WHERE source_id = ?", [t]), await e.run("DELETE FROM app_openhouse_probe_history WHERE source_id = ?", [t]);
}
async function ft(e) {
  try {
    return (await e.query("SELECT * FROM app_openhouse_layout")).map((n) => ({ agentId: n.agent_id, room: n.room, x: n.x, y: n.y, pinned: !!n.pinned, updatedAt: n.updated_at }));
  } catch {
    return [];
  }
}
async function yt(e, t) {
  await e.run(
    `INSERT OR REPLACE INTO app_openhouse_probe_history
      (id, agent_id, source_id, status, latency_ms, error, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [t.id, t.agentId, t.sourceId, t.status, t.latencyMs ?? null, t.error ? Y(t.error) : null, t.createdAt]
  ), await e.run(
    `DELETE FROM app_openhouse_probe_history
      WHERE id NOT IN (SELECT id FROM app_openhouse_probe_history ORDER BY created_at DESC LIMIT ${ht})`
  );
}
async function te(e, t) {
  try {
    return (t ? await e.query("SELECT * FROM app_openhouse_probe_history WHERE agent_id = ? ORDER BY created_at DESC LIMIT 20", [t]) : await e.query("SELECT * FROM app_openhouse_probe_history ORDER BY created_at DESC LIMIT 50")).map((o) => ({ id: o.id, agentId: o.agent_id, sourceId: o.source_id, status: o.status, latencyMs: o.latency_ms, error: o.error, createdAt: o.created_at }));
  } catch {
    return [];
  }
}
function mt(e) {
  return {
    id: e.id,
    kind: e.kind,
    name: e.name,
    baseUrl: e.base_url,
    healthPath: e.health_path ?? void 0,
    enabled: !!e.enabled,
    authMode: e.auth_mode,
    keychainRef: e.keychain_ref,
    body: bt(e.body_json),
    room: e.room,
    createdAt: e.created_at,
    updatedAt: e.updated_at
  };
}
function bt(e) {
  try {
    const t = JSON.parse(e);
    return t && typeof t == "object" && !Array.isArray(t) ? t : {};
  } catch {
    return {};
  }
}
const G = [
  { id: "lobby", x: 40, y: 70, w: 300, h: 230, label: "Lobby" },
  { id: "tytus-lab", x: 380, y: 70, w: 440, h: 250, label: "Tytus Lab" },
  { id: "local-workshop", x: 860, y: 70, w: 460, h: 250, label: "Local Workshop" },
  { id: "remote-balcony", x: 40, y: 360, w: 430, h: 300, label: "Remote Balcony" },
  { id: "mcp-library", x: 510, y: 360, w: 380, h: 300, label: "MCP Library" },
  { id: "incident-infirmary", x: 930, y: 360, w: 390, h: 300, label: "Incident Infirmary" }
];
function gt(e) {
  return G.find((t) => t.id === e) ?? G[0];
}
function xt(e, t = []) {
  const n = new Map(t.map((a) => [a.agentId, a])), o = /* @__PURE__ */ new Map();
  for (const a of e) {
    const c = a.room;
    o.set(c, [...o.get(c) ?? [], a]);
  }
  const i = [];
  for (const [a, c] of o.entries()) {
    const s = gt(a), d = Math.max(1, Math.ceil(Math.sqrt(c.length))), x = Math.max(1, Math.ceil(c.length / d)), N = s.w / (d + 1), k = s.h / (x + 1);
    c.forEach((w, E) => {
      const b = n.get(w.id);
      if (b?.pinned) {
        i.push(b);
        return;
      }
      const C = E % d, I = Math.floor(E / d);
      i.push({
        agentId: w.id,
        room: a,
        x: Math.round(s.x + N * (C + 1)),
        y: Math.round(s.y + k * (I + 1) + 18),
        pinned: !1,
        updatedAt: Date.now()
      });
    });
  }
  return i;
}
function kt(e) {
  return e >= 50;
}
const we = {
  violet: { fill: "#8b5cf6", stroke: "#c4b5fd", glow: "#7c3aed" },
  cyan: { fill: "#06b6d4", stroke: "#a5f3fc", glow: "#0891b2" },
  green: { fill: "#22c55e", stroke: "#bbf7d0", glow: "#16a34a" },
  amber: { fill: "#f59e0b", stroke: "#fde68a", glow: "#d97706" },
  red: { fill: "#ef4444", stroke: "#fecaca", glow: "#dc2626" },
  silver: { fill: "#94a3b8", stroke: "#e2e8f0", glow: "#64748b" }
};
function wt({ body: e, status: t, selected: n, label: o }) {
  const i = we[e.palette], a = `oh-agent-body oh-${e.animation} oh-status-${t}${n ? " oh-selected" : ""}`;
  return /* @__PURE__ */ l("g", { className: a, "aria-label": o, children: [
    /* @__PURE__ */ l("filter", { id: `glow-${e.palette}`, x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
      /* @__PURE__ */ r("feGaussianBlur", { stdDeviation: "3", result: "blur" }),
      /* @__PURE__ */ l("feMerge", { children: [
        /* @__PURE__ */ r("feMergeNode", { in: "blur" }),
        /* @__PURE__ */ r("feMergeNode", { in: "SourceGraphic" })
      ] })
    ] }),
    /* @__PURE__ */ r("ellipse", { cx: "0", cy: "38", rx: "28", ry: "8", fill: "rgba(0,0,0,.28)" }),
    e.species === "hologram" && /* @__PURE__ */ r(vt, { p: i }),
    e.species === "owl" && /* @__PURE__ */ r(ue, { p: i }),
    e.species === "librarian" && /* @__PURE__ */ r(ue, { p: i, book: !0 }),
    e.species === "forge" && /* @__PURE__ */ r(pe, { p: i, tool: !0 }),
    e.species === "drone" && /* @__PURE__ */ r(Mt, { p: i }),
    e.species === "ghost" && /* @__PURE__ */ r(_t, { p: i }),
    (e.species === "robot" || e.species === "custom") && /* @__PURE__ */ r(pe, { p: i }),
    /* @__PURE__ */ r(Et, { kind: e.accessory, p: i }),
    /* @__PURE__ */ r(St, { status: t })
  ] });
}
function pe({ p: e, tool: t }) {
  return /* @__PURE__ */ l(L, { children: [
    /* @__PURE__ */ r("rect", { x: "-22", y: "-22", width: "44", height: "44", rx: "12", fill: e.fill, stroke: e.stroke, strokeWidth: "2", filter: `url(#glow-${At(e)})` }),
    /* @__PURE__ */ r("circle", { cx: "-9", cy: "-5", r: "4", fill: "#0f172a" }),
    /* @__PURE__ */ r("circle", { cx: "9", cy: "-5", r: "4", fill: "#0f172a" }),
    /* @__PURE__ */ r("path", { d: "M-10 10 Q0 18 10 10", fill: "none", stroke: "#0f172a", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ r("rect", { x: "-6", y: "-38", width: "12", height: "15", rx: "4", fill: e.stroke }),
    t && /* @__PURE__ */ r("path", { d: "M24 6 l14 14 M38 6 L24 20", stroke: e.stroke, strokeWidth: "4", strokeLinecap: "round" })
  ] });
}
function vt({ p: e }) {
  return /* @__PURE__ */ l(L, { children: [
    /* @__PURE__ */ r("path", { d: "M0 -36 L30 22 L-30 22 Z", fill: e.fill, opacity: ".42", stroke: e.stroke, strokeWidth: "2" }),
    /* @__PURE__ */ r("circle", { cx: "0", cy: "-4", r: "18", fill: "none", stroke: e.stroke, strokeWidth: "2", opacity: ".8" }),
    /* @__PURE__ */ r("path", { d: "M-14 -4 H14 M-9 8 H9", stroke: e.stroke, strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
function ue({ p: e, book: t }) {
  return /* @__PURE__ */ l(L, { children: [
    /* @__PURE__ */ r("path", { d: "M-26 -12 Q-20 -36 0 -24 Q20 -36 26 -12 Q30 22 0 30 Q-30 22 -26 -12Z", fill: e.fill, stroke: e.stroke, strokeWidth: "2" }),
    /* @__PURE__ */ r("circle", { cx: "-10", cy: "-6", r: "8", fill: "#f8fafc" }),
    /* @__PURE__ */ r("circle", { cx: "10", cy: "-6", r: "8", fill: "#f8fafc" }),
    /* @__PURE__ */ r("circle", { cx: "-10", cy: "-6", r: "3", fill: "#0f172a" }),
    /* @__PURE__ */ r("circle", { cx: "10", cy: "-6", r: "3", fill: "#0f172a" }),
    /* @__PURE__ */ r("path", { d: "M0 0 l6 8 h-12z", fill: "#fbbf24" }),
    t && /* @__PURE__ */ r("rect", { x: "-32", y: "18", width: "64", height: "18", rx: "3", fill: "#334155", stroke: e.stroke })
  ] });
}
function Mt({ p: e }) {
  return /* @__PURE__ */ l(L, { children: [
    /* @__PURE__ */ r("rect", { x: "-24", y: "-14", width: "48", height: "28", rx: "14", fill: e.fill, stroke: e.stroke, strokeWidth: "2" }),
    /* @__PURE__ */ r("circle", { cx: "-38", cy: "-20", r: "10", fill: "none", stroke: e.stroke, strokeWidth: "3" }),
    /* @__PURE__ */ r("circle", { cx: "38", cy: "-20", r: "10", fill: "none", stroke: e.stroke, strokeWidth: "3" }),
    /* @__PURE__ */ r("circle", { cx: "-38", cy: "20", r: "10", fill: "none", stroke: e.stroke, strokeWidth: "3" }),
    /* @__PURE__ */ r("circle", { cx: "38", cy: "20", r: "10", fill: "none", stroke: e.stroke, strokeWidth: "3" }),
    /* @__PURE__ */ r("circle", { cx: "0", cy: "0", r: "5", fill: "#0f172a" })
  ] });
}
function _t({ p: e }) {
  return /* @__PURE__ */ l(L, { children: [
    /* @__PURE__ */ r("path", { d: "M-24 24 V-6 Q-24 -30 0 -30 Q24 -30 24 -6 V24 l-8 -6 l-8 6 l-8 -6 l-8 6 l-8 -6z", fill: e.fill, stroke: e.stroke, opacity: ".68", strokeWidth: "2" }),
    /* @__PURE__ */ r("circle", { cx: "-8", cy: "-8", r: "4", fill: "#0f172a" }),
    /* @__PURE__ */ r("circle", { cx: "8", cy: "-8", r: "4", fill: "#0f172a" })
  ] });
}
function Et({ kind: e, p: t }) {
  return e ? e === "antenna" ? /* @__PURE__ */ r("path", { d: "M0 -39 V-54 M-7 -54 H7", stroke: t.stroke, strokeWidth: "3", strokeLinecap: "round" }) : e === "headphones" ? /* @__PURE__ */ r("path", { d: "M-28 -4 Q0 -36 28 -4 M-28 -4 V12 M28 -4 V12", stroke: t.stroke, strokeWidth: "4", fill: "none" }) : e === "toolbelt" ? /* @__PURE__ */ r("rect", { x: "-25", y: "18", width: "50", height: "8", rx: "4", fill: "#422006", opacity: ".8" }) : e === "book" ? /* @__PURE__ */ r("rect", { x: "18", y: "10", width: "18", height: "24", rx: "2", fill: "#1e293b", stroke: t.stroke }) : e === "shield" ? /* @__PURE__ */ r("path", { d: "M33 -12 l16 6 v13 q0 14 -16 21 q-16 -7 -16 -21 V-6z", fill: t.fill, stroke: t.stroke }) : /* @__PURE__ */ l("g", { children: [
    /* @__PURE__ */ r("circle", { cx: "-34", cy: "-30", r: "3", fill: t.stroke }),
    /* @__PURE__ */ r("circle", { cx: "34", cy: "-28", r: "2", fill: t.stroke }),
    /* @__PURE__ */ r("circle", { cx: "26", cy: "28", r: "2.5", fill: t.stroke })
  ] }) : null;
}
function St({ status: e }) {
  return /* @__PURE__ */ r("circle", { className: `oh-orb oh-orb-${e}`, cx: "28", cy: "-30", r: "8", stroke: "#0f172a", strokeWidth: "2" });
}
function At(e) {
  return Object.entries(we).find(([, t]) => t === e)?.[0] ?? "violet";
}
const Nt = {
  lobby: "#1f2937",
  "tytus-lab": "#312e81",
  "local-workshop": "#064e3b",
  "remote-balcony": "#164e63",
  "mcp-library": "#451a03",
  "incident-infirmary": "#450a0a"
};
function Ct({ agents: e, savedLayout: t, selectedId: n, onSelect: o }) {
  const i = xt(e, t), a = new Map(i.map((s) => [s.agentId, s])), c = kt(e.length);
  return /* @__PURE__ */ r("div", { className: "oh-scene-wrap", children: /* @__PURE__ */ l("svg", { viewBox: "0 0 1400 740", role: "img", "aria-label": "OpenHouse agent house", className: "oh-scene", children: [
    /* @__PURE__ */ l("defs", { children: [
      /* @__PURE__ */ l("linearGradient", { id: "houseFloor", x1: "0", x2: "1", y1: "0", y2: "1", children: [
        /* @__PURE__ */ r("stop", { offset: "0%", stopColor: "#0f172a" }),
        /* @__PURE__ */ r("stop", { offset: "100%", stopColor: "#020617" })
      ] }),
      /* @__PURE__ */ r("pattern", { id: "grid", width: "26", height: "26", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ r("path", { d: "M26 0H0V26", fill: "none", stroke: "rgba(148,163,184,.08)", strokeWidth: "1" }) })
    ] }),
    /* @__PURE__ */ r("rect", { x: "0", y: "0", width: "1400", height: "740", rx: "28", fill: "url(#houseFloor)" }),
    /* @__PURE__ */ r("rect", { x: "0", y: "0", width: "1400", height: "740", fill: "url(#grid)", opacity: ".8" }),
    G.map((s) => {
      const d = e.filter((x) => x.room === s.id).length;
      return /* @__PURE__ */ l("g", { children: [
        /* @__PURE__ */ r("rect", { x: s.x, y: s.y, width: s.w, height: s.h, rx: "28", fill: Nt[s.id], stroke: "rgba(226,232,240,.18)", strokeWidth: "2" }),
        /* @__PURE__ */ r("rect", { x: s.x + 10, y: s.y + 10, width: s.w - 20, height: s.h - 20, rx: "22", fill: "rgba(255,255,255,.035)" }),
        /* @__PURE__ */ r("text", { x: s.x + 24, y: s.y + 36, fill: "#e2e8f0", fontSize: "18", fontWeight: "800", children: s.label }),
        /* @__PURE__ */ r("text", { x: s.x + s.w - 34, y: s.y + 36, textAnchor: "end", fill: "#94a3b8", fontSize: "13", children: d })
      ] }, s.id);
    }),
    c ? /* @__PURE__ */ r(It, { agents: e, onSelect: o, selectedId: n }) : e.map((s) => {
      const d = a.get(s.id);
      return d ? /* @__PURE__ */ l("g", { transform: `translate(${d.x} ${d.y})`, onClick: () => o(s.id), role: "button", tabIndex: 0, className: "oh-agent-hit", children: [
        /* @__PURE__ */ r(wt, { body: s.body, status: s.status, selected: s.id === n, label: s.displayName }),
        /* @__PURE__ */ r("text", { y: "68", textAnchor: "middle", fill: "#e5e7eb", fontSize: "12", fontWeight: "700", children: Tt(s.displayName, 16) })
      ] }, s.id) : null;
    })
  ] }) });
}
function It({ agents: e, selectedId: t, onSelect: n }) {
  return /* @__PURE__ */ r(L, { children: G.map((o) => {
    const i = e.filter((s) => s.room === o.id);
    if (!i.length) return null;
    const a = i.filter((s) => s.status === "error" || s.status === "offline").length, c = i.filter((s) => s.status === "online" || s.status === "busy").length;
    return /* @__PURE__ */ l("g", { transform: `translate(${o.x + o.w / 2} ${o.y + o.h / 2 + 8})`, onClick: () => n(i[0].id), className: "oh-agent-hit", children: [
      /* @__PURE__ */ r("circle", { r: "48", fill: "rgba(15,23,42,.82)", stroke: a ? "#f87171" : "#67e8f9", strokeWidth: "3" }),
      /* @__PURE__ */ r("text", { textAnchor: "middle", y: "-8", fill: "#f8fafc", fontSize: "28", fontWeight: "900", children: i.length }),
      /* @__PURE__ */ r("text", { textAnchor: "middle", y: "18", fill: "#cbd5e1", fontSize: "12", children: "agents" }),
      /* @__PURE__ */ l("text", { textAnchor: "middle", y: "38", fill: a ? "#fecaca" : "#bbf7d0", fontSize: "11", children: [
        c,
        " ok · ",
        a,
        " issue"
      ] }),
      t && i.some((s) => s.id === t) && /* @__PURE__ */ r("circle", { r: "58", fill: "none", stroke: "#f8fafc", strokeDasharray: "8 8" })
    ] }, o.id);
  }) });
}
function Tt(e, t) {
  return e.length <= t ? e : `${e.slice(0, t - 1)}…`;
}
const $t = [
  { value: "openai-compatible", label: "OpenAI-compatible", help: "GET /v1/models" },
  { value: "custom-health", label: "Custom health", help: "GET /health or custom path" },
  { value: "openhouse-probe", label: "OpenHouse probe", help: "GET /.well-known/openhouse-agent.json" },
  { value: "mcp-http", label: "MCP HTTP/SSE", help: "Basic well-known/health probe" }
];
function Lt({ open: e, onClose: t, onAdd: n }) {
  const [o, i] = f("openai-compatible"), [a, c] = f(""), [s, d] = f(""), [x, N] = f("/health"), [k, w] = f("none"), [E, b] = f(""), [C, I] = f(null);
  return e ? /* @__PURE__ */ r("div", { className: "oh-modal-backdrop", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ l("form", { className: "oh-modal", onSubmit: (p) => {
    p.preventDefault();
    try {
      const v = R(s), T = Date.now(), Q = `src-${T.toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
      n({
        id: Q,
        kind: o,
        name: a.trim() || zt(v),
        baseUrl: v,
        healthPath: o === "custom-health" || o === "mcp-http" ? Z(x, "/health") : void 0,
        enabled: !0,
        authMode: k,
        createdAt: T,
        updatedAt: T
      }, k === "session-bearer" ? E : void 0), c(""), d(""), b(""), w("none"), I(null), t();
    } catch (v) {
      I(v instanceof Error ? v.message : String(v));
    }
  }, children: [
    /* @__PURE__ */ l("div", { className: "oh-modal-head", children: [
      /* @__PURE__ */ r("h2", { children: "Add agent resident" }),
      /* @__PURE__ */ r("button", { type: "button", onClick: t, children: /* @__PURE__ */ r(Je, { size: 18 }) })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Connector type",
      /* @__PURE__ */ r("select", { value: o, onChange: (p) => i(p.target.value), children: $t.map((p) => /* @__PURE__ */ l("option", { value: p.value, children: [
        p.label,
        " — ",
        p.help
      ] }, p.value)) })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Name",
      /* @__PURE__ */ r("input", { value: a, onChange: (p) => c(p.target.value), placeholder: "Agent Studio Local" })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Base URL",
      /* @__PURE__ */ r("input", { value: s, onChange: (p) => d(p.target.value), placeholder: "https://agent.example.com or http://localhost:8080", required: !0 })
    ] }),
    (o === "custom-health" || o === "mcp-http") && /* @__PURE__ */ l("label", { children: [
      "Health path",
      /* @__PURE__ */ r("input", { value: x, onChange: (p) => N(p.target.value), placeholder: "/health" })
    ] }),
    /* @__PURE__ */ l("label", { children: [
      "Auth mode",
      /* @__PURE__ */ l("select", { value: k, onChange: (p) => w(p.target.value), children: [
        /* @__PURE__ */ r("option", { value: "none", children: "None" }),
        /* @__PURE__ */ r("option", { value: "session-bearer", children: "Session bearer (not persisted)" })
      ] })
    ] }),
    k === "session-bearer" && /* @__PURE__ */ l("label", { children: [
      "Session bearer",
      /* @__PURE__ */ r("input", { type: "password", value: E, onChange: (p) => b(p.target.value), placeholder: "Stored in memory only" })
    ] }),
    C && /* @__PURE__ */ r("p", { className: "oh-form-error", children: C }),
    /* @__PURE__ */ l("footer", { children: [
      /* @__PURE__ */ r("button", { type: "button", onClick: t, children: "Cancel" }),
      /* @__PURE__ */ l("button", { className: "primary", children: [
        /* @__PURE__ */ r(me, { size: 16 }),
        "Add resident"
      ] })
    ] })
  ] }) }) : null;
}
function zt(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "External agent";
  }
}
function Ot({ agent: e, history: t, sources: n, probing: o, onProbe: i, onDeleteSource: a }) {
  if (!e)
    return /* @__PURE__ */ l("aside", { className: "oh-inspector oh-empty", children: [
      /* @__PURE__ */ r("h2", { children: "No agent selected" }),
      /* @__PURE__ */ r("p", { children: "Pick an agent body in the house to see operational truth." })
    ] });
  const c = n.find((d) => d.id === e.sourceId), s = Pt(e);
  return /* @__PURE__ */ l("aside", { className: "oh-inspector", children: [
    /* @__PURE__ */ l("div", { className: "oh-inspector-head", children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("p", { className: "oh-kicker", children: e.sourceKind }),
        /* @__PURE__ */ r("h2", { children: e.displayName })
      ] }),
      /* @__PURE__ */ r(Ht, { status: e.status })
    ] }),
    /* @__PURE__ */ l("div", { className: "oh-agent-big", children: [
      /* @__PURE__ */ r("span", { className: `oh-avatar-dot oh-dot-${e.status}` }),
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("strong", { children: e.body.species }),
        /* @__PURE__ */ l("span", { children: [
          e.body.palette,
          " · ",
          e.mood
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("dl", { className: "oh-facts", children: [
      /* @__PURE__ */ r("dt", { children: "Room" }),
      /* @__PURE__ */ r("dd", { children: e.room }),
      /* @__PURE__ */ r("dt", { children: "Endpoint" }),
      /* @__PURE__ */ r("dd", { children: e.endpointHost ?? "—" }),
      /* @__PURE__ */ r("dt", { children: "Latency" }),
      /* @__PURE__ */ r("dd", { children: e.latencyMs === void 0 ? "—" : `${e.latencyMs}ms` }),
      /* @__PURE__ */ r("dt", { children: "Last seen" }),
      /* @__PURE__ */ r("dd", { children: e.lastSeenAt ? new Date(e.lastSeenAt).toLocaleTimeString() : "—" })
    ] }),
    /* @__PURE__ */ r("div", { className: "oh-caps", children: e.capabilities.map((d) => /* @__PURE__ */ r("span", { children: d }, d)) }),
    e.lastError && /* @__PURE__ */ l("div", { className: "oh-error", children: [
      /* @__PURE__ */ r(ge, { size: 16 }),
      e.lastError
    ] }),
    /* @__PURE__ */ l("div", { className: "oh-actions", children: [
      /* @__PURE__ */ l("button", { onClick: () => i(e), disabled: o, children: [
        /* @__PURE__ */ r(be, { size: 15 }),
        o ? "Testing…" : "Test connection"
      ] }),
      /* @__PURE__ */ l("button", { onClick: () => void navigator.clipboard?.writeText(s), children: [
        /* @__PURE__ */ r(Re, { size: 15 }),
        "Copy diagnostic"
      ] }),
      c && c.kind !== "tytus-daemon" && /* @__PURE__ */ l("button", { className: "danger", onClick: () => a(c.id), children: [
        /* @__PURE__ */ r(qe, { size: 15 }),
        "Delete source"
      ] })
    ] }),
    /* @__PURE__ */ l("section", { children: [
      /* @__PURE__ */ r("h3", { children: "Probe history" }),
      /* @__PURE__ */ l("div", { className: "oh-history", children: [
        t.length === 0 && /* @__PURE__ */ r("p", { children: "No probes yet." }),
        t.map((d) => /* @__PURE__ */ l("div", { className: "oh-history-row", children: [
          /* @__PURE__ */ r(Rt, { status: d.status }),
          /* @__PURE__ */ r("span", { children: d.status }),
          /* @__PURE__ */ l("small", { children: [
            d.latencyMs ?? "—",
            "ms · ",
            new Date(d.createdAt).toLocaleTimeString()
          ] }),
          d.error && /* @__PURE__ */ r("em", { children: d.error })
        ] }, d.id))
      ] })
    ] })
  ] });
}
function Ht({ status: e }) {
  return /* @__PURE__ */ r("span", { className: `oh-pill oh-pill-${e}`, children: e });
}
function Rt({ status: e }) {
  return e === "online" || e === "busy" ? /* @__PURE__ */ r(Le, { size: 14 }) : /* @__PURE__ */ r(Ze, { size: 14 });
}
function Pt(e) {
  return [
    "OpenHouse diagnostic",
    `agent=${e.displayName}`,
    `source=${e.sourceKind}`,
    `status=${e.status}`,
    `room=${e.room}`,
    `endpoint_host=${e.endpointHost ?? "unknown"}`,
    `latency_ms=${e.latencyMs ?? "unknown"}`,
    `error=${e.lastError ?? "none"}`
  ].join(`
`);
}
const Ut = [
  { id: "all", label: "All residents", icon: X },
  { id: "tytus-daemon", label: "Tytus Lab", icon: Ue },
  { id: "openai-compatible", label: "OpenAI", icon: Oe },
  { id: "custom-health", label: "Health", icon: X },
  { id: "openhouse-probe", label: "OpenHouse", icon: X },
  { id: "mcp-http", label: "MCP Library", icon: We },
  { id: "issues", label: "Issues", icon: ge }
];
function Dt({ agents: e, filter: t, onFilter: n }) {
  return /* @__PURE__ */ r("nav", { className: "oh-rail", children: Ut.map((o) => {
    const i = o.icon, a = Wt(o.id, e);
    return /* @__PURE__ */ l("button", { className: t === o.id ? "active" : "", onClick: () => n(o.id), children: [
      /* @__PURE__ */ r(i, { size: 17 }),
      /* @__PURE__ */ r("span", { children: o.label }),
      /* @__PURE__ */ r("strong", { children: a })
    ] }, o.id);
  }) });
}
function Wt(e, t) {
  return e === "all" ? t.length : e === "issues" ? t.filter(ae).length : t.filter((n) => n.sourceKind === e).length;
}
function ae(e) {
  return ["error", "offline", "degraded"].includes(e.status);
}
const jt = `
.oh-root{height:100%;min-height:720px;background:#020617;color:#e5e7eb;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;display:flex;flex-direction:column;overflow:hidden}.oh-root *{box-sizing:border-box}.oh-header{height:82px;display:flex;align-items:center;gap:24px;padding:18px 22px;border-bottom:1px solid rgba(148,163,184,.16);background:linear-gradient(90deg,rgba(15,23,42,.98),rgba(49,46,129,.55),rgba(8,47,73,.45))}.oh-header p,.oh-kicker{margin:0;color:#a78bfa;text-transform:uppercase;letter-spacing:.14em;font-size:11px;font-weight:900}.oh-header h1{margin:1px 0 0;font-size:28px;line-height:1}.oh-summary{display:flex;gap:8px;margin-left:auto}.oh-summary span,.oh-caps span{border:1px solid rgba(226,232,240,.14);background:rgba(15,23,42,.58);color:#cbd5e1;border-radius:999px;padding:7px 10px;font-size:12px;font-weight:800}.oh-header-actions{display:flex;gap:10px}.oh-root button{border:1px solid rgba(226,232,240,.16);background:rgba(15,23,42,.72);color:#e5e7eb;border-radius:12px;padding:9px 12px;font-weight:850;display:inline-flex;align-items:center;gap:7px;cursor:pointer}.oh-root button:hover{border-color:rgba(167,139,250,.75);background:rgba(88,28,135,.42)}.oh-root button:disabled{opacity:.5;cursor:not-allowed}.oh-root button.primary{background:linear-gradient(135deg,#7c3aed,#06b6d4);border:0}.oh-root button.danger{color:#fecaca;border-color:rgba(248,113,113,.35)}.oh-main{min-height:0;flex:1;display:grid;grid-template-columns:210px minmax(0,1fr) 330px;gap:14px;padding:14px}.oh-rail,.oh-inspector{border:1px solid rgba(226,232,240,.12);background:rgba(15,23,42,.72);border-radius:24px;padding:12px;box-shadow:0 18px 60px rgba(0,0,0,.32)}.oh-rail{display:flex;flex-direction:column;gap:8px}.oh-rail button{width:100%;justify-content:flex-start;border-radius:16px;padding:11px}.oh-rail button strong{margin-left:auto;color:#c4b5fd}.oh-rail button.active{background:rgba(124,58,237,.35);border-color:#a78bfa}.oh-stage{position:relative;min-width:0}.oh-scene-wrap{height:100%;min-height:620px;border:1px solid rgba(226,232,240,.12);border-radius:28px;overflow:hidden;background:#020617;box-shadow:inset 0 0 80px rgba(14,165,233,.08),0 18px 60px rgba(0,0,0,.35)}.oh-scene{width:100%;height:100%;display:block}.oh-agent-hit{cursor:pointer;outline:none}.oh-agent-hit:hover .oh-agent-body{filter:brightness(1.18)}.oh-agent-body{transition:filter .18s ease}.oh-selected rect,.oh-selected path,.oh-selected circle{stroke-width:3}.oh-orb-online,.oh-orb-busy{fill:#22c55e}.oh-orb-starting,.oh-orb-degraded{fill:#f59e0b}.oh-orb-error{fill:#ef4444}.oh-orb-offline{fill:#64748b}.oh-orb-unknown{fill:#94a3b8}.oh-breathe{animation:oh-breathe 3s ease-in-out infinite}.oh-pulse{animation:oh-pulse 1.7s ease-in-out infinite}.oh-typing{animation:oh-typing .7s linear infinite alternate}.oh-scan{animation:oh-scan 2.2s linear infinite}.oh-sleep{opacity:.65;animation:oh-sleep 3s ease-in-out infinite}.oh-alarm{animation:oh-alarm .6s ease-in-out infinite alternate}.oh-inspector{overflow:auto}.oh-empty{display:flex;flex-direction:column;justify-content:center;color:#94a3b8}.oh-inspector-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.oh-inspector h2{font-size:23px;margin:4px 0 0}.oh-inspector h3{font-size:14px;margin:18px 0 8px;color:#c4b5fd}.oh-pill{border-radius:999px;padding:6px 9px;font-size:11px;font-weight:900;text-transform:uppercase}.oh-pill-online,.oh-pill-busy{background:rgba(34,197,94,.18);color:#bbf7d0}.oh-pill-starting,.oh-pill-degraded{background:rgba(245,158,11,.18);color:#fde68a}.oh-pill-error{background:rgba(239,68,68,.18);color:#fecaca}.oh-pill-offline,.oh-pill-unknown{background:rgba(100,116,139,.22);color:#cbd5e1}.oh-agent-big{display:flex;gap:12px;align-items:center;margin:18px 0;padding:14px;border-radius:18px;background:rgba(255,255,255,.045);border:1px solid rgba(226,232,240,.1)}.oh-agent-big strong{display:block}.oh-agent-big span span{display:block;color:#94a3b8;font-size:12px}.oh-avatar-dot{width:34px;height:34px;border-radius:999px;display:inline-block;box-shadow:0 0 24px currentColor}.oh-dot-online,.oh-dot-busy{background:#22c55e;color:#22c55e}.oh-dot-starting,.oh-dot-degraded{background:#f59e0b;color:#f59e0b}.oh-dot-error{background:#ef4444;color:#ef4444}.oh-dot-offline,.oh-dot-unknown{background:#64748b;color:#64748b}.oh-facts{display:grid;grid-template-columns:86px 1fr;gap:8px 10px;margin:0}.oh-facts dt{color:#94a3b8;font-size:12px}.oh-facts dd{margin:0;color:#e5e7eb;font-size:12px;font-weight:800;word-break:break-word}.oh-caps{display:flex;flex-wrap:wrap;gap:6px;margin:16px 0}.oh-error{display:flex;gap:8px;align-items:flex-start;color:#fecaca;background:rgba(127,29,29,.35);border:1px solid rgba(248,113,113,.25);border-radius:14px;padding:10px;font-size:12px}.oh-actions{display:grid;gap:8px;margin:14px 0}.oh-history{display:grid;gap:8px}.oh-history p{color:#94a3b8;font-size:12px}.oh-history-row{display:grid;grid-template-columns:18px 1fr;gap:2px 7px;padding:9px;border-radius:13px;background:rgba(255,255,255,.04);font-size:12px}.oh-history-row small{color:#94a3b8}.oh-history-row em{grid-column:2;color:#fecaca;font-style:normal}.oh-modal-backdrop{position:absolute;inset:0;z-index:10;background:rgba(2,6,23,.72);backdrop-filter:blur(10px);display:grid;place-items:center}.oh-modal{width:min(560px,calc(100% - 40px));background:#0f172a;border:1px solid rgba(226,232,240,.16);border-radius:26px;padding:18px;box-shadow:0 30px 90px rgba(0,0,0,.55);display:grid;gap:12px}.oh-modal-head{display:flex;align-items:center;justify-content:space-between}.oh-modal h2{margin:0}.oh-modal label{display:grid;gap:6px;color:#cbd5e1;font-size:12px;font-weight:850}.oh-modal input,.oh-modal select{width:100%;border:1px solid rgba(226,232,240,.16);background:#020617;color:#e5e7eb;border-radius:12px;padding:10px}.oh-modal footer{display:flex;justify-content:flex-end;gap:10px}.oh-form-error{color:#fecaca;margin:0;font-size:12px}.oh-zero{position:absolute;inset:22px;z-index:1;display:grid;place-content:center;text-align:center;color:#cbd5e1;pointer-events:none}.oh-zero h2{margin:12px 0 4px}.oh-zero p{margin:0;max-width:420px;color:#94a3b8}@keyframes oh-breathe{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}@keyframes oh-pulse{0%,100%{opacity:.78;transform:scale(.98)}50%{opacity:1;transform:scale(1.04)}}@keyframes oh-typing{from{transform:translateX(-1px)}to{transform:translateX(2px)}}@keyframes oh-scan{0%,100%{filter:hue-rotate(0deg) brightness(1)}50%{filter:hue-rotate(25deg) brightness(1.24)}}@keyframes oh-sleep{0%,100%{transform:translateY(0);opacity:.58}50%{transform:translateY(4px);opacity:.75}}@keyframes oh-alarm{from{filter:drop-shadow(0 0 2px #ef4444)}to{filter:drop-shadow(0 0 18px #ef4444);transform:rotate(-2deg)}}@media (prefers-reduced-motion:reduce){.oh-breathe,.oh-pulse,.oh-typing,.oh-scan,.oh-sleep,.oh-alarm{animation:none}}@media (max-width:980px){.oh-main{grid-template-columns:1fr}.oh-rail{flex-direction:row;overflow:auto}.oh-inspector{min-height:260px}.oh-scene-wrap{min-height:520px}.oh-summary{display:none}}
`;
function Bt({ host: e }) {
  const [t] = f(() => e.storage.current()), [n, o] = f(() => de(e.daemon.state.agents, e.daemon.state.included)), [i, a] = f([]), [c, s] = f([]), [d, x] = f([]), [N, k] = f([]), [w, E] = f(), [b, C] = f("all"), [I, p] = f(!1), [v, T] = f(!1), [Q, J] = f(null), [S, ie] = f({ bearerBySourceId: {} });
  W(() => {
    let h = !0;
    return Promise.all([ee(t), ft(t), te(t)]).then(([g, u, y]) => {
      h && (a(g), x(u), k(y));
    }), () => {
      h = !1;
    };
  }, [t]), W(() => e.daemon.onStateChange((h) => {
    o(de(h.agents, h.included));
  }), [e]);
  const U = j(async (h = i, g = S) => {
    T(!0);
    const u = h.filter((A) => A.enabled), y = [];
    for (const A of Ft(u, 4)) {
      const _ = await Promise.all(A.map(($) => he($, g)));
      y.push(..._), s([...y]);
      for (const $ of _) await oe(t, $);
    }
    s(y), k(await te(t)), T(!1);
  }, [t, S, i]);
  W(() => {
    i.length && U(i, S);
  }, [i.length]);
  const M = le(() => [...n, ...c], [n, c]), z = le(() => b === "all" ? M : b === "issues" ? M.filter(ae) : M.filter((h) => h.sourceKind === b), [M, b]), D = M.find((h) => h.id === w) ?? z[0], ve = N.filter((h) => h.agentId === D?.id);
  W(() => {
    !w && z[0] && E(z[0].id);
  }, [w, z]);
  const Me = j((h, g) => {
    const u = g ? { bearerBySourceId: { ...S.bearerBySourceId, [h.id]: g } } : S;
    ie(u), pt(t, h).then(async () => {
      const y = await ee(t);
      a(y), await U(y, u), e.notifications.notify({ title: "OpenHouse resident added", body: `${h.name} moved into the house.`, level: "success" });
    });
  }, [t, e.notifications, U, S]), _e = j((h) => {
    ut(t, h).then(async () => {
      a(await ee(t)), s((g) => g.filter((u) => u.sourceId !== h)), ie((g) => {
        const u = { ...g.bearerBySourceId };
        return delete u[h], { bearerBySourceId: u };
      });
    });
  }, [t]), Ee = j((h) => {
    J(h.id), (async () => {
      if (h.sourceKind === "tytus-daemon") {
        const u = h.id.replace(/^tytus:/, ""), y = await rt(h.id, (_) => e.daemon.callPodEndpoint(u, _)), A = { ...h, status: y.status, latencyMs: y.latencyMs, lastError: y.lastError, capabilities: y.capabilities };
        o((_) => _.map(($) => $.id === h.id ? A : $)), await oe(t, A);
      } else {
        const u = i.find((y) => y.id === h.sourceId);
        if (u) {
          const y = await he(u, S);
          s((A) => A.map((_) => _.id === h.id ? y : _)), await oe(t, y);
        }
      }
      k(await te(t)), J(null);
    })().catch(async (u) => {
      e.notifications.notify({ title: "OpenHouse probe failed", body: u instanceof Error ? u.message : String(u), level: "error" }), J(null);
    });
  }, [t, e.daemon, e.notifications, S, i]), se = Kt(M);
  return /* @__PURE__ */ l("div", { className: "oh-root", children: [
    /* @__PURE__ */ r("style", { children: jt }),
    /* @__PURE__ */ l("header", { className: "oh-header", children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("p", { children: "OpenHouse" }),
        /* @__PURE__ */ r("h1", { children: "Agent House" })
      ] }),
      /* @__PURE__ */ l("div", { className: "oh-summary", children: [
        /* @__PURE__ */ l("span", { children: [
          M.length,
          " residents"
        ] }),
        /* @__PURE__ */ l("span", { children: [
          se.issues,
          " issues"
        ] }),
        /* @__PURE__ */ l("span", { children: [
          se.online,
          " online"
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "oh-header-actions", children: [
        /* @__PURE__ */ l("button", { onClick: () => p(!0), children: [
          /* @__PURE__ */ r(me, { size: 16 }),
          "Add agent"
        ] }),
        /* @__PURE__ */ l("button", { onClick: () => void U(), disabled: v, children: [
          /* @__PURE__ */ r(be, { size: 16 }),
          v ? "Refreshing…" : "Refresh external"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("main", { className: "oh-main", children: [
      /* @__PURE__ */ r(Dt, { agents: M, filter: b, onFilter: C }),
      /* @__PURE__ */ l("section", { className: "oh-stage", children: [
        M.length === 0 && /* @__PURE__ */ l("div", { className: "oh-zero", children: [
          /* @__PURE__ */ r(Ke, { size: 36 }),
          /* @__PURE__ */ r("h2", { children: "No residents yet" }),
          /* @__PURE__ */ r("p", { children: "Tytus daemon pods appear automatically. Add third-party agents to give them a body and room." })
        ] }),
        /* @__PURE__ */ r(Ct, { agents: z, savedLayout: d, selectedId: D?.id, onSelect: E })
      ] }),
      /* @__PURE__ */ r(Ot, { agent: D, history: ve, sources: i, probing: Q === D?.id, onProbe: Ee, onDeleteSource: _e })
    ] }),
    /* @__PURE__ */ r(Lt, { open: I, onClose: () => p(!1), onAdd: Me })
  ] });
}
async function oe(e, t) {
  await yt(e, {
    id: `probe-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    agentId: t.id,
    sourceId: t.sourceId,
    status: t.status,
    latencyMs: t.latencyMs ?? null,
    error: t.lastError ?? null,
    createdAt: Date.now()
  });
}
function Ft(e, t) {
  const n = [];
  for (let o = 0; o < e.length; o += t) n.push(e.slice(o, o + t));
  return n;
}
function Kt(e) {
  const t = e.filter(ae).length, n = e.filter((o) => o.status === "online" || o.status === "busy").length;
  return { issues: t, online: n };
}
function Gt(e) {
  return e.host.storage.current().migrate("migrations/"), function() {
    return /* @__PURE__ */ r(Bt, { host: e.host });
  };
}
export {
  Gt as default
};
//# sourceMappingURL=index.js.map
