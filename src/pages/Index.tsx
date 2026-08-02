import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ItinerarySection from "@/components/ItinerarySection";
import LocationsSection from "@/components/LocationsSection";
import TipsSection from "@/components/TipsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider color="gold" delay={0} />
        <FeaturesSection />
        <SectionDivider color="gold" delay={0.3} />
        <section id="jadwal">
          <ItinerarySection />
        </section>
        <SectionDivider color="white" delay={0.6} />
        <section id="lokasi">
          <LocationsSection />
        </section>
        <SectionDivider color="gold" delay={0.9} />
        <section id="fasilitas">
          <BenefitsSection />
        </section>
        <SectionDivider color="gold" delay={0.2} />
        <section id="tips">
          <TipsSection />
        </section>
        <SectionDivider color="gold" delay={0.5} />
        <CTASection />
        <SectionDivider color="white" delay={0.1} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
