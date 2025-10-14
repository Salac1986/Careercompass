import { Card } from "@/components/ui/card";
import { CheckCircle2, Compass } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => {
  const credentials = [
    "Recruiter e career coach con esperienza in aziende globali e multinazionali",
    "Percorso trasversale tra education, big tech e videogames, in ruoli da sales a talent acquisition",
    "Aiuto professionisti a fare chiarezza e costruire un percorso di sviluppo, e studenti a orientarsi tra i diversi percorsi universitari in Italia e all'estero"
  ];

  return (
    <section id="about" className="cv-section bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div>
            <div className="border-l-8 border-secondary pl-6 mb-8">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight font-title text-foreground">
                Chi Sono
              </h2>
            </div>
            <div className="space-y-6 text-foreground font-body leading-relaxed">
              <h3 className="text-2xl font-bold text-secondary mb-4">La mia storia</h3>
              
              <p className="text-base">
                Fin da bambina sono stata affascinata dalle lingue, e per me era inevitabile che finissi per studiarle: dopo la laurea in Lingue (russo e giapponese) alla Statale di Milano sono volata a Mosca per un'esperienza all'Università Lomonosov (MGU) che, da breve soggiorno, si è trasformata in un lungo capitolo di vita e lavoro. 
              </p>

              <p className="text-base">
                Al mio rientro in Italia, per quasi dieci anni ho lavorato nel settore dell'educazione internazionale, sviluppando una rete globale di recruiting tra Europa, Russia, Turchia e Cina. Lì ho imparato quanto conti creare connessioni, gestire le vendite, ma soprattutto, ad accompagnare le persone verso le scelte giuste per loro.
              </p>

              <p className="text-base">
                Poi è arrivato il salto nel mondo corporate: un Master in Luxury Marketing & Communication (Il Sole 24 Ore Business School), una certificazione in HR Management e nuove sfide in aziende come Amazon Italia e, oggi, Keywords Studios, dove recluto talenti tech, art e marketing per studi di videogiochi in tutto il mondo.
              </p>

              <p className="text-base">
                Vivendo in prima persona la volatilità del mercato del lavoro, ho imparato che oggi sopravvivere professionalmente è una questione di adattabilità. 
              </p>

              <p className="text-base">
                So cosa vuol dire sentirsi disorientati o bloccati, e voglio aiutare chi si trova in quella fase a ritrovare direzione, fiducia e strumenti concreti per ripartire.
              </p>
            </div>

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

          {/* Testimonials Side */}
          <div className="relative lg:order-2">
            <div className="border-l-8 border-secondary pl-6 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground font-title">
                Testimonial
              </h3>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-accent/20 border-l-4 border-primary shadow-medium">
                <p className="text-foreground font-body italic mb-4">
                  "Grazie al bilancio delle competenze con Salac e alla revisione completa del mio CV, sono riuscita a capire meglio i miei punti di forza e a presentarli in modo chiaro. Dopo anni di immobilismo nel mio vecchio lavoro, sono riuscita a dare una direzione alle mie esperienze e a trovare lavoro in una multinazionale con ampie possibilità di crescita interne"
                </p>
                <p className="text-secondary font-semibold">— Claudia</p>
              </Card>

              <Card className="p-6 bg-accent/20 border-l-4 border-primary shadow-medium">
                <p className="text-foreground font-body italic mb-4">
                  "Non avevo idea che il mio CV fosse così lungo e disorganizzato, né che i recruiter e i sistemi ATS filtrassero i candidati in quel modo. Lavorare con Salac mi ha aperto gli occhi: abbiamo tagliato il superfluo, messo in evidenza le cose importanti e reso il mio profilo davvero leggibile. Dopo un periodo di disoccupazione, ho trovato il lavoro perfetto per me"
                </p>
                <p className="text-secondary font-semibold">— Francesco</p>
              </Card>

              <Card className="p-6 bg-accent/20 border-l-4 border-primary shadow-medium">
                <p className="text-foreground font-body italic mb-4">
                  "Dopo un lungo periodo di disoccupazione e tanta incertezza sulla mia carriera, mi sono rivolta a Salac. Il percorso con lei è stato fondamentale: mi ha aiutata a fare chiarezza sui miei punti di forza, a costruire un piano concreto e a prepararmi passo passo. Grazie ai suoi consigli mirati, sono riuscita a superare con successo tutti i colloqui e a entrare in Amazon, ottenendo il lavoro dei miei sogni. Non ce l'avrei mai fatta da sola!"
                </p>
                <p className="text-secondary font-semibold">— Federica</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
