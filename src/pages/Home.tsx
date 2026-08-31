import { Plus, Minus, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SplitText } from "../components/ui/split-text";
import { AnimatedButton } from "../components/ui/animated-button";
import { InteractiveTravelCard } from "../components/ui/3d-card";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWhatsAppLink = (message: string) => {
    const phone = "5519974070224";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const msgMentoria = "Olá, vim pelo site e quero entender se a Mentoria Radical faz sentido para o meu negócio.";
  const msgPalestra = "Olá, quero levar uma palestra do Empresário Radical para minha empresa.";
  const msgImersao = "Olá, gostaria de conhecer os formatos de imersão.";
  const msgGeral = "Olá, vim pelo site e gostaria de conversar com a equipe do Empresário Radical.";

  const faqs = [
    {
      question: "Como funciona o processo de mentoria?",
      answer: "A mentoria é um acompanhamento próximo e estratégico. Iniciamos com um diagnóstico profundo da sua operação (financeiro, vendas, equipe) e desenhamos um plano de ação focado em destravar o seu caixa e escalar com segurança."
    },
    {
      question: "A mentoria é para o meu tipo de negócio?",
      answer: "O método foi forjado no varejo, mas os princípios de gestão dura, vendas e escala se aplicam a qualquer negócio físico ou prestação de serviços. Se você tem equipe, vende para o consumidor final e quer crescer, sim, é para você."
    },
    {
      question: "Qual a duração do acompanhamento?",
      answer: "Trabalhamos com ciclos que variam de 3 a 6 meses, dependendo do grau de complexidade do seu cenário atual e dos objetivos traçados no plano de ação."
    },
    {
      question: "Vou ter acesso direto ao Empresário Radical?",
      answer: "Sim. A proposta da Mentoria Radical não é entregar vídeos gravados, mas sim experiência e acompanhamento lado a lado. Você terá reuniões estratégicas diretas."
    },
    {
      question: "Qual é o primeiro passo para começar?",
      answer: "Basta clicar em qualquer botão desta página e falar com nossa equipe no WhatsApp. Faremos uma qualificação inicial rápida para entender se é o momento certo para trabalharmos juntos."
    }
  ];

  const cases = [
    { 
      tag: "RECUPERAÇÃO DE CAIXA E PROCESSOS NO VAREJO",
      title: "Retomada de Caixa em 45 Dias",
      context: "Rede de lojas enfrentando estagnação nas vendas e margens espremidas.",
      diagnosis: "Estoque mal dimensionado e equipe de vendas sem acompanhamento diário de metas.",
      intervention: "Reestruturação da rotina da gerência, metas diárias e liquidação estratégica de estoque.",
      result: "Aumento rápido no fluxo de caixa e retomada da capacidade de investimento da empresa.",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
    },
    { 
      tag: "ESCALA E GESTÃO DE PESSOAS",
      title: "Independência do Dono",
      context: "Empresa de serviços estagnada no crescimento por dependência exclusiva do dono.",
      diagnosis: "Falta de delegação, lideranças não preparadas e ausência de indicadores operacionais.",
      intervention: "Treinamento intensivo da liderança imediata e implementação de painéis de controle.",
      result: "O dono retomou o papel estratégico, e a empresa abriu duas novas filiais no mesmo semestre.",
      img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      tag: "SOBREVIVÊNCIA EM CENÁRIO DE CRISE",
      title: "Estancamento da Queda em 45 Dias",
      context: "Comércio local perdendo clientes rapidamente para novos concorrentes na região.",
      diagnosis: "Posicionamento confuso e experiência do cliente abaixo do padrão exigido pelo novo mercado.",
      intervention: "Mudança pragmática no atendimento, readequação do mix de produtos e corte de custos fixos desnecessários.",
      result: "Estancamento da queda em 45 dias e retorno ao ponto de equilíbrio financeiro.",
      img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0D0D0F] font-sans selection:bg-[#D9002B] selection:text-white">
      
      {/* 1. NAVIGATION */}
      <nav className={`fixed w-full top-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent'}`}>
        <div className={`text-lg md:text-xl font-sans font-bold tracking-widest uppercase flex items-center gap-1 transition-colors ${isScrolled ? 'text-[#0D0D0F]' : 'text-white'}`}>
          EMPRESÁRIO RADICAL <span className="text-[#D9002B] text-2xl font-light leading-none">√</span>
        </div>
        <div className={`hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}>
          <a href="#historia" className="hover:text-[#D9002B] transition-colors">História</a>
          <a href="#filosofia" className="hover:text-[#D9002B] transition-colors">Filosofia</a>
          <a href="#servicos" className="hover:text-[#D9002B] transition-colors">Serviços</a>
          <a href="#legado" className="hover:text-[#D9002B] transition-colors">Resultados</a>
        </div>
        <a href={getWhatsAppLink(msgGeral)} target="_blank" rel="noopener noreferrer" className={`hidden md:inline-block px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'bg-[#0A0A0A] text-white hover:bg-[#D9002B]' : 'bg-white text-[#0A0A0A] hover:bg-gray-200'}`}>
          Falar com a equipe
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative overflow-hidden min-h-[90vh] flex items-center pt-20">
        
        {/* Hero Background Image (Layer 0) */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-[70%_top] md:bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://res.cloudinary.com/ifuatk2z/image/upload/v1787953748/radical.png')` }}
          />
          {/* Left Black Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 md:via-[#0A0A0A]/70 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row gap-16 lg:items-end relative pointer-events-auto px-6 md:px-12 pt-16 pb-24">
          <div className="w-full lg:w-3/5 z-10 relative">
            <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Manifesto de chão de loja</span>
            
            <svg width="120" height="40" viewBox="0 0 120 40" className="mb-8 opacity-90">
              <path 
                d="M0 20 L 30 20 L 40 5 L 50 35 L 65 10 L 75 20 L 120 20" 
                fill="none" 
                stroke="#D9002B" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                pathLength="100"
                className="heartbeat-path"
              />
            </svg>

            <SplitText 
              text="DA BARRACA AOS 7 <br/> ANOS À <br/> CONSTRUÇÃO DE <br/> MAIS DE 100 LOJAS."
              className="font-sans font-bold text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] leading-[1.05] text-white mb-6 tracking-tight uppercase"
              delay={0.1}
            />
            <p className="font-sans font-semibold text-gray-300 text-base md:text-lg lg:text-xl max-w-xl leading-snug uppercase tracking-tight mt-6">
              SEU NEGÓCIO NÃO PRECISA TERMINAR NA CRISE.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="w-full lg:w-2/5 lg:pb-4 z-[99] relative"
          >
            <p className="text-gray-400 mb-10 font-light text-base md:text-lg leading-relaxed">
              Com +40 anos de experiência no varejo, ajudamos empresários a recuperar clareza, caixa e direção para voltar a crescer de forma estruturada.
            </p>
            <AnimatedButton href={getWhatsAppLink(msgGeral)} target="_blank" rel="noopener noreferrer">
              Converse com a equipe sobre o seu cenário
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Hero Foreground Overlap Image (Layer 20) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-[70%_top] md:bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://res.cloudinary.com/ifuatk2z/image/upload/v1787953748/radicalsobreposto.png')` }}
          />
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent z-30 pointer-events-none"></div>
      </header>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 z-50 md:hidden flex justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <AnimatedButton href={getWhatsAppLink(msgGeral)} target="_blank" rel="noopener noreferrer" className="w-full text-center py-4">
          Falar com a equipe
        </AnimatedButton>
      </div>

      {/* 3. AUTORIDADE */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex justify-start perspective-[1000px]">
            <InteractiveTravelCard 
              imageUrl="https://res.cloudinary.com/ifuatk2z/image/upload/v1787959764/edmarBANNER4.png" 
              className="w-full h-auto aspect-square md:aspect-[4/3] rounded-2xl shadow-none border-none bg-transparent"
              imageClassName="object-cover md:object-right scale-x-[-1]"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-sans font-semibold text-5xl md:text-6xl lg:text-7xl text-white mb-10 leading-tight tracking-tight">+40 anos de experiência no varejo.</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-16">
              A autoridade deve vir da experiência real; a credibilidade, da trajetória e dos resultados. O mercado tem muitos teóricos, mas poucos com a casca grossa de quem já quebrou, reconstruiu e escalou múltiplas empresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-16">
              <div>
                <div className="font-sans font-bold tracking-tighter text-6xl md:text-7xl text-[#D9002B] mb-2">100+</div>
                <div className="text-xs font-sans font-bold uppercase tracking-widest text-gray-500">Lojas Construídas</div>
              </div>
              <div>
                <div className="font-sans font-bold tracking-tighter text-6xl md:text-7xl text-[#D9002B] mb-2">4+</div>
                <div className="text-xs font-sans font-bold uppercase tracking-widest text-gray-500">Décadas de Operação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COM QUEM EU FALO */}
      <section className="pb-32 pt-16 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-[1300px] mx-auto">
          <div className="w-full h-[1px] bg-[#222] mb-16"></div>
          <h3 className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-12">Com quem eu falo?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111] border border-[#222] p-12 md:p-16">
              <h4 className="text-white font-sans text-3xl font-semibold mb-6">Empreendedores em Ascensão</h4>
              <p className="text-gray-400 font-light text-lg leading-relaxed">Pessoas que estão começando a empreender e precisam da base sólida que apenas a experiência de trincheira pode dar.</p>
            </div>
            <div className="bg-[#111] border border-[#222] p-12 md:p-16">
              <h4 className="text-white font-sans text-3xl font-semibold mb-6">Empresas em Dificuldade</h4>
              <p className="text-gray-400 font-light text-lg leading-relaxed">Pessoas que já empreendem, mas enfrentam dificuldades, vendas travadas, e reconhecem que precisam de mudança e redirecionamento urgente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A REALIDADE DO CHÃO DE LOJA */}
      <section className="py-32 px-6 md:px-12 bg-[#EAEAEA]">
         <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-12 md:items-center">
            <div className="w-full md:w-1/2">
              <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Linha de Frente</span>
              <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-7xl text-[#0A0A0A]">A realidade do chão de loja.</h2>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <p className="text-gray-500 font-light text-xl leading-relaxed">
                A gestão que sustenta a expansão de mais de 100 unidades não se faz atrás de uma mesa. É vivência, barro na bota e acompanhamento diário.
              </p>
            </div>
         </div>
      </section>

      {/* 6. QUOTE & HISTÓRIA */}
      <section id="historia" className="pt-40 pb-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto text-center mb-40">
          <h2 className="font-serif italic text-3xl md:text-5xl lg:text-[64px] text-[#0A0A0A] leading-[1.2] mb-16">
            "O conceito de ser radical é ter uma mentalidade sem limites. É sobre não aceitar a estagnação."
          </h2>
          <div className="w-12 h-[1px] bg-[#D9002B] mx-auto mb-16"></div>
          <p className="text-gray-500 font-light text-xl leading-relaxed max-w-3xl mx-auto">
            A diferença entre quem fecha as portas na primeira crise e quem constrói um legado de décadas é a disposição para enfrentar o desconforto, rasgar o planejamento que não funciona mais e agir rápido.
          </p>
        </div>

        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
           <div>
              <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">A Origem</span>
              <h3 className="font-sans font-semibold tracking-tight text-4xl md:text-5xl text-[#0A0A0A] mb-8">O ano em que a gente quase quebrou.</h3>
              <p className="text-gray-500 font-light text-lg leading-relaxed mb-6">
                A trajetória empreendedora começou ainda na infância, aos 7 anos, com vendas realizadas com um tabuleiro da mãe. O trabalho desde cedo foi a base absoluta para a formação de um império no varejo. 
              </p>
              <p className="text-gray-500 font-light text-lg leading-relaxed">
                Mas a história real não é feita apenas de conquistas e números bonitos. Ela passa pelos momentos de dificuldade, crises pesadas e a capacidade de reconstrução. A verdadeira experiência prática que forja a autoridade nasce nos recomeços.
              </p>
           </div>
           <div>
              <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">A Prática</span>
              <h3 className="font-sans font-semibold tracking-tight text-4xl md:text-5xl text-[#0A0A0A] mb-8">Energia é ferramenta de gestão.</h3>
              <p className="text-gray-500 font-light text-lg leading-relaxed mb-6">
                O diferencial está na combinação de experiência empresarial prática com a trajetória de vida real. É a capacidade de tomar decisões em cenários difíceis e ter visão para oportunidades em diferentes negócios. 
              </p>
              <p className="text-gray-500 font-light text-lg leading-relaxed">
                A comunicação tem que ser humana, acessível e inspiradora, mas sem perder a firmeza e a ousadia. A proximidade e a disposição para estar junto do empreendedor são o que garantem que o processo de transformação realmente aconteça.
              </p>
           </div>
        </div>
      </section>

      {/* 7. ECOSSISTEMA */}
      <section className="py-32 px-6 md:px-12 bg-[#F5F5F5]" id="servicos">
         <div className="max-w-[1300px] mx-auto">
            <div className="mb-20">
              <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Ecossistema</span>
              <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-7xl text-[#0A0A0A] mb-6">Como trabalhar conosco</h2>
              <p className="text-gray-500 font-light text-xl">O ecossistema de reconstrução e crescimento.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
               
               {/* Mentoria */}
               <div className="bg-white p-12 lg:p-16 flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
                  <span className="text-[#D9002B] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">O Programa Principal</span>
                  <h3 className="font-sans font-semibold text-3xl text-[#0A0A0A] mb-6">Mentoria Radical</h3>
                  <p className="text-gray-500 font-light text-sm mb-10 leading-relaxed">Uma abordagem imersiva combinando reconstrução e recuperação financeira, processos claros de gestão, tomada de decisões guiada, acompanhamento do empreendedor e estratégia real de crescimento.</p>

                  <div className="mb-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] mb-4">Escopo & Formato</h4>
                    <ul className="space-y-4 text-sm text-gray-600 font-light">
                      <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Diagnóstico inicial detalhado</li>
                      <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Encontros estratégicos diretos</li>
                      <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Plano de ação e indicadores</li>
                      <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Ciclos de 3 a 6 meses</li>
                    </ul>
                  </div>
                  <div className="mb-12 flex-grow">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] mb-4">Para quem é</h4>
                    <ul className="space-y-4 text-sm text-gray-600 font-light">
                      <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Empresas com caixa travado</li>
                      <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Empreendedores em transição</li>
                      <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Operações prontas para escala</li>
                    </ul>
                  </div>

                  <AnimatedButton href={getWhatsAppLink(msgMentoria)} target="_blank" rel="noopener noreferrer" className="w-full text-center py-5">
                    Aplicar para Mentoria
                  </AnimatedButton>
               </div>

               {/* Palestras */}
               <div className="bg-white p-12 lg:p-16 flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="font-sans font-semibold text-3xl text-[#0A0A0A] mb-6 mt-10">Palestras</h3>
                  <p className="text-gray-500 font-light text-sm mb-10 leading-relaxed">Destinadas a empresas corporativas que precisam de alinhamento, mudança comportamental e uma visão pragmática da operação para suas equipes.</p>

                  <ul className="space-y-4 text-sm text-gray-600 font-light mb-12 flex-grow">
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Formato: Evento presencial in-company.</li>
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Público: Equipes comerciais, gerenciais e lideranças.</li>
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Foco: Engajamento, vendas e cultura de resultados.</li>
                  </ul>

                  <a href={getWhatsAppLink(msgPalestra)} target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-[#0A0A0A] text-[#0A0A0A] py-5 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors rounded-sm">
                    Levar palestra para a empresa
                  </a>
               </div>

               {/* Imersões */}
               <div className="bg-white p-12 lg:p-16 flex flex-col">
                  <h3 className="font-sans font-semibold text-3xl text-[#0A0A0A] mb-6 mt-10">Imersões</h3>
                  <p className="text-gray-500 font-light text-sm mb-10 leading-relaxed">Ambiente intensivo para mapeamento rápido de processos. A proposta é oferecer dedicação lado a lado para redesenhar a rota da empresa em curto prazo.</p>

                  <ul className="space-y-4 text-sm text-gray-600 font-light mb-12 flex-grow">
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Formato: Encontros intensivos (1 a 2 dias).</li>
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Público: Grupos focados ou conselhos de diretoria.</li>
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Foco: Diagnóstico imediato e plano de ação tático.</li>
                  </ul>

                  <a href={getWhatsAppLink(msgImersao)} target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-[#0A0A0A] text-[#0A0A0A] py-5 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors rounded-sm">
                    Consultar formatos
               </a>
               </div>
            </div>
         </div>
      </section>

      {/* 8. ENERGIA */}
      <section className="py-48 px-6 md:px-12 bg-[#0A0A0A] text-center">
         <div className="max-w-[800px] mx-auto">
            <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-7xl text-white mb-8">A energia da mudança ao vivo.</h2>
            <p className="text-gray-400 font-light text-xl leading-relaxed">Experiência de palco validada por milhares de pessoas. As palestras e imersões carregam a intensidade necessária para quebrar a estagnação.</p>
         </div>
      </section>

      {/* 9. RESULTADOS REAIS */}
      <section className="py-32 px-6 md:px-12 bg-white" id="legado">
         <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/4 lg:sticky lg:top-32 self-start">
               <h2 className="font-sans font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] mb-6">Resultados Reais</h2>
               <p className="text-gray-500 font-light text-lg">Avaliações e cases. Dados em validação.</p>
            </div>
            <div className="w-full lg:w-3/4 space-y-24">
               {cases.map((c, i) => (
                  <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                     <div className="w-full md:w-1/2 overflow-hidden shrink-0 perspective-[1000px] flex justify-center items-center">
                        <InteractiveTravelCard 
                          title={c.title}
                          subtitle={c.tag}
                          imageUrl={c.img}
                          className="w-full h-[300px] md:h-[400px] rounded-none shadow-none border-none bg-transparent"
                          imageClassName="grayscale opacity-90 rounded-none"
                        />
                     </div>
                     <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] bg-gray-100 px-3 py-1.5 self-start mb-6 rounded-none">{c.tag}</span>
                        <h4 className="font-sans font-semibold text-2xl md:text-3xl text-[#0A0A0A] mb-8">{c.title}</h4>
                        <div className="space-y-4 text-[15px] font-light text-gray-600 leading-relaxed">
                           <p><strong className="font-semibold text-[#0A0A0A]">Contexto:</strong> {c.context}</p>
                           <p><strong className="font-semibold text-[#0A0A0A]">Diagnóstico:</strong> {c.diagnosis}</p>
                           <p><strong className="font-semibold text-[#0A0A0A]">Intervenção:</strong> {c.intervention}</p>
                           <p><strong className="font-semibold text-[#0A0A0A]">Resultado:</strong> {c.result}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-32 px-6 md:px-12 bg-[#0A0A0A] text-white">
         <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-24">
               <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-6xl text-white mb-6">Perguntas Frequentes</h2>
               <p className="text-gray-400 font-light text-lg">Tire suas dúvidas sobre o processo de Mentoria Radical.</p>
            </div>
            <div>
               {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#222]">
                     <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)} 
                      className="w-full py-8 flex justify-between items-center text-left"
                     >
                        <span className="font-sans font-semibold text-lg md:text-xl">{faq.question}</span>
                        {openFaq === index ? <Minus className="text-[#D9002B] flex-shrink-0" size={24} /> : <Plus className="text-[#D9002B] flex-shrink-0" size={24} />}
                     </button>
                     <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-400 font-light text-lg leading-relaxed pr-12">{faq.answer}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11. CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#0A0A0A] text-white text-center">
         <div className="max-w-[1000px] mx-auto flex flex-col items-center">
            <h2 className="font-sans font-bold uppercase tracking-tight text-4xl md:text-6xl lg:text-[70px] leading-[1.1] mb-12">
               SE ELE CONSEGUIU PASSAR POR TUDO ISSO, TALVEZ CONSIGA ME AJUDAR A RECONSTRUIR MEU NEGÓCIO.
            </h2>
            <p className="font-light text-white text-lg md:text-xl mb-16 max-w-2xl leading-relaxed">
               Não existem formulários longos ou intermediários. Se você entende que precisa de direção e mudança, clique abaixo e fale diretamente com nossa equipe.
            </p>
            <AnimatedButton href={getWhatsAppLink(msgGeral)} target="_blank" rel="noopener noreferrer" className="mb-8">
               Falar no WhatsApp
            </AnimatedButton>
            <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Promessa de resposta em até 2 horas úteis.</p>
         </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-white pt-24 pb-12 px-6 md:px-12">
         <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
               <div className="md:col-span-2">
                  <div className="text-xl font-sans font-bold tracking-widest uppercase flex items-center gap-1 mb-6 text-[#0D0D0F]">
                     EMPRESÁRIO RADICAL <span className="text-[#D9002B] text-3xl font-light leading-none">√</span>
                  </div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] leading-loose max-w-sm">
                     Mentoria e gestão de alto nível. Uma narrativa baseada em uma história de vida real com legado e resultados comprovados.
                  </p>
               </div>
               <div>
                  <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-8">Serviços</h5>
                  <ul className="space-y-5 text-sm font-semibold text-[#0A0A0A]">
                     <li><a href="#servicos" className="hover:text-[#D9002B] transition-colors">Mentoria Radical</a></li>
                     <li><a href="#servicos" className="hover:text-[#D9002B] transition-colors">Palestras</a></li>
                     <li><a href="#servicos" className="hover:text-[#D9002B] transition-colors">Imersões</a></li>
                  </ul>
               </div>
               <div>
                  <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-8">Conectar</h5>
                  <ul className="space-y-5 text-sm font-semibold text-[#0A0A0A]">
                     <li><a href={getWhatsAppLink(msgGeral)} target="_blank" rel="noopener noreferrer" className="hover:text-[#D9002B] transition-colors">WhatsApp</a></li>
                     <li><a href="https://www.instagram.com/empresario.radical/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9002B] transition-colors">Instagram</a></li>
                     <li><a href="#" className="hover:text-[#D9002B] transition-colors">LinkedIn</a></li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-gray-100 text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">
               <p>© {new Date().getFullYear()} EMPRESÁRIO RADICAL. TODOS OS DIREITOS RESERVADOS.</p>
               <Link to="/politica-de-privacidade" className="hover:text-[#0A0A0A] underline decoration-gray-300 underline-offset-4">Privacidade</Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
