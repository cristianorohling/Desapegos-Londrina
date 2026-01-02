import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentView: 'catalog' | 'about' | 'how';
  setView: (view: 'catalog' | 'about' | 'how') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-16 py-3 md:py-0">
          <div 
            className="flex items-center cursor-pointer group mb-3 md:mb-0"
            onClick={() => setView('catalog')}
          >
            <div className="bg-emerald-600 p-2 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg shadow-emerald-100">
              <ShoppingBag size={22} />
            </div>
            <h1 className="ml-3 text-xl font-black text-slate-900 tracking-tight">
              Desapegos <span className="text-emerald-600">Londrina</span>
            </h1>
          </div>

          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-2xl">
            <button
              onClick={() => setView('catalog')}
              className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${currentView === 'catalog' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Início
            </button>
            <button
              onClick={() => setView('about')}
              className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${currentView === 'about' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Sobre Nós
            </button>
            <button
              onClick={() => setView('how')}
              className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${currentView === 'how' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
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