with open("src/styles.css", "r") as f:
    css = f.read()

# Make sure invisible span forces width but is hidden
css = css.replace('.btn-uiverse {', '.btn-uiverse {\n  padding: 0 !important;')
with open("src/styles.css", "w") as f:
    f.write(css)

# Update AnimatedButton to use px-8 py-4 on the span to drive the size
with open("src/components/ui/animated-button.tsx", "r") as f:
    btn = f.read()

btn = btn.replace('<span className="invisible block px-2">{children}</span>', '<span className="invisible block px-8 py-4">{children}</span>')

with open("src/components/ui/animated-button.tsx", "w") as f:
    f.write(btn)

