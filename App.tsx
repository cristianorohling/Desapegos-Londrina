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
  ArrowRight,
  MapPin,
  Clock,
  FileText,
  Undo2
} from 'lucide-react';
import { Product, Category } from './types';
import { INITIAL_PRODUCTS, CATEGORIES, WHATSAPP_NUMBER } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

type View = 'catalog' | 'about' | 'how';
type DetailTab = 'gallery' | 'description';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Brinquedos": <Gamepad2 size={14} />,
  "Decoração": <Home size={14} />,
  "Pets": <PawPrint size={14} />,
  "Cozinha": <Utensils size={14} />,
  "Informática": <Monitor size={14} />,
  "Instrumentos Musicais": <Music size={14} />
};

const CATEGORY_COLORS: Record<string, string> = {
  "Brinquedos": "bg-pink-500",
  "Decoração": "bg-amber-500",
  "Pets": "bg-emerald-500",
  "Cozinha": "bg-orange-500",
  "Informática": "bg-blue-500",
  "Instrumentos Musicais": "bg-indigo-500"
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('catalog');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [detailTab, setDetailTab] = useState<DetailTab>('gallery');

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
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <Info size={14} /> Nossa História
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Um novo ciclo, <br/><span className="text-emerald-600">novas histórias.</span>
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-lg">
                <p>Somos uma família que decidiu iniciar um novo ciclo. Ao longo dos anos, acumulamos não apenas objetos, mas histórias, memórias e peças que fizeram parte da nossa trajetória — e também de gerações anteriores.</p>
                <p>Vivemos hoje em uma casa grande, repleta de itens bem cuidados, muitos deles guardados com carinho por muito tempo. No entanto, chegou o momento de simplificar, abrir espaço e seguir um novo caminho, em um lar menor e mais funcional.</p>
                <p>Por isso, estamos desapegando de diversos objetos que ainda têm muito valor, qualidade e história para continuar fazendo parte da vida de outras pessoas. Cada item aqui foi escolhido com cuidado, respeito e transparência.</p>
                <p className="text-slate-900 font-bold">Mais do que vender, queremos dar novos destinos a coisas que fizeram parte da nossa vida — e que agora podem fazer parte da sua.</p>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Home Atmosphere" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hidden md:block">
                <Heart size={40} className="text-emerald-500 fill-emerald-500 animate-pulse" />
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
                icon: <ShoppingBag className="text-emerald-600" />,
                title: "O Catálogo",
                desc: "Os produtos anunciados aqui fazem parte do nosso acervo pessoal e estão guardados em nossa própria casa. Ao clicar em um item, você poderá visualizar as informações, fotos e valores."
              },
              {
                icon: <MessageCircle className="text-emerald-600" />,
                title: "Negociação",
                desc: "Não realizamos vendas diretamente pelo site. Toda a negociação acontece pelo WhatsApp, onde tiramos dúvidas e combinamos detalhes de forma simples e transparente."
              },
              {
                icon: <MapPin className="text-emerald-600" />,
                title: "Retirada",
                desc: "A retirada dos itens é feita presencialmente em nossa residência, no bairro São Fernando, Londrina. O endereço é informado após a confirmação do interesse."
              },
              {
                icon: <Clock className="text-emerald-600" />,
                title: "Agendamento",
                desc: "Após o contato, combinamos um dia e horário que seja bom para ambos. Tudo feito com respeito e organização."
              }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
        {activeCategory === 'Todos' && (
          <div className="bg-white rounded-[3rem] p-8 md:p-12 mb-12 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">Seja bem-vindo(a)!</h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-6">
                Estamos simplificando nosso lar para um novo caminho. Aqui você encontra itens bem cuidados que fizeram parte da nossa história e agora podem fazer parte da sua. 
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setCurrentView('about')} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700">
                  Conheça nossa história <ArrowRight size={14}/>
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
              <ShoppingBag size={300} className="translate-x-1/2 -translate-y-1/4" />
            </div>
          </div>
        )}

        <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-emerald-600 text-[9px] font-black uppercase tracking-[0.3em] mb-2">
              <Flame size={12} className="text-orange-500 fill-orange-500" />
              <span>Garimpo Londrina</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
              {activeCategory === 'Todos' ? 'Novidades' : activeCategory}
            </h2>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{filteredProducts.length} itens disponíveis</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
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
              Ver tudo
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar currentView={currentView} setView={setCurrentView} />

      {currentView === 'catalog' && (
        <div className="sticky top-[64px] z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center space-x-3 py-4">
              <button
                onClick={() => setActiveCategory('Todos')}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === 'Todos' 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' 
                    : 'bg-white text-slate-400 border border-slate-100 hover:border-slate-300'
                }`}
              >
                {activeCategory === 'Todos' ? <Sparkles size={14} /> : <LayoutGrid size={14} />}
                <span>Tudo</span>
              </button>
              
              <div className="h-6 w-px bg-slate-100 shrink-0"></div>

              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat 
                      ? `${CATEGORY_COLORS[cat] || 'bg-slate-900'} text-white shadow-md scale-105` 
                      : 'bg-white text-slate-400 border border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span className={activeCategory === cat ? 'text-white' : 'text-slate-300'}>
                    {CATEGORY_ICONS[cat] || <MoreHorizontal size={14} />}
                  </span>
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
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-5xl md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full md:h-auto md:max-h-[85vh] animate-in slide-in-from-bottom-20 duration-500">
            
            {/* Esquerda: ÁREA DE MÍDIA / DESCRIÇÃO */}
            <div className="md:w-[55%] bg-slate-100 relative h-[45vh] md:h-auto overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-slate-100">
              {detailTab === 'gallery' ? (
                <ProductDetailGallery 
                  images={viewingProduct.images} 
                  onImageClick={(url) => setFullScreenImage(url)}
                />
              ) : (
                <div className="absolute inset-0 bg-white md:bg-slate-50 overflow-y-auto custom-scrollbar p-8 md:p-12 animate-in fade-in slide-in-from-left-10 duration-500">
                   <div className="max-w-prose mx-auto">
                    <button 
                      onClick={() => setDetailTab('gallery')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest mb-8 shadow-lg hover:bg-emerald-600 transition-colors"
                    >
                      <Undo2 size={14} /> Voltar para Fotos
                    </button>
                    <h3 className="text-2xl font-black text-slate-900 mb-6 border-b border-slate-200 pb-4">Descrição do Item</h3>
                    <div className="text-slate-700 whitespace-pre-wrap leading-relaxed font-medium text-lg pb-12">
                      {viewingProduct.description}
                    </div>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => setViewingProduct(null)} 
                className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full text-white z-[60]"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Direita: CONTEÚDO E BOTÕES */}
            <div className="md:w-[45%] flex flex-col bg-white overflow-hidden h-[55vh] md:h-auto">
              <div className="p-6 md:p-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[9px] font-black text-white uppercase tracking-widest px-3 py-1.5 rounded-full ${CATEGORY_COLORS[viewingProduct.category] || 'bg-emerald-600'}`}>
                    {viewingProduct.category}
                  </span>
                  <button onClick={() => setViewingProduct(null)} className="hidden md:block text-slate-300 hover:text-slate-900 transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-tight mb-3 tracking-tight">
                  {viewingProduct.name}
                </h2>
                
                <div className="flex items-baseline gap-1.5 mb-8 text-slate-900">
                  <span className="text-sm font-bold text-emerald-600">R$</span>
                  <span className="text-3xl md:text-5xl font-black tracking-tighter">{viewingProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                
                <div className="space-y-4 mt-auto">
                  <a 
                    href={viewingProduct.isSold ? '#' : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de mais informações sobre o item "${viewingProduct.name}" que vi no catálogo Desapegos Londrina. Ainda está disponível?`)}`} 
                    target={viewingProduct.isSold ? '_self' : '_blank'} 
                    className={`relative group w-full flex items-center justify-center space-x-4 py-6 rounded-3xl font-black uppercase text-sm tracking-widest transition-all duration-300 overflow-hidden ${viewingProduct.isSold ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-[1.02]'}`}
                  >
                    {!viewingProduct.isSold && (
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                    <MessageCircle size={28} fill="currentColor" className="text-white shrink-0" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] opacity-80 mb-0.5 font-bold">INTERESSE NO ITEM</span>
                      <span>PEDIR INFORMAÇÕES</span>
                    </div>
                  </a>

                  <button 
                    onClick={() => setDetailTab('description')}
                    disabled={detailTab === 'description'}
                    className={`w-full flex items-center justify-center space-x-3 py-5 rounded-3xl font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 border-2 ${detailTab === 'description' ? 'bg-slate-50 text-slate-300 border-slate-50 cursor-default' : 'bg-white text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95'}`}
                  >
                    <FileText size={18} />
                    <span>Ver Descrição do Item</span>
                  </button>
                </div>
                
                <p className="mt-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  Londrina - PR • Bairro São Fernando
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {fullScreenImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-lg flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setFullScreenImage(null)}
        >
          <img 
            src={fullScreenImage} 
            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500" 
            alt="Ampliada"
          />
          <button className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all shadow-2xl">
            <X size={28} />
          </button>
        </div>
      )}

      <footer className="bg-slate-900 text-white py-20 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 md:gap-8 items-center text-center md:text-left">
          <div className="space-y-6">
            <h4 className="text-2xl font-black italic">Desapegos Londrina</h4>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0">Acervo pessoal com histórias guardadas com carinho. Simplificando para novos caminhos.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 mb-2">Explorar</h5>
            <button onClick={() => {setCurrentView('about'); window.scrollTo(0,0)}} className="text-sm font-bold hover:text-emerald-400 transition-colors">Sobre Nós</button>
            <button onClick={() => {setCurrentView('how'); window.scrollTo(0,0)}} className="text-sm font-bold hover:text-emerald-400 transition-colors">Como Funciona</button>
            <button onClick={() => {setCurrentView('catalog'); window.scrollTo(0,0)}} className="text-sm font-bold hover:text-emerald-400 transition-colors">Catálogo Completo</button>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="bg-slate-800 p-4 rounded-full">
              <Heart size={32} className="text-emerald-500 fill-emerald-500" />
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Bairro São Fernando</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Londrina - Paraná</p>
            </div>
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] mt-4">
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
      <div className="relative flex-1 bg-slate-100 overflow-hidden">
        <img 
          key={active}
          src={images[active]} 
          className="w-full h-full object-contain animate-in fade-in duration-300 p-2 md:p-8" 
          alt="Foto do produto" 
        />
        
        {images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 w-1/4 flex items-center pl-4" onClick={prev}>
              <button className="bg-white/90 backdrop-blur-md p-3 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-all active:scale-90 hover:bg-emerald-600 hover:text-white shadow-xl">
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end pr-4" onClick={next}>
              <button className="bg-white/90 backdrop-blur-md p-3 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-all active:scale-90 hover:bg-emerald-600 hover:text-white shadow-xl">
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active 
                      ? 'w-10 bg-emerald-500 shadow-lg' 
                      : 'w-2 bg-black/10 md:bg-black/20'
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