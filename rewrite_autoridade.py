import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Remove the old autoridade section entirely (from {/* Autoridade */} to </Section>)
old_autoridade_regex = r'\s*\{\/\* Autoridade \*\/\}.*?<\/Section>'
content = re.sub(old_autoridade_regex, '', content, flags=re.DOTALL)

# 2. Insert the new Autoridade section right after the Hero section closing tag
# The Hero ends with:
#       </section>
#
#       {/* Sintoma vs Raiz */}

hero_end = '''      </section>

      {/* Sintoma vs Raiz */}'''

new_autoridade = '''      </section>

      {/* A História / Autoridade */}
      <CurveDivider topBg="bg-[#0A0A0A]" bottomBg="bg-[#e5372b]" />
      <section id="autoridade" className="relative w-full bg-[#e5372b] text-white py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="reveal space-y-6 relative z-10">
            <div className="inline-flex items-center gap-3 border border-white/30 bg-black/10 rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              A Jornada
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]" style={{ fontFamily: "'Sora', sans-serif" }}>
              58 anos de varejo.<br />
              <span className="text-[#0A0A0A]">Da teoria à prática.</span>
            </h2>
            <div className="space-y-4 text-white/95 text-lg leading-relaxed pt-4 font-medium">
              <p>
                Tudo começou aos 7 anos de idade, com um tabuleiro preparado pela minha mãe. Foi ali, vendendo nas ruas, que a minha formação empreendedora começou. A escola da vida não ensina apenas a vender; ensina a ler o comportamento humano e a valorizar cada centavo.
              </p>
              <p>
                Mas a jornada não foi uma linha reta. Ao longo de quase seis décadas, vivenciei de tudo: ergui negócios do zero, conquistei grandes mercados, mas também cometi erros pesados. Enfrentei crises brutais e precisei reconstruir tudo quando as certezas desmoronaram.
              </p>
              <p>
                A verdadeira autoridade não vem de um currículo impecável ou de teorias de palco. Ela vem da capacidade de se levantar, ajustar a rota e voltar mais forte. A gestão que funciona é forjada na realidade, nas dificuldades diárias e na coragem de tomar decisões difíceis.
              </p>
            </div>
            <p className="mt-8 text-3xl font-bold text-[#0A0A0A] quote-container" style={{ fontFamily: "'Caveat', cursive" }}>
              {'"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes."'.split("").map((char, index) => (
                <span key={index} className="quote-char opacity-0 inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
          <div className="reveal relative z-10">
            <div className="bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788214935/empresarioRadical6.png"
                alt="Edmar, empresário com 58 anos de experiência"
                className="w-full h-auto object-cover rounded-[1.4rem]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      </section>
      <CurveDivider topBg="bg-[#e5372b]" bottomBg="bg-[#0A0A0A]" />

      {/* Sintoma vs Raiz */}'''

content = content.replace(hero_end, new_autoridade)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

