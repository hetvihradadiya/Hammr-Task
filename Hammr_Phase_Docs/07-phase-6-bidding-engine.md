# Phase 6 --- Auction and Bidding Engine

## Objective

This is the highest-risk part of Hammr. Build and test it before
spending time on visual polish.

## Minimum bid rule

A bid must beat the current highest bid by the configured minimum
increment.

Example:

``` text
Current = 1000
Increment = 100
Minimum valid bid = 1100
```

## Concurrency requirement

Never implement bidding as an unsafe:

``` text
read → check → write
```

sequence without transaction/concurrency protection.

## Required transaction concept

``` text
BEGIN
  lock/atomically protect auction state
  read current state
  validate auction is bid-able
  validate bid amount
  create immutable bid
  update current highest bid/bidder
  calculate possible extension
  create notification/event
COMMIT
```

Use PostgreSQL transaction and locking/atomic techniques appropriate to
the final Prisma implementation.

## Concurrent example

If A, B, C and D bid almost simultaneously, the database must produce
one correct final state and preserve every accepted bid.

## Bid history

Accepted bids are immutable. Rejected bids should have a deliberate
policy; if they are persisted, make their meaning explicit.

## Reserve price

If final highest bid is below reserve:

``` text
no winner
UNSOLD
```

## Late-bid extension

Define a policy, for example:

``` text
extension threshold = 30 seconds
extension amount = 30 seconds
maximum total extension = 10 minutes
```

These numbers are project decisions and must be documented. The brief
requires late bids to extend closing time and asks you to consider
whether unlimited extension is acceptable.

## Auction close

Closing must: 1. stop new bids 2. determine valid winner or unsold
outcome 3. create payment opportunity 4. notify relevant users

## Critical tests

-   bid below minimum
-   equal bid
-   valid bid
-   two simultaneous bids
-   many simultaneous bids
-   bid at extension threshold
-   repeated extensions
-   reserve not met
-   bid after close
-   bid before start

## Commit

``` powershell
git add .
git commit -m "feat: implement transactional bidding engine"
```

## Done when

The bidding engine remains correct under concurrent requests.
