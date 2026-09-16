import type { RequestHandler } from 'express';
import { AppError } from '../utils/app-error.js';
import {
  getCurrentUser,
  login,
  register,
  setupSellerTwoFactor,
  verifySellerTwoFactor,
} from '../services/auth.service.js';

const isProduction = process.env.NODE_ENV === 'production';

const authCookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? ('none' as const) : ('lax' as const),
  maxAge: 24 * 60 * 60 * 1000,
  path: '/',
};

const pendingCookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? ('none' as const) : ('lax' as const),
  maxAge: 5 * 60 * 1000,
  path: '/',
};

const clearCookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? ('none' as const) : ('lax' as const),
  path: '/',
};

const setAuthCookie = (res: Parameters<RequestHandler>[1], token: string) => {
  res.cookie('hammr_access_token', token, authCookieOptions);
};

export const registerController: RequestHandler = async (req, res, next) => {
  try {
    const result = await register(req.body);

    if (result.token) {
      setAuthCookie(res, result.token);
    }

    if ('setupToken' in result) {
      res.cookie('hammr_2fa_pending', result.setupToken, pendingCookieOptions);
    }

    res.status(201).json({
      status: 'success',
      data: {
        user: result.user,
        requiresTwoFactorSetup: result.requiresTwoFactorSetup,
        ...(result.requiresTwoFactorSetup
          ? {
              qrCodeDataUrl: result.qrCodeDataUrl,
              manualKey: result.manualKey,
            }
          : {}),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const loginController: RequestHandler = async (req, res, next) => {
  try {
    const result = await login(req.body);

    if (result.token) {
      setAuthCookie(res, result.token);
    }

    if (result.twoFactorToken) {
      res.cookie('hammr_2fa_pending', result.twoFactorToken, pendingCookieOptions);
    }

    if ('setupToken' in result) {
      res.cookie('hammr_2fa_pending', result.setupToken, pendingCookieOptions);
    }

    res.status(200).json({
      status: 'success',
      data: {
        ...(result.user ? { user: result.user } : {}),
        ...(result.requiresTwoFactor ? { requiresTwoFactor: true } : {}),
        ...('setupToken' in result
          ? {
              requiresTwoFactorSetup: true,
              qrCodeDataUrl: result.qrCodeDataUrl,
              manualKey: result.manualKey,
            }
          : {}),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const verifyTwoFactorController: RequestHandler = async (req, res, next) => {
  try {
    const pendingToken = req.cookies?.hammr_2fa_pending as string | undefined;

    if (!pendingToken) {
      throw new AppError(401, '2FA verification session is missing', 'INVALID_2FA_SESSION');
    }

    const result = await verifySellerTwoFactor(pendingToken, req.body.code);
    res.clearCookie('hammr_2fa_pending', clearCookieOptions);
    setAuthCookie(res, result.token);

    res.status(200).json({
      status: 'success',
      data: { user: result.user },
    });
  } catch (error) {
    next(error);
  }
};

export const setupTwoFactorController: RequestHandler = async (req, res, next) => {
  try {
    const setupToken =
      (req.cookies?.hammr_2fa_pending as string | undefined) ?? req.body.setupToken;

    if (!setupToken) {
      throw new AppError(401, '2FA setup session is missing', 'INVALID_2FA_SETUP_SESSION');
    }

    const result = await setupSellerTwoFactor(setupToken, req.body.code);
    res.clearCookie('hammr_2fa_pending', clearCookieOptions);
    setAuthCookie(res, result.token);

    res.status(200).json({
      status: 'success',
      data: { user: result.user },
    });
  } catch (error) {
    next(error);
  }
};

export const meController: RequestHandler = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new AppError(401, 'Authentication required', 'UNAUTHORIZED');
    }

    const user = await getCurrentUser(Number(req.user.sub));

    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

export const logoutController: RequestHandler = (_req, res) => {
  res.clearCookie('hammr_access_token', clearCookieOptions);
  res.clearCookie('hammr_2fa_pending', clearCookieOptions);

  res.status(200).json({
    status: 'success',
    data: { message: 'Logged out successfully' },
  });
};
