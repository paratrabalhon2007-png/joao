
import React, { useCallback } from 'react';
import { Header } from './components/Header';
import { PixSection } from './components/PixSection';
import { HistorySection } from './components/HistorySection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100">
      <Header onNavigate={scrollToSection} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
              Drive do <span className="text-blue-600">Concurseiro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              O maior repositório colaborativo de materiais para concursos. 
              <span className="font-semibold text-gray-900 italic block mt-2">Feito por quem estuda, para quem estuda.</span>
            </p>
            
            {/* Acessos Rápidos - Visible only on Desktop (sm and up) */}
            <div className="mt-12 hidden sm:grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
              <button 
                onClick={() => scrollToSection('contribuir')}
                className="group p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center outline-none"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                  <i className="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Apoiar Projeto</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Contribuição</p>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('historia')}
                className="group p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center outline-none"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                  <i className="fa-solid fa-book-open text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Nossa História</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Transparência</p>
                </div>
              </button>

              <a 
                href="https://drive.google.com/drive/folders/1skePBNBT14b1Nui2agkhTH6LPQd52YZm?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-5 bg-blue-600 rounded-2xl border border-blue-500 shadow-blue-200 shadow-lg flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-3">
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
