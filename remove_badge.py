import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

badge_regex = r'\s*\{\/\* Highlight Badge \*\/\}\s*<div className="absolute bottom-4 left-4 right-4">\s*<div className="bg-\[\#0A0A0A\]\/90 backdrop-blur-md border border-white\/10 px-4 py-3 rounded-2xl text-center shadow-xl">\s*<p className="text-lg font-extrabold tracking-widest text-\[\#D9002B\]">0\{index \+ 1\}<\/p>\s*<\/div>\s*<\/div>'

content = re.sub(badge_regex, "", content)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

