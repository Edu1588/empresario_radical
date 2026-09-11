import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_footer = '''      <footer className="border-t border-gray-100 py-10 text-center text-xs text-gray-400">
        <p className="font-bold text-white">EMPRESÁRIO RADICAL</p>
        <p className="mt-2">Mentorias • Imersões • Palestras Corporativas</p>
      </footer>'''

new_footer = '''      <footer className="border-t border-white/10 py-12 text-center text-xs text-gray-500">
        <p className="font-bold text-white uppercase tracking-widest">Empresário Radical</p>
        <p className="mt-2 text-gray-400">Mentorias • Imersões • Palestras Corporativas</p>
        <p className="mt-10 opacity-70">
          Desenvolvido por <a href="https://www.fabricapublicidade.com.br/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">Fábrica Publicidade Digital</a>
        </p>
      </footer>'''

content = content.replace(old_footer, new_footer)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

