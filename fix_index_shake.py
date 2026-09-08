import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace(
    'animate-[shake_0.8s_ease-in-out_infinite]',
    'animate-shake'
)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)
