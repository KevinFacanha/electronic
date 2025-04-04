import React from 'react';
import { ShoppingBag } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useShop } from '../context/ShopContext';

interface CartPageProps {
  onNavigate: (page: string) => void;
}

const CartPage: React.FC<CartPageProps> = ({ onNavigate }) => {
  const { cart, cartTotal } = useShop();
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Seu carrinho está vazio</h2>
        <p className="text-gray-500 mb-8">Parece que você ainda não adicionou nenhum produto ao seu carrinho.</p>
        <button 
          onClick={() => onNavigate('products')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Continuar Comprando
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Seu Carrinho de Compras</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flow-root">
          <div className="-my-6 divide-y divide-gray-200">
            {cart.map(item => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between text-xl font-semibold">
            <span>Total</span>
            <span>R$ {cartTotal.toFixed(2)}</span>
          </div>
          
          <div className="mt-6">
            <button 
              onClick={() => onNavigate('checkout')}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;