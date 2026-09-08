import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# 1. Restore the cases section
new_cases = """      <Section id="cases" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Avaliações e Cases" title="Resultados construídos na raiz.">
        <p className="reveal text-xs uppercase tracking-widest text-gray-600">
          Dados em validação
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="reveal bg-[#111111] border border-white/10 rounded-3xl p-7">
              <p className="text-sm font-extrabold text-[#D9002B]">{c.kpi}</p>
              <h3 className="mt-2 text-base font-bold">{c.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-600">
                <li><b className="text-white">Contexto:</b> {c.ctx}</li>
                <li><b className="text-white">Diagnóstico:</b> {c.diag}</li>
                <li><b className="text-white">Intervenção:</b> {c.inter}</li>
                <li><b className="text-white">Resultado:</b> {c.res}</li>
              </ul>
            </article>
          ))}
        </div>
      </Section>"""

idx = re.sub(r'<Section id="cases" bgClass="bg-\[#0A0A0A\]".*?Kicker="Avaliações e Cases".*?</Section>', new_cases, idx, flags=re.DOTALL)
idx = re.sub(r'<Section id="cases" bgClass="bg-\[#0A0A0A\]" textClass="text-white" kicker="Avaliações e Cases" title="Resultados construídos na raiz.">.*?</Section>', new_cases, idx, flags=re.DOTALL)

# 2. Modify Sintoma vs Raiz (sintomas mapping)
sintoma_old = r'<div className="mt-10 grid gap-4 md:grid-cols-2">\s*\{sintomas\.map\(\(s, i\) => \(\s*<div key=\{i\} className="reveal bg-\[#0A0A0A\] border border-white/10 rounded-2xl p-6 transition-transform hover:-translate-y-1">\s*<span className="text-xs font-bold tracking-widest text-\[#D9002B\]">0\{i \+ 1\}</span>\s*<p className="mt-3 text-sm leading-relaxed text-white">\{s\}</p>\s*</div>\s*\)\)\}\s*</div>'

sintoma_new = """        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {sintomas.map((s, index) => (
            <article key={index} className="reveal flex flex-col items-center">
              {/* Arch Image Container */}
              <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-t-full overflow-hidden border border-white/10 bg-[#111111] p-1">
                <div className="w-full h-full rounded-t-full overflow-hidden relative">
                  <img src={`https://i.pravatar.cc/400?img=${index + 40}`} alt={`Sintoma 0${index + 1}`} className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                  
                  {/* Play Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#D9002B] rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(217,0,43,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(217,0,43,0.6)] transition-all">
                       <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-center shadow-xl">
                      <p className="text-lg font-extrabold tracking-widest text-[#D9002B]">0{index + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="mt-6 text-center w-full px-2">
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {s}
                </p>
              </div>
            </article>
          ))}
        </div>"""

idx = re.sub(sintoma_old, sintoma_new, idx, flags=re.DOTALL)


# 3. Processo section bg change to white
process_old = r'<Section id="processo" bgClass="bg-\[#111111\]" textClass="text-white"'
process_new = r'<Section id="processo" bgClass="bg-white" textClass="text-gray-900"'
idx = idx.replace(process_old, process_new)

process_text_old = r'<p className="reveal text-gray-400">\s*Diagnóstico sem execução vira relatório. Execução sem diagnóstico vira tentativa.\s*</p>'
process_text_new = r'<p className="reveal text-gray-600">\n          Diagnóstico sem execução vira relatório. Execução sem diagnóstico vira tentativa.\n        </p>'
idx = re.sub(process_text_old, process_text_new, idx, flags=re.DOTALL)

process_cards_old = r'\{processo\.map\(\(p\) => \(\s*<div key=\{p\.n\} className="reveal bg-\[#0A0A0A\] border border-white/10 relative overflow-hidden rounded-3xl p-7">\s*<span className="text-5xl font-extrabold text-\[#D9002B\]">\{p\.n\}</span>\s*<h3 className="mt-3 text-lg font-bold">\{p\.t\}</h3>\s*<p className="mt-2 text-sm leading-relaxed text-gray-400">\{p\.d\}</p>\s*</div>\s*\)\)\}'

process_cards_new = """{processo.map((p) => (
            <div key={p.n} className="reveal bg-white shadow-sm border border-gray-200 relative overflow-hidden rounded-3xl p-7">
              <span className="text-5xl font-extrabold text-[#D9002B]/20">{p.n}</span>
              <h3 className="mt-3 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.d}</p>
            </div>
          ))}"""

idx = re.sub(process_cards_old, process_cards_new, idx, flags=re.DOTALL)


# 4. Curve divider before Processo (was #0A0A0A to #111111, change to #0A0A0A to white)
idx = idx.replace('<CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#111111]" />\n      <Section id="processo"', '<CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-white" />\n      <Section id="processo"')


# 5. EKG Animation + Curve Divider between Processo and Cases
ekg_anim = """      <CurveDivider topBg="bg-white" bottomBg="bg-[#0A0A0A]" />
      <div className="w-full bg-[#0A0A0A] py-8 flex justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto opacity-80 px-6">
           <svg className="w-full h-16 md:h-24" viewBox="0 0 800 100" preserveAspectRatio="none">
              <style>
                {`
                  @keyframes ekg-dash {
                    to { stroke-dashoffset: 0; }
                  }
                  .animate-ekg {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: ekg-dash 3.5s linear infinite;
                  }
                `}
              </style>
              <path 
                d="M 0,50 L 250,50 L 280,20 L 310,80 L 330,50 L 470,50 L 490,20 L 510,80 L 530,50 L 800,50" 
                fill="none" 
                stroke="#D9002B" 
                strokeWidth="3" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-ekg"
              />
           </svg>
        </div>
      </div>
"""

idx = re.sub(r'<CurveDivider topBg="bg-\[#111111\]" bottomBg="bg-\[#0A0A0A\]" />\n\s*<Section id="cases"', ekg_anim + '\n      <Section id="cases"', idx)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

