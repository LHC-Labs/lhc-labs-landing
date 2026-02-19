import workshopImg from "@/assets/workshop-ai-research.jpg";
import dashboardImg from "@/assets/work-dashboard.jpg";
import eventImg from "@/assets/workshop-event.jpg";
import prototypeImg from "@/assets/work-prototype.jpg";

const highlights = [
  {
    title: "AI for Research Workshops",
    description: "Interactive sessions helping university researchers integrate AI tools into their methodology—from NLP to retrieval-augmented generation.",
    image: workshopImg,
  },
  {
    title: "Legal & Advice Sector Training",
    description: "Tailored workshops for Citizens Advice and legal professionals, making AI accessible for case management and knowledge retrieval.",
    image: eventImg,
  },
  {
    title: "Data Dashboards & Visualisation",
    description: "Custom analytics dashboards turning complex datasets into clear, actionable insights for decision-makers.",
    image: dashboardImg,
  },
  {
    title: "Applied AI Prototypes",
    description: "Rapid prototyping of AI-powered tools—from fact-checking workflows to semantic search pipelines for real organisations.",
    image: prototypeImg,
  },
];

export const WorkHighlights = () => {
  return (
    <section id="work" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(270_50%_14%)_0%,transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What we've done</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Real projects with real people—here's a snapshot of our recent work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl overflow-hidden bg-card/50 border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
