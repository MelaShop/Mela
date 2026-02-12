
import React from 'react';
import { Page } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  cartCount: number;
  currentPage: Page;
  onOpenCart: () => void;
  customLogo: string;
  lang: 'en' | 'bn';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigate, cartCount, currentPage, onOpenCart, customLogo, lang, onToggleLang 
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <nav className="glass sticky top-0 z-50 px-4 py-3 mb-6 shadow-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate(Page.Home)}
        >
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-2 border-pink-200">
            <img src={customLogo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl md:text-3xl font-black tracking-tighter mela-gradient bg-clip-text text-transparent uppercase hidden sm:block font-['Hind_Siliguri']">
            {t.storeName}
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={onToggleLang}
            className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 font-bold text-xs flex items-center justify-center border border-pink-200 hover:bg-pink-100 transition-all"
          >
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>

          <button 
            onClick={() => onNavigate(Page.MyOrders)}
            className={`p-2 px-3 rounded-xl text-sm font-black transition-all ${currentPage === Page.MyOrders ? 'text-pink-600 bg-pink-50 shadow-inner' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <i className="fa-solid fa-bag-shopping md:mr-2"></i>
            <span className="hidden md:inline font-['Hind_Siliguri']">{t.myOrders}</span>
          </button>

          <button 
            onClick={() => onNavigate(Page.Profile)}
            className={`p-2 rounded-xl transition-all ${currentPage === Page.Profile ? 'text-pink-600 bg-pink-50' : 'text-slate-600 hover:bg-slate-100'}`}
            title={t.profile}
          >
            <i className="fa-solid fa-circle-user text-xl"></i>
          </button>

          <button 
            onClick={() => onNavigate(Page.Admin)}
            className={`p-2 rounded-xl transition-all ${currentPage === Page.Admin ? 'text-pink-600 bg-pink-50' : 'text-slate-600 hover:bg-slate-100'}`}
            title={t.admin}
          >
            <i className="fa-solid fa-user-shield text-lg"></i>
          </button>
          
          <button 
            onClick={onOpenCart}
            className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-all"
            title={t.cart}
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
