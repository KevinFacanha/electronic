import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import { ShopProvider } from './context/ShopContext';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'login' | 'products' | 'cart' | 'checkout'>('login');
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && currentPage !== 'login') {
      setCurrentPage('login');
    }
  }, [isAuthenticated]);

  const handleNavigate = (page: string) => {
    if (page === 'login' || page === 'products' || page === 'cart' || page === 'checkout') {
      setCurrentPage(page);
    }
  };

  if (!isAuthenticated) {
    return <LoginPage onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'cart' && <CartPage onNavigate={handleNavigate} />}
        {currentPage === 'checkout' && <CheckoutPage onNavigate={handleNavigate} />}
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 TechStore. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <AppContent />
      </ShopProvider>
    </AuthProvider>
  );
}

export default App;