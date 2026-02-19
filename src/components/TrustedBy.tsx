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
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">
            Trusted by & worked with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-lg md:text-xl font-semibold tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
