
import React from 'react';
import { ShoppingBag, Settings } from 'lucide-react';

interface NavbarProps {
  isAdmin: boolean;
  toggleAdmin: () => void;
  resetView: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAdmin, toggleAdmin, resetView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={resetView}
          >
            <div className="bg-emerald-600 p-1.5 rounded-lg text-white group-hover:bg-emerald-500 transition-colors">
              <ShoppingBag size={20} />
            </div>
            <h1 className="ml-2.5 text-lg font-black text-slate-900 tracking-tight">
              Desapegos Londrina
            </h1>
          </div>

          <button
            onClick={toggleAdmin}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
              isAdmin 
                ? 'bg-amber-100 text-amber-700 font-bold' 
                : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Settings size={20} />
            {isAdmin && <span className="text-xs uppercase tracking-widest">Painel Admin</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
