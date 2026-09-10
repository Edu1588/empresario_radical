import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_historia = '''const historia = [
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

new_historia = '''const historia = [
  {
    title: "A Escala das Mega Lojas",
    period: "O VAREJO NA PRÁTICA",
    text: "Enquanto o mercado se acomodava em lojinhas convencionais, Edmar apostou na força das megaoperações. Construiu empreendimentos colossais de 3.000m² a 4.000m² com infraestrutura de ponta, provando que o interior comportava um varejo agressivo e de altíssimo padrão. Uma visão pioneira que mudou o mercado.",
    stats: [
      { value: 4000, prefix: "Até ", suffix: " m²", label: "Área por Mega Loja" }
    ]
  },
  {
    title: "O Império 'Edmais' e 'Lojões'",
    period: "EXPANSÃO NACIONAL",
    text: "O verdadeiro teste de um método é a sua capacidade de expansão. Edmar multiplicou o modelo, estruturando mais de uma centena de empresas e lojas espalhadas por todos os estados, gerenciando faturamentos colossais e liderando milhares de colaboradores na linha de frente.",
    stats: [
      { value: 100, prefix: "+", suffix: "", label: "Lojas e Empresas" },
      { value: 27, prefix: "", suffix: "", label: "Estados Brasileiros Alcançados" }
    ]
  },
  {
    title: "Crises e Sobrevivência Brutal",
    period: "A PROVA DE FOGO (2004)",
    text: "Em Leme, durante a construção de uma mega loja, o caixa secou. Concorrentes zombaram. Edmar não recuou: negociou prazos elásticos de 6 meses no sufoco, fez uma liquidação cirúrgica que gerou caixa limpo e inaugurou a loja abarrotando a cidade inteira.",
    stats: [
      { value: 100, prefix: "", suffix: "%", label: "Estoque Convertido em Caixa" },
      { value: 6, prefix: "", suffix: " Meses", label: "De Prazo Negociado no Sufoco" }
    ]
  },
  {
    title: "58 Anos de Autoridade Real",
    period: "O LEGADO HOJE",
    text: "Tudo o que o mercado tenta ensinar hoje na teoria, Edmar viveu na prática, na dor e no sucesso. Esse império forjado a suor, riscos calculados e decisões pesadas é a base do seu projeto de Mentoria: ensinar exclusivamente o que ele testou e validou na trincheira.",
    stats: [
      { value: 58, prefix: "", suffix: "", label: "Anos de Varejo Raiz" }
    ]
  }
];'''

content = content.replace(old_historia, new_historia)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

