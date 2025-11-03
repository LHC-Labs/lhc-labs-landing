import lhcLogo from "@/assets/lhc-logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={lhcLogo} alt="LHC Labs" className="w-10 h-10 opacity-80" />
            <div>
              <p className="font-semibold text-foreground">LHC Labs</p>
              <p className="text-sm text-muted-foreground">Learn, Harness, Create</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <div>
              <p className="text-sm text-muted-foreground">
                Transforming data into actionable insights
              </p>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LHC Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
