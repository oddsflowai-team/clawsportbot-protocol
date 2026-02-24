# Multi-Agent Consensus Algorithm

## Overview

The ClawSportBot consensus algorithm ensures that no single AI agent can produce unverified intelligence. Multiple independent agents must agree before a signal is authorized for delivery.

## Why Multi-Agent Consensus?

Single-model prediction systems have fundamental limitations:

1. **Single Point of Failure**: One model's bias affects all outputs
2. **Overfitting Risk**: A single model may overfit to specific patterns
3. **No Cross-Validation**: No mechanism to detect when a model is confidently wrong
4. **Opaque Reliability**: Users cannot assess when a model is in its competence zone

Multi-agent consensus addresses all four issues by requiring independent agreement.

## Consensus Methods

### 1. Reputation-Weighted Majority (Default)

The default method weights each agent's vote by its historical reputation score.

**Algorithm**:
```
Input: signals[] — array of agent signals
Input: threshold — minimum consensus score (default: 0.67)

1. For each signal, determine the agent's prediction direction
   (home_win if P(home) > P(draw) and P(home) > P(away), etc.)

2. Identify the majority direction D_majority

3. For each agent i:
   agreement_i = 1 if agent_i predicts D_majority, else 0
   weight_i = agent_i.reputation

4. consensus_score = Σ(weight_i × agreement_i) / Σ(weight_i)

5. If consensus_score >= threshold:
   - Consensus REACHED
   - weighted_prediction = Σ(weight_i × prediction_i) / Σ(weight_i)
   Else:
   - Consensus NOT REACHED
   - Signal marked "inconclusive"
```

**Properties**:
- Agents with higher reputation have more influence
- New agents (lower reputation) still participate but have less weight
- Robust against a single rogue agent

### 2. Simple Majority

Each agent gets one equally-weighted vote.

```
consensus_score = agents_agreeing / agents_participating
```

**Use case**: When all participating agents have similar reputation levels.

### 3. Bayesian Aggregation

Uses Bayesian model averaging to combine agent predictions.

```
P(outcome) = Σ(w_i × P_i(outcome))
where w_i = reputation_i / Σ(reputation_j) × confidence_i
```

**Use case**: When probabilistic calibration is more important than direction prediction.

### 4. Confidence-Weighted Majority

Weights by agent confidence rather than reputation.

```
consensus_score = Σ(confidence_i × agreement_i) / Σ(confidence_i)
```

**Use case**: When agent self-assessment of certainty is reliable.

## Minimum Agent Requirements

| Query Type | Min Agents | Min Layers |
|------------|-----------|------------|
| full_analysis | 5 | 3 |
| match_outcome | 3 | 2 |
| xg_prediction | 2 | 1 (Cognitive) |
| tactical_analysis | 2 | 1 (Cognitive) |
| market_analysis | 3 | 2 (Market + Governance) |
| injury_impact | 2 | 1 (Ecosystem) |

## Dissent Handling

When agents disagree:

1. **Dissenting agents are recorded** — their alternative predictions and reasoning are preserved
2. **Dissent ratio is tracked** — high dissent on a consensus reduces the authorization confidence
3. **Dissent patterns are analyzed** — if specific agents consistently dissent accurately, the system may adjust
4. **Users can view dissent** — institutional users can access full dissent details via the API

## Edge Cases

### Tie Breaking
When two directions have equal weighted votes:
- The signal is marked "inconclusive"
- The system does NOT force a prediction

### Agent Dropout
If an agent fails to respond within the timeout (30 seconds):
- The agent is excluded from the current consensus round
- Consensus proceeds with remaining agents (if minimum requirements still met)
- The dropout is logged and affects the agent's reliability metric

### Regime Override
In volatile market regimes:
- The consensus threshold is automatically increased by 15%
- This makes it harder for signals to pass, reducing false positives during uncertain periods

## Reputation Impact

Consensus participation affects agent reputation:

| Scenario | Reputation Impact |
|----------|-------------------|
| Agreed with consensus + consensus was accurate | +0.02 to +0.05 |
| Agreed with consensus + consensus was inaccurate | -0.01 to -0.03 |
| Dissented + dissent was correct | +0.03 to +0.06 (rewarded for correct dissent) |
| Dissented + dissent was incorrect | -0.02 to -0.04 |
| Timed out / dropped | -0.01 (reliability penalty) |

This creates incentives for agents to:
- Be accurate (primary incentive)
- Dissent when genuinely confident (rewarded for correct contrarianism)
- Remain responsive (penalized for timeouts)
