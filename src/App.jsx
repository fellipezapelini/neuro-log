import React from 'react';
import neuroLogLogo from './assets/neuroLogLogo.png'; 
import mockupImg from './assets/hero.png'; 
import mobileImg from './assets/mobile.png'; 

function App() {
  return (
    <div className="min-h-screen font-sans">
      
      {/* HEADER EM GLASSMORPHISM */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/40 border-b border-white/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO E NOME */}
          <div className="flex items-center gap-0">
            <img 
              src={neuroLogLogo} 
              alt="Logo NeuroLog" 
              className="w-20 h-20 object-contain scale-[1.2] translate-y-[2px] drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" 
            />
            <span className="text-2xl font-black tracking-wider text-[#0F172A] ml-1">
              NEURO<span className="text-[#1A56DB]">LOG</span>
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
            <a href="#funcionalidades" className="hover:text-[#1A56DB] transition-colors">Funcionalidades</a>
            <a href="#planos" className="hover:text-[#1A56DB] transition-colors">Planos Fundador</a>
            <a href="#faq" className="hover:text-[#1A56DB] transition-colors">Dúvidas</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* BOTÃO ENTRAR ATUALIZADO COM O NOVO LINK */}
            <a 
              href="https://sistema.neurolog.med.br/" 
              className="text-sm font-medium text-slate-700 hover:text-[#1A56DB] transition-colors hidden sm:block"
            >
              Entrar
            </a>
            <a href="#" className="bg-[#1A56DB] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-200">
              Teste Grátis
            </a>
          </div>
        </div>
      </header>

      {/* SEÇÃO HERO */}
      <main className="pt-40 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
          Menos papel. <br />
          <span className="text-[#1A56DB]">Mais paciente.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          O Prontuário Eletrônico Inteligente que reúne Agenda, Telemedicina, 
          Prescrição Memed em uma única tela.
        </p>

        {/* Botões Superiores */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl">
            Comece em 3 etapas simples
          </button>
          <button className="bg-white/50 hover:bg-white border border-white text-slate-900 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
            Ver demonstração
          </button>
        </div>

        {/* CARD DO MOCKUP COM INTERAÇÃO */}
        <div className="w-full max-w-6xl bg-white/50 backdrop-blur-md rounded-[40px] border border-white shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 text-left">
          
          {/* Lado Esquerdo: Texto e Botão */}
          <div className="flex-1 z-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              Tenha o controle da sua clínica na palma da mão
            </h2>
            {/* BOTÃO COMECE JÁ ATUALIZADO COMO LINK (tag <a>) COM A NOVA URL */}
            <a 
              href="https://sistema.neurolog.med.br/" 
              className="inline-block bg-white hover:bg-slate-50 text-slate-900 px-10 py-4 rounded-2xl font-black text-xl transition-all shadow-lg border border-slate-100"
            >
              Comece já
            </a>
          </div>

          {/* Lado Direito: Imagens Interativas */}
          <div className="flex-1 relative group cursor-pointer perspective-1000">
            
            <div className="relative z-10 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:translate-x-8">
              
              <img 
                src={mockupImg} 
                alt="Sistema no Notebook" 
                className="w-full h-auto drop-shadow-2xl transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
                onError={(e) => { e.target.style.display = 'none'; }}
              />

              <img 
                src={mobileImg} 
                alt="Sistema no Celular" 
                className="absolute top-0 left-0 w-full h-full object-contain drop-shadow-2xl transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/10 blur-[100px] rounded-full -z-10 transition-all duration-700 group-hover:bg-blue-500/20"></div>
          </div>

        </div>
      </main>

    </div>
  );
}

export default App;
