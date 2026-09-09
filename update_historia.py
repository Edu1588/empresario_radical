import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_historia = '''const historia = [
  {
    title: "A Origem: O Tabuleiro da Mãe",
    period: "O INÍCIO DE TUDO",
    text: "Aos 7 anos de idade, minha formação empreendedora já havia começado. Não foi em uma sala de aula, mas nas ruas, com um tabuleiro preparado pela minha mãe. Foi ali que aprendi, na prática, o valor de cada centavo e a importância do trabalho e da base familiar como pilares inegociáveis para a vida."
  },
  {
    title: "Os Primeiros Negócios",
    period: "A CONSTRUÇÃO",
    text: "Com o tempo, a vontade de fazer acontecer transformou pequenos esforços em empresas reais. Ergui negócios do zero, conquistei mercados e o varejo me ensinou dia a dia a dinâmica pesada de liderar equipes, controlar o caixa e entender o cliente."
  },
  {
    title: "Crises, Erros e Recomeços",
    period: "A ESCOLA DA VIDA",
    text: "A trajetória nunca é uma linha reta feita apenas de vitórias. Cometi erros pesados, enfrentei crises brutais e vi momentos em que as certezas desmoronaram. Precisar reconstruir tudo do zero forjou a minha verdadeira visão de gestão. A prática, de fato, deixa cicatrizes."
  },
  {
    title: "58 Anos de Legado",
    period: "HOJE",
    text: "Quase seis décadas de atuação provaram que a autoridade não se constrói com um currículo impecável, mas com a capacidade de se levantar e ajustar a rota. Hoje, o projeto Mentoria nasceu para compartilhar princípios reais, testados e validados por quem conhece o outro lado da mesa."
  }
];'''

new_historia = '''const historia = [
  {
    title: "A Origem: O Tabuleiro da Mãe",
    period: "O INÍCIO DE TUDO",
    text: "Aos 7 anos de idade, minha formação empreendedora já havia começado. Não foi em uma sala de aula, mas nas ruas, com um tabuleiro preparado pela minha mãe. Foi ali que eu, Edmar, aprendi na prática o valor de cada centavo e a importância do trabalho e da base familiar como pilares inegociáveis para a vida."
  },
  {
    title: "A Construção de Franquias",
    period: "A ESCALA DO VAREJO",
    text: "Com o tempo, a vontade de fazer acontecer transformou pequenos esforços em um império real. Ergui negócios do zero e escalei o modelo construindo redes de franquias de sucesso. O varejo me ensinou, dia a dia, a dinâmica pesada de liderar equipes, controlar o caixa e entender o cliente em grande escala."
  },
  {
    title: "Crises, Erros e Recomeços",
    period: "A ESCOLA DA VIDA",
    text: "A trajetória nunca é uma linha reta feita apenas de vitórias. Cometi erros pesados, enfrentei crises brutais no mercado de franquias e vi momentos em que as certezas desmoronaram. Precisar reconstruir tudo forjou a minha verdadeira visão de gestão. A prática, de fato, deixa cicatrizes."
  },
  {
    title: "58 Anos de Legado",
    period: "HOJE",
    text: "Quase seis décadas de atuação provaram que a autoridade não se constrói com um currículo impecável, mas com a capacidade de se levantar e ajustar a rota. Hoje, meu projeto de Mentoria nasceu para compartilhar princípios reais, testados e validados por quem conhece, na pele, o outro lado da mesa."
  }
];'''

content = content.replace(old_historia, new_historia)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

