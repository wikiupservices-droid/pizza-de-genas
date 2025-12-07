import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { PizzaBase } from '../types';
import { Pizza } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PizzaBase>(PizzaBase.TOMATO);

  return (
    <section id="menu" className="py-24 bg-brand-dark relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Notre Carte</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des ingrédients frais, une pâte faite maison et une cuisson traditionnelle pour un goût unique.
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {MENU_DATA.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === category.title
                  ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-red-900/30'
                  : 'bg-transparent border-gray-800 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {MENU_DATA.find(c => c.title === activeCategory)?.items.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-brand-gray/50 border border-white/5 p-8 rounded-2xl hover:bg-brand-gray transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Pizza size={64} className="text-brand-red" />
              </div>

              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-brand-red transition-colors">
                  {item.name}
                </h3>
                <span className="text-xl font-bold text-brand-red bg-white/5 px-3 py-1 rounded-md">
                  {item.price.toFixed(2)}€
                </span>
              </div>
              
              <div className="w-12 h-0.5 bg-gray-700 mb-4 group-hover:bg-brand-red transition-colors"></div>

              {item.ingredients && (
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.ingredients.join(', ')}
                </p>
              )}

              {/* Badges */}
              <div className="mt-6 flex gap-2">
                {item.isVegetarian && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-green-800 text-green-500 rounded bg-green-900/10">
                    Végétarien
                  </span>
                )}
                {item.isSpicy && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-red-800 text-red-500 rounded bg-red-900/10">
                    Épicé
                  </span>
                )}
                {item.name === "La Truffe" && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-amber-800 text-amber-500 rounded bg-amber-900/10">
                    Signature
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;