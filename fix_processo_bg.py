import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('<Section id="processo" bgClass="bg-[#111111]" textClass="text-white"', '<Section id="processo" bgClass="bg-white" textClass="text-gray-900"')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)
