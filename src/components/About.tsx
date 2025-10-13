import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";

const About = () => {
  const credentials = [
    "Career Advisor certificato con anni di esperienza",
    "Specializzato in orientamento per studenti e professionisti",
    "Esperienza comprovata nel supporto al successo dei clienti",
    "Approccio personalizzato e orientato ai risultati"
  ];

  return (
    <section id="about" className="cv-section bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <Card className="overflow-hidden shadow-medium border-4 border-primary/30">
              <div className="aspect-square relative">
                <img 
                  src={coachPortrait}
                  alt="Professional Coach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-8 border-background/10" />
              </div>
            </Card>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <div className="border-l-8 border-secondary pl-6 mb-8">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight font-title text-primary">
                Esperienza & Qualifiche
              </h2>
            </div>
            <p className="text-lg font-semibold text-foreground mb-6 font-body leading-relaxed">
              Con un profondo impegno nel potenziare gli individui, porto anni di esperienza nello sviluppo professionale 
              e nell'orientamento educativo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              Il mio approccio combina competenza professionale con una sincera attenzione al percorso unico di ogni cliente, 
              trasformando le sfide in opportunità concrete.
            </p>

            <div className="section-divider" />

            <div className="space-y-4 mt-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-accent/20 rounded-lg border-l-4 border-primary">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" strokeWidth={3} />
                  <span className="text-foreground font-body font-semibold text-base">{credential}</span>
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
