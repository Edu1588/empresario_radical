import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-condensed font-black uppercase text-8xl md:text-[140px] leading-none mb-4 text-[#0D0D0F]">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-condensed font-black uppercase text-gray-400 mb-8 tracking-widest">
        Página não encontrada
      </h2>
      <p className="text-gray-500 font-light max-w-md mb-12">
        A página que você está procurando pode ter sido removida, mudado de nome ou está temporariamente indisponível.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-[#0D0D0F] text-white px-8 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-sm hover:bg-[#E5372B] transition-colors"
      >
        <ArrowLeft size={18} /> Voltar para o início
      </Link>
    </div>
  );
}
