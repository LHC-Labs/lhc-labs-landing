import { motion } from "framer-motion";

const partners = [
  { name: "University of Sussex" },
  { name: "Citizens Advice" },
  { name: "Oracle" },
  { name: "Speed Communications" },
];

export const TrustedBy = () => {
  return (
    <section className="py-16 relative overflow-hidden border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">
            Trusted by & worked with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-lg md:text-xl font-semibold tracking-tight">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
