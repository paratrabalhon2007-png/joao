
import React, { useState, useEffect, useRef } from 'react';

export const PixSection: React.FC = () => {
  const PIX_CODE = "00020101021126810014BR.GOV.BCB.PIX2559pix-qr.mercadopago.com/instore/ol/v2/3Z92vwxO3Le6HS6SjSFvON5204000053039865802BR5923Joao Victor Concurseiro6009SAO PAULO62080504mpis6304342A";
  const DRIVE_LINK = "https://drive.google.com/drive/folders/1skePBNBT14b1Nui2agkhTH6LPQd52YZm?usp=sharing";
  const NOTIFICATION_SOUND_URL = "https://orafaaah.com/wp-content/uploads/2025/10/msg.mp3";
  
  const [copied, setCopied] = useState(false);
  const [showDriveModal, setShowDriveModal] = useState(false);
  const [showWhatsAppToast, setShowWhatsAppToast] = useState(false);
  
  // Referência para o áudio para evitar recriação constante
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Pré-carregar o áudio
    audioRef.current = new Audio(NOTIFICATION_SOUND_URL);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE);
      setCopied(true);
      setShowWhatsAppToast(true);
      
      // Tocar o som da notificação
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reinicia o áudio se já estiver tocando
        audioRef.current.play().catch(err => console.debug("Erro ao tocar áudio (interação necessária):", err));
      }
      
      // Resetar estado de copiado após 3 segundos
      setTimeout(() => setCopied(false), 3000);
      
      // Esconder notificação do WhatsApp após 5 segundos
      setTimeout(() => setShowWhatsAppToast(false), 5000);
    } catch (err) {
      alert("Erro ao copiar código. Por favor, tente selecionar manualmente.");
    }
  };

  const handleOpenDrive = () => {
    setShowDriveModal(false);
    window.open(DRIVE_LINK, "_blank");
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-[2.5rem] border border-zinc-800 p-8 md:p-14 transition-all relative">
      
      {/* Notificação Flutuante Estilo WhatsApp */}
      {showWhatsAppToast && (
        <div className="fixed top-6 left-4 right-4 z-[300] flex justify-center pointer-events-none animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="bg-zinc-950/90 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 max-w-sm pointer-events-auto">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/20">
              <i className="fa-brands fa-whatsapp text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                Aviso de Acesso
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              </span>
              <p className="text-zinc-400 text-[11px] leading-tight mt-0.5">
                Mande o comprovante no WhatsApp do atendente para <strong className="text-zinc-200">permanecer com o acesso</strong>.
              </p>
            </div>
            <button 
              onClick={() => setShowWhatsAppToast(false)}
              className="ml-2 text-zinc-600 hover:text-white transition-colors"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-blue-600/20 text-blue-400 rounded-3xl flex items-center justify-center mb-8 rotate-3 shadow-inner border border-blue-500/20">
          <i className="fa-solid fa-wallet text-4xl"></i>
        </div>
        <h2 className="text-3xl font-black mb-4 text-white">Contribuição Consciente</h2>
        <p className="text-zinc-400 mb-10 max-w-lg leading-relaxed text-sm md:text-base">
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

        {/* Ações Inferiores */}
        <div className="mt-10 flex flex-col items-center gap-6 w-full">
          <button
            onClick={handleCopy}
            className={`w-full max-md:max-w-xs max-w-md py-5 px-10 rounded-2xl font-black text-lg transition-all transform active:scale-95 flex items-center justify-center gap-4 ${
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
          
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-widest">
            <i className="fa-solid fa-shield-halved text-blue-500/70"></i>
            Pagamento Seguro via Mercado Pago
          </div>

          {/* Botão de Acesso ao Drive (Mobile Only) */}
          <button 
            onClick={() => setShowDriveModal(true)}
            className="sm:hidden flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3.5 px-8 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-green-900/20 transition-all active:scale-95 w-fit"
          >
            <i className="fa-brands fa-google-drive text-lg"></i>
            Abrir Drive do Concurseiro
          </button>
        </div>
      </div>

      {/* Modal de Notificação (Mobile/Global) */}
      {showDriveModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/20">
                <i className="fa-solid fa-circle-exclamation text-3xl"></i>
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">Aviso Importante!</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Para validar sua contribuição e <strong className="text-zinc-200">permanecer com o acesso</strong> ao Drive, você deve enviar o comprovante no WhatsApp do nosso atendente.
              </p>
              
              <div className="flex flex-col w-full gap-3">
                <button 
                  onClick={handleOpenDrive}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95"
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
    </div>
  );
};
