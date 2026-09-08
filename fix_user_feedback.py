import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# 1. Hero Button
hero_btn_old = r'<a href="#diagnostico" className="glow-red rounded-full px-7 py-3\.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-\[1\.03\]" style={{ background: "var\(--grad-radical\)" }}>\s*QUERO ENTENDER MEU CENÁRIO\s*</a>'
hero_btn_new = r'<AnimatedButton href="#diagnostico" className="btn-red py-4 px-9">\n                QUERO ENTENDER MEU CENÁRIO\n              </AnimatedButton>'
idx = re.sub(hero_btn_old, hero_btn_new, idx)

# 2. Sintomas vs Raiz cards
sintoma_old = r'<div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">\s*\{sintomas\.map\(\(s, index\) => \(.*?</article>\s*\)\)\}\s*</div>'
sintoma_new = """<div className="mt-10 grid gap-4 md:grid-cols-2">
          {sintomas.map((s, i) => (
            <div key={i} className="reveal bg-[#111111] border border-white/10 rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <span className="text-xs font-bold tracking-widest text-[#D9002B]">0{i + 1}</span>
              <p className="mt-3 text-sm leading-relaxed text-white">{s}</p>
            </div>
          ))}
        </div>"""
idx = re.sub(sintoma_old, sintoma_new, idx, flags=re.DOTALL)

# 3. Solucoes buttons
sol_btn_old = r'<a href="#contato" className=\{`mt-auto rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors text-white \$\{s\.accent === "red" \? "bg-\[#D9002B\] hover:bg-\[#D9002B\]/80" : "bg-\[#1E5AE8\] hover:bg-\[#1E5AE8\]/80"\}\`\}>\s*\{s\.cta\}\s*</a>'
sol_btn_new = r'''<div className="mt-auto pt-6">
                <AnimatedButton href="#contato" className={`w-full ${s.accent === "red" ? "btn-red" : "btn-blue"} [&>span.invisible]:py-3.5`}>
                  {s.cta}
                </AnimatedButton>
              </div>'''
idx = re.sub(sol_btn_old, sol_btn_new, idx, flags=re.DOTALL)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

