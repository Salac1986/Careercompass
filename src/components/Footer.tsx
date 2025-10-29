const Footer = () => {
  return (
    <footer className="bg-muted/30 text-foreground py-12 border-t-4 border-accent shadow-neon">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 sm:mb-3 font-gaming uppercase">Career Compass — La bussola per la tua carriera.</h3>
            <p className="text-sm sm:text-base text-muted-foreground font-tech font-bold">
              Orientamento, chiarezza e strategia per trovare la tua strada.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-base text-muted-foreground font-tech font-bold">
              © {new Date().getFullYear()} Tutti i diritti riservati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
