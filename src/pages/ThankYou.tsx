import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-center px-6">
      <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-sm border border-gray-100 max-w-2xl w-full">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="font-condensed font-black uppercase text-5xl md:text-6xl text-[#0D0D0F] mb-6 leading-tight">
          Obrigado pelo seu contato!
        </h1>
        <p className="text-gray-500 font-light text-lg mb-10 leading-relaxed">
          Sua mensagem foi recebida pela nossa equipe. Conforme nossa promessa, 
          retornaremos o seu contato em até <strong>2 horas úteis</strong> para conversar sobre a sua operação.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#0D0D0F] text-white px-8 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-sm hover:bg-[#E5372B] transition-colors"
        >
          Voltar para o início <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
