# Phase 0 --- Development Environment Setup

## Objective

Prepare the Windows development machine and accounts before coding.

## Install/check

-   VS Code
-   Node.js LTS
-   Git
-   pnpm
-   PostgreSQL
-   PostgreSQL client such as pgAdmin
-   Docker Desktop
-   GitHub account

## Verify

``` powershell
node -v
npm -v
pnpm -v
git --version
docker --version
psql --version
```

## VS Code extensions

Recommended: - ESLint - Prettier - Code formatter - Prisma - Tailwind
CSS IntelliSense - GitLens (optional) - Error Lens (optional)

## Git configuration

``` powershell
git config --global user.name "YOUR_NAME"
git config --global user.email "YOUR_EMAIL"
```

## Create workspace

``` powershell
mkdir hammr
cd hammr
git init
```

## First commit

``` powershell
git add .
git commit -m "chore: initialize project"
```

## Done when

-   All tools work from the terminal.
-   Git identity is configured.
-   Empty Hammr repository exists locally and on GitHub.
