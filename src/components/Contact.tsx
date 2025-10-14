import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="cv-section bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="mb-20">
          <div className="border-l-8 border-secondary pl-6">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight font-title text-foreground">
              Contattami
            </h2>
            <p className="text-xl font-body font-medium text-muted-foreground max-w-2xl">
              Pronto per fare il prossimo passo? Discutiamo i tuoi obiettivi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="shadow-medium border-2 border-border/50 bg-card">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 border-2 border-secondary/50 flex items-center justify-center mb-3">
                  <Mail className="h-7 w-7 text-secondary" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-extrabold font-title">Email</CardTitle>
                <CardDescription className="font-body font-semibold text-base">
                  cristina.salac86@gmail.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium border-2 border-border/50 bg-card">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 border-2 border-secondary/50 flex items-center justify-center mb-3">
                  <MapPin className="h-7 w-7 text-secondary" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-extrabold font-title">Sede</CardTitle>
                <CardDescription className="font-body font-semibold text-base">
                  Online e in presenza a Monza
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Calendly Booking */}
          <Card className="lg:col-span-2 shadow-medium border-2 border-border/50 bg-card">
            <CardHeader className="border-b-2 border-border/30 pb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 border-2 border-secondary/50 flex items-center justify-center">
                  <Calendar className="h-7 w-7 text-secondary" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-3xl font-extrabold font-title">Prenota una Consulenza Gratuita</CardTitle>
              </div>
              <CardDescription className="font-body font-semibold text-base">
                Seleziona una data e un orario che funzionano per te. La prima consulenza è completamente gratuita.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[700px]">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
