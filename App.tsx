import React, { useState, useMemo, useEffect } from 'react';
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
  Monitor,
  MoreHorizontal,
  Flame,
  Maximize2
} from 'lucide-react';
import { Product, Category } from './types';
import { INITIAL_PRODUCTS, CATEGORIES, WHATSAPP_NUMBER } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Brinquedos": <Gamepad2 size={14} />,
  "Decoração": <Home size={14} />,
  "Pets": <PawPrint size={14} />,
  "Utilidades Domésticas": <Utensils size={14} />,
  "Roupas": <Shirt size={14} />,
  "Eletrônicos": <Smartphone size={14} />,
  "Informática": <Monitor size={14} />,
  "Móveis": <Armchair size={14} />,
  "Outros": <MoreHorizontal size={14} />
};

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  // Impede o scroll do body quando o modal está aberto
  useEffect(() => {
    if (viewingProduct || fullScreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [viewingProduct, fullScreenImage]);

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
      <div className="sticky top-[64px] z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-3 py-4">
            <button
              onClick={() => setActiveCategory('Todos')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === 'Todos' 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' 
                  : 'bg-white text-slate-400 border border-slate-100'
              }`}
            >
              {activeCategory === 'Todos' ? <Sparkles size={14} /> : <LayoutGrid size={14} />}
              <span>Início</span>
            </button>
            
            <div className="h-6 w-px bg-slate-100 shrink-0"></div>

            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-400 border border-slate-100'
                }`}
              >
                <span className={activeCategory === cat ? 'text-emerald-400' : 'text-slate-300'}>
                  {CATEGORY_ICONS[cat] || <MoreHorizontal size={14} />}
                </span>
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
        <div className="mb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-emerald-600 text-[9px] font-black uppercase tracking-[0.3em] mb-2">
            <Flame size={12} className="text-orange-500" />
            <span>Garimpo Londrina</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-2">
            {activeCategory === 'Todos' ? 'Novidades' : activeCategory}
          </h2>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setViewingProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[2.5rem] border border-slate-100 border-dashed border-2">
            <PackageOpen size={40} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-xl font-black text-slate-900 mb-2">Sem itens aqui</h3>
            <button onClick={resetView} className="text-emerald-600 font-bold text-xs uppercase tracking-widest">
              Ver destaques
            </button>
          </div>
        )}
      </main>

      {/* Modal Otimizado */}
      {viewingProduct && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-5xl md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full md:h-auto md:max-h-[85vh] animate-in slide-in-from-bottom-20 duration-500">
            
            {/* Esquerda: Galeria ocupando mais espaço no mobile */}
            <div className="md:w-[55%] bg-slate-100 relative h-[50vh] md:h-auto overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-slate-100">
              <ProductDetailGallery 
                images={viewingProduct.images} 
                onImageClick={(url) => setFullScreenImage(url)}
              />
              <button 
                onClick={() => setViewingProduct(null)} 
                className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full text-white z-50 md:hidden"
              >
                <X size={20} />
              </button>
              <div className="absolute top-4 left-4 md:hidden pointer-events-none">
                <div className="bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-white/20">
                  <Maximize2 size={10} className="text-white" />
                  <span className="text-[10px] text-white font-bold uppercase tracking-wider">Toque para ampliar</span>
                </div>
              </div>
            </div>
            
            {/* Direita: Conteúdo com scroll otimizado */}
            <div className="md:w-[45%] flex flex-col bg-white overflow-hidden h-[50vh] md:h-auto">
              <div className="p-6 md:p-10 pb-4 shrink-0 border-b border-slate-50 md:border-none">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
                    {viewingProduct.category}
                  </span>
                  <button onClick={() => setViewingProduct(null)} className="hidden md:block text-slate-300 hover:text-slate-900 transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-2 tracking-tight">
                  {viewingProduct.name}
                </h2>
                
                <div className="flex items-baseline gap-1.5 mb-4 text-emerald-600">
                  <span className="text-sm font-bold">R$</span>
                  <span className="text-3xl md:text-4xl font-black tracking-tighter">{viewingProduct.price.toFixed(2)}</span>
                </div>
                
                <a 
                  href={viewingProduct.isSold ? '#' : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no item "${viewingProduct.name}" (R$ ${viewingProduct.price.toFixed(2)}). Poderia me passar mais informações?`)}`} 
                  target={viewingProduct.isSold ? '_self' : '_blank'} 
                  className={`w-full flex items-center justify-center space-x-3 py-4 rounded-2xl font-black uppercase text-[11px] tracking-wider transition-all duration-300 ${viewingProduct.isSold ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-100'}`}
                >
                  <MessageCircle size={18} />
                  <span>{viewingProduct.isSold ? 'Item Vendido' : 'Pedir informações no WhatsApp'}</span>
                </a>
              </div>
              
              {/* Descrição - Scroll suave e visível */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 pt-4 custom-scrollbar touch-pan-y">
                <div className="hidden md:block w-full h-px bg-slate-100 mb-6"></div>
                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Descrição do item</h4>
                <div className="text-slate-800 whitespace-pre-wrap leading-relaxed font-medium text-[16px] md:text-lg pb-10">
                  {viewingProduct.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Foto em tela cheia (Light-box) */}
      {fullScreenImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setFullScreenImage(null)}
        >
          <img 
            src={fullScreenImage} 
            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500" 
            alt="Foto ampliada"
          />
          <button className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all">
            <X size={28} />
          </button>
        </div>
      )}

      <footer className="bg-white border-t border-slate-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="font-black text-slate-900 text-xl mb-1">Desapegos Londrina</h4>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Londrina • PR</p>
          <div className="flex justify-center">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl font-bold text-xs hover:bg-emerald-600 hover:text-white transition-all">
              <MessageCircle size={16} />
              <span>Dúvidas? Chame no WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface GalleryProps {
  images: string[];
  onImageClick: (url: string) => void;
}

const ProductDetailGallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
  const [active, setActive] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive((prev) => (prev + 1) % images.length);
  };
  
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="h-full flex flex-col relative group touch-pan-x cursor-zoom-in" onClick={() => onImageClick(images[active])}>
      <div className="relative flex-1 bg-slate-100 overflow-hidden">
        <img 
          key={active}
          src={images[active]} 
          className="w-full h-full object-contain animate-in fade-in duration-300" 
          alt="Foto do produto" 
        />
        
        {images.length > 1 && (
          <>
            {/* Áreas de toque maiores para navegação no celular */}
            <div className="absolute inset-y-0 left-0 w-1/4 flex items-center pl-4" onClick={prev}>
              <button className="bg-black/30 backdrop-blur-md p-3 rounded-full text-white md:opacity-0 md:group-hover:opacity-100 transition-all active:scale-90">
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end pr-4" onClick={next}>
              <button className="bg-black/30 backdrop-blur-md p-3 rounded-full text-white md:opacity-0 md:group-hover:opacity-100 transition-all active:scale-90">
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Indicadores */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active 
                      ? 'w-8 bg-emerald-500 shadow-lg' 
                      : 'w-2 bg-black/20 md:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;