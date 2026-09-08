import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# 1. Add import for CoverFlowCarousel
if "CoverFlowCarousel" not in idx:
    idx = idx.replace('import { useState } from "react";', 'import { useState } from "react";\nimport { CoverFlowCarousel } from "../components/ui/3-d-coverflow-carousel";')

# 2. Update Diagnostico button with shake animation if marcados.length === 4
# Original button string:
# <AnimatedButton href="#contato" className="btn-whatsapp w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4">
# We can change it to:
# <AnimatedButton href="#contato" className={`btn-whatsapp w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4 ${marcados.length >= 4 ? "animate-[shake_0.5s_ease-in-out_infinite]" : ""}`}>

idx = idx.replace(
    '<AnimatedButton href="#contato" className="btn-whatsapp w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4">',
    '<AnimatedButton href="#contato" className={`btn-whatsapp w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4 ${marcados.length >= 4 ? "animate-[shake_0.8s_ease-in-out_infinite]" : ""}`}>'
)

# 3. Update the Hub section
hub_old = r'<div className="reveal mt-10 -mx-6 px-6 sm:mx-0 sm:px-0">.*?</div>\s*</div>'
hub_new = """<div className="reveal mt-10 -mx-6 sm:mx-0">
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
        </div>"""

idx = re.sub(hub_old, hub_new, idx, flags=re.DOTALL)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

