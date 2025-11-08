import { Link, useLocation } from "react-router-dom";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Marathahalli Campus", path: "/courses-training-coaching-marathahalli-bangalore" },
  { name: "BTM Layout Campus", path: "/courses-training-coaching-btm-bangalore" },
  { name: "Madanapalle Campus", path: "/courses-training-coaching-madanapalle" },
];

const LocationNavigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto py-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
          <div className="flex gap-2 flex-wrap">
            {locations.map((loc) => (
              <Link
                key={loc.path}
                to={loc.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  location.pathname === loc.path
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LocationNavigation;
