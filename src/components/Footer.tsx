const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 border-t-4 border-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 font-gaming uppercase">Career Compass</h3>
            <p className="text-sm sm:text-base text-background/80 font-tech">
              La bussola per la tua carriera
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-base text-background/80 font-tech">
              © {new Date().getFullYear()} Tutti i diritti riservati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
