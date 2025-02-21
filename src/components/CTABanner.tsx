
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#C14444] to-[#E47777]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pronto para automatizar seu delivery?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Experimente gratuitamente por 10 dias e veja como é fácil aumentar suas vendas com atendimento automatizado
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5531992354666&text=Vim%20do%20site,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white text-xl px-8 py-6 h-auto font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Começar teste grátis agora <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
