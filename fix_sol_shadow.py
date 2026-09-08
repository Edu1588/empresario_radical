import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = re.sub(
    r'className={`reveal bg-white/5 border border-white/10 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 \$\{\s*s\.accent === "red" \? "hover:shadow-\[var\(--shadow-\)\]" : "hover:shadow-\[var\(--shadow-\)\]"\s*\}`\}',
    'className={`reveal bg-[#111111] border border-white/10 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 snap-center shrink-0 w-[85vw] md:w-auto ${s.accent === "red" ? "hover:border-[#D9002B]/30 hover:shadow-[0_10px_30px_rgba(217,0,43,0.1)]" : "hover:border-[#1E5AE8]/30 hover:shadow-[0_10px_30px_rgba(30,90,232,0.15)]"}`}',
    idx
)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

