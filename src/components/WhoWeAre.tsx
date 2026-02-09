import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Linkedin, Mail } from "lucide-react";

const directors = [
  {
    name: "Paula del Castillo Vivero",
    role: "Co-founder & Director",
    bio: "NLP PhD researcher specialising in human-centred AI, accessibility, and AI applications in mental health.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "paula@lhclabs.com",
  },
  {
    name: "Shaun Ring",
    role: "Co-founder & Director",
    bio: "Applied AI engineer with extensive experience in workflow design, prototyping, and technical architecture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "shaun@lhclabs.com",
  },
  {
    name: "Director",
    role: "Co-founder & Strategic Director",
    bio: "Brings strategic vision and business development expertise to LHC Labs.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "contact@lhclabs.com",
  },
];

export const WhoWeAre = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_50%_14%)_0%,transparent_60%)]" />
      <AnimatedSection className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who we are</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A small, interdisciplinary, UK-based team combining research, engineering, and education. We're friendly, knowledgeable, and allergic to jargon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group rounded-2xl bg-card/50 border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={director.image} alt={director.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
