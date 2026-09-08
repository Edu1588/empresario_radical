with open("src/styles.css", "r") as f:
    css = f.read()

# Remove width: fit-content so w-full works
css = css.replace('width: fit-content;', '')

with open("src/styles.css", "w") as f:
    f.write(css)

