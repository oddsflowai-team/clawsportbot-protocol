# Armor Intelligence System

## Overview

The Armor Intelligence System is ClawSportBot's modular analytical customization framework. "Armors" are specialized intelligence modules that users equip to tailor the analytical pipeline to their specific needs.

Think of armors as **lenses** — each one brings a different analytical perspective into focus. Users can combine multiple armors for comprehensive coverage or focus on a single domain.

## The Four Layers

Armors are organized into the same four layers as the agent network:

### Cognitive Layer
Armors focused on statistical modeling, pattern recognition, and AI-driven prediction.

| Armor | ID | Function |
|-------|-----|----------|
| **Neural Cortex** | `neural-cortex` | Deep learning match outcome prediction |
| **Pattern Matrix** | `pattern-matrix` | Historical pattern recognition across seasons |
| **Probability Core** | `probability-core` | Advanced probabilistic modeling and calibration |
| **Tactical Lens** | `tactical-lens` | Formation and tactical analysis overlay |

### Market Layer
Armors focused on odds analysis, market movements, and value detection.

| Armor | ID | Function |
|-------|-----|----------|
| **Odds Membrane** | `odds-membrane` | Real-time odds comparison and implied probability |
| **Value Radar** | `value-radar` | Automated value edge detection |
| **Market Pulse** | `market-pulse` | Line movement velocity and steam move alerts |
| **Liquidity Gauge** | `liquidity-gauge` | Market depth and liquidity assessment |

### Ecosystem Layer
Armors focused on contextual factors that affect match outcomes.

| Armor | ID | Function |
|-------|-----|----------|
| **Context Mesh** | `context-mesh` | League standings, fixture congestion, motivation |
| **Injury Mapper** | `injury-mapper` | Player availability and injury impact modeling |
| **League Scanner** | `league-scanner` | League-specific trend and bias detection |
| **Weather Shield** | `weather-shield` | Weather condition impact assessment |

### Governance Layer
Armors focused on verification, trust, and audit capabilities.

| Armor | ID | Function |
|-------|-----|----------|
| **Verification Core** | `verification-core` | Full lifecycle audit trail access |
| **Trust Weaver** | `trust-weaver` | Agent reliability and reputation analytics |
| **Audit Shield** | `audit-shield` | Post-match audit detail access |
| **Consensus Viewer** | `consensus-viewer` | Multi-agent agreement visualization |

## How Armors Affect the Pipeline

When a user equips armors, the query routing changes:

1. **Agent Activation**: Only agents relevant to equipped armor layers are activated
2. **Feature Prioritization**: Agents prioritize features aligned with equipped armors
3. **Output Formatting**: Response includes detailed outputs from equipped armor domains
4. **Consensus Weighting**: Agents from equipped layers receive higher weight in consensus

### Example: User equips Neural Cortex + Odds Membrane

```
Query
  ├─→ Cognitive Layer (prioritized — Neural Cortex active)
  │   ├─→ Match Analyst: Full activation
  │   ├─→ xG Processor: Full activation
  │   └─→ Tactical Engine: Reduced weight
  ├─→ Market Layer (prioritized — Odds Membrane active)
  │   ├─→ Odds Flow Monitor: Full activation
  │   └─→ Line Movement Tracker: Reduced weight
  ├─→ Ecosystem Layer (background)
  │   └─→ League Analyst: Minimal activation
  └─→ Governance Layer (always active)
      └─→ Consensus Engine: Standard activation
```

## Armor Stacking

Multiple armors can be equipped simultaneously. Stacking follows these rules:

1. **Same-layer stacking**: Armors from the same layer compound their analytical coverage
2. **Cross-layer stacking**: Armors from different layers provide multi-dimensional analysis
3. **Maximum armors**: No hard limit, but 3-5 armors is recommended for optimal signal-to-noise ratio
4. **Governance armors**: Always recommended — they don't affect predictions but provide transparency

## Armor Effectiveness Scoring

Each armor is continuously evaluated via the post-match audit process:

- **Accuracy Impact**: How much does equipping this armor improve prediction accuracy?
- **Value Impact**: How often does this armor contribute to detecting true value?
- **Usage Rate**: How frequently is this armor equipped across users?
- **Satisfaction Score**: User feedback on the armor's perceived usefulness

These metrics are published in the [Autonomous Report](../schemas/report.schema.json) and inform armor development priorities.

## Tier Availability

| Tier | Available Armors |
|------|-----------------|
| Free | Neural Cortex, Context Mesh (2 armors) |
| Pro | All 16 armors |
| Institutional | All armors + custom armor development |

## Building Custom Armors (Institutional)

Institutional partners can develop custom armors tailored to their specific analytical needs. Custom armors:

- Integrate with the existing 4-layer architecture
- Can leverage proprietary data sources
- Participate in the same consensus and audit processes
- Require certification before deployment

Contact: [support@clawsportbot.io](mailto:support@clawsportbot.io) or visit [clawsportbot.io/contact](https://clawsportbot.io/contact)
