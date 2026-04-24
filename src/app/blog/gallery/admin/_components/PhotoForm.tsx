'use client';

import { useState, useTransition, type ChangeEvent, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/utils/firebase';
import {
  PHOTO_CATEGORIES,
  type Photo,
  type PhotoCategory,
  type PhotoCategoriesMap,
} from '@/types/Photo';
import { addPhoto, updatePhoto, deletePhoto } from '@/utils/firestore';

interface PhotoFormProps {
  existing: Photo[];
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || `photo-${Date.now()}`;
}

function emptyCategories(): PhotoCategoriesMap {
  return {};
}

export default function PhotoForm({ existing }: PhotoFormProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  const [editingId, setEditingId] = useState<string>('');
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState<PhotoCategoriesMap>(emptyCategories());
  const [file, setFile] = useState<File | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [progress, setProgress] = useState<string>('');

  const resetForm = () => {
    setEditingId('');
    setTitle('');
    setCategories(emptyCategories());
    setFile(null);
    setCurrentUrl('');
    setProgress('');
  };

  const handleSelectExisting = (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    if (!id) {
      resetForm();
      return;
    }
    const p = existing.find((x) => x.id === id);
    if (!p) return;
    setEditingId(p.id);
    setTitle(p.title ?? '');
    setCategories(p.categories ?? {});
    setFile(null);
    setCurrentUrl(p.file ?? '');
    setStatus({ type: 'idle' });
  };

  const toggleCategory = (cat: PhotoCategory) => {
    setCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const uploadFile = async (f: File, id: string): Promise<string> => {
    const ext = f.name.split('.').pop() || 'jpg';
    const path = `photos/${id}-${Date.now()}.${ext}`;
    setProgress('Uploading image...');
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, f);
    setProgress('Getting download URL...');
    return getDownloadURL(storageRef);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'idle' });

    if (!title.trim()) {
      setStatus({ type: 'error', message: 'Title is required.' });
      return;
    }

    if (!editingId && !file) {
      setStatus({ type: 'error', message: 'Select an image file.' });
      return;
    }

    try {
      if (editingId) {
        let fileUrl = currentUrl;
        if (file) {
          fileUrl = await uploadFile(file, editingId);
        }
        setProgress('Saving...');
        const result = await updatePhoto(editingId, {
          title: title.trim(),
          categories,
          file: fileUrl,
        });
        if (!result.ok) throw new Error('Update failed');
        setStatus({ type: 'success', message: `Updated "${title}".` });
      } else {
        const id = slugify(title);
        const fileUrl = await uploadFile(file as File, id);
        setProgress('Saving...');
        const result = await addPhoto({
          id,
          title: title.trim(),
          categories,
          file: fileUrl,
        });
        if (!result.ok) throw new Error('Create failed');
        setStatus({ type: 'success', message: `Added "${title}".` });
        resetForm();
      }
      setProgress('');
      startTransition(() => router.refresh());
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error.';
      setStatus({ type: 'error', message });
      setProgress('');
    }
  };

  const onDelete = async () => {
    if (!editingId) return;
    if (!confirm(`Delete "${title}"? This removes the Firestore entry (not the Storage file).`)) return;
    try {
      const res = await deletePhoto(editingId);
      if (!res.ok) throw new Error('Delete failed');
      setStatus({ type: 'success', message: 'Deleted.' });
      resetForm();
      startTransition(() => router.refresh());
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error.';
      setStatus({ type: 'error', message });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6">
      <div className="flex flex-col gap-2 mb-6">
        <label className="text-sm text-neutral-300">Edit existing photo</label>
        <select
          value={editingId}
          onChange={handleSelectExisting}
          className="px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700"
        >
          <option value="">— New photo —</option>
          {existing.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title} ({p.id})
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-neutral-900/60 border border-neutral-700 rounded-lg p-6">
        <h2 className="text-white text-lg font-light">
          {editingId ? `Editing: ${editingId}` : 'New photo'}
        </h2>

        <label className="text-sm text-neutral-300">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="px-3 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-orange-400"
        />

        <label className="text-sm text-neutral-300">Categories</label>
        <div className="flex flex-wrap gap-2">
          {PHOTO_CATEGORIES.map((cat) => (
            <label
              key={cat}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer border ${
                categories[cat]
                  ? 'bg-orange-400 text-black border-orange-400'
                  : 'bg-neutral-800 text-neutral-300 border-neutral-700'
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={!!categories[cat]}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        <label className="text-sm text-neutral-300">
          {editingId ? 'Replace image (optional)' : 'Image file'}
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="text-neutral-300 text-sm"
        />

        {(currentUrl || file) && (
          <div className="mt-2">
            <p className="text-xs text-neutral-400 mb-1">Preview</p>
            <Image
              src={file ? URL.createObjectURL(file) : currentUrl}
              alt="preview"
              width={400}
              height={300}
              unoptimized
              className="max-h-64 w-auto object-contain border border-neutral-700 rounded"
            />
          </div>
        )}

        {progress && <p className="text-sm text-neutral-400">{progress}</p>}
        {status.type === 'success' && <p className="text-sm text-green-400">{status.message}</p>}
        {status.type === 'error' && <p className="text-sm text-red-400">{status.message}</p>}

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            disabled={pending || !!progress}
            className="flex-1 rounded-md bg-orange-400 text-black font-medium py-2 hover:bg-orange-300 disabled:opacity-50"
          >
            {editingId ? 'Save changes' : 'Upload photo'}
          </button>
          {editingId && (
            <>
              <button
                type="button"
                onClick={resetForm}
                className="rounded-md border border-neutral-600 text-neutral-200 px-4 py-2 hover:bg-neutral-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onDelete}
                className="rounded-md border border-red-600 text-red-400 px-4 py-2 hover:bg-red-900/30"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
