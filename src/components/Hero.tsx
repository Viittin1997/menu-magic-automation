
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Bot, HeadsetIcon, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#C14444] to-[#E47777] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Pedidos organizados, atendimento rápido e clientes fiéis!
          </h1>
          <h2 className="text-xl md:text-2xl max-w-3xl opacity-90">
            Atendimento automático no WhatsApp, cardápio digital e impressão de pedidos sem complicação.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
            >
              ✨ Teste grátis por 7 dias <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white font-semibold text-lg"
            >
              Ver demonstração
            </Button>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
