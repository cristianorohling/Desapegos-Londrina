import React, { useState, useEffect } from 'react';
import { X, Camera, Hash } from 'lucide-react';
import { Product, Category } from '../types';
import { CATEGORIES } from '../constants';

interface AdminFormProps {
  onClose: () => void;
  onSubmit: (product: Partial<Product>) => void;
  editProduct?: Product | null;
}

const AdminForm: React.FC<AdminFormProps> = ({ onClose, onSubmit, editProduct }) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    category: CATEGORIES[0],
    images: [],
    isSold: false,
    isHighlighted: false,
    keywords: []
  });
  const [imageInput, setImageInput] = useState('');
  const [keywordsInput, setKeywordsInput] = useState('');

  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
      setImageInput(editProduct.images.join('\n'));
      setKeywordsInput(editProduct.keywords?.join(', ') || '');
    }
  }, [editProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const urls = imageInput.split(/[\n,]+/).map(u => u.trim()).filter(u => u !== '');
    const keywords = keywordsInput.split(/[,;]+/).map(k => k.trim().toLowerCase()).filter(k => k !== '');
    
    if (!formData.name || urls.length === 0) {
      alert("Por favor, preencha o nome e insira pelo menos uma URL de imagem.");
      return;
    }
    
    onSubmit({ ...formData, images: urls, keywords });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white rounded-[2.5rem] w-full max-w-4xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center px-10 py-6 border-b border-slate-100 bg-slate-50/30">
          <div>
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest">
              {editProduct ? 'Editar Informações' : 'Novo Cadastro'}
            </h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 p-3 rounded-2xl hover:bg-white shadow-sm transition-all">
            <X size={28} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Nome do Produto</label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-slate-700"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex: Mesa de Centro Industrial"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Categoria</label>
                  <select
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-bold text-slate-700 appearance-none"
                    value={formData.category}
                    onChange={e => setFormData(prev => ({ ...prev, category: e.target.value as Category }))}
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Valor (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-bold text-slate-700"
                    value={formData.price}
                    onChange={e => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Hash size={12} /> Palavras-chave (separadas por vírgula)
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-slate-700"
                  value={keywordsInput}
                  onChange={e => setKeywordsInput(e.target.value)}
                  placeholder="Ex: retro, madeira, colecionador"
                />
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="highlight"
                  className="w-6 h-6 accent-emerald-600 rounded-lg cursor-pointer"
                  checked={formData.isHighlighted}
                  onChange={e => setFormData(prev => ({ ...prev, isHighlighted: e.target.checked }))}
                />
                <label htmlFor="highlight" className="text-xs font-black uppercase tracking-tight text-slate-500 cursor-pointer">
                  <span>Destacar Item na Vitrine</span>
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Links das Imagens (uma por linha)</label>
                <textarea
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none h-48 resize-none transition-all font-mono text-xs text-slate-600 leading-relaxed"
                  value={imageInput}
                  onChange={e => setImageInput(e.target.value)}
                  placeholder="https://sua-imagem.com/foto1.jpg&#10;https://sua-imagem.com/foto2.jpg"
                />
              </div>
              <div className="aspect-video rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
                {imageInput.split(/[\n,]+/)[0] ? (
                  <img src={imageInput.split(/[\n,]+/)[0].trim()} className="w-full h-full object-cover" alt="Preview" />
                ) : (
                  <div className="text-center opacity-30 text-slate-400">
                    <Camera size={40} className="mx-auto mb-3" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Prévia da Foto Principal</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Descrição Detalhada</label>
            <textarea
              className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-3xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none h-56 resize-none transition-all font-medium leading-relaxed text-slate-700 text-base"
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Escreva tudo sobre o item: estado, dimensões, história e observações importantes..."
            />
          </div>

          <div className="pt-4 flex space-x-5">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-8 py-5 border-2 border-slate-100 rounded-[1.5rem] font-black uppercase tracking-widest text-xs text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-[2] px-8 py-5 bg-slate-900 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs hover:bg-emerald-600 shadow-2xl shadow-slate-200 transition-all active:scale-[0.98]"
            >
              {editProduct ? 'Salvar Alterações' : 'Publicar no Catálogo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;