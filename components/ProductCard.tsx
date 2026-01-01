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
      className={`group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer ${product.isSold ? 'opacity-60 grayscale-[0.3]' : ''}`}
      onClick={() => onViewDetails?.(product)}
    >
      <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-slate-50 shrink-0">
        <img
          src={product.images[currentImgIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700"
          loading="lazy"
        />
        
        {product.isHighlighted && !product.isSold && (
          <div className="absolute top-2 right-2 bg-amber-400 text-white p-1.5 rounded-xl shadow-lg z-10">
            <Star size={12} fill="white" />
          </div>
        )}

        {product.isSold && (
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex items-center justify-center z-20">
            <span className="bg-white text-slate-900 px-4 py-1 rounded-lg font-black text-[9px] tracking-widest uppercase">
              Vendido
            </span>
          </div>
        )}
      </div>

      <div className="p-3 md:p-5 flex flex-col flex-1">
        <h3 className="font-bold text-slate-800 text-xs md:text-base leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm md:text-xl font-black text-slate-900">
            <span className="text-emerald-500 text-[10px] md:text-sm mr-0.5">R$</span>
            {product.price.toFixed(2)}
          </span>
          <div className="hidden md:block bg-slate-50 p-2 rounded-xl text-slate-300 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
            <Star size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;