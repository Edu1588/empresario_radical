import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Make sure dark sections don't have bg-white cards

# 1. Sintomas cards (in Raiz)
idx = idx.replace('bg-white p-4 text-sm text-gray-400', 'bg-white/5 border-white/10 p-4 text-sm text-gray-400')

# 2. Radical cards (in Radical)
idx = idx.replace('<div key={i} className="reveal bg-white shadow-sm border border-gray-100 rounded-2xl p-6 transition-transform hover:-translate-y-1">', '<div key={i} className="reveal bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 transition-transform hover:-translate-y-1">')

# 3. Radical extra text blocks
idx = idx.replace('<div className="reveal bg-white shadow-sm border border-gray-100 rounded-3xl p-8 leading-relaxed text-gray-400">', '<div className="reveal bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 leading-relaxed text-gray-400">')

# 4. Autoridade (it's white, so bg-white cards are fine, but let's make sure text is dark enough)
# Autoridade cards have 'text-white/85' but they are on white bg now
idx = idx.replace('text-white/85', 'text-gray-600')

# 5. Processo (it's dark, but has bg-[#0A0A0A] already)

# 6. Cases (it's white, so bg-white cards are fine)

# 7. FAQ (it's dark)

# Let's fix remaining weird `bg-white shadow-sm border border-gray-100` that should be dark
idx = idx.replace('<div className="reveal bg-white shadow-sm border border-gray-100 mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">', '<div className="reveal bg-white border border-gray-200 mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">') # This is in Diagnostico (light)

idx = idx.replace('<div className="bg-white shadow-sm border border-gray-100  overflow-hidden rounded-[2rem] p-2">', '<div className="bg-white/5 border border-white/10 overflow-hidden rounded-[2rem] p-2">') # Hero image container
idx = idx.replace('<div className="bg-white shadow-sm border border-gray-100 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400">', '<div className="bg-[#111] border border-white/10 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400">') # Hero image tooltip


with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

