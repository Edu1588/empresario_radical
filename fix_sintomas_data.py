import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_sintomas = '''const sintomas = [
  {
    text: "Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/6365.jpg"
  },
  {
    text: "Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/4239672.jpg"
  },
  {
    text: "Mais clientes sem controle aumentam o faturamento, mas também o problema de caixa.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/70656.jpg"
  },
  {
    text: "Empresa que depende do dono para tudo até cresce. Mas dificilmente cresce saudável.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/47879.jpg"
  },
];'''

new_sintomas = '''const sintomas = [
  {
    title: "Vendas sem Margem",
    text: "Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/6365.jpg"
  },
  {
    title: "Equipe sem Processos",
    text: "Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/4239672.jpg"
  },
  {
    title: "Crescimento sem Controle",
    text: "Mais clientes sem controle aumentam o faturamento, mas também o problema de caixa.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/70656.jpg"
  },
  {
    title: "Dependência Extrema",
    text: "Empresa que depende do dono para tudo até cresce. Mas dificilmente cresce saudável.",
    img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/47879.jpg"
  },
];'''

content = content.replace(old_sintomas, new_sintomas)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

