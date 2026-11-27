import React, { useState } from 'react';
import neuroLogLogo from './assets/neuroLogLogo.png';
import { abrirPreferenciasCookies } from './AvisoCookies.jsx';
import mockupImg from './assets/hero.png';
import mobileImg from './assets/mobile.png';

// ============================================================
// AJUSTE AQUI: URL da tela de CADASTRO (nao a de login).
// Todos os CTAs de conversao usam esta constante.
// ============================================================
const URL_CADASTRO = 'https://sistema.neurolog.med.br/?acao=cadastro';
const URL_LOGIN = 'https://sistema.neurolog.med.br/';

function App() {
  const [videoAberto, setVideoAberto] = useState(false);
  const [featureAtiva, setFeatureAtiva] = useState(null);
  const [faqAberto, setFaqAberto] = useState(null);

  const features = [
    {
      title: 'Agenda Inteligente',
      desc: 'Otimize seus horários com lembretes automáticos e encaixes inteligentes.',
      detailedDesc:
        'Reduza faltas com confirmações via WhatsApp e SMS. Gerencie agendas de forma visual com recurso inteligente de encaixes e lista de espera automatizada. Tenha o controle total do seu tempo clínico.',
      icon: '📅',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'IA Generativa',
      desc: 'Análise de anamneses e casos clínicos com suporte de IA para decisões médicas.',
      detailedDesc:
        'A IA processa o histórico e os dados da anamnese em tempo real, sugerindo hipóteses diagnósticas, apontando interações medicamentosas e otimizando o seu tempo e raciocínio clínico para diagnósticos mais precisos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-blue-50 text-[#1A56DB]',
    },
    {
      title: 'Prontuário Digital',
      desc: 'Histórico completo, intuitivo e acessível de forma ágil.',
      detailedDesc:
        'Totalmente customizável para a sua especialidade. Acesse históricos de consultas, Protocolo AVC, evolução clínica, anexos de exames e prescrições antigas em uma interface limpa, segura e disponível de qualquer lugar com internet.',
      icon: '📑',
      color: 'bg-slate-100 text-slate-600',
    },
    {
      title: 'Prescrição',
      desc: 'Integração nativa e de API para receitas digitais com a maior base de medicamentos.',
      detailedDesc:
        'Banco de dados com mais de 90 mil medicamentos atualizados constantemente. Emita receitas digitais com assinatura e certificado digital ICP-Brasil e envie o link direto para o WhatsApp ou SMS do paciente em segundos.',
      icon: '💊',
      color: 'bg-slate-100 text-slate-600',
    },
    {
      title: 'Telemedicina',
      desc: 'Consultas remotas integrada diretamente ao prontuário.',
      detailedDesc:
        'Sala de espera virtual segura e videochamada em alta definição embarcada. Realize seus atendimentos online sem precisar enviar links do Zoom ou Meet. Anotações no prontuário e prescrição ocorrem na mesma tela, simultaneamente.',
      icon: '📹',
      color: 'bg-slate-100 text-slate-600',
    },
    {
      title: 'Atestado em PDF',
      desc: 'Gere atestados, laudos e declarações assinadas em um clique.',
      detailedDesc:
        'Crie modelos prontos ou personalizados com a sua logomarca. Gere, assine digitalmente e emita laudos, atestados e pedidos de exame de forma automatizada, prontos para envio digital ou impressão.',
      icon: '📄',
      color: 'bg-slate-100 text-slate-600',
    },
    {
      title: 'Dashboard Financeiro',
      desc: 'Controle total de faturamento, repasses e fluxo de caixa.',
      detailedDesc:
        'Monitore a saúde financeira da sua clínica com gráficos claros e objetivos de receitas, despesas, faturamento por convênios e taxas de inadimplência. Tudo atualizado em tempo real e sem complicação.',
      icon: '📊',
      color: 'bg-slate-100 text-slate-600',
    },
    {
      title: 'Segurança LGPD',
      desc: 'Dados criptografados e total conformidade com a Lei de Proteção de Dados.',
      detailedDesc:
        'Conexão sempre criptografada (HTTPS), senhas e certificados guardados criptografados, cópia de segurança diária criptografada fora do servidor e trilha de auditoria que registra cada acesso ao prontuário e não pode ser apagada. A secretária tem acesso próprio, sem ver dados clínicos.',
      icon: '🛡️',
      color: 'bg-slate-100 text-slate-600',
    },
  ];

  const faqs = [
    {
      question: 'Já uso outro sistema. Vou perder o histórico dos meus pacientes?',
      answer:
        'Não. Você exporta os pacientes e os atendimentos do sistema antigo em planilha e envia no Neuro-Log. Antes de gravar, aparece uma prévia de cada linha: o que entra, o que já existe (nada é duplicado) e o que tem erro. No fim, você baixa um comprovante com o resultado de cada linha. Se preferir, nossa equipe faz a migração junto com você.',
    },
    {
      question: 'O Neuro-Log tem o selo SBIS?',
      answer:
        'Ainda não, e preferimos dizer isso com clareza. O sistema foi construído a partir dos requisitos técnicos do Manual de Certificação SBIS/CFM (nível NGS1): trilha de auditoria que não pode ser apagada, registros corrigidos por errata (nada é excluído), assinatura digital ICP-Brasil, controle de acesso por perfil, sessão que expira sozinha e cópia de segurança diária. Você pode conferir cada item na demonstração.',
    },
    {
      question: 'O valor é por médico? A secretária paga à parte?',
      answer:
        'O plano é por médico. A secretária entra pela conta do médico, com login próprio, sem custo extra: ela vê agenda e cadastro, mas não vê dados clínicos. Uma mesma secretária pode atender mais de um médico.',
    },
    {
      question: 'E se um dia eu quiser sair?',
      answer:
        'Seus dados são seus. Em Configurações, você baixa tudo (pacientes, atendimentos, alergias, diagnósticos, exames e receitas) em planilhas abertas, a qualquer momento e sem pedir para ninguém.',
    },
    {
      question: 'Como funciona o suporte?',
      answer:
        'Por gente, não por robô. Dentro do sistema você abre um chamado com número de protocolo e prazo de resposta, e acompanha a conversa por lá. Para algo urgente, chame no WhatsApp.',
    },
    {
      question: 'Preciso cadastrar o cartão de crédito para testar grátis?',
      answer:
        'Não! Você pode iniciar o seu teste gratuito agora mesmo e conhecer todas as funcionalidades da plataforma sem precisar inserir nenhum dado de pagamento.',
    },
    {
      question: 'Os dados da minha clínica e dos pacientes ficam seguros?',
      answer:
        'Sim. A conexão é sempre criptografada, cada acesso ao prontuário fica registrado numa trilha de auditoria que não pode ser apagada, a cópia de segurança é diária e criptografada, e a secretária não vê dados clínicos. A política de privacidade e os termos estão publicados na Documentação legal, no rodapé.',
    },
    {
      question: 'Se eu errar uma prescrição, posso editar o receituário?',
      answer:
        'Por questões de segurança e normas do CFM (integração Memed), um receituário já assinado não pode ser alterado para evitar fraudes. No entanto, você pode emitir uma errata ou gerar uma nova prescrição em poucos cliques de forma muito simples.',
    },
    {
      question: 'O sistema avisa sobre as confirmações de consulta?',
      answer:
        'Sim! Você é notificado diariamente (às 17h00) para gerenciar as confirmações dos pacientes agendados para o dia seguinte. Assim, você tem previsibilidade e reduz o número de faltas.',
    },
    {
      question: 'Atuo em mais de um estado. Posso adicionar mais de um CRM?',
      answer:
        'Com certeza. No seu perfil, é possível cadastrar múltiplos CRMs e RQEs, permitindo que você emita documentos válidos de acordo com a sua região de atendimento atual.',
    },
    {
      question: 'Consigo realizar atendimentos online (Telemedicina)?',
      answer:
        'Sim! Temos um módulo de Telemedicina completo e integrado ao prontuário. Você atende pacientes de qualquer lugar com vídeo em alta qualidade, sem precisar usar aplicativos externos.',
    },
    {
      question: 'Vou tirar férias. Posso pausar o recebimento de agendamentos?',
      answer:
        "Sim! O Neuro-Log possui um 'Modo Férias' que você ativa direto no seu perfil. Ele pausa temporariamente a sua agenda online, evitando que pacientes marquem consultas enquanto você descansa.",
    },
  ];

  const toggleFaq = (i) => setFaqAberto(faqAberto === i ? null : i);

  return (
    <div className="min-h-screen font-sans relative scroll-smooth flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/40 border-b border-white/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-0">
            <img
              src={neuroLogLogo}
              alt="Logo Neuro-Log"
              className="w-20 h-20 object-contain scale-[1.2] translate-y-[2px] drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
            />
            <span className="text-2xl font-black tracking-wider text-[#0F172A] ml-1">
              NEURO<span className="text-[#092c77]">LOG</span>
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
            <a href="#funcionalidades" className="hover:text-[#1A56DB] transition-colors">Funcionalidades</a>
            <a href="#migracao" className="hover:text-[#1A56DB] transition-colors">Migração</a>
            <a href="#seguranca" className="hover:text-[#1A56DB] transition-colors">Segurança</a>
            <a href="#planos" className="hover:text-[#1A56DB] transition-colors">Planos</a>
            <a href="#faq" className="hover:text-[#1A56DB] transition-colors">Dúvidas</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={URL_LOGIN}
              className="text-sm font-medium text-slate-700 hover:text-[#1A56DB] transition-colors hidden sm:block"
            >
              Entrar
            </a>
            <a
              href={URL_CADASTRO}
              className="bg-[#092c77] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-200"
            >
              Teste Grátis
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-40 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* HERO */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
          Menos papel. <br />
          <span className="text-[#092c77]">Mais paciente.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          O Prontuário Eletrônico Inteligente que reúne Agenda, Telemedicina e Prescrição Memed em uma única tela.
        </p>

        <div className="flex justify-center w-full mb-8">
          <button
            onClick={() => setVideoAberto(true)}
            className="bg-white/50 hover:bg-white border border-white text-slate-900 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center gap-3 shadow-lg hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1A56DB]">
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
            Ver demonstração
          </button>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600 mb-20">
          {['14 dias grátis, sem cartão', 'Migração assistida do seu sistema atual', 'Exporte seus dados quando quiser', 'Suporte humano'].map((t) => (
            <li key={t} className="flex items-center gap-2"><span className="text-[#1A56DB]">✓</span> {t}</li>
          ))}
        </ul>

        {/* MOCKUP */}
        <div className="w-full max-w-6xl bg-white/50 backdrop-blur-md rounded-[40px] border border-white shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 text-left mb-32">
          <div className="flex-1 z-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              Tenha o controle da sua clínica na palma da mão
            </h2>
            <a
              href={URL_CADASTRO}
              className="inline-block bg-white hover:bg-slate-50 text-slate-900 px-10 py-4 rounded-2xl font-black text-xl transition-all shadow-lg border border-slate-100"
            >
              Comece já
            </a>
          </div>

          <div className="flex-1 relative group cursor-pointer">
            <div className="relative z-10 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:translate-x-8">
              <img
                src={mockupImg}
                alt="Notebook"
                className="w-full h-auto drop-shadow-2xl transition-opacity duration-700 opacity-100 group-hover:opacity-0"
              />
              <img
                src={mobileImg}
                alt="Celular"
                className="absolute top-0 left-0 w-full h-full object-contain drop-shadow-2xl transition-opacity duration-700 opacity-0 group-hover:opacity-100"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>

        {/* FUNCIONALIDADES */}
        <section id="funcionalidades" className="w-full pt-10 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Uma plataforma. <span className="text-[#092c77]">Tudo integrado.</span>
            </h2>
            <p className="text-slate-600 text-lg">
              O Neuro-Log reúne em uma única tela o que você hoje usa em vários sistemas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                onClick={() => setFeatureAtiva(f)}
                className="bg-white/40 backdrop-blur-sm border border-white p-8 rounded-[32px] text-left hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col h-full group"
              >
                <div
                  className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{f.desc}</p>
                <div className="mt-auto pt-4 border-t border-slate-200/60 text-[#1A56DB] text-sm font-bold flex items-center gap-2">
                  Saiba mais
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MIGRAÇÃO */}
        <section id="migracao" className="w-full pt-20 pb-10 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Trocar de sistema <span className="text-[#092c77]">sem perder nada.</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              O medo de perder o histórico dos pacientes é o que mais segura uma troca. Por isso, a migração mostra tudo antes de gravar e deixa uma prova do que foi feito.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              ['1', 'Exporte do sistema atual', 'Pacientes e atendimentos em planilha (CSV, ou Excel salvo como CSV). O Neuro-Log reconhece as colunas sozinho: nome, CPF, nascimento, convênio, evolução, diagnóstico, conduta.'],
              ['2', 'Confira a prévia', 'Antes de gravar, você vê o que entra, o que já existe e o que tem erro, linha por linha. Nada é duplicado: quem já está cadastrado é reconhecido pelo CPF ou pelo código antigo.'],
              ['3', 'Guarde o comprovante', 'Um PDF com a impressão digital do arquivo, o resultado de cada linha e o registro na trilha de auditoria. Cada atendimento trazido fica marcado como importado no prontuário.'],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-[32px] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#092c77] text-white font-black flex items-center justify-center mb-5">{n}</div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-base mt-8">
            Prefere não fazer sozinho?{' '}
            <a href="https://wa.me/5543974000934?text=Ol%C3%A1%21%20Quero%20migrar%20meus%20pacientes%20para%20o%20Neuro-Log." target="_blank" rel="noopener noreferrer" className="font-bold text-[#1A56DB] hover:underline">Chame a gente</a>{' '}
            e fazemos a migração junto com você. E, se um dia quiser sair, você exporta tudo em planilha aberta.
          </p>
        </section>

        {/* SEGURANÇA */}
        <section id="seguranca" className="w-full pt-20 pb-10 scroll-mt-24">
          <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md border border-white rounded-[40px] shadow-xl p-8 md:p-14 text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Segurança que você <span className="text-[#092c77]">pode conferir.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Transparência primeiro: o Neuro-Log ainda não tem o selo SBIS. O sistema foi construído a partir dos requisitos técnicos do Manual de Certificação SBIS/CFM (nível NGS1), e cada item abaixo já funciona hoje. Na demonstração, mostramos um por um.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-slate-700">
              {[
                ['Trilha de auditoria:', 'registra cada acesso e alteração e não pode ser apagada nem editada.'],
                ['Nada é excluído do prontuário:', 'correções entram como errata, com data e autor.'],
                ['Assinatura digital ICP-Brasil:', 'certificado A1 em receitas, atestados e encaminhamentos.'],
                ['Acesso por perfil:', 'a secretária usa a agenda e o cadastro, sem ver dados clínicos.'],
                ['Senha forte e bloqueio:', 'a conta trava após tentativas erradas e a sessão expira sozinha quando o computador fica parado.'],
                ['Cópia de segurança diária:', 'criptografada e guardada fora do servidor.'],
                ['Portabilidade:', 'você exporta todos os dados em planilha aberta a qualquer momento.'],
                ['Documentação legal publicada:', 'termos de uso, política de privacidade e contrato de tratamento de dados.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="text-[#1A56DB] font-black">✓</span>
                  <span><b>{t}</b> {d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/documentacao-legal" className="inline-block bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-2xl font-bold border border-slate-200 shadow-sm">Ver documentação legal</a>
              <a href="https://wa.me/5543974000934?text=Ol%C3%A1%21%20Quero%20uma%20demonstra%C3%A7%C3%A3o%20do%20Neuro-Log." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#092c77] hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg">Agendar demonstração</a>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="w-full pt-20 pb-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Escolha o melhor plano <br className="md:hidden" />
              para sua clínica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TRIMESTRAL */}
            <div className="bg-white/60 backdrop-blur-md border border-white rounded-[40px] p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col text-left relative">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Trimestral</h3>
              <p className="text-slate-500 text-sm mb-6">Flexibilidade para o seu negócio.</p>

              <div className="mb-2">
                <span className="text-5xl font-black text-slate-900">R$ 227</span>
                <span className="text-slate-500 font-medium"> /mês</span>
              </div>
              <p className="text-sm text-slate-500 mb-8 font-medium">
                R$ 681 a cada 3 meses · em até 3x sem juros no cartão
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-[#1A56DB]">✓</span> Acesso completo a todas as funcionalidades
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-[#1A56DB]">✓</span> Suporte humano, com chamado e WhatsApp
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-[#1A56DB]">✓</span> Migração assistida e secretária sem custo extra
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-[#1A56DB]">✓</span> Atualizações gratuitas
                </li>
              </ul>

              <a
                href={URL_CADASTRO}
                className="w-full block text-center bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 py-4 rounded-2xl font-bold text-lg transition-colors shadow-sm"
              >
                Assinar Trimestral
              </a>
            </div>

            {/* ANUAL */}
            <div className="bg-[#092c77] text-white rounded-[40px] p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(9,44,119,0.4)] hover:scale-105 transition-all duration-300 flex flex-col text-left relative border border-blue-800">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-xs font-black uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                Mais Vantajoso
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Anual</h3>
              <p className="text-blue-200 text-sm mb-6">Economia máxima para sua clínica.</p>

              <div className="mb-2">
                <span className="text-5xl font-black text-white">R$ 183</span>
                <span className="text-blue-200 font-medium"> /mês</span>
              </div>
              <p className="text-sm text-blue-200 mb-8 font-medium">
                Plano anual: 12x de R$ 183 sem juros no cartão (R$ 2.196 no total)
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-white">
                  <span className="text-blue-300">✓</span> Acesso completo a todas as funcionalidades
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-blue-300">✓</span> Suporte humano prioritário, com chamado e WhatsApp
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-blue-300">✓</span> Migração assistida e secretária sem custo extra
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-blue-300">✓</span> Atualizações gratuitas
                </li>
                <li className="flex items-center gap-3 text-white font-bold">
                  <span className="text-blue-300">✓</span> Economia de R$ 528 ao ano
                </li>
              </ul>

              <a
                href={URL_CADASTRO}
                className="w-full block text-center bg-white hover:bg-slate-100 text-[#092c77] py-4 rounded-2xl font-black text-lg transition-colors shadow-lg"
              >
                Assinar Anual Agora
              </a>
            </div>
          </div>
          <p className="text-center text-slate-600 mt-10">
            Comece com <b>14 dias grátis, sem cartão</b>. Valor por médico; a secretária entra pela sua conta sem custo extra.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full pt-20 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600 text-lg">Tudo o que você precisa saber antes de começar.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-md border border-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-white/80 transition-colors"
                >
                  <span className="font-bold text-slate-800 text-lg pr-4">{item.question}</span>
                  <span className={`text-[#1A56DB] transition-transform duration-300 ${faqAberto === i ? 'rotate-180' : ''}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    faqAberto === i ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-0">
              <span className="text-3xl font-black tracking-wider text-white">
                NEURO<span className="text-[#1d4e9e]">LOG</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              O Prontuário Eletrônico Inteligente que simplifica e revoluciona a gestão da sua clínica e a sua relação
              com o paciente.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold text-lg">Fale Conosco</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5543974000934"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                (43) 97400-0934
              </a>

              <a
                href="https://wa.me/5543996528272"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                (43) 99652-8272
              </a>

              <a
                href="https://www.instagram.com/neurolog.med"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @neurolog.med
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold text-lg">Suporte</h4>
            <p className="text-slate-400 text-sm">
              Precisa de ajuda ou quer agendar uma demonstração? Fale com a nossa equipe.
            </p>
            <a
              href="https://wa.link/9ekh0t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30 hover:bg-[#3b82f6] hover:text-white px-6 py-3 rounded-xl font-bold transition-all w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                  clipRule="evenodd"
                />
              </svg>
              Central de Ajuda
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Neuro-Log. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="/documentacao-legal#termos" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Termos de Uso
            </a>
            <a href="/documentacao-legal#privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Política de Privacidade
            </a>
            <button type="button" onClick={abrirPreferenciasCookies} className="hover:text-slate-300 transition-colors">
              Preferências de cookies
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL DE VIDEO */}
      {videoAberto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setVideoAberto(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoAberto(false)}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors font-bold"
            >
              X
            </button>
            <video
              src="/assets/demo-C21IEXB2.mp4"
              className="w-full h-auto max-h-[85vh] object-contain"
              controls
              autoPlay
              playsInline
            >
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      )}

      {/* MODAL DE FUNCIONALIDADE */}
      {featureAtiva && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/40 backdrop-blur-md px-4 transition-opacity"
          onClick={() => setFeatureAtiva(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl p-8 md:p-12 border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFeatureAtiva(null)}
              className="absolute top-6 right-6 z-10 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors font-bold"
            >
              X
            </button>
            <div className={`w-16 h-16 ${featureAtiva.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm`}>
              <div className="w-8 h-8 flex">{featureAtiva.icon}</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#092c77] mb-4">{featureAtiva.title}</h3>
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed">{featureAtiva.detailedDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;