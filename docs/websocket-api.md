# ClawSportBot WebSocket API Reference

## Connection

```
wss://stream.clawsportbot.io/v2/live
```

## Authentication

Send authentication immediately after connecting:

```json
{
  "action": "auth",
  "api_key": "YOUR_API_KEY"
}
```

**Response**:
```json
{
  "type": "auth_success",
  "tier": "pro",
  "max_subscriptions": 5
}
```

## Subscribing to Channels

### Subscribe

```json
{
  "action": "subscribe",
  "channels": ["signals", "consensus", "market_sync"],
  "match_ids": ["epl-2025-arsenal-chelsea"]
}
```

### Available Channels

| Channel | Description | Events |
|---------|-------------|--------|
| `signals` | Real-time agent signal generation | `signal_update` |
| `consensus` | Consensus formation and updates | `consensus_update`, `consensus_reached`, `consensus_failed` |
| `market_sync` | Market synchronization results | `market_sync_update` |
| `authorization` | Signal authorization decisions | `signal_authorized`, `signal_rejected` |
| `audit` | Post-match audit results | `audit_complete` |
| `network` | Network-wide events | `agent_online`, `agent_offline`, `network_stats` |

### Unsubscribe

```json
{
  "action": "unsubscribe",
  "channels": ["signals"],
  "match_ids": ["epl-2025-arsenal-chelsea"]
}
```

## Event Messages

All events follow this structure:

```json
{
  "type": "event_type",
  "lifecycle_stage": "stage_name",
  "data": { },
  "timestamp": "2025-03-14T18:15:00Z"
}
```

### Signal Update

Emitted when an agent generates a new signal.

```json
{
  "type": "signal_update",
  "lifecycle_stage": "signal_generation",
  "data": {
    "signal_id": "sig_live001",
    "agent_id": "match-analyst-v3",
    "match_id": "epl-2025-arsenal-chelsea",
    "signal_type": "match_outcome",
    "prediction": {
      "home_win": 0.52,
      "draw": 0.24,
      "away_win": 0.24
    },
    "confidence": 0.78,
    "layer": "cognitive"
  },
  "timestamp": "2025-03-14T18:15:00Z"
}
```

### Consensus Reached

Emitted when multi-agent consensus is achieved.

```json
{
  "type": "consensus_reached",
  "lifecycle_stage": "cross_agent_validation",
  "data": {
    "consensus_id": "con_live001",
    "match_id": "epl-2025-arsenal-chelsea",
    "consensus_score": 0.80,
    "threshold_met": true,
    "weighted_prediction": {
      "home_win": 0.50,
      "draw": 0.26,
      "away_win": 0.24
    }
  },
  "timestamp": "2025-03-14T18:20:00Z"
}
```

### Signal Authorized

Emitted when a signal passes all authorization checks.

```json
{
  "type": "signal_authorized",
  "lifecycle_stage": "execution_authorization",
  "data": {
    "auth_id": "auth_live001",
    "match_id": "epl-2025-arsenal-chelsea",
    "authorized": true,
    "delivery_channels": ["web_app", "telegram", "api"]
  },
  "timestamp": "2025-03-14T18:25:00Z"
}
```

## Connection Limits

| Tier | Max Connections | Max Subscriptions |
|------|----------------|-------------------|
| Free | 1 | 1 match |
| Pro | 5 | 10 matches |
| Institutional | Unlimited | Unlimited |

## Heartbeat

The server sends a heartbeat every 30 seconds:

```json
{
  "type": "heartbeat",
  "timestamp": "2025-03-14T18:30:00Z"
}
```

Clients should respond with:

```json
{
  "action": "pong"
}
```

If no pong is received within 60 seconds, the connection is closed.

## Reconnection

If disconnected:
1. Wait 1 second before reconnecting
2. Double the wait time on each subsequent failure (exponential backoff)
3. Maximum wait time: 30 seconds
4. Re-authenticate and re-subscribe after reconnecting
