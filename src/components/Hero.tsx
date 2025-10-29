import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCompass from "@/assets/hero-compass.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroCompass})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/85 md:from-background/100 md:via-background/99 md:to-background/97" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="px-3 py-1.5 sm:px-6 sm:py-2 bg-primary/10 border-2 border-accent text-accent font-gaming font-bold text-xs sm:text-sm uppercase tracking-wide sm:tracking-wider rounded-lg shadow-soft backdrop-blur-sm break-words max-w-full inline-block">
              Career Compass — La bussola per la tua carriera
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 md:mb-8 leading-[1.1] text-secondary tracking-tight font-gaming uppercase">
            Career Compass
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-4xl text-foreground mb-8 md:mb-10 max-w-3xl font-tech font-semibold leading-relaxed">
            Ti aiuto a (ri)trovare la tua direzione professionale
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToContact}
              className="text-sm sm:text-base font-gaming px-6 py-4 sm:px-10 sm:py-6 h-auto bg-black hover:bg-black/90 text-white border-2 border-accent shadow-neon"
            >
              Inizia Ora <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm sm:text-base font-gaming px-6 py-4 sm:px-10 sm:py-6 h-auto border-2 border-secondary text-secondary hover:bg-secondary/10"
            >
              Scopri i Servizi
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
