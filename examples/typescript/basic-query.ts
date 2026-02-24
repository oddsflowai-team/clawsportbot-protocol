/**
 * ClawSportBot API — TypeScript Example
 * Submit a query to the Agent Network and process the verified response.
 *
 * Documentation: https://clawsportbot.io/for-builders
 * API Reference: https://github.com/oddsflowai-team/clawsportbot-protocol/blob/main/docs/rest-api.md
 */

const API_BASE = "https://api.clawsportbot.io/v2";
const API_KEY = process.env.CLAWSPORTBOT_API_KEY || "your-api-key-here";

interface QueryPayload {
  match_id: string;
  query_type: string;
  armors: string[];
  consensus_threshold: number;
}

interface Signal {
  signal_id: string;
  agent_id: string;
  agent_reputation: number;
  signal_type: string;
  prediction: Record<string, number>;
  confidence: number;
  layer: string;
  reasoning: string;
}

interface QueryResponse {
  query_id: string;
  status: string;
  lifecycle_stage: string;
  match: {
    id: string;
    home: string;
    away: string;
    league: string;
    kickoff: string;
  };
  signals: Signal[];
  consensus: {
    agents_participating: number;
    agents_agreeing: number;
    consensus_score: number;
    threshold_met: boolean;
    weighted_prediction: {
      home_win: number;
      draw: number;
      away_win: number;
    };
  };
  market_sync: {
    odds_aligned: boolean;
    value_detected: boolean;
    edge_estimate: number;
    sync_status: string;
  };
  authorization: {
    authorized: boolean;
    delivery_channels: string[];
  };
  audit_trail: {
    lifecycle_hash: string;
    stages_completed: string[];
  };
}

async function submitQuery(
  matchId: string,
  armors: string[] = ["neural-cortex", "odds-membrane", "context-mesh"]
): Promise<QueryResponse> {
  const payload: QueryPayload = {
    match_id: matchId,
    query_type: "full_analysis",
    armors,
    consensus_threshold: 0.67,
  };

  const response = await fetch(`${API_BASE}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function listAgents(): Promise<{ agents: Array<{ agent_id: string; layer: string; reputation: number }>; total_active: number }> {
  const response = await fetch(`${API_BASE}/agents`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

async function main() {
  // 1. List active agents
  const agents = await listAgents();
  console.log(`Active agents: ${agents.total_active}`);
  for (const agent of agents.agents) {
    console.log(`  - ${agent.agent_id} (${agent.layer}) — reputation: ${agent.reputation.toFixed(2)}`);
  }

  console.log();

  // 2. Submit a query
  console.log("Submitting query for Arsenal vs Chelsea...");
  const result = await submitQuery("epl-2025-arsenal-chelsea");

  // 3. Check consensus
  const { consensus } = result;
  if (consensus.threshold_met) {
    console.log(`Consensus reached! Score: ${(consensus.consensus_score * 100).toFixed(0)}%`);
    console.log(`  Agents: ${consensus.agents_agreeing}/${consensus.agents_participating} agreed`);

    const pred = consensus.weighted_prediction;
    console.log(`  Home win: ${(pred.home_win * 100).toFixed(0)}%`);
    console.log(`  Draw:     ${(pred.draw * 100).toFixed(0)}%`);
    console.log(`  Away win: ${(pred.away_win * 100).toFixed(0)}%`);

    // 4. Market sync
    if (result.market_sync.value_detected) {
      console.log(`\n  Value edge detected: ${(result.market_sync.edge_estimate * 100).toFixed(1)}%`);
    }

    // 5. Authorization
    if (result.authorization.authorized) {
      console.log(`\n  Signal authorized for: ${result.authorization.delivery_channels.join(", ")}`);
    }
  } else {
    console.log("Consensus not reached — signal inconclusive");
  }

  // 6. Audit trail
  console.log(`\nAudit trail hash: ${result.audit_trail.lifecycle_hash}`);
  console.log(`Stages completed: ${result.audit_trail.stages_completed.join(", ")}`);
}

main().catch(console.error);
