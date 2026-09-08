import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

unsplash_imgs = "['https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&auto=format&fit=crop', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop'][index]"

idx = idx.replace('src={`https://i.pravatar.cc/400?img=${index + 40}`}', f'src={{{unsplash_imgs}}}')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

