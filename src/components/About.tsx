import { Card } from "@/components/ui/card";
import { CheckCircle2, Compass } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => {
  const credentials = [
    "Recruiter e career coach con esperienza in aziende globali come Amazon e Keywords Studios",
    "Specializzata in gaming, big tech e creative industries — con focus principale su artisti, sviluppatori, professionisti tech e creative, ma con competenze trasversali in altre industries",
    "Aiuto professionisti del settore a fare chiarezza e costruire strategie di crescita, e studenti a orientarsi verso carriere nel gaming, tech, creative industries e oltre",
    "Supporto le aziende nel gaming, tech e altri settori nella ricerca e selezione di talenti qualificati in ambito artistico, tech, marketing e operations"
  ];

  return (
    <section id="about" className="cv-section bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Gaming-style hexagon pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <polygon points="28,0 56,15 56,45 28,60 0,45 0,15" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent"/>
              <polygon points="28,60 56,75 56,105 28,120 0,105 0,75" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent/10 rotate-45" />
      <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-accent/10 rotate-12" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Content Side */}
          <div>
            <div className="mb-8">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent font-gaming font-bold text-xs uppercase tracking-wider rounded-full">
                  La Mia Storia
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-gaming uppercase text-foreground">
                Chi Sono
              </h2>
            </div>
            <div className="space-y-5 text-foreground font-tech leading-relaxed">
              <p className="text-base sm:text-lg">
                Ciao, e benvenuto! Sono Cristina, recruiter aziendale e coach.
              </p>

              <p className="text-sm sm:text-base">
                Fin da bambina sono stata affascinata dalle lingue, e dopo la laurea in Lingue (russo e giapponese) alla Statale di Milano sono volata a Mosca per un'esperienza all'Università Lomonosov (MGU) che, da breve soggiorno, si è trasformata in un lungo capitolo di vita e lavoro.
              </p>

              <p className="text-sm sm:text-base">
                Al mio rientro in Italia ho lavorato nel settore dell'educazione internazionale, recruitando studenti stranieri per programmi di arte, moda, media e grafica. In quegli anni ho sviluppato una doppia competenza: da un lato la gestione delle vendite, diventando Area Manager per Europa e Turchia, dall'altro l'empatia necessaria per guidare le persone verso le scelte più adatte a loro.
              </p>

              <p className="text-sm sm:text-base">
                Dopo un periodo nel settore industriale, troppo arido per me, sono rientrata nella formazione aziendale, occupandomi dei processi di learning & development per diverse aziende nel settore linguistico e della localizzazione. È stato allora che ho capito cosa mi mancava davvero: il recruiting, sedermi con le persone, capire le loro storie e attitudini, e accompagnarle nel mondo del lavoro.
              </p>

              <p className="text-sm sm:text-base">
                Dopo un corso di HR Management sono entrata come recruiter in Amazon e oggi lavoro in Keywords Studios, supportando team globali nel recruiting di artisti — la mia vera passione — sviluppatori, professionisti di marketing, operations, sales e C-level. Le mie principali specializzazioni sono il gaming e le big tech, ma grazie alla mia esperienza so bene come funziona il mercato del lavoro sia in Italia che nel resto del mondo, quindi posso supportarti anche in altre industries.
              </p>

              <p className="text-sm sm:text-base font-semibold">
                Il mondo del lavoro cambia rapidamente e non tutti hanno le idee chiare su cosa vogliono fare (io stessa ci ho messo anni per capirlo). So cosa vuol dire sentirsi disorientati o bloccati, e voglio aiutare chi si trova in quella fase a ritrovare direzione, fiducia e strumenti concreti per ripartire. Ecco come nasce "Career Compass", la tua bussola nel mondo del lavoro e dello studio.
              </p>
            </div>

            <div className="mt-10 p-6 bg-accent/5 border-l-4 border-accent rounded-r-lg">
              <h3 className="text-xl font-bold font-gaming uppercase text-foreground mb-4">Le Mie Competenze</h3>
              <div className="space-y-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-foreground font-tech text-sm">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Side */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-8">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-gaming font-bold text-xs uppercase tracking-wider rounded-full">
                  Recensioni
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-gaming uppercase">
                Cosa Dicono di Me
              </h3>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-card border-2 border-border hover:border-primary/50 hover:shadow-soft transition-all">
                <p className="text-foreground font-tech italic mb-4 leading-relaxed">
                  "Grazie al bilancio delle competenze con Cristina e alla revisione completa del mio CV, sono riuscita a capire meglio i miei punti di forza e a presentarli in modo chiaro. Dopo anni di immobilismo nel mio vecchio lavoro, sono riuscita a dare una direzione alle mie esperienze e a trovare lavoro in una multinazionale con ampie possibilità di crescita interne"
                </p>
                <p className="text-primary font-semibold font-gaming">— Claudia</p>
              </Card>

              <Card className="p-6 bg-card border-2 border-border hover:border-primary/50 hover:shadow-soft transition-all">
                <p className="text-foreground font-tech italic mb-4 leading-relaxed">
                  "Non avevo idea che il mio CV fosse così lungo e disorganizzato, né che i recruiter e i sistemi ATS filtrassero i candidati in quel modo. Lavorare con Cristina mi ha aperto gli occhi: abbiamo tagliato il superfluo, messo in evidenza le cose importanti e reso il mio profilo davvero leggibile. Dopo un periodo di disoccupazione, ho trovato il lavoro perfetto per me"
                </p>
                <p className="text-primary font-semibold font-gaming">— Francesco</p>
              </Card>

              <Card className="p-6 bg-card border-2 border-border hover:border-primary/50 hover:shadow-soft transition-all">
                <p className="text-foreground font-tech italic mb-4 leading-relaxed">
                  "Dopo un lungo periodo di disoccupazione e tanta incertezza sulla mia carriera, mi sono rivolta a Cristina. Il percorso con lei è stato fondamentale: mi ha aiutata a fare chiarezza sui miei punti di forza, a costruire un piano concreto e a prepararmi passo passo. Grazie ai suoi consigli mirati, sono riuscita a superare con successo tutti i colloqui e a entrare in Amazon, ottenendo il lavoro dei miei sogni. Non ce l'avrei mai fatta da sola!"
                </p>
                <p className="text-primary font-semibold font-gaming">— Federica</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
