import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# 1. Update Menu
menu_old = """<div className={`hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}>
          <a href="#edmar" className="hover:text-[#D9002B] transition-colors">Edmar</a>
          <a href="#solucoes" className="hover:text-[#D9002B] transition-colors">Soluções</a>
          <a href="#conteudos" className="hover:text-[#D9002B] transition-colors">Conteúdos</a>
          <a href="#conceito" className="hover:text-[#D9002B] transition-colors">Empresário Radical</a>
        </div>"""
menu_new = """<div className={`hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}>
          <a href="#conceito" className="hover:text-[#D9002B] transition-colors">Empresário Radical</a>
          <a href="#edmar" className="hover:text-[#D9002B] transition-colors">Edmar</a>
          <a href="#solucoes" className="hover:text-[#D9002B] transition-colors">Soluções</a>
          <a href="#conteudos" className="hover:text-[#D9002B] transition-colors">Conteúdos</a>
        </div>"""
content = content.replace(menu_old, menu_new)

# 2. Update "Sintoma vs Raiz" Grid
grid_old = """<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-gray-200 pt-16">
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Caixa</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Vende, fatura e movimenta, mas o dinheiro nunca sobra.</p>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Gestão</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">A empresa cresceu, mas os controles não acompanharam.</p>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Pessoas</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Existe equipe, mas tudo ainda chega e depende do dono.</p>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Crescimento</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Existe oportunidade no mercado, mas falta estrutura interna.</p>
               </div>
            </div>"""

grid_new = """<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-gray-200 pt-16">
               <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
                  <div className="h-40 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=60" alt="Caixa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Caixa</h4>
                     <p className="text-gray-500 font-light text-sm leading-relaxed">Vende, fatura e movimenta, mas o dinheiro nunca sobra.</p>
                  </div>
               </div>
               <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
                  <div className="h-40 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60" alt="Gestão" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Gestão</h4>
                     <p className="text-gray-500 font-light text-sm leading-relaxed">A empresa cresceu, mas os controles não acompanharam.</p>
                  </div>
               </div>
               <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
                  <div className="h-40 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60" alt="Pessoas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Pessoas</h4>
                     <p className="text-gray-500 font-light text-sm leading-relaxed">Existe equipe, mas tudo ainda chega e depende do dono.</p>
                  </div>
               </div>
               <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
                  <div className="h-40 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60" alt="Crescimento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Crescimento</h4>
                     <p className="text-gray-500 font-light text-sm leading-relaxed">Existe oportunidade no mercado, mas falta estrutura interna.</p>
                  </div>
               </div>
            </div>"""
content = content.replace(grid_old, grid_new)

# 3. Update Blue Buttons
# Find and replace Imersões and Palestras buttons.
btn1_old = """<a href={getWhatsAppLink(msgImersao)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#1E5AE8] text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#113a9e] transition-colors rounded-md shadow-[0_4px_14px_0_rgba(30,90,232,0.39)] relative z-10">
                    Colocar minha empresa na mesa
                  </a>"""
btn1_new = """<AnimatedButton href={getWhatsAppLink(msgImersao)} target="_blank" rel="noopener noreferrer" className="w-full btn-blue relative z-10">
                    Colocar minha empresa na mesa
                  </AnimatedButton>"""
content = content.replace(btn1_old, btn1_new)

btn2_old = """<a href={getWhatsAppLink(msgPalestra)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#1E5AE8] text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#113a9e] transition-colors rounded-md shadow-[0_4px_14px_0_rgba(30,90,232,0.39)]">
                    Solicitar proposta de palestra
                  </a>"""
btn2_new = """<AnimatedButton href={getWhatsAppLink(msgPalestra)} target="_blank" rel="noopener noreferrer" className="w-full btn-blue">
                    Solicitar proposta de palestra
                  </AnimatedButton>"""
content = content.replace(btn2_old, btn2_new)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

