import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, BookOpen, Languages } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Orientamento Professionale",
    description: "Guida esperta per professionisti che cercano crescita di carriera, transizioni lavorative o avanzamento professionale.",
    highlights: ["Strategia di Carriera", "Preparazione Colloqui", "CV Professionale", "Negoziazione Salariale"]
  },
  {
    icon: GraduationCap,
    title: "Orientamento per Studenti",
    description: "Supporto personalizzato per studenti nella scelta del percorso di studi, orientamento universitario e pianificazione della carriera.",
    highlights: ["Scelta Universitaria", "Orientamento Accademico", "Piano di Studio", "Competenze Trasversali"]
  },
  {
    icon: BookOpen,
    title: "Corsi di Inglese CELTA",
    description: "Lezioni di inglese con insegnante certificato CELTA. Metodi comunicativi ed efficaci per tutti i livelli.",
    highlights: ["Certificazione CELTA", "Inglese Conversazionale", "Preparazione Esami", "Business English"]
  },
  {
    icon: Languages,
    title: "Lezioni di Italiano",
    description: "Impara l'italiano con lezioni coinvolgenti e pratiche. Dai principianti ai livelli avanzati.",
    highlights: ["Grammatica", "Conversazione", "Cultura Italiana", "Italiano per Lavoro"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Servizi Progettati per il Tuo Successo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Servizi di orientamento e formazione linguistica personalizzati per aiutarti a raggiungere i tuoi obiettivi personali e professionali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base font-sans">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-sans"
                      >
                        {highlight}
                      </span>
                    ))}
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
