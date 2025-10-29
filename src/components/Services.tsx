import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "First Quest",
    subtitle: "Orientamento per Studenti",
    description: "Per studenti che vogliono entrare nel mondo del gaming, tech e creative industries: dall'università in Italia o all'estero, alle prime scelte professionali.",
    highlights: ["Scelta Universitaria", "Orientamento Accademico", "Percorsi di Studio all'Estero", "Preparazione al Mondo del Lavoro"]
  },
  {
    icon: Briefcase,
    title: "The Map to Your Next Mission",
    subtitle: "Orientamento Professionale",
    description: "Guida per professionisti nel gaming, big tech e creative industries che vogliono crescere, fare una transizione o ridefinire la propria carriera.",
    highlights: ["Strategia di Carriera", "Preparazione Colloqui", "CV Professionale", "Negoziazione Salariale"]
  },
  {
    icon: Building2,
    title: "Guild Recruitment",
    subtitle: "Servizi di Recruiting per Aziende",
    description: "Supporto specializzato per aziende nel gaming, big tech e creative industries nella ricerca e selezione di talenti qualificati in ambito artistico, tech, marketing e corporate.",
    highlights: ["Talent Acquisition", "Screening Candidati", "Recruitment Strategico", "Employer Branding"]
  }
];

const Services = () => {
  return (
    <section id="services" className="cv-section bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="mb-20">
          <div className="border-l-4 border-primary pl-6 mb-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-neon"></div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight font-gaming uppercase text-foreground">
              Servizi Professionali
            </h2>
            <p className="text-xl font-tech font-medium text-muted-foreground max-w-2xl">
              Percorsi su misura per ritrovare la tua rotta — che tu sia all'inizio del viaggio o pronto a cambiare direzione.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-neon hover:shadow-neon transition-smooth hover:-translate-y-2 border-2 border-primary/30 hover:border-primary bg-card/95 backdrop-blur-sm hud-border overflow-hidden relative group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-neon"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-lg bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 shadow-neon group-hover:shadow-neon transition-smooth">
                      <Icon className="h-10 w-10 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-extrabold mb-2 font-gaming uppercase text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-tech font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base font-tech font-normal leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pt-4 border-t-2 border-primary/20">
                    <div className="grid grid-cols-2 gap-2">
                      {service.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-2 bg-primary/10 text-primary text-xs font-gaming font-bold rounded border border-primary/30 hover:bg-primary/20 transition-smooth uppercase"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
