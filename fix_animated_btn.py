import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

if "AnimatedButton" not in idx[:500]: # check imports
    idx = idx.replace('import { CoverFlowCarousel } from "../components/ui/3-d-coverflow-carousel";', 'import { CoverFlowCarousel } from "../components/ui/3-d-coverflow-carousel";\nimport { AnimatedButton } from "@/components/ui/animated-button";')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

