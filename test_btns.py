import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Make sure buttons look right. The invisible span must not mess up layout.
# We fixed the CSS so now we have `.btn-uiverse .anim-bg-1`
# Let's check the JSX for buttons
