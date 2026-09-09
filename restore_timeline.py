import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# I see the problem. The timeline array `historia` mapping got accidentally deleted during the previous `sed` operation that fixed the quote. 
# Let's restore the timeline blocks!

old_jornada_content = '''            <p className="mt-8 text-2xl font-medium text-gray-300 quote-container" style={{ fontFamily: "'Caveat', cursive" }}>
              {'"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes."'.split(" ").map((word, wIdx, arr) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, cIdx) => (
                    <span key={cIdx} className="quote-char opacity-0 inline-block">{char}</span>
                  ))}
                  {wIdx !== arr.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}
            </p>
          </div>
          
          <div className="mt-24 reveal text-center max-w-4xl mx-auto">
             
            <div className="mt-12 flex justify-center">'''

new_jornada_content = '''            <p className="mt-8 text-2xl font-medium text-gray-300 quote-container" style={{ fontFamily: "'Caveat', cursive" }}>
              {'"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes."'.split(" ").map((word, wIdx, arr) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, cIdx) => (
                    <span key={cIdx} className="quote-char opacity-0 inline-block">{char}</span>
                  ))}
                  {wIdx !== arr.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e5372b]/10 via-[#e5372b]/50 to-[#e5372b]/10 md:-translate-x-1/2"></div>
            
            <div className="space-y-16">
              {historia.map((h, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className={`reveal relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                    {/* Center Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#e5372b] border-4 border-[#111111] shadow-[0_0_15px_rgba(229,55,43,0.5)] -translate-x-1/2 mt-1.5 z-10"></div>
                    
                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-[#e5372b]/30 hover:bg-white/[0.02] transition-all duration-300 shadow-xl">
                        <span className="text-[#e5372b] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{h.period}</span>
                        <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{h.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-[15px]">
                          {h.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-24 reveal text-center max-w-4xl mx-auto">
             
            <div className="mt-12 flex justify-center">'''

content = content.replace(old_jornada_content, new_jornada_content)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

