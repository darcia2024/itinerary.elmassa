import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import JuliPage from "./pages/JuliPage";
import OktoberPage from "./pages/OktoberPage";
import NovemberPage from "./pages/NovemberPage";
import DynamicPackagePage from "./pages/DynamicPackagePage";
import NotFound from "./pages/NotFound";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/juli-2026" element={<JuliPage />} />
      <Route path="/oktober-2026" element={<OktoberPage />} />
      <Route path="/november-2026" element={<NovemberPage />} />
      <Route path="/paket/:id" element={<DynamicPackagePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
