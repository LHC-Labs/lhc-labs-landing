import { BookOpen, BarChart3, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pillars = [
  {
    id: "learn",
    icon: BookOpen,
    title: "Learn",
    description: "Workshops and training that make AI clear and approachable for all backgrounds. We help teams understand AI without jargon.",
    color: "learn",
    href: "#learn",
    buttonText: "Explore workshops",
  },
  {
    id: "harness",
    icon: BarChart3,
    title: "Harness",
    description: "Applied AI and data analysis. We help organisations integrate AI into real workflows with practical, intentional guidance.",
    color: "harness",
    href: "#harness",
    buttonText: "View services",
  },
  {
    id: "create",
    icon: Sparkles,
    title: "Create",
    description: "Prototyping and human-centred AI tools. We design small, useful systems like RAG pipelines and research workflows.",
    color: "create",
    href: "#create",
    buttonText: "See our work",
  },
];

const scrollToSection = (href: string) => {
  const element = document.getElementById(href.slice(1));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Pillars = () => {
  return (
    <section id="pillars" className="py-32 relative overflow-hidden bg-background">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_50%_12%)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Three Pillars of{" "}
              <span className="text-learn">Human</span>-Centred AI
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our approach combines education, implementation, and innovation to make AI accessible and intentional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const colorClasses = {
                learn: {
                  bg: "bg-learn/10",
                  border: "border-learn/20 hover:border-learn/40",
                  icon: "bg-learn/20 text-learn",
                  text: "text-learn",
                  button: "bg-learn text-learn-foreground hover:bg-learn/90 shadow-[var(--shadow-lavender)]",
                },
                harness: {
                  bg: "bg-harness/10",
                  border: "border-harness/20 hover:border-harness/40",
                  icon: "bg-harness/20 text-harness",
                  text: "text-harness",
                  button: "bg-harness text-harness-foreground hover:bg-harness/90 shadow-[var(--shadow-blue)]",
                },
                create: {
                  bg: "bg-create/10",
                  border: "border-create/20 hover:border-create/40",
                  icon: "bg-create/20 text-create",
                  text: "text-create",
                  button: "bg-create text-create-foreground hover:bg-create/90 shadow-[var(--shadow-pink)]",
                },
              };

              const colors = colorClasses[pillar.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`group p-8 rounded-2xl ${colors.bg} border ${colors.border} transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className={`w-14 h-14 mb-6 rounded-xl ${colors.icon} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
                    {pillar.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                  
                  <Button 
                    onClick={() => scrollToSection(pillar.href)}
                    className={`${colors.button} rounded-xl group/btn`}
                  >
                    {pillar.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
