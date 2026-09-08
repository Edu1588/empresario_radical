import re

with open('src/routes/index.tsx', 'r') as f:
    content = f.read()

# Update Section component signature
section_comp_old = r'''function Section\(\{
  id,
  kicker,
  title,
  children,
\}\: \{
  id\: string;
  kicker\: string;
  title\: string;
  children\: React\.ReactNode;
\}\) \{
  return \(
    <section id=\{id\} className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-20">'''

section_comp_new = r'''function Section({
  id,
  kicker,
  title,
  children,
  bgClass = "",
  textClass = "text-[#0A0A0A]",
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
  bgClass?: string;
  textClass?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-28 py-24 ${bgClass} ${textClass}`}>
      <div className="mx-auto max-w-6xl px-6">'''

content = re.sub(section_comp_old, section_comp_new, content)

# And close the wrapper div inside Section:
content = content.replace('      {children}\n    </section>', '      {children}\n      </div>\n    </section>')


# Now replace individual sections:
# <Section id="raiz" kicker="Sintoma vs. Raiz" title="Vender mais não conserta uma empresa desorganizada. Às vezes, só faz o problema crescer.">
content = content.replace('<Section id="raiz"', '<Section id="raiz" bgClass="bg-[#F5F5F5]"')
content = content.replace('<Section id="radical"', '<Section id="radical" bgClass="bg-white"')
content = content.replace('<Section id="autoridade"', '<Section id="autoridade" bgClass="bg-[#F5F5F5]"')
content = content.replace('<Section id="diagnostico"', '<Section id="diagnostico" bgClass="bg-white"')
content = content.replace('<Section id="solucoes"', '<Section id="solucoes" bgClass="bg-[#F5F5F5]"')
content = content.replace('<Section id="processo"', '<Section id="processo" bgClass="bg-white"')
content = content.replace('<Section id="cases"', '<Section id="cases" bgClass="bg-[#F5F5F5]"')
content = content.replace('<Section id="hub"', '<Section id="hub" bgClass="bg-[#0A0A0A]" textClass="text-white"')
content = content.replace('<Section id="faq"', '<Section id="faq" bgClass="bg-white"')


# Replace 'glass' and 'glass-strong' with solid styles
content = content.replace('glass-strong', 'bg-white shadow-sm border border-gray-100')
content = content.replace('glass', 'bg-white shadow-sm border border-gray-100')

# Also fix the hub tags and FAQ text colors so they work on white cards
content = content.replace('className="reveal bg-white shadow-sm border border-gray-100 rounded-full px-5 py-2 text-sm text-foreground/90"', 'className="reveal bg-white shadow-sm border border-gray-100 rounded-full px-5 py-2 text-sm text-[#0A0A0A]"')
content = content.replace('text-foreground/90', 'text-[#0A0A0A]')
content = content.replace('text-foreground', 'text-[#0A0A0A]')

# For "Falar com a equipe" in solucoes
content = re.sub(r'<a\s*href="#contato"\s*className="mt-6 rounded-full border border-glass-border px-5 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"\s*>\s*\{s\.cta\}\s*</a>', r'<AnimatedButton href="#contato" className={`mt-6 w-full ${s.accent === "red" ? "btn-red" : "btn-blue"}`}>{s.cta}</AnimatedButton>', content)

# Remove background gradients and borders
content = content.replace('style={{ background: "var(--grad-radical)" }}', '')
content = content.replace('glow-blue', '')
content = content.replace('glow-red', '')

# Replace Final CTA Section
cta_old = r'<section id="contato" className="relative mx-auto max-w-6xl px-6 py-28">\s*<div className="reveal bg-white shadow-sm border border-gray-100  relative overflow-hidden rounded-\[2\.5rem\] p-10 text-center sm:p-16">\s*<p className="text-xs font-semibold uppercase tracking-\[0\.3em\] text-gray-500">\s*Chamada Final\s*</p>\s*<h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">\s*Talvez você já saiba que alguma coisa precisa mudar\. \{" "\}\s*<span className="text-\[#D9002B\]">A questão agora é descobrir o quê\.</span>\s*</h2>\s*<p className="mx-auto mt-6 max-w-xl text-gray-500">\s*O primeiro passo não é mudar tudo\. É descobrir onde realmente está a raiz\.\s*</p>\s*<a\s*href="#contato"\s*className=" mt-9 inline-block rounded-full px-9 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-\[1\.03\]"\s*>\s*QUERO FALAR SOBRE MINHA EMPRESA\s*</a>'

cta_new = r'''<section id="contato" className="relative bg-white py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Chamada Final
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl text-[#0A0A0A]">
            Talvez você já saiba que alguma coisa precisa mudar.{" "}
            <span className="text-[#D9002B]">A questão agora é descobrir o quê.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-500">
            O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz.
          </p>
          <AnimatedButton href="#contato" className="btn-whatsapp mx-auto mt-9">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>'''
content = re.sub(cta_old, cta_new, content)

with open('src/routes/index.tsx', 'w') as f:
    f.write(content)

