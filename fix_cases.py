import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

cases_old = r'<Section id="cases" bgClass="bg-white" textClass="text-gray-900" kicker="Avaliações e Cases" title="Resultados construídos na raiz\.">.*?</Section>'
cases_new = """<Section id="cases" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Avaliações e Cases" title="Resultados construídos na raiz.">
        <p className="reveal text-xs uppercase tracking-widest text-gray-600">
          Dados em validação
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="reveal bg-[#111111] border border-white/10 rounded-3xl p-7">
              <p className="text-sm font-extrabold text-[#D9002B]">{c.kpi}</p>
              <h3 className="mt-2 text-base font-bold">{c.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-400">
                <li><b className="text-white">Contexto:</b> {c.ctx}</li>
                <li><b className="text-white">Diagnóstico:</b> {c.diag}</li>
                <li><b className="text-white">Intervenção:</b> {c.inter}</li>
                <li><b className="text-white">Resultado:</b> {c.res}</li>
              </ul>
            </article>
          ))}
        </div>
      </Section>"""

idx = re.sub(cases_old, cases_new, idx, flags=re.DOTALL)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

