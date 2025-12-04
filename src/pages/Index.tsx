import { Hero } from "@/components/Hero";
import { Learn } from "@/components/Learn";
import { Harness } from "@/components/Harness";
import { Create } from "@/components/Create";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Learn />
      <Harness />
      <Create />
      <Services />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
