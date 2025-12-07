import React from 'react';
import { LAUNCH_OFFER, LUNCH_DEALS } from '../constants';
import { Star, Clock } from 'lucide-react';

const DealsSection: React.FC = () => {
  return (
    <section id="deals" className="py-24 bg-white text-black relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Launch Offer - Left Side */}
          <div className="lg:w-5/12 relative">
             <div className="bg-brand-dark text-white p-10 h-full rounded-3xl relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl">
                <div className="absolute inset-0 bg-brand-red opacity-10 transform -skew-x-12 scale-150"></div>
                <div className="relative z-10">
                  <div className="inline-block p-3 rounded-full bg-brand-red mb-6 animate-pulse">
                    <Star className="text-white" size={32} fill="currentColor" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand-red mb-2 uppercase tracking-widest">
                    {LAUNCH_OFFER.title}
                  </h3>
                  <div className="w-20 h-1 bg-white mx-auto my-6 opacity-30"></div>
                  <p className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8">
                    1 Pizza Achetée <br/>
                    <span className="text-brand-red">=</span> <br/>
                    1 Pizza Offerte
                  </p>
                  <p className="text-sm text-gray-400 border border-gray-700 px-4 py-2 rounded-full inline-block">
                    {LAUNCH_OFFER.condition}
                  </p>
                </div>
             </div>
          </div>

          {/* Lunch Deals - Right Side */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4 text-brand-red">
                <Clock size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Offres du Midi</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-black">
                Formules Déjeuner
              </h2>
              <p className="text-gray-600 max-w-lg">
                Uniquement le midi. Profitez d'une pause gourmande avec nos formules complètes.
              </p>
            </div>

            <div className="space-y-4">
              {LUNCH_DEALS.map((deal, index) => (
                <div 
                  key={index} 
                  className="group flex items-center justify-between p-6 bg-gray-50 border border-gray-200 hover:border-brand-red rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  <div>
                    <h4 className="text-xl font-bold font-serif mb-1 group-hover:text-brand-red transition-colors">
                      {deal.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{deal.description}</p>
                  </div>
                  <div className="text-3xl font-bold text-brand-dark group-hover:scale-110 transition-transform">
                    {deal.price}€
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-sm text-gray-500 font-medium">
              * Du Lundi au Vendredi: 11h30 à 13h30
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DealsSection;