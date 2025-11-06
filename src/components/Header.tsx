import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-new.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "gaming-tech", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const goToInventory = () => {
    navigate("/inventario");
    setIsOpen(false);
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-border shadow-soft">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Career Compass - Torna alla home"
          >
            <img src={logo} alt="Career Compass Logo" className="h-12 w-12" />
            <span className="text-xl md:text-2xl font-gaming font-extrabold uppercase text-foreground">
              Career Compass
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative group">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('services')}
                className={`font-gaming font-bold text-sm uppercase tracking-wide transition-all ${
                  isActive('services') || isActive('gaming-tech')
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Servizi
              </Button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border-2 border-border rounded-lg shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 overflow-hidden z-50">
                <button
                  onClick={() => scrollToSection('services')}
                  className={`w-full text-left px-4 py-3 hover:bg-accent/10 transition-all hover:translate-x-1 border-b border-border ${
                    isActive('services') ? 'bg-accent/5 text-primary font-bold' : 'text-foreground'
                  }`}
                >
                  <span className="font-gaming text-sm">Servizi Coaching</span>
                </button>
                <button
                  onClick={() => scrollToSection('gaming-tech')}
                  className={`w-full text-left px-4 py-3 hover:bg-accent/10 transition-all hover:translate-x-1 ${
                    isActive('gaming-tech') ? 'bg-accent/5 text-primary font-bold' : 'text-foreground'
                  }`}
                >
                  <span className="font-gaming text-sm">Games & Tech</span>
                </button>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={goToInventory}
              className={`font-gaming font-bold text-sm uppercase tracking-wide transition-colors ${
                location.pathname === '/inventario' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Inventario
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className={`font-gaming font-bold text-sm uppercase tracking-wide transition-colors ${
                isActive('about') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Chi Sono
            </Button>
            <Button
              variant="default"
              onClick={() => scrollToSection('contact')}
              className={`ml-2 font-gaming font-bold text-sm uppercase tracking-wide ${
                isActive('contact') ? 'shadow-neon-cyan' : ''
              }`}
            >
              Contatti
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-l-2 border-accent">
              <div className="flex flex-col gap-6 mt-8">
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-3 pb-6 border-b-2 border-border"
                >
                  <img src={logo} alt="Career Compass Logo" className="h-10 w-10" />
                  <span className="text-lg font-gaming font-extrabold uppercase text-foreground">
                    Career Compass
                  </span>
                </button>

                <div className="flex flex-col gap-2">
                  <div className="mb-2">
                    <span className="text-xs font-gaming uppercase text-muted-foreground px-2">Servizi</span>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection('services')}
                    className={`justify-start font-gaming font-bold text-base uppercase ${
                      isActive('services') ? 'text-primary bg-accent/10' : ''
                    }`}
                  >
                    Servizi Coaching
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection('gaming-tech')}
                    className={`justify-start font-gaming font-bold text-base uppercase ${
                      isActive('gaming-tech') ? 'text-primary bg-accent/10' : ''
                    }`}
                  >
                    Games & Tech
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  onClick={goToInventory}
                  className={`justify-start font-gaming font-bold text-base uppercase ${
                    location.pathname === '/inventario' ? 'text-primary bg-accent/10' : ''
                  }`}
                >
                  Inventario
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('about')}
                  className={`justify-start font-gaming font-bold text-base uppercase ${
                    isActive('about') ? 'text-primary bg-accent/10' : ''
                  }`}
                >
                  Chi Sono
                </Button>
                <Button
                  variant="default"
                  onClick={() => scrollToSection('contact')}
                  className={`justify-start font-gaming font-bold text-base uppercase ${
                    isActive('contact') ? 'shadow-neon-cyan' : ''
                  }`}
                >
                  Contatti
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
