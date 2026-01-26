
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold shadow-lg shadow-blue-500/20">
              <i className="fa-brands fa-google-drive text-lg"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-xl tracking-tight leading-none">Drive do Concurseiro</span>
              <span className="text-[10px] uppercase text-blue-500 font-bold tracking-widest mt-1">Conhecimento Democrático</span>
            </div>
          </div>
          <p className="text-sm max-w-sm text-gray-500 leading-relaxed">
            Acreditamos que o estudo de qualidade deve ser acessível a todos os brasileiros, independente da condição financeira.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-[10px] font-medium tracking-tighter uppercase text-gray-600">
        &copy; {new Date().getFullYear()} Drive do Concurseiro - João Victor. <br className="sm:hidden" /> Feito com <i className="fa-solid fa-heart text-blue-600 mx-1"></i> para o futuro do Brasil.
      </div>
    </footer>
  );
};
