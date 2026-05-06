CREATE TABLE IF NOT EXISTS app_openhouse_agents (
  id TEXT PRIMARY KEY,
  source_id TEXT NOT NULL,
  display_name TEXT NOT NULL,
  last_status TEXT NOT NULL DEFAULT 'unknown',
  last_seen_at INTEGER,
  last_error TEXT,
  capabilities_json TEXT NOT NULL DEFAULT '[]',
  raw_summary_json TEXT NOT NULL DEFAULT '{}'
);
CREATE INDEX IF NOT EXISTS idx_app_openhouse_agents_source ON app_openhouse_agents(source_id);
