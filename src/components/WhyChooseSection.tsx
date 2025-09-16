import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Award, 
  Briefcase, 
  BookOpen, 
  DollarSign, 
  Clock,
  Target,
  Trophy
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Experienced Mentors",
    description: "Learn from industry experts with 10+ years of real-world experience in top tech companies."
  },
  {
    icon: Briefcase,
    title: "100% Placement Support",
    description: "Dedicated placement team with tie-ups with 200+ companies ensuring job opportunities."
  },
  {
    icon: BookOpen,
    title: "Real-time Projects",
    description: "Work on live industry projects to build a strong portfolio that impresses employers."
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Get certified by leading platforms and boost your resume with recognized credentials."
  },
  {
    icon: DollarSign,
    title: "Affordable Fees",
    description: "Quality education at competitive prices with flexible EMI options and scholarship programs."
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Weekend and weekday batches available to suit working professionals and students."
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description: "Small batch sizes ensure individual attention and customized learning paths."
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "500+ successful placements with average salary hike of 150% for our graduates."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">GRK Institute?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just teach courses, we build careers. Here's what makes GRK Institute the right choice for your tech journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card hover:bg-card-hover border-0 shadow-smooth"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stats */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150%</div>
              <div className="text-lg opacity-90">Average Salary Hike</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8★</div>
              <div className="text-lg opacity-90">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;