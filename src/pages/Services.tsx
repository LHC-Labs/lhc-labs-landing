import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, Users, Briefcase, Lightbulb, Award,
  Database, Search, Workflow, Brain, Building,
  Sparkles, Layout, CheckCircle, Beaker, Handshake,
  ArrowRight
} from "lucide-react";

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

const ServiceSection = ({ 
  id, 
  title, 
  subtitle, 
  services, 
  colorClass 
}: { 
  id: string; 
  title: string; 
  subtitle: string; 
  services: typeof learnServices; 
  colorClass: string;
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
    <section id={id} className="py-24 relative overflow-hidden">
      <div className={`absolute inset-0 ${styles.gradient}`} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full ${styles.badge} text-sm font-medium mb-6`}>
              {title}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold ${styles.title} mb-4`}>
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-6 rounded-2xl bg-card/50 border ${styles.border} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 mb-5 rounded-xl ${styles.icon} flex items-center justify-center transition-all duration-300`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(268_40%_12%)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              What We Do
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in delay-100">
              Comprehensive AI services organised around our three pillars: Learn, Harness, and Create.
            </p>
          </div>
        </div>
      </section>

      <ServiceSection
        id="learn"
        title="Learn"
        subtitle="Workshops and education that make AI accessible and understandable."
        services={learnServices}
        colorClass="learn"
      />

      <ServiceSection
        id="harness"
        title="Harness"
        subtitle="Applied AI and data analysis for real-world workflows and systems."
        services={harnessServices}
        colorClass="harness"
      />

      <ServiceSection
        id="create"
        title="Create"
        subtitle="Custom AI tools and prototypes designed with humans at the centre."
        services={createServices}
        colorClass="create"
      />

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(268_40%_12%)_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help your organisation learn, harness, and create with AI.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
              <Link to="/contact">
                Contact us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;