import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Users, Languages } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Career Coaching",
    description: "Navigate your career path with confidence. Strategic guidance for career transitions, advancement, and professional development.",
    highlights: ["Career Strategy", "Interview Prep", "Resume Building", "Salary Negotiation"]
  },
  {
    icon: GraduationCap,
    title: "Student Coaching",
    description: "Empower students to achieve academic excellence. Personalized support for study skills, goal setting, and academic success.",
    highlights: ["Study Techniques", "Time Management", "Goal Setting", "Academic Planning"]
  },
  {
    icon: Users,
    title: "Recruitment Services",
    description: "Connect the right talent with the right opportunities. Expert recruitment solutions for businesses and job seekers.",
    highlights: ["Talent Matching", "Candidate Screening", "Interview Coordination", "Market Insights"]
  },
  {
    icon: Languages,
    title: "Language Classes",
    description: "Master English and Italian with engaging, practical lessons. From beginners to advanced learners, tailored to your goals.",
    highlights: ["English Lessons", "Italian Lessons", "Conversational Practice", "Cultural Immersion"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Services Designed for Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Comprehensive coaching and educational services tailored to help you achieve your personal and professional goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base font-sans">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-sans"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
