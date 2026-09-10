import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_historia = '''const historia = [
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

new_historia = '''const historia = [
  {
    title: "A Escala das Mega Lojas",
    period: "O VAREJO NA PRÁTICA",
    text: "Enquanto o mercado se acomodava em lojinhas convencionais, Edmar apostou na força das megaoperações. Construiu empreendimentos colossais de 3.000m² a 4.000m² com infraestrutura de ponta, provando que o interior comportava um varejo agressivo e de altíssimo padrão. Uma visão pioneira que mudou o mercado.",
    stats: [
      { value: 4000, prefix: "Até ", suffix: " m²", label: "Área por Mega Loja" },
      { value: 100, prefix: "", suffix: "%", label: "Foco no Resultado" }
    ]
  },
  {
    title: "O Império 'Edmais' e 'Lojões'",
    period: "EXPANSÃO NACIONAL",
    text: "O verdadeiro teste de um método é a sua capacidade de expansão. Edmar multiplicou o modelo, estruturando mais de uma centena de empresas e lojas espalhadas por vários estados, gerenciando faturamentos anuais colossais e liderando milhares de colaboradores na linha de frente.",
    stats: [
      { value: 100, prefix: "+", suffix: "", label: "Lojas e Empresas" },
      { value: 250, prefix: "R$ ", suffix: " M", label: "Faturamento Anual (Est.)" }
    ]
  },
  {
    title: "Crises e Sobrevivência Brutal",
    period: "A PROVA DE FOGO (2004)",
    text: "Em Leme, durante a construção de uma mega loja, o caixa secou. Concorrentes zombaram. Edmar não recuou: liquidou sua moto e um carro zero por vidros e materiais para a obra. Fez uma liquidação agressiva que gerou caixa limpo e inaugurou abarrotando a cidade inteira.",
    stats: [
      { value: 2, prefix: "", suffix: " Veículos", label: "Trocados na Obra" },
      { value: 0, prefix: "", suffix: " Opções", label: "De Desistir" }
    ]
  },
  {
    title: "58 Anos de Autoridade Real",
    period: "O LEGADO HOJE",
    text: "Tudo o que o mercado tenta ensinar hoje na teoria, Edmar viveu na prática, na dor e no sucesso. Esse império forjado a suor, riscos calculados e decisões pesadas é a base do seu projeto de Mentoria: ensinar exclusivamente o que ele testou e validou na trincheira.",
    stats: [
      { value: 58, prefix: "", suffix: "", label: "Anos de Varejo Raiz" },
      { value: 0, prefix: "", suffix: "", label: "Teoria de Palco" }
    ]
  }
];'''

content = content.replace(old_historia, new_historia)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

