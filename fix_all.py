import re

# Fix Animated Button
with open("src/components/ui/animated-button.tsx", "r") as f:
    btn = f.read()

btn = btn.replace('<span><p>{children}</p></span>', '<span>{children}</span>')
with open("src/components/ui/animated-button.tsx", "w") as f:
    f.write(btn)

# Fix Index
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Revert Root Background to dark
idx = idx.replace('className="relative min-h-screen overflow-x-hidden bg-white font-sans text-[#0A0A0A]"', 'className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] font-sans text-white"')

# Revert Header to dark
idx = idx.replace('<div className="bg-white shadow-sm border border-gray-100 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">', '<div className="bg-[#111111] shadow-sm border border-white/10 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">')
idx = idx.replace('className="hidden items-center gap-6 text-xs font-medium text-gray-500 lg:flex"', 'className="hidden items-center gap-6 text-xs font-medium text-gray-400 lg:flex"')
idx = idx.replace('hover:text-[#0A0A0A]', 'hover:text-white')

# Fix Hero text colors
idx = idx.replace('text-gray-500', 'text-gray-400')
idx = idx.replace('text-[#0A0A0A]', 'text-white')
# We need to be careful with text-[#0A0A0A] globally because we might want it in white sections.
# Let's handle Section components by explicitly setting textClass if needed.

# Let's fix the Sections
idx = idx.replace('<Section id="raiz" bgClass="bg-[#F5F5F5]"', '<Section id="raiz" bgClass="bg-white" textClass="text-[#0A0A0A]"')
idx = idx.replace('<Section id="radical" bgClass="bg-white"', '<Section id="radical" bgClass="bg-[#F5F5F5]" textClass="text-[#0A0A0A]"')
idx = idx.replace('<Section id="autoridade" bgClass="bg-[#F5F5F5]"', '<Section id="autoridade" bgClass="bg-white" textClass="text-[#0A0A0A]"')
idx = idx.replace('<Section id="diagnostico" bgClass="bg-white"', '<Section id="diagnostico" bgClass="bg-[#0A0A0A]" textClass="text-white"')
idx = idx.replace('<Section id="solucoes" bgClass="bg-[#F5F5F5]"', '<Section id="solucoes" bgClass="bg-white" textClass="text-[#0A0A0A]"')
idx = idx.replace('<Section id="processo" bgClass="bg-white"', '<Section id="processo" bgClass="bg-[#F5F5F5]" textClass="text-[#0A0A0A]"')
idx = idx.replace('<Section id="cases" bgClass="bg-[#F5F5F5]"', '<Section id="cases" bgClass="bg-white" textClass="text-[#0A0A0A]"')
idx = idx.replace('<Section id="hub" bgClass="bg-[#0A0A0A]" textClass="text-white"', '<Section id="hub" bgClass="bg-[#0A0A0A]" textClass="text-white"')
idx = idx.replace('<Section id="faq" bgClass="bg-white"', '<Section id="faq" bgClass="bg-white" textClass="text-[#0A0A0A]"')

# Fix CTA Final
cta_old = r'<section id="contato" className="relative bg-white py-28">\s*<div className="mx-auto max-w-6xl px-6 text-center">\s*<p className="text-xs font-semibold uppercase tracking-\[0\.3em\] text-gray-400">\s*Chamada Final\s*</p>\s*<h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl text-white">\s*Talvez você já saiba que alguma coisa precisa mudar\. \{" "\}\s*<span className="text-\[#D9002B\]">A questão agora é descobrir o quê\.</span>\s*</h2>\s*<p className="mx-auto mt-6 max-w-xl text-gray-400">\s*O primeiro passo não é mudar tudo\. É descobrir onde realmente está a raiz\.\s*</p>'
cta_new = r'''<section id="contato" className="relative bg-[#0A0A0A] py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
            Chamada Final
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl text-white">
            Talvez você já saiba que alguma coisa precisa mudar.{" "}
            <span className="text-[#D9002B]">A questão agora é descobrir o quê.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz.
          </p>'''
idx = re.sub(cta_old, cta_new, idx)

# Hub tags
idx = idx.replace('text-[#0A0A0A]', 'text-gray-900') # Temporary replacement for hub
idx = idx.replace('className="reveal bg-white shadow-sm border border-gray-100 rounded-full px-5 py-2 text-sm text-white"', 'className="reveal bg-white/10 shadow-sm border border-white/10 rounded-full px-5 py-2 text-sm text-white"')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

