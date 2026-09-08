import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('bg-white shadow-sm border border-gray-100', 'bg-white shadow-sm border border-gray-200')
with open("src/routes/index.tsx", "w") as f:
    f.write(idx)
