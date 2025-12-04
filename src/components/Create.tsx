import { Layers, Cpu, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: Layers,
    title: "RAG Systems",
    description: "Retrieval-Augmented Generation for accurate, contextual AI responses",
  },
  {
    icon: Cpu,
    title: "Custom Models",
    description: "Fine-tuned models tailored to your specific use cases",
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Seamless integration with your existing tech stack",
  },
  {
    icon: Sparkles,
    title: "AI Agents",
    description: "Autonomous agents that automate complex workflows",
  },
];

export const Create = () => {
  return (
    <section id="create" className="py-32 relative overflow-hidden bg-background">
      {/* Pink gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,hsl(330_95%_12%)_0%,transparent_60%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(330_95%_40%/0.5)] to-transparent" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[hsl(330_95%_45%/0.08)] rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(330_95%_40%/0.15)] text-[hsl(330_95%_70%)] text-sm font-medium mb-6 animate-fade-in">
              Create
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Tool Creation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in delay-100">
              Build powerful AI tools that solve real problems. From RAG systems to custom 
              agents, we help you create cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tools.map((tool, index) => (
              <div
                key={tool.title}
                className="group p-6 rounded-2xl bg-gradient-to-b from-[hsl(330_95%_15%/0.5)] to-transparent border border-[hsl(330_95%_30%/0.3)] hover:border-[hsl(330_95%_50%/0.5)] transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-[hsl(330_95%_40%/0.2)] flex items-center justify-center group-hover:bg-[hsl(330_95%_50%/0.3)] group-hover:scale-110 transition-all duration-300">
                  <tool.icon className="w-6 h-6 text-[hsl(330_95%_70%)]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {tool.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-[hsl(330_95%_50%)] hover:bg-[hsl(330_95%_60%)] text-white px-8 shadow-[0_0_30px_hsl(330_95%_50%/0.3)]"
            >
              Start Building
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
