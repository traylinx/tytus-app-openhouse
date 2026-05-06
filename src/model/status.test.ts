import { describe, expect, it } from 'vitest';
import { bodyFor, coerceStatus, defaultRoom } from './bodyRules';
import { deterministicLayout } from './layout';
import { redactSecretLike, normalizeBaseUrl } from './security';
import type { OpenHouseAgent } from './types';

describe('security helpers', () => {
  it('redacts bearer and api-key shaped strings', () => {
    expect(redactSecretLike('Authorization: Bearer sk-secretsecretsecret')).not.toContain('sk-secret');
    expect(redactSecretLike('api_key = abcdefghijklmnop')).toContain('[REDACTED]');
  });

  it('allows https and local http only', () => {
    expect(normalizeBaseUrl('https://agent.example.com/')).toBe('https://agent.example.com');
    expect(normalizeBaseUrl('http://localhost:8080/')).toBe('http://localhost:8080');
    expect(() => normalizeBaseUrl('http://192.168.1.5:8080')).toThrow(/Only HTTPS/);
  });
});

describe('body and layout rules', () => {
  it('maps statuses and error room', () => {
    expect(coerceStatus('ready')).toBe('online');
    expect(coerceStatus('unhealthy')).toBe('error');
    expect(defaultRoom('openai-compatible', 'https://x.test', 'error')).toBe('incident-infirmary');
    expect(bodyFor('mcp-http', 'error').animation).toBe('alarm');
  });

  it('creates deterministic positions', () => {
    const agents = Array.from({ length: 6 }, (_, i) => ({
      id: `a${i}`,
      sourceId: 's',
      sourceKind: 'custom-health',
      displayName: `A ${i}`,
      status: 'online',
      mood: 'focused',
      body: bodyFor('custom-health', 'online'),
      room: 'lobby',
      capabilities: ['health'],
    } satisfies OpenHouseAgent));
    const layout = deterministicLayout(agents);
    expect(layout).toHaveLength(6);
    expect(new Set(layout.map((p) => `${p.x}:${p.y}`)).size).toBe(6);
  });
});
