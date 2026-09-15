# Phase 8 --- Realtime Bidding and Notifications

## Objective

Keep auction pages synchronized while users are actively bidding.

## Socket events

Suggested events: - `bid:accepted` - `bid:rejected` -
`auction:extended` - `auction:closed` - `auction:won` -
`auction:outbid` - `payment:opened`

## Flow

``` text
Buyer places bid
      ↓
Backend transaction
      ↓
PostgreSQL becomes source of truth
      ↓
Realtime event
      ↓
Connected clients update UI
```

## Do not trust client state

The browser's displayed highest bid is only a view. The backend/database
decides whether a bid is valid.

## Outbid

When a new highest bidder is accepted: - notify the previous leading
bidder - update auction clients - preserve notification record if
required

## Countdown

The UI should calculate remaining time from authoritative auction end
time rather than assuming the browser clock is exact.

## Extension

When an accepted late bid extends the auction: - broadcast the new end
time - refresh countdown - notify relevant users

## Commit

``` powershell
git add .
git commit -m "feat: add realtime bidding and notifications"
```

## Done when

Multiple connected buyers see bid/extension changes without manual
refresh.
