import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Marathahalli Campus",
    address: "Flat #3, Ground Floor, V R K H building, Vivekananda Layout, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037",
    phone: "+91 6364456661",
    email: "info@grktraining.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    features: ["Modern Lab", "Library", "Cafeteria", "Parking"],
    landmark: "Vivekananda Layout, Chandra Layout",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0267895384877!2d77.69731647507632!3d12.963898987347654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1306d0d5f0e1%3A0x2e8e4e4e4e4e4e4e!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1234567890",
    coursesPath: "/courses/marathahalli"
  },
  {
    name: "BTM Layout Campus", 
    address: "2nd Floor, 12, 20th Main Rd, Old Madiwala, Maruti Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560029",
    phone: "+91 6364456661",
    email: "info@grktraining.com", 
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    features: ["Smart Classrooms", "Project Lab", "Study Area", "Metro Access"],
    landmark: "Old Madiwala, Maruti Nagar, 1st Stage",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9876543210987!2d77.60987654321098!3d12.916789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c0123456789%3A0x123456789abcdef0!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560029!5e0!3m2!1sen!2sin!4v1234567890",
    coursesPath: "/courses/btm"
  },
  {
    name: "Madanapalle Campus",
    address: "Madanapalle, Andhra Pradesh",
    phone: "+91 6364456661",
    email: "info@grktraining.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    features: ["Modern Campus", "Expert Faculty", "Practice Labs", "Placement Support"],
    landmark: "Madanapalle Town",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.234567890123!2d78.50123456789012!3d13.550987654321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb268123456789a%3A0x1234567890abcdef!2sMadanapalle%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890",
    coursesPath: "/courses/madanapalle"
  }
];

const LocationsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Locations</span> in Bangalore
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conveniently located campuses with state-of-the-art facilities and easy accessibility via public transport.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Navigation className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-card-foreground font-medium">{location.address}</p>
                      <p className="text-sm text-muted-foreground">{location.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href={`tel:${location.phone}`} className="text-primary hover:text-primary-dark transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href={`mailto:${location.email}`} className="text-primary hover:text-primary-dark transition-colors">
                      {location.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-card-foreground">{location.timings}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Campus Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="mb-4 rounded-lg overflow-hidden h-64 border-2 border-primary/20">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${location.name} Location`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Link to={location.coursesPath}>
                      <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        View Courses at This Campus
                      </Button>
                    </Link>
                    <Button 
                      className="w-full"
                      variant="outline"
                      onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`, '_blank')}
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Combined Map View */}
        <div className="bg-card rounded-2xl p-8 shadow-smooth">
          <h3 className="text-2xl font-bold text-center mb-6 text-card-foreground">
            Find Both Campuses on the Map
          </h3>
          <div className="rounded-xl overflow-hidden h-96 border-2 border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124543.12345678901!2d77.61234567890123!3d12.940123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzI0LjQiTiA3N8KwMzYnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Both GRK Institute Campuses"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;