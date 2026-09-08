with open("src/styles.css", "r") as f:
    css = f.read()

# Make sure buttons look like buttons without shrinking
css = css.replace('.btn-uiverse {', '.btn-uiverse {\n  min-width: 160px;')
with open("src/styles.css", "w") as f:
    f.write(css)
