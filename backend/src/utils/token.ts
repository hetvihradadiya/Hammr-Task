import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';

export type AuthTokenPayload = {
  sub: string;
  role: 'BUYER' | 'SELLER';
  purpose: 'auth' | '2fa_pending';
};

const getSecret = (): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error('JWT_SECRET must be set and contain at least 32 characters');
  }

  return secret;
};

export const signAuthToken = (payload: Omit<AuthTokenPayload, 'purpose'>): string =>
  jwt.sign({ ...payload, purpose: 'auth' }, getSecret(), {
    expiresIn: (process.env.JWT_EXPIRES_IN || '1d') as SignOptions['expiresIn'],
  });

export const signTwoFactorPendingToken = (payload: Omit<AuthTokenPayload, 'purpose'>): string =>
  jwt.sign({ ...payload, purpose: '2fa_pending' }, getSecret(), {
    expiresIn: '5m',
  });

export const verifyToken = (token: string): AuthTokenPayload => {
  const decoded = jwt.verify(token, getSecret());

  if (
    typeof decoded !== 'object' ||
    decoded === null ||
    typeof decoded.sub !== 'string' ||
    (decoded.role !== 'BUYER' && decoded.role !== 'SELLER') ||
    (decoded.purpose !== 'auth' && decoded.purpose !== '2fa_pending')
  ) {
    throw new Error('Invalid token payload');
  }

  return decoded as AuthTokenPayload;
};
