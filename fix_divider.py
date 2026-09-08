with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('<CurveDivider topBg="bg-white" bottomBg="bg-[#0A0A0A]" />', '')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

