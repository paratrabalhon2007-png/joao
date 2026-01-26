
import React from 'react';

export const HistorySection: React.FC = () => {
  const points = [
    {
      icon: "fa-rocket",
      title: "Nascimento em 2024",
      desc: "Criado para democratizar o acesso, combatendo os preços abusivos de cursos que chegam a R$ 3.000."
    },
    {
      icon: "fa-chart-line",
      title: "+900 Membros",
      desc: "Uma comunidade crescente que compartilha o mesmo sonho de aprovação e mudança de vida."
    },
    {
      icon: "fa-brands fa-google-drive",
      title: "Custos do Google Drive",
      desc: "O grande volume de acessos gera custos fixos mensais de armazenamento em nuvem de alta performance."
    },
    {
      icon: "fa-clock",
      title: "Manutenção & Tempo",
      desc: "Dedicamos horas semanais para organizar e atualizar o material a cada 2 meses."
    }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Propósito</span>
        <h2 className="text-4xl font-black text-gray-900">História do Projeto</h2>
        <p className="text-gray-500 max-w-2xl mx-auto italic">"Conhecimento não deve ter preço, mas manter a estrutura tem um custo."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {points.map((point, idx) => (
          <div key={idx} className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-50/50 transition-all flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100/30 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
              <i className={`${point.icon.startsWith('fa-brands') ? point.icon : 'fa-solid ' + point.icon} text-2xl`}></i>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{point.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative group overflow-hidden rounded-[2.5rem]">
        <div className="absolute inset-0 bg-blue-600 group-hover:scale-105 transition-transform duration-700"></div>
        <div className="relative z-10 p-10 md:p-16 text-white text-center">
          <h3 className="text-3xl font-black mb-10">Transparência e Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <i className="fa-solid fa-heart"></i>
              </div>
              <p className="font-bold leading-tight">Contribuição não é obrigatória</p>
              <p className="text-xs text-blue-100">O acesso é livre para quem realmente precisa.</p>
            </div>
            <div className="space-y-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <i className="fa-solid fa-ban"></i>
              </div>
              <p className="font-bold leading-tight">Sem falsas promessas</p>
              <p className="text-xs text-blue-100">Focamos em material bruto e estudo sério.</p>
            </div>
            <div className="space-y-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <i className="fa-solid fa-earth-americas"></i>
              </div>
              <p className="font-bold leading-tight">Acesso Democratizado</p>
              <p className="text-xs text-blue-100">Equilibrando a balança para quem estuda sozinho.</p>
            </div>
          </div>
        </div>
        
        {/* Animated background particles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 blur-2xl rounded-full -ml-20 -mb-20"></div>
      </div>

      <div className="flex items-center justify-center gap-4 text-gray-400 font-medium italic py-6">
        <div className="h-px w-12 bg-gray-200"></div>
        <span>Mantenha o Drive vivo, estude com dignidade.</span>
        <div className="h-px w-12 bg-gray-200"></div>
      </div>
    </div>
  );
};
