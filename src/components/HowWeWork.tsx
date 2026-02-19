import { BookOpen, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "We start by understanding your context, your people, and the problem you're trying to solve.",
    colorClass: "text-learn",
    bgClass: "bg-learn/15",
  },
  {
    icon: BarChart3,
    title: "Harness",
    description: "We apply the right AI and data methods—no more, no less—grounded in what actually works.",
    colorClass: "text-harness",
    bgClass: "bg-harness/15",
  },
  {
    icon: Sparkles,
    title: "Create",
    description: "We build usable tools, dashboards, or learning experiences that your team can own and maintain.",
    colorClass: "text-create",
    bgClass: "bg-create/15",
  },
];

export const HowWeWork = () => {
  return (
    <section id="approach" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(275_60%_14%)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How we work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A simple methodology rooted in people, not technology for its own sake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${step.bgClass} flex items-center justify-center`}>
                  <step.icon className={`w-8 h-8 ${step.colorClass}`} />
                </div>
                <h3 className={`text-2xl font-bold ${step.colorClass} mb-3`}>{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
