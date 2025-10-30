import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseSection from "@/components/WhyChooseSection"; 
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, ArrowRight, Star, Quote, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const coursesPreview = [
  {
    id: "python-fullstack",
    title: "Python Full Stack",
    duration: "6 Months",
    description: "Master Python, Django, Flask, React, databases and deployment",
    price: "₹35,000",
    popular: true,
    averageSalary: "₹6.5 LPA",
    demandLevel: "Very High"
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack",
    duration: "6 Months", 
    description: "Learn Java, Spring Boot, Microservices, Angular and cloud deployment",
    price: "₹35,000",
    popular: false,
    averageSalary: "₹7.2 LPA",
    demandLevel: "Very High"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    duration: "4 Months",
    description: "SEO, SEM, Social Media Marketing, Content Strategy and Analytics",
    price: "₹30,000",
    popular: false,
    averageSalary: "₹5.8 LPA",
    demandLevel: "High"
  },
  {
    id: "devops-aws",
    title: "DevOps with AWS",
    duration: "5 Months",
    description: "CI/CD, Docker, Kubernetes, AWS services and infrastructure automation",
    price: "₹35,000",
    popular: false,
    averageSalary: "₹8.5 LPA",
    demandLevel: "Extremely High"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        {/* Featured Courses Preview */}
        <section id="courses" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Popular Courses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Choose from our most in-demand courses designed by industry experts with guaranteed placement support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {coursesPreview.map((course, index) => (
                <Card key={course.id} className="relative group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card">
                  {course.popular && (
                    <Badge className="absolute -top-3 left-6 bg-secondary text-secondary-foreground font-semibold px-3 py-1">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <Badge variant="outline" className="text-success border-success text-xs">
                        {course.demandLevel}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-success font-medium">
                      <TrendingUp className="h-4 w-4" />
                      <span>Avg: {course.averageSalary}</span>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <span className="text-sm text-muted-foreground">Course Fee</span>
                      </div>
                      
                      <div className="space-y-2">
                        <Link to={`/courses/${course.id}`}>
                          <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full" size="sm">
                          Free Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/courses">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4">
                  <Users className="mr-2 h-5 w-5" />
                  View All Courses & Details
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section id="why-choose">
          <WhyChooseSection />
        </section>
        
        <section id="locations">
          <LocationsSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-secondary w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xl">G</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold">GRK Institute</h3>
                  <p className="text-sm opacity-80">Launch Your Career</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Transforming careers through industry-ready courses and expert mentorship.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {coursesPreview.map(course => (
                  <li key={course.id}>
                    <Link to={`/courses/${course.id}`} className="hover:opacity-100">
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100">About Us</a></li>
                <li><Link to="/courses" className="hover:opacity-100">All Courses</Link></li>
                <li><a href="#testimonials" className="hover:opacity-100">Success Stories</a></li>
                <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>+91 6364456661</p>
                <p>info@grktraining.com</p>
                <p>Marathahalli & BTM Layout<br />Bangalore, Karnataka</p>
                <p>Madanapalle <br />Andhra Pradesh</p>

              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 GRK Institute. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
