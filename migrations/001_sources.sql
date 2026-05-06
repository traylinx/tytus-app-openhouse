CREATE TABLE IF NOT EXISTS app_openhouse_sources (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL,
  name TEXT NOT NULL,
  base_url TEXT NOT NULL,
  health_path TEXT,
  enabled INTEGER NOT NULL DEFAULT 1,
  auth_mode TEXT NOT NULL DEFAULT 'none',
  keychain_ref TEXT,
  body_json TEXT NOT NULL DEFAULT '{}',
  room TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_app_openhouse_sources_enabled ON app_openhouse_sources(enabled);
