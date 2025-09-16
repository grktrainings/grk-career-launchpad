import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    course: "Python Full Stack",
    company: "Infosys",
    salary: "₹6.5 LPA",
    rating: 5,
    text: "GRK Institute transformed my career completely! The hands-on projects and mentorship helped me land a job at Infosys with a 180% salary hike. The placement support was exceptional.",
    image: "PS"
  },
  {
    name: "Rajesh Kumar",
    course: "Java Full Stack", 
    company: "TCS",
    salary: "₹7.2 LPA",
    rating: 5,
    text: "Best decision I made was joining GRK. The real-time projects gave me confidence to face interviews. Got placed in TCS within 2 months of course completion.",
    image: "RK"
  },
  {
    name: "Anitha Reddy",
    course: "Digital Marketing",
    company: "Wipro Digital",
    salary: "₹5.8 LPA",
    rating: 5,
    text: "From zero knowledge to landing a marketing role at Wipro Digital. The practical approach and industry connections at GRK made all the difference.",
    image: "AR"
  },
  {
    name: "Vikram Singh",
    course: "DevOps with AWS",
    company: "Accenture",
    salary: "₹8.5 LPA",
    rating: 5,
    text: "GRK's DevOps course is incredible! Got hands-on experience with real AWS projects. Now working as DevOps Engineer at Accenture with amazing growth opportunities.",
    image: "VS"
  },
  {
    name: "Deepika Menon",
    course: "Python Full Stack",
    company: "Cognizant",
    salary: "₹6.8 LPA",
    rating: 5,
    text: "The mentors at GRK are amazing! They guided me through every step and helped me build projects that impressed recruiters. Highly recommend for career switch.",
    image: "DM"
  },
  {
    name: "Arjun Patel",
    course: "Java Full Stack",
    company: "HCL Technologies",
    salary: "₹7.5 LPA",
    rating: 5,
    text: "Switched from mechanical to IT with GRK's help. The structured curriculum and placement support got me into HCL. Best investment in my career!",
    image: "AP"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const displayedTestimonials = [
    testimonials.slice(currentIndex * 2, currentIndex * 2 + 2),
    testimonials.slice((currentIndex * 2 + 2) % testimonials.length, (currentIndex * 2 + 4) % testimonials.length)
  ].flat().slice(0, 2);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real success stories from our graduates who transformed their careers with GRK Institute.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={`${testimonial.name}-${currentIndex}-${index}`} className="relative overflow-hidden hover:shadow-glow transition-all duration-300 bg-card animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-card-foreground">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.course}
                      </Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-primary font-medium">{testimonial.company}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <div className="text-lg font-bold text-success">{testimonial.salary}</div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-4 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-110' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Overall Stats */}
        <div className="bg-gradient-accent rounded-2xl p-8 md:p-12 border">
          <h3 className="text-3xl font-bold text-center mb-8 text-card-foreground">
            Success Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹7.2L</div>
              <div className="text-muted-foreground">Average Package</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2-3</div>
              <div className="text-muted-foreground">Months to Job</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;