import React, { useState, useMemo } from 'react';
import { 
  LayoutGrid, 
  PackageOpen, 
  X, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Gamepad2,
  Home,
  PawPrint,
  Utensils,
  Shirt,
  Smartphone,
  Armchair,
  MoreHorizontal,
  Flame
} from 'lucide-react';
import { Product, Category } from './types';
import { INITIAL_PRODUCTS, CATEGORIES, WHATSAPP_NUMBER } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Brinquedos": <Gamepad2 size={16} />,
  "Decoração": <Home size={16} />,
  "Pets": <PawPrint size={16} />,
  "Utilidades Domésticas": <Utensils size={16} />,
  "Roupas": <Shirt size={16} />,
  "Eletrônicos": <Smartphone size={16} />,
  "Móveis": <Armchair size={16} />,
  "Outros": <MoreHorizontal size={16} />
};

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS
      .filter(p => {
        const categoryMatch = activeCategory === 'Todos' || p.category === activeCategory;
        if (activeCategory === 'Todos' && p.isSold) return false;
        return categoryMatch;
      })
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [activeCategory]);

  const resetView = () => {
    setActiveCategory('Todos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar resetView={resetView} />

      {/* Menu de Categorias Sticky */}
      <div className="sticky top-16 z-40 bg-white/70 backdrop-blur-2xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-4 py-6">
            <button
              onClick={() => setActiveCategory('Todos')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-700 relative group overflow-hidden ${
                activeCategory === 'Todos' 
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-[0_15px_40px_-10px_rgba(16,185,129,0.5)] scale-105' 
                  : 'bg-white text-slate-400 border border-slate-100 hover:border-emerald-300 hover:text-emerald-600 shadow-sm'
              }`}
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>
              {activeCategory === 'Todos' ? <Sparkles size={18} className="animate-pulse" /> : <LayoutGrid size={18} />}
              <span>Destaques</span>
            </button>
            
            <div className="h-8 w-[2px] bg-slate-100 mx-1 shrink-0"></div>

            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center space-x-2.5 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 transform hover:scale-105 ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
                }`}
              >
                <span className={activeCategory === cat ? 'text-emerald-400' : 'text-slate-300'}>
                  {CATEGORY_ICONS[cat] || <MoreHorizontal size={16} />}
                </span>
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start space-x-3 text-emerald-600 text-[11px] font-black uppercase tracking-[0.4em] mb-4">
              <div className="hidden md:block w-12 h-[2px] bg-emerald-600/30"></div>
              <Flame size={16} className="text-orange-500" />
              <span>Garimpo Londrina</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-[0.9] mb-4">
              {activeCategory === 'Todos' ? 'Curadoria Especial' : activeCategory}
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg">
              {activeCategory === 'Todos' 
                ? 'Produtos selecionados para o bazar de hoje. Itens em ótimo estado e preços imperdíveis.' 
                : `Confira nossa seleção de ${activeCategory.toLowerCase()}.`}
            </p>
          </div>
        </div>

        {/* Listagem de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setViewingProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-48 text-center bg-white rounded-[4rem] border border-slate-100 border-dashed border-2">
            <PackageOpen size={48} className="mx-auto text-slate-200 mb-8" />
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Tudo vendido!</h3>
            <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">Não há itens disponíveis nesta categoria agora.</p>
            <button onClick={resetView} className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100">
              Ver todos os destaques
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-100 py-24 mt-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <h4 className="font-black text-slate-900 text-2xl tracking-tighter mb-2">Desapegos Londrina</h4>
            <p className="text-slate-400 text-sm font-medium italic">Sustentabilidade e economia em cada detalhe.</p>
          </div>
          <div className="flex justify-center">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="flex items-center space-x-3 bg-emerald-50 text-emerald-600 px-8 py-4 rounded-2xl font-black text-sm hover:bg-emerald-600 hover:text-white transition-all duration-500 shadow-sm">
              <MessageCircle size={20} />
              <span>(43) 99116-7333</span>
            </a>
          </div>
          <div className="md:text-right">
            <p className="text-slate-300 text-[10px] uppercase tracking-[0.4em] font-black">Londrina • PR</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE DETALHES - COM FOCO NO SCROLL DO TEXTO */}
      {viewingProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 bg-slate-900/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-6xl md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full md:max-h-[90vh] animate-in slide-in-from-bottom-10 duration-500">
            
            {/* Esquerda: Galeria de Imagens */}
            <div className="md:w-[55%] bg-slate-50 relative h-[40vh] md:h-auto overflow-hidden border-r border-slate-100">
              <ProductDetailGallery images={viewingProduct.images} />
              <button 
                onClick={() => setViewingProduct(null)} 
                className="absolute top-6 left-6 bg-white/90 p-4 rounded-2xl md:hidden shadow-2xl text-slate-900 z-50 backdrop-blur-md"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Direita: Textos e CTA com Scroll Independente */}
            <div className="md:w-[45%] flex flex-col h-full bg-white overflow-hidden">
              <div className="p-8 md:p-12 pb-6 shrink-0">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em] bg-emerald-50 px-4 py-2 rounded-full">
                    {viewingProduct.category}
                  </span>
                  <button onClick={() => setViewingProduct(null)} className="hidden md:flex text-slate-300 hover:text-slate-900 transition-all p-2 hover:bg-slate-50 rounded-xl">
                    <X size={28} />
                  </button>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                  {viewingProduct.name}
                </h2>
                <div className="flex items-baseline gap-2 mb-8 text-emerald-600">
                  <span className="text-lg font-bold">R$</span>
                  <span className="text-5xl font-black tracking-tighter">{viewingProduct.price.toFixed(2)}</span>
                </div>
                
                <a 
                  href={viewingProduct.isSold ? '#' : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no item "${viewingProduct.name}" por R$ ${viewingProduct.price.toFixed(2)}. Ainda está disponível?`)}`} 
                  target={viewingProduct.isSold ? '_self' : '_blank'} 
                  className={`w-full flex items-center justify-center space-x-4 py-5 rounded-[1.5rem] font-black uppercase text-[12px] tracking-[0.2em] transition-all duration-500 ${viewingProduct.isSold ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-emerald-600 shadow-xl shadow-slate-200'}`}
                >
                  <MessageCircle size={20} />
                  <span>{viewingProduct.isSold ? 'Item Vendido' : 'Quero Comprar Agora'}</span>
                </a>
              </div>
              
              {/* Área do texto descritivo com scroll customizado */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-0 custom-scrollbar">
                <div className="w-full h-px bg-slate-100 mb-8"></div>
                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6">Descrição Completa</h4>
                <div className="text-slate-600 whitespace-pre-wrap leading-relaxed font-medium text-lg md:text-xl pb-12">
                  {viewingProduct.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductDetailGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="h-full flex flex-col relative group">
      <div className="relative flex-1 bg-slate-100">
        <img src={images[active]} className="w-full h-full object-cover transition-all duration-700" alt="Produto" />
        {images.length > 1 && (
          <>
            <button onClick={() => setActive((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-3xl shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"><ChevronLeft size={28} /></button>
            <button onClick={() => setActive((prev) => (prev + 1) % images.length)} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-3xl shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"><ChevronRight size={28} /></button>
            <div className="absolute bottom-6 left-6 right-6 flex gap-3 overflow-x-auto no-scrollbar py-2">
              {images.map((img, i) => (
                <button key={i} onClick={() => setActive(i)} className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${i === active ? 'border-emerald-500 scale-110 shadow-lg' : 'border-white/50 grayscale hover:grayscale-0'}`}>
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;