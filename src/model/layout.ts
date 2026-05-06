import type { LayoutPosition, OpenHouseAgent, RoomId } from './types';

export interface RoomBox { id: RoomId; x: number; y: number; w: number; h: number; label: string; }

export const ROOMS: RoomBox[] = [
  { id: 'lobby', x: 40, y: 70, w: 300, h: 230, label: 'Lobby' },
  { id: 'tytus-lab', x: 380, y: 70, w: 440, h: 250, label: 'Tytus Lab' },
  { id: 'local-workshop', x: 860, y: 70, w: 460, h: 250, label: 'Local Workshop' },
  { id: 'remote-balcony', x: 40, y: 360, w: 430, h: 300, label: 'Remote Balcony' },
  { id: 'mcp-library', x: 510, y: 360, w: 380, h: 300, label: 'MCP Library' },
  { id: 'incident-infirmary', x: 930, y: 360, w: 390, h: 300, label: 'Incident Infirmary' },
];

export function roomById(id: RoomId): RoomBox {
  return ROOMS.find((r) => r.id === id) ?? ROOMS[0];
}

export function deterministicLayout(agents: OpenHouseAgent[], saved: LayoutPosition[] = []): LayoutPosition[] {
  const savedById = new Map(saved.map((p) => [p.agentId, p]));
  const grouped = new Map<RoomId, OpenHouseAgent[]>();
  for (const agent of agents) {
    const room = agent.room;
    grouped.set(room, [...(grouped.get(room) ?? []), agent]);
  }
  const out: LayoutPosition[] = [];
  for (const [roomId, roomAgents] of grouped.entries()) {
    const room = roomById(roomId);
    const cols = Math.max(1, Math.ceil(Math.sqrt(roomAgents.length)));
    const rows = Math.max(1, Math.ceil(roomAgents.length / cols));
    const cellW = room.w / (cols + 1);
    const cellH = room.h / (rows + 1);
    roomAgents.forEach((agent, i) => {
      const savedPos = savedById.get(agent.id);
      if (savedPos?.pinned) {
        out.push(savedPos);
        return;
      }
      const col = i % cols;
      const row = Math.floor(i / cols);
      out.push({
        agentId: agent.id,
        room: roomId,
        x: Math.round(room.x + cellW * (col + 1)),
        y: Math.round(room.y + cellH * (row + 1) + 18),
        pinned: false,
        updatedAt: Date.now(),
      });
    });
  }
  return out;
}

export function isGroupedMode(count: number): boolean {
  return count >= 50;
}
