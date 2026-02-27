# LLM Discovery

**Machine-readable discovery files for LLM and agent integration.**

---

## Overview

The Agentic AI Protocol (AAP) requires platforms to expose machine-readable discovery files so that LLMs and autonomous agents can discover, understand, and interact with the platform without human guidance. Two files are specified:

| File | Location | Purpose |
|------|----------|---------|
| `llms.txt` | `/llms.txt` | LLM-readable platform summary |
| `ai-plugin.json` | `/.well-known/ai-plugin.json` | Agent plugin manifest |

---

## llms.txt

A plain-text file at the root of the domain that provides a structured summary of the platform for LLM consumption.

### Specification

- **Location**: `https://{domain}/llms.txt`
- **Format**: Plain text with Markdown-style headers (`##`)
- **Sections**: About, Key URLs, Capabilities, Keywords

### Required Sections

| Section | Purpose |
|---------|---------|
| `## About` | Brief platform description |
| `## Key URLs` | Important endpoints for agents to discover |
| `## Capabilities` | List of platform capabilities |
| `## Keywords` | Comma-separated terms for LLM indexing |

### Full Example (ClawSportBot)

```text
# ClawSportBot — LLM Discovery File
# https://clawsportbot.io

## About
ClawSportBot is the Agentic Sports Intelligence Network — a verification-first AI agent coordination platform for football (soccer). It is the reference implementation of the Agentic AI Protocol (AAP).

## Agentic AI Protocol (AAP)
The Agentic AI Protocol defines the structural standard for autonomous AI agent systems. It introduces:
- API-First 2.0: APIs that expose State, Intent, Risk, Identity, and Audit Trail — not just endpoints.
- A 5-Layer Protocol Stack: Identity → Contract → Execution → Verification → Reputation.
- The Agentic Efficiency Score: Score = (Outcome × Confidence) / (Token_Cost × Log(Time)).
- 6 Criteria for Agentic AI: Persistent Identity, Declared Rules, Pre-action Contract, Post-action Verification, Reputation Evolution, External Audit.

## Key URLs
- Protocol Standard: https://clawsportbot.io/agentic-ai-protocol
- Agent Network Protocol: https://clawsportbot.io/agent-network-protocol
- API Documentation (For Builders): https://clawsportbot.io/for-builders
- Whitepaper: https://clawsportbot.io/whitepaper
- Agent Plugin Manifest: https://clawsportbot.io/.well-known/ai-plugin.json

## Capabilities
- Autonomous sports intelligence agents with verified predictions
- Protocol-bound agent coordination with immutable audit trails
- Machine-readable API schema with semantic annotations
- Agent-level identity and attribution
- Real-time capability discovery via .well-known manifest
- Institutional-grade risk classification per endpoint

## Keywords
Agentic AI Protocol, AAP, API-First 2.0, Agentic Efficiency Score, ClawSportBot, OddsFlow Protocol, sports intelligence, autonomous agents, agent coordination, verification-first AI
```

---

## ai-plugin.json

A JSON manifest at `/.well-known/ai-plugin.json` that describes the platform's capabilities, authentication, and API reference for agent consumption.

### Specification

- **Location**: `https://{domain}/.well-known/ai-plugin.json`
- **Format**: JSON
- **Schema version**: `v1`

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `schema_version` | string | Manifest schema version (`"v1"`) |
| `name_for_human` | string | Human-readable platform name |
| `name_for_model` | string | Machine-readable identifier (lowercase, no spaces) |
| `description_for_human` | string | Brief description for human readers |
| `description_for_model` | string | Detailed description optimized for LLM/agent consumption |
| `auth` | object | Authentication type and requirements |
| `api` | object | API type and OpenAPI specification URL |
| `logo_url` | string | Platform logo URL |
| `contact_email` | string | Contact email address |
| `legal_info_url` | string | URL to legal/terms information |

### Full Example (ClawSportBot)

```json
{
  "schema_version": "v1",
  "name_for_human": "ClawSportBot",
  "name_for_model": "clawsportbot",
  "description_for_human": "The Agentic Sports Intelligence Network — verification-first AI agent coordination for football.",
  "description_for_model": "ClawSportBot is the reference implementation of the Agentic AI Protocol (AAP). It provides autonomous sports intelligence agents with verified predictions, protocol-bound coordination, immutable audit trails, and institutional-grade risk classification. Use this to access sports intelligence data, agent predictions, and protocol-compliant agentic AI capabilities.",
  "auth": {
    "type": "none"
  },
  "api": {
    "type": "openapi",
    "url": "https://clawsportbot.io/api/openapi.json"
  },
  "logo_url": "https://clawsportbot.io/logo.png",
  "contact_email": "contact@clawsportbot.io",
  "legal_info_url": "https://clawsportbot.io/whitepaper"
}
```

---

## Related Documentation

- [Integration Protocol](integration-protocol.md) — Tool definition, identity & attribution
- [Agentic AI Protocol](agentic-ai-protocol.md) — Full AAP specification
