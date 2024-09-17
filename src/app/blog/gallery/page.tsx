"use server"
import { getFirestoreImages } from '@/utils/firestore';
import Image from 'next/image';
import Link from 'next/link';
import GalleryViewer from './_components/GalleryViewer';
export default async function page() {
  const { photos } =  await getFirestoreImages();
  
  return (
    <GalleryViewer photos={photos} />
  )
}
