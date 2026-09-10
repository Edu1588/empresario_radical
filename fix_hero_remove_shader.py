import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Remove StructureFlowCollection imports
content = content.replace('import { StructureFlowCollection } from "@designcodeio/threeui";\n', "")
content = content.replace('import "@designcodeio/threeui/style.css";\n', "")

old_bg = '''      {/* Background decoration elements */}
      {/* Removemos o pointer-events-none para que o canvas possa receber os eventos de mouse */}
      <div className="absolute top-0 inset-x-0 h-[100vh] z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 shader-frame pointer-events-auto">
          <StructureFlowCollection
            variant="dot-matrix"
            speed={1.00}
            gridScale={60}
            mouseAmount={1.20}
            pulseSpeed={0.40}
            hue={0}
            radius={0.150}
            opacity={0.35}
          />
        </div>
        <div className="absolute top-[-20rem] right-[-20rem] w-[50rem] h-[50rem] bg-[#e5372b]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] left-[-10rem] w-[30rem] h-[30rem] bg-[#1e5ae8]/5 rounded-full blur-[100px] pointer-events-none" />
      </div>'''

new_bg = '''      {/* Background decoration elements */}
      <div 
        className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0 overflow-hidden transition-opacity duration-75"
        style={{ opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#e5372b]/10 via-[#0A0A0A] to-[#1e5ae8]/10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[-20rem] right-[-20rem] w-[50rem] h-[50rem] bg-[#e5372b]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10rem] w-[30rem] h-[30rem] bg-[#1e5ae8]/10 rounded-full blur-[120px]" />
      </div>'''

content = content.replace(old_bg, new_bg)

old_hero_section = '<section id="topo" className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52">'
new_hero_section = '<section id="topo" className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52 transition-opacity duration-75" style={{ opacity: heroOpacity }}>'

content = content.replace(old_hero_section, new_hero_section)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

