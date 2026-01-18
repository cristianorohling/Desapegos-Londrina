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
  Star,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Search,
  Clock,
  Facebook,
  ExternalLink,
  DollarSign,
  TrendingUp,
  History,
  Book,
  Instagram
} from 'lucide-react';
import { Product, Category } from './types.ts';
import { INITIAL_PRODUCTS, CATEGORIES, WHATSAPP_NUMBER, NEIGHBORHOOD, FB_MARKETPLACE_URL, INSTAGRAM_URL } from './constants.ts';
import Navbar from './components/Navbar.tsx';
import ProductCard from './components/ProductCard.tsx';

type View = 'catalog' | 'about' | 'how' | 'product-landing' | 'sold-report';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Brinquedos": <Gamepad2 size={16} />,
  "Decoração": <HomeIcon size={16} />,
  "Pets": <PawPrint size={16} />,
  "Cozinha": <Utensils size={16} />,
  "Info Eletrônicos": <Monitor size={16} />,
  "Instrumentos Musicais": <Music size={16} />,
  "Livros": <Book size={16} />
};

const CATEGORY_COLORS: Record<string, string> = {
  "Brinquedos": "bg-emerald-700",
  "Decoração": "bg-slate-800",
  "Pets": "bg-emerald-600",
  "Cozinha": "bg-slate-700",
  "Info Eletrônicos": "bg-emerald-800",
  "Instrumentos Musicais": "bg-emerald-900",
  "Livros": "bg-slate-600"
};

const normalizeText = (text: string) => 
  text ? text.toString().toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') : '';

const slugify = (text: string) => normalizeText(text)
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/, '');

const SLUG_TO_CATEGORY = CATEGORIES.reduce((acc, cat) => {
  acc[slugify(cat)] = cat;
  return acc;
}, {} as Record<string, Category>);

