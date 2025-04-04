import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  onViewAll: () => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title, products, onViewAll }) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button 
          onClick={onViewAll}
          className="flex items-center text-indigo-600 hover:text-indigo-800"
        >
          Ver todos <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;