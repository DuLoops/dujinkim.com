'use client';

interface FilterTagsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['all', 'life', 'architecture', 'adventure', 'landscape', 'products', 'sports'];

export default function FilterTags({ selectedCategory, onCategoryChange }: FilterTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-1 rounded-full text-sm ${
            selectedCategory === category
              ? 'bg-neutral-700 text-white'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-300'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
