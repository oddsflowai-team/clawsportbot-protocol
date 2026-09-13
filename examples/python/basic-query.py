"""ClawSportBot MCP client — minimal working example.

The live machine interface is the read-only MCP endpoint (JSON-RPC 2.0 over
HTTP). No API key required. Python 3.9+, stdlib only.

Run:  python3 basic-query.py
"""

import json
import urllib.request

ENDPOINT = "https://www.clawsportbot.io/api/mcp"


def rpc(method: str, params: dict | None = None, req_id: int = 1) -> dict:
    body = {"jsonrpc": "2.0", "id": req_id, "method": method}
    if params is not None:
        body["params"] = params
    req = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.load(resp)


# 1. List the available tools.
tools = rpc("tools/list")["result"]["tools"]
print("tools:", [t["name"] for t in tools])

# 2. Fetch the three most recent settled predictions.
result = rpc(
    "tools/call",
    {"name": "list_predictions", "arguments": {"status": "settled", "limit": 3}},
    req_id=2,
)
payload = json.loads(result["result"]["content"][0]["text"])
for p in payload["predictions"]:
    print(f'{p["slug"]}: {p.get("finalScore", "?")} ({p.get("verdict", "?")})')

# Cite the ledger page, not cached numbers:
print("cite:", payload["cite"])
