<div align="center">

# ClawSportBot Agent Network Protocol

**The Open Specification for Agentic Sports Intelligence Verification**

[![Protocol Version](https://img.shields.io/badge/protocol-v3.0.0-00c8ff?style=flat-square)](https://clawsportbot.io/agent-network-protocol)
[![AAP Compliant](https://img.shields.io/badge/AAP-compliant-4ade80?style=flat-square)](https://clawsportbot.io/agentic-ai-protocol)
[![License: MIT](https://img.shields.io/badge/license-MIT-4ade80?style=flat-square)](LICENSE)
[![Agents Active](https://img.shields.io/badge/agents-7%20active-ff6b2b?style=flat-square)](https://clawsportbot.io/store/community)
[![Network Uptime](https://img.shields.io/badge/uptime-99.95%25-5b8def?style=flat-square)](https://clawsportbot.io)

[Website](https://clawsportbot.io) · [Agentic AI Protocol](https://clawsportbot.io/agentic-ai-protocol) · [Protocol Docs](https://clawsportbot.io/agent-network-protocol) · [API Reference](docs/api/) · [Store](https://clawsportbot.io/store) · [Community Agents](https://clawsportbot.io/store/community)

</div>

---

## What is ClawSportBot?

**ClawSportBot** is an **Agentic Sports Intelligence Network** — not a prediction tool, but a **verification-first AI agent coordination protocol** for football (soccer). It orchestrates multiple specialized AI agents through an **8-stage verification lifecycle** where every signal is cross-validated, market-synchronized, and audit-trailed before reaching users.

ClawSportBot is the consumer-facing intelligence layer of the **OddsFlow Protocol** ecosystem:

| Product | Role | URL |
|---------|------|-----|
| **ClawSportBot** | Agent Network Interface — intelligence delivery to users, builders, and institutions | [clawsportbot.io](https://clawsportbot.io) |
| **OddsFlow** | Protocol & Verification Core — the underlying agent reputation and verification engine | [oddsflow.ai](https://oddsflow.ai) |
| **OddsFlow Partners** | Institutional Infrastructure — white-label deployment for sportsbooks, media, analytics firms | [oddsflow-partners.com](https://oddsflow-partners.com) |

### Key Differentiators

- **Multi-Agent Consensus**: Every signal requires agreement from multiple independent AI agents before publication
- **8-Stage Verification Lifecycle**: Signals pass through Query → Signal Generation → Regime Analysis → Cross-Agent Validation → Market Synchronization → Execution Authorization → Post-Match Audit → Autonomous Reporting
- **Armor Intelligence System**: Modular analytical layers (Cognitive, Market, Ecosystem, Governance) that users can equip for customized intelligence
- **Agent Reputation Protocol**: Agents build trust scores based on verified accuracy over time, powered by the OddsFlow reputation engine
- **Institutional-Grade Architecture**: Sub-200ms latency, 99.95% uptime, designed for sportsbooks and trading desks

---

## Agentic AI Protocol (AAP)

> **New in v3.0.0** — Full specification: [docs/agentic-ai-protocol.md](docs/agentic-ai-protocol.md) · [Live page](https://clawsportbot.io/agentic-ai-protocol)

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

### LLM Discovery

- **llms.txt**: [clawsportbot.io/llms.txt](https://clawsportbot.io/llms.txt) — LLM-readable platform summary
- **ai-plugin.json**: [clawsportbot.io/.well-known/ai-plugin.json](https://clawsportbot.io/.well-known/ai-plugin.json) — Agent plugin manifest

For the full specification, see [docs/agentic-ai-protocol.md](docs/agentic-ai-protocol.md), [docs/integration-protocol.md](docs/integration-protocol.md), and [docs/llm-discovery.md](docs/llm-discovery.md).

---

## 8-Stage Verification Lifecycle

The core innovation of ClawSportBot is its **8-stage verification lifecycle** — a structured pipeline that every piece of sports intelligence must traverse before reaching end users. This ensures no single agent or model can produce unverified output.

```
┌─────────────────────────────────────────────────────────────┐
│                  CLAWSPORTBOT VERIFICATION LIFECYCLE         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
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
│  └─→ Multi-agent consensus engine requires agreement       │
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
│  └─→ After match completion, every signal is audited       │
│       against actual outcomes for accuracy tracking        │
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

## Architecture Overview

```
                    ┌──────────────────────────┐
                    │      USER INTERFACES      │
                    │  Web App · Telegram Bot   │
                    │   API · Partner Widgets   │
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
    │ • Tactical Engine │ │ • Line Mvmt │ │ • Transfer Impact │
    │ • Form Evaluator  │ │ • Liquidity │ │ • Injury Networks │
    │ • xG Processor    │ │ • Arb Scan  │ │ • Weather Factor  │
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

ClawSportBot organizes its agent network into four specialized layers, each responsible for a distinct analytical domain:

| Layer | Purpose | Key Agents | Armor Modules |
|-------|---------|------------|---------------|
| **Cognitive** | Statistical modeling, tactical analysis, form evaluation | Match Analyst, xG Processor, Tactical Engine | Neural Cortex, Pattern Matrix, Probability Core |
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

**Trading Desk Setup:**
- All Market Layer armors — Complete market coverage
- Trust Weaver (Governance) — Agent reliability scoring
- Pattern Matrix (Cognitive) — Historical pattern recognition

---

## API Quick Start

ClawSportBot provides a RESTful API and WebSocket streaming interface for programmatic access.

### REST API

```bash
# Submit an intelligence query
curl -X POST https://api.clawsportbot.io/v2/query \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "match_id": "epl-2025-arsenal-chelsea",
    "query_type": "full_analysis",
    "armors": ["neural-cortex", "odds-membrane", "context-mesh"],
    "consensus_threshold": 0.67
  }'
```

### Response Structure

```json
{
  "query_id": "q_abc123",
  "status": "verified",
  "lifecycle_stage": "execution_authorized",
  "match": {
    "id": "epl-2025-arsenal-chelsea",
    "home": "Arsenal",
    "away": "Chelsea",
    "league": "Premier League",
    "kickoff": "2025-03-15T15:00:00Z"
  },
  "signals": [
    {
      "agent_id": "match-analyst-v3",
      "agent_reputation": 0.89,
      "signal_type": "match_outcome",
      "prediction": { "home_win": 0.52, "draw": 0.24, "away_win": 0.24 },
      "confidence": 0.78,
      "verification_status": "consensus_reached"
    }
  ],
  "consensus": {
    "agents_participating": 5,
    "agents_agreeing": 4,
    "consensus_score": 0.80,
    "threshold_met": true
  },
  "market_sync": {
    "odds_aligned": true,
    "value_detected": true,
    "edge_estimate": 0.034
  },
  "audit_trail": {
    "lifecycle_hash": "0xabc123...",
    "stages_completed": ["query", "signal_generation", "regime_analysis", "cross_agent_validation", "market_synchronization", "execution_authorization"],
    "timestamp": "2025-03-14T18:30:00Z"
  }
}
```

### WebSocket Streaming

```javascript
const ws = new WebSocket('wss://stream.clawsportbot.io/v2/live');

ws.send(JSON.stringify({
  action: 'subscribe',
  channels: ['signals', 'consensus', 'market_sync'],
  match_ids: ['epl-2025-arsenal-chelsea'],
  api_key: 'YOUR_API_KEY'
}));

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(`[${data.lifecycle_stage}]`, data);
};
```

For complete API documentation, see:
- [REST API Reference](docs/rest-api.md)
- [WebSocket API Reference](docs/websocket-api.md)
- [API Examples](api/examples/)

---

## Community Agents

ClawSportBot supports **community-built agents** — third-party AI agents that can participate in the verification network. Community agents:

- Must pass a **certification process** before joining the network
- Start with a **probationary reputation score** that builds over verified predictions
- Can specialize in specific leagues, match types, or analytical domains
- Earn reputation through the post-match audit process
- Are listed in the [Community Agent Store](https://clawsportbot.io/store/community)

### Building a Community Agent

```python
from clawsportbot import AgentSDK

class MyFootballAgent(AgentSDK.BaseAgent):
    """A community agent specializing in Premier League xG analysis."""

    agent_id = "my-xg-agent-v1"
    specialization = ["premier_league", "xg_analysis"]
    layer = "cognitive"

    async def generate_signal(self, query):
        # Your analysis logic here
        match_data = await self.fetch_match_data(query.match_id)
        xg_prediction = self.model.predict(match_data)

        return AgentSDK.Signal(
            agent_id=self.agent_id,
            match_id=query.match_id,
            signal_type="xg_prediction",
            prediction=xg_prediction,
            confidence=self.calculate_confidence(match_data),
            metadata={"model_version": "2.1", "features_used": 47}
        )

    async def on_audit(self, audit_result):
        # Learn from post-match audit results
        self.model.update(audit_result)
```

For full agent development guides, see:
- [Agent SDK Documentation](docs/protocol-overview.md)
- [Python Example](examples/python/basic-query.py)
- [TypeScript Example](examples/typescript/basic-query.ts)

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
| [`agentic-identity.schema.json`](schemas/agentic-identity.schema.json) | AAP Layer 1: Identity | Agent identity, version, capabilities |
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
│   ├── verification-lifecycle.md      # 8-stage lifecycle deep dive
│   ├── multi-agent-consensus.md       # Consensus algorithm specification
│   ├── armor-intelligence-system.md   # Armor system documentation
│   ├── rest-api.md                    # REST API reference
│   ├── websocket-api.md              # WebSocket API reference
│   ├── glossary.md                    # Term definitions
│   ├── agentic-ai-protocol.md        # AAP full specification
│   ├── integration-protocol.md       # Tool definition & I&A
│   └── llm-discovery.md              # llms.txt & ai-plugin.json
├── examples/
│   ├── python/
│   │   └── basic-query.py            # Python SDK example
│   └── typescript/
│       └── basic-query.ts            # TypeScript SDK example
└── .github/
    └── ISSUE_TEMPLATE/
        └── bug_report.md             # Bug report template
```

---

## Frequently Asked Questions

### Is ClawSportBot a prediction/betting tool?
No. ClawSportBot is an **intelligence verification network**. It does not provide gambling advice or betting tips. It provides verified sports intelligence — multi-agent consensus analysis with full audit trails. What users do with that intelligence is their responsibility.

### How is ClawSportBot different from other sports AI tools?
Most sports AI tools use a single model to make predictions. ClawSportBot uses **multiple independent AI agents** that must reach **consensus** through a formal **8-stage verification lifecycle**. Every signal has an audit trail, and every agent has a reputation score based on verified historical accuracy.

### What sports does ClawSportBot cover?
Currently, ClawSportBot focuses exclusively on **football (soccer)** across major European leagues (Premier League, La Liga, Bundesliga, Serie A, Ligue 1) and major international competitions. Coverage expansion is planned.

### What is the OddsFlow Protocol?
The **OddsFlow Protocol** is the underlying verification and reputation engine that powers ClawSportBot. It manages signal contracts, agent reputation scores, and challenge resolution. Learn more at [oddsflow.ai](https://oddsflow.ai).

### Can I build my own agent?
Yes! ClawSportBot supports community-built agents. See the [Community Agents section](#community-agents) above and the [Agent SDK documentation](docs/protocol-overview.md).

### What is the Armor System?
The Armor System lets users customize their intelligence pipeline by equipping modular analytical components. See the [Armor Intelligence System section](#armor-intelligence-system) above.

### What is the Agentic AI Protocol (AAP)?
The **Agentic AI Protocol** is a structural standard for autonomous AI agent systems. It defines 6 criteria that separate truly agentic platforms from simple chatbot wrappers, enforced by a 5-layer protocol stack (Identity → Contract → Execution → Verification → Reputation). See [docs/agentic-ai-protocol.md](docs/agentic-ai-protocol.md) for the full specification.

### What is the Agentic Efficiency Score (AES)?
The AES is a composite metric that measures agentic performance: `Score = (Outcome × Confidence) / (Token_Cost × Log(Time))`. It combines five sub-metrics — Calibration Score, Risk Classification Integrity, Execution Discipline Index, Time-to-Decision Efficiency, and Reputation Stability Index. See the [evaluation framework](docs/agentic-ai-protocol.md#agentic-efficiency-score-aes) for details.

---

## Related Projects

- **[sportbot-reference-agent](https://github.com/oddsflowai-team/sportbot-reference-agent)** — Reference implementation of the OddsFlow Agent Reputation Protocol, covering signal contracts, challenges, and reputation scoring
- **[ClawSportBot Website](https://clawsportbot.io)** — The live agent network interface
- **[OddsFlow Protocol](https://oddsflow.ai)** — The underlying verification and reputation engine
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

[clawsportbot.io](https://clawsportbot.io) · [oddsflow.ai](https://oddsflow.ai) · [oddsflow-partners.com](https://oddsflow-partners.com)

Built by the [OddsFlow AI Team](https://github.com/oddsflowai-team)

</div>
