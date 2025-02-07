
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
      question: "Posso fazer alterações no cardápio?",
      answer: "Sim, nosso sistema foi feito de forma muito simples para facilitar a alteração de qualquer item do cardápio de maneira prática.",
    },
    {
      question: "O sistema funciona para qualquer tipo de delivery?",
      answer: "Sim, nosso sistema é adaptável para restaurantes, lanchonetes, pizzarias, mercados e qualquer outro tipo de delivery.",
    },
    {
      question: "Como funciona o programa de fidelidade?",
      answer: "Você define um valor de pedido, em que, acima desse valor o cliente recebe um ponto, e ao atingir os pontos necessários, que também são configurados por você, ele recebe o prêmio em forma de cupom de desconto. Todos os valores são configuráveis.",
    },
    {
      question: "O pagamento online é seguro?",
      answer: "Sim, utilizamos gateways de pagamento certificados e seguros para processar o Pix",
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
