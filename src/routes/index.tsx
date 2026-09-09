import { createFileRoute } from "@tanstack/react-router";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Activity, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CoverFlowCarousel } from "@/components/ui/3-d-coverflow-carousel";
import mentor from "@/assets/mentor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Empresário Radical | Mentoria, Imersões e Palestras" },
      {
        name: "description",
        content:
          "Gestão que vai à raiz do negócio: mentoria empresarial, imersões de decisão crítica e palestras corporativas para transformar problemas em decisões e decisões em resultado.",
      },
      { property: "og:title", content: "Empresário Radical | Mentoria, Imersões e Palestras" },
      {
        property: "og:description",
        content:
          "Sua empresa pode vender e não ter margem. O Empresário Radical vai à raiz para transformar decisões em resultado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const nav = [
  { id: "raiz", label: "Sintoma vs. Raiz" },
  { id: "radical", label: "Ser Radical" },
  { id: "autoridade", label: "Autoridade" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "solucoes", label: "Soluções" },
  { id: "faq", label: "FAQ" },
];

const sintomas = [
  {
    title: "Vendas e Margem",
    text: "Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/6365.jpg"
  },
  {
    title: "Processos e Equipe",
    text: "Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/4239672.jpg"
  },
  {
    title: "Crescimento e Caixa",
    text: "Mais clientes sem controle aumentam o faturamento, mas também o problema de caixa.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/70656.jpg"
  },
  {
    title: "Dependência Central",
    text: "Empresa que depende do dono para tudo até cresce. Mas dificilmente cresce saudável.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/47879.jpg"
  },
];

const cenarios = [
  "Vende, fatura e movimenta, mas o dinheiro nunca sobra.",
  "A empresa cresceu, mas os controles não acompanharam.",
  "Existe equipe, mas tudo ainda chega e depende do dono.",
  "Existe oportunidade no mercado, mas falta estrutura interna.",
];

const historia = [
  {
    title: "A Origem: O Tabuleiro da Mãe",
    period: "O INÍCIO DE TUDO",
    text: "Aos 7 anos de idade, minha formação empreendedora já havia começado. Não foi em uma sala de aula, mas nas ruas, com um tabuleiro preparado pela minha mãe. Foi ali que eu, Edmar, aprendi na prática o valor de cada centavo e a importância do trabalho e da base familiar como pilares inegociáveis para a vida."
  },
  {
    title: "A Construção de Franquias",
    period: "A ESCALA DO VAREJO",
    text: "Com o tempo, a vontade de fazer acontecer transformou pequenos esforços em um império real. Ergui negócios do zero e escalei o modelo construindo redes de franquias de sucesso. O varejo me ensinou, dia a dia, a dinâmica pesada de liderar equipes, controlar o caixa e entender o cliente em grande escala."
  },
  {
    title: "Crises, Erros e Recomeços",
    period: "A ESCOLA DA VIDA",
    text: "A trajetória nunca é uma linha reta feita apenas de vitórias. Cometi erros pesados, enfrentei crises brutais no mercado de franquias e vi momentos em que as certezas desmoronaram. Precisar reconstruir tudo forjou a minha verdadeira visão de gestão. A prática, de fato, deixa cicatrizes."
  },
  {
    title: "58 Anos de Legado",
    period: "HOJE",
    text: "Quase seis décadas de atuação provaram que a autoridade não se constrói com um currículo impecável, mas com a capacidade de se levantar e ajustar a rota. Hoje, meu projeto de Mentoria nasceu para compartilhar princípios reais, testados e validados por quem conhece, na pele, o outro lado da mesa."
  }
];

const checklist = [
  "Minha empresa vende, mas o dinheiro não sobra.",
  "Crescemos e perdemos parte do controle.",
  "Minha equipe existe, mas decisões demais dependem de mim.",
  "Temos números, mas não os transformamos em decisões.",
  "Precisamos recuperar margem e organizar o caixa.",
  "Sócios ou lideranças precisam alinhar a direção.",
  "Existe uma decisão importante que estamos adiando.",
  "Estamos preparados para crescer, mas precisamos estruturar o próximo ciclo.",
  "Minha equipe precisa mudar comportamento e performance.",
];

