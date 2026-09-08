import re
with open("src/components/ui/animated-button.tsx", "r") as f:
    btn = f.read()

btn = btn.replace('<>\n      <div>\n        <span>{children}</span>\n      </div>', '<>\n      <span className="invisible">{children}</span>\n      <div>\n        <span>{children}</span>\n      </div>')

with open("src/components/ui/animated-button.tsx", "w") as f:
    f.write(btn)
