
import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDriveModal, setShowDriveModal] = useState(false);
  
  const DRIVE_LINK = "https://drive.google.com/drive/folders/1skePBNBT14b1Nui2agkhTH6LPQd52YZm?usp=sharing";

  const handleMobileNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  const handleDriveAccess = () => {
    setIsMenuOpen(false);
    setShowDriveModal(true);
  };

  const handleConfirmAccess = () => {
    setShowDriveModal(false);
    window.open(DRIVE_LINK, "_blank");
  };

  return (
    <header className="sticky top-0 z-[100] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-900 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 group text-left outline-none"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
            <i className="fa-brands fa-google-drive text-xl"></i>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-white">Drive do <span className="text-blue-500">Concurseiro</span></span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Conhecimento Livre</span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 text-sm font-semibold text-zinc-400">
          <button onClick={() => onNavigate('contribuir')} className="hover:text-blue-500 transition-all px-2 py-1">Contribuir</button>
          <button onClick={() => onNavigate('historia')} className="hover:text-blue-500 transition-all px-2 py-1">Nossa História</button>
          <button onClick={handleDriveAccess} className="hover:text-blue-500 transition-all px-2 py-1 flex items-center gap-2">
            <i className="fa-brands fa-google-drive"></i>
            Acessar Drive
          </button>
          <button 
            onClick={() => onNavigate('contribuir')}
            className="bg-blue-600 text-white px-5 py-3 rounded-full text-xs font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 uppercase tracking-widest"
          >
            Apoiar Agora
          </button>
        </nav>

        {/* Mobile Menu Button (3 Dots) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-zinc-400 hover:bg-zinc-900 rounded-full transition-colors outline-none"
          aria-label="Menu"
        >
          <i className="fa-solid fa-ellipsis text-xl tracking-widest"></i>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2 md:hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[110]">
            <button 
              onClick={() => handleMobileNav('contribuir')}
              className="w-full text-left px-5 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-900 hover:text-blue-500 transition-colors"
            >
              Contribuir
            </button>
            <button 
              onClick={() => handleMobileNav('historia')}
              className="w-full text-left px-5 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-900 hover:text-blue-500 transition-colors"
            >
              Nossa História
            </button>
            <div className="border-t border-zinc-800 mt-1 pt-1 space-y-0.5">
              <button 
                onClick={handleDriveAccess}
                className="w-full text-left px-5 py-3 text-sm font-black text-blue-500 hover:bg-zinc-900 transition-colors uppercase tracking-widest flex items-center gap-2"
              >
                <i className="fa-brands fa-google-drive"></i>
                Acessar Drive
              </button>
              <button 
                onClick={() => handleMobileNav('contribuir')}
                className="w-full text-left px-5 py-3 text-sm font-black text-blue-500 hover:bg-zinc-900 transition-colors uppercase tracking-widest"
              >
                Apoiar Agora
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Aviso Importante - Integrado no Header */}
      {showDriveModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade