# Phase 2 --- PostgreSQL, Prisma, Redis and Local Infrastructure

## Objective

Connect PostgreSQL and prepare Redis/background-job infrastructure.

## PostgreSQL

Create a development database:

``` text
hammr_dev
```

Set:

``` env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/hammr_dev"
```

## Prisma

Install Prisma and initialize it in the backend.

Responsibilities: - schema definition - migrations - generated client -
database access

## Redis

Run Redis locally with Docker if preferred.

Example conceptual service:

``` text
Redis
 ├── BullMQ queues
 └── Socket/realtime coordination if required
```

## Docker

Use Docker Compose only for local infrastructure if it makes setup
easier. Keep application development simple.

## Database connection test

The API should start only after the database connection strategy is
verified.

## Commit

``` powershell
git add .
git commit -m "feat: configure postgres prisma and redis"
```

## Done when

-   PostgreSQL is reachable.
-   Prisma connects.
-   Migration command works.
-   Redis is reachable.
-   Environment variables are documented in `.env.example`.
