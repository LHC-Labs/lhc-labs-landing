import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      <Navbar />
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(275_70%_22%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(285_50%_18%)_0%,transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-learn/8 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-create/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "3s" }} />
      </div>
      
      {/* Content */}
      <AnimatedSection className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight"
          >
            Applied, responsible{" "}
            <span className="text-accent">AI & data</span> work.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Workshops, research collaboration, and real-world AI consulting—built around people, not hype.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-lavender)] hover:shadow-[0_0_50px_hsla(270,60%,75%,0.4)] transition-all duration-300 text-base px-10 py-6 font-medium rounded-xl"
            >
              Start a conversation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
