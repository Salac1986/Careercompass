const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 border-t-4 border-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold mb-3">Compass - Career Advisor</h3>
            <p className="text-base text-background/80 font-sans font-bold">
              Supporto professionale per carriere e orientamento
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-base text-background/80 font-sans font-bold">
              © {new Date().getFullYear()} Tutti i diritti riservati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
