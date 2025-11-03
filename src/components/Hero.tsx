import { Button } from "@/components/ui/button";
import lhcLogo from "@/assets/lhc-logo.svg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--gradient-hero)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <img 
            src={lhcLogo} 
            alt="LHC Labs Logo" 
            className="w-40 h-40 mx-auto mb-8 animate-float drop-shadow-[0_0_30px_rgba(195,147,212,0.5)]"
          />
          
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tight animate-fade-in-slow">
            <span className="bg-gradient-to-r from-accent via-primary-glow to-accent bg-clip-text text-transparent">
              Learn, Harness, Create
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/90 mb-6 max-w-3xl mx-auto font-light animate-fade-in delay-100">
            Transform Complex Data into Clear, Actionable Insights
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Custom AI solutions that streamline research and unlock the power of your data. 
            We help organizations understand their data, build powerful AI workflows, and master AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-10 py-6 font-semibold"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent/10 hover:scale-105 transition-all duration-300 text-lg px-10 py-6 font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
