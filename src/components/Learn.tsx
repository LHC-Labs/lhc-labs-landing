import { BookOpen, Users, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const workshops = [
  {
    icon: BookOpen,
    title: "AI Fundamentals",
    description: "Master the basics of machine learning and neural networks",
  },
  {
    icon: Users,
    title: "Hands-on Labs",
    description: "Interactive sessions with real-world AI applications",
  },
  {
    icon: Calendar,
    title: "Weekly Sessions",
    description: "Regular workshops tailored to all skill levels",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Earn recognition for your AI expertise",
  },
];

export const Learn = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(268_95%_10%)]">
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(268_95%_20%/0.6)] via-[hsl(280_85%_15%/0.4)] to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[hsl(268_95%_40%/0.2)] rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[hsl(280_85%_50%/0.15)] rounded-full blur-3xl animate-float delay-200" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[hsl(280_85%_75%)] font-semibold tracking-wider uppercase text-sm">
            Learn
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            AI <span className="text-[hsl(268_95%_60%)]">Workshops</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dive deep into artificial intelligence through our comprehensive workshop program. 
            From beginners to advanced practitioners, we have something for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workshops.map((workshop, index) => (
            <Card
              key={workshop.title}
              className="group bg-[hsl(268_95%_15%/0.8)] border-[hsl(268_95%_30%/0.5)] backdrop-blur-sm hover:bg-[hsl(268_95%_18%)] hover:border-[hsl(280_85%_50%/0.5)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[hsl(268_95%_25%)] flex items-center justify-center group-hover:bg-[hsl(280_85%_40%)] transition-colors duration-300">
                  <workshop.icon className="w-7 h-7 text-[hsl(280_85%_75%)]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {workshop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-[hsl(268_95%_45%)] hover:bg-[hsl(268_95%_55%)] text-white px-8"
          >
            View All Workshops
          </Button>
        </div>
      </div>
    </section>
  );
};
