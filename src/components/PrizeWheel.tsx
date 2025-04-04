import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X } from 'lucide-react';
import { Product } from '../types';

interface PrizeWheelProps {
  products: Product[];
  onClose: () => void;
}

const PrizeWheel: React.FC<PrizeWheelProps> = ({ products: allProducts, onClose }) => {
  const products = allProducts.slice(0, 6);
  
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rotation, setRotation] = useState(0);
  const [showPrize, setShowPrize] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowPrize(false);
    
    const rotations = Math.floor(Math.random() * 5) + 5;
    const finalPosition = Math.floor(Math.random() * 360);
    const totalRotation = rotations * 360 + finalPosition;
    
    const randomIndex = Math.floor(Math.random() * products.length);
    const prize = products[randomIndex];

    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedProduct(prize);
      setShowPrize(true);
    }, 5000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Roleta de Prêmios
          </h2>
          <p className="text-gray-600">
            Gire a roleta e ganhe um prêmio especial!
          </p>
        </div>

        <div className="relative w-[480px] h-[480px] mx-auto mb-8">
          {/* Ponteiro */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[24px] border-t-red-600" />
          </div>

          {/* Círculo da roleta */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl overflow-hidden"
            animate={{ rotate: rotation }}
            transition={{
              duration: 5,
              ease: "easeOut",
            }}
          >
            {products.map((product, index) => {
              const angle = (360 / products.length) * index;
              const bgColor = index % 2 === 0 ? 'bg-white/10' : 'bg-black/10';
              
              // Calcular a posição radial para o item
              const itemAngle = angle + (360 / products.length / 2); // Centralizar no setor
              const radius = 180; // Distância do centro
              const radian = (itemAngle * Math.PI) / 180;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;

              return (
                <div
                  key={product.id}
                  className={`absolute w-full h-full ${bgColor}`}
                  style={{
                    transform: `rotate(${angle}deg)`,
                    clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)',
                  }}
                >
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{
                      transform: `
                        translate(${x * 0.45}px, ${y * 0.45}px) 
                        rotate(${-rotation}deg)
                        rotate(${-angle}deg)
                      `,
                      width: '120px',
                    }}
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-white shadow-lg bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 bg-white/90 rounded-md p-1 w-full">
                      <p className="text-xs font-bold text-indigo-800 text-center truncate">
                        {product.name}
                      </p>
                      <p className="text-xs font-semibold text-indigo-600 text-center">
                        R$ {product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
          
          {/* Botão central */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <button
              onClick={spinWheel}
              disabled={isSpinning}
              className={`bg-white text-indigo-600 rounded-full p-8 shadow-lg transform transition-all ${
                isSpinning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-2xl'
              }`}
            >
              <Gift size={40} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showPrize && selectedProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center bg-indigo-100 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Parabéns! Você ganhou:
              </h3>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <div className="text-left">
                  <p className="text-xl font-semibold text-gray-800">
                    {selectedProduct.name}
                  </p>
                  <p className="text-indigo-600 font-bold">
                    R$ {selectedProduct.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PrizeWheel;