# ClawSportBot — Public Prediction Record

This directory is the tamper-evident mirror of every AI football prediction
ClawSportBot publishes. Each fixture that clears the agent's filter becomes
one JSON file here, synced from the live site once a day.

## Why this exists

ClawSportBot's claim is that every prediction is timestamped *before*
kickoff and settled against the real final score afterward -- losses shown,
not pruned. A claim like that is only as good as its proof.

Git commit history is the proof. This repository's commit log is public,
append-only, and hosted by a third party (GitHub) we don't control. A
prediction file that first appears in a commit dated before its kickoff, and
is never rewritten after the match, is verifiable evidence -- not a claim
you have to take our word for. `git log -p` on any file here shows exactly
when it first appeared and every change since.

## What's in a file

Each JSON file is one fixture: the match, the model's pre-match probability
distribution, the observation/generation timestamps, and (once the match
finishes) the settled outcome. `status` moves from upcoming to settled, or
to void if the fixture never produced a valid result (postponement,
abandonment, an unresolved market) -- void fixtures are excluded from any
win-rate calculation, not deleted.

## Where to read this as a human

- Live, formatted ledger: https://www.clawsportbot.io/predictions
- Methodology (exact formula, what VOID excludes):
  https://www.clawsportbot.io/guides/how-we-count-our-record

## Relationship to the live site

https://www.clawsportbot.io is the presentation layer -- the same data,
rendered and searchable. This directory is the raw record: what actually
shipped, and when, unmediated by any UI.
