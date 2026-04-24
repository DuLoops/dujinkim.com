import 'server-only';
import { cookies } from 'next/headers';
import { createHash, timingSafeEqual } from 'crypto';

export const ADMIN_COOKIE = 'gallery_admin_session';
const COOKIE_MAX_AGE = 60 * 60 * 8;

function expectedToken(): string | null {
  const secret = process.env.ADMIN_LOGIN;
  if (!secret) return null;
  return createHash('sha256').update(secret).digest('hex');
}

export async function isAdmin(): Promise<boolean> {
  const token = expectedToken();
  if (!token) return false;
  const cookieVal = cookies().get(ADMIN_COOKIE)?.value;
  if (!cookieVal) return false;
  const a = Buffer.from(cookieVal);
  const b = Buffer.from(token);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) {
    throw new Error('Unauthorized');
  }
}

export async function setAdminCookie(password: string): Promise<boolean> {
  const secret = process.env.ADMIN_LOGIN;
  if (!secret) return false;
  const expected = Buffer.from(secret);
  const given = Buffer.from(password);
  if (expected.length !== given.length) return false;
  if (!timingSafeEqual(expected, given)) return false;
  const token = createHash('sha256').update(secret).digest('hex');
  cookies().set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  });
  return true;
}

export async function clearAdminCookie(): Promise<void> {
  cookies().delete(ADMIN_COOKIE);
}
