
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
    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 md:p-14 transition-all">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 rotate-3">
          <i className="fa-solid fa-wallet text-4xl"></i>
        </div>
        <h2 className="text-3xl font-black mb-4 text-gray-900">Contribuição Consciente</h2>
        <p className="text-gray-500 mb-10 max-w-lg leading-relaxed">
          Para manter o <strong>Drive do Concurseiro</strong> ativo, sua contribuição é o que paga os servidores e garante novas atualizações mensais.
        </p>

        <div className="w-full max-w-2xl relative group bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-2 focus-within:border-blue-400 transition-colors">
          <textarea
            readOnly
            value={PIX_CODE}
            className="w-full bg-transparent p-4 pr-14 text-sm text-gray-500 font-mono resize-none focus:outline-none h-28 leading-relaxed overflow-hidden"
            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
          />
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:scale-110 transition-all"
          >
            <i className={`fa-solid ${copied ? 'fa-check text-green-500' : 'fa-copy'}`}></i>
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 w-full">
          <button
            onClick={handleCopy}
            className={`w-full max-w-md py-5 px-10 rounded-2xl font-black text-lg transition-all transform active:scale-95 flex items-center justify-center gap-4 ${
              copied ? 'bg-green-600 shadow-green-200' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 shadow-xl'
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
          
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <i className="fa-solid fa-shield-halved text-blue-400"></i>
            Pagamento Seguro via Mercado Pago
          </div>
        </div>
      </div>
    </div>
  );
};
