'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { loginAction } from '../actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-orange-400 text-black font-medium py-2 hover:bg-orange-300 disabled:opacity-50"
    >
      {pending ? 'Signing in...' : 'Sign in'}
    </button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(loginAction, undefined);

  return (
    <form action={action} className="flex flex-col gap-3 w-full max-w-sm mx-auto mt-16 p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
      <h1 className="text-xl text-white font-light text-center">Gallery Admin</h1>
      <label className="text-sm text-neutral-300">Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        required
        className="px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-orange-400"
      />
      {state?.error && (
        <p className="text-sm text-red-400">{state.error}</p>
      )}
      <SubmitButton />
    </form>
  );
}
