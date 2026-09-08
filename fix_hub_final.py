import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Add import if missing
if "CoverFlowCarousel" not in idx:
    idx = idx.replace('import { useState } from "react";', 'import { useState } from "react";\nimport { CoverFlowCarousel } from "../components/ui/3-d-coverflow-carousel";')

# Add shake animation class to the Diagnostico button
idx = idx.replace(
    '<AnimatedButton href="#contato" className="btn-whatsapp w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4">',
    '<AnimatedButton href="#contato" className={`btn-whatsapp w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4 ${marcados.length === 4 ? "animate-shake" : ""}`}>'
)

# Find the Hub section
hub_pattern = r'<Section id="hub".*?</Section>'
match = re.search(hub_pattern, idx, flags=re.DOTALL)
if match:
    old_hub = match.group(0)
    
    new_hub = """<Section id="hub" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Hub de Conteúdos" title="Conhecimento para quem está do outro lado da mesa.">
        <p className="reveal text-gray-400 max-w-2xl">
          Nós não ensinamos gestão baseados apenas na teoria, nós construímos e operamos empresas reais. Descubra artigos, vídeos e materiais exclusivos.
        </p>
        
        {/* Carousel de Imagens de Conteúdo */}
        <div className="reveal mt-10 -mx-6 sm:mx-0">
          <CoverFlowCarousel 
            sectionLabel=""
            items={[
              { 
                tag: "Artigo", 
                titleLine1: "Gestão", 
                titleLine2: "Os Fundamentos",
                desc: "A base sólida para construir uma empresa que não depende de você.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                ctaText: "Ler Artigo"
              },
              { 
                tag: "Vídeo", 
                titleLine1: "Metas", 
                titleLine2: "Como Estruturar",
                desc: "Aprenda a definir e cobrar metas que a equipe realmente entende.",
                img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
                ctaText: "Assistir Vídeo"
              },
              { 
                tag: "Download", 
                titleLine1: "Indicadores", 
                titleLine2: "Guia Prático",
                desc: "Baixe a planilha essencial para acompanhar os números que importam.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                ctaText: "Baixar Material"
              },
              { 
                tag: "Artigo", 
                titleLine1: "Liderança", 
                titleLine2: "O Papel do Líder",
                desc: "O que significa ser um líder radical em tempos de crescimento.",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
                ctaText: "Ler Artigo"
              },
              { 
                tag: "Entrevista", 
                titleLine1: "Caixa", 
                titleLine2: "Protegendo o Lucro",
                desc: "Como blindar o financeiro e evitar surpresas no fim do mês.",
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
                ctaText: "Ver Conteúdo"
              }
            ]}
          />
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

    idx = idx.replace(old_hub, new_hub)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

