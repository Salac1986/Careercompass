import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";

const About = () => {
  const credentials = [
    "Career Advisor certificato con anni di esperienza",
    "Specializzato in orientamento per studenti e professionisti",
    "Insegnante certificato CELTA per l'inglese",
    "Madrelingua bilingue (Inglese & Italiano)",
    "Esperienza comprovata nel supporto al successo dei clienti"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <Card className="overflow-hidden shadow-medium border-border/50">
              <div className="aspect-square">
                <img 
                  src={coachPortrait}
                  alt="Professional Coach"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 gradient-hero rounded-full blur-3xl opacity-20 -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Appassionato della Tua Crescita
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-sans">
              Con un profondo impegno nel potenziare gli individui, porto anni di esperienza nello sviluppo professionale, 
              nell'orientamento educativo e nell'insegnamento delle lingue. Il mio approccio combina competenza professionale 
              con una sincera attenzione al percorso unico di ogni cliente.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-sans">
              Che tu stia affrontando una transizione di carriera, perseguendo l'eccellenza accademica o imparando l'inglese, 
              fornisco una guida personalizzata che trasforma le sfide in opportunità.
            </p>

            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-sans">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
