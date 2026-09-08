import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('mr-[0.28em]', 'mr-[0.25em]')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

