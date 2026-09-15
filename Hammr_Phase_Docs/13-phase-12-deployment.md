# Phase 12 --- Production Deployment and Delivery

## Objective

Deploy a publicly accessible frontend and backend and prepare the
required deliverables.

## Suggested architecture

``` text
Next.js → Vercel
Node API → Render or Railway
PostgreSQL → hosted PostgreSQL provider
Redis → hosted Redis provider
Images → image/object storage provider
Payments → test/sandbox provider
```

The project brief permits free-tier hosting providers such as Vercel,
Render, Railway or Netlify.

## Production environment variables

Configure secrets in hosting dashboards, not Git.

Backend examples:

``` env
NODE_ENV=
PORT=
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
COOKIE_SECRET=
FRONTEND_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Frontend examples:

``` env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SOCKET_URL=
```

## CORS/cookies

Verify production frontend ↔ backend communication and cookie settings.

## Database

Run production migrations safely. Never use destructive development
commands against production.

## Worker

Ensure the background-job worker runs in production if separated from
the API process.

## Deployment smoke test

Test: 1. Register 2. Login 3. Seller creates auction 4. Buyer sees
auction 5. Buyer bids 6. Second buyer bids 7. Outbid notification 8.
Auction extension 9. Auction close 10. Payment 11. Seller sees
settlement

## README requirements

Include: - project overview - architecture - setup steps - required
environment variable names only - development commands - database
migration/seed commands - test commands - deployment overview - demo
credentials

## Final deliverables

-   GitHub repository link
-   public live application link
-   README
-   demo credentials for each role
-   optional walkthrough video/write-up

## Final commit

``` powershell
git add .
git commit -m "docs: finalize deployment and project documentation"
git push origin main
```

## Done when

Both frontend and backend are publicly accessible and the complete core
workflow works in production.
