
import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Trash2, Edit, Star, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
  isAdmin: boolean;
  onDelete?: (id: string) => void;
  onToggleStatus?: (id: string) => void;
  onEdit?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isAdmin, onDelete, onToggleStatus, onEdit, onViewDetails }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Tenho interesse no produto "${product.name}" (R$ ${product.price.toFixed(2)}) que vi no site Desapegos Londrina.`
  )}`;

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
      className={`group bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full cursor-pointer ${product.isSold ? 'grayscale-[0.5]' : ''}`}
      onClick={() => onViewDetails?.(product)}
    >
      {/* Imagem / Carrossel */}
      <div className="relative aspect-square overflow-hidden bg-slate-100 shrink-0">
        <img
          src={product.images[currentImgIndex]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Controles do Carrossel */}
        {product.images.length > 1 && (
          <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button 
              onClick={prevImage}
              className="bg-white/90 backdrop-blur p-2 rounded-full shadow-lg text-slate-800 hover:bg-white active:scale-90"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextImage}
              className="bg-white/90 backdrop-blur p-2 rounded-full shadow-lg text-slate-800 hover:bg-white active:scale-90"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Badges */}
        {product.isHighlighted && !product.isSold && (
          <div className="absolute top-3 right-3 bg-amber-400 text-white p-1.5 rounded-xl shadow-lg z-10">
            <Star size={14} fill="white" />
          </div>
        )}

        {product.isSold && (
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex items-center justify-center z-20">
            <span className="bg-white text-slate-900 px-4 py-1.5 rounded-full font-black text-[10px] tracking-widest uppercase shadow-xl">
              Vendido
            </span>
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-white/90 backdrop-blur px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider text-slate-600 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Conteúdo Simplificado (Capa do Catálogo) */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 text-sm md:text-base leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-black text-emerald-600">
            R$ {product.price.toFixed(2)}
          </span>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            Ver Detalhes
          </div>
        </div>

        {/* Botões de Ação Admin - Apenas visíveis no modo Admin */}
        {isAdmin && (
          <div className="mt-4 pt-4 border-t border-slate-50 flex space-x-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onToggleStatus?.(product.id)}
              className="flex-1 p-2 rounded-xl border border-slate-100 bg-slate-50 text-slate-400 hover:text-emerald-600 transition-all"
              title="Mudar Status"
            >
              <CheckCircle size={18} />
            </button>
            <button
              onClick={() => onEdit?.(product)}
              className="flex-1 p-2 rounded-xl border border-slate-100 bg-slate-50 text-slate-400 hover:text-amber-600 transition-all"
              title="Editar"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => onDelete?.(product.id)}
              className="flex-1 p-2 rounded-xl border border-slate-100 bg-slate-50 text-slate-400 hover:text-red-600 transition-all"
              title="Excluir"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
