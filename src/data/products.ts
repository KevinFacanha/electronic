import { Product } from '../types';

export const products: Product[] = [
  // Smartphones
  {
    id: 1,
    name: "Smartphone Premium",
    price: 3999.99,
    description: "O mais recente smartphone com recursos avançados e câmera de alta resolução.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "smartphones"
  },
  {
    id: 2,
    name: "Smartphone Intermediário",
    price: 1899.99,
    description: "Excelente custo-benefício com ótimo desempenho para o dia a dia.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "smartphones"
  },
  {
    id: 3,
    name: "Smartphone Básico",
    price: 899.99,
    description: "Ideal para tarefas essenciais com bateria de longa duração.",
    image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "smartphones"
  },
  
  // Áudio
  {
    id: 4,
    name: "Fones de Ouvido Sem Fio",
    price: 799.99,
    description: "Fones de ouvido com cancelamento de ruído e qualidade de som premium.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "audio"
  },
  {
    id: 5,
    name: "Fones de Ouvido Intra-auriculares",
    price: 499.99,
    description: "Fones compactos com incrível qualidade sonora e longa duração de bateria.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "audio"
  },
  {
    id: 6,
    name: "Caixa de Som Bluetooth",
    price: 349.99,
    description: "Caixa de som portátil com som potente e resistente à água.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "audio"
  },
  
  // Wearables
  {
    id: 7,
    name: "Smartwatch Esportivo",
    price: 999.99,
    description: "Acompanhe seus exercícios e mantenha-se conectado com este elegante smartwatch.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "wearables"
  },
  {
    id: 8,
    name: "Pulseira Fitness",
    price: 299.99,
    description: "Monitore seus passos, sono e atividades com esta pulseira leve e confortável.",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "wearables"
  },
  
  // Computadores
  {
    id: 9,
    name: "Notebook Profissional",
    price: 5299.99,
    description: "Notebook potente para profissionais com especificações de alto desempenho.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "computadores"
  },
  {
    id: 10,
    name: "Notebook Gamer",
    price: 7499.99,
    description: "Projetado para gamers com placa de vídeo dedicada e sistema de refrigeração avançado.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "computadores"
  },
  {
    id: 11,
    name: "Desktop All-in-One",
    price: 3899.99,
    description: "Computador completo com monitor integrado, ideal para trabalho e estudos.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "computadores"
  },
  
  // Fotografia
  {
    id: 12,
    name: "Câmera Digital",
    price: 2799.99,
    description: "Capture suas memórias com esta câmera digital de alta resolução.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "fotografia"
  },
  {
    id: 13,
    name: "Câmera Mirrorless",
    price: 4999.99,
    description: "Câmera profissional compacta com lentes intercambiáveis e sensor de alta qualidade.",
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "fotografia"
  },
  {
    id: 14,
    name: "Tripé Profissional",
    price: 399.99,
    description: "Tripé estável e ajustável para fotografia e vídeo profissional.",
    image: "https://images.unsplash.com/photo-1617953141905-b27fb1f17d88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "fotografia"
  }
];

export const categories = [
  { id: "todos", name: "Todos os Produtos" },
  { id: "smartphones", name: "Smartphones" },
  { id: "audio", name: "Áudio" },
  { id: "wearables", name: "Wearables" },
  { id: "computadores", name: "Computadores" },
  { id: "fotografia", name: "Fotografia" }
];