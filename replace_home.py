import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Replace Menu
menu_old = """<div className={`hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}>
          <a href="#historia" className="hover:text-[#D9002B] transition-colors">História</a>
          <a href="#filosofia" className="hover:text-[#D9002B] transition-colors">Filosofia</a>
          <a href="#servicos" className="hover:text-[#D9002B] transition-colors">Serviços</a>
          <a href="#legado" className="hover:text-[#D9002B] transition-colors">Resultados</a>
        </div>"""
menu_new = """<div className={`hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}>
          <a href="#edmar" className="hover:text-[#D9002B] transition-colors">Edmar</a>
          <a href="#solucoes" className="hover:text-[#D9002B] transition-colors">Soluções</a>
          <a href="#conteudos" className="hover:text-[#D9002B] transition-colors">Conteúdos</a>
          <a href="#conceito" className="hover:text-[#D9002B] transition-colors">Empresário Radical</a>
        </div>"""
content = content.replace(menu_old, menu_new)

# Replace Hero Content
hero_old_regex = re.compile(r'<span className="text-\[#D9002B\] text-xs font-bold uppercase tracking-\[0\.2em\] mb-4 block">Manifesto de chão de loja</span>.*?QUERO DESCOBRIR O QUE ESTÁ TRAVANDO MINHA EMPRESA\s*</AnimatedButton>\s*</motion\.div>\s*</div>', re.DOTALL)
# Wait, let me just replace the specific SplitText and P tag.
hero_splittext = """<SplitText 
              text="DA BARRACA AOS 7 <br/> ANOS À <br/> CONSTRUÇÃO DE <br/> MAIS DE 100 LOJAS."
              className="font-sans font-bold text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] leading-[1.05] text-white mb-6 tracking-tight uppercase"
              delay={0.1}
            />
            <p className="font-sans font-semibold text-gray-300 text-base md:text-lg lg:text-xl max-w-xl leading-snug uppercase tracking-tight mt-6 mb-10">
              SEU NEGÓCIO NÃO PRECISA TERMINAR NA CRISE.
            </p>"""
hero_new_text = """<h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-[70px] leading-[1.05] text-white mb-6 tracking-tight">
              Seu problema pode não ser falta de vendas.
            </h1>
            <p className="font-sans font-light text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mt-6 mb-10">
              Talvez sua empresa venda e não tenha margem. Cresça e não tenha gestão. Tenha equipe e continue dependendo de você. 
              <br/><br/>
              O Empresário Radical vai à raiz do negócio para transformar problemas em decisões e decisões em resultado.
            </p>"""
content = content.replace(hero_splittext, hero_new_text)

content = content.replace('Manifesto de chão de loja', 'Mentorias • Imersões • Palestras Corporativas')
content = content.replace('Converse com a equipe sobre o seu cenário', 'QUERO DESCOBRIR O QUE ESTÁ TRAVANDO MINHA EMPRESA')


# We will isolate everything from `{/* 2. ECOSSISTEMA */}` to `{/* 9. RESULTADOS REAIS */}`
sections_pattern = re.compile(r'\{\/\* 2\. ECOSSISTEMA \*\/\}.*?\{\/\* 9\. RESULTADOS REAIS \*\/\}', re.DOTALL)

