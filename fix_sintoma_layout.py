import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Make sure the font sizes on Sintoma vs Raiz cards are good.
old_sintomas = '''              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col z-10">
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm font-medium text-gray-300 leading-relaxed">
                  {s.text}
                </p>
              </div>'''

new_sintomas = '''              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col z-10">
                <h3 className="text-2xl md:text-[22px] font-bold text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>{s.title}</h3>
                <p className="text-[15px] font-medium text-gray-300 leading-relaxed max-w-[90%]">
                  {s.text}
                </p>
              </div>'''

content = content.replace(old_sintomas, new_sintomas)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

