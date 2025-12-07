import React from 'react';
import { MapPin, Phone, Clock, Truck } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="py-24 bg-brand-gray relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Details */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-10">
              Infos & <span className="text-brand-red">Livraison</span>
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-brand-red border border-white/10">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Adresse</h4>
                  <p className="text-gray-400">{RESTAURANT_INFO.address}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT_INFO.address)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm text-brand-red hover:text-white mt-2 inline-block transition-colors border-b border-brand-red hover:border-white pb-0.5"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-brand-red border border-white/10">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Commandes</h4>
                  <p className="text-3xl font-serif font-bold text-white mb-1">{RESTAURANT_INFO.phone}</p>
                  <p className="text-gray-500 text-sm">Appelez-nous pour commander ou réserver.</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-brand-red border border-white/10">
                  <Clock />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Horaires</h4>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex justify-between w-full max-w-xs border-b border-white/5 pb-2">
                      <span>Lun - Ven</span>
                      <span className="text-white">{RESTAURANT_INFO.hours.week}</span>
                    </div>
                    <div className="flex justify-between w-full max-w-xs border-b border-white/5 pb-2">
                      <span>Samedi</span>
                      <span className="text-white">{RESTAURANT_INFO.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between w-full max-w-xs">
                      <span>Dimanche</span>
                      <span className="text-brand-red font-bold">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-brand-red border border-white/10">
                  <Truck />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Zone de Livraison</h4>
                  <p className="text-gray-400 mb-2">
                    Livraison offerte dès <span className="text-white font-bold">{RESTAURANT_INFO.deliveryThreshold}€</span> de commande.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {RESTAURANT_INFO.deliveryCities.map(city => (
                      <span key={city} className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300 border border-white/10">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Map Simulation */}
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Rue+des+Marways,+74300+THYEZ&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Location Map"
                className="absolute inset-0 w-full h-full"
             ></iframe>
             <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded shadow-lg z-10 font-bold font-serif">
                Thyez, 74300
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;