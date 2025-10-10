const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Career Advisor & Insegnante CELTA</h3>
            <p className="text-sm text-primary-foreground/80 font-sans">
              Supporto professionale per carriere, studenti e apprendimento linguistico
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80 font-sans">
              © {new Date().getFullYear()} Tutti i diritti riservati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
