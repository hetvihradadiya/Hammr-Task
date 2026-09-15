# Hammr --- Project Overview

## Goal

Build Hammr, a seller-listed real-time auction marketplace.

## Mandatory stack from brief

- Frontend: Next.js + TypeScript
- Backend: Node.js + TypeScript
- Database: PostgreSQL (project decision)
- ORM: Prisma (project decision)
- Realtime: Socket.IO
- Redis + BullMQ for background jobs/realtime infrastructure
- Test-mode payments
- ESLint + Prettier
- Git/GitHub with incremental commits

## Mandatory product capabilities

### Seller

- Register/login
- Create auctions with title, description, images, category, starting price, reserve price, scheduled start/end
- View listings and status
- See highest bid and bidding activity
- See settlement outcome
- Listing analytics
- Answer buyer questions

### Buyer

- Register/login
- Browse live/upcoming auctions
- Search/filter by category, price range, closing time
- Place valid bids
- Receive outbid notifications
- See live highest bid and remaining time
- View bid history and wins
- Complete test-mode payment
- Watchlist
- Rate seller after completed/paid transaction

### Auction mechanics

- Automatic start and close
- Late-bid extension
- Reserve price
- Winner moves to next bidder after payment timeout
- Immutable bid history
- Notifications
- Authentication + role authorization
- Seller 2FA
- Correct state under concurrent bids

## 3-day priority

1.  Foundation
2.  Database/authentication
3.  Auction and bidding engine
4.  Realtime + jobs
5.  Frontend
6.  Payment flow
7.  Testing/security
8.  Deployment/documentation

## Rule

Do not start stretch goals until all mandatory features are working.
