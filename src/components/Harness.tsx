import { BarChart3, Database, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Aggregate and clean data from multiple sources seamlessly",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Uncover insights with cutting-edge statistical methods",
  },
  {
    icon: TrendingUp,
    title: "Predictive Models",
    description: "Build models that forecast trends and behaviors",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Analyze streaming data with lightning-fast pipelines",
  },
];

export const Harness = () => {
  return (
    <section id="harness" className="py-32 relative overflow-hidden bg-background">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(210_95%_12%)_0%,transparent_60%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(210_95%_40%/0.5)] to-transparent" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[hsl(210_95%_45%/0.08)] rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(210_95%_40%/0.15)] text-[hsl(210_95%_70%)] text-sm font-medium mb-6 animate-fade-in">
                Harness
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
                Data Analysis
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed animate-fade-in delay-100">
                Transform raw data into actionable intelligence. Our data analysis services 
                help you make informed decisions backed by robust statistical analysis and 
                machine learning insights.
              </p>
              <Button 
                size="lg" 
                className="bg-[hsl(210_95%_50%)] hover:bg-[hsl(210_95%_60%)] text-white px-8 shadow-[0_0_30px_hsl(210_95%_50%/0.3)] animate-fade-in delay-200"
              >
                Explore Analytics
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-gradient-to-b from-[hsl(210_95%_15%/0.5)] to-transparent border border-[hsl(210_95%_30%/0.3)] hover:border-[hsl(210_95%_50%/0.5)] transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mb-5 rounded-xl bg-[hsl(210_95%_40%/0.2)] flex items-center justify-center group-hover:bg-[hsl(210_95%_50%/0.3)] group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-[hsl(210_95%_70%)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
