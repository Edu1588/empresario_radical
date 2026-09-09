import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Fix Hero Background
old_hero_bg = """      <div className="hero-bg-layer fixed top-0 inset-x-0 h-[100vh] overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat opacity-30 transform -scale-x-100 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788952730/1745.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>"""

new_hero_bg = """      <div className="hero-bg-layer fixed top-0 inset-x-0 h-[100vh] overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -scale-x-100"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/10 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>"""
content = content.replace(old_hero_bg, new_hero_bg)

# 2. Fix Hero grid and remove card
old_hero_content_start = """      <section id="topo" className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>"""

new_hero_content_start = """      <section id="topo" className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="max-w-2xl">"""
content = content.replace(old_hero_content_start, new_hero_content_start)

old_hero_card = """            <div className="reveal hero-reveal mt-9 flex flex-wrap gap-3">
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
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788898824/empre_Radical.png"
                alt="Edmar, mentor do Empresário Radical"
                width={1024}
                height={1280}
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="bg-[#111] border border-white/10 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400">
              <span className="block text-sm font-bold text-white">Radical vem de raiz.</span>
              Menos achismo. Mais gestão. Mais decisão. Mais resultado.
            </div>
          </div>
        </div>
      </section>"""

new_hero_card = """            <div className="reveal hero-reveal mt-9 flex flex-wrap gap-3">
              <AnimatedButton href="#diagnostico" className="btn-red py-4 px-9">
                QUERO ENTENDER MEU CENÁRIO
              </AnimatedButton>
              <AnimatedButton href="#solucoes" className="btn-blue py-4 px-9">
                Ver soluções
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>"""
content = content.replace(old_hero_card, new_hero_card)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

