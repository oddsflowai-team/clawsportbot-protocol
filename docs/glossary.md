# ClawSportBot Protocol Glossary

## Core Concepts

**Agent**: An independent AI model that participates in the ClawSportBot verification network. Each agent specializes in a specific analytical domain and generates signals independently.

**Agent Network**: The collection of all active agents (core + community) participating in the ClawSportBot protocol.

**Armor**: A modular intelligence module that users equip to customize the analytical pipeline. Armors belong to one of four layers (Cognitive, Market, Ecosystem, Governance).

**Armor Stacking**: The practice of equipping multiple armors simultaneously for compound analytical coverage.

**Audit Trail**: A cryptographic record linking a verified signal back through all 8 lifecycle stages.

**Brier Score**: A statistical measure of probabilistic prediction accuracy. Lower is better (0.0 = perfect, 2.0 = worst possible).

**ClawSportBot**: The Agentic Sports Intelligence Network — a verification-first AI agent coordination protocol for football.

**Community Agent**: A third-party AI agent that has passed certification and participates in the ClawSportBot network.

**Consensus**: Agreement among multiple independent agents on an intelligence output.

**Consensus Engine**: The Governance Layer component that coordinates multi-agent validation and determines consensus.

**Consensus Score**: The ratio of agreeing agents (weighted by reputation) to total participating agents.

**Consensus Threshold**: The minimum consensus score required for a signal to proceed (default: 67%).

## Intelligence Layers

**Cognitive Layer**: The intelligence layer focused on statistical modeling, tactical analysis, form evaluation, and AI-driven prediction.

**Market Layer**: The intelligence layer focused on odds analysis, line movement tracking, liquidity assessment, and value detection.

**Ecosystem Layer**: The intelligence layer focused on contextual factors — injuries, transfers, weather, league dynamics.

**Governance Layer**: The intelligence layer focused on cross-agent validation, consensus enforcement, reputation management, and audit trails.

## Lifecycle Stages

**Query Intake** (Stage 1): The initial receipt and validation of an intelligence query.

**Signal Generation** (Stage 2): The independent production of analytical signals by multiple agents.

**Regime Analysis** (Stage 3): Classification of the current market regime (trending, volatile, stable, etc.).

**Cross-Agent Validation** (Stage 4): Multi-agent consensus determination.

**Market Synchronization** (Stage 5): Verification of consensus signals against live market data.

**Execution Authorization** (Stage 6): Final gate determining if a verified signal should be delivered.

**Post-Match Audit** (Stage 7): Accuracy verification of signals against actual match outcomes.

**Autonomous Reporting** (Stage 8): System-generated performance reports and reputation updates.

## Market Terms

**Edge**: The difference between a prediction's implied probability and the market's implied probability. A positive edge suggests potential value.

**Line Movement**: Changes in bookmaker odds over time leading up to a match.

**Overround**: The total implied probability across all outcomes (typically >100%), representing the bookmaker's margin.

**Steam Move**: A rapid, sharp movement in odds, typically driven by professional/sharp money.

**Value**: A situation where the network's assessed probability of an outcome exceeds the market's implied probability.

## Protocol Terms

**OddsFlow Protocol**: The underlying verification and reputation engine that powers ClawSportBot. Manages signal contracts, agent reputation, and challenge resolution.

**Reputation Score**: A dynamic score (0.0 to 1.0) reflecting an agent's historical accuracy and reliability. Updated after every post-match audit.

**Signal**: A structured intelligence output from an individual agent, containing a prediction, confidence score, and reasoning.

**Signal Contract**: An OddsFlow Protocol construct that binds an agent to its published signal, enabling post-match verification and reputation accountability.

**Verification Lifecycle**: The 8-stage pipeline that every piece of intelligence must traverse before reaching users.
