
const Features = () => {
  const features = [
    {
      icon: "📱",
      title: "Robô de atendimento no WhatsApp",
      description: "Responde automaticamente, envia cardápio e finaliza pedidos.",
    },
    {
      icon: "🎯",
      title: "Cardápio digital interativo",
      description: "Clientes pedem com poucos cliques, sem precisar de atendente.",
    },
    {
      icon: "🖨️",
      title: "Impressão automática",
      description: "Pedido impresso direto para a cozinha, sem erros.",
    },
    {
      icon: "🎁",
      title: "Programa de fidelidade",
      description: "Incentive clientes a voltarem e comprarem mais.",
    },
    {
      icon: "💳",
      title: "Pagamento online integrado (Em breve)",
      description: "Sistema em fase de testes - Em breve seu cliente poderá pagar online via Pix",
    },
    {
      icon: "📊",
      title: "Relatórios detalhados",
      description: "Controle suas vendas e seu faturamento em tempo real.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Recursos do MeuMenu App</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-100 hover:border-primary/20 transition-colors animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-center mt-12">Entre outras funcionalidades extras</h2>
      </div>
    </section>
  );
};

export default Features;
