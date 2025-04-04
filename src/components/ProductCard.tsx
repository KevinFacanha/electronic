import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useShop();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 h-12 overflow-hidden">{product.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-indigo-600 font-bold">R$ {product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;