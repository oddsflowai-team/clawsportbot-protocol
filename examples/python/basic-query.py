"""
ClawSportBot API — Python Example
Submit a query to the Agent Network and process the verified response.

Requirements:
    pip install requests

Documentation: https://clawsportbot.io/for-builders
API Reference: https://github.com/oddsflowai-team/clawsportbot-protocol/blob/main/docs/rest-api.md
"""

import os
import json
import requests

# Configuration
API_BASE = "https://api.clawsportbot.io/v2"
API_KEY = os.environ.get("CLAWSPORTBOT_API_KEY", "your-api-key-here")

HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
}


def submit_query(match_id: str, armors: list[str] | None = None) -> dict:
    """Submit an intelligence query to the ClawSportBot Agent Network."""
    payload = {
        "match_id": match_id,
        "query_type": "full_analysis",
        "armors": armors or ["neural-cortex", "odds-membrane", "context-mesh"],
        "consensus_threshold": 0.67,
    }

    response = requests.post(f"{API_BASE}/query", headers=HEADERS, json=payload)
    response.raise_for_status()
    return response.json()


def get_query_result(query_id: str) -> dict:
    """Retrieve the result of a previously submitted query."""
    response = requests.get(f"{API_BASE}/query/{query_id}", headers=HEADERS)
    response.raise_for_status()
    return response.json()


def list_active_agents() -> dict:
    """List all currently active agents on the network."""
    response = requests.get(f"{API_BASE}/agents", headers=HEADERS)
    response.raise_for_status()
    return response.json()


def main():
    # 1. List active agents
    agents = list_active_agents()
    print(f"Active agents: {agents['total_active']}")
    for agent in agents["agents"]:
        print(f"  - {agent['agent_id']} ({agent['layer']}) — reputation: {agent['reputation']:.2f}")

    print()

    # 2. Submit a query
    print("Submitting query for Arsenal vs Chelsea...")
    result = submit_query("epl-2025-arsenal-chelsea")

    # 3. Check if consensus was reached
    consensus = result.get("consensus", {})
    if consensus.get("threshold_met"):
        print(f"Consensus reached! Score: {consensus['consensus_score']:.0%}")
        print(f"  Agents: {consensus['agents_agreeing']}/{consensus['agents_participating']} agreed")

        # 4. Show weighted prediction
        pred = consensus.get("weighted_prediction", {})
        print(f"  Home win: {pred.get('home_win', 0):.0%}")
        print(f"  Draw:     {pred.get('draw', 0):.0%}")
        print(f"  Away win: {pred.get('away_win', 0):.0%}")

        # 5. Check market sync
        market = result.get("market_sync", {})
        if market.get("value_detected"):
            print(f"\n  Value edge detected: {market['edge_estimate']:.1%}")

        # 6. Check authorization
        auth = result.get("authorization", {})
        if auth.get("authorized"):
            print(f"\n  Signal authorized for: {', '.join(auth.get('delivery_channels', []))}")
    else:
        print("Consensus not reached — signal inconclusive")

    # 7. Print full audit trail
    audit = result.get("audit_trail", {})
    if audit:
        print(f"\nAudit trail hash: {audit.get('lifecycle_hash', 'N/A')}")
        print(f"Stages completed: {', '.join(audit.get('stages_completed', []))}")


if __name__ == "__main__":
    main()
