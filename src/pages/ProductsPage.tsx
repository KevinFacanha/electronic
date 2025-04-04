import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import FeaturedProducts from '../components/FeaturedProducts';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Produtos em destaque (os 4 mais caros)
  const featuredProducts = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);
  
  // Produtos mais recentes (últimos 4 adicionados)
  const newArrivals = [...products].slice(-4);
  
  useEffect(() => {
    if (selectedCategory === 'todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return (
    <div className="container mx-auto py-8 px-4">
      <Banner onShopNow={() => setSelectedCategory('todos')} />
      
      <FeaturedProducts 
        title="Produtos em Destaque" 
        products={featuredProducts}
        onViewAll={() => setSelectedCategory('todos')}
      />
      
      <FeaturedProducts 
        title="Novidades" 
        products={newArrivals}
        onViewAll={() => setSelectedCategory('todos')}
      />
      
      <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>
      
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <Newsletter />
    </div>
  );
};

export default ProductsPage;