# Phase 1 --- Monorepo Foundation

## Objective

Create the frontend/backend structure and configure TypeScript, ESLint,
Prettier, and Git hooks.

## Target structure

``` text
hammr/
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── shared/
│   ├── eslint-config/
│   └── typescript-config/
├── .env.example
├── .gitignore
├── .prettierrc
├── .prettierignore
├── eslint.config.mjs
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## Frontend

Create Next.js with TypeScript.

## Backend

Create Node.js + Express + TypeScript application.

## Root scripts

Plan scripts for: - dev - build - lint - format - format:check - test

## Prettier

Use a consistent configuration, for example:

``` json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

## ESLint

Configure TypeScript-aware linting for both applications.

## Husky + lint-staged

Before a commit: 1. Run ESLint on staged files. 2. Run Prettier on
staged files. 3. Reject the commit if linting fails.

## Environment files

Commit `.env.example`. Never commit real `.env` files or secrets.

## Commit

``` powershell
git add .
git commit -m "chore: configure monorepo tooling"
```

## Done when

-   Next.js starts.
-   API starts.
-   TypeScript compiles.
-   ESLint passes.
-   Prettier check passes.
-   Git hook works.
