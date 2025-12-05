import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import lhcLogo from "@/assets/lhc-logo.svg";
import { ArrowRight, Mail } from "lucide-react";

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(268_50%_15%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(270_40%_12%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(240_30%_8%)_0%,transparent_50%)]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(270 60% 75% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(270 60% 75% / 0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Soft ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-learn/5 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-create/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-harness/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <img 
            src={lhcLogo} 
            alt="LHC Labs Logo" 
            className="w-24 h-24 mx-auto mb-10 animate-fade-in drop-shadow-[0_0_50px_rgba(180,150,210,0.3)]"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight animate-fade-in leading-tight">
            Human-centred AI you can{" "}
            <span className="text-learn">Learn</span>,{" "}
            <span className="text-harness">Harness</span>, and{" "}
            <span className="text-create">Create</span> with.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light animate-fade-in delay-100 leading-relaxed">
            Accessible, intentional AI consulting and education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
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
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};