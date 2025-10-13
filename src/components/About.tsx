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
            <div className="space-y-6 text-foreground font-body leading-relaxed">
              <h3 className="text-2xl font-bold text-secondary mb-4">La mia Storia</h3>
              
              <p className="text-base">
                La mia passione per le lingue e le culture mi ha portato a laurearmi in Lingue all'Università Statale di Milano, con un'esperienza formativa anche all'MGU di Mosca. Fin dall'inizio, la curiosità per le storie delle persone e le dinamiche interculturali ha guidato le mie scelte professionali.
              </p>

              <p className="text-base">
                Ho iniziato la mia carriera nel mondo dell'educazione internazionale, lavorando per quasi dieci anni in NABA (Nuova Accademia di Belle Arti), dove ho costruito e gestito una rete globale di recruitment in Europa, Russia, Turchia e Cina. In quegli anni ho imparato l'importanza di creare connessioni autentiche, di comprendere culture diverse e di guidare le persone verso le scelte giuste per il loro futuro.
              </p>

              <p className="text-base">
                Il desiderio di approfondire il mondo HR e talent acquisition mi ha portato a conseguire un Master in Luxury Marketing & Communication presso Il Sole 24 Ore Business School e una certificazione in HR Management. Questo ha segnato il passaggio al recruiting corporate: ho lavorato con aziende come Amazon Italia, supportando programmi di graduate e internship, e oggi sono Global Talent Specialist presso Keywords Studios, dove recruito profili tech, art e marketing per oltre 77 studi di sviluppo videogiochi in tutto il mondo.
              </p>

              <p className="text-base">
                Durante il mio percorso ho gestito processi di selezione end-to-end, costruito pipeline internazionali di talenti, ottimizzato sistemi ATS e CRM, e formato team di recruiter. Ma soprattutto, ho sviluppato una profonda comprensione di cosa significa orientarsi nel mondo del lavoro: dalle prime scelte universitarie, alle transizioni di carriera, fino alla ricerca del proprio allineamento professionale.
              </p>

              <p className="text-base">
                Nel 2025 ho completato una certificazione professionale in Career Coaching, unendo formalmente la mia esperienza pratica alla metodologia del coaching. Oggi metto al servizio di studenti e professionisti tutto ciò che ho imparato in anni di recruiting globale, orientamento universitario e talent management.
              </p>

              <p className="text-base font-semibold">
                La mia bussola è l'ascolto, la chiarezza e l'esperienza sul campo. Ogni percorso è diverso, e il mio obiettivo è aiutarti a trovare la tua direzione con strumenti concreti e supporto personalizzato.
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
