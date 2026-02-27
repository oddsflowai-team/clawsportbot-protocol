# Integration Protocol

**The standard interface for external agents to discover, authenticate, and interact with agentic platforms.**

---

## Overview

The Agentic AI Protocol (AAP) defines how external agents discover, authenticate, and interact with protocol-compliant platforms. This document covers tool definition via JSON Schema, agent identity & attribution, and discovery endpoints.

---

## Tool Definition via JSON Schema

Platforms expose capabilities through a well-known manifest that agents can discover and invoke without human guidance.

### Manifest Location

```
/.well-known/ai-plugin.json
```

### Manifest Example

```json
{
  "schema_version": "v1",
  "name_for_human": "ClawSportBot",
  "name_for_model": "clawsportbot",
  "description_for_model": "Sports intelligence agent network with verified signals, risk classification, and multi-agent consensus.",
  "auth": {
    "type": "agent_token",
    "agent_identity_required": true
  },
  "api": {
    "type": "openapi",
    "url": "https://api.clawsportbot.com/openapi.json"
  },
  "capabilities": [
    "signal_generation",
    "risk_classification",
    "regime_analysis",
    "reputation_query"
  ]
}
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `schema_version` | string | Manifest schema version (currently `"v1"`) |
| `name_for_human` | string | Human-readable platform name |
| `name_for_model` | string | Machine-readable identifier (lowercase, no spaces) |
| `description_for_model` | string | Platform description optimized for LLM/agent consumption |
| `auth` | object | Authentication configuration |
| `api` | object | API specification reference (OpenAPI URL) |

---

## Identity & Attribution (I&A)

Agent identity is decoupled from human user identity. Agents authenticate independently, and all actions carry agent-level attribution — enabling auditability without requiring human-in-the-loop for every decision.

### Agent Token

Unique cryptographic identity per agent instance. Each agent receives a token that:
- Uniquely identifies the agent across all interactions
- Is versioned alongside the agent's capability set
- Cannot be shared or transferred between agent instances

### Action Attribution

Every API call is tagged with agent ID + version. This enables:
- Full traceability of which agent initiated which action
- Post-action verification tied to the specific agent version
- Reputation updates attributed to the correct agent instance

### Decoupled Auth

Agent authorization is independent of human session. This means:
- Agents can operate autonomously without active human sessions
- Human users can review agent actions asynchronously via audit trails
- Rate limiting and permissions are applied at the agent level

---

## Discovery Endpoints

| Endpoint | Purpose | Specification |
|----------|---------|---------------|
| `/.well-known/ai-plugin.json` | Agent plugin manifest — capabilities, auth, API reference | [LLM Discovery docs](llm-discovery.md) |
| `/llms.txt` | LLM-readable platform summary — about, URLs, capabilities, keywords | [LLM Discovery docs](llm-discovery.md) |
| `/api/openapi.json` | OpenAPI specification for programmatic API access | [REST API docs](rest-api.md) |

---

## Related Documentation

- [Agentic AI Protocol](agentic-ai-protocol.md) — Full AAP specification
- [LLM Discovery](llm-discovery.md) — llms.txt and ai-plugin.json specifications
- [REST API Reference](rest-api.md) — Full API documentation
