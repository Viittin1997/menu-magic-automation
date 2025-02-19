
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <Problems />
        <CTABanner />
        <Features />
        <Testimonials />
        <LeadCaptureForm />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
