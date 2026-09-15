# Phase 11 --- Testing, Security and Final Hardening

## Objective

Prove the important business rules and secure the application before
deployment.

## Backend tests

Test: - registration - login - role authorization - seller-only auction
creation - buyer-only bidding - invalid bid amounts - bidding before
start - bidding after close - reserve price - auction extension -
automatic close - payment timeout - next bidder - watchlist - ratings -
questions

## Concurrency tests

This is mandatory for confidence in the auction engine.

Test many requests against one auction:

``` text
100 concurrent bid requests
```

Verify: - no lost updates - highest bid is correct - accepted bid
history is complete - no invalid final state

## Security checklist

-   no secrets in Git
-   environment variables documented
-   password hashes only
-   secure cookies
-   CORS configured
-   rate limiting
-   validation
-   authorization on every protected resource
-   no sensitive data in logs
-   payment remains test/sandbox
-   dependency audit before release

## Manual QA

Test with: - one seller - two or more buyers - multiple browser
sessions - expired payment - reserve not met - late bidding -
reconnecting Socket.IO client

## Git review

``` powershell
git status
git log --oneline --decorate --graph
```

Make sure history contains incremental commits rather than one final
dump.

## Commit

``` powershell
git add .
git commit -m "test: harden auction flows and security"
```

## Done when

Core business rules have automated tests and critical scenarios pass
manually.
