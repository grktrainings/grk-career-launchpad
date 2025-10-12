import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, Users, Award, ArrowRight, BookOpen, Target, Trophy, 
  CheckCircle, Code, Database, Globe, Server, Cloud,
  Calendar, DollarSign, MapPin, Phone, Shield, Zap,
  Settings, Container, Network, Lock
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CourseNavigation from "@/components/CourseNavigation";
import ContactSection from "@/components/ContactSection";

const curriculum = [
  {
    module: "AWS Fundamentals",
    duration: "2 weeks",
    topics: ["AWS Global Infrastructure", "IAM & Security", "AWS Management Console", "AWS CLI & SDKs", "Billing & Cost Management"]
  },
  {
    module: "Compute Services",
    duration: "3 weeks", 
    topics: ["EC2 Instances", "Auto Scaling Groups", "Elastic Load Balancer", "Lambda Functions", "ECS & EKS"]
  },
  {
    module: "Storage & Database",
    duration: "3 weeks",
    topics: ["S3 & Glacier", "EBS & EFS", "RDS & DynamoDB", "ElastiCache", "Data Migration Services"]
  },
  {
    module: "Networking & Security",
    duration: "2 weeks",
    topics: ["VPC & Subnets", "Security Groups", "NACLs", "CloudFront CDN", "Route 53 DNS"]
  },
  {
    module: "DevOps & Monitoring",
    duration: "2 weeks",
    topics: ["CloudFormation", "CodePipeline", "CloudWatch", "AWS Config", "Systems Manager"]
  },
  {
    module: "Advanced Services",
    duration: "3 weeks",
    topics: ["API Gateway", "SNS & SQS", "Kinesis", "Machine Learning Services", "Serverless Architecture"]
  }
];

const projects = [
  {
    title: "Multi-Tier Web Application",
    description: "Scalable web application with load balancing, auto-scaling, and database replication across multiple AZs",
    technologies: ["EC2", "RDS", "S3", "CloudFront", "Route 53"]
  },
  {
    title: "Serverless Data Pipeline", 
    description: "Real-time data processing pipeline using serverless services for analytics and reporting",
    technologies: ["Lambda", "Kinesis", "DynamoDB", "API Gateway", "CloudWatch"]
  },
  {
    title: "Hybrid Cloud Infrastructure",
    description: "Secure hybrid cloud setup with on-premises integration and disaster recovery",
    technologies: ["VPC", "Direct Connect", "S3", "Backup", "CloudFormation"]
  }
];

const AWS = () => {
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
              <Badge className="bg-secondary text-secondary-foreground mb-4">Cloud Leader</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                AWS Cloud Computing
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Master Amazon Web Services and become a certified cloud professional. 
                Build scalable, secure cloud solutions for enterprises.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 btn-glow">
                  Enroll Now - ₹28,000
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
                  <div className="text-lg font-semibold">₹9.2 LPA</div>
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
                  Why Choose AWS?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  AWS is the world's leading cloud platform with highest market share 
                  and best career opportunities in cloud computing.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">World's #1 cloud platform (32% market share)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">200+ services for any business need</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Highest paying cloud certifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Global opportunities & remote work</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card text-center p-6 card-elevated">
                  <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Compute Services</h3>
                  <p className="text-muted-foreground">EC2, Lambda, ECS</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Database Services</h3>
                  <p className="text-muted-foreground">RDS, DynamoDB</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <Network className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Networking</h3>  
                  <p className="text-muted-foreground">VPC, CloudFront</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security & IAM</h3>
                  <p className="text-muted-foreground">IAM, KMS, WAF</p>
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
                Certification-Ready <span className="text-primary">Curriculum</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete AWS curriculum aligned with Solutions Architect certification requirements.
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
                Cloud <span className="text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build enterprise-grade cloud solutions on AWS platform.
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
                      <h4 className="font-semibold text-card-foreground">AWS Services Used:</h4>
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
                AWS certified professionals are among the highest paid in IT industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Cloud className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Cloud Architect</h3>
                <p className="text-muted-foreground">₹10-18 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Settings className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Cloud Engineer</h3>
                <p className="text-muted-foreground">₹8-14 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Cloud Security Engineer</h3>
                <p className="text-muted-foreground">₹12-20 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Solutions Architect</h3>
                <p className="text-muted-foreground">₹15-25 LPA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                AWS <span className="text-primary">Certifications</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get certified with our comprehensive exam preparation and practice tests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card text-center p-8 card-elevated">
                <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Cloud Practitioner</h3>
                <p className="text-muted-foreground mb-4">Foundation level certification for cloud beginners</p>
                <Badge className="bg-success text-success-foreground">Included</Badge>
              </Card>
              <Card className="bg-card text-center p-8 card-elevated border-2 border-primary">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Solutions Architect</h3>
                <p className="text-muted-foreground mb-4">Associate level - Most popular AWS certification</p>
                <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
              </Card>
              <Card className="bg-card text-center p-8 card-elevated">
                <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Developer Associate</h3>
                <p className="text-muted-foreground mb-4">For developers building applications on AWS</p>
                <Badge className="bg-success text-success-foreground">Optional</Badge>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-muted/30">
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
                      <span className="font-medium">Fee:</span> ₹28,000 (EMI Available)
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
                      <span>Free AWS account with $100 credits</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Hands-on labs and real projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Certification exam vouchers included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>24/7 AWS lab environment access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Mock exams and practice tests</span>
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
              Ready to Become AWS Certified?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join the cloud revolution and build a future-proof career with AWS certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 btn-glow">
                Enroll Now - ₹28,000
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

export default AWS;