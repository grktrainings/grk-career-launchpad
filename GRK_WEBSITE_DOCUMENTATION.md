# GRK Institute Website - Complete Documentation

## 🎯 Overview
This is a professional training institute website built with React, TypeScript, and Tailwind CSS. It features course pages for Python Full Stack, Java Full Stack, DevOps, AWS, and Digital Marketing.

---

## 📁 Project Structure

```
src/
├── assets/              # Images and media files
│   ├── grk-logo.png    # Company logo (imported as ES6 module)
│   └── hero-education.jpg
├── components/          # Reusable components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── Hero.tsx        # Homepage hero section
│   ├── ContactSection.tsx
│   ├── CoursesSection.tsx
│   ├── LocationsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── WhyChooseSection.tsx
│   └── ui/             # Shadcn UI components
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Courses.tsx     # All courses overview
│   ├── PythonFullStack.tsx
│   ├── JavaFullStack.tsx
│   ├── DevOps.tsx
│   ├── AWS.tsx
│   ├── DigitalMarketing.tsx
│   └── NotFound.tsx
├── index.css           # Global styles & design tokens
├── App.tsx             # Main app with routing
└── main.tsx           # Entry point
```

---

## 🎨 Design System

### Color Scheme
The website uses a **RED & BLACK** theme with HSL color values defined in `src/index.css`:

```css
:root {
  /* Primary - Red */
  --primary: 0 84% 60%;           /* Bright red */
  --primary-dark: 0 84% 50%;      /* Darker red */
  --primary-foreground: 0 0% 100%; /* White text */

  /* Secondary - Black/Dark */
  --secondary: 0 0% 10%;          /* Near black */
  --secondary-dark: 0 0% 5%;      /* Pure black */
  --secondary-foreground: 0 0% 100%; /* White text */

  /* Background */
  --background: 0 0% 100%;        /* White */
  --foreground: 0 0% 5%;          /* Near black */

  /* Additional colors */
  --muted: 0 0% 96%;
  --accent: 0 84% 60%;            /* Red accent */
  --success: 142 71% 45%;         /* Green for success states */
}
```

### Using Colors in Components
**❌ NEVER DO THIS:**
```tsx
<div className="bg-red-500 text-white">  // DON'T use direct colors
```

**✅ ALWAYS DO THIS:**
```tsx
<div className="bg-primary text-primary-foreground">  // DO use semantic tokens
```

### Available Color Tokens
- `bg-primary` / `text-primary` - Main red color
- `bg-secondary` / `text-secondary` - Black/dark color
- `bg-background` / `text-foreground` - White/black base
- `bg-muted` / `text-muted-foreground` - Gray tones
- `bg-accent` / `text-accent` - Accent red
- `text-success` - Green for success states

---

## 🧭 Navigation System

### How Navigation Works

The navigation uses **hash-based scrolling** for single-page navigation on the homepage:

1. **On Homepage (/)**: Clicking nav items smoothly scrolls to sections
2. **On Other Pages**: Clicking nav items redirects to homepage then scrolls

### Section IDs Required
Each section on the homepage must have an `id` attribute matching the nav href:

```tsx
// In src/pages/Index.tsx
<section id="home">
  <Hero />
</section>

<section id="courses">
  {/* Courses content */}
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

{/* Contact section doesn't need wrapper, ContactSection has its own id */}
<ContactSection />
```

### Navigation Code Structure

```tsx
// src/components/Navigation.tsx

// Import logo as ES6 module
import grkLogo from "@/assets/grk-logo.png";

const handleNavClick = (href: string) => {
  setIsMenuOpen(false);
  if (isHomePage) {
    // Smooth scroll on homepage
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navigate to homepage + section
    window.location.href = '/' + href;
  }
};
```

---

## 🖼️ Image Management

### Logo Implementation

