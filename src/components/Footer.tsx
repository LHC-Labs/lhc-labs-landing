import lhcLogo from "@/assets/lhc-logo.png";

const scrollToSection = (href: string) => {
  const element = document.getElementById(href.slice(1));
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const footerLinks = [
  { name: "Our Work", href: "#work" },
  { name: "Workshops", href: "#workshops" },
  { name: "Approach", href: "#approach" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-card/50 py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <button onClick={() => scrollToSection("#hero")} className="flex items-center gap-3 mb-4">
              <img src={lhcLogo} alt="LHC Labs" className="w-12 h-12" />
            </button>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Applied, responsible AI & data work. Workshops, consulting, and prototyping—built around people.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@lhclabs.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  contact@lhclabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LHC Labs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="text-learn">Learn</span> · <span className="text-harness">Harness</span> · <span className="text-create">Create</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
