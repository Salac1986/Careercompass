import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GamesTechPro from "@/components/GamesTechPro";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WelcomeModal from "@/components/WelcomeModal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WelcomeModal />
      <Header />
      <Hero />
      <Services />
      <GamesTechPro />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
