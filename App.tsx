import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import DealsSection from './components/DealsSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { RESTAURANT_INFO } from './constants';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <MenuSection />
        <DealsSection />
        <InfoSection />
      </main>

      <Footer />

      {/* Floating Call Button Mobile */}
      <a 
        href={`tel:${RESTAURANT_INFO.phone}`}
        className="fixed bottom-6 right-6 md:hidden bg-brand-red text-white p-4 rounded-full shadow-2xl shadow-red-600/40 z-50 hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Call to order"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
}

export default App;