'use server';

import { redirect } from 'next/navigation';
import { setAdminCookie, clearAdminCookie } from './session';

export async function loginAction(_prev: { error?: string } | undefined, formData: FormData) {
  const password = String(formData.get('password') ?? '');
  if (!process.env.ADMIN_LOGIN) {
    return { error: 'Server is not configured (ADMIN_LOGIN missing).' };
  }
  const ok = await setAdminCookie(password);
  if (!ok) {
    return { error: 'Invalid password.' };
  }
  redirect('/blog/gallery/admin');
}

export async function logoutAction() {
  await clearAdminCookie();
  redirect('/blog/gallery/admin');
}
