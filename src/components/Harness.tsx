import { BarChart3, Database, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-24 relative overflow-hidden bg-[hsl(210_95%_8%)]">
      {/* Blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210_95%_20%/0.5)] via-[hsl(220_85%_15%/0.3)] to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-32 right-20 w-72 h-72 bg-[hsl(210_95%_45%/0.15)] rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-[hsl(220_85%_50%/0.12)] rounded-full blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <span className="text-[hsl(210_85%_65%)] font-semibold tracking-wider uppercase text-sm">
              Harness
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Data <span className="text-[hsl(210_95%_55%)]">Analysis</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Transform raw data into actionable intelligence. Our data analysis services 
              help you make informed decisions backed by robust statistical analysis and 
              machine learning insights.
            </p>
            <Button 
              size="lg" 
              className="bg-[hsl(210_95%_45%)] hover:bg-[hsl(210_95%_55%)] text-white px-8"
            >
              Explore Analytics
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group bg-[hsl(210_95%_12%/0.8)] border-[hsl(210_95%_25%/0.5)] backdrop-blur-sm hover:bg-[hsl(210_95%_15%)] hover:border-[hsl(210_85%_50%/0.5)] transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-[hsl(210_95%_20%)] flex items-center justify-center group-hover:bg-[hsl(210_85%_35%)] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[hsl(210_85%_65%)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
