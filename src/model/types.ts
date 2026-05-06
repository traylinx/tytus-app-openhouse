import type { HostClient } from '@tytus/host-api';

export type AgentSourceKind =
  | 'tytus-daemon'
  | 'openai-compatible'
  | 'custom-health'
  | 'openhouse-probe'
  | 'mcp-http';

export type AuthMode = 'none' | 'session-bearer' | 'keychain-ref';

export type AgentStatus =
  | 'online'
  | 'busy'
  | 'starting'
  | 'degraded'
  | 'offline'
  | 'error'
  | 'unknown';

export type AgentMood =
  | 'focused'
  | 'idle'
  | 'thinking'
  | 'celebrating'
  | 'stressed'
  | 'sleeping'
  | 'sick';

export type RoomId =
  | 'lobby'
  | 'tytus-lab'
  | 'local-workshop'
  | 'remote-balcony'
  | 'mcp-library'
  | 'incident-infirmary';

export type AgentCapability =
  | 'models'
  | 'chat'
  | 'tools'
  | 'files'
  | 'health'
  | 'mcp'
  | 'music'
  | 'unknown';

export interface AgentBodySpec {
  species: 'robot' | 'hologram' | 'owl' | 'forge' | 'librarian' | 'drone' | 'ghost' | 'custom';
  palette: 'violet' | 'cyan' | 'green' | 'amber' | 'red' | 'silver';
  accessory?: 'antenna' | 'headphones' | 'toolbelt' | 'book' | 'shield' | 'sparkles';
  animation: 'breathe' | 'pulse' | 'typing' | 'scan' | 'sleep' | 'alarm';
}

export interface AgentSourceConfig {
  id: string;
  kind: AgentSourceKind;
  name: string;
  baseUrl: string;
  healthPath?: string;
  enabled: boolean;
  authMode: AuthMode;
  keychainRef?: string | null;
  body?: Partial<AgentBodySpec>;
  room?: RoomId | null;
  createdAt: number;
  updatedAt: number;
}

export interface OpenHouseAgent {
  id: string;
  sourceId: string;
  sourceKind: AgentSourceKind;
  displayName: string;
  status: AgentStatus;
  mood: AgentMood;
  body: AgentBodySpec;
  room: RoomId;
  endpointHost?: string;
  capabilities: AgentCapability[];
  latencyMs?: number;
  lastSeenAt?: number;
  lastError?: string;
  raw?: Record<string, unknown>;
}

export interface LayoutPosition {
  agentId: string;
  room: RoomId;
  x: number;
  y: number;
  pinned: boolean;
  updatedAt: number;
}

export interface ProbeResult {
  agentId: string;
  sourceId: string;
  status: AgentStatus;
  latencyMs?: number;
  capabilities: AgentCapability[];
  displayName?: string;
  mood?: AgentMood;
  body?: Partial<AgentBodySpec>;
  lastError?: string;
  raw?: Record<string, unknown>;
}

export interface ProbeHistoryRow {
  id: string;
  agentId: string;
  sourceId: string;
  status: AgentStatus;
  latencyMs?: number | null;
  error?: string | null;
  createdAt: number;
}

export interface OpenHouseProps {
  host: HostClient;
}

export interface SessionSecrets {
  bearerBySourceId: Record<string, string>;
}
