import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import LocationNavigation from "@/components/LocationNavigation";
import CourseNavigation from "@/components/CourseNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const courses = [
  {
    id: "python-fullstack",
    title: "Python Full Stack Development",
    duration: "6 Months",
    description: "Master Python, Django, React and deployment",
    price: "₹35,000",
    popular: true,
    path: "/courses/python-fullstack"
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Development",
    duration: "6 Months",
    description: "Complete Java, Spring Boot, and React training",
    price: "₹35,000",
    popular: true,
    path: "/courses/java-fullstack"
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    duration: "4 Months",
    description: "CI/CD, Docker, Kubernetes, Jenkins mastery",
    price: "₹30,000",
    popular: false,
    path: "/courses/devops"
  },
  {
    id: "aws",
    title: "AWS Cloud Computing",
    duration: "3 Months",
    description: "AWS services, architecture, and certification prep",
    price: "₹30,000",
    popular: false,
    path: "/courses/aws"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    duration: "3 Months",
    description: "SEO, Social Media, Google Ads, Analytics",
    price: "₹30,000",
    popular: false,
    path: "/courses/digital-marketing"
  }
];

const MadanapalleCourses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LocationNavigation />
      <CourseNavigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Campus Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Madanapalle Campus</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Available <span className="text-primary">Courses</span> at Madanapalle
            </h1>
            <div className="bg-card rounded-lg p-6 max-w-3xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Madanapalle, Andhra Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+916364456661" className="text-primary hover:underline">+91 6364456661</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@grktraining.com" className="text-primary hover:underline">info@grktraining.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-glow transition-all duration-300 bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      {course.title}
                    </CardTitle>
                    {course.popular && (
                      <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Link to={course.path}>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Campus Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">Modern Campus</div>
              <p className="text-muted-foreground">Contemporary facilities</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">Expert Faculty</div>
              <p className="text-muted-foreground">Industry professionals</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">Practice Labs</div>
              <p className="text-muted-foreground">Hands-on training</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">Placement Support</div>
              <p className="text-muted-foreground">Career guidance</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MadanapalleCourses;
