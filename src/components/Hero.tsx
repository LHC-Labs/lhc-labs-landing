import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Navbar />
      
      {/* Deep purple gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(275_70%_22%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(285_50%_18%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(260_80%_14%)_0%,transparent_50%)]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(285 38% 70% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(285 38% 70% / 0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Soft ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-learn/8 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-create/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-harness/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "4s" }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight"
          >
            Human-centred AI you can{" "}
            <span className="text-learn">Learn</span>,{" "}
            <span className="text-harness">Harness</span>, and{" "}
            <span className="text-create">Create</span> with.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Accessible, intentional AI consulting and education.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection("learn")}
              className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-lavender)] hover:shadow-[0_0_50px_hsla(270,60%,75%,0.4)] transition-all duration-300 text-base px-8 py-6 font-medium rounded-xl"
            >
              Explore our services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border border-border/50 bg-card/30 backdrop-blur-sm text-foreground hover:bg-card/50 hover:border-accent/50 transition-all duration-300 text-base px-8 py-6 font-medium rounded-xl"
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact us
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};