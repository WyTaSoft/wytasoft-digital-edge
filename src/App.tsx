import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StartProject from "./pages/StartProject";
import Consultation from "./pages/Consultation";
import DataEngineering from "./pages/services/DataEngineering";
import CloudTransformation from "./pages/services/CloudTransformation";
import MachineLearning from "./pages/services/MachineLearning";
import SaaSDevelopment from "./pages/services/SaaSDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="wytasoft-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/services/data-engineering" element={<DataEngineering />} />
            <Route path="/services/cloud-transformation" element={<CloudTransformation />} />
            <Route path="/services/machine-learning" element={<MachineLearning />} />
            <Route path="/services/saas-development" element={<SaaSDevelopment />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
