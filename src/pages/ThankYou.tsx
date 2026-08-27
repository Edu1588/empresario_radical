import { CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { AnimatedButton } from "../components/ui/animated-button";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-center px-6">
      <Helmet>
        <title>Obrigado pelo contato | Empresário Radical</title>
        <meta name="description" content="Recebemos seu contato. Em até 2 horas úteis nossa equipe retornará para agendar sua sessão estratégica." />
      </Helmet>
      <div className="bg-white p-12 md:p-16 rounded-none shadow-sm max-w-2xl w-full">
        <div className="w-20 h-20 bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-8 rounded-none">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="font-sans font-bold uppercase text-5xl md:text-6xl text-[#0A0A0A] mb-6 leading-[1.05] tracking-tight">
          Obrigado pelo contato!
        </h1>
        <p className="text-gray-500 font-light text-lg mb-10 leading-relaxed">
          Sua mensagem foi recebida pela nossa equipe. Conforme nossa promessa, 
          retornaremos o seu contato em até <strong>2 horas úteis</strong> para conversar sobre a sua operação.
        </p>
        <AnimatedButton to="/">
          Voltar para o início
        </AnimatedButton>
      </div>
    </div>
  );
}
