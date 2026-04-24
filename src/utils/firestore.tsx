'use server'
import 'server-only'
import { cache } from 'react'
import { db } from "@/utils/firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { revalidatePath } from 'next/cache';
import { requireAdmin } from '@/app/blog/gallery/admin/session';
import type { Photo, PhotoCategoriesMap } from '@/types/Photo';


export const getFirestoreImages = cache(async () => {
  "use server"
  const querySnapshot = await getDocs(collection(db, "photos"));
  const photos: Photo[] = querySnapshot.docs.map((snap) => {
    const data = snap.data() as Partial<Photo>;
    const { cameraInfo: _omitted, ...rest } = data;
    return {
      id: snap.id,
      file: rest.file ?? '',
      title: rest.title ?? '',
      categories: (rest.categories ?? {}) as PhotoCategoriesMap,
    };
  });

  return {
    photos
  };
});


export async function addPhoto(photo: {
  id: string;
  file: string;
  title: string;
  categories: PhotoCategoriesMap;
}) {
  "use server"
  await requireAdmin();
  const ref = doc(db, "photos", photo.id);
  await setDoc(ref, {
    file: photo.file,
    title: photo.title,
    categories: photo.categories,
  });
  revalidatePath('/blog/gallery');
  return { ok: true as const, id: photo.id };
}


export async function updatePhoto(
  id: string,
  patch: Partial<Pick<Photo, 'file' | 'title' | 'categories'>>,
) {
  "use server"
  await requireAdmin();
  const ref = doc(db, "photos", id);
  await updateDoc(ref, patch);
  revalidatePath('/blog/gallery');
  revalidatePath(`/blog/gallery/${id}`);
  return { ok: true as const, id };
}


export async function deletePhoto(id: string) {
  "use server"
  await requireAdmin();
  const ref = doc(db, "photos", id);
  await deleteDoc(ref);
  revalidatePath('/blog/gallery');
  return { ok: true as const, id };
}
