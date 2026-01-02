import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentView: 'catalog' | 'about' | 'how';
  setView: (view: 'catalog' | 'about' | 'how') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="bg-white border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-24 py-6 md:py-0 gap-6">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setView('catalog')}
          >
            <div className="bg-slate-900 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <ShoppingBag size={28} className="text-white" />
            </div>
            <div className="ml-4 flex flex-col leading-tight">
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase">
                DESAPEGOS <span className="text-red-600">LONDRINA</span>
              </h1>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Curadoria & Oportunidades</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setView('catalog')}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${currentView === 'catalog' ? 'bg-white text-red-600 shadow-md scale-105' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Catálogo
            </button>
            <button
              onClick={() => setView('about')}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${currentView === 'about' ? 'bg-white text-red-600 shadow-md scale-105' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Sobre
            </button>
            <button
              onClick={() => setView('how')}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${currentView === 'how' ? 'bg-white text-red-600 shadow-md scale-105' : 'text-slate-500 hover:text-slate-800'}`}
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