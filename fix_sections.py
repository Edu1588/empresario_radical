import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. RAIZ -> DARK
content = content.replace('<Section id="raiz" bgClass="bg-white" textClass="text-gray-900"', '<Section id="raiz" bgClass="bg-[#0A0A0A]" textClass="text-white"')
# Change cards in Raiz (they are 'bg-white p-4 text-sm text-gray-500')
content = content.replace('bg-white p-4 text-sm text-gray-500', 'bg-white/5 border border-white/10 p-4 text-sm text-gray-400')

# 2. RADICAL -> DARK
content = content.replace('<Section id="radical" bgClass="bg-[#F5F5F5]" textClass="text-gray-900"', '<Section id="radical" bgClass="bg-[#111111]" textClass="text-white"')

# 3. AUTORIDADE -> WHITE (keep as is)
# But let's check text colors
content = re.sub(r'(<Section id="autoridade".*?>.*?</Section>)', lambda m: m.group(1).replace('text-gray-400', 'text-gray-600'), content, flags=re.DOTALL)
content = re.sub(r'(<Section id="autoridade".*?>.*?</Section>)', lambda m: m.group(1).replace('bg-white/5', 'bg-gray-100'), content, flags=re.DOTALL)

# 4. DIAGNOSTICO -> LIGHT (#F5F5F5)
content = content.replace('<Section id="diagnostico" bgClass="bg-[#0A0A0A]" textClass="text-white"', '<Section id="diagnostico" bgClass="bg-[#F5F5F5]" textClass="text-[#0A0A0A]"')
content = re.sub(r'(<Section id="diagnostico".*?>.*?</Section>)', lambda m: m.group(1).replace('text-gray-400', 'text-gray-600'), content, flags=re.DOTALL)
content = re.sub(r'(<Section id="diagnostico".*?>.*?</Section>)', lambda m: m.group(1).replace('border-white/10', 'border-gray-200').replace('bg-white/5', 'bg-white'), content, flags=re.DOTALL)

# 5. SOLUCOES -> DARK (#0A0A0A)
content = content.replace('<Section id="solucoes" bgClass="bg-white" textClass="text-gray-900"', '<Section id="solucoes" bgClass="bg-[#0A0A0A]" textClass="text-white"')
content = re.sub(r'(<Section id="solucoes".*?>.*?</Section>)', lambda m: m.group(1).replace('text-[#0A0A0A]', 'text-white'), content, flags=re.DOTALL)
content = re.sub(r'(<Section id="solucoes".*?>.*?</Section>)', lambda m: m.group(1).replace('bg-white shadow-sm border border-gray-100', 'bg-white/5 border border-white/10'), content, flags=re.DOTALL)

# 6. PROCESSO -> DARK (#111111)
content = content.replace('<Section id="processo" bgClass="bg-[#F5F5F5]" textClass="text-gray-900"', '<Section id="processo" bgClass="bg-[#111111]" textClass="text-white"')
content = re.sub(r'(<Section id="processo".*?>.*?</Section>)', lambda m: m.group(1).replace('bg-white shadow-sm border border-gray-100', 'bg-[#0A0A0A] border border-white/10'), content, flags=re.DOTALL)

# 7. CASES -> WHITE (keep)
content = re.sub(r'(<Section id="cases".*?>.*?</Section>)', lambda m: m.group(1).replace('text-gray-400', 'text-gray-600'), content, flags=re.DOTALL)

# 8. HUB -> DARK (#0A0A0A) (keep)

# 9. FAQ -> DARK (#111111)
content = content.replace('<Section id="faq" bgClass="bg-white" textClass="text-gray-900"', '<Section id="faq" bgClass="bg-[#111111]" textClass="text-white"')
content = re.sub(r'(<Section id="faq".*?>.*?</Section>)', lambda m: m.group(1).replace('bg-white shadow-sm border border-gray-100', 'bg-[#0A0A0A] border border-white/10'), content, flags=re.DOTALL)


with open("src/routes/index.tsx", "w") as f:
    f.write(content)

