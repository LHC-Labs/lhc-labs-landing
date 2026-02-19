import { Mail } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_50%_16%)_0%,transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Whether you're exploring AI for the first time or need a prototype built, we'd love to hear from you.
          </p>

          <div className="p-8 rounded-2xl bg-card/50 border border-border">
            <Mail className="w-10 h-10 mx-auto mb-4 text-accent" />
            <p className="text-muted-foreground mb-3">Email us at</p>
            <a href="mailto:contact@lhclabs.com" className="text-2xl font-semibold text-accent hover:underline">
              contact@lhclabs.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
