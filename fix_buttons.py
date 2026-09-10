import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Fix fade variables
old_fade = '''      const fadeStart = 50;
      const fadeEnd = 600;'''

new_fade = '''      const fadeStart = 150;
      const fadeEnd = 850;'''
content = content.replace(old_fade, new_fade)

# Fix parallax direction (make them go UP)
old_text_parallax = '          <div style={{ transform: `translateY(${heroScroll * 0.4}px)` }}>'
new_text_parallax = '          <div style={{ transform: `translateY(${-heroScroll * 0.3}px)` }}>'
content = content.replace(old_text_parallax, new_text_parallax)

old_img_parallax = '          <div className="reveal hero-reveal relative" style={{ transform: `translateY(${heroScroll * 0.15}px)` }}>'
new_img_parallax = '          <div className="reveal hero-reveal relative" style={{ transform: `translateY(${-heroScroll * 0.15}px)` }}>'
content = content.replace(old_img_parallax, new_img_parallax)

# Give buttons their own layer so they don't fade out as quickly if we want, 
# but actually changing the global heroOpacity fadeStart and fadeEnd to 150/850 
# already prevents them from "erasing" too quickly. They will now "go up and fade out".

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

