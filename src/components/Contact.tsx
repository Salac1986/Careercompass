import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="cv-section bg-background">
      <div className="container px-4 md:px-6">
        <div className="mb-20">
          <div className="border-l-4 border-accent pl-6 mb-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent shadow-neon"></div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-4 tracking-tight font-gaming uppercase text-foreground">
              Contattami
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-tech font-medium text-muted-foreground max-w-2xl">
              Pronto per fare il prossimo passo? Discutiamo i tuoi obiettivi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Calendly Booking */}
          <Card className="lg:col-span-2 shadow-soft hover:shadow-neon transition-smooth border-2 border-accent/30 hover:border-accent bg-card/95 backdrop-blur-sm lg:order-2 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent shadow-neon"></div>
            <CardHeader className="border-b-2 border-accent/20 pb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 rounded-lg bg-accent/10 border-2 border-accent flex items-center justify-center shadow-neon">
                  <Calendar className="h-7 w-7 text-accent" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-3xl font-extrabold font-gaming uppercase">Prenota una Consulenza Gratuita</CardTitle>
              </div>
              <CardDescription className="font-tech font-semibold text-base">
                Seleziona una data e un orario che funzionano per te. La prima consulenza è completamente gratuita.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px]">
                <iframe
                  src="https://calendly.com/cristina-salac86"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Prenota una consulenza"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-6 lg:order-1">
            <Card className="shadow-soft hover:shadow-neon transition-smooth border-2 border-accent/30 hover:border-accent bg-card/95 backdrop-blur-sm overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary shadow-neon-cyan"></div>
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-secondary/10 border-2 border-secondary flex items-center justify-center mb-3 shadow-neon-cyan group-hover:shadow-neon-cyan transition-smooth">
                  <Mail className="h-7 w-7 text-secondary" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-extrabold font-gaming uppercase">Email</CardTitle>
                <CardDescription className="font-tech font-semibold text-base">
                  cristina.salac86@gmail.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-neon transition-smooth border-2 border-accent/30 hover:border-accent bg-card/95 backdrop-blur-sm overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary shadow-neon-cyan"></div>
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-secondary/10 border-2 border-secondary flex items-center justify-center mb-3 shadow-neon-cyan group-hover:shadow-neon-cyan transition-smooth">
                  <MapPin className="h-7 w-7 text-secondary" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-extrabold font-gaming uppercase">Sede</CardTitle>
                <CardDescription className="font-tech font-semibold text-base">
                  Online e in presenza a Monza
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
