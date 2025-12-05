import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_55%_18%)_0%,transparent_60%)]" />
      
      {/* Decorative orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-learn/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-create/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to work with AI intentionally?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Let's discuss how LHC Labs can help your organisation learn, harness, and create with human-centred AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8 rounded-xl font-medium"
            >
              Contact us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("learn")}
              className="border border-border/50 bg-card/30 text-foreground hover:bg-card/50 hover:border-accent/50 transition-all duration-300 text-lg px-8 rounded-xl font-medium"
            >
              View our services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
