import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem, ShippingInfo, PaymentInfo, Order } from '../types';

interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  shippingInfo: ShippingInfo | null;
  setShippingInfo: (info: ShippingInfo) => void;
  paymentInfo: PaymentInfo | null;
  setPaymentInfo: (info: PaymentInfo) => void;
  placeOrder: () => Promise<Order>;
  orders: Order[];
  isCheckoutComplete: boolean;
  setIsCheckoutComplete: (value: boolean) => void;
}

const defaultShippingInfo: ShippingInfo = {
  name: '',
  email: '',
  address: '',
  city: '',
  postalCode: '',
  country: ''
};

const defaultPaymentInfo: PaymentInfo = {
  cardNumber: '',
  cardHolder: '',
  expiryDate: '',
  cvv: ''
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );

  const placeOrder = async (): Promise<Order> => {
    if (!shippingInfo || !paymentInfo) {
      throw new Error('Shipping and payment information are required');
    }

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newOrder: Order = {
      items: [...cart],
      shippingInfo,
      paymentInfo,
      total: cartTotal,
      date: new Date()
    };

    setOrders(prevOrders => [...prevOrders, newOrder]);
    clearCart();
    setShippingInfo(null);
    setPaymentInfo(null);
    setIsCheckoutComplete(true);

    return newOrder;
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    shippingInfo,
    setShippingInfo,
    paymentInfo,
    setPaymentInfo,
    placeOrder,
    orders,
    isCheckoutComplete,
    setIsCheckoutComplete
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};