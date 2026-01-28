
import React, { useState, useEffect, useRef } from 'react';

export const PixSection: React.FC = () => {
  const PIX_CODE = "00020101021126810014BR.GOV.BCB.PIX2559pix-qr.mercadopago.com/instore/ol/v2/3Z92vwxO3Le6HS6SjSFvON5204000053039865802BR5923Joao Victor Concurseiro6009SAO PAULO62080504mpis6304342A";
  const PIX_CHAVE = "859526fd-52ca-428d-9cd6-73ee6436b7e2";
  const NOTIFICATION_SOUND_URL = "https://orafaaah.com/wp-content/uploads/2025/10/msg.mp3";
  
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [showWhatsAppToast, setShowWhatsAppToast] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(NOTIFICATION_SOUND_URL);
  }, []);

  const handleCopy = async (text: string, setCopied: (val: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setShowWhatsAppToast(true);
      
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => console.debug("Audio play blocked", err));
      }
      
      setTimeout(() => setCopied(false), 3000);
      setTimeout(() => setShowWhatsAppToast(false), 5000);
    } catch (err) {
      alert("Erro ao copiar código.");
    }
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
            <button onClick={() => setShowWhatsAppToast(false)} className="ml-2 text-zinc-600 hover:text-white transition-colors">
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

        {/* OPÇÃO 1: PIX COPIA E COLA */}
        <div className="w-full flex flex-col items-center gap-4 mb-12">
          <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-1">Opção 1: Pix Copia e Cola</div>
          <div className="w-full max-w-2xl relative group bg-black/40 rounded-2xl border-2 border-dashed border-zinc-800 p-2 focus-within:border-blue-500/50 transition-colors">
            <textarea
              readOnly
              value={PIX_CODE}
              className="w-full bg-transparent p-4 pr-14 text-sm text-zinc-500 font-mono resize-none focus:outline-none h-28 leading-relaxed overflow-hidden"
              onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            />
            <button onClick={() => handleCopy(PIX_CODE, setCopied1)} className="absolute top-4 right-4 w-10 h-10 bg-zinc-800 shadow-md rounded-lg flex items-center justify-center text-zinc-400 hover:text-blue-500 transition-all border border-zinc-700">
              <i className={`fa-solid ${copied1 ? 'fa-check text-green-500' : 'fa-copy'}`}></i>
            </button>
          </div>
          <button
            onClick={() => handleCopy(PIX_CODE, setCopied1)}
            className={`w-full max-md:max-w-xs max-w-md py-5 px-10 rounded-2xl font-black text-lg transition-all transform active:scale-95 flex items-center justify-center gap-4 ${
              copied1 ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20 shadow-xl'
            } text-white`}
          >
            {copied1 ? (
              <><i className="fa-solid fa-check-circle animate-pulse"></i>PIX COPIADO!</>
            ) : (
              <><i className="fa-solid fa-copy"></i>COPIAR CÓDIGO PIX</>
            )}
          </button>
        </div>

        {/* OPÇÃO 2: CHAVE ALEATÓRIA */}
        <div className="w-full flex flex-col items-center gap-4 mb-14">
          <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-1">Opção 2: Chave Aleatória</div>
          <div className="w-full max-w-2xl relative group bg-black/40 rounded-2xl border-2 border-dashed border-zinc-800 p-2 focus-within:border-blue-500/50 transition-colors">
            <textarea
              readOnly
              value={PIX_CHAVE}
              className="w-full bg-transparent p-4 pr-14 text-sm text-zinc-500 font-mono resize-none focus:outline-none h-28 leading-relaxed overflow-hidden"
              onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            />
            <button onClick={() => handleCopy(PIX_CHAVE, setCopied2)} className="absolute top-4 right-4 w-10 h-10 bg-zinc-800 shadow-md rounded-lg flex items-center justify-center text-zinc-400 hover:text-blue-500 transition-all border border-zinc-700">
              <i className={`fa-solid ${copied2 ? 'fa-check text-green-500' : 'fa-copy'}`}></i>
            </button>
          </div>
          <button
            onClick={() => handleCopy(PIX_CHAVE, setCopied2)}
            className={`w-full max-md:max-w-xs max-w-md py-5 px-10 rounded-2xl font-black text-lg transition-all transform active:scale-95 flex items-center justify-center gap-4 ${
              copied2 ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20 shadow-xl'
            } text-white`}
          >
            {copied2 ? (
              <><i className="fa-solid fa-check-circle animate-pulse"></i>PIX COPIADO!</>
            ) : (
              <><i className="fa-solid fa-copy"></i>COPIAR CÓDIGO PIX</>
            )}
          </button>
        </div>

        {/* INSTRUÇÕES PÓS-CONTRIBUIÇÃO */}
        <div className="w-full max-w-2xl bg-blue-600/5 border border-blue-500/20 rounded-3xl p-6 md:p-8 text-left space-y-4">
          <div className="flex items-center gap-3 text-blue-500">
            <i className="fa-solid fa-circle-info text-xl"></i>
            <span className="font-black text-xs uppercase tracking-widest">Próximos Passos</span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Você pode utilizar <strong className="text-white">qualquer uma das opções acima</strong> para realizar sua contribuição. Após concluir, siga estas etapas obrigatórias via <span className="text-green-500 font-bold">WhatsApp</span>:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex gap-3 items-start bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
              <div className="w-6 h-6 bg-blue-600/20 text-blue-400 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
              <p className="text-zinc-400 text-xs leading-tight">Envie o <strong className="text-zinc-100">comprovante do PIX</strong> para o nosso atendente validar seu acesso.</p>
            </li>
            <li className="flex gap-3 items-start bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
              <div className="w-6 h-6 bg-blue-600/20 text-blue-400 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
              <p className="text-zinc-400 text-xs leading-tight">Ao entrar no Drive, tire um <strong className="text-zinc-100">print de dentro do material</strong> e nos envie.</p>
            </li>
            <li className="flex gap-3 items-start bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 md:col-span-2">
              <div className="w-6 h-6 bg-green-500/20 text-green-400 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
              <p className="text-zinc-400 text-xs leading-tight">Por fim, pedimos que deixe um <strong className="text-zinc-100">feedback sobre o atendimento</strong> recebido. Sua opinião é fundamental!</p>
            </li>
          </ul>
        </div>

        <div className="mt-14 flex flex-center w-full justify-center">
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-widest">
            <i className="fa-solid fa-shield-halved text-blue-500/70"></i>
            Pagamento Seguro via Mercado Pago
          </div>
        </div>
      </div>
    </div>
  );
};
