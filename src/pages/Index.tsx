import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection"; 
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="courses">
          <CoursesSection />
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
                <li>Python Full Stack</li>
                <li>Java Full Stack</li>
                <li>Digital Marketing</li>
                <li>DevOps with AWS</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100">About Us</a></li>
                <li><a href="#placements" className="hover:opacity-100">Placements</a></li>
                <li><a href="#gallery" className="hover:opacity-100">Gallery</a></li>
                <li><a href="#blog" className="hover:opacity-100">Blog</a></li>
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
            <p>&copy; 2024 GRK Institute. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
