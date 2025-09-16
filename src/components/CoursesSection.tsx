import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Python Full Stack",
    duration: "6 Months",
    description: "Master Python, Django, Flask, React, databases and deployment",
    skills: ["Python", "Django", "Flask", "React", "PostgreSQL", "AWS"],
    projects: "E-commerce Platform, Social Media App, REST APIs",
    placement: "100% Placement Assistance",
    price: "₹35,000",
    popular: true
  },
  {
    title: "Java Full Stack",
    duration: "6 Months", 
    description: "Learn Java, Spring Boot, Microservices, Angular and cloud deployment",
    skills: ["Java", "Spring Boot", "Angular", "MySQL", "Microservices", "Docker"],
    projects: "Banking Application, Inventory Management, Payment Gateway",
    placement: "100% Placement Assistance",
    price: "₹38,000",
    popular: false
  },
  {
    title: "Digital Marketing",
    duration: "4 Months",
    description: "SEO, SEM, Social Media Marketing, Content Strategy and Analytics",
    skills: ["SEO", "Google Ads", "Facebook Ads", "Analytics", "Content Marketing"],
    projects: "Campaign Management, Website Optimization, Brand Strategy",
    placement: "100% Placement Assistance", 
    price: "₹25,000",
    popular: false
  },
  {
    title: "DevOps with AWS",
    duration: "5 Months",
    description: "CI/CD, Docker, Kubernetes, AWS services and infrastructure automation",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Git"],
    projects: "Infrastructure Automation, CI/CD Pipeline, Cloud Migration",
    placement: "100% Placement Assistance",
    price: "₹40,000",
    popular: false
  }
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry-Ready <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive courses designed by industry experts with hands-on projects and guaranteed placement support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="relative group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card">
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Real-time Projects:</h4>
                  <p className="text-sm text-muted-foreground">{course.projects}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-success">
                  <Award className="h-4 w-4" />
                  <span>{course.placement}</span>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <span className="text-sm text-muted-foreground">One-time Fee</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4">
            <Users className="mr-2 h-5 w-5" />
            Book Free Demo for All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;