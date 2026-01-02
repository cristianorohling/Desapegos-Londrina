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
  MousePointer2
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

  const sortedCategories = useMemo(() => [...CATEGORIES].sort((a, b) => a.localeCompare(b, 'pt-BR')), []);

  useEffect(() => {
    if (viewingProduct || fullScreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    if (!viewingProduct) setDetailTab('gallery');
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentView === 'about') {
      return (
        <div className="max-w-4xl mx-auto py-12 md:py-20 px-4 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <Info size={14} /> Nossa História
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Um novo ciclo, <br/><span className="text-red-600">novas histórias.</span>
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-lg">
                <p>Somos uma família que decidiu iniciar um novo ciclo. Ao longo dos anos, acumulamos não apenas objetos, mas histórias, memórias e peças que fizeram parte da nossa trajetória — e também de gerações anteriores.</p>
                <p>Vivemos hoje em uma casa grande, repleta de itens bem cuidados, muitos deles guardados com carinho por muito tempo. No entanto, chegou o momento de simplificar, abrir espaço e seguir um novo caminho, em um lar menor e mais funcional.</p>
                <p>Por isso, estamos desapegando de diversos objetos que ainda têm muito valor, qualidade e história para continuar fazendo parte da vida de outras pessoas.</p>
                <p className="text-slate-900 font-bold">Mais do que vender, queremos dar novos destinos a coisas que fizeram parte da nossa vida — e que agora podem fazer parte da sua.</p>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Home Atmosphere" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hidden md:block">
                <Heart size={40} className="text-red-500 fill-red-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentView === 'how') {
      return (
        <div className="max-w-4xl mx-auto py-12 md:py-20 px-4 animate-fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <HelpCircle size={14} /> Transparência Total
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Como Funciona</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: <ShoppingBag className="text-red-600" />,
                title: "O Catálogo",
                desc: "Os produtos anunciados aqui fazem parte do nosso acervo pessoal. Ao clicar em um item, você poderá visualizar as informações, fotos e valores."
              },
              {
                icon: <MessageCircle className="text-red-600" />,
                title: "Negociação",
                desc: "Toda a negociação acontece pelo WhatsApp, onde tiramos dúvidas e combinamos detalhes de forma simples e transparente."
              },
              {
                icon: <MapPin className="text-red-600" />,
                title: "Retirada",
                desc: `A retirada dos itens é feita presencialmente em nossa residência, no bairro ${NEIGHBORHOOD}, Londrina.`
              },
              {
                icon: <Clock className="text-red-600" />,
                title: "Agendamento",
                desc: "Combinamos um dia e horário que seja bom para ambos. Tudo feito com respeito e organização."
              }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="mb-10 text-center flex flex-col items-center gap-2">
          <div className="flex items-center space-x-2 text-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            <Flame size={14} className="animate-bounce" />
            <span>Garimpo Londrina</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-4">
            {activeCategory === 'Todos' ? 'Nossas Peças' : activeCategory}
          </h2>
          <div className="h-1.5 w-24 bg-red-600 rounded-full"></div>
          <p className="mt-4 text-slate-400 text-[11px] font-black uppercase tracking-widest bg-white px-6 py-2 rounded-full border border-slate-100 shadow-sm">
            {filteredProducts.length} itens encontrados
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setViewingProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[3rem] border border-slate-200 border-dashed border-2">
            <PackageOpen size={60} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-2xl font-black text-slate-900 mb-2">Puxa, nada por aqui ainda!</h3>
            <button onClick={resetView} className="bg-red-600 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-100 hover:scale-105 transition-transform mt-4">
              Ver tudo disponível
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-red-100 selection:text-red-900">
      <Navbar currentView={currentView} setView={setCurrentView} />

      {currentView === 'catalog' && (
        <div className="bg-white border-b border-slate-200/50 py-10 md:py-12 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setActiveCategory('Todos')}
                className={`flex items-center space-x-3 px-8 py-4 rounded-[2rem] font-black text-[11px] uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === 'Todos' 
                    ? 'bg-slate-900 text-white shadow-2xl scale-110 -translate-y-1' 
                    : 'bg-white text-slate-400 border border-slate-200 hover:border-slate-800 hover:text-slate-800 shadow-sm'
                }`}
              >
                {activeCategory === 'Todos' ? <Sparkles size={18} className="text-yellow-400 fill-yellow-400" /> : <LayoutGrid size={18} />}
                <span>Ver Tudo</span>
              </button>

              {sortedCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-[2rem] font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-sm ${
                    activeCategory === cat 
                      ? `${CATEGORY_COLORS[cat] || 'bg-red-600'} text-white shadow-xl scale-110 -translate-y-1` 
                      : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-800 hover:text-slate-800'
                  }`}
                >
                  <span className={activeCategory === cat ? 'text-white' : 'text-slate-300'}>
                    {CATEGORY_ICONS[cat] || <MoreHorizontal size={18} />}
                  </span>
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 md:py-16">
        {renderContent()}
      </main>

      {viewingProduct && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-300 p-0 md:p-6">
          <div className="bg-white w-full max-w-5xl md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[95vh] md:h-auto md:max-h-[85vh] animate-in slide-in-from-bottom-20 duration-500">
            
            <div className="md:w-[55%] bg-slate-100 relative h-[45vh] md:h-auto overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-slate-100">
              {detailTab === 'gallery' ? (
                <ProductDetailGallery 
                  images={viewingProduct.images} 
                  onImageClick={(url) => setFullScreenImage(url)}
                />
              ) : (
                <div className="absolute inset-0 bg-white md:bg-slate-50 overflow-y-auto custom-scrollbar p-8 md:p-14 animate-in fade-in slide-in-from-left-10 duration-500">
                   <div className="max-w-prose mx-auto">
                    <button 
                      onClick={() => setDetailTab('gallery')}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest mb-10 shadow-lg hover:bg-red-600 transition-all active:scale-95"
                    >
                      <Undo2 size={16} /> Voltar para Fotos
                    </button>
                    
                    <div className="flex items-center justify-between mb-8 border-b-4 border-red-600/10 pb-6">
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Detalhes do Garimpo</h3>
                      <div className="hidden md:flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        <MousePointer2 size={12} />
                        Barra lateral para rolar
                      </div>
                    </div>

                    <div className="text-slate-700 whitespace-pre-wrap leading-relaxed font-medium text-lg pb-24 pr-4">
                      {viewingProduct.description}
                    </div>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => setViewingProduct(null)} 
                className="absolute top-6 right-6 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full text-white z-[60] transition-all"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="md:w-[45%] flex flex-col bg-white overflow-hidden h-full md:h-auto">
              <div className="p-8 md:p-14 flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-[10px] font-black text-white uppercase tracking-widest px-4 py-2 rounded-full ${CATEGORY_COLORS[viewingProduct.category] || 'bg-red-600'} shadow-sm`}>
                    {viewingProduct.category}
                  </span>
                  <button onClick={() => setViewingProduct(null)} className="hidden md:block text-slate-300 hover:text-red-600 transition-colors">
                    <X size={28} />
                  </button>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-none mb-4 tracking-tighter">
                  {viewingProduct.name}
                </h2>
                
                <div className="flex items-baseline gap-2 mb-10 text-slate-900">
                  <span className="text-xl font-bold text-red-600">R$</span>
                  <span className="text-5xl md:text-7xl font-black tracking-tighter">{viewingProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                
                <div className="space-y-4 mt-auto">
                  <a 
                    href={viewingProduct.isSold ? '#' : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de mais informações sobre o item "${viewingProduct.name}" que vi no catálogo Desapegos Londrina. Ainda está disponível?`)}`} 
                    target={viewingProduct.isSold ? '_self' : '_blank'} 
                    className={`relative group w-full flex items-center justify-center space-x-4 py-7 rounded-[2.5rem] font-black uppercase text-sm tracking-widest transition-all duration-300 overflow-hidden ${viewingProduct.isSold ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' : 'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-[0_15px_40px_rgba(37,211,102,0.3)] hover:scale-[1.02] active:scale-95'}`}
                  >
                    {!viewingProduct.isSold && (
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                    <MessageCircle size={32} fill="currentColor" className="text-white shrink-0" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] opacity-90 mb-0.5 font-bold">MEU INTERESSE</span>
                      <span>PEDIR INFORMAÇÕES</span>
                    </div>
                  </a>

                  <button 
                    onClick={() => setDetailTab('description')}
                    disabled={detailTab === 'description'}
                    className={`w-full flex items-center justify-center space-x-3 py-6 rounded-[2.5rem] font-black uppercase text-[11px] tracking-[0.2em] transition-all duration-300 border-2 ${detailTab === 'description' ? 'bg-slate-50 text-slate-300 border-slate-50 cursor-default' : 'bg-white text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95 shadow-sm'}`}
                  >
                    <FileText size={20} />
                    <span>Ver Descrição do Item</span>
                  </button>
                </div>
                
                <div className="mt-10 pt-10 border-t border-slate-50 flex flex-col items-center">
                   <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <MapPin size={14} className="text-red-500" />
                      <span className="text-[11px] font-black uppercase tracking-widest">Bairro {NEIGHBORHOOD} • Londrina</span>
                   </div>
                   <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">Garimpo Local & Sustentável</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {fullScreenImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setFullScreenImage(null)}
        >
          <img 
            src={fullScreenImage} 
            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500 p-4" 
            alt="Ampliada"
          />
          <button className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full text-white transition-all shadow-2xl border border-white/10">
            <X size={32} />
          </button>
        </div>
      )}

      <footer className="bg-slate-900 text-white py-24 mt-auto">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-20 md:gap-12 items-center text-center md:text-left">
          <div className="space-y-6">
             <div className="flex items-center justify-center md:justify-start gap-3">
                <ShoppingBag size={32} className="text-red-600" />
                <h4 className="text-3xl font-black tracking-tighter italic uppercase">Desapegos Londrina</h4>
             </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0">Itens com história, curadoria feita em casa. Qualidade e transparência em cada desapego.</p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-red-500 mb-2">Navegação</h5>
            <button onClick={() => {setCurrentView('about'); window.scrollTo(0,0)}} className="text-sm font-bold hover:text-red-400 transition-colors">Quem Somos</button>
            <button onClick={() => {setCurrentView('how'); window.scrollTo(0,0)}} className="text-sm font-bold hover:text-red-400 transition-colors">Dúvidas Frequentes</button>
            <button onClick={() => {setCurrentView('catalog'); window.scrollTo(0,0)}} className="text-sm font-bold hover:text-red-400 transition-colors">Voltar ao Topo</button>
          </div>

          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="bg-slate-800 p-5 rounded-[2rem] shadow-2xl border border-slate-700">
              <Heart size={40} className="text-red-500 fill-red-500" />
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-1">San Fernando, Londrina - PR</p>
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-700">Fazendo circular o que é bom</p>
            </div>
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em] mt-4">
              © 2026 DESAPEGOS LDR
            </p>
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
      <div className="relative flex-1 bg-slate-50 overflow-hidden">
        <img 
          key={active}
          src={images[active]} 
          className="w-full h-full object-contain animate-in fade-in duration-500 p-4 md:p-12" 
          alt="Foto do produto" 
        />
        
        {images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 w-1/4 flex items-center pl-6" onClick={prev}>
              <button className="bg-white/95 backdrop-blur-md p-4 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-all active:scale-90 hover:bg-red-600 hover:text-white shadow-2xl border border-slate-100">
                <ChevronLeft size={28} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end pr-6" onClick={next}>
              <button className="bg-white/95 backdrop-blur-md p-4 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-all active:scale-90 hover:bg-red-600 hover:text-white shadow-2xl border border-slate-100">
                <ChevronRight size={28} />
              </button>
            </div>
            
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2.5 pointer-events-none">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active 
                      ? 'w-12 bg-red-600 shadow-lg' 
                      : 'w-2.5 bg-black/10 md:bg-black/20'
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