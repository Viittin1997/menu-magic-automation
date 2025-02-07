
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">"Depois de começar a usar o MeuMenu App, reduzimos o tempo de atendimento em 70% e aumentamos as vendas em 30%!"</p>
            <p className="font-semibold text-primary">João Victor - Pizzaria Peppe Pazzo</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">"O programa de fidelidade fez nossos clientes voltarem mais vezes. O ticket médio subiu 25%!"</p>
            <p className="font-semibold text-primary">Lucas Eduardo - Hamburgueria Rei do Sabor</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">"Agora não perco mais pedidos por demora no atendimento. O robô responde tudo sozinho e já finaliza a compra."</p>
            <p className="font-semibold text-primary">Maria Clara - Marmitex do Rony</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
