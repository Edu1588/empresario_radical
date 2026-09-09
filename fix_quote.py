import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Fix quote wrapping
old_quote_regex = r'\{\'"A diferença entre conhecer gestão.*?\}\)\}'

new_quote = '''{'"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes."'.split(" ").map((word, wIdx, arr) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, cIdx) => (
                    <span key={cIdx} className="quote-char opacity-0 inline-block">{char}</span>
                  ))}
                  {wIdx !== arr.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}'''

content = re.sub(old_quote_regex, new_quote, content, flags=re.DOTALL)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

