
import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 group text-left"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <i className="fa-brands fa-google-drive text-xl"></i>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-gray-900">Drive do <span className="text-blue-600">Concurseiro</span></span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Conhecimento Livre</span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 text-sm font-semibold text-gray-600">
          <button 
            onClick={() => onNavigate('contribuir')}
            className="hover:text-blue-600 transition-all hover:translate-y-[-1px] active:translate-y-0 px-2 py-1"
          >
            Contribuir
          </button>
          <button 
            onClick={() => onNavigate('historia')}
            className="hover:text-blue-600 transition-all hover:translate-y-[-1px] active:translate-y-0 px-2 py-1"
          >
            Nossa História
          </button>
          <button 
            onClick={() => onNavigate('contribuir')}
            className="bg-blue-600 text-white px-5 py-3 rounded-full text-xs font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 hover:shadow-blue-300 uppercase tracking-widest"
          >
            Apoiar Agora
          </button>
        </nav>

        {/* Mobile Menu Button (3 Dots) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Menu"
        >
          <i className="fa-solid fa-ellipsis text-xl tracking-widest"></i>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => handleMobileNav('contribuir')}
              className="w-full text-left px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Contribuir
            </button>
            <button 
              onClick={() => handleMobileNav('historia')}
              className="w-full text-left px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Nossa História
            </button>
            <div className="border-t border-gray-50 mt-1 pt-1">
              <button 
                onClick={() => handleMobileNav('contribuir')}
                className="w-full text-left px-5 py-3 text-sm font-black text-blue-600 hover:bg-blue-50 transition-colors uppercase tracking-widest"
              >
                Apoiar Agora
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
