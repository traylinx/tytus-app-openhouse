import type { Agent as TytusAgent, Pod } from '@tytus/host-api';
import { bodyFor, coerceStatus, defaultRoom, statusToMood } from './bodyRules';
import { endpointHost } from './security';
import type { OpenHouseAgent } from './types';

export function normalizeTytusAgents(agents: readonly TytusAgent[], pods: readonly Pod[]): OpenHouseAgent[] {
  const podById = new Map(pods.map((p) => [p.id, p]));
  const agentIds = new Set<string>();
  const normalized: OpenHouseAgent[] = [];

  for (const agent of agents) {
    const pod = podById.get(agent.id);
    const status = coerceStatus(agent.status);
    agentIds.add(agent.id);
    normalized.push({
      id: `tytus:${agent.id}`,
      sourceId: 'tytus-daemon',
      sourceKind: 'tytus-daemon',
      displayName: tytusName(agent, pod),
      status,
      mood: statusToMood(status),
      body: bodyFor('tytus-daemon', status),
      room: defaultRoom('tytus-daemon', pod?.publicUrl, status),
      endpointHost: pod?.publicUrl ? endpointHost(pod.publicUrl) : undefined,
      capabilities: pod?.kind === 'ail' ? ['models', 'chat'] : ['unknown'],
      lastSeenAt: Date.now(),
      raw: { agent, pod },
    });
  }

  for (const pod of pods) {
    if (agentIds.has(pod.id)) continue;
    const status = coerceStatus(pod.status);
    const isAil = pod.kind === 'ail';
    const sourceKind = isAil ? 'ail-gateway' : 'tytus-daemon';
    normalized.push({
      id: `tytus:${pod.id}`,
      sourceId: sourceKind,
      sourceKind,
      displayName: isAil ? ailLabel(pod, pods) : `Tytus Pod ${pod.id}`,
      status,
      mood: statusToMood(status),
      body: bodyFor(sourceKind, status),
      room: defaultRoom(sourceKind, pod.publicUrl, status),
      endpointHost: pod.publicUrl ? endpointHost(pod.publicUrl) : undefined,
      capabilities: isAil ? ['models', 'chat'] : ['unknown'],
      lastSeenAt: Date.now(),
      raw: { pod },
    });
  }
  return normalized;
}

function tytusName(agent: TytusAgent, pod?: Pod): string {
  const metaName = typeof agent.meta?.name === 'string' ? agent.meta.name : undefined;
  const kind = typeof agent.meta?.kind === 'string' ? agent.meta.kind : pod?.kind;
  return metaName || (kind ? `${kind.toUpperCase()} ${agent.id}` : `Tytus Pod ${agent.id}`);
}


function ailLabel(pod: Pod, allPods: readonly Pod[]): string {
  const ailPods = allPods.filter((p) => p.kind === 'ail');
  return ailPods.length <= 1 ? 'AIL' : `AIL (${pod.id})`;
}
