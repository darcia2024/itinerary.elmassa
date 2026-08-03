import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
    <div className="min-h-screen bg-[#F6F3EC] pb-16 md:pb-0">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.5 }}
        className="fixed top-20 left-4 md:top-auto md:bottom-6 md:left-6 z-40"
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
        {/* Dynamic Hero Section */}
        <HeroSection
          dateText={dateText}
          monthLabel={(packageData.category || "UMRAH SPESIAL").toUpperCase()}
          bgImage={madinahImage}
        />

        {/* Package Highlights Banner */}
        <section className="bg-white border-y border-stone-200 py-6">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/50">
              <span className="text-xs text-stone-500 font-semibold block">Harga / Pax</span>
              <span className="text-base font-extrabold text-amber-900">{packageData.price}</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/50">
              <span className="text-xs text-stone-500 font-semibold block">Setoran Minimal DP</span>
              <span className="text-base font-extrabold text-emerald-900">{packageData.dpMinimum || "Rp 5.000.000"}</span>
            </div>
            <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-200/50">
              <span className="text-xs text-stone-500 font-semibold block">Maskapai & Rute</span>
              <span className="text-xs font-bold text-sky-950 truncate block mt-1">{packageData.airline || "Saudia / Garuda"}</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200/50">
              <span className="text-xs text-stone-500 font-semibold block">Hotel Makkah & Madinah</span>
              <span className="text-xs font-bold text-rose-950 truncate block mt-1">
                {packageData.makkahHotel} & {packageData.madinahHotel}
              </span>
            </div>
          </div>
        </section>

        {/* Dynamic Itinerary Timeline */}
        <section id="jadwal" className="py-10 md:py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(349 70% 58%) 0%, hsl(340 60% 48%) 100%)" }}>
          <div className="container mx-auto px-3 md:px-4 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-white text-xs font-medium tracking-wide shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-white" />
                {packageData.duration} Perjalanan Penuh Makna
              </div>

              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
                {packageData.name}
              </h2>

              <p className="text-white/85 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                Rangkaian kegiatan harian resmi El Massa — {dateText}.
              </p>
            </div>

            {/* Daily Itinerary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packageData.itinerary && packageData.itinerary.length > 0 ? (
                packageData.itinerary.map((item, idx) => (
                  <div key={idx} className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/40 space-y-3">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="bg-rose-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-full">
                          Hari ke-{item.day}
                        </span>
                        <h3 className="text-sm font-bold text-stone-900">{item.title}</h3>
                      </div>
                      {item.location && (
                        <span className="text-[11px] font-semibold text-stone-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-rose-500" /> {item.location}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {item.activities && item.activities.map((act, actIdx) => (
                        <div key={actIdx} className="flex items-start gap-2.5 text-xs text-stone-700">
                          {act.time && (
                            <span className="bg-rose-50 text-rose-700 font-bold text-[10px] px-2 py-0.5 rounded-md shrink-0 border border-rose-200/60">
                              {act.time}
                            </span>
                          )}
                          <p className="leading-relaxed font-medium">{act.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center text-white/90 py-8 text-sm">
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
