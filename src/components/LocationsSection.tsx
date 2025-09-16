import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const locations = [
  {
    name: "Marathahalli Campus",
    address: "2nd Floor, Above SBI Bank, Marathahalli Bridge, Bangalore - 560037",
    phone: "+91 9876543210",
    email: "marathahalli@grkinstitute.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    features: ["Modern Lab", "Library", "Cafeteria", "Parking"],
    landmark: "Near Marathahalli Bridge, Opposite AECS Layout"
  },
  {
    name: "BTM Layout Campus", 
    address: "3rd Floor, Silk Board Junction, BTM Layout 2nd Stage, Bangalore - 560076",
    phone: "+91 9876543211",
    email: "btm@grkinstitute.com", 
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    features: ["Smart Classrooms", "Project Lab", "Study Area", "Metro Access"],
    landmark: "Near Silk Board Metro Station, HSR Layout Side"
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

                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Campus Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Map Placeholder */}
        <div className="bg-card rounded-2xl p-8 shadow-smooth">
          <h3 className="text-2xl font-bold text-center mb-6 text-card-foreground">
            Find Us on the Map
          </h3>
          <div className="bg-gradient-accent rounded-xl h-96 flex items-center justify-center border-2 border-dashed border-primary/20">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold text-card-foreground mb-2">Interactive Map</p>
              <p className="text-muted-foreground">
                Campus locations will be displayed here with detailed directions
              </p>
              <Button className="mt-4 bg-primary hover:bg-primary-dark text-primary-foreground">
                View Full Map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;