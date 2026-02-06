import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import workshopsHero from "@/assets/workshops-hero.jpg";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export const WorkshopsEvents = () => {
  return (
    <section id="workshops" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={workshopsHero}
                alt="LHC Labs workshop in progress"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Workshops & Events
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We run interactive, human-centred workshops for teams of all sizes—from AI fundamentals for beginners to advanced RAG pipelines for researchers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every session is designed around your context, not a generic syllabus. We believe the best way to learn AI is by doing, together, in a room where questions are welcome.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl group"
              >
                Book a workshop
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
