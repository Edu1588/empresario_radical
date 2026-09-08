import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Replace the `sintomas` array
old_array = r'const sintomas = \[\s*"Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro.",\s*"Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade.",\s*"Mais clientes sem controle aumentam o faturamento, mas também o problema de caixa.",\s*"Empresa que depende do dono para tudo até cresce. Mas dificilmente cresce saudável.",\s*\];'
new_array = """const sintomas = [
  {
    text: "Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  },
  {
    text: "Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade.",
    img: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=600"
  },
  {
    text: "Mais clientes sem controle aumentam o faturamento, mas também o problema de caixa.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
  },
  {
    text: "Empresa que depende do dono para tudo até cresce. Mas dificilmente cresce saudável.",
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=600"
  },
];"""

content = re.sub(old_array, new_array, content)

# 2. Replace the JSX
old_jsx = r'<div className="mt-10 grid gap-4 md:grid-cols-2">\s*\{sintomas\.map\(\(s, i\) => \(\s*<div key=\{i\} className="reveal bg-\[#111111\] border border-white/10 rounded-2xl p-6 transition-transform hover:-translate-y-1">\s*<span className="text-xs font-bold tracking-widest text-\[#D9002B\]">0\{i \+ 1\}</span>\s*<p className="mt-3 text-sm leading-relaxed text-white">\{s\}</p>\s*</div>\s*\)\)\}\s*</div>'

new_jsx = """<div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {sintomas.map((s, index) => (
            <article key={index} className="reveal flex flex-col items-center">
              {/* Arch Image Container */}
              <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-t-full overflow-hidden border border-white/10 bg-[#111111] p-1">
                <div className="w-full h-full rounded-t-full overflow-hidden relative">
                  <img src={s.img} alt={`Sintoma 0${index + 1}`} className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                  
                  {/* Play Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-[#D9002B] rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(217,0,43,0.4)] pointer-events-auto hover:scale-110 hover:shadow-[0_0_30px_rgba(217,0,43,0.6)] transition-all">
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
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>"""

content = re.sub(old_jsx, new_jsx, content)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

