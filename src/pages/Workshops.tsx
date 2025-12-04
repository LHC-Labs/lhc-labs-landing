import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Clock, Calendar, ArrowRight, CheckCircle } from "lucide-react";

const workshops = [
  {
    title: "AI for Beginners",
    duration: "Half-day",
    format: "In-person or Virtual",
    description: "A foundational workshop introducing AI concepts, terminology, and practical applications. No technical background required.",
    outcomes: [
      "Understand what AI actually is (and isn't)",
      "Learn key terminology without jargon",
      "Discover practical AI applications for your work",
      "Evaluate AI tools with confidence",
    ],
  },
  {
    title: "RAG for Humanities",
    duration: "Full-day",
    format: "In-person",
    description: "Specialised training on Retrieval-Augmented Generation for researchers, archivists, and humanities professionals.",
    outcomes: [
      "Build knowledge bases from documents and archives",
      "Create AI assistants for research workflows",
      "Understand embedding and retrieval concepts",
      "Design ethical AI systems for sensitive content",
    ],
  },
  {
    title: "AI for Coding",
    duration: "Half-day",
    format: "Virtual",
    description: "Learn to leverage AI coding assistants effectively. From code generation to debugging and documentation.",
    outcomes: [
      "Master AI-assisted code generation",
      "Debug and refactor with AI tools",
      "Write better documentation with AI",
      "Understand limitations and best practices",
    ],
  },
  {
    title: "Executive AI Briefing",
    duration: "2 hours",
    format: "In-person or Virtual",
    description: "Strategic overview of AI for leadership teams. Understand the landscape, opportunities, and risks.",
    outcomes: [
      "Grasp the current AI landscape",
      "Identify opportunities for your organisation",
      "Understand risks and ethical considerations",
      "Make informed decisions about AI adoption",
    ],
  },
  {
    title: "Custom Team Training",
    duration: "Flexible",
    format: "Tailored",
    description: "Bespoke workshops designed around your team's specific needs, tools, and workflows.",
    outcomes: [
      "Training tailored to your exact needs",
      "Focus on your industry and use cases",
      "Hands-on exercises with your data",
      "Ongoing support and resources",
    ],
  },
];

const Workshops = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_50%_15%)_0%,transparent_50%)]" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-learn/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-learn/15 text-learn text-sm font-medium mb-6 animate-fade-in">
              Learn
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              AI Workshops
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in delay-100 leading-relaxed">
              Clear, approachable training that helps teams understand and use AI effectively—without the jargon.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.title}
                className="group p-8 rounded-2xl bg-card/50 border border-learn/20 hover:border-learn/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        {workshop.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-learn" />
                        {workshop.duration}
                      </span>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-learn" />
                        {workshop.format}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {workshop.description}
                    </p>
                  </div>
                  
                  <div className="lg:w-80">
                    <h4 className="text-sm font-semibold text-learn mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {workshop.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-learn mt-0.5 shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_50%_15%)_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-learn/20 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-learn" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Book a Workshop
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch to discuss your team's needs and schedule a workshop.
            </p>
            <Button asChild size="lg" className="bg-learn text-learn-foreground hover:bg-learn/90 rounded-xl shadow-[var(--shadow-lavender)]">
              <Link to="/contact">
                Contact us to book
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

export default Workshops;