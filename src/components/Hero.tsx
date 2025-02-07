
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Bot, HeadsetIcon, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#C14444] to-[#E47777] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-[pulse_3s_ease-in-out_infinite]">
            Menos trabalho, mais vendas: automatize seu atendimento no WhatsApp
          </h1>
          <h2 className="text-xl md:text-2xl max-w-3xl opacity-90">
            Pare de perder vendas, e aumente a recorrência de pedidos dos seus clientes
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5531992354666&text=Vim%20do%20site,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-green-700 hover:bg-green-800 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform w-full"
              >
                ✨ Teste grátis por 7 dias <ChevronRight className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://meumenu.app/pedido/meumenuapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white font-semibold text-lg w-full"
              >
                Ver cardápio demonstração
              </Button>
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-6 text-base md:text-lg opacity-90">
            <span className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              Já ajudamos centenas de deliverys
            </span>
            <span className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              Atendimento 100% automatizado
            </span>
            <span className="flex items-center gap-2">
              <HeadsetIcon className="w-6 h-6" />
              Suporte técnico 24 horas
            </span>
          </div>
          <p className="text-xl md:text-2xl mt-8 font-semibold bg-white/10 p-6 rounded-lg max-w-4xl">
            Nosso sistema serve para você que não tem nenhuma noção de informática, temos um treinamento, apesar de ser tudo bem prático e simples para resolver seu problema!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

