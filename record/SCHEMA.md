# ClawSportBot — Public Record Schema

Field dictionary for every derived and raw file in this directory. This file
itself is regenerated on every sync, like the CSVs -- it only changes when a
schema change actually ships.

## `predictions.csv`

One row per `type: "match"` record in `data/`, sorted by `kickoff_utc` then
`slug`. Void fixtures (postponed/cancelled/abandoned/awarded) are included,
not excluded — they're marked by `status`.

| column | type | meaning |
| --- | --- | --- |
| `slug` | string | Stable id for the fixture; matches the JSON filename in `data/` (without `.json`). |
| `league` | string | English league name. |
| `kickoff_utc` | ISO 8601 timestamp | Scheduled kickoff, UTC. |
| `home` | string | English home team name. |
| `away` | string | English away team name. |
| `p_home` | number, 0-1 | Model's pre-match probability of a home win. |
| `p_draw` | number, 0-1 | Model's pre-match probability of a draw. |
| `p_away` | number, 0-1 | Model's pre-match probability of an away win. |
| `published_at` | ISO 8601 timestamp | When this fixture's record file was generated (the JSON's `generatedAt`) — the pre-kickoff publish moment. |
| `status` | `upcoming` \| `settled` \| `void` | Current state of the fixture. |
| `final_home` | integer or empty | Final home-team score, once known. Empty for `upcoming`, and empty for a `void` fixture that never produced an organic scoreline. |
| `final_away` | integer or empty | Final away-team score, same rules as `final_home`. |
| `verdict` | `hit` \| `miss` \| `push` or empty | Grade of the model's leading side. Empty until settled or voided; `push` for every `void` row. |
| `settled_at` | ISO 8601 timestamp or empty | When the record was last updated (the JSON's `updatedAt`) after leaving `upcoming`. Empty while still `upcoming`. |

## `ledgers.csv`

One row per `type: "weekly-ledger"` record in `data/`, sorted by `week`.

| column | type | meaning |
| --- | --- | --- |
| `week` | string | ISO week label, e.g. `2026-W37` (the JSON's `ledger.weekIso`). |
| `entries` | integer | Number of rows in that week's ledger (`ledger.entries.length`). |
| `won` | integer | `ledger.counts.won`, verbatim. |
| `lost` | integer | `ledger.counts.lost`, verbatim. |
| `half` | integer | `ledger.counts.half`, verbatim. |
| `void` | integer | `ledger.counts.void`, verbatim. |
| `pending` | integer | `entries` minus the sum of the four counts above. Always 0 today (the four counts are validated to account for every entry) — present so a future outcome type the counts don't yet cover would show up here rather than silently vanishing. |

## `data/*.json` fields

Each file is one `PredictionRecord` (see `src/content/predictions/types.ts` in
the main ClawSportBot repository for the authoritative definition). Public
fields:

| field | type | meaning |
| --- | --- | --- |
| `slug` | string | Stable id, matches the filename. |
| `fixtureId` | number | api-sports fixture id (negative, synthetic ids for weekly-ledger records). |
| `kickoff` | ISO 8601 timestamp | Scheduled kickoff (or, for a weekly-ledger record, that week's cut-off instant). |
| `league`, `home`, `away` | `{ id: number, en: string }` | Entity reference: numeric id plus the English name. |
| `observedAt` | ISO 8601 timestamp | When the simulation run that produced `probs` executed — proof the numbers predate kickoff. |
| `probs` | `{ home, draw, away }`, each 0-1 | Pre-match outcome probability distribution. |
| `goalsAvg` | `{ home, away }`, optional | Simulated average goals per side, when available. |
| `status` | `upcoming` \| `settled` \| `void` | Current lifecycle state. |
| `result` | object, optional | Present once settled or voided. Carries `verdict` (`hit`/`miss`/`push`) and, unless it's a `push` with no organic scoreline, `home`/`away` finals. |
| `type` | `match` \| `weekly-ledger` | Record kind. |
| `ledger` | object, present iff `type === "weekly-ledger"` | `{ weekIso, counts: { won, lost, half, void }, entries: [...] }`. |
| `generatedAt` | ISO 8601 timestamp | When this file was generated/published. |
| `updatedAt` | ISO 8601 timestamp | When this file was last written (settlement, voiding, or any other update). |

## Stability promise

Existing field semantics will not change; additions come as new
fields/columns.
