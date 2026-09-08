import re

with open('src/routes/index.tsx', 'r') as f:
    content = f.read()

# Add imports for AnimatedButton and Activity
if 'AnimatedButton' not in content:
    content = content.replace('import { createFileRoute } from "@tanstack/react-router";', 'import { createFileRoute } from "@tanstack/react-router";\nimport { AnimatedButton } from "@/components/ui/animated-button";\nimport { Activity } from "lucide-react";')

# 1. Update logo
logo_old = r'<span className="relative flex h-2\.5 w-2\.5">.*?</span>\s*EMPRESÁRIO <span className="text-gradient">RADICAL</span>'
logo_new = r'<Activity className="h-6 w-6 text-[#D9002B]" style={{ animation: "pulse 1.5s infinite" }} />\n            <span className="text-[#0A0A0A]">EMPRESÁRIO <span className="text-[#D9002B]">RADICAL</span></span>'
content = re.sub(logo_old, logo_new, content, flags=re.DOTALL)

# Also update the header classes to make it white background
content = content.replace('<div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">', '<div className="bg-white shadow-sm border border-gray-100 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">')
content = content.replace('className="hidden items-center gap-6 text-xs font-medium text-muted-foreground lg:flex"', 'className="hidden items-center gap-6 text-xs font-medium text-gray-500 lg:flex"')

# 2. Update Header Button
header_btn_old = r'<a\s*href="#contato"\s*className="rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-\[1\.03\]"\s*style=\{\{\s*background:\s*"var\(--grad-radical\)"\s*\}\}\s*>\s*Falar com a equipe\s*</a>'
header_btn_new = r'<AnimatedButton href="#contato" className="btn-whatsapp min-h-0 py-3 px-6 text-[10px]">\n            Falar com a equipe\n          </AnimatedButton>'
content = re.sub(header_btn_old, header_btn_new, content, flags=re.DOTALL)

# Remove generic backgrounds
content = content.replace('<div className="pointer-events-none fixed inset-0 -z-10">', '<div className="hidden">')

# 3. Change Hero layout to light theme
content = content.replace('className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground"', 'className="relative min-h-screen overflow-x-hidden bg-white font-sans text-[#0A0A0A]"')

# Replace text-gradient with solid red
content = content.replace('className="text-gradient"', 'className="text-[#D9002B]"')

# 4. Hero button
hero_btn_old = r'<a\s*href="#contato"\s*className="glow-red mt-9 inline-block rounded-full px-9 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-\[1\.03\]"\s*style=\{\{\s*background:\s*"var\(--grad-radical\)"\s*\}\}\s*>\s*QUERO ENTENDER MEU CENÁRIO\s*</a>'
hero_btn_new = r'<AnimatedButton href="#contato" className="btn-whatsapp mt-9 w-fit">\n            QUERO ENTENDER MEU CENÁRIO\n          </AnimatedButton>'
content = re.sub(hero_btn_old, hero_btn_new, content, flags=re.DOTALL)

# Replace text-muted-foreground with gray
content = content.replace('text-muted-foreground', 'text-gray-500')

with open('src/routes/index.tsx', 'w') as f:
    f.write(content)

