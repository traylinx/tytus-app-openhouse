CREATE TABLE IF NOT EXISTS app_openhouse_layout (
  agent_id TEXT PRIMARY KEY,
  room TEXT NOT NULL,
  x REAL NOT NULL,
  y REAL NOT NULL,
  pinned INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_app_openhouse_layout_room ON app_openhouse_layout(room);
