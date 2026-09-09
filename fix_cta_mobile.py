import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update the final CTA section for better mobile responsiveness
old_cta = """      {/* Chamada final */}
      <section id="contato" className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="reveal bg-white/5 border border-white/10 relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
            Chamada Final
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Talvez você já saiba que alguma coisa precisa mudar.{" "}
            <span className="text-[#e5372b]">A questão agora é descobrir o quê.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz.
          </p>
          <AnimatedButton href="#contato" className="btn-whatsapp w-fit mx-auto mt-9 [&>span.invisible]:px-9 [&>span.invisible]:py-4">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>
          <p className="mt-5 text-xs text-gray-400">
            Converse com nossa equipe para descobrir o caminho ideal.
          </p>
        </div>
      </section>"""

new_cta = """      {/* Chamada final */}
      <section id="contato" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-28">
        <div className="reveal bg-white/5 border border-white/10 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-16 text-center">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
            Chamada Final
          </p>
          <h2 className="mx-auto mt-4 sm:mt-6 max-w-3xl text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            Talvez você já saiba que alguma coisa precisa mudar.{" "}
            <span className="text-[#e5372b]">A questão agora é descobrir o quê.</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base text-gray-400">
            O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz.
          </p>
          <AnimatedButton href="#contato" className="btn-whatsapp w-fit mx-auto mt-8 sm:mt-9 [&>span.invisible]:px-5 sm:[&>span.invisible]:px-9 [&>span.invisible]:py-3 sm:[&>span.invisible]:py-4 text-[9px] sm:text-xs md:text-sm">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>
          <p className="mt-5 text-[10px] sm:text-xs text-gray-400">
            Converse com nossa equipe para descobrir o caminho ideal.
          </p>
        </div>
      </section>"""

content = content.replace(old_cta, new_cta)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

