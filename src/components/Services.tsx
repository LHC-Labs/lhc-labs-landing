import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Workflow, GraduationCap } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Insights",
    description: "Turn large or unstructured datasets into dashboards, summaries, and reports that enable faster, smarter decision-making.",
    details: "From social media sentiment analysis to tracking influential voices and understanding sensitive topics like hate speech, we transform your data into actionable intelligence."
  },
  {
    icon: Workflow,
    title: "Custom AI Tools & Workflows",
    description: "Bespoke AI pipelines and research tools tailored to your unique needs, powered by cutting-edge technology.",
    details: "Using advanced techniques like Retrieval-Augmented Generation (RAG), we create solutions that integrate seamlessly with your systems or function independently, with optional ongoing support."
  },
  {
    icon: GraduationCap,
    title: "AI Learning & Education",
    description: "Accessible guides, courses, and training resources that build confidence in using AI effectively.",
    details: "From foundational concepts to advanced methods, we make AI knowledge practical and actionable for individuals and teams at every level."
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three powerful approaches to transform how you work with AI and data
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-[var(--gradient-card)] border-border hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center mb-4 shadow-[var(--shadow-soft)]">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
