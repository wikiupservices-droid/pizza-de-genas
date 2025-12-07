import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offres', href: '#deals' },
    { name: 'Infos', href: '#info' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-white">
          LA PIZZA <span className="text-brand-red">DE GENAA</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-brand-red transition-colors text-gray-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-2 bg-brand-red text-white px-5 py-2 rounded-full hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
          >
            <Phone size={18} />
            <span className="font-bold">{RESTAURANT_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest text-white hover:text-brand-red"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-2 text-brand-red border border-brand-red px-6 py-3 rounded-full mt-4"
          >
            <Phone size={18} />
            <span className="font-bold">APPELER</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;