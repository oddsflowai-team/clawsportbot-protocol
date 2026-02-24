# ClawSportBot 8-Stage Verification Lifecycle

## Overview

The verification lifecycle is the core innovation of the ClawSportBot protocol. Every piece of sports intelligence must traverse all 8 stages before reaching users. This document provides a deep dive into each stage.

## Stage 1: Query Intake

**Purpose**: Receive, validate, and route intelligence queries.

**Process**:
1. User submits a structured query via REST API, WebSocket, or the web application
2. Gateway authenticates the request and checks rate limits
3. Query is validated against `query.schema.json`
4. Armor configuration is loaded (which agents and layers to activate)
5. Query is routed to the appropriate agent layer(s)

**Schema**: [`query.schema.json`](../schemas/query.schema.json)

**Latency Target**: < 50ms

## Stage 2: Signal Generation

**Purpose**: Multiple independent AI agents produce analysis signals.

**Process**:
1. Activated agents receive the query in parallel
2. Each agent independently generates a signal based on its specialization
3. Agents do NOT see other agents' outputs at this stage (independence is critical)
4. Each signal includes a confidence score and reasoning
5. Signals are collected by the Governance Layer's Consensus Engine

**Key Requirement**: Agent independence. The protocol enforces that no agent can access another agent's signal before generating its own.

**Schema**: [`signal.schema.json`](../schemas/signal.schema.json)

**Latency Target**: < 2,000ms per agent (parallel execution)

## Stage 3: Regime Analysis

**Purpose**: Classify the current market regime to contextualize signal reliability.

**Process**:
1. Market Layer agents analyze current odds landscape
2. Regime is classified as: trending, mean-reverting, volatile, stable, or transitioning
3. Classification affects downstream thresholds:
   - **Volatile regime**: Consensus threshold increased by 15%, confidence minimum increased by 10%
   - **Stable regime**: Standard thresholds apply
   - **Transitioning regime**: Signals flagged for additional scrutiny

**Schema**: [`regime.schema.json`](../schemas/regime.schema.json)

**Latency Target**: < 500ms

## Stage 4: Cross-Agent Validation

**Purpose**: Achieve multi-agent consensus on the intelligence output.

**Process**:
1. Consensus Engine collects all signals from Stage 2
2. Applies the selected consensus method (default: Reputation-Weighted Majority)
3. Calculates agreement score across agents
4. Determines if consensus threshold is met (default: 67%)
5. Records dissenting agent opinions for transparency
6. Produces the final weighted prediction

**Failure Mode**: If consensus is not reached, the signal is marked "inconclusive" and is NOT delivered to the user. The system may re-query with adjusted parameters.

**Schema**: [`consensus.schema.json`](../schemas/consensus.schema.json)

**Latency Target**: < 200ms

## Stage 5: Market Synchronization

**Purpose**: Verify consensus signals against live market data.

**Process**:
1. Fetch current odds from multiple bookmakers (minimum 8 sources)
2. Calculate implied probabilities from market odds
3. Compare consensus prediction against market implied probabilities
4. Detect value edges (where consensus diverges favorably from market)
5. Analyze recent line movement direction and magnitude
6. Flag any steam moves or sharp money indicators

**Schema**: [`market-sync.schema.json`](../schemas/market-sync.schema.json)

**Latency Target**: < 300ms

## Stage 6: Execution Authorization

**Purpose**: Final gate — determine if the verified signal should be delivered.

**Process**:
1. Run all authorization checks:
   - Consensus threshold met? (from Stage 4)
   - Market alignment acceptable? (from Stage 5)
   - Timing window valid? (sufficient time before kickoff)
   - Risk within limits? (risk assessment check)
   - Confidence above minimum? (agent confidence check)
   - Agent reputations above minimum? (reputation quality check)
   - Regime compatible? (from Stage 3)
2. All checks must pass for authorization
3. If authorized, signal is released to configured delivery channels
4. If rejected, rejection reason is logged and user is notified

**Schema**: [`authorization.schema.json`](../schemas/authorization.schema.json)

**Latency Target**: < 100ms

## Stage 7: Post-Match Audit

**Purpose**: After match completion, verify every signal against actual outcomes.

**Process**:
1. Triggered automatically after match final whistle + data confirmation (typically 2 hours post-match)
2. Fetch actual match outcomes (scoreline, xG, key events)
3. Audit each individual agent signal:
   - Was the primary prediction direction correct?
   - Calculate Brier score for probabilistic calibration
   - Determine accuracy score (0.0 to 1.0)
4. Audit the consensus prediction
5. Calculate reputation deltas for each participating agent
6. Generate cryptographic hash of the complete lifecycle

**Schema**: [`audit.schema.json`](../schemas/audit.schema.json)

**Latency Target**: Not latency-sensitive (batch process)

## Stage 8: Autonomous Reporting

**Purpose**: Generate performance reports, update reputations, and feed learning loops.

**Process**:
1. Aggregate audit results across reporting period (daily/weekly/monthly)
2. Calculate per-agent performance metrics
3. Update agent reputation scores in the OddsFlow Protocol
4. Generate network health metrics (consensus quality, accuracy rates, latency)
5. Evaluate armor module effectiveness
6. Produce recommendations (agent retraining, threshold adjustments, etc.)
7. Feed results back into agent learning loops for continuous improvement

**Schema**: [`report.schema.json`](../schemas/report.schema.json)

**Latency Target**: Not latency-sensitive (scheduled process)

## End-to-End Latency

| Stage | Target | Typical |
|-------|--------|---------|
| Query Intake | < 50ms | 20ms |
| Signal Generation | < 2,000ms | 1,200ms |
| Regime Analysis | < 500ms | 250ms |
| Cross-Agent Validation | < 200ms | 80ms |
| Market Synchronization | < 300ms | 150ms |
| Execution Authorization | < 100ms | 40ms |
| **Total (Stages 1-6)** | **< 3,150ms** | **~1,740ms** |
| Post-Match Audit | N/A | ~5 min |
| Autonomous Reporting | N/A | ~30 min |

The user-facing latency (query to authorized signal delivery) is typically under 2 seconds.
