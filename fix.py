import re
with open("src/routes/index.tsx", "r") as f:
    content = f.read()

content = content.replace('bg-bg-white shadow-sm border border-gray-100', 'bg-white')
content = content.replace('border-bg-white shadow-sm border border-gray-100-border', 'border-gray-100')
content = content.replace('bg-primary/15', 'bg-[#D9002B]/10')
content = content.replace('bg-secondary/20', 'bg-[#1E5AE8]/10')
content = content.replace('bg-primary/45', 'hidden')
content = content.replace('bg-secondary/45', 'hidden')
content = content.replace('bg-secondary/30', 'hidden')
content = content.replace('text-secondary', 'text-[#1E5AE8]')
content = content.replace('bg-white shadow-sm border border-gray-100 p-4 text-sm text-gray-500', 'bg-white p-4 text-sm text-gray-500')
with open("src/routes/index.tsx", "w") as f:
    f.write(content)
