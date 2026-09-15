# Phase 10 --- Test Payment, Watchlist, Ratings, Questions and Analytics

## Objective

Finish the mandatory supporting features after the auction engine is
stable.

## Test payment

Use sandbox/test mode only.

Flow:

``` text
Auction won
   ↓
Payment window opened
   ↓
Buyer pays in test mode
   ↓
Payment confirmed
   ↓
Auction SOLD
```

Never store raw card details.

## Watchlist

Buyer can: - add auction - remove auction - view saved auctions

## Seller rating

Only permit rating after: - auction completed - payment completed -
buyer is the actual participant

## Questions

Buyer asks a question on an active listing. Seller responds.

## Analytics

Track: - views - bid count - highest bid - reserve proximity -
sell-through information where available

## Stretch goals

Only after all mandatory requirements work: - proxy bidding -
reputation - dispute/report flow - admin - bid retraction - batch
auctions - risk limits - escrow-style test holds - tiered increments -
buy-it-now - shill-bid flagging

## Commit

``` powershell
git add .
git commit -m "feat: complete payments watchlist ratings and analytics"
```

## Done when

All mandatory non-core auction features are integrated and tested.
