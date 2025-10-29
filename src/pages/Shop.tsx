import { Construction } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 inline-block p-8 bg-secondary/10 border-2 border-secondary rounded-2xl shadow-neon-blue">
            <Construction className="h-24 w-24 text-secondary mx-auto mb-6 animate-pulse" strokeWidth={2} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-gaming uppercase text-foreground">
            Inventario
          </h1>
          
          <div className="mb-8">
            <span className="px-6 py-3 bg-accent/50 border-2 border-secondary/30 text-foreground font-tech font-bold text-lg rounded-lg inline-block">
              🚧 Sezione in Costruzione 🚧
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-tech leading-relaxed">
            Stiamo preparando una collezione di <span className="text-secondary font-bold">guide esclusive</span>, 
            <span className="text-secondary font-bold"> materiali formativi</span> e <span className="text-secondary font-bold">risorse digitali</span> per 
            aiutarti nella tua carriera nel gaming, tech e creative industries.
          </p>
          
          <div className="bg-card/50 backdrop-blur-sm border-2 border-secondary/20 rounded-xl p-8">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-foreground uppercase">
              Prossimamente disponibili
            </h3>
            <ul className="space-y-3 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3 text-muted-foreground font-tech">
                <span className="text-secondary font-bold">✦</span>
                <span>Guide strategiche per la ricerca lavoro</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground font-tech">
                <span className="text-secondary font-bold">✦</span>
                <span>Template CV e cover letter professionali</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground font-tech">
                <span className="text-secondary font-bold">✦</span>
                <span>Checklist e materiali di orientamento</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground font-tech">
                <span className="text-secondary font-bold">✦</span>
                <span>Risorse esclusive per il career development</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