const solucoes = [
  {
    tag: "Acompanhamento",
    title: "Mentoria Empresarial",
    lead: "Sua empresa não precisa de mais informação. Precisa transformar informação em decisão.",
    body: "Acompanhamento estratégico para reorganizar a operação, recuperar controle e construir uma empresa capaz de crescer com gestão, margem e direção. Trabalhamos caixa, pessoas, processos, indicadores e decisões.",
    note: "Não é uma aula sobre como administrar empresas. É um trabalho sobre a sua empresa.",
    formato: "Ciclos de 3 a 6 meses.",
    foco: "Gestão, acompanhamento e execução.",
    cta: "Quero conhecer a Mentoria",
    accent: "red" as const,
  },
  {
    tag: "Decisão Crítica",
    title: "Consultoria e Imersões",
    lead: "Às vezes sua empresa não precisa de mais uma reunião. Precisa parar tudo e resolver.",
    body: "Intervenção estratégica para identificar rapidamente gargalos, confrontar problemas e sair da sala com decisões tomadas e uma rota clara de execução.",
    note: "Números e processos na mesa. Entramos com perguntas. Saímos com decisões.",
    formato: "1 a 2 dias intensivos.",
    foco: "Sócios, conselho e lideranças.",
    cta: "Colocar minha empresa na mesa",
    accent: "blue" as const,
  },
  {
    tag: "Cultura e Liderança",
    title: "Palestras Corporativas",
    lead: "Uma palestra pode ocupar uma hora. Ou mudar a forma como uma equipe pensa o negócio.",
    body: "Visão construída no mundo real dos negócios. Gestão, vendas, liderança, comportamento e resultado tratados sem discurso pronto e sem teoria distante da realidade.",
    note: "Fazer as pessoas saírem pensando e agindo diferente de quando entraram.",
    formato: "Convenções e In-company.",
    foco: "Comportamento e performance.",
    cta: "Solicitar proposta de palestra",
    accent: "red" as const,
  },
];

const processo = [
  { n: "01", t: "Diagnóstico", d: "Entender sem maquiar números. Separar causas de sintomas. Definir o que precisa ser enfrentado." },
  { n: "02", t: "Decisão", d: "Transformar diagnóstico em decisões claras. Responsáveis, prazos e indicadores." },
  { n: "03", t: "Execução", d: "Acompanhar impacto e corrigir rota. Construir crescimento sobre uma operação mais saudável." },
];

const cases = [
  {
    kpi: "Retomada de Caixa em 45 Dias",
    title: "Recuperação de Caixa e Processos no Varejo",
    ctx: "Rede de lojas enfrentando estagnação nas vendas e margens espremidas.",
    diag: "Estoque mal dimensionado e equipe de vendas sem acompanhamento diário de metas.",
    inter: "Reestruturação da rotina da gerência, metas diárias e liquidação estratégica de estoque.",
    res: "Aumento rápido no fluxo de caixa e retomada da capacidade de investimento.",
  },
  {
    kpi: "Independência do Dono",
    title: "Escala e Gestão de Pessoas",
    ctx: "Empresa de serviços estagnada no crescimento por dependência exclusiva do dono.",
    diag: "Falta de delegação, lideranças não preparadas e ausência de indicadores operacionais.",
    inter: "Treinamento intensivo da liderança imediata e implementação de painéis de controle.",
    res: "O dono retomou o papel estratégico e a empresa abriu duas filiais no mesmo semestre.",
  },
  {
    kpi: "Estancamento da Queda em 45 Dias",
    title: "Sobrevivência em Cenário de Crise",
    ctx: "Comércio local perdendo clientes rapidamente para novos concorrentes na região.",
    diag: "Posicionamento confuso e experiência do cliente abaixo do padrão do novo mercado.",
    inter: "Mudança pragmática no atendimento, readequação do mix e corte de custos fixos.",
    res: "Estancamento da queda em 45 dias e retorno ao ponto de equilíbrio financeiro.",
  },
];

