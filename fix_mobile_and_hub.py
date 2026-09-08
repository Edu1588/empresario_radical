import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Fix mobile in Solucoes
idx = idx.replace(
    'className="reveal bg-[#111111] border border-white/10 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2"',
    'className="reveal bg-[#111111] border border-white/10 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 snap-center shrink-0 w-[85vw] md:w-auto"'
)
idx = idx.replace(
    '<div className="mt-10 grid gap-6 lg:grid-cols-3 items-stretch">',
    '<div className="mt-10 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 items-stretch hide-scrollbar">'
)

# Hub section new design
hub_old = r'<Section id="hub" bgClass="bg-\[#0A0A0A\]" textClass="text-white" kicker="Hub de Conteúdos" title="Conhecimento para quem está do outro lado da mesa\.">.*?</Section>'

hub_new = """      <Section id="hub" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Hub de Conteúdos" title="Conhecimento para quem está do outro lado da mesa.">
        <p className="reveal text-gray-400 max-w-2xl">
          Nós não ensinamos gestão baseados apenas na teoria, nós construímos e operamos empresas reais. Descubra artigos, vídeos e materiais exclusivos.
        </p>
        
        {/* Carousel de Imagens de Conteúdo */}
        <div className="reveal mt-10 -mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
            {[
              { title: "Os Fundamentos da Gestão", tag: "Artigo", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" },
              { title: "Como estruturar metas", tag: "Vídeo", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" },
              { title: "Avaliando Indicadores", tag: "Download", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
              { title: "O Papel do Líder", tag: "Artigo", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="relative shrink-0 w-[70vw] sm:w-[300px] h-[400px] rounded-3xl overflow-hidden snap-center group cursor-pointer border border-white/10">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#D9002B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{item.tag}</span>
                  <h3 className="text-white font-bold text-lg mt-3 leading-snug group-hover:text-[#D9002B] transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-8 flex flex-wrap gap-3">
          {temas.map((t) => (
            <span key={t} className="bg-[#111111] border border-white/10 rounded-full px-5 py-2 text-sm text-gray-300">
              {t}
            </span>
          ))}
        </div>
        <AnimatedButton href="#contato" className="btn-blue w-fit mt-8 [&>span.invisible]:px-10 [&>span.invisible]:py-4">
          Explorar todos os conteúdos
        </AnimatedButton>
      </Section>"""

idx = re.sub(hub_old, hub_new, idx, flags=re.DOTALL)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

