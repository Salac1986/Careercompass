import { Card } from "@/components/ui/card";
import { CheckCircle2, Compass } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => {
  const credentials = [
    "Recruiter e career advisor con anni di esperienza in aziende globali e multinazionali",
    "Specializzata nel recruiting nel mondo big tech e videogames",
    "Esperta del mondo universitario italiano e estero",
    "Approccio personalizzato e orientato ai risultati"
  ];

  return (
    <section id="about" className="cv-section bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div>
            <div className="border-l-8 border-secondary pl-6 mb-8">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight font-title text-foreground">
                Esperienza & Qualifiche
              </h2>
            </div>
            <p className="text-lg font-semibold text-foreground mb-8 font-body leading-relaxed">
              Dopo anni come recruiter in aziende globali e nell'orientamento universitario, oggi metto la mia esperienza al servizio di chi vuole trovare la propria rotta professionale.
              Ogni percorso è diverso: la mia bussola è l'ascolto, la chiarezza e l'esperienza sul campo.
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

          {/* Logo Side */}
          <div className="relative lg:order-2 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
              <Card className="relative overflow-hidden shadow-medium border-2 border-primary/20 bg-background/80 backdrop-blur-sm p-12 rounded-2xl">
                <img 
                  src={logo}
                  alt="Career Compass Logo"
                  className="w-64 h-64 object-contain"
                />
              </Card>
              <Compass className="absolute -bottom-4 -right-4 w-24 h-24 text-secondary/30" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
