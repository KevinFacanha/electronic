import React from 'react';
import { categories } from '../data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categorias</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;