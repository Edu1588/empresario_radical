import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update the historia array to include the numbers logic
old_historia = '''const historia = [
  {
    title: "A Construção do Império",
    period: "O VAREJO NA PRÁTICA",
    text: "A trajetória de Edmar não foi construída em teorias, mas na linha de frente dos negócios. Começando do zero, construiu empresas sólidas no varejo, atingindo rapidamente a marca de múltiplos dígitos em faturamento e validando um modelo de gestão focado em margem, eficiência e controle absoluto do caixa."
  },
  {
    title: "A Escala das Franquias",
    period: "EXPANSÃO NACIONAL",
    text: "O verdadeiro teste de um método é a sua capacidade de ser escalado. Edmar não apenas criou negócios, mas os multiplicou, estruturando uma rede com mais de [X] lojas franqueadas espalhadas pelo país e gerenciando um faturamento anual na casa dos R$ [X] milhões. Liderando milhares de pessoas, ele viveu na pele o peso de operar em alta performance."
  },
  {
    title: "A Gestão à Prova de Crise",
    period: "A ESCOLA DA VIDA",
    text: "Números expressivos não blindam uma empresa de crises. Ao longo dessa jornada, Edmar enfrentou turbulências econômicas e desafios brutais no mercado de franchising. Precisar reestruturar rotas, fechar torneiras e proteger a operação forjou sua visão cirúrgica sobre o que realmente mantém um negócio de pé."
  },
  {
    title: "58 Anos de Legado",
    period: "HOJE",
    text: "Com quase seis décadas de vivência empresarial e faturamentos históricos acumulados, a autoridade de Edmar é provada pelo tempo. Hoje, o projeto Mentoria nasceu para compartilhar os princípios exatos que o fizeram escalar, sobreviver e prosperar, desenhados para quem conhece o outro lado da mesa."
  }
];'''

new_historia = '''const historia = [
  {
    title: "A Construção do Império",
    period: "O VAREJO NA PRÁTICA",
    text: "A trajetória de Edmar não foi construída em teorias, mas na linha de frente dos negócios. Começando do zero, construiu empresas sólidas no varejo, atingindo rapidamente a marca de múltiplos dígitos em faturamento e validando um modelo de gestão focado em margem, eficiência e controle absoluto do caixa.",
    stats: null
  },
  {
    title: "A Escala das Franquias",
    period: "EXPANSÃO NACIONAL",
    text: "O verdadeiro teste de um método é a sua capacidade de ser escalado. Edmar não apenas criou negócios, mas os multiplicou, estruturando uma rede gigante espalhada pelo país e gerenciando faturamentos anuais históricos. Liderando milhares de pessoas, ele viveu na pele o peso de operar em alta performance.",
    stats: [
      { value: 100, prefix: "+", suffix: "", label: "Lojas Franqueadas" },
      { value: 50, prefix: "R$", suffix: "M", label: "Faturamento Anual" }
    ]
  },
  {
    title: "A Gestão à Prova de Crise",
    period: "A ESCOLA DA VIDA",
    text: "Números expressivos não blindam uma empresa de crises. Ao longo dessa jornada, Edmar enfrentou turbulências econômicas e desafios brutais no mercado de franchising. Precisar reestruturar rotas, fechar torneiras e proteger a operação forjou sua visão cirúrgica sobre o que realmente mantém um negócio de pé.",
    stats: null
  },
  {
    title: "58 Anos de Legado",
    period: "HOJE",
    text: "Com quase seis décadas de vivência empresarial e faturamentos históricos acumulados, a autoridade de Edmar é provada pelo tempo. Hoje, o projeto Mentoria nasceu para compartilhar os princípios exatos que o fizeram escalar, sobreviver e prosperar, desenhados para quem conhece o outro lado da mesa.",
    stats: null
  }
];'''

content = content.replace(old_historia, new_historia)

# 2. Add an AnimatedCounter component
new_counter = '''
function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const end = value;
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCounter = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // easeOutExpo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          
          setCount(Math.floor(end * easeProgress));
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        
        requestAnimationFrame(updateCounter);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [value]);
  
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
'''

# Find a good place to insert the component (before Landing function)
content = content.replace('function Landing() {', new_counter + '\nfunction Landing() {')

# 3. Update the timeline rendering
old_timeline_box = '''                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-[#1E5AE8]/50 hover:bg-[#0c1838]/90 transition-all duration-300 shadow-xl">
                        <span className="text-[#e5372b] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{h.period}</span>
                        <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{h.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-[15px]">
                          {h.text}
                        </p>
                      </div>
                    </div>'''

new_timeline_box = '''                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col h-full">
                        <span className="text-[#e5372b] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{h.period}</span>
                        <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{h.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-[15px] mb-6">
                          {h.text}
                        </p>
                        
                        {h.stats && (
                          <div className={`flex flex-wrap gap-6 mt-auto pt-6 border-t border-white/10 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                            {h.stats.map((stat, sIdx) => (
                              <div key={sIdx} className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                </span>
                                <span className="text-xs uppercase tracking-widest text-[#e5372b] mt-1 font-bold">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>'''

content = content.replace(old_timeline_box, new_timeline_box)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

