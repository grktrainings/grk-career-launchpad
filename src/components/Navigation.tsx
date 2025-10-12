import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import grkLogo from "@/assets/grk-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Why GRK", href: "#why-choose" },
    { name: "Locations", href: "#locations" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (isHomePage) {
      // On home page, smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to home first then scroll
      window.location.href = '/' + href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src={grkLogo} 
                alt="GRK Institute - Professional Training in Python, Java, DevOps, AWS & Digital Marketing" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="ml-2 hidden md:block">
              <h1 className="text-lg font-bold text-foreground">GRK Institute</h1>
              <p className="text-xs text-muted-foreground">Launch Your Career</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              All Courses
            </Link>
          </div>

          {/* Contact Info & CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 6364456661</span>
            </div>
            <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <div className="flex items-center px-3 py-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 6364456661</span>
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@grktraining.com</span>
                </div>
                <div className="px-3 pt-2">
                  <Button className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