const faq = [
  {
    q: "A Mentoria Empresarial é indicada para qualquer empresa?",
    a: "A base do trabalho é gestão empresarial, mas a adequação depende do momento, porte, desafio e disponibilidade para executar. Após entender seu cenário, indicaremos se a Mentoria é o caminho adequado.",
  },
  {
    q: "Qual é a diferença entre Mentoria e Imersão?",
    a: "A Mentoria acompanha decisões e execução ao longo de ciclos de 3 a 6 meses. A Imersão concentra diagnóstico, alinhamento e decisões em 1 a 2 dias. Em alguns casos, uma pode conduzir à outra.",
  },
  {
    q: "Qual é a duração da Mentoria?",
    a: "O formato-base prevê ciclos de 3 a 6 meses, definidos conforme o diagnóstico e a proposta aprovada.",
  },
  {
    q: "Como contratar uma palestra?",
    a: "Envie data, cidade, público, tema, objetivo e formato do evento. A equipe avaliará disponibilidade e enviará uma proposta personalizada.",
  },
  {
    q: "Como saber qual solução escolher?",
    a: "Preencha o formulário com o momento da empresa. A equipe analisa as informações e orienta o próximo movimento, sem obrigar você a escolher uma solução antes da conversa.",
  },
];

const temas = ["Gestão", "Vendas", "Finanças", "Liderança", "Estratégia", "Empreendedorismo"];

