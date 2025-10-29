import { Card } from "@/components/ui/card";
import { CheckCircle2, Compass } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => {
  const credentials = [
    "Recruiter e career coach con esperienza in aziende globali come Amazon e Keywords Studios",
    "Specializzata in gaming, big tech e creative industries — con focus su artisti, sviluppatori, professionisti tech e creative",
    "Aiuto professionisti del settore a fare chiarezza e costruire strategie di crescita, e studenti a orientarsi verso carriere nel gaming, tech e industrie creative",
    "Supporto le aziende nel gaming e tech nella ricerca e selezione di talenti qualificati in ambito artistico, tech, marketing e operations"
  ];

  return (
    <section id="about" className="cv-section bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div>
            <div className="border-l-4 border-primary pl-6 mb-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-neon"></div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight font-gaming uppercase text-foreground">
                Chi Sono
              </h2>
            </div>
            <div className="space-y-6 text-foreground font-tech leading-relaxed">
              <p className="text-base">
                Ciao, e benvenuto! Sono Cristina, recruiter aziendale e coach.
              </p>

              <p className="text-base">
                Fin da bambina sono stata affascinata dalle lingue, e dopo la laurea in Lingue (russo e giapponese) alla Statale di Milano sono volata a Mosca per un'esperienza all'Università Lomonosov (MGU) che, da breve soggiorno, si è trasformata in un lungo capitolo di vita e lavoro.
              </p>

              <p className="text-base">
                Al mio rientro in Italia ho lavorato nel settore dell'educazione internazionale, recruitando studenti stranieri per programmi di arte, moda, media e grafica. In quegli anni ho sviluppato una doppia competenza: da un lato la gestione delle vendite, diventando Area Manager per Europa e Turchia, dall'altro l'empatia necessaria per guidare le persone verso le scelte più adatte a loro.
              </p>

              <p className="text-base">
                Dopo un periodo nel settore industriale, troppo arido per me, sono rientrata nella formazione aziendale, occupandomi dei processi di learning & development per diverse aziende nel settore linguistico e della localizzazione. È stato allora che ho capito cosa mi mancava davvero: il recruiting, sedermi con le persone, capire le loro storie e attitudini, e accompagnarle nel mondo del lavoro.
              </p>

              <p className="text-base">
                Dopo un corso di HR Management sono entrata come recruiter in Amazon e oggi lavoro in Keywords Studios, supportando team globali nel recruiting di artisti — la mia vera passione — sviluppatori, professionisti di marketing, operations, sales e C-level.
              </p>

              <p className="text-base">
                Il mondo del lavoro cambia rapidamente e non tutti hanno le idee chiare su cosa vogliono fare (io stessa ci ho messo anni per capirlo). So cosa vuol dire sentirsi disorientati o bloccati, e voglio aiutare chi si trova in quella fase a ritrovare direzione, fiducia e strumenti concreti per ripartire. Ecco come nasce "Career Compass", la tua bussola nel mondo del lavoro e dello studio.
              </p>
            </div>

            <div className="section-divider" />

            <div className="space-y-4 mt-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary shadow-soft hover:shadow-neon transition-smooth hover:bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" strokeWidth={3} />
                  <span className="text-foreground font-tech font-semibold text-base">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Side */}
          <div className="relative lg:order-2">
            <div className="border-l-4 border-secondary pl-6 mb-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary shadow-neon-blue"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground font-gaming uppercase">
                Testimonial
              </h3>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-card/95 backdrop-blur-sm border-l-4 border-primary shadow-neon hover:shadow-neon transition-smooth">
                <p className="text-foreground font-tech italic mb-4">
                  "Grazie al bilancio delle competenze con Cristina e alla revisione completa del mio CV, sono riuscita a capire meglio i miei punti di forza e a presentarli in modo chiaro. Dopo anni di immobilismo nel mio vecchio lavoro, sono riuscita a dare una direzione alle mie esperienze e a trovare lavoro in una multinazionale con ampie possibilità di crescita interne"
                </p>
                <p className="text-secondary font-semibold font-gaming">— Claudia</p>
              </Card>

              <Card className="p-6 bg-card/95 backdrop-blur-sm border-l-4 border-secondary shadow-neon-blue hover:shadow-neon-blue transition-smooth">
                <p className="text-foreground font-tech italic mb-4">
                  "Non avevo idea che il mio CV fosse così lungo e disorganizzato, né che i recruiter e i sistemi ATS filtrassero i candidati in quel modo. Lavorare con Cristina mi ha aperto gli occhi: abbiamo tagliato il superfluo, messo in evidenza le cose importanti e reso il mio profilo davvero leggibile. Dopo un periodo di disoccupazione, ho trovato il lavoro perfetto per me"
                </p>
                <p className="text-secondary font-semibold font-gaming">— Francesco</p>
              </Card>

              <Card className="p-6 bg-card/95 backdrop-blur-sm border-l-4 border-primary shadow-neon hover:shadow-neon transition-smooth">
                <p className="text-foreground font-tech italic mb-4">
                  "Dopo un lungo periodo di disoccupazione e tanta incertezza sulla mia carriera, mi sono rivolta a Cristina. Il percorso con lei è stato fondamentale: mi ha aiutata a fare chiarezza sui miei punti di forza, a costruire un piano concreto e a prepararmi passo passo. Grazie ai suoi consigli mirati, sono riuscita a superare con successo tutti i colloqui e a entrare in Amazon, ottenendo il lavoro dei miei sogni. Non ce l'avrei mai fatta da sola!"
                </p>
                <p className="text-secondary font-semibold font-gaming">— Federica</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
