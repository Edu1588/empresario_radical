import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('className={`reveal bg-white/5 border border-white/10 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 ${\n                s.accent === "red" ? "" : ""\n              }`}', 'className="reveal bg-[#111111] border border-white/10 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2"')
idx = idx.replace('bg-white/5 border border-white/10 overflow-hidden rounded-[2rem]', 'bg-[#111111] border border-white/10 overflow-hidden rounded-[2rem]')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)
