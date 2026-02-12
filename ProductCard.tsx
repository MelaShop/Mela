
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-pink-50 flex flex-col h-full group cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img 
          src={product.image || 'https://via.placeholder.com/400x500?text=No+Image'} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-2xl text-[10px] font-black text-pink-600 uppercase tracking-widest shadow-sm">
          {product.category}
        </div>
        <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/10 transition-all flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <span className="bg-white text-pink-600 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-tighter shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
            বিস্তারিত দেখুন
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col gap-2">
        <h3 className="font-bold text-slate-800 text-lg line-clamp-1 group-hover:text-pink-600 transition-colors font-['Hind_Siliguri']">{product.name}</h3>
        <p className="text-2xl font-black text-pink-600">৳{product.price}</p>
      </div>
    </div>
  );
};
