import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Briefcase,
    title: "Career Navigator",
    subtitle: "Orientamento Professionale",
    description: "Guida per professionisti che vogliono crescere, fare una transizione o ridefinire la propria carriera in qualsiasi settore.",
    highlights: ["Strategia di Carriera", "Preparazione Colloqui", "CV Professionale", "Negoziazione Salariale"]
  },
  {
    icon: GraduationCap,
    title: "Student Launchpad",
    subtitle: "Orientamento per Studenti",
    description: "Per studenti che vogliono orientarsi nel mondo accademico e professionale: dall'università in Italia o all'estero, alle prime scelte di carriera.",
    highlights: ["Scelta Universitaria", "Orientamento Accademico", "Percorsi di Studio all'Estero", "Preparazione al Mondo del Lavoro"]
  },
  {
    icon: Building2,
    title: "Build Your Team",
    subtitle: "Servizi di Recruiting per Aziende",
    description: "Supporto specializzato per aziende nella ricerca e selezione di talenti qualificati in diversi settori e funzioni aziendali.",
    highlights: ["Talent Acquisition", "Screening Candidati", "Recruitment Strategico", "Employer Branding"]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
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
        className="h-full group hover:-translate-y-2 transition-all duration-300 border-2 border-border hover:border-accent bg-card hover:shadow-neon"
      >
        <CardHeader className="space-y-4">
          <div className="w-16 h-16 rounded-xl bg-accent/10 border-2 border-accent/30 group-hover:border-accent flex items-center justify-center transition-all duration-300">
            <Icon className="h-8 w-8 text-accent" strokeWidth={2.5} />
          </div>
          <div>
            <CardTitle className="text-xl font-extrabold mb-2 font-gaming uppercase text-foreground group-hover:text-accent transition-colors">
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
                className="px-3 py-2 bg-muted text-foreground text-xs font-tech font-semibold rounded border border-border group-hover:border-accent/30 transition-all text-center"
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

const Services = () => {
  return (
    <section id="services" className="cv-section bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Gaming-style background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px),
          linear-gradient(180deg, hsl(var(--accent)) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-20 right-20 w-64 h-64 border border-accent/10 rounded-full" />
      <div className="absolute bottom-40 left-10 w-48 h-48 border border-accent/10 rounded-full" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent font-gaming font-bold text-xs uppercase tracking-wider rounded-full">
              I Miei Servizi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-gaming uppercase text-foreground">
            Percorsi Professionali
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-tech text-muted-foreground max-w-2xl mx-auto">
            Soluzioni personalizzate per professionisti, studenti e aziende.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
