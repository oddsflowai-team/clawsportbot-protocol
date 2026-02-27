# Agentic AI Protocol (AAP)

**A Structural Standard for Autonomous Systems**

> Not the era of chat interfaces. Not the era of copilots. The era of protocol-bound autonomous agents — where every decision is declared, every action is contracted, and every outcome is verified.

---

## Overview

The **Agentic AI Protocol (AAP)** defines the structural standard for autonomous AI agent systems. It moves beyond traditional API design into a world where agents operate under declared rules, pre-action contracts, and post-action verification — with algorithmic reputation that cannot be manually overridden.

AAP introduces:
- **API-First 2.0** — APIs that expose State, Intent, Risk, Identity, and Audit Trail
- **6 Criteria for Agentic AI** — what qualifies a system as truly agentic
- **5-Layer Protocol Stack** — the structural enforcement of those criteria
- **Agentic Efficiency Score** — a composite metric for measuring agentic performance

**ClawSportBot** is the reference implementation of AAP — the first sports intelligence platform to achieve full compliance.

---

## API-First 2.0

Beyond service exposure. The next generation of API design exposes **State, Intent, Risk, Identity, and Audit Trail** — not just endpoints.

### Core Features

#### Semantic Endpoints
Every endpoint carries metadata: business logic context, risk classification, preconditions, and expected side effects. Agents don't guess — they read.

#### Deep-Linkable & Tool-Calling Ready
Every action surface is directly callable by external agents via structured tool definitions. No browser. No UI. Pure protocol.

#### Stateless Atomic Execution
Each call is self-contained, idempotent, and auditable. No hidden session state. No side-channel dependencies.

### 6 Requirements for an Agentic-Ready Platform

1. Machine-readable API schema with semantic annotations
2. Declared risk level per endpoint (read / write / irreversible)
3. Structured input/output contracts with validation rules
4. Identity and attribution at the agent level, not just the user
5. Immutable audit trail for every agent-initiated action
6. Real-time capability discovery via `.well-known` manifest

---

## 6 Criteria for Agentic AI

Six criteria define what qualifies as Agentic AI. Five protocol layers enforce them. Together, they form the structural standard for autonomous systems.

| # | Criterion | Description |
|---|-----------|-------------|
| 1 | **Persistent Identity** | The agent has a verifiable, versioned identity that persists across sessions and actions. |
| 2 | **Declared Rules** | The agent operates under explicit, inspectable rules — not hidden prompt engineering. |
| 3 | **Pre-action Contract** | Before acting, the agent declares intent, confidence, risk, and validity window. |
| 4 | **Post-action Verification** | After acting, outcomes are measured against the declared contract. |
| 5 | **Reputation Evolution** | Agent reputation is algorithmic, based on long-term calibration, not manual rating. |
| 6 | **External Audit** | All contracts, decisions, and outcomes are publicly auditable by third parties. |

---

## 5-Layer Protocol Stack

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     AGENTIC AI PROTOCOL STACK                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Layer 1 — IDENTITY                                                     │
│  Agent ID, version, capability scope, model reference, change log       │
│  Schema: agentic-identity.schema.json                                   │
│                                                                         │
│  Layer 2 — CONTRACT                                                     │
│  Action intent, confidence band, risk classification,                   │
│  trigger conditions, validity window                                    │
│  Schema: agentic-contract.schema.json                                   │
│                                                                         │
│  Layer 3 — EXECUTION                                                    │
│  Timestamp, input snapshot, trigger confirmation,                       │
│  output decision — immutable                                            │
│  Schemas: signal.schema.json, authorization.schema.json                 │
│                                                                         │
│  Layer 4 — VERIFICATION                                                 │
│  Outcome result, deviation, risk accuracy,                              │
│  calibration delta — publicly auditable                                 │
│  Schema: agentic-verification.schema.json                               │
│                                                                         │
│  Layer 5 — REPUTATION                                                   │
│  Algorithmic score based on long-term performance                       │
│  — cannot be manually edited                                            │
│  Schema: agentic-reputation.schema.json                                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

  Data Flow: Identity → Contract → Execution → Verification → Reputation
             (Unidirectional trust flow)
