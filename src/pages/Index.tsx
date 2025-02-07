
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <Problems />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
    </>
  );
};

export default Index;
