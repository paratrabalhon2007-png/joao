
import React, { useState } from 'react';

export const PixSection: React.FC = () => {
  const PIX_CODE = "00020101021126810014BR.GOV.BCB.PIX2559pix-qr.mercadopago.com/instore/ol/v2/3Z92vwxO3Le6HS6SjSFvON5204000053039865802BR5923Joao Victor Concurseiro6009SAO PAULO62080504mpis6304342A";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      alert("Erro ao copiar código. Por favor, tente selecionar manualmente.");
    }
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-[2.5rem] border border-zinc-800 p-8 md:p-14 transition-all">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-blue-600/20 text-blue-400 rounded-3xl flex items-center justify-center mb-8 rotate-3 shadow-inner border border-blue-500/20">
          <i className="fa-solid fa-wallet text-4xl"></i>
        </div>
        <h2 className="text-3xl font-black mb-4 text-white">Contribuição Consciente</h2>
        <p className="text-zinc-400 mb-10 max-w-lg leading-relaxed">
          Para manter o <strong className="text-zinc-200">Drive do Concurseiro</strong> ativo, sua contribuição é o que paga os servidores e garante novas atualizações mensais.
        </p>

        {/* Container do Código PIX */}
        <div className="w-full max-w-2xl relative group bg-black/40 rounded-2xl border-2 border-dashed border-zinc-800 p-2 focus-within:border-blue-500/50 transition-colors">
          <textarea
            readOnly
            value={PIX_CODE}
            className="w-full bg-transparent p-4 pr-14 text-sm text-zinc-500 font-mono resize-none focus:outline-none h-28 leading-relaxed overflow-hidden"
            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
          />
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 w-10 h-10 bg-zinc-800 shadow-md rounded-lg flex items-center justify-center text-zinc-400 hover:text-blue-500 transition-all border border-zinc-700"
          >
            <i className={`fa-solid ${copied ? 'fa-check text-green-500' : 'fa-copy'}`}></i>
          </button>
        </div>

        {/* Botão de Acesso ao Drive - Agora posicionado abaixo do PIX no Mobile */}
        <a 
          href="https://drive.google.com/drive/folders/1skePBNBT14b1Nui2agkhTH6LPQd52YZm?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sm:hidden mt-8 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3.5 px-8 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-green-900/20 transition-all active:scale-95 w-fit"
        >
          <i className="fa-brands fa-google-drive text-lg"></i>
          Abrir Drive do Concurseiro
        </a>

        <div className="mt-10 flex flex-col items-center gap-5 w-full">
          <button
            onClick={handleCopy}
            className={`w-full max-w-md py-5 px-10 rounded-2xl font-black text-lg transition-all transform active:scale-95 flex items-center justify-center gap-4 ${
              copied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20 shadow-xl'
            } text-white`}
          >
            {copied ? (
              <>
                <i className="fa-solid fa-check-circle animate-pulse"></i>
                PIX COPIADO!
              </>
            ) : (
              <>
                <i className="fa-solid fa-copy"></i>
                COPIAR CÓDIGO PIX
              </>
            )}
          </button>
          
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
            <i className="fa-solid fa-shield-halved text-blue-500/70"></i>
            Pagamento Seguro via Mercado Pago
          </div>
        </div>
      </div>
    </div>
  );
};
