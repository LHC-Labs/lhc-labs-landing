import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, Users, Briefcase, Lightbulb, Award,
  Database, Search, Workflow, Brain, Building,
  Sparkles, Layout, CheckCircle, Beaker, Handshake,
  ArrowRight, Clock, Calendar, Mail, Send, Linkedin
} from "lucide-react";

// Services Data
const learnServices = [
  { icon: BookOpen, title: "AI for Beginners", description: "Foundation course covering AI concepts, terminology, and practical applications" },
  { icon: Brain, title: "RAG for Humanities", description: "Specialised training on retrieval-augmented generation for research and humanities" },
  { icon: Lightbulb, title: "AI for Coding", description: "Learn to leverage AI tools for development, debugging, and code generation" },
  { icon: Users, title: "Custom Workshops", description: "Tailored training sessions designed for your team's specific needs" },
  { icon: Briefcase, title: "Executive Briefings", description: "Strategic AI overviews for leadership and decision-makers" },
];

const harnessServices = [
  { icon: Database, title: "RAG System Design", description: "Custom retrieval-augmented generation systems for your knowledge base" },
  { icon: Search, title: "Embedding & Search Pipelines", description: "Semantic search solutions using state-of-the-art embedding models" },
  { icon: Workflow, title: "Workflow Automation", description: "AI-powered automation for repetitive tasks and data processing" },
  { icon: Building, title: "Knowledge-base Structuring", description: "Organise and structure your data for optimal AI integration" },
  { icon: Award, title: "Applied AI for Research", description: "Research-focused AI tools and methodologies for academic teams" },
];

const createServices = [
  { icon: Sparkles, title: "AI Prototypes", description: "Rapid prototyping of AI-powered features and applications" },
  { icon: Layout, title: "Dashboards & Interfaces", description: "User-friendly interfaces for AI systems and data visualisation" },
  { icon: CheckCircle, title: "Fact-checking Workflows", description: "Automated verification systems using AI and trusted sources" },
  { icon: Beaker, title: "Experimental Tools", description: "Cutting-edge AI experiments and proof-of-concept solutions" },
  { icon: Handshake, title: "Research Collaboration", description: "Partnership opportunities for academic and industry research" },
];

// Workshops Data
const workshops = [
  {
    title: "AI for Beginners",
    duration: "Half-day",
    format: "In-person or Virtual",
    description: "A foundational workshop introducing AI concepts, terminology, and practical applications. No technical background required.",
    outcomes: ["Understand what AI actually is", "Learn key terminology", "Discover practical applications", "Evaluate AI tools"],
  },
  {
    title: "RAG for Humanities",
    duration: "Full-day",
    format: "In-person",
    description: "Specialised training on Retrieval-Augmented Generation for researchers, archivists, and humanities professionals.",
    outcomes: ["Build knowledge bases", "Create AI assistants", "Understand embeddings", "Design ethical systems"],
  },
  {
    title: "AI for Coding",
    duration: "Half-day",
    format: "Virtual",
    description: "Learn to leverage AI coding assistants effectively. From code generation to debugging and documentation.",
    outcomes: ["Master AI code generation", "Debug with AI tools", "Better documentation", "Best practices"],
  },
  {
    title: "Executive AI Briefing",
    duration: "2 hours",
    format: "In-person or Virtual",
    description: "Strategic overview of AI for leadership teams. Understand the landscape, opportunities, and risks.",
    outcomes: ["Grasp AI landscape", "Identify opportunities", "Understand risks", "Make informed decisions"],
  },
];

// Team Data
const directors = [
  {
    name: "Paula del Castillo Vivero",
    role: "Co-founder & Director",
    bio: "Paula is an NLP PhD researcher specialising in human-centred AI, accessibility, and AI applications in mental health.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "paula@lhclabs.com",
  },
  {
    name: "Shaun Ring",
    role: "Co-founder & Director",
    bio: "Shaun is an applied AI engineer with extensive experience in workflow design, prototyping, and technical architecture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "shaun@lhclabs.com",
  },
  {
    name: "Director",
    role: "Co-founder & Strategic Director",
    bio: "Our third co-founder brings strategic vision and business development expertise to LHC Labs.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "contact@lhclabs.com",
  },
];

