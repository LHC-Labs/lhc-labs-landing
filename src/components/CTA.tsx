import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 bg-[var(--gradient-hero)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed animate-fade-in delay-100">
            Let's discuss how LHC Labs can help you unlock insights, build custom AI solutions, or empower your team with AI knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8"
            >
              Contact Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300 text-lg px-8"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