new_sections = """{/* 2. QUEBRA DE CRENÇA */}
      <section className="py-32 px-6 md:px-12 bg-[#F5F5F5]" id="sintomas">
         <div className="max-w-[1300px] mx-auto">
            <div className="mb-20 max-w-4xl">
              <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Sintoma vs Raiz</span>
              <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-6xl text-[#0A0A0A] mb-8">Vender mais não conserta uma empresa desorganizada. Às vezes, só faz o problema crescer.</h2>
              <p className="text-gray-500 font-light text-xl leading-relaxed mb-6">
                Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro. Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade. Mais clientes sem controle aumentam o faturamento, mas também podem aumentar o problema de caixa. E uma empresa que depende do dono para praticamente todas as decisões pode até crescer. Mas dificilmente cresce de forma saudável.
              </p>
              <p className="text-gray-500 font-light text-xl leading-relaxed mb-6">
                Muitos empresários passam anos tentando resolver os sintomas. Buscam mais vendas quando precisam recuperar margem. Cobram mais da equipe quando falta processo. Cortam custos quando falta gestão. Trabalham mais quando deveriam decidir melhor.
              </p>
              <p className="text-[#0A0A0A] font-semibold text-xl leading-relaxed">
                Antes de buscar a próxima solução, é preciso descobrir qual é o problema certo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-gray-200 pt-16">
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Caixa</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Vende, fatura e movimenta, mas o dinheiro nunca sobra.</p>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Gestão</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">A empresa cresceu, mas os controles não acompanharam.</p>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Pessoas</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Existe equipe, mas tudo ainda chega e depende do dono.</p>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-[#0A0A0A] font-sans text-xl font-bold mb-4">Crescimento</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Existe oportunidade no mercado, mas falta estrutura interna.</p>
               </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-[#0A0A0A] font-bold text-lg uppercase tracking-widest">É aqui que começa uma gestão radical. Não no sintoma. Na raiz.</p>
            </div>
         </div>
      </section>

      {/* 3. CONCEITO */}
      <section className="py-32 px-6 md:px-12 bg-[#0A0A0A] text-white" id="conceito">
         <div className="max-w-[1000px] mx-auto text-center">
            <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">O que é ser Radical</span>
            <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-7xl text-white mb-12">Radical não é sobre correr riscos. É sobre ir à raiz.</h2>
            <div className="text-left md:text-center text-gray-400 font-light text-lg md:text-xl leading-relaxed space-y-6">
              <p>A palavra radical vem de raiz. E é exatamente ali que os problemas de uma empresa precisam ser enfrentados. Porque o caixa travado, a queda nas vendas, a equipe improdutiva e a falta de lucro podem ser consequência. Enquanto você tenta corrigir o que aparece, a verdadeira causa pode continuar crescendo por baixo da operação.</p>
              <p>Ser um Empresário Radical é ter coragem para olhar além dos sintomas. É colocar os números na mesa. Questionar decisões. Rever processos. Enfrentar o que não funciona. Mudar o que precisa ser mudado. E construir uma empresa onde o crescimento seja consequência de uma gestão melhor.</p>
              <p className="text-white font-semibold text-2xl mt-12 block">Menos achismo. Mais gestão. Mais decisão. Mais resultado.</p>
            </div>
         </div>
      </section>

      {/* 4. AUTORIDADE & HISTÓRIA */}
      <section className="py-32 px-6 md:px-12 bg-white" id="edmar">
         <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full md:w-1/2">
              <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">A Autoridade</span>
              <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-6xl text-[#0A0A0A] mb-8">Gestão empresarial não se aprende apenas nos livros.</h2>
              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed mb-10">
                <p>Também se aprende pagando folha, enfrentando crises e tomando decisões quando não existe resposta pronta.</p>
                <p><strong>Antes do mentor, existe o empresário.</strong> Edmar não construiu sua visão de negócios apenas estudando empresas. Construiu vivendo uma. Sua história passa pelo varejo, pela gestão, pela liderança de pessoas, pelo crescimento empresarial e pelas decisões difíceis de quem empreende de verdade.</p>
                <p>Com o tempo, a experiência de campo se transformou na capacidade de olhar além do que está acontecendo e buscar por que está acontecendo. Dessa forma de pensar nasceu o Empresário Radical.</p>
                <p>Não para ensinar a partir de teorias distantes da realidade, mas para compartilhar princípios, métodos e decisões de quem conhece o outro lado da mesa. Porque existe uma diferença enorme entre conhecer gestão e precisar fazer uma empresa funcionar.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
               <div className="bg-[#F5F5F5] p-8 md:p-10 rounded-xl">
                  <h4 className="text-3xl font-bold text-[#0A0A0A] mb-4">"Faturamento sem resultado é vaidade."</h4>
                  <p className="text-gray-500 font-light">Empresa que depende de uma pessoa ainda não construiu gestão. Problema que não aparece nos números aparece no caixa. Decisão difícil adiada normalmente se torna um problema mais caro.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. AUTODIAGNÓSTICO */}
      <section className="py-32 px-6 md:px-12 bg-[#EAEAEA]">
         <div className="max-w-[1000px] mx-auto">
            <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block text-center">Diagnóstico</span>
            <h2 className="font-sans font-semibold tracking-tight text-4xl md:text-5xl text-[#0A0A0A] mb-12 text-center">Em que momento sua empresa está?</h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">Nem toda empresa precisa da mesma solução. Mas existem sinais que mostram quando alguma coisa precisa mudar. Assinale as opções que refletem a sua realidade hoje:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {[
                "Minha empresa vende, mas o dinheiro não sobra.",
                "Crescemos e perdemos parte do controle.",
                "Minha equipe existe, mas decisões demais dependem de mim.",
                "Temos números, mas não os transformamos em decisões.",
                "Precisamos recuperar margem e organizar o caixa.",
                "Sócios ou lideranças precisam alinhar a direção.",
                "Existe uma decisão importante que estamos adiando.",
                "Estamos preparados para crescer, mas precisamos estruturar o próximo ciclo.",
                "Minha equipe precisa mudar comportamento e performance."
              ].map((sinal, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded shadow-sm border border-transparent hover:border-[#D9002B] transition-colors cursor-pointer">
                   <div className="w-5 h-5 rounded border border-gray-300 flex-shrink-0"></div>
                   <p className="text-sm font-semibold text-gray-700">{sinal}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-[#0A0A0A] font-bold text-xl mb-8">Se você reconheceu sua empresa em uma ou mais situações, talvez seja hora de olhar para a raiz.</p>
              <AnimatedButton href={getWhatsAppLink(msgGeral)} target="_blank" rel="noopener noreferrer" className="mx-auto">
                QUERO ENTENDER MEU CENÁRIO
              </AnimatedButton>
            </div>
         </div>
      </section>

      {/* 6. ECOSSISTEMA */}
      <section className="py-32 px-6 md:px-12 bg-[#F5F5F5]" id="solucoes">
         <div className="max-w-[1300px] mx-auto">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Soluções</span>
              <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-6xl text-[#0A0A0A] mb-6">Qual é o próximo movimento da sua empresa?</h2>
              <p className="text-gray-500 font-light text-xl">Empresas vivem momentos diferentes. Algumas precisam de acompanhamento para reorganizar a gestão. Outras precisam parar, diagnosticar e tomar uma decisão rapidamente. E algumas precisam transformar a mentalidade e a performance das pessoas.</p>
              <p className="text-[#0A0A0A] font-semibold text-lg mt-6">Três caminhos. Um mesmo princípio. Chegar à raiz.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
               {/* Mentoria */}
               <div className="bg-white p-10 lg:p-12 flex flex-col shadow-sm rounded-xl border border-gray-100">
                  <span className="text-[#D9002B] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">Acompanhamento</span>
                  <h3 className="font-sans font-semibold text-3xl text-[#0A0A0A] mb-4">Mentoria Empresarial</h3>
                  <p className="text-[#0A0A0A] font-semibold text-lg mb-6 leading-snug">Sua empresa não precisa de mais informação. Precisa transformar informação em decisão.</p>
                  <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed flex-grow">Acompanhamento estratégico para empresários que precisam reorganizar a operação, recuperar controle e construir uma empresa capaz de crescer com gestão, margem e direção. Trabalhamos caixa, pessoas, processos, indicadores e decisões. Não é uma aula sobre como administrar empresas. É um trabalho sobre a sua empresa.</p>
                  
                  <ul className="space-y-4 text-sm text-gray-600 font-light mb-10">
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Formato: Ciclos de 3 a 6 meses.</li>
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Foco: Gestão, acompanhamento e execução.</li>
                  </ul>
                  <AnimatedButton href={getWhatsAppLink(msgMentoria)} target="_blank" rel="noopener noreferrer" className="w-full">
                    Quero conhecer a Mentoria
                  </AnimatedButton>
               </div>

               {/* Imersões */}
               <div className="bg-[#0A0A0A] text-white p-10 lg:p-12 flex flex-col shadow-xl rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9002B] opacity-10 rounded-bl-full"></div>
                  <span className="text-[#D9002B] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block relative z-10">Decisão Crítica</span>
                  <h3 className="font-sans font-semibold text-3xl text-white mb-4 relative z-10">Consultoria e Imersões</h3>
                  <p className="text-white font-semibold text-lg mb-6 leading-snug relative z-10">Às vezes sua empresa não precisa de mais uma reunião. Precisa parar tudo e resolver.</p>
                  <p className="text-gray-400 font-light text-sm mb-8 leading-relaxed flex-grow relative z-10">Intervenção estratégica para identificar rapidamente gargalos, confrontar problemas e sair da sala com decisões tomadas e uma rota clara de execução. Números e processos na mesa. Entramos com perguntas. Saímos com decisões.</p>
                  
                  <ul className="space-y-4 text-sm text-gray-300 font-light mb-10 relative z-10">
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Formato: 1 a 2 dias intensivos.</li>
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Foco: Sócios, conselho e lideranças.</li>
                  </ul>
                  <a href={getWhatsAppLink(msgImersao)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#1E5AE8] text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#113a9e] transition-colors rounded-md shadow-[0_4px_14px_0_rgba(30,90,232,0.39)] relative z-10">
                    Colocar minha empresa na mesa
                  </a>
               </div>

               {/* Palestras */}
               <div className="bg-white p-10 lg:p-12 flex flex-col shadow-sm rounded-xl border border-gray-100">
                  <span className="text-[#D9002B] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">Cultura e Liderança</span>
                  <h3 className="font-sans font-semibold text-3xl text-[#0A0A0A] mb-4">Palestras Corporativas</h3>
                  <p className="text-[#0A0A0A] font-semibold text-lg mb-6 leading-snug">Uma palestra pode ocupar uma hora. Ou mudar a forma como uma equipe pensa o negócio.</p>
                  <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed flex-grow">Visão construída no mundo real dos negócios. Gestão, vendas, liderança, comportamento e resultado tratados sem discurso pronto e sem teoria distante da realidade. Fazer as pessoas saírem pensando e agindo diferente de quando entraram.</p>
                  
                  <ul className="space-y-4 text-sm text-gray-600 font-light mb-10">
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Formato: Convenções e In-company.</li>
                    <li className="flex items-start gap-3"><span className="text-[#D9002B] text-[10px] mt-1.5">▪</span> Foco: Comportamento e Performance.</li>
                  </ul>
                  <a href={getWhatsAppLink(msgPalestra)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#1E5AE8] text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#113a9e] transition-colors rounded-md shadow-[0_4px_14px_0_rgba(30,90,232,0.39)]">
                    Solicitar proposta de palestra
                  </a>
               </div>

            </div>
         </div>
      </section>

      {/* 7. MÉTODO */}
      <section className="py-32 px-6 md:px-12 bg-white">
         <div className="max-w-[1000px] mx-auto text-center mb-20">
            <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">O Processo</span>
            <h2 className="font-sans font-semibold tracking-tight text-4xl md:text-5xl text-[#0A0A0A]">Da raiz ao resultado.</h2>
         </div>
         <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Diagnosticar", desc: "Entender sem maquiar números." },
              { title: "Identificar a raiz", desc: "Separar causas de sintomas." },
              { title: "Priorizar", desc: "Definir o que precisa ser enfrentado." },
              { title: "Decidir", desc: "Transformar diagnóstico em decisões claras." },
              { title: "Executar", desc: "Responsáveis, prazos e indicadores." },
              { title: "Medir", desc: "Acompanhar impacto e corrigir rota." },
              { title: "Crescer", desc: "Construir crescimento sobre operação mais saudável." }
            ].map((step, idx) => (
               <div key={idx} className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#D9002B] font-bold text-3xl mb-4">0{idx + 1}</div>
                  <h4 className="font-bold text-lg mb-2 text-[#0A0A0A]">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
               </div>
            ))}
         </div>
         <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-[#0A0A0A]">Diagnóstico sem execução vira relatório. Execução sem diagnóstico vira tentativa.</p>
         </div>
      </section>

      {/* 9. RESULTADOS REAIS */}"""

