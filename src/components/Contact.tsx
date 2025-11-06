import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Calendar } from "lucide-react";
import coachPhoto from "@/assets/coach-portrait.jpg";

const Contact = () => {
  return (
    <section id="contact" className="cv-section bg-background relative overflow-hidden">
      {/* Gaming-style circuit lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="30%" x2="30%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-accent"/>
          <circle cx="30%" cy="30%" r="4" fill="currentColor" className="text-accent"/>
          <line x1="30%" y1="30%" x2="30%" y2="60%" stroke="currentColor" strokeWidth="1" className="text-accent"/>
          <line x1="70%" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-accent"/>
          <circle cx="70%" cy="20%" r="4" fill="currentColor" className="text-accent"/>
          <line x1="70%" y1="20%" x2="70%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-accent"/>
        </svg>
      </div>
      <div className="absolute top-1/4 right-10 w-24 h-24 border border-accent/10" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent font-gaming font-bold text-xs uppercase tracking-wider rounded-full">
              Parliamone
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-gaming uppercase text-foreground">
            Contattami
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-tech text-muted-foreground">
            Pronto per fare il prossimo passo? Prenota una consulenza gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6 lg:order-1">
            <Card className="border-2 border-border hover:border-accent hover:shadow-soft transition-all bg-card">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-4">
                  <Mail className="h-7 w-7 text-accent" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-extrabold font-gaming uppercase">Email</CardTitle>
                <CardDescription className="font-tech font-semibold text-base">
                  cristina.salac86@gmail.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border hover:border-accent hover:shadow-soft transition-all bg-card">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-accent" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-extrabold font-gaming uppercase">Sede</CardTitle>
                <CardDescription className="font-tech font-semibold text-base">
                  Online e in presenza a Monza
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Calendly Booking */}
          <Card className="lg:col-span-2 border-2 border-accent/30 hover:border-accent bg-card lg:order-2 overflow-hidden transition-all">
            <CardHeader className="border-b-2 border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
                <img 
                  src={coachPhoto} 
                  alt="Cristina - Career Coach" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-accent" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-extrabold font-gaming uppercase">Prenota una Consulenza Gratuita</CardTitle>
                  </div>
                  <CardDescription className="font-tech font-semibold text-base">
                    Seleziona una data e un orario che funzionano per te. La prima consulenza è completamente gratuita.
                  </CardDescription>
                </div>
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
