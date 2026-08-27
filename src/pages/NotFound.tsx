import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { AnimatedButton } from "../components/ui/animated-button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-center px-6">
      <Helmet>
        <title>Página não encontrada | Empresário Radical</title>
      </Helmet>
      <h1 className="font-sans font-bold uppercase text-8xl md:text-[140px] leading-none mb-4 text-[#0A0A0A] tracking-tighter">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-sans font-bold uppercase text-gray-400 mb-8 tracking-widest">
        Página não encontrada
      </h2>
      <p className="text-gray-500 font-light max-w-md mb-12 text-lg">
        A página que você está procurando pode ter sido removida, mudado de nome ou está temporariamente indisponível.
      </p>
      <AnimatedButton to="/">
        Voltar para o início
      </AnimatedButton>
    </div>
  );
}
