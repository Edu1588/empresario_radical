import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# First, define the new data array to inject near the top
historia_data = '''const historia = [
  {
    title: "A Origem: O Tabuleiro da Mãe",
    period: "O INÍCIO DE TUDO",
    text: "Aos 7 anos de idade, minha formação empreendedora já havia começado. Não foi em uma sala de aula, mas nas ruas, com um tabuleiro preparado pela minha mãe. Foi ali que aprendi, na prática, o valor de cada centavo e a importância do trabalho e da base familiar como pilares inegociáveis para a vida."
  },
  {
    title: "Os Primeiros Negócios",
    period: "A CONSTRUÇÃO",
    text: "Com o tempo, a vontade de fazer acontecer transformou pequenos esforços em empresas reais. Ergui negócios do zero, conquistei mercados e o varejo me ensinou dia a dia a dinâmica pesada de liderar equipes, controlar o caixa e entender o cliente."
  },
  {
    title: "Crises, Erros e Recomeços",
    period: "A ESCOLA DA VIDA",
    text: "A trajetória nunca é uma linha reta feita apenas de vitórias. Cometi erros pesados, enfrentei crises brutais e vi momentos em que as certezas desmoronaram. Precisar reconstruir tudo do zero forjou a minha verdadeira visão de gestão. A prática, de fato, deixa cicatrizes."
  },
  {
    title: "58 Anos de Legado",
    period: "HOJE",
    text: "Quase seis décadas de atuação provaram que a autoridade não se constrói com um currículo impecável, mas com a capacidade de se levantar e ajustar a rota. Hoje, o projeto Mentoria nasceu para compartilhar princípios reais, testados e validados por quem conhece o outro lado da mesa."
  }
];'''

# We will inject this right after the `cenarios` array
cenarios_regex = r'(const cenarios = \[.*?\];)'
content = re.sub(cenarios_regex, r'\1\n\n' + historia_data, content, flags=re.DOTALL)


# Now, replace the old autoridade section
old_autoridade_regex = r'\{\/\* A História \/ Autoridade \*\/}.*?\{\/\* Sintoma vs Raiz \*\/\}'

new_autoridade = '''{/* A História / Autoridade */}
      <CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#111111]" />
      <section id="autoridade" className="relative w-full bg-[#111111] text-white py-24 md:py-32 overflow-hidden border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
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
              {'"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes."'.split("").map((char, index) => (
                <span key={index} className="quote-char opacity-0 inline-block">
                  {char === " " ? "\u00A0" : char}
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
                      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-[#e5372b]/30 hover:bg-white/[0.02] transition-all duration-300 shadow-xl">
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
             <div className="bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#e5372b]/20 inline-block w-full max-w-2xl">
              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788214935/empresarioRadical6.png"
                alt="Edmar, empresário com 58 anos de experiência"
                className="w-full h-auto object-cover rounded-[1.4rem] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
            <div className="mt-12 flex justify-center">
               <AnimatedButton href="#raiz" className="btn-red py-4 px-9 text-sm">
                  VER COMO A GESTÃO RADICAL FUNCIONA
               </AnimatedButton>
            </div>
          </div>

        </div>
      </section>
      <CurveDivider topBg="bg-[#111111]" bottomBg="bg-[#0A0A0A]" />

      {/* Sintoma vs Raiz */}'''

content = re.sub(old_autoridade_regex, new_autoridade, content, flags=re.DOTALL)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

