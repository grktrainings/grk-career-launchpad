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
    module: "Python Fundamentals",
    duration: "3 weeks",
    topics: ["Python Syntax & Data Types", "Control Structures", "Functions & Modules", "File Handling", "Exception Handling"]
  },
  {
    module: "Web Development Basics",
    duration: "2 weeks", 
    topics: ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "Bootstrap", "Git & Version Control"]
  },
  {
    module: "Backend Development",
    duration: "6 weeks",
    topics: ["Django Framework", "Django REST API", "Flask Framework", "Database Design", "Authentication & Authorization"]
  },
  {
    module: "Frontend Development",
    duration: "4 weeks",
    topics: ["React.js Fundamentals", "State Management", "React Router", "API Integration", "Component Libraries"]
  },
  {
    module: "Database Management",
    duration: "3 weeks",
    topics: ["PostgreSQL", "MySQL", "MongoDB", "Database Optimization", "ORM Implementation"]
  },
  {
    module: "Deployment & DevOps",
    duration: "2 weeks",
    topics: ["AWS Deployment", "Docker Containers", "CI/CD Pipeline", "Server Management", "Domain & SSL"]
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with payment integration, inventory management, and admin panel",
    technologies: ["Django", "React", "PostgreSQL", "Stripe API", "AWS"]
  },
  {
    title: "Social Media Application", 
    description: "Instagram-like platform with user profiles, posts, comments, likes, and real-time chat",
    technologies: ["Flask", "React", "MongoDB", "WebSocket", "Cloudinary"]
  },
  {
    title: "Task Management System",
    description: "Project management tool with team collaboration, file sharing, and progress tracking",
    technologies: ["Django REST", "React", "MySQL", "JWT", "Docker"]
  }
];

const PythonFullStack = () => {
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
              <Badge className="bg-secondary text-secondary-foreground mb-4">Most Popular Course</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Python Full Stack Development
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Master Python backend development with Django/Flask and modern React frontend. 
                Build complete web applications and launch your tech career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4">
                  Enroll Now - ₹35,000
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
                  <div className="text-lg font-semibold">₹6.5 LPA</div>
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
                  Why Choose Python Full Stack?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Python is the most in-demand programming language with highest salary packages. 
                  Our comprehensive course covers both backend and frontend development.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Most versatile programming language</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">High demand in AI, ML, and Web Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Excellent career growth opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Beginner-friendly with strong community</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card text-center p-6">
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <p className="text-muted-foreground">Django, Flask, REST APIs</p>
                </Card>
                <Card className="bg-card text-center p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-muted-foreground">React.js, JavaScript ES6+</p>
                </Card>
                <Card className="bg-card text-center p-6">
                  <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Database Management</h3>  
                  <p className="text-muted-foreground">PostgreSQL, MongoDB</p>
                </Card>
                <Card className="bg-card text-center p-6">
                  <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cloud Deployment</h3>
                  <p className="text-muted-foreground">AWS, Docker, CI/CD</p>
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
                Comprehensive <span className="text-primary">Curriculum</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Structured learning path from Python basics to full-stack deployment in 6 months.
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
                Real-world <span className="text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build impressive portfolio projects that showcase your skills to potential employers.
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
                Python Full Stack developers are in high demand across all industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Full Stack Developer</h3>
                <p className="text-muted-foreground">₹5-8 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Backend Developer</h3>
                <p className="text-muted-foreground">₹6-9 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Python Developer</h3>
                <p className="text-muted-foreground">₹7-10 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Software Engineer</h3>
                <p className="text-muted-foreground">₹8-12 LPA</p>
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
                      <span className="font-medium">Fee:</span> ₹35,000 (EMI Available)
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
                      <span>Industry-relevant curriculum updated quarterly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>3 major projects for your portfolio</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>One-on-one mentorship sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Interview preparation and mock tests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Resume building and LinkedIn optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>100% placement assistance guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Industry certification upon completion</span>
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
              Ready to Start Your Python Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join 500+ successful graduates who transformed their careers with our Python Full Stack course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8">
                Enroll Now - ₹35,000
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
                <li><Link to="/courses/java-fullstack" className="hover:opacity-100">Java Full Stack</Link></li>
                <li><Link to="/courses/digital-marketing" className="hover:opacity-100">Digital Marketing</Link></li>
                <li><Link to="/courses/devops-aws" className="hover:opacity-100">DevOps with AWS</Link></li>
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

export default PythonFullStack;