import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-serif font-bold text-white mb-4">
          LA PIZZA <span className="text-brand-red">DE GENAA</span>
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          L'excellence de la pizza artisanale. Ingrédients frais, passion véritable.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {/* Social placeholders */}
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
            <span className="sr-only">Facebook</span>
            f
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
            <span className="sr-only">Instagram</span>
            i
          </a>
        </div>
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} La Pizza de Genaa. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;