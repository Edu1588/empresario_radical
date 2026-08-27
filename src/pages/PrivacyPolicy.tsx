import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0D0D0F] font-sans pb-24">
      {/* Header simples */}
      <header className="bg-white border-b border-gray-200 py-6 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-condensed font-black tracking-widest uppercase flex items-center gap-1 hover:opacity-70 transition-opacity">
            EMPRESÁRIO <span className="text-[#E5372B]">RADICAL</span>
          </Link>
          <Link to="/" className="text-sm font-condensed uppercase tracking-widest text-gray-500 hover:text-[#0D0D0F] flex items-center gap-2">
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-[1000px] mx-auto px-6 pt-12 pb-6">
        <div className="flex gap-2 text-xs font-condensed uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-[#E5372B]">Home</Link>
          <span>/</span>
          <span className="text-[#0D0D0F]">Política de Privacidade</span>
        </div>
      </div>

      <main className="max-w-[1000px] mx-auto px-6">
        <div className="bg-white rounded-[30px] p-8 md:p-16 shadow-sm border border-gray-100">
          <h1 className="font-condensed font-black uppercase text-4xl md:text-5xl mb-8 border-b border-gray-100 pb-8">
            Política de Privacidade
          </h1>
          
          <div className="space-y-8 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="font-condensed font-black uppercase text-xl text-[#0D0D0F] mb-4 tracking-widest">1. Introdução</h2>
              <p>
                A privacidade dos nossos visitantes é extremamente importante para nós. Esta Política de Privacidade descreve os tipos de informações pessoais que são coletadas e recebidas pelo site do Empresário Radical e como elas são utilizadas.
              </p>
            </section>
            
            <section>
              <h2 className="font-condensed font-black uppercase text-xl text-[#0D0D0F] mb-4 tracking-widest">2. Coleta de Informações</h2>
              <p>
                Quando você entra em contato conosco, seja através de formulários ou WhatsApp, coletamos seu nome, número de telefone e demais dados fornecidos voluntariamente. Essas informações são usadas estritamente para retornar o seu contato (com a nossa promessa de 2 horas úteis) e oferecer os serviços solicitados.
              </p>
            </section>
            
            <section>
              <h2 className="font-condensed font-black uppercase text-xl text-[#0D0D0F] mb-4 tracking-widest">3. Uso das Informações</h2>
              <p>
                As informações coletadas são utilizadas exclusivamente para o agendamento de reuniões, análises prévias de perfil para mentoria e envio de propostas comerciais referentes às imersões e palestras. Não vendemos, alugamos ou compartilhamos seus dados com terceiros não autorizados.
              </p>
            </section>
            
            <section>
              <h2 className="font-condensed font-black uppercase text-xl text-[#0D0D0F] mb-4 tracking-widest">4. Segurança</h2>
              <p>
                Adotamos medidas de segurança apropriadas para proteger contra acesso não autorizado, alteração, divulgação ou destruição dos seus dados pessoais.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
