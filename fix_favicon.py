import re

with open("src/routes/__root.tsx", "r") as f:
    content = f.read()

old_link = '{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" },'
new_link = '{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },'

content = content.replace(old_link, new_link)

with open("src/routes/__root.tsx", "w") as f:
    f.write(content)

