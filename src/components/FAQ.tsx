import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a automação do WhatsApp?",
      answer: "Nosso robô responde automaticamente as mensagens dos clientes, envia o cardápio digital e processa os pedidos sem intervenção manual.",
    },
    {
      question: "Posso personalizar o cardápio digital?",
      answer: "Sim! Você pode personalizar cores, categorias, produtos, preços e promoções facilmente através do painel administrativo.",
    },
    {
      question: "O sistema funciona para qualquer tipo de delivery?",
      answer: "Sim, nosso sistema é adaptável para restaurantes, lanchonetes, pizzarias, mercados e qualquer outro tipo de delivery.",
    },
    {
      question: "Como funciona o programa de fidelidade?",
      answer: "Os clientes acumulam pontos em cada compra que podem ser trocados por descontos ou produtos. Você define as regras e recompensas.",
    },
    {
      question: "O pagamento online é seguro?",
      answer: "Sim, utilizamos gateways de pagamento certificados e seguros para processar Pix, cartões e boletos.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;