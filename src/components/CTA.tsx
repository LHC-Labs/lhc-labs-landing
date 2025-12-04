import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(268_50%_15%)_0%,transparent_60%)]" />
      
      {/* Decorative orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-learn/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-create/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Ready to work with AI intentionally?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in delay-100">
            Let's discuss how LHC Labs can help your organisation learn, harness, and create with human-centred AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button 
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8 rounded-xl font-medium"
            >
              <Link to="/contact">
                Contact us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="border border-border/50 bg-card/30 text-foreground hover:bg-card/50 hover:border-accent/50 transition-all duration-300 text-lg px-8 rounded-xl font-medium"
            >
              <Link to="/services">
                View our services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};