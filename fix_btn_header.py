with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('<AnimatedButton href="#contato" className="btn-whatsapp text-[10px]">', '<AnimatedButton href="#contato" className="btn-whatsapp text-[10px] scale-90 origin-right">')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

