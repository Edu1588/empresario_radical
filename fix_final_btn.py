import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('<AnimatedButton href="#contato" className="btn-whatsapp mt-9 w-fit mx-auto">', '<AnimatedButton href="#contato" className="btn-whatsapp mt-9 mx-auto">')
with open("src/routes/index.tsx", "w") as f:
    f.write(idx)
