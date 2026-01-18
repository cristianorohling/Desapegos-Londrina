import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'catalog' | 'about' | 'how';
  setView: (view: 'catalog' | 'about' | 'how') => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, isMenuOpen, toggleMenu }) => {
  const handleNav = (view: 'catalog' | 'about' | 'how') => {
    setView(view);
    if (window.innerWidth < 768) toggleMenu();
  };

  return (
    <nav className="bg-white border-b border-emerald-100 transition-all duration-300 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo Minimalista */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setView('catalog')}
          >
            <div className="bg-slate-900 p-1.5 rounded-xl group-hover:scale-105 transition-transform shadow-md">
              <ShoppingBag size={18} className="text-emerald-400" />
            </div>
            <div className="ml-3">
              <h1 className="text-base md:text-lg font-black text-slate-900 tracking-tighter uppercase leading-none">
                NOVIDADES <span className="text-emerald-600">& DESAPEGOS</span>
              </h1>
            </div>
          </div>

          {/* Botão de Menu Retrátil */}
          <button 
            onClick={toggleMenu}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100 transition-all active:scale-95 group"
          >
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900">
              {isMenuOpen ? 'Fechar' : 'Menu & Filtros'}
            </span>
            {isMenuOpen ? <X size={16} className="text-emerald-600" /> : <Menu size={16} className="text-slate-900" />}
          </button>
        </div>

        {/* Menu Expandido */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 pb-6 pt-1' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-200">
            <button
              onClick={() => handleNav('catalog')}
              className={`w-full md:w-auto px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${currentView === 'catalog' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Catálogo
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`w-full md:w-auto px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${currentView === 'about' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Sobre
            </button>
            <button
              onClick={() => handleNav('how')}
              className={`w-full md:w-auto px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${currentView === 'how' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Como Funciona
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;