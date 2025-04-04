import React, { useState } from 'react';
import { CreditCard, Truck, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ShippingInfo, PaymentInfo } from '../types';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const { 
    cart, 
    cartTotal, 
    shippingInfo, 
    setShippingInfo, 
    paymentInfo, 
    setPaymentInfo, 
    placeOrder,
    isCheckoutComplete,
    setIsCheckoutComplete
  } = useShop();
  
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>(
    isCheckoutComplete ? 'confirmation' : 'shipping'
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  if (cart.length === 0 && !isCheckoutComplete) {
    onNavigate('products');
    return null;
  }
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };
  
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsProcessing(true);
    
    try {
      await placeOrder();
      setStep('confirmation');
    } catch (err) {
      setError('Ocorreu um erro ao processar seu pagamento. Por favor, tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value } as ShippingInfo));
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value } as PaymentInfo));
  };
  
  const renderShippingForm = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Truck className="mr-2" size={24} />
        Informações de Entrega
      </h2>
      
      <form onSubmit={handleShippingSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={shippingInfo?.name || ''}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={shippingInfo?.email || ''}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Endereço
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={shippingInfo?.address || ''}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Cidade
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={shippingInfo?.city || ''}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
              CEP
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              required
              value={shippingInfo?.postalCode || ''}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              País
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              value={shippingInfo?.country || ''}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Continuar para Pagamento
          </button>
        </div>
      </form>
    </div>
  );
  
  const renderPaymentForm = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <CreditCard className="mr-2" size={24} />
        Informações de Pagamento
      </h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handlePaymentSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Número do Cartão
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
              placeholder="1234 5678 9012 3456"
              value={paymentInfo?.cardNumber || ''}
              onChange={handlePaymentChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700 mb-1">
              Nome no Cartão
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              required
              value={paymentInfo?.cardHolder || ''}
              onChange={handlePaymentChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                Data de Validade (MM/AA)
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                required
                placeholder="MM/AA"
                value={paymentInfo?.expiryDate || ''}
                onChange={handlePaymentChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                required
                placeholder="123"
                value={paymentInfo?.cvv || ''}
                onChange={handlePaymentChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between text-xl font-semibold">
            <span>Total</span>
            <span>R$ {cartTotal.toFixed(2)}</span>
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-3 px-4 rounded-md transition-colors ${
                isProcessing 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {isProcessing ? 'Processando...' : 'Finalizar Compra'}
            </button>
          </div>
          
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setStep('shipping')}
              className="w-full text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-50 transition-colors"
            >
              Voltar para Entrega
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  
  const renderConfirmation = () => (
    <div className="text-center py-8">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <Check size={32} className="text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Pedido Confirmado!</h2>
      <p className="text-gray-600 mb-8">
        Obrigado pela sua compra. Seu pedido foi realizado com sucesso.
      </p>
      
      <button
        onClick={() => {
          setIsCheckoutComplete(false);
          onNavigate('products');
        }}
        className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Continuar Comprando
      </button>
    </div>
  );
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {step === 'shipping' && renderShippingForm()}
        {step === 'payment' && renderPaymentForm()}
        {step === 'confirmation' && renderConfirmation()}
      </div>
    </div>
  );
};

export default CheckoutPage;