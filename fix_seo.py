import re

with open("src/routes/__root.tsx", "r") as f:
    content = f.read()

old_meta = '''      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },'''

new_meta = '''      { title: "Empresário Radical" },
      { name: "description", content: "Gestão que vai à raiz do negócio para transformar problemas em decisões e decisões em resultado." },
      { name: "author", content: "Empresário Radical" },
      { property: "og:title", content: "Empresário Radical" },
      { property: "og:description", content: "Gestão que vai à raiz do negócio para transformar problemas em decisões e decisões em resultado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@empresarioradical" },'''

content = content.replace(old_meta, new_meta)

with open("src/routes/__root.tsx", "w") as f:
    f.write(content)

