# Phase 3 --- Database Design and Seed Data

## Objective

Design the relational model before implementing business logic.

## Core entities

-   User
-   Auction
-   Bid
-   Category
-   Question
-   Watchlist
-   View
-   Notification
-   Payment
-   SellerRating
-   TwoFactorAuth

## Important relationships

``` text
User 1 ─── * Auction
User 1 ─── * Bid
Auction 1 ─── * Bid
Auction 1 ─── * Question
User * ─── * Auction (Watchlist)
User 1 ─── * Notification
Auction 1 ─── * Payment
User 1 ─── * SellerRating
User 1 ─── 1 TwoFactorAuth
```

## Auction fields

Include: - seller - title - description - images - category - starting
price - reserve price - current highest bid - current highest bidder -
scheduled start - end time - status - extension information - timestamps

## Bid fields

Include: - auction - bidder - amount - immutable creation timestamp -
ordering/sequence information if used

## Database rules

-   Historical bids must never be edited or deleted.
-   Money values must use a database-safe monetary representation;
    decide and document the exact implementation before coding.
-   Add indexes for common auction queries.
-   Add constraints for relationships and uniqueness where appropriate.

## Migration workflow

``` text
schema.prisma
   ↓
migration
   ↓
database
   ↓
seed
```

## Seed data

Create demo: - seller account - buyer accounts - categories - sample
auctions - sample bids where useful

## Commit

``` powershell
git add .
git commit -m "feat: add database schema and seed data"
```

## Done when

-   Fresh database can be migrated.
-   Seed command works.
-   Relationships are verified.
