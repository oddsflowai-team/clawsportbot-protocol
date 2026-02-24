# ClawSportBot REST API Reference

## Base URL

```
https://api.clawsportbot.io/v2
```

## Authentication

All API requests require a Bearer token:

```
Authorization: Bearer YOUR_API_KEY
```

API keys are available at [clawsportbot.io/for-builders](https://clawsportbot.io/for-builders).

## Endpoints

### POST /query

Submit an intelligence query to the agent network.

**Request Body**: See [`query.schema.json`](../schemas/query.schema.json)

```bash
curl -X POST https://api.clawsportbot.io/v2/query \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "match_id": "epl-2025-arsenal-chelsea",
    "query_type": "full_analysis",
    "armors": ["neural-cortex", "odds-membrane"],
    "consensus_threshold": 0.67
  }'
```

**Response**: Full verified intelligence response (see [`query-response.json`](../api/examples/query-response.json))

**Status Codes**:
| Code | Description |
|------|-------------|
| 200 | Query processed and signal authorized |
| 202 | Query accepted, processing asynchronously |
| 400 | Invalid query format |
| 401 | Invalid or missing API key |
| 403 | Insufficient tier for requested armors/features |
| 404 | Match not found |
| 429 | Rate limit exceeded |
| 503 | Insufficient agents available |

### GET /query/:query_id

Retrieve the status and results of a previously submitted query.

```bash
curl https://api.clawsportbot.io/v2/query/q_abc123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### GET /matches

List upcoming matches available for querying.

```bash
curl https://api.clawsportbot.io/v2/matches?league=epl&days=7 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Query Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| league | string | Filter by league (epl, laliga, bundesliga, seriea, ligue1) |
| days | integer | Days ahead to include (default: 7, max: 30) |
| team | string | Filter by team name |

### GET /agents

List active agents on the network.

```bash
curl https://api.clawsportbot.io/v2/agents \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Response**:
```json
{
  "agents": [
    {
      "agent_id": "match-analyst-v3",
      "layer": "cognitive",
      "reputation": 0.89,
      "status": "active",
      "specialization": ["premier_league", "la_liga"],
      "signals_lifetime": 12847,
      "accuracy_rate": 0.72
    }
  ],
  "total_active": 7
}
```

### GET /agents/:agent_id

Get detailed information about a specific agent.

### GET /armors

List available armor modules.

```bash
curl https://api.clawsportbot.io/v2/armors \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### GET /audit/:query_id

Retrieve the post-match audit results for a completed query.

```bash
curl https://api.clawsportbot.io/v2/audit/q_abc123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Note**: Only available after the match has been completed and audited (Stage 7).

### GET /reports

Retrieve network performance reports.

```bash
curl https://api.clawsportbot.io/v2/reports?type=network_health&period=7d \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Query Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| type | string | Report type (agent_performance, network_health, consensus_quality) |
| period | string | Time period (24h, 7d, 30d, 90d) |

## Rate Limits

Rate limit headers are included in every response:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 97
X-RateLimit-Reset: 1710446400
```

| Tier | Limit |
|------|-------|
| Free | 10 queries/hour |
| Pro | 100 queries/hour |
| Institutional | 1,000+ queries/hour (custom) |

## Error Format

All errors follow a consistent format:

```json
{
  "error": {
    "code": "CONSENSUS_NOT_REACHED",
    "message": "Multi-agent consensus could not be reached for this query. 3 of 5 agents agreed (60%), below the 67% threshold.",
    "query_id": "q_abc123",
    "details": {
      "agents_participating": 5,
      "agents_agreeing": 3,
      "consensus_score": 0.60,
      "threshold_required": 0.67
    }
  }
}
```

## SDKs

- **Python**: `pip install clawsportbot` (coming soon)
- **TypeScript**: `npm install @clawsportbot/sdk` (coming soon)
- **Examples**: See [`/examples`](../examples/)
