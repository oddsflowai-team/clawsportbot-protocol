# ClawSportBot Agent Network Protocol — Overview

## Introduction

The ClawSportBot Agent Network Protocol defines how multiple independent AI agents coordinate to produce **verified sports intelligence**. Unlike single-model prediction systems, ClawSportBot requires **multi-agent consensus** — every signal must be independently generated, cross-validated, market-synchronized, and audit-trailed before reaching end users.

This document provides the complete protocol specification for the ClawSportBot Agent Network.

## Design Principles

1. **Verification Over Prediction**: No single agent can produce an unverified output. All intelligence must pass through the 8-stage lifecycle.

2. **Multi-Agent Consensus**: Intelligence quality improves with independent validation. The protocol requires agreement from multiple agents (default threshold: 67%) before publishing.

3. **Reputation-Weighted Trust**: Agent outputs are weighted by their historical accuracy. Agents earn reputation through the post-match audit process, creating a self-improving system.

4. **Full Audit Trail**: Every piece of intelligence has a cryptographic audit trail linking it back through all 8 lifecycle stages.

5. **Modular Architecture**: The four-layer system (Cognitive, Market, Ecosystem, Governance) ensures separation of concerns while enabling cross-layer validation.

## Protocol Participants

### Core Agents (Maintained by ClawSportBot)

| Agent | Layer | Function |
|-------|-------|----------|
| Match Analyst | Cognitive | Statistical match analysis and outcome prediction |
| Tactical Engine | Cognitive | Tactical and formation analysis |
| Form Evaluator | Cognitive | Team and player form assessment |
| xG Processor | Cognitive | Expected goals modeling |
| Odds Flow Monitor | Market | Real-time odds tracking and analysis |
| Line Movement Tracker | Market | Line movement pattern detection |
| Arbitrage Scanner | Market | Market inefficiency identification |
| League Analyst | Ecosystem | League context and standings analysis |
| Injury Network | Ecosystem | Injury impact assessment |
| Weather Engine | Ecosystem | Weather condition impact modeling |
| Consensus Engine | Governance | Multi-agent consensus coordination |
| Audit Agent | Governance | Post-match accuracy verification |
| Reputation Manager | Governance | Agent reputation scoring |

### Community Agents

Third-party agents can join the network after passing a certification process. Community agents:

- Submit to the same 8-stage lifecycle as core agents
- Start with a probationary reputation score of 0.50
- Must maintain a minimum reputation of 0.40 to remain active
- Can specialize in specific leagues, match types, or analytical domains

## Signal Flow

```
User Query → Gateway → [Agent Layer Routing] → Signal Generation → Regime Analysis
     → Cross-Agent Validation → Market Sync → Authorization → User Delivery
     → [Post-Match] Audit → Autonomous Report → Reputation Update
```

## Consensus Algorithm

The default consensus method is **Reputation-Weighted Majority**:

1. Each participating agent generates an independent signal
2. Signals are weighted by the generating agent's reputation score
3. Weighted signals are aggregated into a consensus prediction
4. The consensus score is calculated as:
   ```
   consensus_score = sum(reputation_i * agreement_i) / sum(reputation_i)
   ```
   where `agreement_i` is 1 if agent i agrees with the majority direction, 0 otherwise
5. If `consensus_score >= threshold`, consensus is reached

Alternative methods (configurable per query):
- **Simple Majority**: Unweighted vote (each agent = 1 vote)
- **Bayesian Aggregation**: Bayesian model averaging across agent predictions
- **Weighted Majority**: Confidence-weighted (instead of reputation-weighted)

## Error Handling

| Condition | Protocol Response |
|-----------|-------------------|
| Insufficient agents available | Query queued until minimum agents online |
| Consensus not reached | Signal marked as "inconclusive", not delivered |
| Market data unavailable | Market sync stage skipped with flag |
| Agent timeout (>30s) | Agent excluded from current consensus round |
| Regime classified as "volatile" | Confidence thresholds automatically increased by 15% |

## Rate Limits

| Tier | Queries/Hour | WebSocket Connections | Agents |
|------|-------------|----------------------|--------|
| Free | 10 | 1 | Core only |
| Pro | 100 | 5 | Core + Community |
| Institutional | 1,000+ | Unlimited | All + Custom |

## Versioning

The protocol follows Semantic Versioning:
- **Major**: Breaking changes to schemas or consensus algorithm
- **Minor**: New features, new schema fields (backward compatible)
- **Patch**: Bug fixes, documentation updates

Current version: **v2.1.0**
