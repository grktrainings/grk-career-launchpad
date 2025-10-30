import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, ArrowRight, BookOpen, Target, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const courses = [
  {
    id: "python-fullstack",
    title: "Python Full Stack",
    duration: "6 Months",
    description: "Master Python, Django, Flask, React, databases and deployment with hands-on projects",
    skills: ["Python", "Django", "Flask", "React", "PostgreSQL", "AWS"],
    projects: "E-commerce Platform, Social Media App, REST APIs",
    placement: "100% Placement Assistance",
    price: "₹35,000",
    popular: true,
    averageSalary: "₹6.5 LPA",
    demandLevel: "Very High",
    jobRoles: ["Full Stack Developer", "Python Developer", "Backend Developer", "Software Engineer"]
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack",
    duration: "6 Months", 
    description: "Learn Java, Spring Boot, Microservices, Angular and cloud deployment",
    skills: ["Java", "Spring Boot", "Angular", "MySQL", "Microservices", "Docker"],
    projects: "Banking Application, Inventory Management, Payment Gateway",
    placement: "100% Placement Assistance",
    price: "₹35,000",
    popular: false,
    averageSalary: "₹7.2 LPA",
    demandLevel: "Very High", 
    jobRoles: ["Java Developer", "Full Stack Developer", "Backend Developer", "Software Architect"]
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    duration: "4 Months",
    description: "CI/CD, Docker, Kubernetes, Jenkins and infrastructure automation mastery",
    skills: ["Docker", "Kubernetes", "Jenkins", "Git", "Terraform", "Ansible"],
    projects: "Infrastructure Automation, CI/CD Pipeline, Container Management",
    placement: "100% Placement Assistance", 
    price: "₹30,000",
    popular: false,
    averageSalary: "₹8.5 LPA",
    demandLevel: "Extremely High",
    jobRoles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer", "Platform Engineer"]
  },
  {
    id: "aws",
    title: "AWS Cloud Computing",
    duration: "4 Months",
    description: "Amazon Web Services certification with hands-on cloud architecture and deployment",
    skills: ["AWS", "EC2", "S3", "RDS", "Lambda", "CloudFormation"],
    projects: "Multi-tier Web App, Serverless Pipeline, Hybrid Cloud Setup",
    placement: "100% Placement Assistance",
    price: "₹30,000",
    popular: false,
    averageSalary: "₹9.2 LPA",
    demandLevel: "Extremely High",
    jobRoles: ["Cloud Architect", "Cloud Engineer", "Solutions Architect", "Cloud Security Engineer"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Mastery",
    duration: "4 Months",
    description: "SEO, SEM, Social Media Marketing, Content Strategy and Analytics mastery",
    skills: ["SEO", "Google Ads", "Facebook Ads", "Analytics", "Content Marketing", "Email Marketing"],
    projects: "Complete Digital Campaign, E-commerce Growth, Brand Awareness",
    placement: "100% Placement Assistance", 
    price: "₹30,000",
    popular: false,
    averageSalary: "₹5.5 LPA",
    demandLevel: "High",
    jobRoles: ["Digital Marketing Executive", "SEO Specialist", "Social Media Manager", "Marketing Manager"]
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Choose Your <span className="text-secondary">Career Path</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Industry-ready courses designed by experts with 100% placement support and real-time project experience.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5</div>
                  <div className="text-sm opacity-80">Expert Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-sm opacity-80">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">₹7.5L</div>
                  <div className="text-sm opacity-80">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm opacity-80">Placement Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Courses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive programs with hands-on training, industry projects, and guaranteed job placement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card key={course.id} className="relative group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card card-elevated">
                  {course.popular && (
                    <Badge className="absolute -top-3 left-6 bg-secondary text-secondary-foreground font-semibold px-3 py-1 shadow-glow">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">
                          {course.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-success border-success">
                        {course.demandLevel}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-success font-medium">
                        <Trophy className="h-4 w-4" />
                        <span>{course.averageSalary}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">Key Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Career Opportunities:</h4>
                      <div className="text-sm text-muted-foreground">
                        {course.jobRoles.slice(0, 2).join(", ")} and more
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-primary">{course.price}</span>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Course Fee</div>
                          <div className="text-sm font-medium text-success">EMI Available</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Link to={`/courses/${course.id}`}>
                          <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground btn-glow">
                            View Full Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                            Free Demo
                          </Button>
                          <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                            Download Syllabus
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Our Courses */}
            <div className="mt-20 bg-gradient-accent rounded-2xl p-8 md:p-12 border">
              <h3 className="text-3xl font-bold text-center mb-8 text-card-foreground">
                Why Choose GRK Courses?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-card-foreground mb-2">Industry-Relevant Curriculum</h4>
                  <p className="text-muted-foreground">Updated syllabus based on current market demands</p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-card-foreground mb-2">Hands-on Projects</h4>
                  <p className="text-muted-foreground">Build real-world applications and portfolios</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-card-foreground mb-2">Expert Mentorship</h4>
                  <p className="text-muted-foreground">Learn from industry professionals with 10+ years experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                {courses.map(course => (
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
                <li><Link to="/" className="hover:opacity-100">Home</Link></li>
                <li><Link to="/courses" className="hover:opacity-100">All Courses</Link></li>
                <li><a href="/#testimonials" className="hover:opacity-100">Success Stories</a></li>
                <li><a href="/#contact" className="hover:opacity-100">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>+91 98765 43210</p>
                <p>info@grkinstitute.com</p>
                <p>Marathahalli & BTM Layout<br />Bangalore, Karnataka</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 GRK Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
