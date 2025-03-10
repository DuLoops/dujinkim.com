import { getFirestoreImages } from '@/utils/firestore';
import GalleryContainer from './_components/GalleryContainer';
import ScrollToTop from '@/components/ScrollToTop';


export default async function Page() {
  const { photos } = await getFirestoreImages();
  return (
    <div>
      <div>
        <h1 className='text-center text-3xl md:text-5xl font-ma font-light text-neutral-500 mt-2 md:mt-6 md:mb-2'>Photography Gallery</h1>
        <p className='text-center text-neutral-500 text-lg md:text-xl font-light'>A collection of moments, travels, and creative captures from Dujin.</p>
      </div>
      <GalleryContainer photos={photos} />
      <ScrollToTop />
    </div>
  );
}
