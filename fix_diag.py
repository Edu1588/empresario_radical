import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = re.sub(
    r'<Section id="diagnostico" bgClass="bg-\[#F5F5F5\]" textClass="text-\[#0A0A0A\]"',
    '<Section id="diagnostico" bgClass="bg-[#111111]" textClass="text-white"',
    idx
)
idx = re.sub(
    r'<p className="reveal max-w-2xl text-gray-600">',
    '<p className="reveal max-w-2xl text-gray-400">',
    idx, count=1 # Only first one inside diagnostico? Let's just do it directly.
)
# Button states
idx = idx.replace(
    'on ? "bg-[#1E5AE8] shadow-md border-transparent translate-x-1 text-white" : "bg-white shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50"',
    'on ? "bg-[#1E5AE8] shadow-md border-transparent translate-x-1 text-white" : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"'
)
idx = idx.replace(
    'on ? "border-transparent text-primary-foreground" : "border-gray-100"',
    'on ? "border-transparent text-white" : "border-gray-200"'
)
idx = idx.replace(
    '<div className="reveal bg-white border border-gray-200 mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">',
    '<div className="reveal bg-[#0A0A0A] border border-white/10 mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">'
)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

