import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_jsx = r'''<div className="relative w-full aspect-\[4/5\] max-w-\[280px\] rounded-t-full overflow-hidden border border-white/10 bg-\[#111111\] p-1">
                <div className="w-full h-full rounded-t-full overflow-hidden relative">
                  <img src=\{s\.img\} alt=\{`Sintoma 0\$\{index \+ 1\}`\} className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                  
                  \{\/\* Play Button overlay \*\/\}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-\[#D9002B\] rounded-full flex items-center justify-center cursor-pointer shadow-\[0_0_20px_rgba\(217,0,43,0\.4\)\] pointer-events-auto hover:scale-110 hover:shadow-\[0_0_30px_rgba\(217,0,43,0\.6\)\] transition-all">
                       <div className="w-0 h-0 border-t-\[10px\] border-t-transparent border-l-\[16px\] border-l-white border-b-\[10px\] border-b-transparent ml-1"><\/div>
                    <\/div>
                  <\/div>'''

new_jsx = """<div className="relative w-full aspect-[4/5] max-w-[280px] rounded-[20px] overflow-hidden border border-white/10 bg-[#111111] p-1 shadow-lg">
                <div className="w-full h-full rounded-[16px] overflow-hidden relative">
                  <img src={s.img} alt={`Sintoma 0${index + 1}`} className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-500" />"""

content = re.sub(old_jsx, new_jsx, content)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

