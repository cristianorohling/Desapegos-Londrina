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
  Home as HomeIcon,
  PawPrint,
  Utensils,
  Monitor,
  MoreHorizontal,
  Flame,
  Music,
  ShoppingBag,
  Info,
  HelpCircle,
  MapPin,
  FileText,
  Undo2,
  Star,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Product, Category } from './types';
import { INITIAL_PRODUCTS, CATEGORIES, WHATSAPP_NUMBER, NEIGHBORHOOD } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

type View = 'catalog' | 'about' | 'how' | 'product-landing';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Brinquedos": <Gamepad2 size={16} />,
  "Decoração": <HomeIcon size={16} />,
  "Pets": <PawPrint size={16} />,
  "Cozinha": <Utensils size={16} />,
  "Informática": <Monitor size={16} />,
  "Instrumentos Musicais": <Music size={16} />
};

const CATEGORY_COLORS: Record<string, string> = {
  "Brinquedos": "bg-emerald-700",
  "Decoração": "bg-slate-800",
  "Pets": "bg-emerald-600",
  "Cozinha": "bg-slate-700",
  "Informática": "bg-emerald-800",
  "Instrumentos Musicais": "bg-emerald-900"
};

const slugify = (text: string) => text.toString().toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('catalog');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const parts = path.split('/').filter(Boolean);
      
      if (parts.length >= 2) {
        const productId = parts[parts.length - 1];
        const product = INITIAL_PRODUCTS.find(p => p.id === productId);
        if (product) {
          setViewingProduct(product);
          setCurrentView('product-landing');
          window.scrollTo(0, 0);
          return;
        }
      }
      
      if (path === '/sobre') setCurrentView('about');
      else if (path === '/duvidas') setCurrentView('how');
      else {
        setCurrentView('catalog');
        setViewingProduct(null);
      }
    };

    window.addEventListener('popstate', handleRouting);
    handleRouting();
    return () => window.removeEventListener('popstate', handleRouting);
  }, []);

  const navigateToProduct = (product: Product) => {
    const categorySlug = slugify(product.category);
    const url = `/${categorySlug}/${product.id}`;
    window.history.pushState({}, '', url);
    setViewingProduct(product);
    setCurrentView('product-landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentView('catalog');
    setViewingProduct(null);
    setActiveCategory('Todos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const highlightedProducts = useMemo(() => 
    INITIAL_PRODUCTS.filter(p => p.isHighlighted && !p.isSold), 
  []);

  const sortedCategories = useMemo(() => [...CATEGORIES].sort((a, b) => a.localeCompare(b, 'pt-BR')), []);

  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS
      .filter(p => {
        const categoryMatch = activeCategory === 'Todos' || p.category === activeCategory;
        if (activeCategory === 'Todos' && p.isSold) return false;
        return categoryMatch;
      })
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }, [activeCategory]);

  const handleCategoryClick = (cat: Category | 'Todos') => {
    setActiveCategory(cat);
    setIsMenuOpen(false);
    if (currentView !== 'catalog') navigateToHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareProduct = () => {
    if (navigator.share && viewingProduct) {
      navigator.share({
        title: viewingProduct.name,
        text: `Olha esse desapego que encontrei no bazar: ${viewingProduct.name}`,
        url: window.location.href,
      });
    }
  };

  const renderProductLanding = (product: Product) => (
    <div className="animate-fade-in max-w-5xl mx-auto pb-20">
      {/* Header Mobile Otimizado */}
      <div className="px-4 pt-4 md:pt-12 mb-6">
        <button 
          onClick={navigateToHome}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-6 group"
        >
          <div className="bg-white p-2 rounded-xl shadow-sm group-hover:bg-emerald-50 transition-colors border border-emerald-100">
            <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Catálogo Completo</span>
        </button>

        {/* Título Antes (Foco Mobile) */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center justify-between">
            <span className={`text-[8px] font-black text-white uppercase tracking-widest px-3 py-1 rounded-lg ${CATEGORY_COLORS[product.category] || 'bg-emerald-600'}`}>
              {product.category}
            </span>
            <button 
              onClick={shareProduct}
              className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"
            >
              <Share2 size={18} />
            </button>
          </div>
          <h1 className="text-2xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
            {product.name}
          </h1>
        </div>

        {/* Preço em Destaque */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-lg font-bold text-emerald-600">R$</span>
          <span className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">
            {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      {/* Galeria em Evidência */}
      <div className="px-0 md:px-4 mb-8">
        <div className="bg-white md:rounded-[3rem] overflow-hidden shadow-2xl border-y md:border border-emerald-100 relative group">
          <div className="aspect-square md:aspect-video bg-slate-50">
            <ProductDetailGallery 
              images={product.images} 
              onImageClick={setFullScreenImage}
            />
          </div>
          {product.isSold && (
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-20">
              <span className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black text-sm tracking-[0.2em] uppercase shadow-2xl animate-in zoom-in-95">
                Item Vendido
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Ações e Descrição */}
      <div className="px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm">
            <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-6 flex items-center gap-2">
              <FileText size={18} /> Sobre este item
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[140px] bg-white p-4 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase">Localização</p>
                <p className="text-[10px] font-bold text-slate-700">{NEIGHBORHOOD}</p>
              </div>
            </div>
            <div className="flex-1 min-w-[140px] bg-white p-4 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase">Verificado</p>
                <p className="text-[10px] font-bold text-slate-700">Foto Real</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar de Ação (Sticky on Desktop) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <h4 className="text-xl font-black mb-6 tracking-tight relative z-10">Gostou desse desapego?</h4>
              
              <a 
                href={product.isSold ? '#' : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no item "${product.name}" que vi no catálogo.`)}`} 
                target={product.isSold ? '_self' : '_blank'} 
                className={`w-full flex items-center justify-center space-x-3 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all relative z-10 ${product.isSold ? 'bg-white/10 text-white/30 cursor-not-allowed' : 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg active:scale-95'}`}
              >
                <MessageCircle size={20} />
                <span>Chamar no WhatsApp</span>
              </a>
              
              <p className="mt-6 text-[10px] text-white/40 font-bold uppercase tracking-widest text-center relative z-10">
                Negociação direta e sem taxas
              </p>
            </div>

            <button 
              onClick={navigateToHome}
              className="w-full py-5 border-2 border-slate-200 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-all flex items-center justify-center gap-2 group"
            >
              <LayoutGrid size={14} className="group-hover:rotate-90 transition-transform" />
              Ver Outros Produtos
            </button>
          </div>
        </div>
      </div>

      {/* Itens Sugeridos */}
      <section className="mt-24 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">Mais da nossa casa</h2>
            <div className="h-1 w-12 bg-emerald-500 rounded-full mt-1"></div>
          </div>
          <button 
            onClick={navigateToHome}
            className="text-[10px] font-black uppercase text-emerald-600 flex items-center gap-1 group"
          >
            Ver tudo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIAL_PRODUCTS
            .filter(p => p.id !== product.id && !p.isSold)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map(p => (
              <ProductCard key={p.id} product={p} onViewDetails={navigateToProduct} />
            ))
          }
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    if (currentView === 'product-landing' && viewingProduct) {
      return renderProductLanding(viewingProduct);
    }

    if (currentView === 'about') {
      return (
        <div className="max-w-4xl mx-auto py-8 md:py-16 px-4 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <Info size={14} /> Nossa História
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Um novo ciclo, <br/><span className="text-emerald-600">novas histórias.</span>
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
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <HelpCircle size={14} /> Transparência Total
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Como Funciona</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: <ShoppingBag size={20} className="text-emerald-600" />, title: "O Catálogo", desc: "Os produtos são do nosso acervo pessoal. Clique no item para ver detalhes e fotos reais." },
              { icon: <MessageCircle size={20} className="text-emerald-600" />, title: "WhatsApp", desc: "A negociação é direta pelo WhatsApp. Simples, rápido e transparente." },
              { icon: <MapPin size={20} className="text-emerald-600" />, title: "Retirada", desc: `A retirada é presencial no bairro ${NEIGHBORHOOD}, em Londrina-PR.` },
              { icon: <Clock size={20} className="text-emerald-600" />, title: "Agendamento", desc: "Combinamos um horário que seja bom para ambos. Tudo organizado." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">{step.icon}</div>
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
        {activeCategory === 'Todos' && (
          <section className="mb-12 relative overflow-hidden bg-white rounded-[2rem] md:rounded-[3rem] border border-emerald-200 shadow-lg p-8 md:p-12">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30" />
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                <Sparkles size={14} className="text-emerald-400" /> Curadoria Londrina
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                Da nossa casa <br/>
                <span className="text-emerald-600 italic">para a sua casa</span>
              </h3>
              <p className="text-slate-600 font-medium text-sm md:text-lg leading-relaxed px-4">
                Seja muito bem-vindo(a) ao catálogo do nosso bazar!               
              </p>
              
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-50 border-2 border-emerald-100 px-6 py-4 rounded-2xl animate-pulse-ws hover:bg-emerald-100 transition-colors group cursor-pointer"
              >
                <div className="bg-emerald-600 p-2 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} fill="white" />
                </div>
                <span className="text-emerald-800 font-black text-xs md:text-sm uppercase tracking-widest text-left">
                  Duvidas? Chama no WhatsApp!
                </span>
              </a>
            </div>
          </section>
        )}

        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter mb-2 text-center px-4">
            {activeCategory === 'Todos' ? 'Itens Disponíveis' : activeCategory}
          </h2>
          <div className="h-1 w-16 bg-emerald-600 rounded-full mb-3"></div>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{filteredProducts.length} itens encontrados</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={navigateToProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <PackageOpen size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-black text-slate-900 mb-4">Nada encontrado nesta categoria.</h3>
            <button onClick={navigateToHome} className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest">
              Ver tudo
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5] selection:bg-emerald-200">
      {/* Ticker de Destaques */}
      <div className="bg-slate-900 text-white py-2.5 overflow-hidden border-b border-emerald-900/20 relative z-[60]">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center">
              {highlightedProducts.map((p) => (
                <div key={`${idx}-${p.id}`} className="flex items-center mx-10 group cursor-pointer" onClick={() => navigateToProduct(p)}>
                  <span className="flex items-center gap-1.5 bg-emerald-600 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mr-3 shadow-lg">
                    <Star size={10} fill="white" /> DESTAQUE
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider group-hover:text-emerald-400 transition-colors">{p.name}</span>
                  <span className="mx-4 text-white/20 font-light">|</span>
                  <span className="text-[10px] font-black text-emerald-500">R$ {p.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              ))}
              <div className="flex items-center mx-10">
                <span className="flex items-center gap-1.5 bg-emerald-800 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mr-3">
                  <Flame size={10} fill="white" /> NOVIDADE
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-white/70">RETIRADA EM LONDRINA • {NEIGHBORHOOD.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar 
        currentView={currentView as any} 
        setView={(v) => {
          if (v === 'catalog') navigateToHome();
          else {
            window.history.pushState({}, '', v === 'about' ? '/sobre' : '/duvidas');
            setCurrentView(v as View);
          }
        }} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
      />

      {currentView === 'catalog' && (
        <div className={`bg-white border-b border-emerald-100 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'}`}>
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
                      ? `${CATEGORY_COLORS[cat] || 'bg-emerald-600'} text-white shadow-lg scale-105` 
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

      <main className="flex-1 max-w-7xl mx-auto w-full py-4 md:py-8">
        {renderContent()}
      </main>

      {fullScreenImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setFullScreenImage(null)}
        >
          <img src={fullScreenImage} className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300" alt="Zoom" />
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><X size={32} /></button>
        </div>
      )}

      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[80] bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group animate-pulse-ws"
      >
        <MessageCircle size={28} fill="white" />
      </a>

      <footer className="bg-white border-t border-emerald-100 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-emerald-600" />
            <span className="text-sm font-black uppercase tracking-tighter">Desapegos Londrina</span>
          </div>
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.4em]">© 2026 Londrina - PR</p>
          <div className="flex gap-4">
            <button onClick={() => {setCurrentView('about'); setIsMenuOpen(false)}} className="text-[10px] font-black uppercase text-slate-500 hover:text-emerald-600 transition-colors">Sobre</button>
            <button onClick={() => {setCurrentView('how'); setIsMenuOpen(false)}} className="text-[10px] font-black uppercase text-slate-500 hover:text-emerald-600 transition-colors">Dúvidas</button>
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
          alt="Foto do produto" 
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
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-emerald-600' : 'w-1.5 bg-black/10'}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;