// Service Section Component
const ServiceSection = ({ 
  id, title, subtitle, services, colorClass 
}: { 
  id: string; title: string; subtitle: string; services: typeof learnServices; colorClass: string;
}) => {
  const colorStyles = {
    learn: {
      gradient: "bg-[radial-gradient(ellipse_at_left,hsl(270_50%_15%)_0%,transparent_50%)]",
      badge: "bg-learn/15 text-learn",
      icon: "bg-learn/20 text-learn group-hover:bg-learn/30",
      border: "border-learn/20 hover:border-learn/40",
      title: "text-learn",
    },
    harness: {
      gradient: "bg-[radial-gradient(ellipse_at_right,hsl(210_60%_15%)_0%,transparent_50%)]",
      badge: "bg-harness/15 text-harness",
      icon: "bg-harness/20 text-harness group-hover:bg-harness/30",
      border: "border-harness/20 hover:border-harness/40",
      title: "text-harness",
    },
    create: {
      gradient: "bg-[radial-gradient(ellipse_at_center,hsl(330_50%_15%)_0%,transparent_50%)]",
      badge: "bg-create/15 text-create",
      icon: "bg-create/20 text-create group-hover:bg-create/30",
      border: "border-create/20 hover:border-create/40",
      title: "text-create",
    },
  };
  const styles = colorStyles[colorClass as keyof typeof colorStyles];

  return (
    <section id={id} className="py-24 relative overflow-hidden scroll-mt-20">
      <div className={`absolute inset-0 ${styles.gradient}`} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className={`inline-block px-4 py-1.5 rounded-full ${styles.badge} text-sm font-medium mb-6`}>
              {title}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold ${styles.title} mb-4`}>{title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className={`group p-6 rounded-2xl bg-card/50 border ${styles.border} transition-all duration-300 hover:-translate-y-1`}>
                <div className={`w-12 h-12 mb-5 rounded-xl ${styles.icon} flex items-center justify-center transition-all duration-300`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Workshops Section Component
const WorkshopsSection = () => (
  <section id="workshops" className="py-24 relative overflow-hidden scroll-mt-20">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_50%_15%)_0%,transparent_50%)]" />
    <div className="absolute top-40 right-20 w-72 h-72 bg-learn/10 rounded-full blur-[100px]" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-learn/15 text-learn text-sm font-medium mb-6">
            Learn
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">AI Workshops</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clear, approachable training that helps teams understand and use AI effectively.
          </p>
        </div>
        <div className="space-y-6">
          {workshops.map((workshop) => (
            <div key={workshop.title} className="group p-6 md:p-8 rounded-2xl bg-card/50 border border-learn/20 hover:border-learn/40 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{workshop.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-3 text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-learn" />{workshop.duration}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-learn" />{workshop.format}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{workshop.description}</p>
                </div>
                <div className="lg:w-64">
                  <h4 className="text-sm font-semibold text-learn mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {workshop.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-learn mt-0.5 shrink-0" />{outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-learn text-learn-foreground hover:bg-learn/90 rounded-xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book a Workshop <Calendar className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// About Section Component
const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(268_40%_10%)_0%,transparent_60%)]" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet the Directors</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Friendly, knowledgeable, and interdisciplinary—we bring together expertise from research, engineering, and education.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {directors.map((director) => (
            <div key={director.name} className="group rounded-2xl bg-card/50 border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden relative">
                <img src={director.image} alt={director.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{director.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{director.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{director.bio}</p>
                <div className="flex gap-3">
                  <a href={director.linkedin} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all" aria-label={`${director.name} LinkedIn`}>
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${director.email}`} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all" aria-label={`Email ${director.name}`}>
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Contact Section Component
const ContactSection = () => {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(268_40%_12%)_0%,transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground text-lg">Have a question or want to work together? We'd love to hear from you.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your project..." rows={5} className="bg-card/50 border-border focus:border-accent resize-none" />
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
              {isSubmitting ? "Sending..." : <>Send message <Send className="ml-2 w-4 h-4" /></>}
            </Button>
          </form>
          <div className="mt-12 p-6 rounded-2xl bg-card/50 border border-border text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
            <p className="text-muted-foreground mb-2">Or email us directly at</p>
            <a href="mailto:contact@lhclabs.com" className="text-lg font-medium text-accent hover:underline">contact@lhclabs.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Pillars />
      
      {/* Services Sections */}
      <ServiceSection id="learn" title="Learn" subtitle="Workshops and education that make AI accessible and understandable." services={learnServices} colorClass="learn" />
      <ServiceSection id="harness" title="Harness" subtitle="Applied AI and data analysis for real-world workflows and systems." services={harnessServices} colorClass="harness" />
      <ServiceSection id="create" title="Create" subtitle="Custom AI tools and prototypes designed with humans at the centre." services={createServices} colorClass="create" />
      
      <WorkshopsSection />
      <AboutSection />
      <ContactSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
