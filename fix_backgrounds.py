import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Remove CurveDivider completely
content = re.sub(r'\s*<CurveDivider[^>]*/>', '', content)

# 2. Remove 'border-y border-white/5' which creates line dividers between sections
content = content.replace("border-y border-white/5", "")

# 3. A Jornada background: make overlay lighter and image fully opaque
content = content.replace(
    '<div className="absolute inset-0 bg-[#111111]/85 z-10" />',
    '<div className="absolute inset-0 bg-[#111111]/50 z-10" />'
)
old_j_img = "bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975668/edmar1.png')] bg-cover bg-center bg-fixed opacity-60 z-0"
new_j_img = "bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975668/edmar1.png')] bg-cover bg-center bg-fixed opacity-100 z-0"
content = content.replace(old_j_img, new_j_img)

# 4. O Programa background: add bg-fixed, lighter overlay, fully opaque
old_p_bg = '<div className="absolute inset-0 bg-[#111111]/80 md:bg-gradient-to-r md:from-[#111111]/20 md:via-[#111111]/80 md:to-[#111111] z-10" />'
new_p_bg = '<div className="absolute inset-0 bg-[#111111]/50 md:bg-gradient-to-r md:from-transparent md:via-[#111111]/80 md:to-[#111111] z-10" />'
content = content.replace(old_p_bg, new_p_bg)

old_p_img = "bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975667/edmar3.png')] bg-cover bg-left md:bg-[center_left] opacity-50 z-0 mix-blend-luminosity"
new_p_img = "bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975667/edmar3.png')] bg-cover bg-left md:bg-[center_left] bg-fixed opacity-100 z-0"
content = content.replace(old_p_img, new_p_img)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

