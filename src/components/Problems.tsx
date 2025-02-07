
const Problems = () => {
  const problems = [
    {
      icon: "🔴",
      title: "Atendimento demorado",
      description: "Seu WhatsApp está lotado de mensagens e pedidos se perdem?",
    },
    {
      icon: "🔴",
      title: "Perdendo clientes",
      description: "Sem um programa de fidelidade, eles compram uma vez e não voltam.",
    },
    {
      icon: "🔴",
      title: "Pedidos bagunçados",
      description: "Sem um sistema integrado, anotar pedidos manualmente gera confusão.",
    },
    {
      icon: "🔴",
      title: "Sem controle financeiro",
      description: "Você não sabe exatamente o que entra e sai do seu negócio.",
    },
    {
      icon: "🔴",
      title: "Mensagens repetitivas",
      description: "Seu WhatsApp está cheio de mensagens repetitivas como \"Qual o cardápio?\", \"Tem taxa de entrega?\" e \"Qual a forma de pagamento?\", fazendo você perder tempo com respostas manuais?",
    },
    {
      icon: "🔴",
      title: "Dificuldade para aumentar vendas",
      description: "Sem um sistema para incentivar recompras e fidelizar clientes, seu delivery pode estar perdendo oportunidades de faturamento.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Problemas que resolvemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{problem.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
