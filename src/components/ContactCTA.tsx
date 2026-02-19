import { useState, useRef } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser";

// EmailJS publishable credentials — replace with your own
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export const ContactCTA = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [interestedIn, setInterestedIn] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      formRef.current.reset();
      setInterestedIn("");
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_50%_16%)_0%,transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're exploring AI for the first time or need a prototype built, we'd love to hear from you.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {sent && (
            <div className="mb-6 p-4 rounded-xl border border-accent/30 bg-accent/10 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <p className="text-foreground text-sm">
                Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-2xl bg-card/50 border border-border"
          >
            <div className="space-y-2">
              <Label htmlFor="user_name">Name</Label>
              <Input
                id="user_name"
                name="user_name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="user_email">Email</Label>
              <Input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interested_in">Interested in…</Label>
              <Select value={interestedIn} onValueChange={setInterestedIn}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Workshops">Workshops</SelectItem>
                  <SelectItem value="Strategy">Strategy</SelectItem>
                  <SelectItem value="Prototyping">Prototyping</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="interested_in" value={interestedIn} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or question..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" disabled={sending} className="w-full">
              {sending ? "Sending…" : (
                <>
                  <Send className="w-4 h-4" />
                  Send message
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-2">Or email us directly</p>
            <a
              href="mailto:contact@lhclabs.com"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Mail className="w-4 h-4" />
              contact@lhclabs.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
