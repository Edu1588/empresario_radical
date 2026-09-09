import re

# Update styles.css
with open("src/styles.css", "r") as f:
    styles = f.read()

styles = re.sub(r'#D9002B', '#e5372b', styles, flags=re.IGNORECASE)
styles = re.sub(r'#a80021', '#b3221b', styles, flags=re.IGNORECASE) # adjust hover red

with open("src/styles.css", "w") as f:
    f.write(styles)

# Update index.tsx
with open("src/routes/index.tsx", "r") as f:
    index = f.read()

index = re.sub(r'#D9002B', '#e5372b', index, flags=re.IGNORECASE)
index = re.sub(r'bg-\[\#1E5AE8\]', 'bg-[#1e5ae8]', index, flags=re.IGNORECASE)
index = re.sub(r'text-\[\#1E5AE8\]', 'text-[#1e5ae8]', index, flags=re.IGNORECASE)

with open("src/routes/index.tsx", "w") as f:
    f.write(index)

