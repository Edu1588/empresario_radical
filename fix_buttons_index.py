import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# the header button is getting messed up by arbitrary padding overrides
# Let's fix all buttons to just be pure "btn-whatsapp", "btn-blue", "btn-red" and let CSS handle the width logic 
# The issue is the invisible span inside the component controls the width.
idx = idx.replace('text-[10px] [&>span]:px-5 [&>span]:py-2', 'text-[10px]')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

# Then fix the component
with open("src/components/ui/animated-button.tsx", "r") as f:
    btn = f.read()

# Instead of hardcoding px-8 py-4 on the invisible span, we use a utility class to keep it taking up the real size of its text and padding 
# But buttons might have different padding needs. The easiest way to make a button wrap its text tightly but with padding is to let the invisible span have padding.

btn = btn.replace('<span className="invisible block px-8 py-4">{children}</span>', '<span className="invisible block px-10 py-4">{children}</span>')

with open("src/components/ui/animated-button.tsx", "w") as f:
    f.write(btn)

