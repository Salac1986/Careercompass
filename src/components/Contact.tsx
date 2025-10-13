import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Informazioni Mancanti",
        description: "Per favore compila tutti i campi obbligatori.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Messaggio Inviato!",
      description: "Grazie per avermi contattato. Ti risponderò presto.",
    });

    // Reset form
    setFormData({ name: '', email: '', service: '', message: '' });
  };

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
                  tuoemail@example.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium border-2 border-border/50 bg-card">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 border-2 border-secondary/50 flex items-center justify-center mb-3">
                  <Phone className="h-7 w-7 text-secondary" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-extrabold font-title">Telefono</CardTitle>
                <CardDescription className="font-body font-semibold text-base">
                  +39 XXX XXX XXXX
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
                  Online e in Presenza
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 shadow-medium border-2 border-border/50 bg-card">
            <CardHeader className="border-b-2 border-border/30 pb-6">
              <CardTitle className="text-3xl font-extrabold font-title">Invia un Messaggio</CardTitle>
              <CardDescription className="font-body font-semibold text-base">
                Compila il modulo qui sotto e ti risponderò entro 24 ore.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input 
                      id="name"
                      placeholder="Il tuo nome"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="tua.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Servizio di Interesse</Label>
                  <Input 
                    id="service"
                    placeholder="es. Orientamento Professionale, Corsi di Inglese"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio *</Label>
                  <Textarea 
                    id="message"
                    placeholder="Parlami dei tuoi obiettivi e di come posso aiutarti..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" className="w-full font-bold text-lg" size="lg" variant="hero">
                  Invia Messaggio
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
