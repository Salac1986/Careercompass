import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Compass, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già visto il modal
    const hasVisited = localStorage.getItem("hasVisitedCareerCompass");
    
    if (!hasVisited) {
      // Mostra il modal dopo un breve delay per un effetto migliore
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    }
  }, []);

  const handleClose = () => {
    // Salva in localStorage che l'utente ha visto il modal
    localStorage.setItem("hasVisitedCareerCompass", "true");
    setIsOpen(false);
  };

  const handleGetStarted = () => {
    handleClose();
    // Scrolla alla sezione servizi
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] border-2 border-accent/30 bg-card">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center animate-scale-in">
              <img src={logo} alt="Career Compass Logo" className="w-14 h-14" />
            </div>
          </div>
          <DialogTitle className="text-3xl font-gaming uppercase text-center text-foreground">
            Benvenuto su<br />
            <span className="text-primary">Career Compass</span>
          </DialogTitle>
          <DialogDescription className="text-center text-base font-tech pt-4 space-y-4">
            <p className="text-foreground font-semibold text-lg">
              La tua bussola nel mondo del lavoro e dello studio
            </p>
            
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 space-y-3 text-left">
              <div className="flex items-start gap-3">
                <Compass className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">Percorsi personalizzati</span> per professionisti, studenti e aziende
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">Specializzazione</span> in gaming, tech e creative industries
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">Consulenza gratuita</span> per iniziare il tuo percorso
                </p>
              </div>
            </div>

            {/* Sezione Video - Puoi sostituire con un iframe YouTube/Vimeo */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-lg p-6 space-y-2">
              <p className="text-foreground font-bold text-base">
                🎯 Sei pronto a dare una direzione alla tua carriera?
              </p>
              <p className="text-sm text-muted-foreground">
                Che tu sia un professionista in cerca di crescita, uno studente che vuole orientarsi, o un'azienda alla ricerca di talenti, posso aiutarti a raggiungere i tuoi obiettivi.
              </p>
              
              {/* Esempio di dove inserire un video YouTube */}
              {/* <div className="aspect-video bg-background rounded-md overflow-hidden mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Video di presentazione"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div> */}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button
            variant="default"
            size="lg"
            onClick={handleGetStarted}
            className="flex-1 font-gaming uppercase text-sm"
          >
            Scopri i Servizi <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleClose}
            className="font-gaming uppercase text-sm"
          >
            Chiudi
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-2">
          Questo messaggio non verrà mostrato più
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
