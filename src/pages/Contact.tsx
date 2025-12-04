import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", organisation: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(268_40%_12%)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in delay-100">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-card/50 border-border focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-card/50 border-border focus:border-accent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organisation">Organisation (optional)</Label>
                <Input
                  id="organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Your company or institution"
                  className="bg-card/50 border-border focus:border-accent"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project or question..."
                  rows={6}
                  className="bg-card/50 border-border focus:border-accent resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Alternative contact */}
            <div className="mt-12 p-6 rounded-2xl bg-card/50 border border-border text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
              <p className="text-muted-foreground mb-2">
                Or email us directly at
              </p>
              <a
                href="mailto:contact@lhclabs.com"
                className="text-lg font-medium text-accent hover:underline"
              >
                contact@lhclabs.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;