import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update quote in A Jornada
old_quote = '''{'"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes."'.split("").map((char, index) => (
                <span key={index} className="quote-char opacity-0 inline-block">
                  {char === " " ? "\\u00A0" : char}
                </span>
              ))}'''

new_quote = '''{'"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes."'.split(" ").map((word, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
                  {word.split("").map((char, cIdx) => (
                    <span key={cIdx} className="quote-char opacity-0 inline-block">{char}</span>
                  ))}
                </span>
              ))}'''
content = content.replace(old_quote, new_quote)


# 2. Add fixed background to A Jornada and remove the bottom image
# Find the start of the section and the bottom image.
# We'll use string replacement for specific chunks.

old_autoridade_start = '''<section id="autoridade" className="relative w-full bg-[#111111] text-white py-24 md:py-32 overflow-hidden border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">'''

new_autoridade_start = '''<section id="autoridade" className="relative w-full bg-[#111111] text-white py-24 md:py-32 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111111]/85 z-10" />
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975668/edmar1.png')] bg-cover bg-center bg-fixed opacity-60 z-0" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">'''
content = content.replace(old_autoridade_start, new_autoridade_start)

old_autoridade_img = '''<div className="bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#e5372b]/20 inline-block w-full max-w-2xl">
              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788214935/empresarioRadical6.png"
                alt="Edmar, empresário com 58 anos de experiência"
                className="w-full h-auto object-cover rounded-[1.4rem] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>'''
content = content.replace(old_autoridade_img, '')


# 3. Update O que é ser Radical
old_radical = '''      <Section id="radical" bgClass="bg-[#111111]" textClass="text-white" kicker="O que é ser Radical" title="Radical não é sobre correr riscos. É sobre ir à raiz.">
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
      </Section>'''

new_radical = '''      <Section id="radical" bgClass="bg-[#111111]" textClass="text-white" kicker="O que é ser Radical" title="Radical não é sobre correr riscos. É sobre ir à raiz.">
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
      </Section>'''
content = content.replace(old_radical, new_radical)


# 4. Update Processo section
old_processo = '''      <section id="processo" className="relative w-full bg-[#111111] overflow-hidden py-24 md:py-32 border-y border-white/5">
        {/* Background Watermark Text */}
        <div className="absolute -bottom-8 md:-bottom-20 left-0 w-full text-center overflow-hidden pointer-events-none select-none flex justify-center z-0">
          <span className="text-[14vw] md:text-[18vw] font-bold leading-none text-[#1A1A1A] opacity-60 tracking-tighter">
            PROCESSO
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <div className="reveal flex items-center gap-4 pb-3 mb-8 w-max">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-gray-400">O PROGRAMA</span>
            </div>
            <h2 className="reveal text-5xl md:text-6xl font-medium tracking-tight text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
              Como <br /> funciona o <br /> Processo
            </h2>
          </div>

          {/* Right Column Grid */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-16 mt-4">
            {processo.map((p, index) => (
              <div key={index} className="reveal flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white">{p.t}</h3>
                <p className="text-[15px] font-medium leading-relaxed text-gray-400">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>'''

new_processo = '''      <section id="processo" className="relative w-full bg-[#111111] overflow-hidden py-24 md:py-32 border-y border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#111111]/80 md:bg-gradient-to-r md:from-[#111111]/20 md:via-[#111111]/80 md:to-[#111111] z-10" />
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975667/edmar3.png')] bg-cover bg-left md:bg-[center_left] opacity-50 z-0 mix-blend-luminosity" />
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
      </section>'''
content = content.replace(old_processo, new_processo)


with open("src/routes/index.tsx", "w") as f:
    f.write(content)

