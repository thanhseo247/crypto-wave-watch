
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import Bitcoin from "./pages/Bitcoin";
import Ethereum from "./pages/Ethereum";
import Altcoins from "./pages/Altcoins";
import Markets from "./pages/Markets";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import TechnicalAnalysis from "./pages/TechnicalAnalysis";
import MarketReports from "./pages/MarketReports";
import IndustryNews from "./pages/IndustryNews";
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
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/ethereum" element={<Ethereum />} />
          <Route path="/altcoins" element={<Altcoins />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
          <Route path="/market-reports" element={<MarketReports />} />
          <Route path="/industry-news" element={<IndustryNews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
