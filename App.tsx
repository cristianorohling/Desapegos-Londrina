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
  TrendingDown
} from 'lucide-react';
import { Product, Category } from './types';
import { INITIAL_PRODUCTS, CATEGORIES, WHATSAPP_NUMBER, NEIGHBORHOOD, FB_MARKETPLACE_URL } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

type View = 'catalog' | 'about' | 'how' | 'product-landing' | 'sold-report';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Brinquedos": <Gamepad2 size={16} />,
  "Decoração": <HomeIcon size={16} />,
  "Pets": <PawPrint size={16} />,
  "Cozinha": <Utensils size={16} />,
  "Info Eletrônicos": <Monitor size={16} />,
  "Instrumentos Musicais": <Music size={16} />
};

const CATEGORY_COLORS: Record<string, string> = {
  "Brinquedos": "bg-emerald-700",
  "Decoração": "bg-slate-800",
  "Pets": "bg-emerald-600",
  "Cozinha": "bg-slate-700",
  "Info Eletrônicos": "bg-emerald-800",
  "Instrumentos Musicais": "bg-emerald-900"
};

const normalizeText = (text: string) => 
  text.toString().toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

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
    const tags = {
      'og:title': title,
      'og:description': desc,
      'og:image': image,
      'twitter:title': title,
      'twitter:description': desc,
      'twitter:image': image
    };
    Object.entries(tags).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`) || 
                    document.querySelector(`meta[name="${property}"]`);
      if (element) element.setAttribute('content', content);
    });
  };

  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const cleanPath = path.replace(/\/$/, '') || '/';
      const parts = cleanPath.split('/').filter(Boolean);
      
      console.log("Routing to:", cleanPath, parts);

      // Rota Oculta: /vendidos
      if (cleanPath === '/vendidos') {
        setCurrentView('sold-report');
        updateMetaTags("Relatório de Vendas | Info Eletrônicos", "Área Privada", "");
        window.scrollTo(0, 0);
        return;
      }

      if (parts.length >= 2) {
        const productId = parts[parts.length - 1];
        const product = INITIAL_PRODUCTS.find(p => p.id === productId);
        if (product) {
          setViewingProduct(product);
          setCurrentView('product-landing');
          const priceStr = product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
          updateMetaTags(
            `${product.name} - R$ ${priceStr} | Info Eletrônicos`,
            product.description.substring(0, 150) + "...",
            product.images[0]
          );
          window.scrollTo(0, 0);
          return;
        }
      }
      
      if (cleanPath === '/sobre') {
        setCurrentView('about');
        updateMetaTags("Sobre Nós | Info Eletrônicos", "Conheça nossa história.", "");
      } else if (cleanPath === '/duvidas') {
        setCurrentView('how');
        updateMetaTags("Dúvidas | Info Eletrônicos", "Como comprar.", "");
      } else if (parts.length === 1 && SLUG_TO_CATEGORY[parts[0]]) {
        const cat = SLUG_TO_CATEGORY[parts[0]];
        setCurrentView('catalog');
        setViewingProduct(null);
        setActiveCategory(cat);
        updateMetaTags(`Itens de ${cat} | Info Eletrônicos`, `Veja todos os nossos desapegos de ${cat}.`, "");
        window.scrollTo(0, 0);
      } else {
        setCurrentView('catalog');
        setViewingProduct(null);
        setActiveCategory('Todos');
        updateMetaTags("Info Eletrônicos - Bazar", "Confira as melhores oportunidades!", "");
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
    const priceStr = product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    updateMetaTags(`${product.name} - R$ ${priceStr} | Info Eletrônicos`, product.description.substring(0, 150) + "...", product.images[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: Category | 'Todos') => {
    setActiveCategory(cat);
    setIsMenuOpen(false);
    const url = cat === 'Todos' ? '/' : `/${slugify(cat)}`;
    window.history.pushState({}, '', url);
    if (currentView !== 'catalog') setCurrentView('catalog');
    
    if (cat === 'Todos') {
      updateMetaTags("Info Eletrônicos - Bazar", "Explore o catálogo completo.", "");
    } else {
      updateMetaTags(`Itens de ${cat} | Info Eletrônicos`, `Veja todos os nossos desapegos de ${cat}.`, "");
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => handleCategoryClick('Todos');

  const shareProduct = () => {
    if (!viewingProduct) return;
    const priceStr = viewingProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    const shareText = `🔥 *OPORTUNIDADE NO BAZAR!*\n\n*${viewingProduct.name.toUpperCase()}*\n💰 *Preço:* R$ ${priceStr}\n\n📍 _Local: Bairro ${NEIGHBORHOOD}, Londrina_\n\nVeja as fotos e detalhes completos aqui:`;
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({ title: viewingProduct.name, text: shareText, url: shareUrl }).catch(() => {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank');
      });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank');
    }
  };

  const shareCurrentCategory = () => {
    const shareUrl = window.location.href;
    const categoryName = activeCategory === 'Todos' ? "CATÁLOGO COMPLETO" : `ITENS DE ${activeCategory.toUpperCase()}`;
    const shareText = `👋 *${categoryName} - INFO ELETRÔNICOS*\n\nSeparei alguns itens incríveis no nosso bazar! Dá uma olhadinha no link:\n`;

    if (navigator.share) {
      navigator.share({ title: categoryName, text: shareText, url: shareUrl }).catch(() => {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank');
      });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank');
    }
  };

  const highlightedProducts = useMemo(() => INITIAL_PRODUCTS.filter(p => p.isHighlighted && !p.isSold), []);
  const sortedCategories = useMemo(() => [...CATEGORIES].sort((a, b) => a.localeCompare(b, 'pt-BR')), []);

  const filteredProducts = useMemo(() => {
    const baseItems = INITIAL_PRODUCTS.filter(p => {
      const categoryMatch = activeCategory === 'Todos' || p.category === activeCategory;
      const searchNorm = normalizeText(searchQuery);
      const nameNorm = normalizeText(p.name);
      const descNorm = normalizeText(p.description);
      const searchMatch = !searchQuery || nameNorm.includes(searchNorm) || descNorm.includes(searchNorm) || p.keywords?.some(k => normalizeText(k).includes(searchNorm));
      if (activeCategory === 'Todos' && !searchQuery && p.isSold) return false;
      return categoryMatch && searchMatch;
    });

    if (activeCategory === 'Todos' && !searchQuery) {
      const groups: Record<string, Product[]> = {};
      baseItems.forEach(p => { if (!groups[p.category]) groups[p.category] = []; groups[p.category].push(p); });
      Object.keys(groups).forEach(cat => { groups[cat] = shuffle(groups[cat]); });
      const result: Product[] = [];
      const cats = Object.keys(groups);
      let hasMore = true, round = 0;
      while (hasMore) {
        hasMore = false;
        cats.forEach(cat => { if (groups[cat][round]) { result.push(groups[cat][round]); hasMore = true; } });
        round++;
      }
      return result;
    }
    return !searchQuery ? shuffle(baseItems) : baseItems.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }, [activeCategory, searchQuery, randomSeed]);

  const renderProductLanding = (product: Product) => (
    <div className="animate-fade-in max-w-7xl mx-auto pb-32 px-4 md:px-8">
      <div className="pt-1 md:pt-2 mb-2 md:mb-3">
        <button onClick={navigateToHome} className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-all group">
          <div className="bg-white p-1.5 rounded-lg shadow-sm border border-emerald-100 group-hover:bg-emerald-50"><ArrowLeft size={14} /></div>
          <span className="text-[9px] font-black uppercase tracking-widest">Voltar ao Catálogo</span>
        </button>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        <div className="w-full lg:col-span-7 shrink-0">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-emerald-100 relative">
            <div className="aspect-square md:aspect-[4/3] lg:max-h-[65vh] bg-slate-50 flex items-center justify-center relative">
              <ProductDetailGallery images={product.images} onImageClick={setFullScreenImage} />
            </div>
            {product.isSold && <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-20"><span className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-xs tracking-[0.2em] uppercase shadow-2xl">Item Vendido</span></div>}
          </div>
        </div>
        <div className="w-full lg:col-span-5 space-y-6">
          <div className="space-y-3">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`text-[9px] font-black text-white uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm ${CATEGORY_COLORS[product.category] || 'bg-emerald-600'}`}>{product.category}</span>
                  {product.isHighlighted && <span className="bg-amber-100 text-amber-700 px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-1"><Star size={10} fill="currentColor" /> Destaque</span>}
                </div>
                <button onClick={shareProduct} title="Compartilhar no WhatsApp" className="p-2.5 bg-white rounded-xl text-slate-400 hover:text-emerald-600 border border-emerald-50 transition-all shadow-sm active:scale-90"><Share2 size={18} /></button>
             </div>
             <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tighter">{product.name}</h1>
             <div className="flex items-baseline gap-1.5 pt-2"><span className="text-base font-bold text-emerald-600">R$</span><span className="text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></div>
          </div>
          <div className="bg-white/50 p-6 rounded-[2rem] border border-emerald-100/50 space-y-4">
            <div className="flex items-center gap-2 text-[9px] font-black text-emerald-800 uppercase tracking-[0.2em]"><FileText size={16} /> Sobre o Item</div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">{product.description}</p>
            {product.keywords && product.keywords.length > 0 && <div className="pt-4 mt-4 border-t border-emerald-100/30"><div className="flex flex-wrap gap-2">{product.keywords.map(kw => (<span key={kw} className="text-[8px] font-bold text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded">#{kw}</span>))}</div></div>}
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-white p-4 rounded-2xl border border-emerald-50 flex items-center gap-3 shadow-sm"><MapPin size={18} className="text-emerald-500" /><div><p className="text-[7px] font-black text-slate-400 uppercase">Localização</p><p className="text-[10px] font-bold text-slate-700">{NEIGHBORHOOD}</p></div></div>
            <div className="flex-1 bg-white p-4 rounded-2xl border border-emerald-50 flex items-center gap-3 shadow-sm"><CheckCircle2 size={18} className="text-emerald-500" /><div><p className="text-[7px] font-black text-slate-400 uppercase">Estado</p><p className="text-[10px] font-bold text-slate-700">Garantido</p></div></div>
          </div>
          <div className="hidden lg:block pt-2"><a href={product.isSold ? '#' : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Vi o item "${product.name}" (R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}) no catálogo e gostaria de combinar a retirada.`)}`} target={product.isSold ? '_self' : '_blank'} className={`w-full flex items-center justify-center space-x-3 py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.1em] transition-all shadow-xl ${product.isSold ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-emerald-600'}`}><MessageCircle size={20} /><span>Chama no Zap!</span></a></div>
        </div>
      </div>
    </div>
  );

  const renderSoldReport = () => {
    const soldItems = INITIAL_PRODUCTS.filter(p => p.isSold);
    const totalRevenue = soldItems.reduce((acc, p) => acc + p.price, 0);

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
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
              <div>
                <p className="text-[8px] font-black text-slate-500 uppercase">Itens Vendidos</p>
                <p className="text-lg font-black">{soldItems.length}</p>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-black text-slate-500 uppercase">Ticket Médio</p>
                <p className="text-lg font-black">R$ {(soldItems.length > 0 ? totalRevenue / soldItems.length : 0).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg"><History size={18} className="text-slate-600" /></div>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Histórico de Itens Vendidos</h2>
            </div>
          </div>
          
          {soldItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {soldItems.map(product => (
                <ProductCard key={product.id} product={product} onViewDetails={navigateToProduct} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-emerald-200">
              <PackageOpen size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-black text-slate-900">Nenhuma venda ainda</h3>
              <p className="text-slate-500 text-sm">Continue divulgando o bazar para ver este painel brilhar!</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (currentView === 'sold-report') return renderSoldReport();
    if (currentView === 'product-landing' && viewingProduct) return renderProductLanding(viewingProduct);
    if (currentView === 'about') return (<div className="max-w-5xl mx-auto py-8 md:py-16 px-4 animate-fade-in space-y-16"><div className="flex flex-col md:flex-row gap-8 items-center"><div className="md:w-1/2 space-y-6"><div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest"><Info size={14} /> Nossa História</div><h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">Um novo ciclo, <br/><span className="text-emerald-600">novas histórias.</span></h2><div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base md:text-lg"><p>Somos uma família que decidiu iniciar um novo ciclo. Ao longo dos anos, acumulamos não apenas objetos, mas histórias e memórias.</p><p>Chegou o momento de simplificar e seguir um novo caminho. Por isso, estamos desapegando de diversos objetos que ainda têm muito valor e qualidade.</p><p className="text-slate-900 font-bold">Desejamos que essas peças tragam tanta alegria para você quanto trouxeram para nós.</p></div></div><div className="md:w-1/2 relative"><div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-2 border-white"><img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Home Atmosphere" /></div></div></div><div className="bg-white rounded-[3rem] p-8 md:p-12 border border-emerald-100 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-16 relative overflow-hidden"><div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" /><div className="shrink-0 flex flex-col items-center"><div className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl relative z-10"><Facebook size={48} /></div><div className="flex gap-1 mt-4">{[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f59e0b" className="text-amber-500" />)}</div><span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2">Reputação Máxima</span></div><div className="flex-1 space-y-4 text-center md:text-left relative z-10"><h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Vendedor Recomendado</h3><p className="text-slate-500 font-medium leading-relaxed">Temos orgulho da nossa reputação de <strong>5 estrelas no Facebook Marketplace</strong>. Nossa transparência e cuidado com cada item garantem uma experiência de compra segura e satisfatória.</p><a href={FB_MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100">Ver Perfil no Marketplace <ExternalLink size={14} /></a></div></div></div>);
    if (currentView === 'how') return (<div className="max-w-4xl mx-auto py-8 md:py-16 px-4 animate-fade-in"><div className="text-center mb-12"><div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4"><HelpCircle size={14} /> Transparência Total</div><h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Como Funciona</h2></div><div className="grid gap-6 md:grid-cols-2">{[{ icon: <ShoppingBag size={20} className="text-emerald-600" />, title: "O Catálogo", desc: "Os produtos são do nosso acervo pessoal. Clique no item para ver detalhes e fotos reais." }, { icon: <MessageCircle size={20} className="text-emerald-600" />, title: "WhatsApp", desc: "A negociação é direta pelo WhatsApp. Simples, rápido e transparente." }, { icon: <MapPin size={20} className="text-emerald-600" />, title: "Retirada", desc: `A retirada é presencial no bairro ${NEIGHBORHOOD}, em Londrina-PR.` }, { icon: <Clock size={20} className="text-emerald-600" />, title: "Agendamento", desc: "Combinamos um horário que seja bom para ambos. Tudo organizado." }].map((step, i) => (<div key={i} className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm"><div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">{step.icon}</div><h3 className="text-lg font-black text-slate-900 mb-2">{step.title}</h3><p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p></div>))}</div></div>);

    return (
      <div className="animate-fade-in px-4">
        <div className="max-w-7xl mx-auto mb-2 md:mb-4 flex flex-col md:flex-row items-center justify-between gap-3 border-b border-emerald-100/40 pb-2 md:pb-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left shrink-0">
            <div className="flex items-center gap-3">
              <h2 className="text-lg md:text-2xl font-black text-slate-900 tracking-tighter leading-none whitespace-nowrap">
                {searchQuery ? 'Resultados' : (activeCategory === 'Todos' ? 'Explore os itens do Bazar!' : activeCategory)}
              </h2>
              <button 
                onClick={shareCurrentCategory}
                title={`Compartilhar link de ${activeCategory}`}
                className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all shadow-sm group active:scale-95"
              >
                <Share2 size={10} className="group-hover:scale-110" /> Compartilhar Link
              </button>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-0.5 w-4 bg-emerald-600 rounded-full"></div>
              <p className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest">{filteredProducts.length} itens disponíveis</p>
            </div>
          </div>

          <div className="w-full max-w-xs relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors"><Search size={14} /></div>
            <input type="text" placeholder="Pesquisar..." className="w-full pl-10 pr-10 py-2 bg-white border-2 border-emerald-50 rounded-xl shadow-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all font-bold text-slate-700 placeholder:text-slate-300 placeholder:font-medium text-xs" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-4 flex items-center text-slate-300 hover:text-slate-600 transition-colors"><X size={14} /></button>}
          </div>
        </div>

        {filteredProducts.length > 0 || (activeCategory === 'Todos' && !searchQuery) ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {activeCategory === 'Todos' && !searchQuery && (
              <div className="bg-white rounded-3xl overflow-hidden border border-emerald-200 shadow-sm p-6 md:p-8 flex flex-col justify-center text-center space-y-4 md:space-y-6 relative group">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-emerald-50 rounded-full blur-2xl opacity-60" />
                <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest self-center relative z-10"><Sparkles size={12} className="text-emerald-400" /> Curadoria Londrina</div>
                <div className="relative z-10"><h3 className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter leading-tight">Da nossa casa <br/><span className="text-emerald-600 italic">para a sua casa</span></h3><div className="flex items-center justify-center gap-1 my-2">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" className="text-amber-500" />)}<span className="text-[10px] font-black text-slate-400 ml-2 uppercase">5.0 Marketplace</span></div><p className="text-slate-500 font-medium text-[11px] md:text-[13px] leading-relaxed mt-2">Vendedor verificado com reputação máxima. Sua satisfação é nossa prioridade.</p></div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-emerald-50 border-2 border-emerald-100 px-5 py-3 rounded-xl hover:bg-emerald-100 transition-colors group relative z-10 mt-1 animate-pulse-ws"><MessageCircle size={18} fill="#065f46" className="text-emerald-800" /><span className="text-emerald-800 font-black text-[9px] uppercase tracking-widest">Dúvidas? Chama aqui!</span></a>
              </div>
            )}
            {filteredProducts.map(product => (<ProductCard key={product.id} product={product} onViewDetails={navigateToProduct} />))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-[2rem] md:rounded-[3rem] border border-emerald-100 border-dashed"><PackageOpen size={40} className="mx-auto text-slate-200 mb-3" /><h3 className="text-lg font-black text-slate-900 mb-1">Ops! Nada por aqui.</h3><p className="text-slate-500 text-xs md:text-sm mb-6 px-10">Não encontramos nada que combine com sua pesquisa no momento.</p><button onClick={() => {setSearchQuery(''); handleCategoryClick('Todos')}} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-emerald-600 transition-colors">Limpar Filtros</button></div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5] selection:bg-emerald-200">
      <div className="bg-slate-900 text-white py-2 overflow-hidden border-b border-emerald-900/20 relative z-[60]">
        <div className="animate-marquee whitespace-nowrap flex items-center">{[...Array(2)].map((_, idx) => (<div key={idx} className="flex items-center">{highlightedProducts.map((p) => (<div key={`${idx}-${p.id}`} className="flex items-center mx-10 group cursor-pointer" onClick={() => navigateToProduct(p)}><span className="flex items-center gap-1.5 bg-emerald-600 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mr-3 shadow-lg"><Star size={10} fill="white" /> DESTAQUE</span><span className="text-[10px] font-black uppercase tracking-wider group-hover:text-emerald-400 transition-colors">{p.name}</span><span className="mx-4 text-white/20 font-light">|</span><span className="text-[10px] font-black text-emerald-500">R$ {p.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></div>))}<div className="flex items-center mx-10"><span className="flex items-center gap-1.5 bg-emerald-800 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mr-3"><Flame size={10} fill="white" /> NOVIDADE</span><span className="text-[10px] font-black uppercase tracking-wider text-white/70">RETIRADA EM LONDRINA • {NEIGHBORHOOD.toUpperCase()}</span></div></div>))}</div>
      </div>

      <Navbar currentView={currentView as any} setView={(v) => { if (v === 'catalog') navigateToHome(); else { window.history.pushState({}, '', v === 'about' ? '/sobre' : '/duvidas'); setCurrentView(v as View); } }} isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      {currentView === 'catalog' && (
        <div className={`bg-white border-b border-emerald-100 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              <button onClick={() => handleCategoryClick('Todos')} className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-black text-[9px] uppercase tracking-widest transition-all ${activeCategory === 'Todos' ? 'bg-slate-900 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-400 border border-slate-200 hover:text-slate-700'}`}><LayoutGrid size={14} /><span>Todos</span></button>
              {sortedCategories.map(cat => (<button key={cat} onClick={() => handleCategoryClick(cat)} className={`flex items-center space-x-2 px-4 py-2.5 rounded-full font-black text-[9px] uppercase tracking-widest transition-all ${activeCategory === cat ? `${CATEGORY_COLORS[cat] || 'bg-emerald-600'} text-white shadow-lg scale-105` : 'bg-slate-50 text-slate-400 border border-slate-200 hover:text-slate-700'}`}>{CATEGORY_ICONS[cat] || <MoreHorizontal size={14} />}<span>{cat}</span></button>))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl mx-auto w-full pt-1 md:pt-3 lg:pt-4 pb-4 md:pb-6">{renderContent()}</main>

      {fullScreenImage && (<div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setFullScreenImage(null)}><img src={fullScreenImage} className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300" alt="Zoom" /><button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><X size={32} /></button></div>)}

      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={`fixed bottom-6 right-6 z-[80] bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group animate-pulse-ws ${currentView === 'product-landing' ? 'hidden' : 'flex'}`}><MessageCircle size={24} fill="white" /></a>

      <footer className="bg-white border-t border-emerald-100 py-10 mb-20 lg:mb-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-2"><ShoppingBag size={18} className="text-emerald-600" /><span className="text-xs font-black uppercase tracking-tighter">Info Eletrônicos</span></div><p className="text-[8px] text-slate-400 font-black uppercase tracking-[0.4em]">© 2026 Londrina - PR</p><div className="flex gap-4 items-center"><a href={FB_MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook size={18} /></a><button onClick={() => {setCurrentView('about'); setIsMenuOpen(false)}} className="text-[9px] font-black uppercase text-slate-500 hover:text-emerald-600 transition-colors">Sobre</button><button onClick={() => {setCurrentView('how'); setIsMenuOpen(false)}} className="text-[9px] font-black uppercase text-slate-500 hover:text-emerald-600 transition-colors">Dúvidas</button></div></div>
      </footer>
    </div>
  );
};

interface GalleryProps { images: string[]; onImageClick: (url: string) => void; }
const ProductDetailGallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full h-full flex flex-col relative group cursor-zoom-in" onClick={() => onImageClick(images[active])}>
      <div className="relative flex-1 bg-slate-50 flex items-center justify-center overflow-hidden p-4 md:p-8">
        <div className="w-full h-full flex items-center justify-center"><img key={active} src={images[active]} className="max-w-full max-h-full object-contain animate-in fade-in duration-500 shadow-sm" alt="Foto do produto" /></div>
        {images.length > 1 && (<><button onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev - 1 + images.length) % images.length); }} className="absolute left-2 md:left-4 bg-white/80 p-2 md:p-3 rounded-full shadow-lg text-slate-900 hover:bg-white transition-all active:scale-90"><ChevronLeft size={20} /></button><button onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev + 1) % images.length); }} className="absolute right-2 md:right-4 bg-white/80 p-2 md:p-3 rounded-full shadow-lg text-slate-900 hover:bg-white transition-all active:scale-90"><ChevronRight size={20} /></button><div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">{images.map((_, i) => (<div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-emerald-600' : 'w-1.5 bg-black/10'}`} />))}</div></>)}
      </div>
    </div>
  );
};

export default App;