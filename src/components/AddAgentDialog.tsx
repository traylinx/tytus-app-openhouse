import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { normalizeBaseUrl, safePath } from '@/model/security';
import type { AgentSourceConfig, AgentSourceKind, AuthMode } from '@/model/types';

interface Props {
  open: boolean;
  onClose(): void;
  onAdd(source: AgentSourceConfig, sessionBearer?: string): void;
}

const KINDS: { value: AgentSourceKind; label: string; help: string }[] = [
  { value: 'openai-compatible', label: 'OpenAI-compatible', help: 'GET /v1/models' },
  { value: 'custom-health', label: 'Custom health', help: 'GET /health or custom path' },
  { value: 'openhouse-probe', label: 'OpenHouse probe', help: 'GET /.well-known/openhouse-agent.json' },
  { value: 'mcp-http', label: 'MCP HTTP/SSE', help: 'Basic well-known/health probe' },
];

export function AddAgentDialog({ open, onClose, onAdd }: Props) {
  const [kind, setKind] = useState<AgentSourceKind>('openai-compatible');
  const [name, setName] = useState('');
  const [baseUrl, setBaseUrl] = useState('');
  const [healthPath, setHealthPath] = useState('/health');
  const [authMode, setAuthMode] = useState<AuthMode>('none');
  const [token, setToken] = useState('');
  const [err, setErr] = useState<string | null>(null);
  if (!open) return null;
  return <div className="oh-modal-backdrop" role="dialog" aria-modal="true">
    <form className="oh-modal" onSubmit={(e) => {
      e.preventDefault();
      try {
        const normalized = normalizeBaseUrl(baseUrl);
        const now = Date.now();
        const id = `src-${now.toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
        onAdd({
          id,
          kind,
          name: name.trim() || inferName(normalized),
          baseUrl: normalized,
          healthPath: kind === 'custom-health' || kind === 'mcp-http' ? safePath(healthPath, '/health') : undefined,
          enabled: true,
          authMode,
          createdAt: now,
          updatedAt: now,
        }, authMode === 'session-bearer' ? token : undefined);
        setName(''); setBaseUrl(''); setToken(''); setAuthMode('none'); setErr(null); onClose();
      } catch (error) {
        setErr(error instanceof Error ? error.message : String(error));
      }
    }}>
      <div className="oh-modal-head"><h2>Add agent resident</h2><button type="button" onClick={onClose}><X size={18} /></button></div>
      <label>Connector type<select value={kind} onChange={(e) => setKind(e.target.value as AgentSourceKind)}>{KINDS.map((k) => <option key={k.value} value={k.value}>{k.label} — {k.help}</option>)}</select></label>
      <label>Name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Agent Studio Local" /></label>
      <label>Base URL<input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} placeholder="https://agent.example.com or http://localhost:8080" required /></label>
      {(kind === 'custom-health' || kind === 'mcp-http') && <label>Health path<input value={healthPath} onChange={(e) => setHealthPath(e.target.value)} placeholder="/health" /></label>}
      <label>Auth mode<select value={authMode} onChange={(e) => setAuthMode(e.target.value as AuthMode)}><option value="none">None</option><option value="session-bearer">Session bearer (not persisted)</option></select></label>
      {authMode === 'session-bearer' && <label>Session bearer<input type="password" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Stored in memory only" /></label>}
      {err && <p className="oh-form-error">{err}</p>}
      <footer><button type="button" onClick={onClose}>Cancel</button><button className="primary"><Plus size={16} />Add resident</button></footer>
    </form>
  </div>;
}

function inferName(url: string): string {
  try { return new URL(url).hostname; } catch { return 'External agent'; }
}
