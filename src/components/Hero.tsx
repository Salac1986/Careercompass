import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCompass from "@/assets/hero-compass.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroCompass})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent font-gaming font-bold text-xs uppercase tracking-wider rounded-full backdrop-blur-sm">
              Career Coaching Professionale
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-foreground tracking-tight font-gaming uppercase">
            Career<br/>
            <span className="text-primary">Compass</span>
          </h1>
          <p className="text-base sm:text-lg text-primary/90 mb-4 font-tech font-semibold">
            Gaming, Tech & Creative Industries
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-tech leading-relaxed">
            Ti aiuto a (ri)trovare la tua direzione professionale con percorsi personalizzati e strategie concrete.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToContact}
              className="text-sm sm:text-base font-gaming px-8 py-6 h-auto"
            >
              Inizia Ora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm sm:text-base font-gaming px-8 py-6 h-auto"
            >
              Scopri i Servizi
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
