import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

import_statement = 'import { ProcessScrollingAnimation } from "../components/ui/process-scrolling-animation";\n'
if import_statement not in content:
    content = content.replace('import { CasesScrollingAnimation } from "../components/ui/cases-scrolling-animation";', 'import { CasesScrollingAnimation } from "../components/ui/cases-scrolling-animation";\n' + import_statement)

process_old = """{/* 7. MÉTODO */}
      <section className="py-32 px-6 md:px-12 bg-white">
         <div className="max-w-[1000px] mx-auto text-center mb-20">
            <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">O Processo</span>
            <h2 className="font-sans font-semibold tracking-tight text-4xl md:text-5xl text-[#0A0A0A]">Da raiz ao resultado.</h2>
         </div>
         <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Diagnosticar", desc: "Entender sem maquiar números." },
              { title: "Identificar a raiz", desc: "Separar causas de sintomas." },
              { title: "Priorizar", desc: "Definir o que precisa ser enfrentado." },
              { title: "Decidir", desc: "Transformar diagnóstico em decisões claras." },
              { title: "Executar", desc: "Responsáveis, prazos e indicadores." },
              { title: "Medir", desc: "Acompanhar impacto e corrigir rota." },
              { title: "Crescer", desc: "Construir crescimento sobre operação mais saudável." }
            ].map((step, idx) => (
               <div key={idx} className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#D9002B] font-bold text-3xl mb-4">0{idx + 1}</div>
                  <h4 className="font-bold text-lg mb-2 text-[#0A0A0A]">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
               </div>
            ))}
         </div>
         <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-[#0A0A0A]">Diagnóstico sem execução vira relatório. Execução sem diagnóstico vira tentativa.</p>
         </div>
      </section>"""

process_new = """{/* 7. MÉTODO */}
      <section className="py-32 px-6 md:px-12 bg-white">
         <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row-reverse gap-20">
            <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start text-left lg:text-right">
               <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">O Processo</span>
               <h2 className="font-sans font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] mb-6">Da raiz ao resultado.</h2>
               <p className="text-gray-500 font-light text-lg mb-10">Diagnóstico sem execução vira relatório. Execução sem diagnóstico vira tentativa.</p>
            </div>
            <div className="w-full lg:w-2/3">
               <ProcessScrollingAnimation steps={[
                  { title: "Diagnosticar", desc: "Entender sem maquiar números." },
                  { title: "Identificar a raiz", desc: "Separar causas de sintomas." },
                  { title: "Priorizar", desc: "Definir o que precisa ser enfrentado." },
                  { title: "Decidir", desc: "Transformar diagnóstico em decisões claras." },
                  { title: "Executar", desc: "Responsáveis, prazos e indicadores." },
                  { title: "Medir", desc: "Acompanhar impacto e corrigir rota." },
                  { title: "Crescer", desc: "Construir crescimento sobre operação mais saudável." }
               ]} />
            </div>
         </div>
      </section>"""

content = content.replace(process_old, process_new)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

