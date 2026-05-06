import type { AppDb } from '@tytus/host-api';
import type { AgentSourceConfig, AgentSourceKind, AuthMode, LayoutPosition, ProbeHistoryRow, RoomId } from '@/model/types';
import { redactSecretLike } from '@/model/security';

export const HISTORY_CAP = 100;

type SourceRow = {
  id: string; kind: AgentSourceKind; name: string; base_url: string; health_path: string | null;
  enabled: number; auth_mode: AuthMode; keychain_ref: string | null; body_json: string; room: RoomId | null;
  created_at: number; updated_at: number;
};

type LayoutRow = { agent_id: string; room: RoomId; x: number; y: number; pinned: number; updated_at: number };
type HistoryDbRow = { id: string; agent_id: string; source_id: string; status: ProbeHistoryRow['status']; latency_ms: number | null; error: string | null; created_at: number };

export async function listSources(db: AppDb): Promise<AgentSourceConfig[]> {
  try {
    const rows = await db.query<SourceRow>('SELECT * FROM app_openhouse_sources ORDER BY created_at ASC');
    return rows.map(sourceFromRow);
  } catch {
    return [];
  }
}

export async function upsertSource(db: AppDb, source: AgentSourceConfig): Promise<void> {
  await db.run(
    `INSERT INTO app_openhouse_sources
      (id, kind, name, base_url, health_path, enabled, auth_mode, keychain_ref, body_json, room, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       kind=excluded.kind, name=excluded.name, base_url=excluded.base_url,
       health_path=excluded.health_path, enabled=excluded.enabled,
       auth_mode=excluded.auth_mode, keychain_ref=excluded.keychain_ref,
       body_json=excluded.body_json, room=excluded.room, updated_at=excluded.updated_at`,
    [
      source.id, source.kind, source.name, source.baseUrl, source.healthPath ?? null,
      source.enabled ? 1 : 0, source.authMode, source.keychainRef ?? null,
      JSON.stringify(source.body ?? {}), source.room ?? null, source.createdAt, source.updatedAt,
    ],
  );
}

export async function deleteSource(db: AppDb, id: string): Promise<void> {
  await db.run('DELETE FROM app_openhouse_sources WHERE id = ?', [id]);
  await db.run('DELETE FROM app_openhouse_agents WHERE source_id = ?', [id]);
  await db.run('DELETE FROM app_openhouse_probe_history WHERE source_id = ?', [id]);
}

export async function listLayout(db: AppDb): Promise<LayoutPosition[]> {
  try {
    const rows = await db.query<LayoutRow>('SELECT * FROM app_openhouse_layout');
    return rows.map((r) => ({ agentId: r.agent_id, room: r.room, x: r.x, y: r.y, pinned: !!r.pinned, updatedAt: r.updated_at }));
  } catch {
    return [];
  }
}

export async function saveLayout(db: AppDb, pos: LayoutPosition): Promise<void> {
  await db.run(
    `INSERT INTO app_openhouse_layout (agent_id, room, x, y, pinned, updated_at)
     VALUES (?, ?, ?, ?, ?, ?)
     ON CONFLICT(agent_id) DO UPDATE SET room=excluded.room, x=excluded.x, y=excluded.y, pinned=excluded.pinned, updated_at=excluded.updated_at`,
    [pos.agentId, pos.room, pos.x, pos.y, pos.pinned ? 1 : 0, pos.updatedAt],
  );
}

export async function addHistory(db: AppDb, row: ProbeHistoryRow): Promise<void> {
  await db.run(
    `INSERT OR REPLACE INTO app_openhouse_probe_history
      (id, agent_id, source_id, status, latency_ms, error, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [row.id, row.agentId, row.sourceId, row.status, row.latencyMs ?? null, row.error ? redactSecretLike(row.error) : null, row.createdAt],
  );
  await db.run(
    `DELETE FROM app_openhouse_probe_history
      WHERE id NOT IN (SELECT id FROM app_openhouse_probe_history ORDER BY created_at DESC LIMIT ${HISTORY_CAP})`,
  );
}

export async function listHistory(db: AppDb, agentId?: string): Promise<ProbeHistoryRow[]> {
  try {
    const rows = agentId
      ? await db.query<HistoryDbRow>('SELECT * FROM app_openhouse_probe_history WHERE agent_id = ? ORDER BY created_at DESC LIMIT 20', [agentId])
      : await db.query<HistoryDbRow>('SELECT * FROM app_openhouse_probe_history ORDER BY created_at DESC LIMIT 50');
    return rows.map((r) => ({ id: r.id, agentId: r.agent_id, sourceId: r.source_id, status: r.status, latencyMs: r.latency_ms, error: r.error, createdAt: r.created_at }));
  } catch {
    return [];
  }
}

function sourceFromRow(r: SourceRow): AgentSourceConfig {
  return {
    id: r.id,
    kind: r.kind,
    name: r.name,
    baseUrl: r.base_url,
    healthPath: r.health_path ?? undefined,
    enabled: !!r.enabled,
    authMode: r.auth_mode,
    keychainRef: r.keychain_ref,
    body: parseObj(r.body_json),
    room: r.room,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  };
}

function parseObj(raw: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as Record<string, unknown> : {};
  } catch {
    return {};
  }
}
