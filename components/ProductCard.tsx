
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div 
      className={`group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full cursor-pointer ${product.isSold ? 'grayscale-[0.5]' : ''}`}
      onClick={() => onViewDetails?.(product)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 shrink-0">
        <img
          src={product.images[currentImgIndex]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          loading="lazy"
        />
        
        {product.images.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <button 
              onClick={prevImage}
              className="bg-white/95 backdrop-blur p-2.5 rounded-2xl shadow-xl text-slate-800 hover:bg-emerald-600 hover:text-white active:scale-90 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="bg-white/95 backdrop-blur p-2.5 rounded-2xl shadow-xl text-slate-800 hover:bg-emerald-600 hover:text-white active:scale-90 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {product.isHighlighted && !product.isSold && (
          <div className="absolute top-4 right-4 bg-amber-400 text-white p-2 rounded-2xl shadow-xl z-10">
            <Star size={16} fill="white" />
          </div>
        )}

        {product.isSold && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center z-20">
            <span className="bg-white text-slate-900 px-6 py-2 rounded-2xl font-black text-[11px] tracking-widest uppercase shadow-2xl">
              Vendido
            </span>
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-600 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 text-base md:text-lg leading-tight mb-2 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <div className="mt-4 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Preço</span>
            <span className="text-2xl font-black text-slate-900">
              <span className="text-emerald-500 text-sm mr-1">R$</span>
              {product.price.toFixed(2)}
            </span>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
            <Star size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