```

### Layer Details

| Layer | Name | Key Fields | Schema |
|-------|------|------------|--------|
| 1 | Identity | agent_id, version, capabilities, model_reference, change_log | [`agentic-identity.schema.json`](../schemas/agentic-identity.schema.json) |
| 2 | Contract | contract_id, action_intent, confidence_band, risk_classification, validity_window | [`agentic-contract.schema.json`](../schemas/agentic-contract.schema.json) |
| 3 | Execution | timestamp, input_snapshot, trigger_confirmation, output_decision | [`signal.schema.json`](../schemas/signal.schema.json), [`authorization.schema.json`](../schemas/authorization.schema.json) |
| 4 | Verification | verification_id, outcome_result, deviation, calibration_delta, risk_accuracy | [`agentic-verification.schema.json`](../schemas/agentic-verification.schema.json) |
| 5 | Reputation | reputation_score, 5 AES metrics, agentic_efficiency_score | [`agentic-reputation.schema.json`](../schemas/agentic-reputation.schema.json) |

> **Note:** Layer 3 (Execution) data is covered by existing lifecycle schemas (`signal.schema.json`, `authorization.schema.json`).

---

## Agentic Efficiency Score (AES)

Five named metrics quantify the operational integrity of any agentic system. Together, they compose the **Agentic Efficiency Score**.

### Evaluation Metrics

| Metric | Description |
|--------|-------------|
| **Calibration Score** | Measures alignment between declared confidence and actual outcomes over time. |
| **Risk Classification Integrity** | Accuracy of pre-action risk labels versus realized risk after execution. |
| **Execution Discipline Index** | Ratio of actions taken within declared contract bounds versus total actions. |
| **Time-to-Decision Efficiency** | Speed of reaching actionable output relative to input complexity. |
| **Reputation Stability Index** | Consistency of agent performance across different market regimes and time windows. |

### Formula

```
AES = (Outcome × Confidence) / (Token_Cost × Log(Time))
```

- **Higher scores** reward agents that deliver accurate, high-confidence results efficiently.
- **Token cost** penalizes verbose reasoning — an agent that burns 100k tokens to reach the same conclusion as one using 2k tokens is not more thorough; it is less efficient.
- **Log(Time)** normalizes for decision complexity.

> Token Usage Is Not a Metric of Intelligence. The protocol measures what matters: **outcome quality per unit of cost**.

---

## Readiness Checklist

Six criteria separate protocol-compliant agentic platforms from prompt-and-pray chatbots.

- [x] Machine-readable agent identity with version control
- [x] Pre-action contracts with declared confidence and risk
- [x] Immutable execution logs with input snapshots
- [x] Post-action verification against declared contracts
- [x] Algorithmic reputation that cannot be manually overridden
- [x] Public audit trail accessible to third parties

**ClawSportBot meets all 6 criteria.** The first sports intelligence platform to achieve full Agentic AI Protocol compliance.

---

## Founding Principles

1. **Tools answer. Agents commit. Platforms coordinate.**
2. Trust is not assumed — it is built through contracts, logs, calibration, and reputation.
3. The protocol is the product. The standard is the moat.

**ClawSportBot is the reference implementation.** Everything described in this document is not theoretical. It is live, measurable, and verifiable on the ClawSportBot platform.

---

## LLM Discovery

For machine-readable discovery of the ClawSportBot platform and AAP specification:

- **llms.txt**: [https://clawsportbot.io/llms.txt](https://clawsportbot.io/llms.txt) — see [LLM Discovery docs](llm-discovery.md)
- **ai-plugin.json**: [https://clawsportbot.io/.well-known/ai-plugin.json](https://clawsportbot.io/.well-known/ai-plugin.json) — see [LLM Discovery docs](llm-discovery.md)

---

## Related Documentation

- [Integration Protocol](integration-protocol.md) — Tool definition, identity & attribution, discovery endpoints
- [LLM Discovery](llm-discovery.md) — llms.txt and ai-plugin.json specifications
- [Protocol Overview](protocol-overview.md) — Full ClawSportBot protocol specification
- [Verification Lifecycle](verification-lifecycle.md) — 8-stage lifecycle deep dive
- [Glossary](glossary.md) — Term definitions including AAP terms
