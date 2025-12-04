import { Layers, Cpu, Code, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-24 relative overflow-hidden bg-[hsl(330_95%_8%)]">
      {/* Pink gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(330_95%_20%/0.5)] via-[hsl(340_85%_15%/0.3)] to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-[hsl(330_95%_45%/0.15)] rounded-full blur-3xl animate-float delay-100" />
      <div className="absolute bottom-32 right-1/4 w-64 h-64 bg-[hsl(340_85%_50%/0.12)] rounded-full blur-3xl animate-float delay-200" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[hsl(330_85%_65%)] font-semibold tracking-wider uppercase text-sm">
            Create
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Tool <span className="text-[hsl(330_95%_55%)]">Creation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Build powerful AI tools that solve real problems. From RAG systems to custom 
            agents, we help you create cutting-edge solutions that drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool, index) => (
            <Card
              key={tool.title}
              className="group bg-[hsl(330_95%_12%/0.8)] border-[hsl(330_95%_25%/0.5)] backdrop-blur-sm hover:bg-[hsl(330_95%_15%)] hover:border-[hsl(330_85%_50%/0.5)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 mb-4 rounded-xl bg-[hsl(330_95%_20%)] flex items-center justify-center group-hover:bg-[hsl(330_85%_35%)] transition-colors duration-300">
                  <tool.icon className="w-7 h-7 text-[hsl(330_85%_65%)]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {tool.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-[hsl(330_95%_45%)] hover:bg-[hsl(330_95%_55%)] text-white px-8"
          >
            Start Building
          </Button>
        </div>
      </div>
    </section>
  );
};
