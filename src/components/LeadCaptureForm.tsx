
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const LeadCaptureForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    businessName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://whkn8n.meumenu2023.uk/webhook/novolead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.name,
          whatsapp: formData.whatsapp,
          estabelecimento: formData.businessName,
        }),
      });

      if (response.ok) {
        // Google Ads Conversion Tracking
        if (typeof gtag_report_conversion === 'function') {
          gtag_report_conversion();
        }
        
        toast.success("Dados enviados com sucesso! Em breve entraremos em contato.");
        setFormData({ name: "", whatsapp: "", businessName: "" });
      } else {
        throw new Error("Falha ao enviar dados");
      }
    } catch (error) {
      toast.error("Erro ao enviar seus dados. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-md">
        <Card className="shadow-lg border-2 border-gray-100">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quer saber mais?
              </h2>
              <p className="text-gray-600">
                Preencha o formulário abaixo e nossa equipe entrará em contato!
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Seu WhatsApp"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Nome do seu estabelecimento"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar dados"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
