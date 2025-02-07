
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold" style={{ color: '#ea384c' }}>
            MeuMenu App
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('features')} className="text-sm hover:text-primary transition-colors">
              Funcionalidades
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-primary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">
              Preços
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
              FAQ
            </button>
          </nav>
        </div>
        <a 
          href="https://api.whatsapp.com/send?phone=5531992354666&text=Vim%20do%20site,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Começar agora <ChevronRight className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
