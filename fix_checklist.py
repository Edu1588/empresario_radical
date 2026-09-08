import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# the checklist is inside diagnostico which is bg-[#F5F5F5]
# 'on' state
idx = idx.replace('on ? "bg-white shadow-sm border border-gray-100  translate-x-1 text-white"', 'on ? "bg-[#1E5AE8] shadow-md border-transparent translate-x-1 text-white"')
# 'off' state
idx = idx.replace('bg-white shadow-sm border border-gray-100 text-gray-600 hover:bg-white/[0.08]', 'bg-white shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50')
# check icon
idx = idx.replace('on ? "bg-white text-[#D9002B]" : "bg-white/10"', 'on ? "bg-white text-[#1E5AE8]" : "bg-gray-100 text-transparent"')
idx = idx.replace('on ? "border-transparent text-white" : "border-gray-100"', 'on ? "border-transparent text-white" : "border-gray-200"')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

