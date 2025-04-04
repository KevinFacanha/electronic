import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useShop } from '../context/ShopContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useShop();
  const { product, quantity } = item;
  
  return (
    <div className="flex items-center py-4 border-b">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        <p className="text-indigo-600 font-bold">R$ {product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <Minus size={16} />
        </button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <button 
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="ml-6 w-24 text-right">
        <p className="text-lg font-medium text-gray-800">
          R$ {(product.price * quantity).toFixed(2)}
        </p>
      </div>
      
      <button 
        onClick={() => removeFromCart(product.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartItem;