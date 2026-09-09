import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_layout = '''        <p className="reveal mt-10 max-w-3xl leading-relaxed text-gray-400">
          Muitos empresários passam anos tentando resolver os sintomas. Buscam mais vendas quando
          precisam recuperar margem. Cobram mais da equipe quando falta processo. Cortam custos
          quando falta gestão. Trabalham mais quando deveriam decidir melhor.
        </p>
        <p className="reveal mt-4 text-lg font-semibold">
          Antes de buscar a próxima solução, é preciso descobrir qual é o problema certo.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {cenarios.map((c) => (
            <div key={c} className="reveal flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {c}
            </div>
          ))}
        </div>
        <p className="reveal mt-10 text-xl font-extrabold">
          É aqui que começa uma gestão radical. <span className="text-[#D9002B]">Não no sintoma. Na raiz.</span>
        </p>'''

new_layout = '''        <div className="mx-auto mt-24 max-w-4xl text-center">
          <p className="reveal text-lg leading-relaxed text-gray-400">
            Muitos empresários passam anos tentando resolver os sintomas. Buscam mais vendas quando
            precisam recuperar margem. Cobram mais da equipe quando falta processo. Cortam custos
            quando falta gestão. Trabalham mais quando deveriam decidir melhor.
          </p>
          <p className="reveal mt-6 text-xl font-semibold text-white">
            Antes de buscar a próxima solução, é preciso descobrir qual é o problema certo.
          </p>
          
          <div className="mt-12 grid gap-4 sm:grid-cols-2 text-left">
            {cenarios.map((c) => (
              <div key={c} className="reveal flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6 text-sm text-gray-300 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9002B]/10 text-[#D9002B]">
                  <Activity className="h-5 w-5" />
                </span>
                <span className="leading-snug text-base">{c}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-16 inline-block rounded-full border border-[#D9002B]/20 bg-[#D9002B]/5 px-8 py-5">
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              É aqui que começa uma gestão radical. <span className="text-[#D9002B]">Não no sintoma. Na raiz.</span>
            </p>
          </div>
        </div>'''

content = content.replace(old_layout, new_layout)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

