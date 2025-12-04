import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Pillars />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;