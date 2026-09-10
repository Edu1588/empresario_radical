import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update the Quote
old_quote = '{'"'"'A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes.'"'"'.split(" ").map((word, wIdx, arr) => ('
new_quote = '{'"'"'O fracasso tem um preço. O sucesso não é diferente. Escolha qual preço você quer pagar.'"'"'.split(" ").map((word, wIdx, arr) => ('
content = content.replace(old_quote, new_quote)


# 2. Update the Historia array with the real facts
old_historia = '''const historia = [
  {
    title: "A Construção do Império",
    period: "O VAREJO NA PRÁTICA",
    text: "A trajetória de Edmar não foi construída em teorias, mas na linha de frente dos negócios. Começando do zero, construiu empresas sólidas no varejo, atingindo rapidamente a marca de múltiplos dígitos em faturamento e validando um modelo de gestão focado em margem, eficiência e controle absoluto do caixa.",
    stats: null
  },
  {
    title: "A Escala das Franquias",
    period: "EXPANSÃO NACIONAL",
    text: "O verdadeiro teste de um método é a sua capacidade de ser escalado. Edmar não apenas criou negócios, mas os multiplicou, estruturando uma rede gigante espalhada pelo país e gerenciando faturamentos anuais históricos. Liderando milhares de pessoas, ele viveu na pele o peso de operar em alta performance.",
    stats: [
      { value: 100, prefix: "+", suffix: "", label: "Lojas Franqueadas" },
      { value: 50, prefix: "R$", suffix: "M", label: "Faturamento Anual" }
    ]
  },
  {
    title: "A Gestão à Prova de Crise",
    period: "A ESCOLA DA VIDA",
    text: "Números expressivos não blindam uma empresa de crises. Ao longo dessa jornada, Edmar enfrentou turbulências econômicas e desafios brutais no mercado de franchising. Precisar reestruturar rotas, fechar torneiras e proteger a operação forjou sua visão cirúrgica sobre o que realmente mantém um negócio de pé.",
    stats: null
  },
  {
    title: "58 Anos de Legado",
    period: "HOJE",
    text: "Com quase seis décadas de vivência empresarial e faturamentos históricos acumulados, a autoridade de Edmar é provada pelo tempo. Hoje, o projeto Mentoria nasceu para compartilhar os princípios exatos que o fizeram escalar, sobreviver e prosperar, desenhados para quem conhece o outro lado da mesa.",
    stats: null
  }
];'''

new_historia = '''const historia = [
  {
    title: "A Origem nas Ruas",
    period: "O INÍCIO DE TUDO",
    text: "Aos 7 anos, Edmar começou vendendo no tabuleiro da mãe para motoristas de ônibus em Itabira. Aos 18, fundou sua primeira empresa de embalagens após bater o motor da sua Kombi. O varejo raiz, de porta em porta, sempre foi sua grande escola.",
    stats: null
  },
  {
    title: "A Escala dos 'Lojões'",
    period: "A CONSTRUÇÃO DO IMPÉRIO",
    text: "De vendedor a construtor de grandes redes (Lojão das Fábricas / Edmais). Edmar apostou em megaoperações quando todos abriam lojinhas. Construiu lojas de 3.000m² a 4.000m² enfrentando a desconfiança do mercado, provando que ousadia e gestão andam juntas.",
    stats: [
      { value: 58, prefix: "", suffix: "", label: "Anos de Vivência" },
      { value: 4, prefix: "+", suffix: " Mil m²", label: "em Mega Lojas" }
    ]
  },
  {
    title: "Crises e Resiliência Brutal",
    period: "A ESCOLA DA VIDA",
    text: "Em 2004, construindo a mega loja de Leme contra fortes concorrentes, o caixa zerou. Edmar não recuou: trocou sua moto e carro zero por vidros e materiais. Fez uma liquidação agressiva de brinquedos para gerar caixa e inaugurou a loja com as ruas lotadas.",
    stats: null
  },
  {
    title: "A Verdade Nua e Crua",
    period: "HOJE",
    text: "O que o mercado ensina na teoria, Edmar viveu na prática. Hoje, ele traz para a Mentoria Digital a sua maior filosofia: 'Quem não nasceu para servir, não serve para nascer'. Sem filtros, sem atalhos, focando apenas no que realmente traz resultado.",
    stats: null
  }
];'''

content = content.replace(old_historia, new_historia)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