content = re.sub(sections_pattern, new_sections, content)

# ----------------- Replace Conteudo, FAQ and CTA -----------------
faq_pattern = re.compile(r'\{\/\* 10\. FAQ \*\/\}.*?\{\/\* 12\. FOOTER \*\/\}', re.DOTALL)

new_faq_cta = """{/* 10. CONTEÚDOS */}
      <section className="py-32 px-6 md:px-12 bg-[#F5F5F5]" id="conteudos">
         <div className="max-w-[1300px] mx-auto text-center">
            <span className="text-[#D9002B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Hub de Conteúdos</span>
            <h2 className="font-sans font-semibold tracking-tight text-4xl md:text-5xl text-[#0A0A0A] mb-6">Conhecimento para quem está do outro lado da mesa.</h2>
            <p className="text-gray-500 font-light text-lg mb-16 max-w-2xl mx-auto">Artigos, vídeos, insights e aulas sobre Gestão, Vendas, Finanças, Liderança, Estratégia e Empreendedorismo.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               {[
                 { title: "Como parar de apagar incêndios e começar a gerenciar sua empresa", tag: "Gestão" },
                 { title: "O verdadeiro custo de uma equipe sem liderança ativa", tag: "Liderança" },
                 { title: "Crescimento não é sinônimo de lucro. Entenda a diferença.", tag: "Caixa & Margem" }
               ].map((post, idx) => (
                 <div key={idx} className="bg-white p-8 text-left rounded-lg shadow-sm border border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#1E5AE8] mb-4 block">{post.tag}</span>
                    <h4 className="font-bold text-xl text-[#0A0A0A] mb-4 leading-snug">{post.title}</h4>
                    <a href="#" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#0A0A0A] transition-colors">Ler artigo →</a>
                 </div>
               ))}
            </div>
            
            <a href="#" className="inline-block border border-[#0A0A0A] text-[#0A0A0A] py-4 px-10 text-xs font-bold uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-white transition-colors rounded-md">
               Explorar todos os conteúdos
            </a>
         </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-32 px-6 md:px-12 bg-[#0A0A0A] text-white">
         <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-24">
               <h2 className="font-sans font-semibold tracking-tight text-5xl md:text-6xl text-white mb-6">Perguntas Frequentes</h2>
               <p className="text-gray-400 font-light text-lg">Respostas diretas sobre adequação e nossos formatos.</p>
            </div>
            <div>
               {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#222]">
                     <button
                       onClick={() => setOpenFaq(openFaq === index ? null : index)}
                       className="w-full py-8 flex justify-between items-center text-left"
                     >
                        <span className="font-sans font-semibold text-lg md:text-xl pr-4">{faq.question}</span>
                        {openFaq === index ? <Minus className="text-[#D9002B] flex-shrink-0" size={24} /> : <Plus className="text-[#D9002B] flex-shrink-0" size={24} />}
                     </button>
                     <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-400 font-light text-lg leading-relaxed pr-12">{faq.answer}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 12. CTA FINAL */}
      <section className="py-32 px-6 md:px-12 bg-white text-center border-t border-gray-100">
         <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <h2 className="font-sans font-bold tracking-tight text-4xl md:text-6xl leading-[1.1] text-[#0A0A0A] mb-8">
               Quanto custa continuar atacando o problema errado?
            </h2>
            <p className="font-light text-gray-600 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
               Talvez você já saiba que alguma coisa precisa mudar. A questão agora é descobrir o quê. O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz.
            </p>
            <AnimatedButton href={getWhatsAppLink(msgGeral)} target="_blank" rel="noopener noreferrer" className="mb-6">
               QUERO FALAR SOBRE MINHA EMPRESA
            </AnimatedButton>
            <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Converse com nossa equipe para descobrir o caminho ideal.</p>
         </div>
      </section>

      {/* 13. FOOTER */}"""

content = re.sub(faq_pattern, new_faq_cta, content)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

