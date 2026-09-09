import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_solucoes = """      <Section id="solucoes" bgClass="bg-[#0A0A0A]" textClass="text-white" kicker="Soluções" title="Qual é o próximo movimento da sua empresa?">
        <p className="reveal max-w-2xl text-gray-400">
          Algumas empresas precisam de acompanhamento para reorganizar a gestão. Outras precisam
          parar, diagnosticar e decidir rapidamente. E algumas precisam transformar a mentalidade e a
          performance das pessoas. Três caminhos. Um mesmo princípio: chegar à raiz.
        </p>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 items-stretch hide-scrollbar">
          {solucoes.map((s) => (
            <article
              key={s.title}
              className={`reveal bg-[#111111] border border-white/10 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 snap-center shrink-0 w-[85vw] md:w-auto ${s.accent === "red" ? "hover:border-[#e5372b]/30 hover:shadow-[0_10px_30px_rgba(217,0,43,0.1)]" : "hover:border-[#1E5AE8]/30 hover:shadow-[0_10px_30px_rgba(30,90,232,0.15)]"}`}
            >
              <span
                className={`w-fit rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest ${
                  s.accent === "red" ? "bg-[#e5372b]/10 text-primary" : "bg-[#1e5ae8]/10 text-[#1e5ae8]"
                }`}
              >
                {s.tag}
              </span>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-3 text-sm font-semibold text-white">{s.lead}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.body}</p>
              <p className="mt-3 text-sm italic text-gray-400">{s.note}</p>
              <dl className="mt-6 space-y-1 border-t border-gray-100 pt-4 text-xs text-gray-400">
                <div className="flex gap-2">
                  <dt className="font-bold text-white">Formato:</dt>
                  <dd>{s.formato}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold text-white">Foco:</dt>
                  <dd>{s.foco}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-6">
                <AnimatedButton href="#contato" className={`w-full ${s.accent === "red" ? "btn-red" : "btn-blue"} [&>span.invisible]:py-3.5`}>
                  {s.cta}
                </AnimatedButton>
              </div>
            </article>
          ))}
        </div>
      </Section>"""

new_solucoes = """      <Section id="solucoes" bgClass="bg-white" textClass="text-[#0A0A0A]" kicker="Soluções" title="Qual é o próximo movimento da sua empresa?">
        <p className="reveal max-w-2xl text-gray-600">
          Algumas empresas precisam de acompanhamento para reorganizar a gestão. Outras precisam
          parar, diagnosticar e decidir rapidamente. E algumas precisam transformar a mentalidade e a
          performance das pessoas. Três caminhos. Um mesmo princípio: chegar à raiz.
        </p>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 items-stretch hide-scrollbar">
          {solucoes.map((s) => (
            <article
              key={s.title}
              className={`reveal bg-gray-50 border border-gray-200 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl snap-center shrink-0 w-[85vw] md:w-auto ${s.accent === "red" ? "hover:border-[#e5372b]/30" : "hover:border-[#1E5AE8]/30"}`}
            >
              <span
                className={`w-fit rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest ${
                  s.accent === "red" ? "bg-[#e5372b]/10 text-[#e5372b]" : "bg-[#1e5ae8]/10 text-[#1e5ae8]"
                }`}
              >
                {s.tag}
              </span>
              <h3 className="mt-4 text-xl font-extrabold text-[#0A0A0A]">{s.title}</h3>
              <p className="mt-3 text-sm font-semibold text-gray-900">{s.lead}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.body}</p>
              <p className="mt-3 text-sm italic text-gray-500">{s.note}</p>
              <dl className="mt-6 space-y-1 border-t border-gray-200 pt-4 text-xs text-gray-600">
                <div className="flex gap-2">
                  <dt className="font-bold text-gray-900">Formato:</dt>
                  <dd>{s.formato}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold text-gray-900">Foco:</dt>
                  <dd>{s.foco}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-6">
                <AnimatedButton href="#contato" className={`w-full ${s.accent === "red" ? "btn-red" : "btn-blue"} [&>span.invisible]:py-3.5`}>
                  {s.cta}
                </AnimatedButton>
              </div>
            </article>
          ))}
        </div>
      </Section>"""

content = content.replace(old_solucoes, new_solucoes)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

