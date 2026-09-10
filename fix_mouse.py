import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_bg = '''      {/* Background decoration elements */}
      <div className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 shader-frame">
          <StructureFlowCollection
            variant="dot-matrix"
            speed={1.00}
            gridScale={60}
            mouseAmount={0.040}
            pulseSpeed={0.40}
            hue={0}
            radius={0.150}
            opacity={0.35}
          />
        </div>
        <div className="absolute top-[-20rem] right-[-20rem] w-[50rem] h-[50rem] bg-[#e5372b]/5 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] left-[-10rem] w-[30rem] h-[30rem] bg-[#1e5ae8]/5 rounded-full blur-[100px]" />
      </div>'''

new_bg = '''      {/* Background decoration elements */}
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

content = content.replace(old_bg, new_bg)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

