import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import PythonFullStack from "./pages/PythonFullStack";
import JavaFullStack from "./pages/JavaFullStack";
import DevOps from "./pages/DevOps";
import AWS from "./pages/AWS";
import DigitalMarketing from "./pages/DigitalMarketing";
import MarathahallCourses from "./pages/MarathahallCourses";
import BTMCourses from "./pages/BTMCourses";
import MadanapalleCourses from "./pages/MadanapalleCourses";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/python-fullstack-development-training-coaching-bangalore" element={<PythonFullStack />} />
          <Route path="/java-fullstack-development-training-coaching-bangalore" element={<JavaFullStack />} />
          <Route path="/devops-training-coaching-bangalore" element={<DevOps />} />
          <Route path="/aws-cloud-training-coaching-bangalore" element={<AWS />} />
          <Route path="/digital-marketing-training-coaching-bangalore" element={<DigitalMarketing />} />
          <Route path="/courses-training-coaching-marathahalli-bangalore" element={<MarathahallCourses />} />
          <Route path="/courses-training-coaching-btm-bangalore" element={<BTMCourses />} />
          <Route path="/courses-training-coaching-madanapalle" element={<MadanapalleCourses />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
