import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import lhcLogo from "@/assets/lhc-logo.svg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Navbar />
      
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(268_95%_15%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(280_85%_12%)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(265_80%_10%)_0%,transparent_50%)]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(280 85% 75% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(280 85% 75% / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-accent font-medium">AI-Powered Solutions</span>
          </div>
          
          <img 
            src={lhcLogo} 
            alt="LHC Labs Logo" 
            className="w-28 h-28 mx-auto mb-8 animate-float drop-shadow-[0_0_40px_rgba(195,147,212,0.4)]"
          />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tight animate-fade-in">
            <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              Learn, Harness, Create
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 max-w-3xl mx-auto font-light animate-fade-in delay-100">
            Transform Complex Data into Clear, Actionable Insights
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Custom AI solutions that streamline research and unlock the power of your data. 
            We help organizations understand their data, build powerful AI workflows, and master AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Button 
              size="lg" 
              className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_30px_rgba(195,147,212,0.3)] hover:shadow-[0_0_40px_rgba(195,147,212,0.5)] transition-all duration-300 text-base px-8 py-6 font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border border-border/50 bg-background/50 backdrop-blur-sm text-foreground hover:bg-muted/50 hover:border-accent/50 transition-all duration-300 text-base px-8 py-6 font-medium"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
