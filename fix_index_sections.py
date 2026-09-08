import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Add CurveDivider component
curve_divider_comp = """
function CurveDivider({ topBg, bottomBg }: { topBg: string; bottomBg: string }) {
  const colorMap: Record<string, string> = {
    "bg-[#0A0A0A]": "text-[#0A0A0A]",
    "bg-[#111111]": "text-[#111111]",
    "bg-white": "text-white",
  };
  return (
    <div className={`w-full ${bottomBg} leading-none`}>
      <svg viewBox="0 0 100 20" preserveAspectRatio="none" className={`w-full h-6 md:h-12 ${colorMap[topBg]} fill-current`}>
        <path d="M0,0 H100 V0 H55 C52,0 52,15 50,15 C48,15 48,0 45,0 H0 Z" />
      </svg>
    </div>
  );
}

"""

if "function CurveDivider" not in idx:
    idx = idx.replace('function Section(', curve_divider_comp + 'function Section(')

# Now, add CurveDividers between sections in the JSX
# We need to find the sections and insert the divider.
sections_to_replace = [
    (r'(<Section id="radical" bgClass="bg-\[#111111\]")', r'<CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#111111]" />\n      \1'),
    (r'(<Section id="autoridade" bgClass="bg-white")', r'<CurveDivider topBg="bg-[#111111]" bottomBg="bg-white" />\n      \1'),
    (r'(<Section id="diagnostico" bgClass="bg-\[#111111\]")', r'<CurveDivider topBg="bg-white" bottomBg="bg-[#111111]" />\n      \1'),
    (r'(<Section id="solucoes" bgClass="bg-\[#0A0A0A\]")', r'<CurveDivider topBg="bg-[#111111]" bottomBg="bg-[#0A0A0A]" />\n      \1'),
    (r'(<Section id="processo" bgClass="bg-\[#111111\]")', r'<CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#111111]" />\n      \1'),
    (r'(<Section id="cases" bgClass="bg-\[#0A0A0A\]")', r'<CurveDivider topBg="bg-[#111111]" bottomBg="bg-[#0A0A0A]" />\n      \1'),
    (r'(<Section id="faq" bgClass="bg-\[#111111\]")', r'<CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#111111]" />\n      \1'),
    # Note: Hub is 0A0A0A and FAQ is 111111. So between Hub and FAQ we have a transition.
]

for pattern, replacement in sections_to_replace:
    idx = re.sub(pattern, replacement, idx, count=1)


# Redesign Cases Section
cases_section_regex = r'(<Section id="cases".*?Kicker="Avaliações e Cases".*?>).*?(</Section>)'
cases_section_regex_alt = r'(<Section id="cases" bgClass="bg-\[#0A0A0A\]" textClass="text-white" kicker="Avaliações e Cases" title="Resultados construídos na raiz.">)(.*?)(</Section>)'

new_cases_content = """
        <p className="reveal max-w-2xl text-gray-400">
          Nós não medimos esforços para que nossas imersões e mentorias entreguem resultados excelentes. Histórias para você se inspirar.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {cases.map((c, index) => (
            <article key={c.title} className="reveal flex flex-col items-center">
              {/* Arch Image Container */}
              <div className="relative w-full aspect-[4/5] max-w-[320px] rounded-t-full overflow-hidden border border-white/10 bg-[#111111] p-1">
                <div className="w-full h-full rounded-t-full overflow-hidden relative">
                  <img src={`https://i.pravatar.cc/400?img=${index + 12}`} alt={c.title} className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                  
                  {/* Play Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#D9002B] rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(217,0,43,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(217,0,43,0.6)] transition-all">
                       <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 px-4 py-5 rounded-2xl text-center shadow-xl">
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#D9002B]">{c.kpi}</p>
                      <p className="text-sm font-bold text-white mt-2 leading-snug uppercase">{c.title}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="mt-8 text-left w-full px-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-3">Estudo de Caso 0{index + 1}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  {c.ctx}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-200">Solução & Resultado:</strong> {c.inter} {c.res}
                </p>
              </div>
            </article>
          ))}
        </div>
      """

match = re.search(cases_section_regex_alt, idx, re.DOTALL)
if match:
    idx = idx[:match.start(2)] + new_cases_content + idx[match.end(2):]

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

