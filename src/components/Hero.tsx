import { Button } from "@/components/ui/button";
import lhcLogo from "@/assets/lhc-logo.svg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <img 
          src={lhcLogo} 
          alt="LHC Labs Logo" 
          className="w-32 h-32 mx-auto mb-8 opacity-90 animate-float"
        />
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight animate-fade-in-slow">
          Learn, Harness, Create
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto font-light animate-fade-in delay-100">
          Transform Complex Data into Clear, Actionable Insights
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in delay-200">
          Custom AI solutions that streamline research and unlock the power of your data
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300 text-lg px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
