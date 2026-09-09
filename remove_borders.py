import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Remove the line border-b border-white/20
old_processo = '''        <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <div className="reveal flex items-center gap-4 border-b border-white/20 pb-3 mb-8 w-max">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-gray-400">O PROGRAMA</span>
            </div>'''

new_processo = '''        <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <div className="reveal flex items-center gap-4 pb-3 mb-8 w-max">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-gray-400">O PROGRAMA</span>
            </div>'''

content = content.replace(old_processo, new_processo)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

