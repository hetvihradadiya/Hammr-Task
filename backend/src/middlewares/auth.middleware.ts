import type { RequestHandler } from 'express';
import { AppError } from '../utils/app-error.js';
import { verifyToken } from '../utils/token.js';

export const requireAuth: RequestHandler = (req, _res, next) => {
  const cookieToken = req.cookies?.hammr_access_token as string | undefined;
  const authorization = req.headers.authorization;
  const bearerToken = authorization?.startsWith('Bearer ') ? authorization.slice(7) : undefined;
  const token = cookieToken ?? bearerToken;

  if (!token) {
    return next(new AppError(401, 'Authentication required', 'UNAUTHORIZED'));
  }

  try {
    const payload = verifyToken(token);

    if (payload.purpose !== 'auth') {
      return next(new AppError(401, 'Authentication required', 'UNAUTHORIZED'));
    }

    req.user = payload;
    next();
  } catch {
    next(new AppError(401, 'Invalid or expired authentication token', 'INVALID_TOKEN'));
  }
};
