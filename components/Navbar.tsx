
import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  resetView: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ resetView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={resetView}
          >
            <div className="bg-emerald-600 p-1.5 rounded-lg text-white group-hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-100">
              <ShoppingBag size={20} />
            </div>
            <h1 className="ml-2.5 text-lg font-black text-slate-900 tracking-tight">
              Desapegos Londrina
            </h1>
          </div>

          <div className="hidden md:block">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
              Bazar Residencial • Londrina PR
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
