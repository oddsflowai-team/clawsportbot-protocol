<div align="center">

# ClawSportBot Agent Network Protocol

**The Open Specification for Agentic Sports Intelligence Verification**

[![Protocol Version](https://img.shields.io/badge/protocol-v3.0.0-00c8ff?style=flat-square)](https://clawsportbot.io/agent-network-protocol)
[![AAP Compliant](https://img.shields.io/badge/AAP-compliant-4ade80?style=flat-square)](https://clawsportbot.io/agentic-ai-protocol)
[![License: MIT](https://img.shields.io/badge/license-MIT-4ade80?style=flat-square)](LICENSE)

[Website](https://clawsportbot.io) · [Agentic AI Protocol](https://clawsportbot.io/agentic-ai-protocol) · [AAP Article](https://clawsportbot.io/updates/the-end-of-prompt-and-pray) · [Protocol Docs](https://clawsportbot.io/agent-network-protocol) · [MCP Quick Start](#mcp-quick-start) · [Store](https://clawsportbot.io/store) · [Community Agents](https://clawsportbot.io/store/community)

</div>

---

## 📊 Verifiable Prediction Record

This repository doubles as ClawSportBot's **public, tamper-evident prediction record**: every AI football prediction the site publishes is synced to [`record/`](record/) as raw JSON, settled in public against the real final score afterwards — **losses included, nothing pruned**.

What the commitment actually is, stated precisely:

- Each prediction is **committed by the same pipeline run that generates it**, 4–48 hours before kickoff — from **2026-09-12 onward**, when daily sync began.
- Entries **older than the first sync were backfilled** in a single commit. Those are verifiable through the **observation and generation timestamps embedded in each JSON file**, not through commit dates.
- Nothing here is rewritten after a match. `git log -p` on any file shows when it first appeared and every change since.

See [`record/README.md`](record/README.md) for the audit guide, and the live ledger UI at [clawsportbot.io/predictions](https://www.clawsportbot.io/predictions).

---

## What is ClawSportBot?

**ClawSportBot** is an **Agentic Sports Intelligence Network** — not a prediction tool, but a **verification-first AI agent coordination protocol** for football (soccer). The protocol specifies an **8-stage verification lifecycle** in which every signal is cross-validated, market-synchronized, and audit-trailed before reaching users.

> **Two things live in this repo, and they are not the same thing.** The **8-stage verification lifecycle** and the 5-layer AAP stack are the **protocol specification** for multi-agent verification — the standard we are building toward and publishing openly. The **seven-step agent loop** described in [The Live Agent](#the-live-agent) is the **running production implementation** today. Where this README describes both, it says which is which.

ClawSportBot is the consumer-facing intelligence layer of the **OddsFlow Protocol** ecosystem:

| Product | Role | URL |
|---------|------|-----|
| **ClawSportBot** | Agent Network Interface — intelligence delivery to users, builders, and institutions | [clawsportbot.io](https://clawsportbot.io) |
| **OddsFlow** | Protocol & Verification Core — the underlying agent reputation and verification engine | [oddsflow.ai](https://www.oddsflow.ai) |
| **OddsFlow Partners** | Institutional Infrastructure — white-label deployment for institutional data desks, media, and analytics teams | [oddsflow-partners.com](https://oddsflow-partners.com) |

### Key Differentiators

- **Public, settled record** *(live today)*: every published prediction is timestamped before the moment it references and settled against the real final score — losses shown, not pruned. Raw JSON in [`record/`](record/); live ledger at [clawsportbot.io/predictions](https://www.clawsportbot.io/predictions)
- **A machine interface, not a marketing page** *(live today)*: the [MCP endpoint](#mcp-quick-start) serves the same record to agents over JSON-RPC 2.0 — read-only, unauthenticated
- **8-Stage Verification Lifecycle** *(specification)*: Query → Signal Generation → Regime Analysis → Cross-Agent Validation → Market Synchronization → Execution Authorization → Post-Match Audit → Autonomous Reporting
- **Multi-Agent Consensus** *(specification)*: signals require agreement from multiple independent agents before publication
- **Agent Reputation Protocol** *(specification, in implementation)*: agents build trust scores from verified accuracy over time, powered by the OddsFlow reputation engine
- **Armor Intelligence System**: modular analytical layers (Cognitive, Market, Ecosystem, Governance) that users can equip for customized intelligence

---

## The Live Agent

Everything above is a standard. This is what is actually running — and the canonical narrative for it is the site's own [llms.txt](https://www.clawsportbot.io/llms.txt), which this repo is written to agree with rather than embellish.

### The seven-step loop *(implemented, running in production)*

The production agent runs one continuous loop. It is not the 8-stage specification; it is the subset that ships today:

1. **Analyze data** — ingest live match data and odds movement across fixtures
2. **Read news** — incorporate news and context signals
3. **Find signals** — evaluate candidates against the model
4. **Act** — publish the signals that clear the filter, **timestamped**, before kickoff or before the in-play moment referenced
5. **Self-audit / settle** — resolve every published signal against the real final score
6. **Optimize** — feed settlement outcomes back into the model
7. **Publish results** — post every outcome publicly to X ([@Oddsflow_Nat](https://x.com/Oddsflow_Nat)) and Threads ([@oddsflow.ai](https://www.threads.net/@oddsflow.ai)), with timestamps, losses included

Selectivity is the point: roughly one candidate in twenty-two survives the filter. Most of what the agent does, all day, is decline to publish.

### Where you can watch it

| Surface | What it is | Status |
|---------|-----------|--------|
| **[@Oddsflowteam_bot](https://t.me/Oddsflowteam_bot)** (Telegram) | English interface onto the running agent | Live |
| **足球实时预测龙虾 [@lxjqr31_bot](https://t.me/lxjqr31_bot)** (Telegram) | Chinese-language interface onto the **same engine**, same signal source, same verification standard — not a reduced or separate product | Live |
| **[MCP endpoint](#mcp-quick-start)** | `https://www.clawsportbot.io/api/mcp` — read-only JSON-RPC 2.0, four tools, no auth | Live |
| **[`record/`](record/)** | Git-timestamped ledger of every prediction, synced daily | Live |
| **[clawsportbot.io/predictions](https://www.clawsportbot.io/predictions)** | Human-readable ledger, entry by entry | Live |

**Record methodology**: win rate = won ÷ (won + lost + half). VOID (pushes, no-result positions) is excluded from the denominator; half-won/half-lost outcomes count fully rather than being discarded. This repo intentionally publishes **no fixed win-rate or ROI figure** — the numbers move as predictions settle. Cite the [ledger](https://www.clawsportbot.io/predictions), or call `get_record_methodology` on the MCP endpoint.

---

## Agentic AI Protocol (AAP)

> **New in v3.0.0** — Full specification: [docs/agentic-ai-protocol.md](docs/agentic-ai-protocol.md) · [Live page](https://clawsportbot.io/agentic-ai-protocol) · [Read the article: The End of Prompt-and-Pray](https://clawsportbot.io/updates/the-end-of-prompt-and-pray)

The **Agentic AI Protocol** is a structural standard for autonomous AI agent systems. It defines what qualifies as truly agentic AI and provides the formal specification for protocol-bound autonomous agents.

### API-First 2.0

Beyond service exposure — APIs that expose **State, Intent, Risk, Identity, and Audit Trail**, not just endpoints. Includes 6 requirements for an agentic-ready platform: machine-readable schemas, declared risk levels, structured contracts, agent-level identity, immutable audit trails, and real-time capability discovery.

### 6 Criteria for Agentic AI

| # | Criterion | Description |
|---|-----------|-------------|
| 1 | Persistent Identity | Verifiable, versioned identity across sessions |
| 2 | Declared Rules | Explicit, inspectable rules — no hidden prompts |
| 3 | Pre-action Contract | Declared intent, confidence, risk, validity window |
| 4 | Post-action Verification | Outcomes measured against declared contracts |
| 5 | Reputation Evolution | Algorithmic, calibration-based — not manual |
| 6 | External Audit | All records publicly auditable by third parties |

### 5-Layer Protocol Stack

```
Layer 1 — IDENTITY        Agent ID, version, capabilities, model reference
Layer 2 — CONTRACT         Intent, confidence band, risk, validity window
Layer 3 — EXECUTION        Timestamp, input snapshot, output — immutable
Layer 4 — VERIFICATION     Outcome, deviation, calibration delta — auditable
Layer 5 — REPUTATION       Algorithmic score — cannot be manually edited

Data Flow: Identity → Contract → Execution → Verification → Reputation
```

### Agentic Efficiency Score (AES)

```
Score = (Outcome × Confidence) / (Token_Cost × Log(Time))
```

Five metrics: Calibration Score · Risk Classification Integrity · Execution Discipline Index · Time-to-Decision Efficiency · Reputation Stability Index

- **llms.txt**: [clawsportbot.io/llms.txt](https://www.clawsportbot.io/llms.txt) — the canonical, LLM-readable platform summary; live and current
- **ai-plugin.json**: [clawsportbot.io/.well-known/ai-plugin.json](https://www.clawsportbot.io/.well-known/ai-plugin.json) — the agent plugin manifest specified alongside llms.txt for `.well-known` discovery
- **MCP endpoint**: [www.clawsportbot.io/api/mcp](https://www.clawsportbot.io/api/mcp) — the live machine interface ([quick start](#mcp-quick-start))

For the full specification, see [docs/agentic-ai-protocol.md](docs/agentic-ai-protocol.md), [docs/integration-protocol.md](docs/integration-protocol.md), and [docs/llm-discovery.md](docs/llm-discovery.md).

---

## 8-Stage Verification Lifecycle *(protocol specification)*

> **This is the specification, not a description of today's deployment.** The 8-stage lifecycle is the protocol standard for multi-agent verification — the target architecture, formalized in the JSON Schemas below so that it is implementable and reviewable by anyone. The running production implementation is the [seven-step loop](#the-live-agent); stages ④ Cross-Agent Validation and ⑧ Autonomous Reporting in particular describe the multi-agent network being built, not a network of independent third-party agents operating today.

The **8-stage verification lifecycle** is a structured pipeline that every piece of sports intelligence must traverse before reaching end users, so that no single agent or model can produce unverified output.

```
┌─────────────────────────────────────────────────────────────┐
│                  CLAWSPORTBOT VERIFICATION LIFECYCLE         │
├─────────────────────────────────────────────────────────────┤
│  ① QUERY INTAKE                                            │
│  └─→ User or API submits a structured intelligence query   │
│       Schema: query.schema.json                            │
│                                                             │
│  ② SIGNAL GENERATION                                       │
│  └─→ Multiple specialized agents produce independent       │
│       signals (match predictions, tactical analysis,       │
│       injury impact assessments)                           │
│       Schema: signal.schema.json                           │
│                                                             │
│  ③ REGIME ANALYSIS                                         │
│  └─→ Market regime classifier determines current state     │
│       (trending, mean-reverting, volatile, stable)         │
│       Schema: regime.schema.json                           │
│                                                             │
│  ④ CROSS-AGENT VALIDATION                                  │
│  └─→ Consensus engine requires agreement                  │
│       across independent models (≥67% threshold)           │
│       Schema: consensus.schema.json                        │
│                                                             │
│  ⑤ MARKET SYNCHRONIZATION                                  │
│  └─→ Validated signals are checked against live market     │
│       odds, line movements, and liquidity data             │
│       Schema: market-sync.schema.json                      │
│                                                             │
│  ⑥ EXECUTION AUTHORIZATION                                 │
│  └─→ Final gate: signal must pass risk checks,            │
│       confidence thresholds, and timing windows            │
│       Schema: authorization.schema.json                    │
│                                                             │
│  ⑦ POST-MATCH AUDIT                                        │
│  └─→ After match: outcome verification, accuracy tracking  │
│       Schema: audit.schema.json                            │
│                                                             │
│  ⑧ AUTONOMOUS REPORTING                                    │
│  └─→ System generates performance reports, updates         │
│       agent reputation scores, feeds learning loops        │
│       Schema: report.schema.json                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Each stage has a formally defined JSON Schema (see [`/schemas`](schemas/)) that ensures structured, machine-readable data flows between agents.

---

## Architecture Overview *(protocol specification)*

The layered architecture below is the specified target for the full multi-agent network. The production agent today implements the [seven-step loop](#the-live-agent) across these concerns rather than as separately addressable third-party agents.

```
                    ┌──────────────────────────┐
                    │      USER INTERFACE       │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────▼─────────────┐
                    │    CLAWSPORTBOT GATEWAY    │
                    │   Authentication · Rate    │
                    │   Limiting · Query Router  │
                    └────────────┬─────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                   │
    ┌─────────▼────────┐ ┌──────▼──────┐ ┌─────────▼────────┐
    │  COGNITIVE LAYER  │ │MARKET LAYER │ │ ECOSYSTEM LAYER  │
    │                   │ │             │ │                   │
    │ • Match Analyst   │ │ • Odds Flow │ │ • League Context  │
    │ • Tactical Engine │ │ • Line Move │ │ • Injury Network  │
    │ • xG Processor    │ │ • Liquidity │ │ • Weather Engine  │
    └─────────┬────────┘ └──────┬──────┘ └─────────┬────────┘
              │                  │                   │
              └──────────────────┼──────────────────┘
                                 │
                    ┌────────────▼─────────────┐
                    │   GOVERNANCE LAYER        │
                    │  Cross-Agent Validation   │
                    │  Consensus Engine (≥67%)  │
                    │  Reputation Scoring       │
                    │  Audit Trail              │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────▼─────────────┐
                    │   ODDSFLOW PROTOCOL       │
                    │  Signal Contracts         │
                    │  Agent Reputation Engine  │
                    │  Challenge Resolution     │
                    └──────────────────────────┘
```

### The Four Intelligence Layers

| Layer | Purpose | Agents | Armors |
|-------|---------|--------|--------|
| **Cognitive** | Statistical modeling, tactical analysis, probability estimation | Match Analyst, xG Processor, Tactical Engine | Neural Cortex, Pattern Matrix, Probability Core |
| **Market** | Odds analysis, line movement tracking, liquidity assessment | Odds Flow Monitor, Line Movement Tracker, Arbitrage Scanner | Odds Membrane, Value Radar, Market Pulse |
| **Ecosystem** | Contextual factors — injuries, transfers, weather, league dynamics | League Analyst, Injury Network, Weather Engine | Context Mesh, Injury Mapper, League Scanner |
| **Governance** | Cross-agent validation, consensus enforcement, reputation management | Consensus Engine, Audit Agent, Reputation Manager | Verification Core, Trust Weaver, Audit Shield |

---

## Armor Intelligence System

The **Armor System** is ClawSportBot's modular intelligence customization framework. Users and institutions can equip different "armors" — specialized analytical modules — to tailor the intelligence output to their specific needs.

### How Armors Work

1. **Selection**: Users browse the [Armor Store](https://clawsportbot.io/store) and equip armors from any of the four layers
2. **Activation**: Equipped armors modify which agents and analytical pipelines are prioritized for the user's queries
3. **Stacking**: Multiple armors can be equipped simultaneously for compound analytical coverage
4. **Scoring**: Each armor has defined accuracy metrics and is continuously evaluated via the post-match audit stage

### Example Armor Configurations

**Casual Fan Setup:**
- Neural Cortex (Cognitive) — AI-powered match predictions
- Context Mesh (Ecosystem) — League standings and fixture context

**Professional Analyst Setup:**
- Probability Core (Cognitive) — Advanced statistical modeling
- Odds Membrane (Market) — Real-time odds analysis
- Verification Core (Governance) — Full audit trails

**Institutional Data Desk Setup:**
- All Market Layer armors — Complete market coverage
- Trust Weaver (Governance) — Agent reliability scoring
- Pattern Matrix (Cognitive) — Historical pattern recognition

---

## MCP Quick Start

**The protocol's live machine interface.** ClawSportBot's public prediction record is served to agents over the **Model Context Protocol** at:

```
https://www.clawsportbot.io/api/mcp
```

Streamable HTTP, JSON-RPC 2.0, **read-only, no authentication, no write methods**. A plain `GET` on that URL returns a self-description (name, transport, tool list, docs link); everything else is a `POST`.

### 1. List the tools

```bash
curl -sS -X POST https://www.clawsportbot.io/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

Four tools, all read-only:

| Tool | Returns |
|------|---------|
| `list_predictions` | Newest-first list of predictions. Optional `status` (`upcoming`/`settled`/`void`), `league`, `limit` (1–20, default 10) |
| `get_prediction` | The full public record for one prediction, by `slug` |
| `get_weekly_ledger` | The weekly verification ledger — won/lost/half/void counts plus every entry. Optional `week` (e.g. `2026-w36`); omit for the latest |
| `get_record_methodology` | The win-rate formula, what VOID excludes, and how to cite the record — static text |

### 2. Call one

```bash
curl -sS -X POST https://www.clawsportbot.io/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "tools/call",
    "params": {
      "name": "list_predictions",
      "arguments": { "status": "settled", "limit": 3 }
    }
  }'
```

The `result.content[0].text` field carries a JSON document shaped like this (settled fixtures, newest kickoff first):

```json
{
  "count": 3,
  "predictions": [
    {
      "slug": "sevilla-vs-valencia-1570381",
      "kickoff": "2026-09-11T19:00:00.000Z",
      "league": "La Liga",
      "home": "Sevilla",
      "away": "Valencia",
      "status": "settled",
      "verdict": "hit",
      "finalScore": "1-0"
    }
  ],
  "cite": "https://www.clawsportbot.io/predictions",
  "note": "Figures change as predictions settle; cite the ledger page, not cached numbers."
}
```

Misses are returned exactly the same way — `"verdict": "miss"` — because a record you can only lose from is not a record.

### Discovery

- **[llms.txt](https://www.clawsportbot.io/llms.txt)** — the canonical machine-readable description of ClawSportBot: what it is, what it is not, every public URL, and the seven-step loop. If this repo and llms.txt ever disagree, llms.txt is right.
- **[ai-plugin.json](https://www.clawsportbot.io/.well-known/ai-plugin.json)** — the `.well-known` agent plugin manifest, specified alongside llms.txt.

### Specification documents (not deployed)

The REST and WebSocket references in `docs/` are **draft specifications for the multi-agent protocol** — no live host serves them today, and each carries a banner saying so. They are published because the standard is the point, not because you can call them:

- [REST API Reference](docs/rest-api.md) — *draft specification*
- [WebSocket API Reference](docs/websocket-api.md) — *draft specification*
- [Schema examples](api/examples/) — request/response documents that validate against [`/schemas`](schemas/)

---

## Roadmap: Opening the Network

The 8-stage lifecycle describes a network of independent agents reaching consensus. Today, one agent runs that pipeline in production. Opening it to third parties is the roadmap — and this section is the **specification for that, not an open door**.

> **Status: specification. Not yet accepting agent registrations.** There is no registration endpoint, no certification programme, no agent SDK package, and no API key to request. When that changes it will be announced on [clawsportbot.io](https://clawsportbot.io) and in this repository's releases.

What the protocol specifies for community-built agents joining the verification network:

| Requirement | What it will mean |
|-------------|-------------------|
| **Declared identity** | A versioned, machine-readable agent identity — see [`agentic-identity.schema.json`](schemas/agentic-identity.schema.json) |
| **Pre-action contracts** | Every signal preceded by a declared intent, confidence band, risk class, and validity window — [`agentic-contract.schema.json`](schemas/agentic-contract.schema.json) |
| **Post-action verification** | Outcomes measured against those contracts, publicly — [`agentic-verification.schema.json`](schemas/agentic-verification.schema.json) |
| **Probationary reputation** | New agents start unweighted and earn consensus weight from settled accuracy — [`agentic-reputation.schema.json`](schemas/agentic-reputation.schema.json) |
| **Specialization** | Agents may scope themselves to specific leagues, market types, or analytical domains |

**You can build against the specification today.** The schemas in [`/schemas`](schemas/) are complete, versioned, and MIT-licensed; the [protocol overview](docs/protocol-overview.md) and [verification lifecycle](docs/verification-lifecycle.md) documents describe the intended contract in full. Implementations, critiques, and pull requests against the spec are welcome now — see [CONTRIBUTING.md](CONTRIBUTING.md). What is not available yet is a network to plug into.

Reference material:
- [Protocol Overview](docs/protocol-overview.md) — the full specification
- [`sportbot-reference-agent`](https://github.com/oddsflowai-team/sportbot-reference-agent) — reference implementation of the signal-contract and reputation model
- [Python](examples/python/basic-query.py) and [TypeScript](examples/typescript/basic-query.ts) examples — illustrative client shape against the draft REST spec

---

## JSON Schemas

Every stage of the verification lifecycle has a formally defined JSON Schema. These schemas ensure interoperability between agents and enable third-party tools to integrate with the ClawSportBot network.

| Schema | Stage | Description |
|--------|-------|-------------|
| [`query.schema.json`](schemas/query.schema.json) | ① Query Intake | Structured intelligence query format |
| [`signal.schema.json`](schemas/signal.schema.json) | ② Signal Generation | Agent signal output format |
| [`regime.schema.json`](schemas/regime.schema.json) | ③ Regime Analysis | Market regime classification |
| [`consensus.schema.json`](schemas/consensus.schema.json) | ④ Cross-Agent Validation | Multi-agent consensus results |
| [`market-sync.schema.json`](schemas/market-sync.schema.json) | ⑤ Market Synchronization | Market alignment verification |
| [`authorization.schema.json`](schemas/authorization.schema.json) | ⑥ Execution Authorization | Final gate authorization |
| [`audit.schema.json`](schemas/audit.schema.json) | ⑦ Post-Match Audit | Accuracy audit results |
| [`report.schema.json`](schemas/report.schema.json) | ⑧ Autonomous Reporting | Performance reports |
| [`agentic-identity.schema.json`](schemas/agentic-identity.schema.json) | AAP Layer 1: Identity | Agent identity and capabilities |
| [`agentic-contract.schema.json`](schemas/agentic-contract.schema.json) | AAP Layer 2: Contract | Pre-action contracts with risk and confidence |
| [`agentic-verification.schema.json`](schemas/agentic-verification.schema.json) | AAP Layer 4: Verification | Post-action outcome verification |
| [`agentic-reputation.schema.json`](schemas/agentic-reputation.schema.json) | AAP Layer 5: Reputation | Algorithmic reputation with AES metrics |

---

## Project Structure

```
clawsportbot-protocol/
├── README.md                          # This file
├── LICENSE                            # MIT License
├── CONTRIBUTING.md                    # Contribution guidelines
├── SECURITY.md                        # Security policy
├── schemas/                           # JSON Schema definitions
│   ├── query.schema.json              # Stage 1: Query Intake
│   ├── signal.schema.json             # Stage 2: Signal Generation
│   ├── regime.schema.json             # Stage 3: Regime Analysis
│   ├── consensus.schema.json          # Stage 4: Cross-Agent Validation
│   ├── market-sync.schema.json        # Stage 5: Market Synchronization
│   ├── authorization.schema.json      # Stage 6: Execution Authorization
│   ├── audit.schema.json              # Stage 7: Post-Match Audit
│   ├── report.schema.json             # Stage 8: Autonomous Reporting
│   ├── agentic-identity.schema.json   # AAP Layer 1: Identity
│   ├── agentic-contract.schema.json   # AAP Layer 2: Contract
│   ├── agentic-verification.schema.json # AAP Layer 4: Verification
│   └── agentic-reputation.schema.json # AAP Layer 5: Reputation
├── api/
│   └── examples/                      # API request/response examples
│       ├── query-request.json
│       ├── query-response.json
│       └── websocket-messages.json
├── docs/
│   ├── protocol-overview.md           # Complete protocol specification
│   ├── verification-lifecycle.md      # 8-stage lifecycle detail
│   ├── multi-agent-consensus.md       # Consensus mechanism detail
│   ├── armor-intelligence-system.md   # Armor system documentation
│   ├── rest-api.md                    # REST API reference (DRAFT SPEC — not deployed)
│   ├── websocket-api.md               # WebSocket API reference (DRAFT SPEC — not deployed)
│   ├── glossary.md                    # Term definitions
│   ├── agentic-ai-protocol.md         # AAP full specification
│   ├── integration-protocol.md        # Tool definition & integration
│   └── llm-discovery.md               # llms.txt & ai-plugin.json
├── examples/
│   ├── python/
│   │   └── basic-query.py             # Python client example (draft REST spec)
│   └── typescript/
│       └── basic-query.ts             # TypeScript client example (draft REST spec)
├── record/                            # Public prediction ledger — raw JSON, synced daily
│   └── README.md                      # How to audit the record yourself
└── .github/
    └── ISSUE_TEMPLATE/
        └── bug_report.md              # Bug report template
```

---

## Frequently Asked Questions

### Is ClawSportBot a prediction/betting tool?
No. ClawSportBot is not a bookmaker or gambling operator: it accepts no bets and holds no user funds. It publishes AI-generated football predictions and their public verification record, for informational purposes (18+). How users apply that intelligence is their responsibility.

### How is ClawSportBot different from other sports AI tools?
Two things, and only one of them is architecture. First, **the record is public and settled**: every prediction is timestamped before the moment it references and resolved against the real final score, losses included — that part is live today, in [`record/`](record/) and over [MCP](#mcp-quick-start). Second, the **protocol specification** goes further: multiple independent agents reaching consensus through a formal 8-stage lifecycle, with per-agent reputation from verified accuracy. That second part is the standard being built, not a claim about today's deployment.

### What sports does ClawSportBot cover?
Currently, ClawSportBot focuses exclusively on **football (soccer)** across major European leagues (Premier League, La Liga, Bundesliga, Serie A, Ligue 1) and major international competitions. Coverage expansion is planned.

### What is the OddsFlow Protocol?
The **OddsFlow Protocol** is the underlying verification and reputation engine that powers ClawSportBot. It manages signal contracts, agent reputation scores, and challenge resolution. Learn more at [oddsflow.ai](https://www.oddsflow.ai).

### Can I build my own agent?
You can build **against the specification** today — the schemas and protocol documents in this repo are complete and MIT-licensed. What you cannot do yet is register one: the verification network is not open to third-party agents, and there is no SDK package or API key. See [Roadmap: Opening the Network](#roadmap-opening-the-network).

### Is there a live API I can call?
Yes — one: the **[MCP endpoint](#mcp-quick-start)**, read-only and unauthenticated, serving the public prediction record. The REST and WebSocket documents in `docs/` are draft specifications with no deployed host behind them.

### What is the Armor System?
The Armor System lets users customize their intelligence pipeline by equipping modular analytical components. See the [Armor Intelligence System section](#armor-intelligence-system) above.

### What is the Agentic AI Protocol (AAP)?
The **Agentic AI Protocol** is a structural standard for autonomous AI agent systems. It defines 6 criteria that separate truly agentic platforms from simple chatbot wrappers, enforced by a 5-layer protocol stack (Identity → Contract → Execution → Verification → Reputation). See [docs/agentic-ai-protocol.md](docs/agentic-ai-protocol.md) for the full specification.

### What is the Agentic Efficiency Score (AES)?
The AES is a composite metric that measures agentic performance: `Score = (Outcome × Confidence) / (Token_Cost × Log(Time))`. It combines five sub-metrics — Calibration Score, Risk Classification Integrity, Execution Discipline Index, Time-to-Decision Efficiency, and Reputation Stability Index. See the [evaluation framework](docs/agentic-ai-protocol.md#agentic-efficiency-score-aes) for details.

---

## OddsFlow Ecosystem

ClawSportBot is the consumer intelligence layer of the OddsFlow ecosystem.

*   **OddsFlow Platform**: [oddsflow.ai](https://www.oddsflow.ai) — AI football predictions with public verification
*   **Today's AI Predictions**: [oddsflow.ai/predictions](https://www.oddsflow.ai/predictions) — Daily signals across 6 European leagues
*   **AI Agent Marketplace**: [oddsflow.ai/community/agents](https://www.oddsflow.ai/community/agents) — Subscribe to autonomous AI agents
*   **Match Discussion Threads**: [oddsflow.ai/community/match-threads](https://www.oddsflow.ai/community/match-threads) — AI-powered match analysis and community commentary
*   **Live Signal Room**: [oddsflow.ai/predictions/live](https://www.oddsflow.ai/predictions/live) — Real-time AI signals during matches
*   **Performance Dashboard**: [oddsflow.ai/performance](https://www.oddsflow.ai/performance) — Verified track record (live figures at [oddsflow.ai/accuracy](https://www.oddsflow.ai/accuracy), recomputable from the [open dataset](https://github.com/oddsflowai-team/oddsflow-transparency))
*   **Verification Hub**: [oddsflow.ai/verification](https://www.oddsflow.ai/verification) — Timestamped, auditable signal records

## Research & Publications

*   [Agentic AI Isn't a Feature. It's a Contract — Introducing the AAP](https://medium.com/@oddsflow.ai/agentic-ai-isnt-a-feature-it-s-a-contract-introducing-the-agentic-ai-protocol-aap-47135cd43181)
*   [The Rise of Sports Intelligence Agents](https://medium.com/@oddsflow.ai/the-rise-of-sports-intelligence-agents-why-football-communities-will-soon-be-run-by-ai-analysts-4e1cc1f147a9)
*   [50 Killer Questions About ClawSportBot — Answered](https://medium.com/@oddsflow.ai/50-killer-questions-about-clawsportbot-answered-1d0df9d1a886)
*   [Why We Built a Football Signal Engine That Simulates 10,000 Match Scenarios](https://medium.com/@oddsflow.ai/why-we-stopped-reading-momentum-alone-and-built-a-football-signal-engine-that-simulates-10-000-b7ad0519dbaf)
*   [Proof of Process: How to Audit a Signal Without Outcome Bias](https://medium.com/@oddsflow.ai/proof-of-process-how-to-audit-a-signal-without-outcome-bias-dc7765680778)

---

## Related Projects

- **[The End of Prompt-and-Pray](https://clawsportbot.io/updates/the-end-of-prompt-and-pray)** — How ClawSportBot built the Agentic AI Protocol — the full story
- **[sportbot-reference-agent](https://github.com/oddsflowai-team/sportbot-reference-agent)** — Reference implementation of the OddsFlow Agent Reputation Protocol, covering signal contracts, challenges, and reputation scoring
- **[ClawSportBot Website](https://clawsportbot.io)** — The live agent network interface
- **[OddsFlow Protocol](https://www.oddsflow.ai)** — The underlying verification and reputation engine
- **[OddsFlow Partners](https://oddsflow-partners.com)** — Institutional deployment infrastructure

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Security

For security concerns, please see [SECURITY.md](SECURITY.md).

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

**ClawSportBot** — Verification-First Agentic Sports Intelligence

[clawsportbot.io](https://clawsportbot.io) · [oddsflow.ai](https://www.oddsflow.ai) · [oddsflow-partners.com](https://oddsflow-partners.com)

Built by the [OddsFlow AI Team](https://github.com/oddsflowai-team)

</div>
