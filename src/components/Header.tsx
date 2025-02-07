
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-primary">
            MeuMenu App
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#features" className="text-sm hover:text-primary transition-colors">
              Funcionalidades
            </Link>
            <Link to="#testimonials" className="text-sm hover:text-primary transition-colors">
              Depoimentos
            </Link>
            <Link to="#pricing" className="text-sm hover:text-primary transition-colors">
              Preços
            </Link>
            <Link to="#faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Começar agora <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
