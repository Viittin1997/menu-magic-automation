import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Automatize seu delivery e venda mais no WhatsApp
          </h1>
          <h2 className="text-xl md:text-2xl max-w-3xl opacity-90">
            Robô de atendimento, cardápio digital, pagamentos online e programa de fidelidade por um preço acessível.
          </h2>
          <Button size="lg" variant="secondary" className="text-primary-500 font-semibold text-lg">
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