import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          
          {/* Redirects from old URLs to new SEO-friendly URLs */}
          <Route path="/courses/python-fullstack" element={<Navigate to="/python-fullstack-development-training-coaching-bangalore" replace />} />
          <Route path="/courses/java-fullstack" element={<Navigate to="/java-fullstack-development-training-coaching-bangalore" replace />} />
          <Route path="/courses/devops" element={<Navigate to="/devops-training-coaching-bangalore" replace />} />
          <Route path="/courses/devops-aws" element={<Navigate to="/devops-training-coaching-bangalore" replace />} />
          <Route path="/courses/aws" element={<Navigate to="/aws-cloud-training-coaching-bangalore" replace />} />
          <Route path="/courses/digital-marketing" element={<Navigate to="/digital-marketing-training-coaching-bangalore" replace />} />
          <Route path="/courses/marathahalli" element={<Navigate to="/courses-training-coaching-marathahalli-bangalore" replace />} />
          <Route path="/courses/btm" element={<Navigate to="/courses-training-coaching-btm-bangalore" replace />} />
          <Route path="/courses/madanapalle" element={<Navigate to="/courses-training-coaching-madanapalle" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
