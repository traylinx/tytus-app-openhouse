import { describe, expect, it } from 'vitest';
import { redactSecretLike } from '@/model/security';

describe('redaction before persistence', () => {
  it('does not keep obvious bearer tokens', () => {
    const text = redactSecretLike('request failed with Bearer sk-abc123456789999');
    expect(text).toBe('request failed with [REDACTED]');
  });
});
