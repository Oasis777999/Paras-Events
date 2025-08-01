import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Pages
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Activities from "./components/Activities";
import Aboutus from "./components/Aboutus.jsx"
import ImageGallery from "./components/ImageGallery.js";
import PackageGallery from "./components/PackageGallery";

// Image Section
// import Wedding from "./components/Wedding.jsx"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contactus" element={<Contact/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/packages" element={<Packages/>}></Route>
          <Route path="/aboutus" element={<Aboutus/>} ></Route>
          <Route path="/videos" element={<Videos/>}></Route>
          <Route path="/activities" element={<Activities/>}></Route>

          <Route path="/:category" element={<ImageGallery/>}></Route>
          <Route path="/pack" element={<PackageGallery/>}></Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
