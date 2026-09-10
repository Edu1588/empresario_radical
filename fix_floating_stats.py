import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_timeline_block = '''                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col h-full">
                        <span className="text-[#e5372b] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{h.period}</span>
                        <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{h.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-[15px] mb-6">
                          {h.text}
                        </p>
                        
                        {h.stats && (
                          <div className={`flex flex-wrap gap-6 mt-auto pt-6 border-t border-white/10 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                            {h.stats.map((stat, sIdx) => (
                              <div key={sIdx} className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                </span>
                                <span className="text-xs uppercase tracking-widest text-[#e5372b] mt-1 font-bold">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>'''

new_timeline_block = '''                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col h-full">
                        <span className="text-[#e5372b] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{h.period}</span>
                        <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{h.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-[15px]">
                          {h.text}
                        </p>
                      </div>
                    </div>

                    {/* Stats Box (Opposite side on Desktop) */}
                    {h.stats && (
                      <div className={`hidden md:flex w-full md:w-1/2 items-center ${isEven ? 'pl-16 justify-start text-left' : 'pr-16 justify-end text-right'}`}>
                        <div className={`flex flex-col gap-8`}>
                          {h.stats.map((stat, sIdx) => (
                            <div key={sIdx} className="flex flex-col">
                              <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                              </span>
                              <span className="text-sm uppercase tracking-widest text-[#e5372b] mt-2 font-bold">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Mobile Stats Box (Under content) */}
                    {h.stats && (
                      <div className="flex md:hidden w-full pl-16">
                        <div className="flex flex-wrap gap-8 mt-2">
                          {h.stats.map((stat, sIdx) => (
                            <div key={sIdx} className="flex flex-col">
                              <span className="text-4xl font-extrabold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                              </span>
                              <span className="text-xs uppercase tracking-widest text-[#e5372b] mt-1 font-bold">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}'''

content = content.replace(old_timeline_block, new_timeline_block)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

