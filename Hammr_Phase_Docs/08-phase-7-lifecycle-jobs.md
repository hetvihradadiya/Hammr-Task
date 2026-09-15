# Phase 7 --- Automatic Auction Lifecycle and Settlement

## Objective

Make auctions operate automatically without manual seller actions.

## Background jobs

Use Redis + BullMQ or an equivalent reliable job mechanism.

Jobs: - auction start - auction close - payment expiry - notification
delivery

## Start

At scheduled start:

``` text
SCHEDULED → LIVE
```

## Close

At end time:

``` text
LIVE → CLOSED
```

Then: - check reserve - identify highest eligible bidder - open payment
window - notify winner

## Payment timeout

Example:

``` text
Winner A
  ↓
payment window
  ↓
paid → SOLD
```

or:

``` text
Winner A
  ↓
timeout
  ↓
next highest bidder B
  ↓
new payment window
```

Repeat until: - someone pays, or - eligible bidders are exhausted →
UNSOLD

## Reliability

Jobs should be safe against retries. Design them so processing the same
job twice does not corrupt auction state.

## Commit

``` powershell
git add .
git commit -m "feat: automate auction lifecycle and settlement"
```

## Done when

An auction can start, close, settle, and advance winners without manual
triggers.
