
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
    <>
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
            <div className="absolute top-full right-0 mt-2 w-52 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-3 md:hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[110]">
              <button 
                onClick={() => handleMobileNav('contribuir')}
                className="w-full text-left px-5 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-900 transition-colors"
              >
                Contribuir
              </button>
              <button 
                onClick={() => handleMobileNav('historia')}
                className="w-full text-left px-5 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-900 transition-colors"
              >
                Nossa História
              </button>
              <div className="border-t border-zinc-900 mt-2 pt-2">
                <button 
                  onClick={handleDriveAccess}
                  className="w-full text-left px-5 py-3 text-[13px] font-black text-blue-500 hover:bg-zinc-900 transition-colors uppercase tracking-widest flex items-center gap-2"
                >
                  <i className="fa-brands fa-google-drive"></i>
                  ACESSAR DRIVE
                </button>
                <button 
                  onClick={() => handleMobileNav('contribuir')}
                  className="w-full text-left px-5 py-3 text-[13px] font-black text-blue-500 hover:bg-zinc-900 transition-colors uppercase tracking-widest"
                >
                  APOIAR AGORA
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modal de Aviso Importante - Renderizado fora do Header para evitar cortes */}
      {showDriveModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300 my-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/20">
                <i className="fa-solid fa-circle-exclamation text-3xl"></i>
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">AVISO IMPORTANTE!</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Para validar sua contribuição e <strong className="text-zinc-200">permanecer com o acesso</strong> ao Drive, você deve enviar o comprovante no WhatsApp do nosso atendente.
              </p>
              
              <div className="flex flex-col w-full gap-3">
                <button 
                  onClick={handleConfirmAccess}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-blue-900/20"
                >
                  Entendi, Abrir Drive
                </button>
                <button 
                  onClick={() => setShowDriveModal(false)}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
