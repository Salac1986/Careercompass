import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCompass from "@/assets/hero-compass.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden mt-20 bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent font-gaming font-bold text-xs uppercase tracking-wider rounded-full">
                Career Coaching Professionale
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-foreground tracking-tight font-gaming uppercase">
              Career<br/>
              <span className="text-primary">Compass</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl font-tech leading-relaxed">
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

          {/* Compass Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-neon border-4 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105">
              <img 
                src={heroCompass} 
                alt="Career Compass - Orientamento Professionale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent z-0" />
    </section>
  );
};

export default Hero;
