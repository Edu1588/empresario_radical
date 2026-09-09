import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_html = '''        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {sintomas.map((s, index) => (
            <article key={index} className="reveal flex flex-col items-center">
              {/* Arch Image Container */}
              <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-[20px] overflow-hidden border border-white/10 bg-[#111111] p-1 shadow-lg">
                <div className="w-full h-full rounded-[16px] overflow-hidden relative">
                  <img src={s.img} alt={`Sintoma 0${index + 1}`} className="w-full h-full object-cover opacity-90 hover:scale-105 transition-all duration-500" />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="mt-6 text-center w-full px-2">
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>'''

new_html = '''        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {sintomas.map((s, index) => (
            <article key={index} className="reveal group relative overflow-hidden border border-[#D9002B]/30 aspect-[16/10] md:aspect-[16/9] shadow-2xl">
              <img src={s.img} alt={`Sintoma 0${index + 1}`} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col z-10">
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm font-medium text-gray-300 leading-relaxed">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>'''

content = content.replace(old_html, new_html)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

