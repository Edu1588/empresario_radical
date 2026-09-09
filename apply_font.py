import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_quote = '''            <p className="reveal font-semibold text-gray-900">
              Porque existe uma diferença enorme entre conhecer gestão e precisar fazer uma empresa
              funcionar.
            </p>'''

new_quote = '''            <p className="reveal text-3xl font-medium text-gray-800" style={{ fontFamily: "'Caveat', cursive" }}>
              "Porque existe uma diferença enorme entre conhecer gestão e precisar fazer uma empresa funcionar."
            </p>'''

content = content.replace(old_quote, new_quote)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

