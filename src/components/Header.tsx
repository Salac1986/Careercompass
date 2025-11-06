import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Career Compass Logo" className="h-12 md:h-16" />
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button 
                className="text-foreground hover:text-primary font-gaming font-bold transition-colors uppercase text-sm tracking-wider"
              >
                Servizi
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-background border-2 border-border rounded-lg shadow-lg opacity-0 invisible scale-95 translate-y-[-10px] group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 font-gaming font-bold transition-all duration-200 text-sm tracking-wider border-b border-border hover:translate-x-1"
                >
                  Servizi Coaching
                </a>
                <a 
                  href="#gaming-tech" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('gaming-tech');
                  }}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 font-gaming font-bold transition-all duration-200 text-sm tracking-wider hover:translate-x-1"
                >
                  Games & Tech
                </a>
              </div>
            </div>
            <a 
              href="/inventario"
              className="text-foreground hover:text-primary font-gaming font-bold transition-colors uppercase text-sm tracking-wider"
            >
              Inventario
            </a>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-foreground hover:text-primary font-gaming font-bold transition-colors uppercase text-sm tracking-wider"
            >
              Chi Sono
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-foreground hover:text-primary font-gaming font-bold transition-colors uppercase text-sm tracking-wider"
            >
              Contatti
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-foreground hover:text-primary transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] bg-background border-l-2 border-accent/30">
              <nav className="flex flex-col gap-6 mt-8">
                <div className="border-b border-accent/20 pb-3">
                  <p className="text-foreground font-gaming font-bold uppercase text-lg tracking-wider mb-3">Servizi</p>
                  <div className="flex flex-col gap-3 ml-4">
                    <a 
                      href="#services" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                      }}
                      className="text-foreground hover:text-primary font-gaming font-bold transition-colors text-base tracking-wider"
                    >
                      Servizi Coaching
                    </a>
                    <a 
                      href="#gaming-tech" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('gaming-tech');
                      }}
                      className="text-foreground hover:text-primary font-gaming font-bold transition-colors text-base tracking-wider"
                    >
                      Games & Tech
                    </a>
                  </div>
                </div>
                <a 
                  href="/inventario"
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary font-gaming font-bold transition-colors uppercase text-lg tracking-wider border-b border-accent/20 pb-3"
                >
                  Inventario
                </a>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="text-foreground hover:text-primary font-gaming font-bold transition-colors uppercase text-lg tracking-wider border-b border-accent/20 pb-3"
                >
                  Chi Sono
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-foreground hover:text-primary font-gaming font-bold transition-colors uppercase text-lg tracking-wider border-b border-accent/20 pb-3"
                >
                  Contatti
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
