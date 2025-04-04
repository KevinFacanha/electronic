import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Aqui você adicionaria a lógica para enviar o email para seu backend
    }
  };
  
  return (
    <div className="bg-gray-100 py-12 px-4 rounded-lg mb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Inscreva-se em nossa Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Receba as últimas novidades, ofertas exclusivas e dicas de tecnologia diretamente no seu email.
        </p>
        
        {subscribed ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-md">
            Obrigado por se inscrever! Em breve você receberá nossas novidades.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu endereço de email"
              required
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <span>Inscrever-se</span>
              <Send size={16} className="ml-2" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;