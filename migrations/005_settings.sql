CREATE TABLE IF NOT EXISTS app_openhouse_settings (
  key TEXT PRIMARY KEY,
  value_json TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);
