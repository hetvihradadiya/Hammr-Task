# Phase 4 --- Authentication, Authorization and 2FA

## Objective

Secure the application before exposing protected auction operations.

## Authentication flow

``` text
Register
  ↓
Validate input
  ↓
Hash password
  ↓
Create user
  ↓
Login
  ↓
Verify password
  ↓
2FA if enabled/required
  ↓
Create authenticated session/token
```

## Roles

At minimum: - BUYER - SELLER

Admin is optional.

## Backend middleware

Create: - authentication middleware - role authorization middleware -
validation middleware - centralized error middleware - rate limiting
middleware

## Passwords

Never store plaintext passwords.

## Tokens/cookies

Use a secure authentication approach and HTTP-only cookies where
appropriate. Configure secure cookie behavior correctly for production.

## Seller 2FA

Implement authenticator-app TOTP:

``` text
Seller login
   ↓
Password verified
   ↓
TOTP code
   ↓
Authenticated
```

## Protected examples

Seller:

``` text
POST /api/v1/auctions
```

Buyer:

``` text
POST /api/v1/auctions/:id/bids
```

## Security

-   Validate all input.
-   Never expose password hashes.
-   Never log secrets.
-   Apply rate limits to login and sensitive endpoints.
-   Keep secrets in environment variables.

## Commit

``` powershell
git add .
git commit -m "feat: implement authentication authorization and 2fa"
```

## Done when

-   Registration works.
-   Login/logout works.
-   Buyer/seller authorization works.
-   Seller 2FA works.
-   Protected endpoints reject unauthorized users.
