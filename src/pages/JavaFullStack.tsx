import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, Users, Award, ArrowRight, BookOpen, Target, Trophy, 
  CheckCircle, Code, Database, Globe, Server, Smartphone,
  Calendar, DollarSign, MapPin, Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CourseNavigation from "@/components/CourseNavigation";
import ContactSection from "@/components/ContactSection";

const curriculum = [
  {
    module: "Java Fundamentals",
    duration: "3 weeks",
    topics: ["Java Syntax & OOP", "Collections Framework", "Exception Handling", "Multithreading", "File I/O Operations"]
  },
  {
    module: "Advanced Java",
    duration: "3 weeks", 
    topics: ["JDBC & Database Connectivity", "Servlets & JSP", "Java Streams", "Lambda Expressions", "Design Patterns"]
  },
  {
    module: "Spring Framework",
    duration: "4 weeks",
    topics: ["Spring Core & IoC", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA"]
  },
  {
    module: "Microservices",
    duration: "3 weeks",
    topics: ["Microservices Architecture", "REST APIs", "Service Discovery", "API Gateway", "Circuit Breaker Pattern"]
  },
  {
    module: "Frontend Development",
    duration: "4 weeks",
    topics: ["Angular Fundamentals", "TypeScript", "Angular CLI", "RxJS & Observables", "Angular Material"]
  },
  {
    module: "DevOps & Deployment",
    duration: "3 weeks",
    topics: ["Docker Containerization", "Kubernetes Basics", "CI/CD Pipeline", "AWS Deployment", "Monitoring & Logging"]
  }
];

const projects = [
  {
    title: "Banking Management System",
    description: "Complete banking application with account management, transactions, and administrative features",
    technologies: ["Spring Boot", "Angular", "MySQL", "Spring Security", "JWT"]
  },
  {
    title: "Inventory Management Platform", 
    description: "Enterprise-level inventory tracking with supplier management and automated reporting",
    technologies: ["Microservices", "Angular", "PostgreSQL", "Docker", "Kubernetes"]
  },
  {
    title: "Payment Gateway Integration",
    description: "Secure payment processing system with multiple payment methods and fraud detection",
    technologies: ["Spring Boot", "Angular", "MySQL", "Razorpay API", "Redis"]
  }
];

const JavaFullStack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CourseNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <Badge className="bg-secondary text-secondary-foreground mb-4">Enterprise Ready</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Java Full Stack Development
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Master enterprise Java development with Spring Boot microservices and modern Angular frontend. 
                Build scalable applications for large organizations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4">
                  Enroll Now - ₹38,000
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
                  Book Free Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-lg font-semibold">6 Months</div>
                  <div className="text-sm opacity-80">Duration</div>
                </div>
                <div className="text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-lg font-semibold">₹7.2 LPA</div>
                  <div className="text-sm opacity-80">Avg Package</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-lg font-semibold">12-15</div>
                  <div className="text-sm opacity-80">Batch Size</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-lg font-semibold">100%</div>
                  <div className="text-sm opacity-80">Job Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Why Choose Java Full Stack?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Java remains the backbone of enterprise applications with highest job security 
                  and excellent growth opportunities in large corporations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Most demanded skill in enterprise companies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Platform independent and highly scalable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Strong job security and career growth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Excellent salary packages in MNCs</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card text-center p-6">
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <p className="text-muted-foreground">Spring Boot, Microservices</p>
                </Card>
                <Card className="bg-card text-center p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-muted-foreground">Angular, TypeScript</p>
                </Card>
                <Card className="bg-card text-center p-6">
                  <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Database Management</h3>  
                  <p className="text-muted-foreground">MySQL, PostgreSQL</p>
                </Card>
                <Card className="bg-card text-center p-6">
                  <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
                  <p className="text-muted-foreground">Docker, Kubernetes, AWS</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Enterprise-Grade <span className="text-primary">Curriculum</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive Java Full Stack curriculum covering enterprise development practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculum.map((module, index) => (
                <Card key={index} className="bg-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Module {index + 1}</Badge>
                      <span className="text-sm text-muted-foreground">{module.duration}</span>
                    </div>
                    <CardTitle className="text-xl text-card-foreground">
                      {module.module}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Enterprise <span className="text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build enterprise-grade applications that demonstrate your skills to top companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-card-foreground">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-card-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20 bg-gradient-accent border-y">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-card-foreground mb-6">
                Career <span className="text-primary">Opportunities</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Java developers are highly sought after in enterprise companies and startups alike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Java Developer</h3>
                <p className="text-muted-foreground">₹6-9 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Full Stack Developer</h3>
                <p className="text-muted-foreground">₹7-10 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Backend Developer</h3>
                <p className="text-muted-foreground">₹8-11 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Software Architect</h3>
                <p className="text-muted-foreground">₹12-18 LPA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">Duration:</span> 6 Months (Weekdays & Weekends)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">Timing:</span> Flexible (Morning, Afternoon, Evening)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">Batch Size:</span> 12-15 Students (Personal Attention)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">Fee:</span> ₹38,000 (EMI Available)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">Location:</span> Marathahalli & BTM Layout
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">What You'll Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Enterprise-level project development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Microservices architecture training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Industry mentor from top MNCs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Technical interview preparation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>System design and architecture training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>100% placement assistance guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Oracle Java certification guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Lifetime access to course materials</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Master Enterprise Java?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join the ranks of enterprise Java developers with our comprehensive full stack program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8">
                Enroll Now - ₹38,000
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 98765 43210
              </Button>
            </div>
          </div>
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
              <h4 className="font-semibold mb-4">Other Courses</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/python-fullstack-development-training-coaching-bangalore" className="hover:opacity-100">Python Full Stack</Link></li>
                <li><Link to="/digital-marketing-training-coaching-bangalore" className="hover:opacity-100">Digital Marketing</Link></li>
                <li><Link to="/devops-training-coaching-bangalore" className="hover:opacity-100">DevOps</Link></li>
                <li><Link to="/aws-cloud-training-coaching-bangalore" className="hover:opacity-100">AWS Cloud</Link></li>
                <li><Link to="/courses" className="hover:opacity-100">View All Courses</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/" className="hover:opacity-100">Home</Link></li>
                <li><a href="/#testimonials" className="hover:opacity-100">Success Stories</a></li>
                <li><a href="/#locations" className="hover:opacity-100">Locations</a></li>
                <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
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

export default JavaFullStack;