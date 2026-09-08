import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

cta_old = r'<AnimatedButton href="#contato" className="btn-whatsapp w-fit mt-9 \[&>span\.invisible\]:px-9 \[&>span\.invisible\]:py-4">\s*QUERO FALAR SOBRE MINHA EMPRESA\s*</AnimatedButton>'
cta_new = r'''<AnimatedButton href="#contato" className="btn-whatsapp w-fit mx-auto mt-9 [&>span.invisible]:px-9 [&>span.invisible]:py-4">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>'''

idx = re.sub(cta_old, cta_new, idx, flags=re.DOTALL)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

