import { ArrowRight, Play, Volume2, CheckCircle2, ChevronDown, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "COMO FUNCIONA O PROCESSO DE MENTORIA?",
      answer: "A mentoria é um acompanhamento próximo e estratégico. Iniciamos com um diagnóstico profundo da sua operação (financeiro, vendas, equipe) e desenhamos um plano de ação focado em destravar o seu caixa e escalar com segurança."
    },
    {
      question: "A MENTORIA É PARA O MEU TIPO DE NEGÓCIO?",
      answer: "O método foi forjado no varejo, mas os princípios de gestão dura, vendas e escala se aplicam a qualquer negócio físico ou prestação de serviços. Se você tem equipe, vende para o consumidor final e quer crescer, sim, é para você."
    },
    {
      question: "QUAL A DURAÇÃO DO ACOMPANHAMENTO?",
      answer: "Trabalhamos com ciclos que variam de 3 a 6 meses, dependendo do grau de complexidade do seu cenário atual e dos objetivos traçados no plano de ação."
    },
    {
      question: "VOU TER ACESSO DIRETO AO EMPRESÁRIO RADICAL?",
      answer: "Sim. A proposta da Mentoria Radical não é entregar vídeos gravados, mas sim experiência e acompanhamento lado a lado. Você terá reuniões estratégicas diretas."
    },
    {
      question: "QUAL É O PRIMEIRO PASSO PARA COMEÇAR?",
      answer: "Basta clicar em qualquer botão desta página e falar com nossa equipe no WhatsApp. Faremos uma qualificação inicial rápida para entender se é o momento certo para trabalharmos juntos."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0D0D0F] font-sans selection:bg-[#E5372B] selection:text-white pb-16 md:pb-0">
      
      {/* FIXED MOBILE CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-center">
        <a 
          href="#contato"
          className="flex items-center justify-center gap-2 bg-[#E5372B] text-white w-full py-3.5 rounded-full font-condensed font-black uppercase tracking-widest text-sm"
        >
          <MessageSquare size={16} /> Falar no WhatsApp
        </a>
      </div>

      {/* 1. NAVIGATION */}
      <nav className="absolute w-full top-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 text-white">
        <div className="text-xl md:text-2xl font-condensed font-black tracking-widest uppercase flex items-center gap-1">
          EMPRESÁRIO <span className="text-[#E5372B]">RADICAL</span> <span className="text-[#E5372B] text-3xl font-sans font-light leading-none">√</span>
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-condensed tracking-widest uppercase opacity-80">
          <a href="#historia" className="hover:text-white hover:opacity-100 transition-all">História</a>
          <a href="#filosofia" className="hover:text-white hover:opacity-100 transition-all">Filosofia</a>
          <a href="#servicos" className="hover:text-white hover:opacity-100 transition-all">Serviços</a>
          <a href="#legado" className="hover:text-white hover:opacity-100 transition-all">Resultados</a>
        </div>
        <a 
          href="#contato"
          className="hidden md:block bg-white text-[#0D0D0F] px-6 py-3 rounded-full font-condensed font-black uppercase tracking-widest hover:bg-[#E5372B] hover:text-white transition-colors text-sm"
        >
          Falar com a equipe
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative h-[95vh] min-h-[750px] flex flex-col items-center justify-center text-center px-6 bg-[#0D0D0F] pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2832&auto=format&fit=crop" 
            alt="Empresário Radical em ação" 
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto -mt-20">
          <span className="inline-block px-5 py-1.5 rounded-full border border-white/20 text-white/80 font-condensed font-black uppercase tracking-widest mb-6 backdrop-blur-sm text-sm">
            História de vida real com legado
          </span>
          <h1 className="font-condensed font-black uppercase text-6xl md:text-8xl lg:text-[140px] leading-[0.8] tracking-tight mb-8 text-white">
            RADICAL<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>SEM LIMITE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed font-light">
            Da barraca aos 7 anos de idade à construção de mais de 100 lojas. Não se limite pelas circunstâncias, enfrente os desafios e continue avançando.
          </p>
        </div>
      </header>

      {/* 3. AUTORIDADE & PÚBLICO-ALVO */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 -mt-24 mb-24">
        <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-condensed font-black uppercase text-5xl md:text-7xl mb-6 text-[#0D0D0F] leading-[0.9]">
              58 ANOS DE <span className="text-transparent" style={{ WebkitTextStroke: '1px #0D0D0F' }}>EXPERIÊNCIA</span> NO VAREJO.
            </h2>
            <p className="text-gray-500 font-sans text-xl leading-relaxed mb-8">
              A autoridade deve vir da experiência real; a credibilidade, da trajetória e dos resultados. O mercado tem muitos teóricos, mas poucos com a casca grossa de quem já quebrou, reconstruiu e escalou múltiplas empresas.
            </p>
            <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="font-condensed font-black text-4xl text-[#0D0D0F] mb-1">100+</div>
                <div className="text-sm font-condensed uppercase tracking-widest text-[#E5372B]">Lojas Construídas</div>
              </div>
              <div>
                <div className="font-condensed font-black text-4xl text-[#0D0D0F] mb-1">5</div>
                <div className="text-sm font-condensed uppercase tracking-widest text-[#E5372B]">Décadas de Operação</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#F8FAFC] rounded-[30px] p-8 md:p-12 border border-gray-100">
            <span className="text-[#1E5AE8] font-condensed font-black tracking-widest uppercase mb-6 block">Com quem eu falo?</span>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#1E5AE8] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-condensed font-black uppercase text-xl mb-1 text-[#0D0D0F]">Empreendedores em ascensão</h4>
                  <p className="text-sm text-gray-500">Pessoas que estão começando a empreender e precisam da base sólida que apenas a experiência de trincheira pode dar.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#1E5AE8] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-condensed font-black uppercase text-xl mb-1 text-[#0D0D0F]">Empresas em dificuldade</h4>
                  <p className="text-sm text-gray-500">Pessoas que já empreendem, mas enfrentam dificuldades, vendas travadas, e reconhecem que precisam de mudança e redirecionamento urgente.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. FILOSOFIA E MANEIRA DE PENSAR */}
      <section id="filosofia" className="py-24 max-w-[1000px] mx-auto px-6 text-center mb-12">
        <span className="text-[#E5372B] font-condensed font-black tracking-widest uppercase mb-6 block">Filosofia Empresarial</span>
        <h2 className="font-condensed font-black uppercase text-4xl md:text-6xl text-[#0D0D0F] leading-[1.1] mb-10">
          "O CONCEITO DE SER RADICAL É TER UMA MENTALIDADE SEM LIMITES. É SOBRE NÃO ACEITAR A ESTAGNAÇÃO."
        </h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
          A diferença entre quem fecha as portas na primeira crise e quem constrói um legado de décadas é a disposição para enfrentar o desconforto, rasgar o planejamento que não funciona mais e agir rápido.
        </p>
      </section>

      {/* 5. ZIG-ZAG HISTORY */}
      <section id="historia" className="py-12 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 overflow-hidden">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="text-[#E5372B] font-condensed font-black tracking-widest uppercase mb-4 block">A Origem</span>
            <h2 className="font-condensed font-black uppercase text-5xl md:text-7xl leading-[0.9] mb-8 text-[#0D0D0F]">
              O ANO EM QUE A GENTE <span className="text-[#E5372B]">QUASE QUEBROU</span>.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                A trajetória empreendedora começou ainda na infância, aos 7 anos, com vendas realizadas com um tabuleiro da mãe. O trabalho desde cedo foi a base absoluta para a formação de um império no varejo.
              </p>
              <p>
                Mas a história real não é feita apenas de conquistas e números bonitos. Ela passa pelos momentos de dificuldade, crises pesadas e a capacidade de reconstrução. A verdadeira experiência prática que forja a autoridade nasce nos recomeços.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-[#E5372B] rounded-tl-[140px] rounded-bl-3xl rounded-tr-3xl rounded-br-[140px] transform translate-x-4 translate-y-4 -z-10 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
              alt="Reunião estratégica" 
              className="w-full h-[600px] object-cover rounded-tl-[140px] rounded-bl-3xl rounded-tr-3xl rounded-br-[140px] shadow-2xl grayscale contrast-125"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#1E5AE8] rounded-tr-[140px] rounded-br-3xl rounded-tl-3xl rounded-bl-[140px] transform -translate-x-4 translate-y-4 -z-10 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Visão de negócios" 
              className="w-full h-[600px] object-cover rounded-tr-[140px] rounded-br-3xl rounded-tl-3xl rounded-bl-[140px] shadow-2xl grayscale contrast-125"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#1E5AE8] font-condensed font-black tracking-widest uppercase mb-4 block">A Prática</span>
            <h2 className="font-condensed font-black uppercase text-5xl md:text-7xl leading-[0.9] mb-8 text-[#0D0D0F]">
              ENERGIA É FERRAMENTA DE <span className="text-[#1E5AE8]">GESTÃO</span>.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                O diferencial está na combinação de experiência empresarial prática com a trajetória de vida real. É a capacidade de tomar decisões em cenários difíceis e ter visão para oportunidades em diferentes negócios.
              </p>
              <p>
                A comunicação tem que ser humana, acessível e inspiradora, mas sem perder a firmeza e a ousadia. A proximidade e a disposição para estar junto do empreendedor são o que garantem que o processo de transformação realmente aconteça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPANDED SERVICES SECTION */}
      <section id="servicos" className="py-32 px-4 sm:px-6 bg-white border-y border-gray-100 mt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#1E5AE8] font-condensed font-black tracking-widest uppercase mb-4 block">Como trabalhar conosco</span>
            <h2 className="font-condensed font-black uppercase text-5xl md:text-6xl text-[#0D0D0F]">
              O ECOSSISTEMA DE RECONSTRUÇÃO E CRESCIMENTO
            </h2>
          </div>

          {/* Mentorship - Highlighted Full-Width Block */}
          <div className="bg-[#0D0D0F] rounded-[40px] p-10 md:p-16 lg:p-20 text-white mb-8 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-white font-condensed font-black uppercase tracking-widest mb-6 text-xs">
                O Programa Principal
              </span>
              <h3 className="font-condensed font-black uppercase text-5xl md:text-7xl leading-[0.9] mb-6">
                MENTORIA <span className="text-[#1E5AE8]">RADICAL</span>
              </h3>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-8">
                Uma abordagem imersiva combinando reconstrução e recuperação financeira, gestão dura, tomada de decisões, acompanhamento do empreendedor e estratégia real de crescimento.
              </p>
              <ul className="space-y-4 mb-10 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1E5AE8]" size={20} /> Recuperação de caixas travados</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1E5AE8]" size={20} /> Gestão de pessoas no chão da operação</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1E5AE8]" size={20} /> Estratégia de expansão e novas lojas</li>
              </ul>
              <a href="#contato" className="inline-flex items-center justify-center gap-3 bg-white text-[#0D0D0F] px-8 py-4 rounded-full font-condensed font-black uppercase tracking-widest hover:bg-[#1E5AE8] hover:text-white transition-colors w-full sm:w-auto">
                Aplicar para Mentoria <ArrowRight size={20} />
              </a>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
                alt="Mentoria Radical"
                className="w-full h-full object-cover rounded-[30px] grayscale opacity-70"
              />
            </div>
          </div>

          {/* Palestras & Imersões - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-[40px] p-10 md:p-16">
              <div className="w-16 h-16 rounded-2xl bg-white text-[#0D0D0F] shadow-sm flex items-center justify-center mb-8 border border-gray-100">
                <Volume2 size={32} />
              </div>
              <h3 className="font-condensed font-black uppercase text-4xl mb-4 text-[#0D0D0F]">PALESTRAS</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Destinadas a pessoas físicas ou empresas corporativas que sentem e entendem que precisam de mudança comportamental e operacional. Uma injeção de realidade.
              </p>
              <a href="#contato" className="text-[#0D0D0F] font-condensed font-black uppercase tracking-widest flex items-center gap-2 hover:text-[#1E5AE8] transition-colors border-b-2 border-transparent hover:border-[#1E5AE8] pb-1 w-fit">
                Levar palestra para a empresa <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-[40px] p-10 md:p-16">
              <div className="w-16 h-16 rounded-2xl bg-white text-[#0D0D0F] shadow-sm flex items-center justify-center mb-8 border border-gray-100">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-condensed font-black uppercase text-4xl mb-4 text-[#0D0D0F]">IMERSÕES</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Formatos individuais ou em grupo, com duração variável. A proposta é oferecer experiência, dedicação e suporte lado a lado para desenhar a recuperação da empresa.
              </p>
              <a href="#contato" className="text-[#0D0D0F] font-condensed font-black uppercase tracking-widest flex items-center gap-2 hover:text-[#1E5AE8] transition-colors border-b-2 border-transparent hover:border-[#1E5AE8] pb-1 w-fit">
                Consultar formatos <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL CUSTOMER REVIEWS / CASES */}
      <section id="legado" className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
          <h2 className="font-condensed font-black uppercase text-4xl md:text-5xl text-[#0D0D0F]">
            Resultados Reais
          </h2>
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Avaliações e Cases
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { role: 'Diretor Comercial', title: 'Visão de expansão', text: '"A gestão no chão de loja transformou os nossos resultados de forma absurda em 3 meses."' },
            { role: 'Gerente Geral', title: 'Recuperação de caixa', text: '"A capacidade de recalcular a rota durante a crise salvou a nossa operação num momento muito crítico."' },
            { role: 'Sócio Investidor', title: 'Autoridade prática', text: '"É autoridade que não vem de diploma, mas da experiência brutal de quem construiu o que ele construiu."' },
            { role: 'Mentorado', title: 'Quebrando limites', text: '"A mentoria me fez entender exatamente onde minha loja estava travando e o que precisava mudar na gestão."' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden">
              <div className="h-48 relative rounded-2xl overflow-hidden mb-6">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=800&auto=format&fit=crop`} 
                  alt={`Avaliação de cliente - ${item.title}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[#0D0D0F] p-2.5 rounded-xl shadow-lg flex items-center gap-2 group-hover:bg-[#E5372B] group-hover:text-white transition-colors">
                  <Play size={16} className="fill-current" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Ver Case</span>
                </div>
              </div>
              
              <h4 className="font-condensed font-black uppercase text-xl text-[#0D0D0F] mb-1 leading-tight">{item.title}</h4>
              <p className="text-sm text-gray-500 font-sans leading-relaxed mb-4 flex-grow italic">{item.text}</p>
              
              <div className="flex items-center gap-2 text-xs font-condensed uppercase tracking-widest text-[#E5372B] pt-4 border-t border-gray-100">
                <Volume2 size={14} /> {item.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-condensed font-black uppercase text-4xl md:text-5xl text-[#0D0D0F]">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-500 mt-4">Tire suas dúvidas sobre o processo de Mentoria Radical.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[24px] border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  aria-expanded={openFaq === index}
                >
                  <h4 className="font-condensed font-black uppercase text-xl text-[#0D0D0F] pr-8">{faq.question}</h4>
                  <ChevronDown 
                    size={24} 
                    className={`text-[#E5372B] shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA BLOCK */}
      <section id="contato" className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-32">
        <div className="bg-[#17171B] rounded-[40px] p-10 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-40 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="w-full lg:w-7/12 relative z-10">
            <h2 className="font-condensed font-black uppercase text-5xl md:text-7xl leading-[0.9] text-white mb-6">
              SE ELE CONSEGUIU<br/>
              PASSAR POR TUDO ISSO, <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>TALVEZ CONSIGA ME AJUDAR A RECONSTRUIR MEU NEGÓCIO.</span>
            </h2>
            <p className="text-lg text-gray-400 font-light font-sans max-w-xl">
              Não existem formulários longos ou intermediários. Se você entende que precisa de direção e mudança, clique abaixo e fale diretamente com nossa equipe.
            </p>
          </div>

          <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-end relative z-10 gap-4">
            <a 
              href="https://wa.me/seunumerodeexemplo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0D0D0F] px-8 py-5 rounded-full font-condensed font-black uppercase tracking-widest text-lg hover:bg-[#E5372B] hover:text-white transition-all shadow-xl hover:scale-105 w-full sm:w-auto"
            >
              Falar no WhatsApp <ArrowRight size={20} />
            </a>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#E5372B]" /> 
              Promessa de resposta em até 2 horas.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-white border-t border-gray-200 pt-20 pb-10 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-condensed font-black tracking-widest uppercase flex items-center gap-1 mb-6 text-[#0D0D0F]">
                EMPRESÁRIO <span className="text-[#E5372B]">RADICAL</span> <span className="text-[#E5372B] text-4xl font-sans font-light leading-none">√</span>
              </div>
              <p className="text-gray-500 max-w-sm font-light">
                Mentoria e gestão de alto nível. Uma narrativa baseada em uma história de vida real com legado e resultados comprovados.
              </p>
            </div>
            
            <div>
              <h5 className="font-condensed font-black uppercase tracking-widest mb-6 text-[#0D0D0F]">Serviços</h5>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#servicos" className="hover:text-[#E5372B] transition-colors">Mentoria Radical</a></li>
                <li><a href="#servicos" className="hover:text-[#E5372B] transition-colors">Palestras</a></li>
                <li><a href="#servicos" className="hover:text-[#E5372B] transition-colors">Imersões</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-condensed font-black uppercase tracking-widest mb-6 text-[#0D0D0F]">Conectar</h5>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#E5372B] transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-[#E5372B] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#E5372B] transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 text-xs text-gray-400 font-condensed tracking-widest uppercase">
            <p>© {new Date().getFullYear()} Empresário Radical. Todos os direitos reservados.</p>
            <p className="flex gap-4">
              <Link to="/politica-de-privacidade" className="hover:text-[#0D0D0F]">Privacidade</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
