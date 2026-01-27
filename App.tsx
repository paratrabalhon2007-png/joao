
import React, { useCallback } from 'react';
import { Header } from './components/Header.tsx';
import { PixSection } from './components/PixSection.tsx';
import { HistorySection } from './components/HistorySection.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600/30">
      <Header onNavigate={scrollToSection} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-[#0a0a0a] py-20 px-4 relative overflow-hidden">
          {/* Novo Efeito de Fundo: Grade sutil e Spotlight suave */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#27272a 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Drive do <span className="text-blue-500">Concurseiro</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              O maior repositório colaborativo de materiais para concursos. 
              <span className="font-semibold text-zinc-200 italic block mt-2">Feito por quem estuda, para quem estuda.</span>
            </p>
            
            {/* Acessos Rápidos - Visible only on Desktop (sm and up) */}
            <div className="mt-12 hidden sm:grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
              <button 
                onClick={() => scrollToSection('contribuir')}
                className="group p-5 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center text-center outline-none transition-all hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                  <i className="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-zinc-100">Apoiar Projeto</p>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Contribuição</p>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('historia')}
                className="group p-5 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center text-center outline-none transition-all hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                  <i className="fa-solid fa-book-open text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-zinc-100">Nossa História</p>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Transparência</p>
                </div>
              </button>

              <a 
                href="https://drive.google.com/drive/folders/1skePBNBT14b1Nui2agkhTH6LPQd52YZm?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-5 bg-blue-600 rounded-2xl border border-blue-500 shadow-blue-900/20 shadow-lg flex flex-col items-center text-center transition-all hover:bg-blue-500 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-3">
                  <i className="fa-brands fa-google-drive text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-white">Acessar Drive</p>
                  <p className="text-[10px] text-blue-100 uppercase font-bold tracking-widest">Material</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-24">
          <section id="contribuir" className="scroll-mt-32">
             <PixSection />
          </section>

          <section id="historia" className="scroll-mt-32">
            <HistorySection />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
