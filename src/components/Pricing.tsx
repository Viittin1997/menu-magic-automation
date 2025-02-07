
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-12">Planos e Preços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-[#D3E4FD]">
            <CardHeader className="text-white">
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
              <a 
                href="https://api.whatsapp.com/send?phone=5531992354666&text=Vim%20do%20site,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Começar agora
                </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm transform scale-105 border-2 border-[#D3E4FD]">
            <CardHeader className="text-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                Mais vantajoso
              </div>
              <h3 className="text-2xl font-bold">Semestral</h3>
              <p className="text-3xl font-bold mt-4">
                R$110,41<span className="text-xl font-normal">/mês</span>
              </p>
              <p className="text-sm mt-2 font-bold text-[#D3E4FD]">15% de desconto no total</p>
            </CardHeader>
            <CardContent className="text-left">
              <ul className="space-y-2">
                <li>✅ Todas as funcionalidades</li>
                <li>✅ Suporte 24/7</li>
                <li>✅ Economia de R$117,45</li>
              </ul>
            </CardContent>
            <CardFooter>
              <a 
                href="https://api.whatsapp.com/send?phone=5531992354666&text=Vim%20do%20site,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                  🔥 Melhor escolha
                </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-[#D3E4FD]">
            <CardHeader className="text-white">
              <h3 className="text-2xl font-bold">Anual</h3>
              <p className="text-3xl font-bold mt-4">
                R$77,94<span className="text-xl font-normal">/mês</span>
              </p>
              <p className="text-sm mt-2 font-bold text-[#D3E4FD]">40% de desconto no total</p>
            </CardHeader>
            <CardContent className="text-left">
              <ul className="space-y-2">
                <li>✅ Todas as funcionalidades</li>
                <li>✅ Suporte 24/7</li>
                <li>✅ Economia de R$623,52</li>
              </ul>
            </CardContent>
            <CardFooter>
              <a 
                href="https://api.whatsapp.com/send?phone=5531992354666&text=Vim%20do%20site,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Começar agora
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
