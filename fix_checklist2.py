import re
with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Make the checkmark icon background less bright on off state since it's dark theme
idx = idx.replace('bg-white/10 text-transparent', 'bg-white/5 border border-white/10 text-transparent')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

