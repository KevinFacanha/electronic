import React from 'react';

interface BannerProps {
  onShopNow: () => void;
}

const Banner: React.FC<BannerProps> = ({ onShopNow }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg overflow-hidden mb-12">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Ofertas Especiais de Tecnologia</h1>
          <p className="text-lg mb-6">
            Descubra os melhores produtos de tecnologia com preços incríveis. 
            Smartphones, notebooks, acessórios e muito mais!
          </p>
          <div className="flex gap-4">
            <button 
              onClick={onShopNow}
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Comprar Agora
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Tecnologia" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;