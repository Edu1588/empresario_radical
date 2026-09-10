import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Replace the button at the end of the timeline with big numbers columns
old_bottom = '''          <div className="mt-24 reveal text-center max-w-4xl mx-auto">
            
            <div className="mt-12 flex justify-center">
               <AnimatedButton href="#raiz" className="btn-red py-4 px-9 text-sm">
                  VER COMO A GESTÃO RADICAL FUNCIONA
               </AnimatedButton>
            </div>
          </div>'''

new_bottom = '''          {/* Big Numbers do Edmar - Fim da Jornada */}
          <div className="mt-32 pt-16 border-t border-white/10 reveal">
            <h3 className="text-center text-xl md:text-2xl font-bold mb-12 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
              A solidez do Método Edmar em números:
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto text-center divide-x-0 md:divide-x divide-white/10">
              
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e5372b] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  <AnimatedCounter value={58} suffix="+" />
                </span>
                <span className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Anos de Varejo
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e5372b] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  <AnimatedCounter value={100} prefix="+" />
                </span>
                <span className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Lojas Construídas
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e5372b] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  <AnimatedCounter value={250} prefix="R$" suffix="M" />
                </span>
                <span className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Faturamento/Ano
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e5372b] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  <AnimatedCounter value={3} prefix="+" suffix=" Mil" />
                </span>
                <span className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Colaboradores Geridos
                </span>
              </div>
              
            </div>
          </div>'''

content = content.replace(old_bottom, new_bottom)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

