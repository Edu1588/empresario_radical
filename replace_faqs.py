import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

old_faqs_pattern = re.compile(r'const faqs = \[\s*\{.*?\}\s*\];', re.DOTALL)

new_faqs = """const faqs = [
    {
      question: "A Mentoria funciona para qualquer segmento?",
      answer: "A base do trabalho é gestão empresarial, mas a adequação depende do momento, porte, desafio e disponibilidade para executar. Após entender seu cenário, indicaremos se a Mentoria é o caminho adequado."
    },
    {
      question: "Qual é a diferença entre Mentoria e Imersão?",
      answer: "A Mentoria acompanha decisões e execução ao longo de ciclos de 3 a 6 meses. A Imersão concentra diagnóstico, alinhamento e decisões em 1 a 2 dias. Em alguns casos, uma pode conduzir à outra."
    },
    {
      question: "Quanto tempo dura a Mentoria?",
      answer: "O formato-base prevê ciclos de 3 a 6 meses, definidos conforme o diagnóstico e a proposta aprovada."
    },
    {
      question: "Como contratar uma palestra?",
      answer: "Envie data, cidade, público, tema, objetivo e formato do evento. A equipe avaliará disponibilidade e enviará uma proposta personalizada."
    },
    {
      question: "Qual é o primeiro passo?",
      answer: "Preencher o formulário com o momento da empresa. A equipe analisa as informações e orienta o próximo movimento, sem obrigar você a escolher uma solução antes da conversa."
    }
  ];"""

content = re.sub(old_faqs_pattern, new_faqs, content)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

