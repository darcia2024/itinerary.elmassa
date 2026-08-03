import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import LocationsSection from "@/components/LocationsSection";
import TipsSection from "@/components/TipsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomNav from "@/components/MobileBottomNav";
import { ChevronLeft, Calendar, MapPin, Plane, Hotel, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import madinahImage from "@/assets/madinah-mosque.jpg";
import heroImage from "@/assets/hero-makkah.jpg";

interface PackageData {
  id: string;
  name: string;
  category: string;
  duration: string;
  departuresDate?: string;
  departureDate?: string;
  price: string;
  dpMinimum?: string;
  makkahHotel?: string;
  madinahHotel?: string;
  airline?: string;
  flightRoute?: string;
  itinerary?: Array<{
    day: number;
    title: string;
    location?: string;
    activities: Array<{ time?: string; description: string }>;
  }>;
}

const DynamicPackagePage = () => {
  const { id } = useParams<{ id: string }>();
  const [packageData, setPackageData] = useState<PackageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://system-elmassa.vercel.app/api/packages")
      .then((res) => res.json())
      .then((res) => {
        if (res.ok && Array.isArray(res.data)) {
          const found = res.data.find(
            (p: PackageData) =>
              p.id === id ||
              p.id.toLowerCase() === id?.toLowerCase() ||
              p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === id
          );
          if (found) {
            setPackageData(found);
          }
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F3EC] flex flex-col items-center justify-center space-y-4">
        <div className="w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-stone-600 text-sm font-medium">Memuat Itinerary Paket Terbaru...</p>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-[#F6F3EC] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h2 className="text-2xl font-bold text-stone-800">Paket Tidak Ditemukan</h2>
        <p className="text-stone-600 text-sm">Paket yang Anda cari mungkin telah diarsipkan atau diperbarui.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-rose-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:bg-rose-700 transition"
        >
          <ChevronLeft className="w-4 h-4" /> Kembali ke Semua Jadwal
        </Link>
      </div>
    );
  }

  const dateText = packageData.departuresDate || packageData.departureDate || "Jadwal Terbit Terkini";

  return (
    <div className="min-h-screen bg-[#F6F3EC] pb-16 md:pb-0 font-sans">
      <Navbar />

      <main className="bg-[#F6F3EC]">
        {/* Back Button Container */}
        <div className="container mx-auto px-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white border border-stone-200/80 shadow-sm hover:shadow-md rounded-xl px-4 py-2 text-stone-700 text-xs font-bold hover:bg-stone-50 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-rose-600" />
            <span>Kembali ke Semua Jadwal</span>
          </Link>
        </div>

        {/* Dynamic Hero Section */}
        <HeroSection
          dateText={dateText}
          monthLabel={(packageData.category || "UMRAH SPESIAL").toUpperCase()}
          bgImage={madinahImage}
        />

        {/* Package Highlights Banner */}
        <section className="bg-white border-y border-stone-200/70 py-6">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 shadow-2xs">
              <span className="text-[10px] text-amber-700 font-extrabold uppercase tracking-wider block">Target Rombongan</span>
              <span className="text-sm md:text-base font-black text-amber-900 mt-0.5 block">{packageData.targetPax || 39} Jamaah</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/60 shadow-2xs">
              <span className="text-[10px] text-rose-700 font-extrabold uppercase tracking-wider block">Hotel Makkah</span>
              <span className="text-sm md:text-base font-black text-rose-950 mt-0.5 block truncate">{packageData.makkahHotel || "Grand Al Massa"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 shadow-2xs">
              <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-wider block">Hotel Madinah</span>
              <span className="text-sm md:text-base font-black text-emerald-950 mt-0.5 block truncate">{packageData.madinahHotel || "Daar El Naeem"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/60 shadow-2xs">
              <span className="text-[10px] text-sky-700 font-extrabold uppercase tracking-wider block">Penerbangan</span>
              <span className="text-sm md:text-base font-black text-sky-950 mt-0.5 block truncate">{packageData.airline || "Saudia / Garuda"}</span>
            </div>
          </div>
        </section>

        {/* Dynamic Itinerary Timeline */}
        <section id="jadwal" className="py-12 md:py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(349 75% 52%) 0%, hsl(340 70% 42%) 100%)" }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-amber-200 text-xs font-bold shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{packageData.duration} Perjalanan Penuh Makna &amp; Berkah</span>
              </div>

              <h2 className="font-serif text-3xl md:text-5xl font-black text-white mb-3 drop-shadow-md leading-tight">
                {packageData.name}
              </h2>

              <p className="text-white/90 text-xs md:text-sm font-medium leading-relaxed">
                Rangkaian kegiatan harian resmi El Massa Tour &amp; Travel — <span className="font-bold text-amber-200">{dateText}</span>.
              </p>
            </div>

            {/* Ultra-Premium Daily Itinerary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {packageData.itinerary && packageData.itinerary.length > 0 ? (
                packageData.itinerary.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(225,29,72,0.14)] border border-rose-100 hover:border-rose-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top Decorative Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500" />

                    <div className="space-y-4">
                      {/* Header Badge & Title */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-black text-xs px-3 py-1 rounded-xl shadow-xs border border-pink-300/30 shrink-0">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            Hari ke-{item.day}
                          </span>
                          <h3 className="text-sm md:text-base font-extrabold text-stone-900 group-hover:text-rose-600 transition-colors leading-snug">
                            {item.title}
                          </h3>
                        </div>

                        {item.location && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200/70 px-2.5 py-1 rounded-lg shrink-0">
                            <MapPin className="w-3 h-3 text-rose-500" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      {/* Connected Activity Timeline */}
                      <div className="relative pl-3 space-y-3 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-[2px] before:bg-rose-200/70">
                        {item.activities && item.activities.map((act, actIdx) => (
                          <div key={actIdx} className="flex items-start gap-2.5 text-xs text-stone-800 relative">
                            {/* Dot on line */}
                            <span className="absolute -left-[13px] top-1.5 w-2 h-2 rounded-full bg-rose-500 border border-white shadow-2xs" />
                            
                            {act.time && (
                              <span className="inline-flex items-center justify-center font-mono text-[10px] font-extrabold text-white bg-gradient-to-r from-stone-900 to-stone-800 border border-stone-700 px-2 py-0.5 rounded-md shrink-0 shadow-2xs min-w-[70px]">
                                {act.time}
                              </span>
                            )}
                            <p className="leading-relaxed font-semibold text-stone-700 flex-1">{act.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center text-white/90 py-10 text-sm font-medium bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  Rincian kegiatan harian tersedia saat konfirmasi pendaftaran.
                </div>
              )}
            </div>
          </div>
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
      <MobileBottomNav />
    </div>
  );
};

export default DynamicPackagePage;
