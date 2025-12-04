import { Link } from "react-router-dom";
import lhcLogo from "@/assets/lhc-logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-card/50 py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={lhcLogo} alt="LHC Labs" className="w-10 h-10" />
              <span className="font-bold text-xl text-foreground">LHC Labs</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Human-centred AI consulting and education. We help organisations learn, harness, and create with AI—accessibly and intentionally.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-muted-foreground hover:text-foreground transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@lhclabs.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@lhclabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
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