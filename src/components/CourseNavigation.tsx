import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

const courses = [
  { id: "python-fullstack", name: "Python Full Stack", path: "/python-fullstack-development-training-coaching-bangalore" },
  { id: "java-fullstack", name: "Java Full Stack", path: "/java-fullstack-development-training-coaching-bangalore" },
  { id: "devops", name: "DevOps", path: "/devops-training-coaching-bangalore" },
  { id: "aws", name: "AWS", path: "/aws-cloud-training-coaching-bangalore" },
  { id: "digital-marketing", name: "Digital Marketing", path: "/digital-marketing-training-coaching-bangalore" },
];

const CourseNavigation = () => {
  const location = useLocation();

  return (
    <div className="bg-muted/30 border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">Our Courses:</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                location.pathname === course.path
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-card-foreground hover:bg-primary/10 hover:shadow-sm"
              }`}
            >
              {course.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseNavigation;
