import React from 'react';
import { Calendar, Clock, ChevronDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" 
          alt="Artisanal Pizza" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-brand-red text-brand-red tracking-[0.3em] text-xs md:text-sm uppercase mb-6 rounded-sm bg-black/50 backdrop-blur-sm">
            {RESTAURANT_INFO.slogan}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-tight">
            La Pizza <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              De Genaa
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-brand-red mx-auto my-8"></div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-200 mb-10">
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <Calendar className="text-brand-red" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Ouverture</p>
                <p className="font-serif text-lg">3 Janvier 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <Clock className="text-brand-red" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Horaire</p>
                <p className="font-serif text-lg">{RESTAURANT_INFO.openingTime}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu" 
              className="bg-brand-red text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30"
            >
              Voir le Menu
            </a>
            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/ /g,'')}`}
              className="bg-transparent border border-white text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Commander
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;