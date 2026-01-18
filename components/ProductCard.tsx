import React, { useState } from 'react';
import { Product } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div 
      className={`group bg-white rounded-3xl overflow-hidden border border-emerald-50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer relative ${product.isSold ? 'opacity-80 grayscale' : ''}`}
      onClick={() => onViewDetails?.(product)}
    >
      <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-slate-50 shrink-0">
        <img
          src={product.images[currentIdx]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Carrossel no Card */}
        {product.images.length > 1 && !product.isSold && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevImage}
              className="w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-slate-800 hover:bg-emerald-600 hover:text-white transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextImage}
              className="w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-slate-800 hover:bg-emerald-600 hover:text-white transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Dots do Carrossel */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
            {product.images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${i === currentIdx ? 'w-4 bg-emerald-500 shadow-sm' : 'w-1 bg-white/40'}`}
              />
            ))}
          </div>
        )}

        {/* Tarja de Vendido */}
        {product.isSold && (
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-900 text-white px-10 py-1.5 transform translate-x-[30%] translate-y-[100%] rotate-45 font-black text-[10px] tracking-[0.2em] uppercase shadow-2xl">
              Vendido
            </div>
            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[0.5px]"></div>
          </div>
        )}

        <div className="absolute top-3 left-3">
          <span className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[8px] font-black uppercase tracking-widest text-slate-800 shadow-sm border border-emerald-50">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-slate-800 text-[13px] md:text-sm leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-base md:text-lg font-black text-slate-900">
            <span className="text-emerald-600 text-[10px] mr-0.5 font-bold">R$</span>
            {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
          <div className={`w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all ${product.isSold ? 'invisible' : ''}`}>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;