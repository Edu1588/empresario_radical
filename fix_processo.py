import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_processo = '''      {/* Processo */}
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
      </Section>'''

new_processo = '''      {/* Processo */}
      <CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#D2CDC4]" />
      <section id="processo" className="relative w-full bg-[#D2CDC4] overflow-hidden py-24 md:py-32">
        {/* Background Watermark Text */}
        <div className="absolute -bottom-8 md:-bottom-20 left-0 w-full text-center overflow-hidden pointer-events-none select-none flex justify-center z-0">
          <span className="text-[14vw] md:text-[18vw] font-bold leading-none text-[#C5C0B7] opacity-60 tracking-tighter">
            PROCESSO
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <div className="reveal flex items-center gap-4 border-b border-gray-500 pb-3 mb-8 w-max">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-gray-800">O PROGRAMA</span>
            </div>
            <h2 className="reveal text-5xl md:text-6xl font-medium tracking-tight text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Como <br /> funciona o <br /> Processo
            </h2>
          </div>

          {/* Right Column Grid */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-16 mt-4">
            {processo.map((p, index) => (
              <div key={index} className="reveal flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-900">{p.t}</h3>
                <p className="text-[15px] font-medium leading-relaxed text-gray-700">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CurveDivider topBg="bg-[#D2CDC4]" bottomBg="bg-[#0A0A0A]" />'''

content = content.replace(old_processo, new_processo)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

