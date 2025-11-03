import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Role/Title",
    bio: "Brief description of team member's expertise and background in AI and data analysis.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "team1@lhclabs.com"
  },
  {
    name: "Team Member 2",
    role: "Role/Title",
    bio: "Brief description of team member's expertise and background in AI and data analysis.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "team2@lhclabs.com"
  },
  {
    name: "Team Member 3",
    role: "Role/Title",
    bio: "Brief description of team member's expertise and background in AI and data analysis.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "team3@lhclabs.com"
  }
];

export const Team = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experts in AI, data science, and education working to unlock your data's potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="bg-[var(--gradient-card)] border-border hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-[var(--transition-smooth)]"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-[var(--transition-smooth)]"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-[var(--transition-smooth)]"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
