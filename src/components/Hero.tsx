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
        <div className="absolute inset-0 bg-gradient-to-r from-background/100 via-background/98 to-background/95 md:from-background/100 md:via-background/99 md:to-background/97" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="px-6 py-2 bg-primary/10 border-2 border-primary text-primary font-gaming font-bold text-sm uppercase tracking-wider rounded-lg shadow-soft backdrop-blur-sm">
              Career Compass — La bussola per la tua carriera
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] text-secondary tracking-tight font-gaming uppercase">
            Career Compass
          </h1>
          <h2 className="text-2xl md:text-4xl text-foreground mb-10 max-w-3xl font-tech font-semibold leading-relaxed">
            Ti aiuto a (ri)trovare la tua direzione professionale
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToContact}
              className="text-base font-gaming px-10 py-6 h-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground border-2 border-secondary shadow-neon-cyan"
            >
              Inizia Ora <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base font-gaming px-10 py-6 h-auto border-2 border-secondary text-secondary hover:bg-secondary/10"
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
