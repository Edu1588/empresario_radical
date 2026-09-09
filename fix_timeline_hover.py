import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update Timeline Card Hover
# The issue is `hover:bg-white/[0.02]` which makes it slightly transparent white. We'll change it to `hover:bg-[#1E5AE8]/20` or similar for a deep dark blue.
# Actually, the user asked for "azul escuro". Let's use `hover:bg-[#0c1b33]` or something similar that feels like a solid dark blue, or a semi-transparent dark blue `hover:bg-[#0c1838]/80`

old_timeline_card = 'className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-[#e5372b]/30 hover:bg-white/[0.02] transition-all duration-300 shadow-xl"'
new_timeline_card = 'className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-[#1E5AE8]/50 hover:bg-[#0c1838]/90 transition-all duration-300 shadow-xl"'

content = content.replace(old_timeline_card, new_timeline_card)

# 2. Add back the Card in the Hero section (which I removed previously, but the user wants it back)
# I need to find the Hero layout and restore the card with the background image inside it.
old_hero_content = """        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="max-w-2xl">
            <p className="reveal hero-reveal bg-white shadow-sm border border-gray-200 mb-7 inline-flex rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Mentorias • Imersões • Palestras Corporativas
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {"Seu problema pode não ser falta de vendas.".split(" ").map((w, i) => (
                <span key={i} className="hero-word mr-[0.25em] inline-block opacity-0">
                  {w === "vendas." ? <span className="text-[#e5372b]">vendas.</span> : w}
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
        </div>"""

new_hero_content = """        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="reveal hero-reveal bg-white shadow-sm border border-gray-200 mb-7 inline-flex rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Mentorias • Imersões • Palestras Corporativas
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {"Seu problema pode não ser falta de vendas.".split(" ").map((w, i) => (
                <span key={i} className="hero-word mr-[0.25em] inline-block opacity-0">
                  {w === "vendas." ? <span className="text-[#e5372b]">vendas.</span> : w}
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
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png"
                alt="Edmar, mentor do Empresário Radical"
                width={1024}
                height={1280}
                className="h-full w-full rounded-[1.6rem] object-cover transform -scale-x-100"
              />
            </div>
            <div className="bg-[#111] border border-white/10 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400 shadow-2xl">
              <span className="block text-sm font-bold text-white">Radical vem de raiz.</span>
              Menos achismo. Mais gestão. Mais decisão. Mais resultado.
            </div>
          </div>
        </div>"""

content = content.replace(old_hero_content, new_hero_content)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

