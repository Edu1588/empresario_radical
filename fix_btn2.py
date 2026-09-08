import re
with open("src/routes/index.tsx", "r") as f:
    content = f.read()

pattern = r'<a\s*href="#solucoes"\s*className="bg-white shadow-sm border border-gray-100 rounded-full px-7 py-3\.5 text-sm font-semibold transition-colors hover:bg-white/10"\s*>\s*Ver soluções\s*</a>'
new_btn = r'<AnimatedButton href="#solucoes" className="btn-blue py-4 px-9">\n                Ver soluções\n              </AnimatedButton>'
content = re.sub(pattern, new_btn, content)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)
