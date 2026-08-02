import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ItinerarySectionNovember from "@/components/ItinerarySectionNovember";
import LocationsSection from "@/components/LocationsSection";
import TipsSection from "@/components/TipsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SectionDivider from "@/components/SectionDivider";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";

const NovemberPage = () => {
  return (
    <div className="min-h-screen bg-[#F6F3EC]">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.5 }}
        className="fixed bottom-6 left-4 z-40"
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-stone-200 shadow-lg rounded-full px-3.5 py-2 text-stone-700 text-xs font-semibold hover:bg-white transition-all"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Semua Jadwal
        </Link>
      </motion.div>

      <main className="bg-[#F6F3EC]">
        <HeroSection
          dateText="08 Nov – 18 Nov 2026"
          monthLabel="NOVEMBER 2026"
          bgImage={madinahImage}
        />
        <section id="jadwal">
          <ItinerarySectionNovember />
        </section>
        <FeaturesSection />
        <section id="lokasi">
          <LocationsSection />
        </section>
        <section id="fasilitas">
          <BenefitsSection />
        </section>
        <section id="tips">
          <TipsSection />
        </section>
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default NovemberPage;
