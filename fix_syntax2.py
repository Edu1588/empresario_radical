import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = re.sub(r'\n\s*\)\)\};\s*</div>\s*</div>', '', idx)
idx = re.sub(r'            \)\)\}\s*</div>\s*</div>', '', idx)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)
