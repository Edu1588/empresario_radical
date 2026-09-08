import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Let's target the inner span paddings in the AnimatedButton component itself to handle the sizes automatically.

# Hero buttons need more padding:
idx = idx.replace('<AnimatedButton href="#contato" className="btn-whatsapp">', '<AnimatedButton href="#contato" className="btn-whatsapp [&>span.invisible]:px-10 [&>span.invisible]:py-4">')
idx = idx.replace('<AnimatedButton href="#solucoes" className="btn-blue">', '<AnimatedButton href="#solucoes" className="btn-blue [&>span.invisible]:px-10 [&>span.invisible]:py-4">')

# CTA needs more padding
idx = idx.replace('<AnimatedButton href="#contato" className="btn-whatsapp mt-9 mx-auto">', '<AnimatedButton href="#contato" className="btn-whatsapp mt-9 mx-auto [&>span.invisible]:px-12 [&>span.invisible]:py-5">')

# Solucoes buttons
idx = idx.replace('className={`mt-6 w-full', 'className={`mt-6 w-full [&>span.invisible]:py-4')

# Hub Button
idx = idx.replace('<AnimatedButton href="#contato" className="btn-blue mt-8 w-fit">', '<AnimatedButton href="#contato" className="btn-blue mt-8 w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4">')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

# And now reset the default padding in the component so it doesn't blow up everything else
with open("src/components/ui/animated-button.tsx", "r") as f:
    btn = f.read()

btn = btn.replace('<span className="invisible block px-10 py-4">{children}</span>', '<span className="invisible block px-6 py-3">{children}</span>')

with open("src/components/ui/animated-button.tsx", "w") as f:
    f.write(btn)

