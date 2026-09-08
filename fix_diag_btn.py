import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

btn_old = r'<a\s*href="#contato"\s*className=" shrink-0 rounded-full px-7 py-3\.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-\[1\.03\]"\s*>\s*QUERO ENTENDER MEU CENÁRIO\s*</a>'
btn_new = r'''<AnimatedButton href="#contato" className={`btn-whatsapp w-fit shrink-0 [&>span.invisible]:px-7 [&>span.invisible]:py-3.5 ${marcados.length === 4 ? "animate-shake" : ""}`}>
            QUERO ENTENDER MEU CENÁRIO
          </AnimatedButton>'''

idx = re.sub(btn_old, btn_new, idx, flags=re.DOTALL)
idx = idx.replace('<p className="max-w-lg text-sm text-gray-600">', '<p className="max-w-lg text-sm text-gray-400">')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

