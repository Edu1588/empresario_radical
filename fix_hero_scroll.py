import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Make the hero background layer absolute instead of fixed so it scrolls up naturally
old_hero_bg = """      {/* Hero Background */}
      <div className="hero-bg-layer fixed top-0 inset-x-0 h-[100vh] overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -scale-x-100"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png')" }}
        />"""

new_hero_bg = """      {/* Hero Background */}
      <div className="absolute top-0 inset-x-0 h-[100vh] min-h-[800px] overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -scale-x-100"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png')" }}
        />"""

content = content.replace(old_hero_bg, new_hero_bg)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

