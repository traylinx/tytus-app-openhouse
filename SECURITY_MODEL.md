# OpenHouse Security Model

- Tytus pod bearer tokens are never exposed to OpenHouse; `host.daemon.callPodEndpoint` injects auth.
- Third-party bearer values are session-only React state. They are never stored in SQLite, localStorage, URL, notifications, copied diagnostics, or logs.
- Persistent source records store only auth mode and safe endpoint metadata.
- Probe errors pass through `redactSecretLike` before rendering or persistence.
- Third-party probes are safe GET requests only: `/v1/models`, `/health`, `/.well-known/openhouse-agent.json`, or basic MCP well-known checks.
- No chat/completion execution in v1.
- Base URL validation allows HTTPS plus local dev HTTP (`localhost`, `127.0.0.1`, `[::1]`).
- LAN HTTP is rejected until a real permission/setting exists.
