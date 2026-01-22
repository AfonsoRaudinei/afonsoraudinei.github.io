import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JornadaProfissionalPage from "./pages/JornadaProfissionalPage";
import NutrientesPage from "./pages/NutrientesPage";
import SojaPage from "./pages/SojaPage";
import SolofortePage from "./pages/SolofortePage";
import MapaMentalPage from "./pages/MapaMentalPage";
import MilhoPage from "./pages/MilhoPage";
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
          <Route path="/jornada-profissional" element={<JornadaProfissionalPage />} />
          <Route path="/nutrientes" element={<NutrientesPage />} />
          <Route path="/nutrientes/analise-absorcao" element={<NutrientesPage />} />
          <Route path="/nutrientes/:slug" element={<NutrientesPage />} />
          <Route path="/soja" element={<SojaPage />} />
          <Route path="/milho" element={<MilhoPage />} />
          <Route path="/soloforte" element={<SolofortePage />} />
          <Route path="/mapa-mental" element={<MapaMentalPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
