import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Fix the dark text on dark background in Autoridade
idx = idx.replace('<div className="space-y-4 leading-relaxed text-gray-600">', '<div className="space-y-4 leading-relaxed text-gray-400">')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

