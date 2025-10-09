import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";

const About = () => {
  const credentials = [
    "Certified Career Coach with 10+ years experience",
    "Specialized in student development and academic coaching",
    "Expert recruiter with extensive industry network",
    "Native bilingual speaker (English & Italian)",
    "Proven track record of client success stories"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <Card className="overflow-hidden shadow-medium border-border/50">
              <div className="aspect-square">
                <img 
                  src={coachPortrait}
                  alt="Professional Coach"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 gradient-hero rounded-full blur-3xl opacity-20 -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Passionate About Your Growth
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-sans">
              With a deep commitment to empowering individuals, I bring years of experience across career development, 
              education, and language instruction. My approach combines professional expertise with genuine care for 
              each client's unique journey.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-sans">
              Whether you're navigating a career transition, pursuing academic excellence, or mastering a new language, 
              I provide personalized guidance that transforms challenges into opportunities.
            </p>

            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-sans">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
