import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Fix Sintoma cards: "border border-gray-100 bg-white/5 border-white/10" -> "border border-white/10 bg-white/5"
idx = idx.replace('border border-gray-100 bg-white/5 border-white/10', 'border border-white/10 bg-white/5')

# Fix CTA section box (it's inside #0A0A0A bg, so it should be dark)
idx = idx.replace('<div className="reveal bg-white shadow-sm border border-gray-100  relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16">', '<div className="reveal bg-white/5 border border-white/10 relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16">')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

