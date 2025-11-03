import { Button } from "@/components/ui/button";
import lhcLogo from "@/assets/lhc-logo.svg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-slow">
        <img 
          src={lhcLogo} 
          alt="LHC Labs Logo" 
          className="w-32 h-32 mx-auto mb-8 opacity-90"
        />
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
          Learn, Harness, Create
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto font-light">
          Transform Complex Data into Clear, Actionable Insights
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Custom AI solutions that streamline research and unlock the power of your data
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] text-lg px-8"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
