import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# I need to fix the SVG CurveDivider components to use the exact solid red (#e5372b) 
# instead of the "bg-" class which doesn't actually exist in tailwind default config
# and is missing from styles.css

old_divider = '''export function CurveDivider({ topBg = "bg-white", bottomBg = "bg-gray-50" }) {
  const t = clsx(topBg).replace("bg-[", "").replace("]", "").replace("bg-white", "#fff").replace("bg-gray-50", "#f9fafb");
  const b = clsx(bottomBg).replace("bg-[", "").replace("]", "").replace("bg-white", "#fff").replace("bg-gray-50", "#f9fafb");'''

new_divider = '''export function CurveDivider({ topBg = "bg-white", bottomBg = "bg-gray-50" }) {
  const getHex = (bg: string) => {
    if (bg.includes('bg-[')) return bg.replace("bg-[", "").replace("]", "");
    if (bg === "bg-white") return "#ffffff";
    if (bg === "bg-gray-50") return "#f9fafb";
    if (bg === "bg-black") return "#000000";
    return "#0A0A0A"; // fallback
  };
  
  const t = getHex(clsx(topBg));
  const b = getHex(clsx(bottomBg));'''

content = content.replace(old_divider, new_divider)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

