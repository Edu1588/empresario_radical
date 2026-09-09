import re

with open("src/routes/__root.tsx", "r") as f:
    content = f.read()

old_font = 'href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap",'
new_font = 'href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Caveat:wght@500;600;700&display=swap",'

content = content.replace(old_font, new_font)

with open("src/routes/__root.tsx", "w") as f:
    f.write(content)

