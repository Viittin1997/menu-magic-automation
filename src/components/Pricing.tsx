import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-12">Planos e Preços</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
          <div className="text-4xl font-bold mb-6">
            R$129,90<span className="text-xl font-normal">/mês</span>
          </div>
          <p className="text-lg mb-8">Todas as funcionalidades inclusas!</p>
          
          <div className="space-y-4 mb-8 text-left">
            <h3 className="font-semibold">Descontos para pagamentos antecipados:</h3>
            <div className="space-y-2">
              <p>✅ Plano Semestral: 15% de desconto no total</p>
              <p>✅ Plano Anual: R$40 de desconto no total</p>
            </div>
          </div>

          <Button size="lg" variant="secondary" className="text-primary-500 font-semibold">
            🔥 Comece agora com 7 dias grátis!
          </Button>
          
          <p className="mt-6 text-sm opacity-90">
            Sem burocracia, sem contrato fixo, e com suporte 24h!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;