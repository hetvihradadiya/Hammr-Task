# Hammr --- Command Checklist

## Create/install

``` powershell
mkdir hammr
cd hammr
git init
pnpm init
```

## Install and run

Use the package-manager commands appropriate to the final monorepo
setup.

## Quality

``` powershell
pnpm lint
pnpm format
pnpm format:check
```

## Git

``` powershell
git status
git add .
git commit -m "type: short description"
git log --oneline --graph
git push origin main
```

## Database

Typical Prisma workflow:

``` powershell
pnpm prisma generate
pnpm prisma migrate dev
pnpm prisma db seed
```

Use the exact script names defined in the final package.json.

## Testing

``` powershell
pnpm test
```

## Production checks

``` powershell
pnpm build
```

## Important

Do not blindly paste commands. Verify package manager, OS shell, project
directory, and environment variables before running them.
