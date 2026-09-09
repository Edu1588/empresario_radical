with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_div = '<div className="absolute top-0 inset-x-0 h-screen min-h-[800px] overflow-hidden pointer-events-none z-0">'
new_div = '<div className="hero-bg-layer fixed top-0 inset-x-0 h-[100vh] overflow-hidden pointer-events-none z-0">'

content = content.replace(old_div, new_div)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

