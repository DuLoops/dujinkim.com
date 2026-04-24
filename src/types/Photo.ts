export const PHOTO_CATEGORIES = [
  'architecture',
  'design',
  'landscape',
  'lifestyle',
  'travel',
] as const;

export type PhotoCategory = (typeof PHOTO_CATEGORIES)[number];

export type PhotoCategoriesMap = Partial<Record<PhotoCategory, boolean>>;

export interface Photo {
  id: string;
  file: string;
  title: string;
  categories: PhotoCategoriesMap;
  cameraInfo?: Record<string, unknown>;
}

export type PhotoInput = Omit<Photo, 'id' | 'cameraInfo'> & {
  id?: string;
};

export const FILTER_CATEGORIES = ['all', ...PHOTO_CATEGORIES] as const;
export type FilterCategory = (typeof FILTER_CATEGORIES)[number];
