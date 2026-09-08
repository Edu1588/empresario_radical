import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Make the header button smaller
idx = idx.replace('<AnimatedButton href="#contato" className="btn-whatsapp">', '<AnimatedButton href="#contato" className="btn-whatsapp text-[10px] [&>span]:px-5 [&>span]:py-2">')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

