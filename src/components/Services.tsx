import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Orientamento Professionale",
    description: "Guida per professionisti nel gaming, big tech e creative industries che vogliono crescere, fare una transizione o ridefinire la propria carriera.",
    highlights: ["Strategia di Carriera", "Preparazione Colloqui", "CV Professionale", "Negoziazione Salariale"]
  },
  {
    icon: GraduationCap,
    title: "Orientamento per Studenti",
    description: "Per studenti che vogliono entrare nel mondo del gaming, tech e creative industries: dall'università in Italia o all'estero, alle prime scelte professionali.",
    highlights: ["Scelta Universitaria", "Orientamento Accademico", "Percorsi di Studio all'Estero", "Preparazione al Mondo del Lavoro"]
  },
  {
    icon: Building2,
    title: "Servizi di Recruiting per Aziende",
    description: "Supporto specializzato per aziende nel gaming, big tech e creative industries nella ricerca e selezione di talenti qualificati in ambito artistico, tech, marketing e corporate.",
    highlights: ["Talent Acquisition", "Screening Candidati", "Recruitment Strategico", "Employer Branding"]
  }
];

const Services = () => {
  return (
    <section id="services" className="cv-section bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="mb-20">
          <div className="border-l-8 border-secondary pl-6 mb-8">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight font-title text-foreground">
              Servizi Professionali
            </h2>
            <p className="text-xl font-body font-medium text-muted-foreground max-w-2xl">
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
                className="shadow-medium hover:shadow-medium transition-smooth hover:-translate-y-2 border-4 border-accent/30 hover:border-secondary/70 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-xl bg-secondary/20 border-3 border-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-10 w-10 text-secondary" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-extrabold mb-2 font-title text-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base font-body font-normal leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pt-4 border-t-2 border-border/30">
                    <div className="grid grid-cols-2 gap-2">
                      {service.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-2 bg-primary/10 text-foreground text-sm font-bold rounded-lg border border-primary/20"
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
