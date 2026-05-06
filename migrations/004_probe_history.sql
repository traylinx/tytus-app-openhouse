CREATE TABLE IF NOT EXISTS app_openhouse_probe_history (
  id TEXT PRIMARY KEY,
  agent_id TEXT NOT NULL,
  source_id TEXT NOT NULL,
  status TEXT NOT NULL,
  latency_ms INTEGER,
  error TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_app_openhouse_probe_history_agent_ts ON app_openhouse_probe_history(agent_id, created_at DESC);
