import { createFileRoute } from "@tanstack/react-router";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Activity } from "lucide-react";
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
    text: "Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/6365.jpg"
  },
  {
    text: "Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/4239672.jpg"
  },
  {
    text: "Mais clientes sem controle aumentam o faturamento, mas também o problema de caixa.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/70656.jpg"
  },
  {
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

      {/* Hero Background */}
      <div className="hero-bg-layer fixed top-0 inset-x-0 h-[100vh] overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat opacity-30 transform -scale-x-100 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788952730/1745.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="bg-[#111111] shadow-sm border border-white/10 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
          <a href="#topo" className="flex items-center gap-2 text-sm font-extrabold tracking-tight">
            <Activity className="h-6 w-6 text-[#D9002B]" style={{ animation: "pulse 1.5s infinite" }} />
            <span className="text-white">EMPRESÁRIO <span className="text-[#D9002B]">RADICAL</span></span>
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
                  {w === "vendas." ? <span className="text-[#D9002B]">vendas.</span> : w}
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
              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788898824/empre_Radical.png"
                alt="Edmar, mentor do Empresário Radical"
                width={1024}
                height={1280}
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="bg-[#111] border border-white/10 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400">
              <span className="block text-sm font-bold text-white">Radical vem de raiz.</span>
              Menos achismo. Mais gestão. Mais decisão. Mais resultado.
            </div>
          </div>
        </div>
      </section>

      {/* Sintoma vs Raiz */}
      <Section id="raiz" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Sintoma vs. Raiz" title="Vender mais não conserta uma empresa desorganizada.">
        <p className="reveal max-w-3xl text-gray-400">
          Às vezes, só faz o problema crescer.
        </p>
                <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {sintomas.map((s, index) => (
            <article key={index} className="reveal flex flex-col items-center">
              {/* Arch Image Container */}
              <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-[20px] overflow-hidden border border-white/10 bg-[#111111] p-1 shadow-lg">
                <div className="w-full h-full rounded-[16px] overflow-hidden relative">
                  <img src={s.img} alt={`Sintoma 0${index + 1}`} className="w-full h-full object-cover opacity-90 hover:scale-105 transition-all duration-500" />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="mt-6 text-center w-full px-2">
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="reveal mt-10 max-w-3xl leading-relaxed text-gray-400">
          Muitos empresários passam anos tentando resolver os sintomas. Buscam mais vendas quando
          precisam recuperar margem. Cobram mais da equipe quando falta processo. Cortam custos
          quando falta gestão. Trabalham mais quando deveriam decidir melhor.
        </p>
        <p className="reveal mt-4 text-lg font-semibold">
          Antes de buscar a próxima solução, é preciso descobrir qual é o problema certo.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {cenarios.map((c) => (
            <div key={c} className="reveal flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {c}
            </div>
          ))}
        </div>
        <p className="reveal mt-10 text-xl font-extrabold">
          É aqui que começa uma gestão radical. <span className="text-[#D9002B]">Não no sintoma. Na raiz.</span>
        </p>
      </Section>

      {/* O que é ser Radical */}
      <CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#111111]" />
      <Section id="radical" bgClass="bg-[#111111]" textClass="text-white" kicker="O que é ser Radical" title="Radical não é sobre correr riscos. É sobre ir à raiz.">
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="reveal bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 leading-relaxed text-gray-400">
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
          <div className="reveal bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 leading-relaxed text-gray-400">
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
      </Section>

      {/* Autoridade */}
      <CurveDivider topBg="bg-[#111111]" bottomBg="bg-white" />
      <Section id="autoridade" bgClass="bg-white" textClass="text-gray-900" kicker="A Autoridade" title="Gestão empresarial não se aprende apenas nos livros.">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal bg-white shadow-sm border border-gray-200 overflow-hidden rounded-3xl p-2">
            <img
              src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788214935/empresarioRadical6.png"
              alt="Edmar, empresário e mentor"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full rounded-[1.4rem] object-cover -scale-x-100"
            />
          </div>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p className="reveal">
              Também se aprende pagando folha, enfrentando crises e tomando decisões quando não
              existe resposta pronta.
            </p>
            <p className="reveal">
              Antes do mentor, existe o empresário. Edmar não construiu sua visão de negócios apenas
              estudando empresas. Construiu vivendo uma. Sua história passa pelo varejo, pela gestão,
              pela liderança de pessoas, pelo crescimento empresarial e pelas decisões difíceis de
              quem empreende de verdade.
            </p>
            <p className="reveal">
              Com o tempo, a experiência de campo se transformou na capacidade de olhar além do que
              está acontecendo e buscar por que está acontecendo. Dessa forma de pensar nasceu o
              Empresário Radical — não para ensinar a partir de teorias distantes da realidade, mas
              para compartilhar princípios, métodos e decisões de quem conhece o outro lado da mesa.
            </p>
            <p className="quote-container text-3xl font-medium text-gray-800" style={{ fontFamily: "'Caveat', cursive" }}>
              {'"Porque existe uma diferença enorme entre conhecer gestão e precisar fazer uma empresa funcionar."'.split("").map((char, index) => (
                <span key={index} className="quote-char opacity-0 inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {[
                "Empresa que depende de uma pessoa ainda não construiu gestão.",
                "Problema que não aparece nos números aparece no caixa.",
                "Decisão difícil adiada normalmente se torna um problema mais caro.",
              ].map((t) => (
                <p key={t} className="reveal bg-white shadow-sm border border-gray-200 rounded-2xl p-4 text-xs leading-relaxed text-gray-600">
                  {t}
                </p>
              ))}
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
                  on ? "bg-[#1E5AE8] shadow-md border-transparent translate-x-1 text-white" : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
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
      <CurveDivider topBg="bg-[#111111]" bottomBg="bg-[#0A0A0A]" />
      <Section id="solucoes" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Soluções" title="Qual é o próximo movimento da sua empresa?">
        <p className="reveal max-w-2xl text-gray-400">
          Algumas empresas precisam de acompanhamento para reorganizar a gestão. Outras precisam
          parar, diagnosticar e decidir rapidamente. E algumas precisam transformar a mentalidade e a
          performance das pessoas. Três caminhos. Um mesmo princípio: chegar à raiz.
        </p>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 items-stretch hide-scrollbar">
          {solucoes.map((s) => (
            <article
              key={s.title}
              className={`reveal bg-[#111111] border border-white/10 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 snap-center shrink-0 w-[85vw] md:w-auto ${s.accent === "red" ? "hover:border-[#D9002B]/30 hover:shadow-[0_10px_30px_rgba(217,0,43,0.1)]" : "hover:border-[#1E5AE8]/30 hover:shadow-[0_10px_30px_rgba(30,90,232,0.15)]"}`}
            >
              <span
                className={`w-fit rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest ${
                  s.accent === "red" ? "bg-[#D9002B]/10 text-primary" : "bg-[#1E5AE8]/10 text-[#1E5AE8]"
                }`}
              >
                {s.tag}
              </span>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-3 text-sm font-semibold text-white">{s.lead}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.body}</p>
              <p className="mt-3 text-sm italic text-gray-400">{s.note}</p>
              <dl className="mt-6 space-y-1 border-t border-gray-100 pt-4 text-xs text-gray-400">
                <div className="flex gap-2">
                  <dt className="font-bold text-white">Formato:</dt>
                  <dd>{s.formato}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold text-white">Foco:</dt>
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
      <CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-white" />
      <Section id="processo" bgClass="bg-white" textClass="text-gray-900" kicker="O Processo" title="Da raiz ao resultado.">
        <p className="reveal text-gray-600">
          Diagnóstico sem execução vira relatório. Execução sem diagnóstico vira tentativa.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {processo.map((p) => (
            <div key={p.n} className="reveal bg-white shadow-sm border border-gray-200 relative overflow-hidden rounded-3xl p-7">
              <span className="text-5xl font-extrabold text-[#D9002B]/20">{p.n}</span>
              <h3 className="mt-3 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cases */}
      <Section id="cases" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Avaliações e Cases" title="Resultados construídos na raiz.">
        <p className="reveal text-xs uppercase tracking-widest text-gray-600">
          Dados em validação
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="reveal bg-[#111111] border border-white/10 rounded-3xl p-7">
              <p className="text-sm font-extrabold text-[#D9002B]">{c.kpi}</p>
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
      <CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#111111]" />
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
      <section id="contato" className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="reveal bg-white/5 border border-white/10 relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
            Chamada Final
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Talvez você já saiba que alguma coisa precisa mudar.{" "}
            <span className="text-[#D9002B]">A questão agora é descobrir o quê.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz.
          </p>
          <AnimatedButton href="#contato" className="btn-whatsapp w-fit mx-auto mt-9 [&>span.invisible]:px-9 [&>span.invisible]:py-4">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>
          <p className="mt-5 text-xs text-gray-400">
            Converse com nossa equipe para descobrir o caminho ideal.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-10 text-center text-xs text-gray-400">
        <p className="font-bold text-white">EMPRESÁRIO RADICAL</p>
        <p className="mt-2">Mentorias • Imersões • Palestras Corporativas</p>
      </footer>
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
