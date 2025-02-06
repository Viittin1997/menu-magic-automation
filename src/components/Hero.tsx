import { Button } from "@/components/ui/button";

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
          <div className="flex flex-col md:flex-row gap-4 mt-4 text-sm opacity-90">
            <span>✅ Já ajudamos centenas de deliverys</span>
            <span>✅ Atendimento 100% automatizado</span>
            <span>✅ Suporte técnico 24 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;