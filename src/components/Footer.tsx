
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ea384c] text-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm opacity-90">
            <span>© {currentYear} MeuMenu App</span>
            <span className="hidden md:block">•</span>
            <span>Solutions Aplicativos</span>
            <span className="hidden md:block">•</span>
            <span>CNPJ: 32.062.293/0001-28</span>
          </div>
          <p className="text-sm opacity-80">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
