import { BookOpen, BarChart3, Sparkles, Users, Target, Wrench } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Learn",
    subtitle: "Workshops & Training",
    whoFor: "Research teams and departments looking to upskill.",
    description:
      "Interactive, human-centered sessions ranging from AI fundamentals to advanced RAG pipelines. Designed to move your team from hype to hands-on competence.",
    outcome: "An AI-literate team capable of using tools responsibly.",
    colorClass: "text-learn",
    bgClass: "bg-learn/15",
    borderClass: "border-learn/25",
    outcomeBg: "bg-learn/10",
  },
  {
    icon: BarChart3,
    title: "Harness",
    subtitle: "Strategy & Consulting",
    whoFor: "Leadership teams needing an ethical, high-impact AI roadmap.",
    description:
      "We cut through the noise to identify where AI can actually solve your specific organizational challenges—prioritizing data security and human oversight.",
    outcome: "A clear, actionable strategy grounded in reality, not trends.",
    colorClass: "text-harness",
    bgClass: "bg-harness/15",
    borderClass: "border-harness/25",
    outcomeBg: "bg-harness/10",
  },
  {
    icon: Sparkles,
    title: "Create",
    subtitle: "Prototypes & Engineering",
    whoFor: "Organizations ready to build custom, functional AI tools.",
    description:
      "From semantic search pipelines to custom analytics dashboards and NLP fact-checking workflows. We build usable tools that your team owns and maintains.",
    outcome: "A production-ready prototype or tool tailored to your data.",
    colorClass: "text-create",
    bgClass: "bg-create/15",
    borderClass: "border-create/25",
    outcomeBg: "bg-create/10",
  },
];

export const HowWeWork = () => {
  return (
    <section id="approach" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(275_60%_14%)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What we offer</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A simple methodology rooted in people, not technology for its own sake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl border ${service.borderClass} bg-card/50 p-8 flex flex-col`}
              >
                {/* Icon & Title */}
                <div className={`w-12 h-12 mb-5 rounded-xl ${service.bgClass} flex items-center justify-center`}>
                  <service.icon className={`w-6 h-6 ${service.colorClass}`} />
                </div>
                <h3 className={`text-2xl font-bold ${service.colorClass} mb-1`}>{service.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-6">{service.subtitle}</p>

                {/* Who it's for */}
                <div className="flex items-start gap-2 mb-4">
                  <Users className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Who it's for: </span>
                    {service.whoFor}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Outcome */}
                <div className={`rounded-xl ${service.outcomeBg} p-4 mt-auto`}>
                  <div className="flex items-start gap-2">
                    <Target className={`w-4 h-4 ${service.colorClass} mt-0.5 shrink-0`} />
                    <p className="text-sm">
                      <span className={`font-semibold ${service.colorClass}`}>The Outcome: </span>
                      <span className="text-foreground">{service.outcome}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
