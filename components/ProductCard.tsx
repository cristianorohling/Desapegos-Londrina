import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const [currentImgIndex] = useState(0);

  return (
    <div 
      className={`group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer ${product.isSold ? 'opacity-60 grayscale-[0.3]' : ''}`}
      onClick={() => onViewDetails?.(product)}
    >
      <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-slate-50 shrink-0">
        <img
          src={product.images[currentImgIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

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
          <div className="hidden md:block text-slate-200 group-hover:text-emerald-500 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;