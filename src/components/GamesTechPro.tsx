import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Building2, Gamepad2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: GraduationCap,
    title: "🎮 First Quest",
    subtitle: "Orientamento per Studenti nel Gaming & Tech",
    description: "Per studenti che vogliono entrare nel mondo del gaming, tech e creative industries con un percorso chiaro, realistico e competitivo.",
    highlights: ["Scelta del Ruolo nel Settore", "Roadmap di Ingresso nel Gaming/Tech", "Portfolio Starter Kit", "Italia vs Estero: Strategia di Accesso"]
  },
  {
    icon: Briefcase,
    title: "🚀 The Map to Your Next Mission",
    subtitle: "Career Coaching per Gaming & Tech",
    description: "Percorso per chi vuole entrare o crescere nel settore: posizionamento, portfolio, strategia, interviste e accesso alle aziende giuste.",
    highlights: ["Audit di CV, Portfolio & ArtStation/GitHub", "Strategia per Entrare nelle Aziende", "Mock Interview & Test Task Prep", "Personal Branding per il Settore"]
  },
  {
    icon: Building2,
    title: "🏹 Guild Recruitment",
    subtitle: "Recruiting per Aziende Gaming & Tech",
    description: "Supporto specializzato per aziende nel gaming, tech e creative industries nella ricerca di talenti che parlano la stessa lingua del settore.",
    highlights: ["Talent Acquisition Specializzata", "Sourcing su Canali del Settore", "Employer Branding per Gaming/Tech", "Recruitment Partnership Flessibile"]
  }
];

const GamesTechCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card 
        className="h-full group hover:-translate-y-2 transition-all duration-300 border-2 border-primary/30 hover:border-primary bg-card hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"
      >
        <CardHeader className="space-y-4">
          <div className="w-16 h-16 rounded-xl bg-primary/10 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-primary" strokeWidth={2.5} />
          </div>
          <div>
            <CardTitle className="text-xl font-extrabold mb-2 font-gaming uppercase text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground font-tech font-medium">{service.subtitle}</p>
          </div>
          <CardDescription className="text-base font-tech leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {service.highlights.map((highlight, idx) => (
              <span 
                key={idx}
                className="px-3 py-2 bg-primary/5 text-foreground text-xs font-tech font-semibold rounded border border-primary/20 group-hover:border-primary/40 transition-all text-center"
              >
                {highlight}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const GamesTechPro = () => {
  return (
    <section id="gaming-tech" className="cv-section bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Gaming-themed decorative elements */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(30deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))),
          linear-gradient(150deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))),
          linear-gradient(30deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))),
          linear-gradient(150deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary)))
        `,
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
      }} />
      
      {/* Floating gaming icons */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 flex items-center justify-center">
        <Gamepad2 className="w-10 h-10 text-primary/30" />
      </div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-accent/20 rounded-full" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-gaming font-bold text-xs uppercase tracking-wider rounded-full">
              Percorsi Specializzati
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight font-gaming uppercase text-foreground">
            Games & Tech Pro
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-tech text-muted-foreground max-w-2xl mx-auto">
            Ti aiuto a (ri)trovare la tua direzione professionale con percorsi personalizzati e strategie concrete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <GamesTechCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Back to general services link */}
        <div className="mt-16 text-center">
          <a 
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-6 py-3 bg-background border-2 border-border hover:border-primary text-foreground hover:text-primary font-gaming font-bold uppercase text-sm tracking-wider rounded-lg transition-all"
          >
            ← Torna ai Percorsi Generici
          </a>
        </div>
      </div>
    </section>
  );
};

export default GamesTechPro;
