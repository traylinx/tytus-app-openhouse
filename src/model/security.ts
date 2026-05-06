const WHOLE_SECRET_PATTERNS = [
  /Bearer\s+[A-Za-z0-9._\-~+/]+=*/gi,
  /sk-[A-Za-z0-9_\-]{12,}/g,
  /gsk_[A-Za-z0-9_\-]{12,}/g,
  /AIza[0-9A-Za-z_\-]{20,}/g,
];

const KEY_VALUE_SECRET = /(api[_-]?key|token|secret|authorization)(["'\s:=]+)([A-Za-z0-9._\-~+/=]{8,})/gi;

export function redactSecretLike(input: unknown): string {
  let text = input instanceof Error ? input.message : String(input ?? '');
  for (const pattern of WHOLE_SECRET_PATTERNS) {
    text = text.replace(pattern, '[REDACTED]');
  }
  text = text.replace(KEY_VALUE_SECRET, (_match, key: string, sep: string) => `${key}${sep}[REDACTED]`);
  return text;
}

export function endpointHost(rawUrl: string): string {
  try {
    const u = new URL(rawUrl);
    return u.host;
  } catch {
    return rawUrl.replace(/[?#].*$/, '');
  }
}

export function normalizeBaseUrl(raw: string): string {
  const trimmed = raw.trim().replace(/\/+$/, '');
  if (!trimmed) throw new Error('Base URL is required.');
  const url = new URL(trimmed);
  const host = url.hostname.toLowerCase();
  const local = host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || host === '::1';
  if (url.protocol === 'https:') return url.toString().replace(/\/+$/, '');
  if (url.protocol === 'http:' && local) return url.toString().replace(/\/+$/, '');
  throw new Error('Only HTTPS and local HTTP endpoints are allowed in OpenHouse v1.');
}

export function safePath(path: string | undefined, fallback: string): string {
  const p = (path || fallback).trim() || fallback;
  if (!p.startsWith('/')) return `/${p}`;
  return p;
}

export function joinUrl(baseUrl: string, path: string): string {
  return `${baseUrl.replace(/\/+$/, '')}${safePath(path, '/')}`;
}