**❌ WRONG WAY (Won't work in production):**
```tsx
<img src="/src/assets/grk-logo.png" />  // This breaks in build
```

**✅ CORRECT WAY:**
```tsx
// 1. Import at the top of the file
import grkLogo from "@/assets/grk-logo.png";

// 2. Use the imported variable
<img src={grkLogo} alt="GRK Institute Logo" />
```

### Adding New Images

1. **Place image in `src/assets/` folder**
2. **Import as ES6 module:**
   ```tsx
   import myImage from "@/assets/my-image.png";
   ```
3. **Use in component:**
   ```tsx
   <img src={myImage} alt="Description" />
   ```

### Why Import Images?
- ✅ Vite optimizes and bundles images
- ✅ Works in both development and production
- ✅ TypeScript type checking
- ✅ Automatic cache busting

---

## 🛣️ Routing

### Current Routes

```tsx
// src/App.tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/courses/python-fullstack" element={<PythonFullStack />} />
  <Route path="/courses/java-fullstack" element={<JavaFullStack />} />
  <Route path="/courses/devops" element={<DevOps />} />
  <Route path="/courses/aws" element={<AWS />} />
  <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Adding a New Route

1. **Create page component** in `src/pages/`:\
   ```tsx
   // src/pages/NewCourse.tsx
   const NewCourse = () => {
     return (
       <div>
         <Navigation />
         {/* Your content */}
       </div>
     );
   };
   export default NewCourse;
   ```

2. **Add route in App.tsx:**
   ```tsx
   import NewCourse from "./pages/NewCourse";
   
   // Add before the "*" route
   <Route path="/courses/new-course" element={<NewCourse />} />
   ```

3. **Add navigation link** (if needed):
   ```tsx
   <Link to="/courses/new-course">New Course</Link>
   ```

---

## 🔧 Common Issues & Fixes

### Issue 1: Logo Not Showing

**Problem:** Logo displays in development but not in production build

**Solution:**
```tsx
// ❌ Wrong
<img src="/src/assets/grk-logo.png" />

// ✅ Correct
import grkLogo from "@/assets/grk-logo.png";
<img src={grkLogo} />
```

### Issue 2: Navigation Not Scrolling

**Problem:** Clicking nav items doesn't scroll to sections

**Checklist:**
1. ✅ Sections have correct `id` attributes
2. ✅ IDs match the `href` in navItems (without #)
3. ✅ Smooth scroll is enabled in index.css:
   ```css
   html {
     scroll-behavior: smooth;
   }
   ```
4. ✅ Navigation uses `handleNavClick` function

### Issue 3: Mobile Menu Not Closing

**Problem:** Mobile menu stays open after clicking

**Solution:** Add `onClick={() => handleNavClick(item.href)}` to mobile nav items

### Issue 4: Colors Not Working

**Problem:** Custom colors not applying correctly

**Solution:**
1. Check `src/index.css` has correct HSL values
2. Use semantic tokens: `bg-primary`, not `bg-red-500`
3. Restart dev server after changing CSS variables

---

## 📱 Responsive Design

### Breakpoints (Tailwind CSS)
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Example Usage
```tsx
<div className="
  grid 
  grid-cols-1      /* Mobile: 1 column */
  md:grid-cols-2   /* Tablet: 2 columns */
  lg:grid-cols-4   /* Desktop: 4 columns */
  gap-6
">
```

---

## 🎯 Contact Information

Update contact details in these locations:

1. **Navigation.tsx** (line 57, 90):
   ```tsx
   <Phone className="h-4 w-4" />
   <span>+91 6364456661</span>
   ```

2. **ContactSection.tsx** (line 31):
   ```tsx
   window.open(`https://wa.me/916364456661?text=${message}`, '_blank');
   ```

3. **Index.tsx** footer (line 206):
   ```tsx
   <p>+91 6364456661</p>
   <p>info@grktraining.com</p>
   ```

---

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📝 Adding New Courses

### Step-by-Step Process

1. **Create Course Page** (`src/pages/NewCourse.tsx`):
```tsx
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NewCourse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Course Name
          </h1>
          <p className="text-xl">Course tagline</p>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Add your sections here */}
        </div>
      </section>
    </div>
  );
};

export default NewCourse;
```

2. **Add Route** in `src/App.tsx`:
```tsx
import NewCourse from "./pages/NewCourse";

// In Routes
<Route path="/courses/new-course" element={<NewCourse />} />
```

3. **Add to Courses List** in `src/pages/Index.tsx`:
```tsx
const coursesPreview = [
  // ... existing courses
  {
    id: "new-course",
    title: "New Course",
    duration: "X Months",
    description: "Course description",
    price: "₹XX,000",
    popular: false,
    averageSalary: "₹X.X LPA",
    demandLevel: "High"
  }
];
```

---

## 🎨 Styling Guidelines

### Component Styling Pattern
```tsx
<Card className="
  bg-card               /* Background */
  hover:shadow-glow     /* Hover effect */
  transition-all        /* Smooth transitions */
  hover:-translate-y-1  /* Lift on hover */
">
  <CardHeader>
    <CardTitle className="text-card-foreground group-hover:text-primary">
      Title
    </CardTitle>
  </CardHeader>
</Card>
```

### Button Variants
```tsx
{/* Primary Button - Red */}
<Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
  Primary Action
</Button>

{/* Secondary Button - Black */}
<Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground">
  Secondary Action
</Button>

{/* Outline Button */}
<Button variant="outline">
  Outline Action
</Button>
```

---

## 🔍 SEO Best Practices

### Already Implemented
- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`)
- ✅ Descriptive alt attributes on images
- ✅ Meta tags in index.html
- ✅ Clean, readable URLs
- ✅ Mobile-responsive design

### To Add for Better SEO
- [ ] Page-specific title and meta descriptions
- [ ] Open Graph tags for social sharing
- [ ] JSON-LD structured data for courses
- [ ] robots.txt (already present in public/)
- [ ] Sitemap.xml

---

## 📞 Support & Maintenance

### For Issues:
1. Check this documentation first
2. Review console for errors (F12 in browser)
3. Verify all imports are correct
4. Ensure images are in `src/assets/` and properly imported
5. Check that color tokens match design system

### Quick Fixes:
- **Logo not showing?** → Import it as ES6 module
- **Navigation broken?** → Check section IDs match nav hrefs
- **Colors wrong?** → Use semantic tokens, not direct colors
- **Build failing?** → Check for TypeScript errors in console

---

## 📄 License & Credits

**Built with:**
- React 18.3.1
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui components
- Lucide React icons

**GRK Institute** - Launch Your Tech Career
© 2024 All Rights Reserved

---

## 🎓 Training Locations

- **Bangalore, Karnataka**
  - Marathahalli
  - BTM Layout

- **Madanapalle, Andhra Pradesh**

---

*Last Updated: 2024*
*For technical support: info@grktraining.com*
