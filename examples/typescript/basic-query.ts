/**
 * ClawSportBot MCP client — minimal working example.
 *
 * The live machine interface is the read-only MCP endpoint (JSON-RPC 2.0
 * over HTTP). No API key required. Node 18+ (built-in fetch), no deps.
 *
 * Run:  npx tsx basic-query.ts   (or compile with tsc)
 */

const ENDPOINT = "https://www.clawsportbot.io/api/mcp";

async function rpc(method: string, params?: object, id = 1): Promise<any> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id, method, ...(params ? { params } : {}) }),
  });
  return res.json();
}

async function main() {
  // 1. List the available tools.
  const tools = (await rpc("tools/list")).result.tools;
  console.log("tools:", tools.map((t: { name: string }) => t.name));

  // 2. Fetch the three most recent settled predictions.
  const call = await rpc(
    "tools/call",
    { name: "list_predictions", arguments: { status: "settled", limit: 3 } },
    2
  );
  const payload = JSON.parse(call.result.content[0].text);
  for (const p of payload.predictions) {
    console.log(`${p.slug}: ${p.finalScore ?? "?"} (${p.verdict ?? "?"})`);
  }

  // Cite the ledger page, not cached numbers:
  console.log("cite:", payload.cite);
}

main().catch(console.error);
