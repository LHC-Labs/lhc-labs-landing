import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

const directors = [
  {
    name: "Paula del Castillo Vivero",
    role: "Co-founder & Director",
    bio: "Paula is an NLP PhD researcher specialising in human-centred AI, accessibility, and AI applications in mental health. She brings deep expertise in making AI systems understandable and ethical, with a particular focus on education and bridging the gap between technical capability and human needs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "paula@lhclabs.com",
  },
  {
    name: "Shaun Ring",
    role: "Co-founder & Director",
    bio: "Shaun is an applied AI engineer with extensive experience in workflow design, prototyping, and technical architecture. He specialises in building practical AI systems that integrate seamlessly into existing processes, from RAG pipelines to custom automation tools.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "shaun@lhclabs.com",
  },
  {
    name: "Director",
    role: "Co-founder & Strategic Director",
    bio: "Our third co-founder brings strategic vision and business development expertise to LHC Labs. They work to ensure our human-centred approach translates into sustainable, impactful partnerships with organisations across sectors.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "contact@lhclabs.com",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(268_40%_12%)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in delay-100 leading-relaxed">
              We're a team of researchers, engineers, and educators united by a belief that AI should be accessible, intentional, and human-centred.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-learn/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-learn">L</span>
                </div>
                <h3 className="text-lg font-semibold text-learn mb-2">Learn</h3>
                <p className="text-muted-foreground text-sm">Making AI knowledge accessible to everyone</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-harness/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-harness">H</span>
                </div>
                <h3 className="text-lg font-semibold text-harness mb-2">Harness</h3>
                <p className="text-muted-foreground text-sm">Integrating AI into real workflows with intention</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-create/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-create">C</span>
                </div>
                <h3 className="text-lg font-semibold text-create mb-2">Create</h3>
                <p className="text-muted-foreground text-sm">Building tools that put humans first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(268_40%_10%)_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the Directors
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Friendly, knowledgeable, and interdisciplinary—we bring together expertise from research, engineering, and education.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {directors.map((director, index) => (
                <div
                  key={director.name}
                  className="group rounded-2xl bg-card/50 border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {director.name}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-4">
                      {director.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {director.bio}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={director.linkedin}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        aria-label={`${director.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${director.email}`}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        aria-label={`Email ${director.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(268_40%_12%)_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's work together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're looking for training, consulting, or custom AI solutions, we'd love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
              <Link to="/contact">
                Get in touch
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

export default About;