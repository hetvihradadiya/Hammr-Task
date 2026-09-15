# Phase 5 --- Seller Auction Management

## Objective

Build seller-side auction creation and management.

## Create auction

Seller provides: - title - description - images - category - starting
price - reserve price - scheduled start - scheduled end

## Validation

Reject: - missing required fields - invalid prices - invalid date
range - end before start - unauthorized seller requests

## Auction statuses

Use a clearly documented state model. Suggested lifecycle:

``` text
SCHEDULED → LIVE → CLOSED
                       ├── SOLD
                       └── UNSOLD
```

Additional internal states can be introduced if required by payment
settlement.

## Seller views

-   My auctions
-   Scheduled
-   Live
-   Closed
-   Highest bid
-   Bid count
-   Settlement outcome

## Buyer questions

Seller can answer questions posted on active listings.

## Analytics

At minimum track: - bid count - view count - distance from reserve price

## Image handling

Store uploaded images in an object/image service and store URLs/metadata
in PostgreSQL rather than large binary files in the normal auction row.

## Commit

``` powershell
git add .
git commit -m "feat: add seller auction management"
```

## Done when

Seller can create and view auctions correctly.
