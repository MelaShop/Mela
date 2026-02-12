
import React from 'react';
import { CartItem } from '../types';
import { TRANSLATIONS } from '../constants';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number, size?: string, color?: string) => void;
  onCheckout: () => void;
  lang: 'en' | 'bn';
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onUpdateQuantity, onCheckout, lang }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const t = TRANSLATIONS[lang];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col font-['Hind_Siliguri']`}>
        <div className="p-6 border-b flex items-center justify-between border-pink-50">
          <h2 className="text-2xl font-black text-slate-800 tracking-tighter uppercase italic">{t.cart}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-pink-50 text-pink-600 transition-colors">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <i className="fa-solid fa-cart-shopping text-4xl mb-4 opacity-20 text-pink-600"></i>
              <p className="font-bold">কার্ট খালি</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 items-start p-4 rounded-3xl border border-pink-50 bg-pink-50/20 hover:bg-pink-50/40 transition-all">
                <img src={item.selectedImage || item.image} alt={item.name} className="w-20 h-20 object-cover rounded-2xl bg-slate-100 shadow-sm border border-white" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-slate-800 line-clamp-1">{item.name}</h4>
                  <div className="flex gap-2 text-[10px] text-pink-500 font-bold uppercase mt-1">
                    {item.selectedSize && <span className="bg-white px-2 py-0.5 rounded-lg border border-pink-100">S: {item.selectedSize}</span>}
                    {item.selectedColor && <span className="bg-white px-2 py-0.5 rounded-lg border border-pink-100">C: {item.selectedColor}</span>}
                  </div>
                  <p className="text-pink-600 font-black text-base mt-1">৳{item.price}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1, item.selectedSize, item.selectedColor)}
                      className="w-8 h-8 rounded-lg bg-white border border-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm"
                    >
                      <i className="fa-solid fa-minus text-xs"></i>
                    </button>
                    <span className="text-sm font-black w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1, item.selectedSize, item.selectedColor)}
                      className="w-8 h-8 rounded-lg bg-white border border-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm"
                    >
                      <i className="fa-solid fa-plus text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-8 border-t bg-pink-50/30 border-pink-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-pink-400 font-black uppercase tracking-widest text-xs">{t.total}:</span>
            <span className="text-3xl font-black text-slate-900 tracking-tighter">৳{total}</span>
          </div>
          <button 
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full py-5 bg-pink-600 text-white rounded-[1.5rem] font-black text-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:hover:scale-100 uppercase tracking-widest border-b-4 border-pink-800"
          >
            {t.checkout}
          </button>
        </div>
      </div>
    </>
  );
};
