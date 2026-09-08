with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

if "CoverFlowCarousel" not in idx[:500]:
    idx = idx.replace(
        'import { useEffect, useRef, useState } from "react";',
        'import { useEffect, useRef, useState } from "react";\nimport { CoverFlowCarousel } from "@/components/ui/3-d-coverflow-carousel";'
    )

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)
