import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update CurveDivider
old_curve = r'''function CurveDivider\(\{ topBg, bottomBg \}: \{ topBg: string; bottomBg: string \}\) \{
  const colorMap: Record<string, string> = \{
    "bg-\[#0A0A0A\]": "text-\[#0A0A0A\]",
    "bg-\[#111111\]": "text-\[#111111\]",
    "bg-white": "text-white",
  \};
  return \(
    <div className=\{`w-full \$\{bottomBg\} leading-none`\}>
      <svg viewBox="0 0 100 20" preserveAspectRatio="none" className=\{`w-full h-6 md:h-12 \$\{colorMap\[topBg\]\} fill-current`\}>
        <path d="M0,0 H100 V0 H55 C52,0 52,15 50,15 C48,15 48,0 45,0 H0 Z" />
      </svg>
    </div>
  \);
\}'''

new_curve = """function CurveDivider({ topBg, bottomBg }: { topBg: string; bottomBg: string }) {
  const colorMap: Record<string, string> = {
    "bg-[#0A0A0A]": "text-[#0A0A0A]",
    "bg-[#111111]": "text-[#111111]",
    "bg-white": "text-white",
  };
  return (
    <div className={`w-full ${bottomBg} leading-none relative`}>
      <svg viewBox="0 0 100 20" preserveAspectRatio="none" className={`w-full h-6 md:h-12 ${colorMap[topBg]} fill-current`}>
        <path d="M0,0 H100 V0 H55 C52,0 52,15 50,15 C48,15 48,0 45,0 H0 Z" />
      </svg>
      <div className="absolute inset-x-0 top-0 flex justify-center pt-[2px] md:pt-[6px]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-50 md:w-5 md:h-5">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
}"""

content = re.sub(old_curve, new_curve, content)

# 2. Update Image mix-blend
old_img = r'className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-500"'
new_img = 'className="w-full h-full object-cover opacity-90 hover:scale-105 transition-all duration-500"'

content = content.replace(old_img, new_img)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

