# Phase 9 --- Next.js Frontend

## Objective

Build usable buyer and seller interfaces around the completed backend.

## Pages

### Public/auth

-   Home
-   Auction browse
-   Auction detail
-   Login
-   Register

### Buyer

-   Dashboard
-   My bids
-   Won auctions
-   Watchlist
-   Notifications
-   Payment

### Seller

-   Dashboard
-   Create auction
-   My auctions
-   Auction detail/activity
-   Analytics

## Auction detail

Show: - images - title/description - seller - current highest bid -
minimum next bid - countdown - auction status - bid history - question
area - watchlist control - bid form

## UX states

Handle: - loading - empty - validation errors - unauthorized - auction
not found - auction not started - auction closed - bid rejected -
payment required

## Realtime

Connect Socket.IO on auction detail pages and update state from server
events.

## Responsive

Make the core flows usable on desktop and mobile.

## Commit

``` powershell
git add .
git commit -m "feat: build buyer and seller frontend"
```

## Done when

A buyer can browse/bid and a seller can manage auctions through the UI.
