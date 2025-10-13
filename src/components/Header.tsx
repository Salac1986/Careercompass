import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border">
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Career Compass Logo" className="h-12 md:h-16" />
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-secondary font-bold transition-colors"
            >
              Servizi
            </a>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-secondary font-bold transition-colors"
            >
              Chi Sono
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-secondary font-bold transition-colors"
            >
              Contatti
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
