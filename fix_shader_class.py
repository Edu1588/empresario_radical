import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

content = content.replace('<div className="absolute inset-0 opacity-40">', '<div className="absolute inset-0 opacity-40 shader-frame">')

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

