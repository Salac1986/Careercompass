const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Professional Coaching Services</h3>
            <p className="text-sm text-primary-foreground/80 font-sans">
              Empowering careers, students, and language learners since 2014
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80 font-sans">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
