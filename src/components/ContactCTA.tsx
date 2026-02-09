import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const ContactCTA = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", organisation: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message sent!", description: "We'll get back to you as soon as possible." });
    setFormData({ name: "", email: "", organisation: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_50%_16%)_0%,transparent_50%)]" />
      <AnimatedSection className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's work together
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you're exploring AI for the first time or need a prototype built, we'd love to hear from you.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="bg-card/50 border-border focus:border-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="bg-card/50 border-border focus:border-accent" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="organisation">Organisation (optional)</Label>
              <Input id="organisation" name="organisation" value={formData.organisation} onChange={handleChange} placeholder="Your company or institution" className="bg-card/50 border-border focus:border-accent" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your project or workshop needs..." rows={5} className="bg-card/50 border-border focus:border-accent resize-none" />
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
              {isSubmitting ? "Sending..." : <>Send message <Send className="ml-2 w-4 h-4" /></>}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-2xl bg-card/50 border border-border text-center"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
            <p className="text-muted-foreground mb-2">Or email us directly at</p>
            <a href="mailto:contact@lhclabs.com" className="text-lg font-medium text-accent hover:underline">contact@lhclabs.com</a>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};
