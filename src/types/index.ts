export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingInfo {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export interface Order {
  items: CartItem[];
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  total: number;
  date: Date;
}

export interface Category {
  id: string;
  name: string;
}