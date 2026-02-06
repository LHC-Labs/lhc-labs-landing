import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { WorkHighlights } from "@/components/WorkHighlights";
import { WorkshopsEvents } from "@/components/WorkshopsEvents";
import { HowWeWork } from "@/components/HowWeWork";
import { WhoWeAre } from "@/components/WhoWeAre";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustedBy />
      <WorkHighlights />
      <WorkshopsEvents />
      <HowWeWork />
      <WhoWeAre />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