function Landing() {
  const root = useRef<HTMLDivElement>(null);
  const [marcados, setMarcados] = useState<number[]>([]);
  const [aberta, setAberta] = useState<number | null>(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Top button logic
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
      
      // Hero opacity logic (fade out completely by 600px of scroll)
      const scrollY = window.scrollY;
      const fadeStart = 50;
      const fadeEnd = 600;
      if (scrollY <= fadeStart) {
        setHeroOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setHeroOpacity(0);
      } else {
        setHeroOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }, anime] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("animejs"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const animate = (anime as unknown as { animate: Function }).animate;

      ctx = gsap.context(() => {
        gsap.set(".reveal", { opacity: 0, y: 28, filter: "blur(14px)" });

        gsap.to(".hero-reveal", {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.1,
        });

        gsap.utils.toArray<HTMLElement>(".reveal:not(.hero-reveal)").forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        gsap.utils.toArray<HTMLElement>(".aura").forEach((el, i) => {
          gsap.to(el, {
            xPercent: i % 2 ? -12 : 12,
            yPercent: i % 2 ? 10 : -10,
            duration: 9 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        gsap.to(".hero-bg-layer", {
          opacity: 0,
          scrollTrigger: {
            trigger: "#topo",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".quote-char", {
          opacity: 1,
          duration: 0.1,
          stagger: 0.03,
          ease: "none",
          scrollTrigger: {
            trigger: ".quote-container",
            start: "top 85%",
          },
        });
      }, root);

      if (typeof animate === "function") {
        animate(".hero-word", {
          opacity: [0, 1],
          filter: ["blur(16px)", "blur(0px)"],
          translateY: [24, 0],
          delay: (_: unknown, i: number) => 200 + i * 70,
          duration: 900,
          ease: "outExpo",
        });
        animate(".pulse-dot", {
          scale: [1, 1.6],
          opacity: [0.9, 0],
          duration: 1600,
          loop: true,
          ease: "outQuad",
        });
      }
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const toggle = (i: number) =>
    setMarcados((m) => (m.includes(i) ? m.filter((x) => x !== i) : [...m, i]));

  return (
    <div ref={root} className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] font-sans text-white">
      {/* Fundos */}
      <div className="hidden">
        <div className="aura -left-40 top-[-10rem] h-[34rem] w-[34rem] hidden" />
        <div className="aura right-[-12rem] top-[30rem] h-[36rem] w-[36rem] hidden" />
        <div className="aura bottom-[-14rem] left-1/3 h-[32rem] w-[32rem] hidden" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
          }}
        />
      </div>

      {/* Background decoration elements */}
      <div className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0">
        <div className="absolute top-[-20rem] right-[-20rem] w-[50rem] h-[50rem] bg-[#e5372b]/5 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] left-[-10rem] w-[30rem] h-[30rem] bg-[#1e5ae8]/5 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="bg-[#111111] shadow-sm border border-white/10 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
          <a href="#topo" className="flex items-center gap-2 text-sm font-extrabold tracking-tight">
            <Activity className="h-6 w-6 text-[#e5372b]" style={{ animation: "pulse 1.5s infinite" }} />
            <span className="text-white">EMPRESÁRIO <span className="text-[#e5372b]">RADICAL</span></span>
          </a>
          <nav className="hidden items-center gap-6 text-xs font-medium text-gray-400 lg:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <AnimatedButton href="#contato" className="btn-whatsapp min-h-0 py-3 px-6 text-[10px]">
            Falar com a equipe
          </AnimatedButton>
        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="reveal hero-reveal bg-white shadow-sm border border-gray-200 mb-7 inline-flex rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Mentorias • Imersões • Palestras Corporativas
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {"Seu problema pode não ser falta de vendas.".split(" ").map((w, i) => (
                <span key={i} className="hero-word mr-[0.25em] inline-block opacity-0">
                  {w === "vendas." ? <span className="text-[#e5372b]">vendas.</span> : w}
                </span>
              ))}
            </h1>
            <p className="reveal hero-reveal mt-7 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Talvez sua empresa venda e não tenha margem. Cresça e não tenha gestão. Tenha equipe e
              continue dependendo de você.
            </p>
            <p className="reveal hero-reveal mt-4 max-w-xl text-base leading-relaxed text-white">
              O Empresário Radical vai à raiz do negócio para transformar problemas em decisões e
              decisões em resultado.
            </p>
            <div className="reveal hero-reveal mt-9 flex flex-wrap gap-3">
              <AnimatedButton href="#diagnostico" className="btn-red py-4 px-9">
                QUERO ENTENDER MEU CENÁRIO
              </AnimatedButton>
              <AnimatedButton href="#solucoes" className="btn-blue py-4 px-9">
                Ver soluções
              </AnimatedButton>
            </div>
          </div>

          <div className="reveal hero-reveal relative">
            <div className="bg-[#111111] border border-white/10 overflow-hidden rounded-[2rem] p-2">
              <div className="relative w-full aspect-[3/4] rounded-[1.6rem] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png"
                  alt="Edmar, mentor do Empresário Radical"
                  className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 object-[left_top]"
                />
              </div>
            </div>
            <div className="bg-[#111] border border-white/10 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400 shadow-2xl z-10">
              <span className="block text-sm font-bold text-white">Radical vem de raiz.</span>
              Menos achismo. Mais gestão. Mais decisão. Mais resultado.
            </div>
          </div>
        </div>
      </section>

      {/* A História / Autoridade */}
      <section id="autoridade" className="relative w-full bg-[#111111] text-white py-24 md:py-32 overflow-hidden ">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111111]/50 z-10" />
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975668/edmar1.png')] bg-cover bg-center bg-fixed opacity-100 z-0" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="reveal text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 border border-[#e5372b]/30 bg-[#e5372b]/10 text-[#e5372b] rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e5372b]"></span>
              A Jornada do Empresário
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              58 anos construindo empresas. <br className="hidden md:block" />
              <span className="text-gray-400">Da teoria à prática brutal.</span>
            </h2>
            <p className="mt-8 text-2xl font-medium text-gray-300 quote-container" style={{ fontFamily: "'Caveat', cursive" }}>
              {'"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes."'.split(" ").map((word, wIdx, arr) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, cIdx) => (
                    <span key={cIdx} className="quote-char opacity-0 inline-block">{char}</span>
                  ))}
                  {wIdx !== arr.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e5372b]/10 via-[#e5372b]/50 to-[#e5372b]/10 md:-translate-x-1/2"></div>
            
            <div className="space-y-16">
              {historia.map((h, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className={`reveal relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                    {/* Center Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#e5372b] border-4 border-[#111111] shadow-[0_0_15px_rgba(229,55,43,0.5)] -translate-x-1/2 mt-1.5 z-10"></div>
                    
                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-[#1E5AE8]/50 hover:bg-[#0c1838]/90 transition-all duration-300 shadow-xl">
                        <span className="text-[#e5372b] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{h.period}</span>
                        <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{h.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-[15px]">
                          {h.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-24 reveal text-center max-w-4xl mx-auto">
             
            <div className="mt-12 flex justify-center">
               <AnimatedButton href="#raiz" className="btn-red py-4 px-9 text-sm">
                  VER COMO A GESTÃO RADICAL FUNCIONA
               </AnimatedButton>
            </div>
          </div>

        </div>
      </section>

      {/* Sintoma vs Raiz */}
      <Section id="raiz" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Sintoma vs. Raiz" title="Vender mais não conserta uma empresa desorganizada.">
        <p className="reveal max-w-3xl text-gray-400">
          Às vezes, só faz o problema crescer.
        </p>
                <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {sintomas.map((s, index) => (
            <article key={index} className="reveal group relative overflow-hidden border border-[#e5372b]/30 aspect-[16/10] md:aspect-[16/9] shadow-2xl">
              <img src={s.img} alt={`Sintoma 0${index + 1}`} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col z-10">
                <h3 className="text-2xl md:text-[22px] font-bold text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>{s.title}</h3>
                <p className="text-[15px] font-medium text-gray-300 leading-relaxed max-w-[90%]">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-24 max-w-4xl text-center">
          <p className="reveal text-lg leading-relaxed text-gray-400">
            Muitos empresários passam anos tentando resolver os sintomas. Buscam mais vendas quando
            precisam recuperar margem. Cobram mais da equipe quando falta processo. Cortam custos
            quando falta gestão. Trabalham mais quando deveriam decidir melhor.
          </p>
          <p className="reveal mt-6 text-xl font-semibold text-white">
            Antes de buscar a próxima solução, é preciso descobrir qual é o problema certo.
          </p>
          
          <div className="mt-12 grid gap-4 sm:grid-cols-2 text-left">
            {cenarios.map((c) => (
              <div key={c} className="reveal flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6 text-sm text-gray-300 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e5372b]/10 text-[#e5372b]">
                  <Activity className="h-5 w-5" />
                </span>
                <span className="leading-snug text-base">{c}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-16 inline-block rounded-full border border-[#e5372b]/20 bg-[#e5372b]/5 px-8 py-5">
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              É aqui que começa uma gestão radical. <span className="text-[#e5372b]">Não no sintoma. Na raiz.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* O que é ser Radical */}
      <Section id="radical" bgClass="bg-[#111111]" textClass="text-white" kicker="O que é ser Radical" title="Radical não é sobre correr riscos. É sobre ir à raiz.">
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div className="reveal w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788214935/empresarioRadical6.png"
                alt="O que é ser Radical"
                className="w-full h-auto object-cover rounded-[1.4rem] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="reveal bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 leading-relaxed text-gray-400 shadow-xl">
              <p>
                A palavra radical vem de raiz. E é exatamente ali que os problemas de uma empresa
                precisam ser enfrentados.
              </p>
              <p className="mt-4">
                Porque o caixa travado, a queda nas vendas, a equipe improdutiva e a falta de lucro
                podem ser consequência. Enquanto você tenta corrigir o que aparece, a verdadeira causa
                pode continuar crescendo por baixo da operação.
              </p>
            </div>
            <div className="reveal bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 leading-relaxed text-gray-400 shadow-xl">
              <p>
                Ser um Empresário Radical é ter coragem para olhar além dos sintomas. É colocar os
                números na mesa. Questionar decisões. Rever processos. Enfrentar o que não funciona.
                Mudar o que precisa ser mudado. E construir uma empresa onde o crescimento seja
                consequência de uma gestão melhor.
              </p>
              <p className="mt-6 text-lg font-bold text-white">
                Menos achismo. Mais gestão. Mais decisão. Mais resultado.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Diagnóstico */}
      <Section id="diagnostico" bgClass="bg-[#111111]" textClass="text-white" kicker="Diagnóstico" title="Em que momento sua empresa está?">
        <p className="reveal max-w-2xl text-gray-400">
          Nem toda empresa precisa da mesma solução. Mas existem sinais que mostram quando alguma
          coisa precisa mudar. Assinale as opções que refletem a sua realidade hoje:
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {checklist.map((c, i) => {
            const on = marcados.includes(i);
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggle(i)}
                className={`reveal flex items-start gap-3 rounded-2xl p-5 text-left text-sm transition-all duration-300 ${
                  on ? "bg-[#1e5ae8] shadow-md border-transparent translate-x-1 text-white" : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[0.65rem] font-bold transition-colors ${
                    on ? "border-transparent text-white" : "border-gray-200"
                  }`}
                  style={on ? { background: "var(--grad-radical)" } : undefined}
                >
                  {on ? "✓" : ""}
                </span>
                {c}
              </button>
            );
          })}
        </div>
        <div className="reveal bg-[#0A0A0A] border border-white/10 mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm text-gray-400">
            {marcados.length > 0
              ? `Você reconheceu sua empresa em ${marcados.length} ${marcados.length === 1 ? "situação" : "situações"}. Talvez seja hora de olhar para a raiz.`
              : "Se você reconheceu sua empresa em uma ou mais situações, talvez seja hora de olhar para a raiz."}
          </p>
          <AnimatedButton href="#contato" className={`btn-whatsapp w-fit shrink-0 [&>span.invisible]:px-7 [&>span.invisible]:py-3.5 ${marcados.length === 4 ? "animate-shake" : ""}`}>
            QUERO ENTENDER MEU CENÁRIO
          </AnimatedButton>
        </div>
      </Section>

      {/* Soluções */}
      <Section id="solucoes" bgClass="bg-white" textClass="text-[#0A0A0A]" kicker="Soluções" title="Qual é o próximo movimento da sua empresa?">
        <p className="reveal max-w-2xl text-gray-600">
          Algumas empresas precisam de acompanhamento para reorganizar a gestão. Outras precisam
          parar, diagnosticar e decidir rapidamente. E algumas precisam transformar a mentalidade e a
          performance das pessoas. Três caminhos. Um mesmo princípio: chegar à raiz.
        </p>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 items-stretch hide-scrollbar">
          {solucoes.map((s) => (
            <article
              key={s.title}
              className={`reveal bg-gray-50 border border-gray-200 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl snap-center shrink-0 w-[85vw] md:w-auto ${s.accent === "red" ? "hover:border-[#e5372b]/30" : "hover:border-[#1E5AE8]/30"}`}
            >
              <span
                className={`w-fit rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest ${
                  s.accent === "red" ? "bg-[#e5372b]/10 text-[#e5372b]" : "bg-[#1e5ae8]/10 text-[#1e5ae8]"
                }`}
              >
                {s.tag}
              </span>
              <h3 className="mt-4 text-xl font-extrabold text-[#0A0A0A]">{s.title}</h3>
              <p className="mt-3 text-sm font-semibold text-gray-900">{s.lead}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.body}</p>
              <p className="mt-3 text-sm italic text-gray-500">{s.note}</p>
              <dl className="mt-6 space-y-1 border-t border-gray-200 pt-4 text-xs text-gray-600">
                <div className="flex gap-2">
                  <dt className="font-bold text-gray-900">Formato:</dt>
                  <dd>{s.formato}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold text-gray-900">Foco:</dt>
                  <dd>{s.foco}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-6">
                <AnimatedButton href="#contato" className={`w-full ${s.accent === "red" ? "btn-red" : "btn-blue"} [&>span.invisible]:py-3.5`}>
                  {s.cta}
                </AnimatedButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Processo */}
      <section id="processo" className="relative w-full bg-[#111111] overflow-hidden py-24 md:py-32 ">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#111111]/50 md:bg-gradient-to-r md:from-transparent md:via-[#111111]/80 md:to-[#111111] z-10" />
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975667/edmar3.png')] bg-cover bg-left md:bg-[center_left] bg-fixed opacity-100 z-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="hidden lg:block">{/* Empty left col */}</div>
          <div className="flex flex-col justify-start">
            <div className="reveal flex items-center gap-4 pb-3 mb-8 w-max">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#e5372b]">O PROGRAMA</span>
            </div>
            <h2 className="reveal text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]" style={{ fontFamily: "'Sora', sans-serif" }}>
              Como funciona <br /> o Processo
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 mt-16">
              {processo.map((p, index) => (
                <div key={index} className="reveal flex flex-col gap-3">
                  <div className="w-10 h-1 bg-[#e5372b] mb-2"></div>
                  <h3 className="text-xl font-bold text-white">{p.t}</h3>
                  <p className="text-sm font-medium leading-relaxed text-gray-300">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <Section id="cases" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Avaliações e Cases" title="Resultados construídos na raiz.">
        <p className="reveal text-xs uppercase tracking-widest text-gray-600">
          Dados em validação
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="reveal bg-[#111111] border border-white/10 rounded-3xl p-7">
              <p className="text-sm font-extrabold text-[#e5372b]">{c.kpi}</p>
              <h3 className="mt-2 text-base font-bold">{c.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-400">
                <li><b className="text-white">Contexto:</b> {c.ctx}</li>
                <li><b className="text-white">Diagnóstico:</b> {c.diag}</li>
                <li><b className="text-white">Intervenção:</b> {c.inter}</li>
                <li><b className="text-white">Resultado:</b> {c.res}</li>
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Hub */}
            <Section id="hub" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Hub de Conteúdos" title="Conhecimento para quem está do outro lado da mesa.">
        <p className="reveal text-gray-400 max-w-2xl">
          Nós não ensinamos gestão baseados apenas na teoria, nós construímos e operamos empresas reais. Descubra artigos, vídeos e materiais exclusivos.
        </p>
        
        {/* Carousel de Imagens de Conteúdo */}
        <div className="reveal mt-10 -mx-6 sm:mx-0">
          <CoverFlowCarousel 
            sectionLabel=""
            items={[
              { 
                tag: "Artigo", 
                titleLine1: "Gestão", 
                titleLine2: "Os Fundamentos",
                desc: "A base sólida para construir uma empresa que não depende de você.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                ctaText: "Ler Artigo"
              },
              { 
                tag: "Vídeo", 
                titleLine1: "Metas", 
                titleLine2: "Como Estruturar",
                desc: "Aprenda a definir e cobrar metas que a equipe realmente entende.",
                img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
                ctaText: "Assistir Vídeo"
              },
              { 
                tag: "Download", 
                titleLine1: "Indicadores", 
                titleLine2: "Guia Prático",
                desc: "Baixe a planilha essencial para acompanhar os números que importam.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                ctaText: "Baixar Material"
              },
              { 
                tag: "Artigo", 
                titleLine1: "Liderança", 
                titleLine2: "O Papel do Líder",
                desc: "O que significa ser um líder radical em tempos de crescimento.",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
                ctaText: "Ler Artigo"
              },
              { 
                tag: "Entrevista", 
                titleLine1: "Caixa", 
                titleLine2: "Protegendo o Lucro",
                desc: "Como blindar o financeiro e evitar surpresas no fim do mês.",
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
                ctaText: "Ver Conteúdo"
              }
            ]}
          />
        </div>

        <div className="reveal mt-12 flex justify-center w-full">
          <AnimatedButton href="#contato" className="btn-blue w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4">
            Explorar todos os conteúdos
          </AnimatedButton>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" bgClass="bg-[#111111]" textClass="text-white" kicker="Perguntas Frequentes" title="O que costumam perguntar antes de começar.">
        <div className="mt-8 space-y-3">
          {faq.map((f, i) => (
            <div key={f.q} className="reveal bg-[#0A0A0A] border border-white/10 overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => setAberta(aberta === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left text-sm font-semibold"
              >
                {f.q}
                <span className={`text-primary transition-transform duration-300 ${aberta === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div
                className="grid transition-all duration-500 ease-out"
                style={{ gridTemplateRows: aberta === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-gray-400">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Chamada final */}
      <section id="contato" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-28">
        <div className="reveal bg-white/5 border border-white/10 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-16 text-center">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
            Chamada Final
          </p>
          <h2 className="mx-auto mt-4 sm:mt-6 max-w-3xl text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            Talvez você já saiba que alguma coisa precisa mudar.{" "}
            <span className="text-[#e5372b]">A questão agora é descobrir o quê.</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base text-gray-400">
            O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz.
          </p>
          <AnimatedButton href="#contato" className="btn-whatsapp w-fit mx-auto mt-8 sm:mt-9 [&>span.invisible]:px-5 sm:[&>span.invisible]:px-9 [&>span.invisible]:py-3 sm:[&>span.invisible]:py-4 text-[9px] sm:text-xs md:text-sm">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>
          <p className="mt-5 text-[10px] sm:text-xs text-gray-400">
            Converse com nossa equipe para descobrir o caminho ideal.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-10 text-center text-xs text-gray-400">
        <p className="font-bold text-white">EMPRESÁRIO RADICAL</p>
        <p className="mt-2">Mentorias • Imersões • Palestras Corporativas</p>
      </footer>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#e5372b] text-white shadow-[0_4px_14px_0_rgba(229,55,43,0.39)] transition-all duration-300 hover:scale-110 hover:bg-[#b3221b] ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
      </button>
    </div>
  );
}


function CurveDivider({ topBg, bottomBg }: { topBg: string; bottomBg: string }) {
  const colorMap: Record<string, string> = {
    "bg-[#0A0A0A]": "text-[#0A0A0A]",
    "bg-[#111111]": "text-[#111111]",
    "bg-white": "text-white",
  };
  return (
    <div className={`w-full ${bottomBg} leading-none relative`}>
      <svg viewBox="0 0 100 20" preserveAspectRatio="none" className={`w-full h-6 md:h-12 ${colorMap[topBg]} fill-current`}>
        <path d="M0,0 H100 V0 H55 C52,0 52,15 50,15 C48,15 48,0 45,0 H0 Z" />
      </svg>
      <div className="absolute inset-x-0 top-0 flex justify-center pt-[2px] md:pt-[6px]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-50 md:w-5 md:h-5">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
  bgClass = "",
  textClass = "text-white",
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
  bgClass?: string;
  textClass?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-28 py-24 ${bgClass} ${textClass}`}>
      <div className="mx-auto max-w-6xl px-6">
      <p className="reveal mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        {kicker}
      </p>
      <h2 className="reveal mb-6 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children}
      </div>
    </section>
  );
}
