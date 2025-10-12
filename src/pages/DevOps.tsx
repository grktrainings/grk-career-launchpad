import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, Users, Award, ArrowRight, BookOpen, Target, Trophy, 
  CheckCircle, Code, Database, Globe, Server, Settings,
  Calendar, DollarSign, MapPin, Phone, Container, Cloud,
  GitBranch, Shield, Monitor, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CourseNavigation from "@/components/CourseNavigation";
import ContactSection from "@/components/ContactSection";

const curriculum = [
  {
    module: "DevOps Fundamentals",
    duration: "2 weeks",
    topics: ["DevOps Culture & Practices", "CI/CD Concepts", "Version Control with Git", "Linux Administration", "Shell Scripting"]
  },
  {
    module: "Containerization",
    duration: "3 weeks", 
    topics: ["Docker Fundamentals", "Container Orchestration", "Kubernetes Basics", "Docker Compose", "Container Security"]
  },
  {
    module: "CI/CD Pipeline",
    duration: "3 weeks",
    topics: ["Jenkins Setup & Configuration", "Pipeline as Code", "GitLab CI/CD", "Automated Testing", "Deployment Strategies"]
  },
  {
    module: "Infrastructure as Code",
    duration: "2 weeks",
    topics: ["Terraform Basics", "AWS CloudFormation", "Ansible Configuration", "Infrastructure Automation", "State Management"]
  },
  {
    module: "Monitoring & Logging",
    duration: "2 weeks",
    topics: ["Prometheus & Grafana", "ELK Stack", "Application Monitoring", "Log Management", "Alerting Systems"]
  },
  {
    module: "Cloud & Security",
    duration: "3 weeks",
    topics: ["AWS DevOps Services", "Security Best Practices", "Compliance & Governance", "Disaster Recovery", "Cost Optimization"]
  }
];

const projects = [
  {
    title: "Automated Deployment Pipeline",
    description: "Complete CI/CD pipeline with automated testing, security scanning, and multi-environment deployment",
    technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Terraform"]
  },
  {
    title: "Microservices Infrastructure", 
    description: "Scalable microservices platform with service mesh, monitoring, and automated scaling",
    technologies: ["Kubernetes", "Istio", "Prometheus", "Grafana", "Helm"]
  },
  {
    title: "Infrastructure Automation",
    description: "Complete infrastructure provisioning and management using Infrastructure as Code principles",
    technologies: ["Terraform", "Ansible", "AWS", "CloudFormation", "GitOps"]
  }
];

const DevOps = () => {
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
              <Badge className="bg-secondary text-secondary-foreground mb-4">High Demand</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                DevOps Engineering
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Master DevOps practices with CI/CD, containerization, and cloud automation. 
                Bridge the gap between development and operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 btn-glow">
                  Enroll Now - ₹32,000
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
                  Book Free Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-lg font-semibold">4 Months</div>
                  <div className="text-sm opacity-80">Duration</div>
                </div>
                <div className="text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-lg font-semibold">₹8.5 LPA</div>
                  <div className="text-sm opacity-80">Avg Package</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-lg font-semibold">10-12</div>
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
                  Why Choose DevOps?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  DevOps is revolutionizing software delivery with highest salary packages 
                  and excellent career growth in modern tech companies.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Fastest growing tech career path</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">High demand across all industries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Bridge development and operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Remote work opportunities</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card text-center p-6 card-elevated">
                  <Container className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Containerization</h3>
                  <p className="text-muted-foreground">Docker, Kubernetes</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <GitBranch className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">CI/CD Pipelines</h3>
                  <p className="text-muted-foreground">Jenkins, GitLab CI</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cloud Platforms</h3>  
                  <p className="text-muted-foreground">AWS, Azure, GCP</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
                  <p className="text-muted-foreground">Prometheus, Grafana</p>
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
                Industry-Standard <span className="text-primary">Curriculum</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn DevOps tools and practices used by top tech companies worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculum.map((module, index) => (
                <Card key={index} className="bg-card hover:shadow-glow transition-all duration-300 card-elevated">
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
                Industry <span className="text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build production-ready DevOps solutions that demonstrate your expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-card hover:shadow-glow transition-all duration-300 card-elevated">
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
                DevOps engineers are among the highest paid professionals in tech industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Settings className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">DevOps Engineer</h3>
                <p className="text-muted-foreground">₹7-12 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Cloud className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Cloud Engineer</h3>
                <p className="text-muted-foreground">₹8-14 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Site Reliability Engineer</h3>
                <p className="text-muted-foreground">₹10-16 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Platform Engineer</h3>
                <p className="text-muted-foreground">₹12-20 LPA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-card card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">Duration:</span> 4 Months (Weekdays & Weekends)
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
                      <span className="font-medium">Batch Size:</span> 10-12 Students (Personal Attention)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">Fee:</span> ₹32,000 (EMI Available)
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

              <Card className="bg-card card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">What You'll Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Hands-on experience with industry tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Real-world CI/CD pipeline projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>AWS Cloud practitioner certification prep</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>24/7 lab access for practice</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Industry mentor guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>100% placement assistance guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Launch Your DevOps Career?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful DevOps engineers who started their journey at GRK Institute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 btn-glow">
                Enroll Now - ₹32,000
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 98765 43210
              </Button>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
};

export default DevOps;