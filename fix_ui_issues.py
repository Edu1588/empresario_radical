import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# 1. Hero Button
hero_btn_old = r'<a\s*href="#diagnostico"\s*className=" rounded-full px-7 py-3\.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-\[1\.03\]"\s*>'
hero_btn_new = r'<a href="#diagnostico" className="glow-red rounded-full px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]" style={{ background: "var(--grad-radical)" }}>'
idx = re.sub(hero_btn_old, hero_btn_new, idx)

# 2. Sintoma vs Raiz
sintoma_old = r'<div className="mt-10 grid gap-4 md:grid-cols-2">\s*\{sintomas\.map\(\(s, i\) => \(\s*<div key=\{i\} className="reveal bg-\[#0A0A0A\] border border-white/10 rounded-2xl p-6 transition-transform hover:-translate-y-1">\s*<span className="text-xs font-bold tracking-widest text-primary">0\{i \+ 1\}</span>\s*<p className="mt-3 text-sm leading-relaxed text-white">\{s\}</p>\s*</div>\s*\)\)\}\s*</div>'
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


# 3. Solucoes Buttons
sol_btn_old = r'<a\s*href="#contato"\s*className="mt-6 rounded-full border border-gray-100 px-5 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"\s*>'
sol_btn_new = r'<a href="#contato" className={`mt-auto rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors text-white ${s.accent === "red" ? "bg-[#D9002B] hover:bg-[#D9002B]/80" : "bg-[#1E5AE8] hover:bg-[#1E5AE8]/80"}`}>'
idx = re.sub(sol_btn_old, sol_btn_new, idx, flags=re.DOTALL)


# 4. O Processo
processo_old = r'\{processo\.map\(\(p\) => \(\s*<div key=\{p\.n\} className="reveal bg-\[#0A0A0A\] border border-white/10 relative overflow-hidden rounded-3xl p-7">\s*<span className="text-5xl font-extrabold text-gradient">\{p\.n\}</span>\s*<h3 className="mt-3 text-lg font-bold">\{p\.t\}</h3>\s*<p className="mt-2 text-sm leading-relaxed text-gray-400">\{p\.d\}</p>\s*</div>\s*\)\)\}'
processo_new = """{processo.map((p) => (
            <div key={p.n} className="reveal bg-white shadow-sm border border-gray-200 relative overflow-hidden rounded-3xl p-7">
              <span className="text-5xl font-extrabold text-[#D9002B]/20">{p.n}</span>
              <h3 className="mt-3 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.d}</p>
            </div>
          ))}"""
idx = re.sub(processo_old, processo_new, idx, flags=re.DOTALL)


# 5. Hub de Conteudos
hub_old = r'<div className="reveal mt-8 flex flex-wrap gap-3">\s*\{temas\.map\(\(t\) => \(\s*<span key=\{t\} className="bg-\[#111111\] border border-white/10 rounded-full px-5 py-2 text-sm text-gray-300">\s*\{t\}\s*</span>\s*\)\)\}\s*</div>\s*<AnimatedButton href="#contato" className="btn-blue w-fit mt-8 \[&>span\.invisible\]:px-10 \[&>span\.invisible\]:py-4">\s*Explorar todos os conteúdos\s*</AnimatedButton>'
hub_new = """<div className="reveal mt-12 flex justify-center w-full">
          <AnimatedButton href="#contato" className="btn-blue w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4">
            Explorar todos os conteúdos
          </AnimatedButton>
        </div>"""
idx = re.sub(hub_old, hub_new, idx, flags=re.DOTALL)


with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

