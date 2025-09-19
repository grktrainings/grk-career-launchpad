import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, Users, Award, ArrowRight, BookOpen, Target, Trophy, 
  CheckCircle, Code, Database, Globe, Server, Smartphone,
  Calendar, DollarSign, MapPin, Phone, TrendingUp, Search,
  Share2, Mail, BarChart3, Eye, MessageCircle, Megaphone
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";

const curriculum = [
  {
    module: "Digital Marketing Fundamentals",
    duration: "2 weeks",
    topics: ["Digital Marketing Overview", "Marketing Strategy", "Customer Journey", "Market Research", "Brand Positioning"]
  },
  {
    module: "Search Engine Optimization",
    duration: "3 weeks", 
    topics: ["SEO Fundamentals", "Keyword Research", "On-page SEO", "Off-page SEO", "Technical SEO", "Local SEO"]
  },
  {
    module: "Search Engine Marketing",
    duration: "3 weeks",
    topics: ["Google Ads", "Keyword Planning", "Ad Creation", "Campaign Management", "Landing Page Optimization", "ROI Analysis"]
  },
  {
    module: "Social Media Marketing",
    duration: "3 weeks",
    topics: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Content Strategy", "Social Media Analytics"]
  },
  {
    module: "Content & Email Marketing",
    duration: "2 weeks",
    topics: ["Content Marketing Strategy", "Blog Writing", "Email Campaigns", "Marketing Automation", "Lead Generation"]
  },
  {
    module: "Analytics & Reporting",
    duration: "2 weeks",
    topics: ["Google Analytics", "Facebook Pixel", "Conversion Tracking", "Performance Reporting", "Data-driven Marketing"]
  }
];

const projects = [
  {
    title: "Complete Digital Campaign",
    description: "End-to-end digital marketing campaign for a real business with measurable results and ROI tracking",
    technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Email Marketing"]
  },
  {
    title: "E-commerce Growth Strategy", 
    description: "Comprehensive growth strategy for online store including SEO, PPC, and social media marketing",
    technologies: ["Shopify SEO", "Google Shopping", "Instagram Ads", "Conversion Optimization", "Retargeting"]
  },
  {
    title: "Brand Awareness Campaign",
    description: "Multi-channel brand awareness campaign with creative content and influencer partnerships",
    technologies: ["Content Creation", "Influencer Marketing", "Brand Strategy", "Social Media", "PR"]
  }
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <Badge className="bg-secondary text-secondary-foreground mb-4">Growing Industry</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Digital Marketing Mastery
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Master the art of digital marketing with SEO, SEM, social media, and analytics. 
                Build successful marketing campaigns that drive real business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 btn-glow">
                  Enroll Now - ₹25,000
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
                  <div className="text-lg font-semibold">₹5.5 LPA</div>
                  <div className="text-sm opacity-80">Avg Package</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-lg font-semibold">15-20</div>
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
                  Why Choose Digital Marketing?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Digital marketing is the fastest growing career field with excellent opportunities 
                  for creativity, growth, and entrepreneurship.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Fastest growing marketing field</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">High demand across all industries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Creative and analytical career</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">Freelancing and entrepreneurship opportunities</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card text-center p-6 card-elevated">
                  <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">SEO & SEM</h3>
                  <p className="text-muted-foreground">Search Optimization</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                  <p className="text-muted-foreground">Platform Marketing</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>  
                  <p className="text-muted-foreground">Direct Communication</p>
                </Card>
                <Card className="bg-card text-center p-6 card-elevated">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                  <p className="text-muted-foreground">Data-driven Results</p>
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
                Industry-Aligned <span className="text-primary">Curriculum</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital marketing curriculum covering all major platforms and strategies.
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
                Real Campaign <span className="text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Work on live marketing campaigns and build a portfolio that gets you hired.
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
                      <h4 className="font-semibold text-card-foreground">Tools & Platforms:</h4>
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
                Digital marketing offers diverse career paths from creative to analytical roles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Digital Marketing Executive</h3>
                <p className="text-muted-foreground">₹3-6 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Search className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">SEO Specialist</h3>
                <p className="text-muted-foreground">₹4-7 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Share2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Social Media Manager</h3>
                <p className="text-muted-foreground">₹5-8 LPA</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Marketing Manager</h3>
                <p className="text-muted-foreground">₹8-15 LPA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Industry <span className="text-primary">Certifications</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get certified from leading platforms and boost your career credibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card text-center p-6 card-elevated">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Google Ads</h3>
                <p className="text-sm text-muted-foreground">Certification</p>
              </Card>
              <Card className="bg-card text-center p-6 card-elevated">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Google Analytics</h3>
                <p className="text-sm text-muted-foreground">Certification</p>
              </Card>
              <Card className="bg-card text-center p-6 card-elevated">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Facebook Blueprint</h3>
                <p className="text-sm text-muted-foreground">Certification</p>
              </Card>
              <Card className="bg-card text-center p-6 card-elevated">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">HubSpot</h3>
                <p className="text-sm text-muted-foreground">Certification</p>
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
                      <span className="font-medium">Batch Size:</span> 15-20 Students (Interactive Learning)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">Fee:</span> ₹25,000 (EMI Available)
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
                      <span>Live campaign management experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Google Ads & Analytics certification prep</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Facebook Blueprint certification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Personal brand building guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Portfolio development support</span>
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
              Ready to Master Digital Marketing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Start your journey in the exciting world of digital marketing and creative campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 btn-glow">
                Enroll Now - ₹25,000
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

export default DigitalMarketing;