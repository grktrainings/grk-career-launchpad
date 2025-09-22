import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin, Send, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in the courses at GRK Institute. Can you provide more information?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tech journey? Contact us today for course information, free demo sessions, or any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Call Us</p>
                    <a href="tel:+919876543210" className="text-primary hover:text-primary-dark">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Email Us</p>
                    <a href="mailto:info@grkinstitute.com" className="text-primary hover:text-primary-dark">
                      info@grkinstitute.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-card-foreground">Visit Us</p>
                    <p className="text-sm text-muted-foreground">
                      Marathahalli & BTM Layout<br />
                      Bangalore, Karnataka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-success hover:bg-success/90 text-success-foreground"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>

            {/* Office Hours */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-card-foreground font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-card-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-card-foreground font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Course of Interest
                      </label>
                      <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="python">Python Full Stack</SelectItem>
                          <SelectItem value="java">Java Full Stack</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="devops">DevOps with AWS</SelectItem>
                          <SelectItem value="all">All Courses</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your background and goals..."
                      rows={4}
                      className="bg-background"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful graduates who landed their dream jobs with GRK Institute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8">
              Book Free Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8">
              Call Now: +91 6364456661
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
