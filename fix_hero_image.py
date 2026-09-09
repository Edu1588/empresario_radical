import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Remove the full-screen background image from Hero completely
old_hero_bg = """      {/* Hero Background */}
      <div 
        className="fixed top-0 inset-x-0 h-[100vh] min-h-[800px] overflow-hidden pointer-events-none z-0 transition-opacity duration-75"
        style={{ opacity: heroOpacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -scale-x-100"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/10 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>"""

new_hero_bg = """      {/* Background decoration elements */}
      <div className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0">
        <div className="absolute top-[-20rem] right-[-20rem] w-[50rem] h-[50rem] bg-[#e5372b]/5 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] left-[-10rem] w-[30rem] h-[30rem] bg-[#1e5ae8]/5 rounded-full blur-[100px]" />
      </div>"""

content = content.replace(old_hero_bg, new_hero_bg)

# 2. Modify the card image ratio to 3:4 (4/3 aspect ratio class doesn't exist natively for vertical, but we can use aspect-[3/4])
old_card = """          <div className="reveal hero-reveal relative">
            <div className="bg-[#111111] border border-white/10 overflow-hidden rounded-[2rem] p-2">
              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png"
                alt="Edmar, mentor do Empresário Radical"
                width={1024}
                height={1280}
                className="h-full w-full rounded-[1.6rem] object-cover transform -scale-x-100"
              />
            </div>
            <div className="bg-[#111] border border-white/10 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400 shadow-2xl">
              <span className="block text-sm font-bold text-white">Radical vem de raiz.</span>
              Menos achismo. Mais gestão. Mais decisão. Mais resultado.
            </div>
          </div>"""

new_card = """          <div className="reveal hero-reveal relative">
            <div className="bg-[#111111] border border-white/10 overflow-hidden rounded-[2rem] p-2">
              <div className="relative w-full aspect-[3/4] rounded-[1.6rem] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png"
                  alt="Edmar, mentor do Empresário Radical"
                  className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 object-[center_top]"
                />
              </div>
            </div>
            <div className="bg-[#111] border border-white/10 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400 shadow-2xl z-10">
              <span className="block text-sm font-bold text-white">Radical vem de raiz.</span>
              Menos achismo. Mais gestão. Mais decisão. Mais resultado.
            </div>
          </div>"""

content = content.replace(old_card, new_card)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

