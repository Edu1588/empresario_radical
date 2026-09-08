import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

cta_old = r'<a\s*href="#contato"\s*className=" mt-9 inline-block rounded-full px-9 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-\[1\.03\]"\s*>\s*QUERO FALAR SOBRE MINHA EMPRESA\s*</a>'
cta_new = r'''<AnimatedButton href="#contato" className="btn-whatsapp mt-9 py-4 px-9">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>'''

idx = re.sub(cta_old, cta_new, idx, flags=re.DOTALL)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

