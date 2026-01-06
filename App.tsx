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
  Monitor,
  MoreHorizontal,
  Flame,
  Music,
  ShoppingBag,
  Info,
  HelpCircle,
  Heart,
  MapPin,
  Clock,
  FileText,
  Undo2,
  MousePointer2,
  Zap
} from 'lucide-react';
import { Product, Category } from './types';
import { INITIAL_PRODUCTS, CATEGORIES, WHATSAPP_NUMBER, NEIGHBORHOOD } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

type View = 'catalog' | 'about' | 'how';
type DetailTab = 'gallery' | 'description';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Brinquedos": <Gamepad2 size={16} />,
  "Decoração": <Home size={16} />,
  "Pets": <PawPrint size={16} />,
  "Cozinha": <Utensils size={16} />,
  "Informática": <Monitor size={16} />,
  "Instrumentos Musicais": <Music size={16} />
};

const CATEGORY_COLORS: Record<string, string> = {
  "Brinquedos": "bg-pink-600",
  "Decoração": "bg-amber-500",
  "Pets": "bg-emerald-600",
  "Cozinha": "bg-orange-600",
  "Informática": "bg-blue-600",
  "Instrumentos Musicais": "bg-indigo-600"
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('catalog');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [detailTab, setDetailTab] = useState<DetailTab>('gallery');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const highlightedProducts = useMemo(() => 
    INITIAL_PRODUCTS.filter(p => p.isHighlighted && !p.isSold), 
  []);

  const sortedCategories = useMemo(() => [...CATEGORIES].sort((a, b) => a.localeCompare(b, 'pt-BR')), []);

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
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }, [activeCategory]);

  const resetView = () => {
    setActiveCategory('Todos');
    setCurrentView('catalog');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: Category | 'Todos') => {
    setActiveCategory(cat);
    if (window.innerWidth < 768) setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentView === 'about') {
      return (
        <div className="max-w-4xl mx-auto py-8 md:py-16 px-4 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <Info size={14} /> Nossa História
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Um novo ciclo, <br/><span className="text-red-600">novas histórias.</span>
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base md:text-lg">
                <p>Somos uma família que decidiu iniciar um novo ciclo. Ao longo dos anos, acumulamos não apenas objetos, mas histórias e memórias.</p>
                <p>Chegou o momento de simplificar e seguir um novo caminho. Por isso, estamos desapegando de diversos objetos que ainda têm muito valor e qualidade.</p>
                <p className="text-slate-900 font-bold">Desejamos que essas peças tragam tanta alegria para você quanto trouxeram para nós.</p>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-2 border-white">
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Home Atmosphere" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentView === 'how') {
      return (
        <div className="max-w-4xl mx-auto py-8 md:py-16 px-4 animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <HelpCircle size={14} /> Transparência Total
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Como Funciona</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: <ShoppingBag size={20} className="text-red-600" />, title: "O Catálogo", desc: "Os produtos são do nosso acervo pessoal. Clique no item para ver detalhes e fotos reais." },
              { icon: <MessageCircle size={20} className="text-red-600" />, title: "WhatsApp", desc: "A negociação é direta pelo WhatsApp. Simples, rápido e transparente." },
              { icon: <MapPin size={20} className="text-red-600" />, title: "Retirada", desc: `A retirada é presencial no bairro ${NEIGHBORHOOD}, em Londrina-PR.` },
              { icon: <Clock size={20} className="text-red-600" />, title: "Agendamento", desc: "Combinamos um horário que seja bom para ambos. Tudo organizado." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">{step.icon}</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="animate-fade-in">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter mb-2 text-center px-4">
            {activeCategory === 'Todos' ? 'Novidades do Bazar' : activeCategory}
          </h2>
          <div className="h-1 w-16 bg-red-600 rounded-full mb-3"></div>
          <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{filteredProducts.length} itens disponíveis</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setViewingProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <PackageOpen size={48} className="mx-auto text-slate-200 mb-4" />
            <h3 className="text-xl font-black text-slate-900 mb-4">Nada encontrado nesta categoria.</h3>
            <button onClick={resetView} className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest">
              Ver tudo
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-red-50">
      {/* Ticker de Destaques */}
      <div className="bg-slate-900 text-white py-2 overflow-hidden border-b border-white/10 relative z-[60]">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* Repetimos o conteúdo para garantir scroll infinito suave */}
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center">
              {highlightedProducts.map((p) => (
                <div key={`${idx}-${p.id}`} className="flex items-center mx-8 group cursor-pointer" onClick={() => setViewingProduct(p)}>
                  <span className="flex items-center gap-1 bg-red-600 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mr-3">
                    <Zap size={10} fill="white" /> DESTAQUE
                  </span>
                  <span className="text-[10px] font-bold tracking-tight opacity-70 mr-2 uppercase">{p.category}:</span>
                  <span className="text-[10px] font-black uppercase tracking-wider group-hover:text-red-400 transition-colors">{p.name}</span>
                  <span className="mx-3 text-red-500 font-black">•</span>
                  <span className="text-[10px] font-black">R$ {p.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
      />

      {/* Categorias Integradas ao Fluxo Retrátil */}
      {currentView === 'catalog' && (
        <div className={`bg-white border-b border-slate-200/50 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleCategoryClick('Todos')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-black text-[9px] uppercase tracking-widest transition-all ${
                  activeCategory === 'Todos' ? 'bg-slate-900 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-400 border border-slate-200 hover:text-slate-700'
                }`}
              >
                <LayoutGrid size={14} />
                <span>Todos</span>
              </button>

              {sortedCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full font-black text-[9px] uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? `${CATEGORY_COLORS[cat] || 'bg-red-600'} text-white shadow-lg scale-105` 
                      : 'bg-slate-50 text-slate-400 border border-slate-200 hover:text-slate-700'
                  }`}
                >
                  {CATEGORY_ICONS[cat] || <MoreHorizontal size={14} />}
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
        {renderContent()}
      </main>

      {viewingProduct && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300 p-0 md:p-6">
          <div className="bg-white w-full max-w-5xl md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-auto md:max-h-[85vh] animate-in slide-in-from-bottom-10 duration-500">
            
            <div className="md:w-[55%] bg-slate-100 relative h-[40vh] md:h-auto overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-slate-100">
              {detailTab === 'gallery' ? (
                <ProductDetailGallery 
                  images={viewingProduct.images} 
                  onImageClick={(url) => setFullScreenImage(url)}
                />
              ) : (
                <div className="absolute inset-0 bg-white overflow-y-auto p-8 md:p-12 animate-in fade-in slide-in-from-left-5 duration-300">
                   <div className="max-w-prose mx-auto">
                    <button 
                      onClick={() => setDetailTab('gallery')}
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-600 mb-6"
                    >
                      <Undo2 size={14} /> Voltar para Fotos
                    </button>
                    <h3 className="text-xl font-black text-slate-900 mb-6 pb-4 border-b">Descrição do Item</h3>
                    <div className="text-slate-600 whitespace-pre-wrap leading-relaxed font-medium text-sm md:text-base">
                      {viewingProduct.description}
                    </div>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => setViewingProduct(null)} 
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white z-[60] transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="md:w-[45%] flex flex-col bg-white overflow-hidden p-6 md:p-12">
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[8px] font-black text-white uppercase tracking-widest px-3 py-1.5 rounded-lg ${CATEGORY_COLORS[viewingProduct.category] || 'bg-red-600'}`}>
                    {viewingProduct.category}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-tight mb-4 tracking-tighter">
                  {viewingProduct.name}
                </h2>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-sm font-bold text-red-600">R$</span>
                  <span className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">{viewingProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                
                <div className="space-y-3 mt-auto">
                  <a 
                    href={viewingProduct.isSold ? '#' : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no item "${viewingProduct.name}" do Desapegos LDR.`)}`} 
                    target={viewingProduct.isSold ? '_self' : '_blank'} 
                    className={`w-full flex items-center justify-center space-x-3 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${viewingProduct.isSold ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-red-600 active:scale-95 shadow-lg'}`}
                  >
                    <MessageCircle size={20} />
                    <span>Tenho Interesse</span>
                  </a>

                  <button 
                    onClick={() => setDetailTab(detailTab === 'gallery' ? 'description' : 'gallery')}
                    className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl font-black uppercase text-[9px] tracking-widest text-slate-500 border-2 border-slate-100 hover:border-slate-900 hover:text-slate-900 transition-all"
                  >
                    <FileText size={16} />
                    <span>{detailTab === 'gallery' ? 'Ver Descrição' : 'Ver Fotos'}</span>
                  </button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-50 flex flex-col items-center gap-2">
                   <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin size={12} className="text-red-500" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Londrina • {NEIGHBORHOOD}</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      )}

      {fullScreenImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setFullScreenImage(null)}
        >
          <img src={fullScreenImage} className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300" alt="Zoom" />
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><X size={32} /></button>
        </div>
      )}

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-red-600" />
            <span className="text-sm font-black uppercase tracking-tighter">Desapegos LDR</span>
          </div>
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.4em]">© 2026 Londrina - PR</p>
          <div className="flex gap-4">
            <button onClick={() => {setCurrentView('about'); setIsMenuOpen(false)}} className="text-[10px] font-black uppercase text-slate-500 hover:text-red-600 transition-colors">Sobre</button>
            <button onClick={() => {setCurrentView('how'); setIsMenuOpen(false)}} className="text-[10px] font-black uppercase text-slate-500 hover:text-red-600 transition-colors">Dúvidas</button>
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

  return (
    <div className="h-full flex flex-col relative group cursor-zoom-in" onClick={() => onImageClick(images[active])}>
      <div className="relative flex-1 bg-slate-50 flex items-center justify-center">
        <img 
          key={active}
          src={images[active]} 
          className="max-w-full max-h-full object-contain animate-in fade-in duration-500 p-4" 
          alt="Foto" 
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev - 1 + images.length) % images.length); }}
              className="absolute left-4 bg-white/80 p-3 rounded-full shadow-lg text-slate-900 hover:bg-white transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev + 1) % images.length); }}
              className="absolute right-4 bg-white/80 p-3 rounded-full shadow-lg text-slate-900 hover:bg-white transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
              {images.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-red-600' : 'w-1.5 bg-black/10'}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;