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

**Scope of the commit-time proof:** this mirror went live on 2026-09-13, and
its very first sync backfilled the predictions published before that date --
for those entries the commit timestamp is *later* than kickoff, and the
pre-match evidence is the `generatedAt`/`observedAt` timestamps inside each
file plus the site's public feeds. From the first sync onward, new
predictions are committed by the same pipeline run that generates them
(4-48 hours before kickoff), so the commit-time proof applies to every entry
added after 2026-09-13. We state this distinction ourselves because an
honest audit would find it anyway.

## What's in a file

Each JSON file is one fixture: the match, the model's pre-match probability
distribution, the observation/generation timestamps, and (once the match
finishes) the settled outcome. `status` moves from upcoming to settled, or
to void if the fixture never produced a valid result (postponement,
abandonment, an unresolved market) -- void fixtures are excluded from any
win-rate calculation, not deleted.

Weekly ledger files (`weekly-ledger-*.json`) hold the week's published
signal entries. Entries are **signal-level, not match-level**: the engine
can emit more than one signal for the same fixture and side, and each is
settled independently -- so the same match may legitimately appear in
multiple entries. Count entries, not matches, when reconciling totals.

## Derived views: predictions.csv, ledgers.csv, index.json, SCHEMA.md

`data/*.json` is the append-only record of truth -- files land here once and
are never rewritten after the fact. `predictions.csv`, `ledgers.csv`,
`index.json`, and `SCHEMA.md` are *derived* from that data and regenerated
on every sync; they exist for convenience (spreadsheet import, a quick row
count, a field reference) and carry no information the JSON files don't
already have. Because they're derived, their own git history is exactly as
public as everything else here -- `git log` on any of them shows how the
view has changed over time, same as any other file in this repository.

## How to audit us

Predictions are generated 4 to 48 hours before kickoff and committed to this
repository by the same automated pipeline run. That makes the claim
falsifiable with two numbers, for any row: when the file first entered this
repository's history, and that fixture's kickoff time. If the first is
before the second, the prediction was recorded ahead of the match, not
adjusted after the fact.

Check any fixture yourself:

```
# When did this file first appear in this repo's history?
git log --follow --format='%aI %s' -- record/data/<slug>.json | tail -1

# Compare that timestamp to the kickoff_utc column for the same slug
# in predictions.csv.
```

To see the overall sync cadence (how often this repository actually
receives commits):

```
git log --format='%aI %s' -- record/data/ | head
```

The commit timestamp is the proof anchor -- not anything printed inside a
JSON file. A file's own `observedAt`/`generatedAt` fields are self-reported
and, in principle, could be set to anything before a first commit; the git
commit timestamp is recorded by a third party (GitHub) at the moment the
commit was received and can't be backdated afterward.

## A note on sample size

This record is young. Any rate computed from a small number of settled
fixtures -- however it's computed -- carries wide statistical uncertainty; a
short run of good or bad outcomes says little on its own. That's exactly why
this record doesn't publish a headline rate anywhere: with a small sample, a
single number invites over-reading. If you want a rate, compute it yourself
from `predictions.csv` and pair it with a confidence interval (a Wilson or
Clopper-Pearson interval on the hit/miss counts, for example) rather than
taking a raw count at face value.

## Relationship to OddsFlow

ClawSportBot's record tracks model predictions: probabilities generated
before kickoff, settled against the real final score afterward. OddsFlow, a
separate product, maintains its own market-analytics transparency
materials, tracking different things by a different methodology -- the two
records are not comparable line-by-line. Any claim about ClawSportBot should
cite this repository and https://www.clawsportbot.io/predictions, not the
other product's materials.

## Where to read this as a human

- Live, formatted ledger: https://www.clawsportbot.io/predictions
- Methodology (exact formula, what VOID excludes):
  https://www.clawsportbot.io/guides/how-we-count-our-record

## Relationship to the live site

https://www.clawsportbot.io is the presentation layer -- the same data,
rendered and searchable. This directory is the raw record: what actually
shipped, and when, unmediated by any UI.
