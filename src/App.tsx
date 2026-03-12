import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Redirect to trailing slash
const TrailingSlashRedirect = () => {
  const { pathname, search, hash } = useLocation();
  if (pathname !== "/" && !pathname.endsWith("/")) {
    return <Navigate to={`${pathname}/${search}${hash}`} replace />;
  }
  return null;
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrailingSlashRedirect />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/es-es/" element={<Index />} />
          <Route path="/politica-de-privacidad/" element={<PrivacyPolicy />} />
          <Route path="/juego-responsable/" element={<ResponsibleGaming />} />
          <Route path="/terminos-y-condiciones/" element={<Terms />} />
          <Route path="/sobre-nosotros/" element={<AboutUs />} />
          <Route path="/contacto/" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