const shuffle = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('catalog');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [randomSeed] = useState(() => Math.random());

  const updateMetaTags = (title: string, desc: string, image: string) => {
    document.title = title;
  };

  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const cleanPath = path.replace(/\/$/, '') || '/';
      const parts = cleanPath.split('/').filter(Boolean);
      
      if (cleanPath === '/vendidos') {
        setCurrentView('sold-report');
        window.scrollTo(0, 0);
        return;
      }

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
      
      if (cleanPath === '/sobre') {
        setCurrentView('about');
      } else if (cleanPath === '/duvidas') {
        setCurrentView('how');
      } else if (parts.length === 1 && SLUG_TO_CATEGORY[parts[0]]) {
        const cat = SLUG_TO_CATEGORY[parts[0]];
        setCurrentView('catalog');
        setViewingProduct(null);
        setActiveCategory(cat);
        window.scrollTo(0, 0);
      } else {
        setCurrentView('catalog');
        setViewingProduct(null);
        setActiveCategory('Todos');
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

  const handleCategoryClick = (cat: Category | 'Todos') => {
    setActiveCategory(cat);
    setIsMenuOpen(false);
    const url = cat === 'Todos' ? '/' : `/${slugify(cat)}`;
    window.history.pushState({}, '', url);
    if (currentView !== 'catalog') setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => handleCategoryClick('Todos');

  const highlightedProducts = useMemo(() => INITIAL_PRODUCTS.filter(p => p.isHighlighted && !p.isSold), []);
  const sortedCategories = useMemo(() => [...CATEGORIES].sort((a, b) => a.localeCompare(b, 'pt-BR')), []);

  const filteredProducts = useMemo(() => {
    const baseItems = INITIAL_PRODUCTS.filter(p => {
      const categoryMatch = activeCategory === 'Todos' || p.category === activeCategory;
      const searchNorm = normalizeText(searchQuery);
      const nameNorm = normalizeText(p.name);
      const descNorm = normalizeText(p.description);
      const searchMatch = !searchQuery || nameNorm.includes(searchNorm) || descNorm.includes(searchNorm) || p.keywords?.some(k => normalizeText(k).includes(searchNorm));
      
      // No catálogo, só mostra vendidos se houver busca ou se for relatório
      if (activeCategory === 'Todos' && !searchQuery && p.isSold) return false;
      return categoryMatch && searchMatch;
    });

    if (activeCategory === 'Todos' && !searchQuery) return shuffle(baseItems);
    return baseItems.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }, [activeCategory, searchQuery]);

  const renderSoldReport = () => {
    const soldItems = INITIAL_PRODUCTS.filter(p => p.isSold);
    const totalRevenue = soldItems.reduce((acc, p) => acc + (p.price || 0), 0);

    return (
      <div className="animate-fade-in max-w-7xl mx-auto py-8 px-4 space-y-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 bg-slate-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              <DollarSign size={14} /> Fechamento do Bazar
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">Relatório de <br/><span className="text-emerald-400">Vendas Efetuadas</span></h1>
            <p className="text-slate-400 text-sm font-medium max-w-md">Confira o desempenho total dos seus desapegos. Estes itens já encontraram novos lares!</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] min-w-[280px] relative z-10">
            <div className="flex items-center gap-3 text-emerald-400 mb-2">
              <TrendingUp size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Total Arrecadado</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-emerald-500">R$</span>
              <span className="text-5xl font-black tracking-tighter">{totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-slate-400">
               <div><p className="text-[8px] font-black uppercase">Itens</p><p className="text-lg font-black text-white">{soldItems.length}</p></div>
               <div className="text-right"><p className="text-[8px] font-black uppercase">Ticket Médio</p><p className="text-lg font-black text-white">R$ {(soldItems.length > 0 ? totalRevenue / soldItems.length : 0).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <div className="bg-slate-100 p-2 rounded-lg"><History size={18} className="text-slate-600" /></div>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Itens Vendidos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {soldItems.map(product => <ProductCard key={product.id} product={product} onViewDetails={navigateToProduct} />)}
          </div>
        </div>
      </div>
    );
  };

  const renderProductLanding = (product: Product) => (
    <div className="animate-fade-in max-w-7xl mx-auto pb-32 px-4 md:px-8">
      <div className="pt-2 mb-3">
        <button onClick={navigateToHome} className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-all group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[9px] font-black uppercase tracking-widest">Voltar</span>
        </button>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        <div className="w-full lg:col-span-7 shrink-0">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-emerald-100 relative">
            <div className="aspect-square md:aspect-[4/3] bg-slate-50 flex items-center justify-center relative">
              <ProductDetailGallery images={product.images} onImageClick={setFullScreenImage} />
            </div>
            {product.isSold && <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-20"><span className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-xs tracking-[0.2em] uppercase shadow-2xl">Item Vendido</span></div>}
          </div>
        </div>
        <div className="w-full lg:col-span-5 space-y-6">
          <div className="space-y-3">
             <span className={`text-[9px] font-black text-white uppercase tracking-widest px-3 py-1.5 rounded-lg ${CATEGORY_COLORS[product.category] || 'bg-emerald-600'}`}>{product.category}</span>
             <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tighter">{product.name}</h1>
             <div className="flex items-baseline gap-1.5 pt-2"><span className="text-base font-bold text-emerald-600">R$</span><span className="text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></div>
          </div>
          <div className="bg-white/50 p-6 rounded-[2rem] border border-emerald-100/50">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">{product.description}</p>
          </div>
          {!product.isSold && (
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero o item "${product.name}"!`)}`} target="_blank" className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black uppercase text-[11px] bg-slate-900 text-white hover:bg-emerald-600 transition-all shadow-xl">
              <MessageCircle size={20} /><span>Eu quero este item!</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (currentView === 'sold-report') return renderSoldReport();
    if (currentView === 'product-landing' && viewingProduct) return renderProductLanding(viewingProduct);
    if (currentView === 'about') return (<div className="max-w-4xl mx-auto py-16 px-4"><h2>Sobre o Bazar</h2><p className="text-slate-600 leading-relaxed mt-4">Nossa história e por que estamos desapegando...</p></div>);
    if (currentView === 'how') return (<div className="max-w-4xl mx-auto py-16 px-4"><h2>Como Funciona</h2><p className="text-slate-600 leading-relaxed mt-4">Como comprar, retirar e pagar.</p></div>);

    return (
      <div className="animate-fade-in px-4">
        <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-emerald-100/40 pb-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase">{activeCategory === 'Todos' ? 'Catálogo do Bazar' : activeCategory}</h2>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{filteredProducts.length} itens encontrados</p>
          </div>
          <div className="w-full max-w-xs relative group">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <input type="text" placeholder="Pesquisar..." className="w-full pl-10 pr-4 py-2 bg-white border-2 border-emerald-50 rounded-xl outline-none focus:border-emerald-500 transition-all text-xs font-bold" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} onViewDetails={navigateToProduct} />)}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5] selection:bg-emerald-200">
      {/* Faixa Marquee Original */}
      <div className="bg-slate-900 text-white py-2 overflow-hidden border-b border-emerald-900/20 relative z-[60]">
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
            </div>
          ))}
        </div>
      </div>

      <Navbar currentView={currentView as any} setView={(v) => { if (v === 'catalog') navigateToHome(); else { window.history.pushState({}, '', v === 'about' ? '/sobre' : '/duvidas'); setCurrentView(v as View); } }} isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      {currentView === 'catalog' && (
        <div className={`bg-white border-b border-emerald-100 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              <button onClick={() => handleCategoryClick('Todos')} className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-black text-[9px] uppercase tracking-widest transition-all ${activeCategory === 'Todos' ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-400 border border-slate-200 hover:text-slate-700'}`}><LayoutGrid size={14} /><span>Todos</span></button>
              {sortedCategories.map(cat => (<button key={cat} onClick={() => handleCategoryClick(cat)} className={`flex items-center space-x-2 px-4 py-2.5 rounded-full font-black text-[9px] uppercase tracking-widest transition-all ${activeCategory === cat ? `${CATEGORY_COLORS[cat] || 'bg-emerald-600'} text-white shadow-lg` : 'bg-slate-50 text-slate-400 border border-slate-200 hover:text-slate-700'}`}>{CATEGORY_ICONS[cat] || <MoreHorizontal size={14} />}<span>{cat}</span></button>))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl mx-auto w-full pt-4 pb-12">
        {renderContent()}
      </main>

      {fullScreenImage && <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setFullScreenImage(null)}><img src={fullScreenImage} className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300" alt="Zoom" /></div>}

      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={`fixed bottom-6 right-6 z-[80] bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group animate-pulse-ws ${currentView === 'product-landing' ? 'hidden' : 'flex'}`}><MessageCircle size={24} fill="white" /></a>

      <footer className="bg-white border-t border-emerald-100 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2"><ShoppingBag size={18} className="text-emerald-600" /><span className="text-xs font-black uppercase tracking-tighter">Novidades & Desapegos</span></div>
          <p className="text-[9px] text-slate-300 font-black uppercase tracking-[0.4em]">
            <span onClick={() => { window.history.pushState({}, '', '/vendidos'); setCurrentView('sold-report'); }} className="cursor-pointer hover:text-emerald-500 transition-colors">©</span> 2026 Londrina - PR
          </p>
          <div className="flex gap-4 items-center">
            <a href={FB_MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors" title="Facebook Marketplace"><Facebook size={18} /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors" title="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface GalleryProps { images: string[]; onImageClick: (url: string) => void; }
const ProductDetailGallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
  const [active, setActive] = useState(0);
  if (!images || images.length === 0) return null;
  
  return (
    <div className="w-full h-full flex flex-col relative group cursor-zoom-in" onClick={() => onImageClick(images[active])}>
      <div className="relative flex-1 bg-slate-50 flex items-center justify-center overflow-hidden p-4 md:p-8">
        <div className="w-full h-full flex items-center justify-center"><img key={active} src={images[active]} className="max-w-full max-h-full object-contain animate-in fade-in duration-500 shadow-sm" alt="Foto" /></div>
        {images.length > 1 && (<><button onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev - 1 + images.length) % images.length); }} className="absolute left-4 bg-white/80 p-3 rounded-full shadow-lg text-slate-900 hover:bg-white transition-all active:scale-90"><ChevronLeft size={20} /></button><button onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev + 1) % images.length); }} className="absolute right-4 bg-white/80 p-3 rounded-full shadow-lg text-slate-900 hover:bg-white transition-all active:scale-90"><ChevronRight size={20} /></button><div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">{images.map((_, i) => (<div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-emerald-600' : 'w-1.5 bg-black/10'}`} />))}</div></>)}
      </div>
    </div>
  );
};

export default App;