with open("src/styles.css", "r") as f:
    css = f.read()

# Fix the CSS so we don't have empty gaps inside the button
css = css.replace('.btn-uiverse {\n    padding: 0; \n  display: flex;', '.btn-uiverse {\n  padding: 0;\n  display: flex;')

with open("src/styles.css", "w") as f:
    f.write(css)

