'use client';
import { useState } from 'react';
import GalleryViewer from './GalleryViewer';
import FilterTags from './FilterTags';
import { Metadata } from 'next';

interface GalleryContainerProps {
  photos: any[];
}
export const metadata: Metadata = {
    title: 'Photo Gallery | Dujin Kim',
    description: 'Personal photography collection showcasing moments, travels, and creative captures from my experiences.',
    keywords: ['photography', 'gallery', 'personal photos', 'portfolio', 'Dujin Kim'],
    openGraph: {
      title: 'Photo Gallery | Dujin Kim',
      description: 'Explore my personal photography collection',
      images: [
        {
          url: '/images/dev/photogallery.png', 
          width: 1200,
          height: 630,
          alt: 'Gallery Cover Photo',
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Photo Gallery | Dujin Kim',
      description: 'Personal photography collection',
      images: ['/images/dev/photogallery.png'], 
    },
  };
export default function GalleryContainer({ photos }: GalleryContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <FilterTags 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <GalleryViewer 
        photos={photos} 
        selectedCategory={selectedCategory} 
      />
    </>
  );
}
