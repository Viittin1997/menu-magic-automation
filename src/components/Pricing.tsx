import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-12">Planos e Preços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <h3 className="text-2xl font-bold">Mensal</h3>
              <p className="text-3xl font-bold mt-4">
                R$129,90<span className="text-xl font-normal">/mês</span>
              </p>
            </CardHeader>
            <CardContent className="text-left">
              <ul className="space-y-2">
                <li>✅ Todas as funcionalidades</li>
                <li>✅ Suporte 24/7</li>
                <li>✅ Sem fidelidade</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full text-white">
                Começar agora
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm transform scale-105 border-2 border-secondary">
            <CardHeader>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm">
                Mais vantajoso
              </div>
              <h3 className="text-2xl font-bold">Semestral</h3>
              <p className="text-3xl font-bold mt-4">
                R$110,41<span className="text-xl font-normal">/mês</span>
              </p>
              <p className="text-sm mt-2">15% de desconto no total</p>
            </CardHeader>
            <CardContent className="text-left">
              <ul className="space-y-2">
                <li>✅ Todas as funcionalidades</li>
                <li>✅ Suporte 24/7</li>
                <li>✅ Economia de R$117,45</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                🔥 Melhor escolha
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <h3 className="text-2xl font-bold">Anual</h3>
              <p className="text-3xl font-bold mt-4">
                R$126,57<span className="text-xl font-normal">/mês</span>
              </p>
              <p className="text-sm mt-2">R$40 de desconto no total</p>
            </CardHeader>
            <CardContent className="text-left">
              <ul className="space-y-2">
                <li>✅ Todas as funcionalidades</li>
                <li>✅ Suporte 24/7</li>
                <li>✅ Economia de R$40,00</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full text-white">
                Começar agora
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;