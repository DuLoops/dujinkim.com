import { isAdmin } from './session';
import { logoutAction } from './actions';
import { getFirestoreImages } from '@/utils/firestore';
import LoginForm from './_components/LoginForm';
import PhotoForm from './_components/PhotoForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Gallery Admin | Dujin Kim',
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const authed = await isAdmin();

  if (!authed) {
    return (
      <div className="min-h-[60vh] flex items-center">
        <LoginForm />
      </div>
    );
  }

  const { photos } = await getFirestoreImages();

  return (
    <div className="py-4">
      <div className="flex items-center justify-between max-w-2xl mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl font-light text-neutral-200">Gallery Admin</h1>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-sm text-neutral-400 hover:text-white border border-neutral-700 rounded-md px-3 py-1"
          >
            Sign out
          </button>
        </form>
      </div>
      <PhotoForm existing={photos} />
    </div>
  );
}
