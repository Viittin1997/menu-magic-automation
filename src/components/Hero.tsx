import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Bot, HeadsetIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Pedidos organizados, atendimento rápido e clientes fiéis!
          </h1>
          <h2 className="text-xl md:text-2xl max-w-3xl opacity-90">
            Atendimento automático no WhatsApp, cardápio digital e impressão de pedidos sem complicação.
          </h2>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            ✨ Teste grátis por 7 dias
          </Button>
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