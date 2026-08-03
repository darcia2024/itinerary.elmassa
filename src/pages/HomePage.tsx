import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  CheckCircle2,
  FileText,
  PhoneCall
} from "lucide-react";

import logoElmassa from "@/assets/logo-elmassa.png";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import departureImage from "@/assets/departure-airport.jpg";
import umrahImage from "@/assets/umrah-pilgrims.jpg";
import qubaImage from "@/assets/masjid-quba.jpg";
import jabalImage from "@/assets/jabal-rahmah.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";

const WA_NUMBER = "6281249476778";
const openWhatsApp = (month = "") => {
  const text = month 
    ? `Halo El Massa, saya berminat dengan Katalog Itinerary Paket Umrah bulan ${month} 2026`
    : `Halo El Massa, saya berminat untuk konsultasi Paket Umrah`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
};

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface CatalogPackage {
  id: string;
  slug: string;
  month: string;
  year: string;
  dates: string;
  days: string;
  badge: string;
  highlight: string;
  image: string;
  destinations: string[];
  isOpen: boolean;
}

const CATALOG_ITEMS: CatalogPackage[] = [
  {
    id: "juli-2026",
    slug: "/juli-2026",
    month: "Juli",
    year: "2026",
    dates: "08 – 18 Juli 2026",
    days: "11 Hari",
    badge: "Brosur & Itinerary Lengkap",
    highlight: "Free City Tour Thaif & Bimbingan Khusyuk",
    image: heroImage,
    destinations: ["Makkah", "Madinah", "Thaif"],
    isOpen: true,
  },
  {
    id: "oktober-2026",
    slug: "/oktober-2026",
    month: "Oktober",
    year: "2026",
    dates: "30 Sep – 13 Okt 2026",
    days: "14 Hari",
    badge: "Brosur & Itinerary Lengkap",
    highlight: "Paket Nyaman 14 Hari Madinah & Makkah",
    image: madinahImage,
    destinations: ["Madinah", "Makkah", "Thaif"],
    isOpen: true,
  },
  {
    id: "november-2026",
    slug: "/november-2026",
    month: "November",
    year: "2026",
    dates: "03 – 14 Nov 2026",
    days: "12 Hari",
    badge: "Brosur & Itinerary Lengkap",
    highlight: "Free City Tour Thaif & Hotel Bintang 4-5",
    image: jabalImage,
    destinations: ["Makkah", "Madinah", "Thaif"],
    isOpen: true,
  },
  {
    id: "desember-2026",
    slug: "#",
    month: "Desember",
    year: "2026",
    dates: "Jadwal Akhir Tahun 2026",
    days: "12 Hari",
    badge: "Segera Rilis",
    highlight: "Umrah Musim Akhir Tahun",
    image: umrahImage,
    destinations: ["Makkah", "Madinah"],
    isOpen: false,
  },
  {
    id: "januari-2027",
    slug: "#",
    month: "Januari",
    year: "2027",
    dates: "Jadwal Awal Tahun 2027",
    days: "11 Hari",
    badge: "Segera Rilis",
    highlight: "Umrah Awal Tahun Berkah",
    image: qubaImage,
    destinations: ["Makkah", "Madinah"],
    isOpen: false,
  },
  {
    id: "ramadan-2027",
    slug: "#",
    month: "Ramadan",
    year: "2027",
    dates: "Maret 2027",
    days: "15 Hari",
    badge: "Segera Rilis",
    highlight: "Spesial Bulan Suci Ramadan",
    image: cityTaifImage,
    destinations: ["Makkah", "Madinah", "Thaif"],
    isOpen: false,
  },
];

const HomePage = () => {
  const [filter, setFilter] = useState<"all" | "open" | "upcoming">("all");
  const [livePackages, setLivePackages] = useState<CatalogPackage[]>([]);

  useEffect(() => {
    fetch("https://system-elmassa.vercel.app/api/packages")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.ok && Array.isArray(res.data) && res.data.length > 0) {
          const mapped: CatalogPackage[] = res.data.map((pkg: any) => ({
            id: String(pkg.id || `pkg-${Math.random()}`),
            slug: `/paket/${pkg.id}`,
            month: String(pkg.category || "Umrah"),
            year: pkg.departureDate ? String(pkg.departureDate).slice(0, 4) : "2026",
            dates: String(pkg.departuresDate || pkg.departureDate || "Jadwal Terbit System"),
            days: String(pkg.duration || "12 Hari"),
            badge: "🟢 LIVE SISTEM EL MASSA",
            highlight: `${pkg.name || 'Paket Umrah'} — ${pkg.price || ''}`,
            image: heroImage,
            destinations: ["Makkah", "Madinah", "Thaif"],
            isOpen: true,
          }));
          setLivePackages(mapped);
        }
      })
      .catch((e) => console.error("Error fetching live packages:", e));
  }, []);

  const allItems = [...livePackages, ...CATALOG_ITEMS];

  const filteredItems = allItems.filter((item) => {
    if (filter === "open") return item.isOpen;
    if (filter === "upcoming") return !item.isOpen;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#1b0a11] text-white flex flex-col font-sans selection:bg-rose-900/40 relative overflow-x-hidden">
      
      {/* ── Fixed Atmospheric Background Image ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img 
          src={departureImage} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.18) saturate(0.9)" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/30 via-[#1b0a11]/90 to-[#1b0a11]" />
      </div>

      {/* ── Compact Header Navbar ── */}
      <header className="sticky top-0 z-50 bg-[#1b0a11]/90 backdrop-blur-xl border-b border-rose-900/40 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logoElmassa} 
              alt="El Massa Tour & Travel" 
              className="h-8 sm:h-9 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Compact WA Button */}
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="flex items-center gap-1.5 text-white font-sans text-[11px] font-extrabold tracking-wider uppercase px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 transition-all shadow-sm border border-pink-300/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            {WHATSAPP_ICON}
            <span>Konsultasi WA</span>
          </button>
        </div>
      </header>

      {/* ── Main Catalog Body (Compact & Comfortable) ── */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Compact Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-4xl font-black tracking-tight leading-snug mb-2"
          >
            <span className="block text-white font-extrabold drop-shadow-md">Katalog Paket Umrah</span>
            <span className="block text-pink-400 font-extrabold text-xl sm:text-3xl mt-1 tracking-normal">
              El Massa Tour &amp; Travel
            </span>
          </motion.h1>

          <div className="mx-auto my-2 h-1 w-10 bg-pink-500/80 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.5)]" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs sm:text-xs text-rose-100/70 leading-relaxed font-medium"
          >
            Pilih paket dan jadwal keberangkatan di bawah ini untuk membuka brosur itinerary digital lengkap.
          </motion.p>
        </div>

        {/* ── Compact Filter Tabs ── */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-[#270e17]/90 backdrop-blur-md p-1 rounded-xl border border-rose-900/50 shadow-md gap-1">
            {[
              { id: "all", label: "Semua Paket" },
              { id: "open", label: "Pendaftaran Dibuka" },
              { id: "upcoming", label: "Segera Hadir" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-sm"
                    : "text-rose-200/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Compact Catalog Cards Grid ── */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const CardContent = (
                <div className="flex flex-col h-full">
                  {/* Compact Card Header Image */}
                  <div className="relative h-40 sm:h-44 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.month}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 ${
                        !item.isOpen ? "brightness-[0.35] saturate-50" : "brightness-[0.7] saturate-110 group-hover:brightness-[0.8]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#250f18] via-black/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      {item.isOpen ? (
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-rose-600 to-pink-600 backdrop-blur-md text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full border border-pink-300/40 shadow-sm tracking-wider uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          Dibuka
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-md text-rose-200/80 text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-white/10 tracking-wider uppercase">
                          <Lock className="w-2.5 h-2.5 text-rose-400" />
                          Segera
                        </span>
                      )}
                    </div>

                    {/* Month & Year Overlay */}
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                      <p className="text-[9px] font-black tracking-[0.2em] uppercase text-pink-300/90 mb-0.5">
                        {item.year}
                      </p>
                      <h2 className="font-display text-xl sm:text-2xl font-black leading-tight drop-shadow-md group-hover:text-pink-200 transition-colors">
                        {item.month} {item.year}
                      </h2>
                    </div>
                  </div>

                  {/* Compact Card Body Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between space-y-3">
                    <div className="space-y-2.5">
                      
                      {/* Date & Duration */}
                      <div className="flex items-center justify-between text-[11px] border-b border-rose-900/40 pb-2.5">
                        <span className="flex items-center gap-1.5 font-bold text-rose-100">
                          <Calendar className="w-3.5 h-3.5 text-pink-400" />
                          {item.dates}
                        </span>
                        <span className="bg-pink-500/20 text-pink-300 font-extrabold border border-pink-400/30 px-2 py-0.5 rounded-md text-[10px]">
                          {item.days}
                        </span>
                      </div>

                      {/* Highlight */}
                      <p className="text-[11px] text-rose-200/90 font-medium flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span>{item.highlight}</span>
                      </p>

                      {/* Destinations List */}
                      <div className="flex items-center gap-1 pt-0.5 flex-wrap">
                        <span className="text-[9px] font-bold tracking-wider uppercase text-rose-300/60 mr-1">Rute:</span>
                        {(item.destinations || ["Makkah", "Madinah"]).map((dest) => (
                          <span
                            key={dest}
                            className="inline-flex items-center gap-1 text-[9px] font-bold bg-pink-950/60 border border-pink-500/20 text-pink-200 px-2 py-0.5 rounded-md backdrop-blur-sm"
                          >
                            <MapPin className="w-2.5 h-2.5 text-pink-400" />
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compact Card Action Buttons */}
                    <div className="pt-2">
                      {item.isOpen ? (
                        <div className="grid grid-cols-5 gap-1.5">
                          <span
                            className="col-span-4 flex items-center justify-center gap-1.5 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 group-hover:from-rose-500 group-hover:to-pink-500 text-white text-[11px] font-extrabold py-2.5 px-3 rounded-lg transition-all shadow-sm border border-pink-300/30"
                          >
                            <span>Lihat Itinerary</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openWhatsApp(item.month);
                            }}
                            title="Tanya WhatsApp"
                            className="col-span-1 flex items-center justify-center bg-whatsapp hover:bg-whatsapp-hover text-white rounded-lg py-2.5 transition-colors shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                          >
                            {WHATSAPP_ICON}
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openWhatsApp(item.month);
                          }}
                          className="w-full flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-rose-200/80 text-[11px] font-bold py-2.5 px-3 rounded-lg transition-colors cursor-pointer"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-pink-400" />
                          <span>Minta Notifikasi Rilis</span>
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              );

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -15 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  {item.isOpen ? (
                    <Link
                      to={item.slug}
                      className="group flex flex-col h-full bg-[#250f18]/95 backdrop-blur-xl rounded-xl overflow-hidden border border-rose-900/50 hover:border-pink-400/70 shadow-md hover:shadow-[0_12px_32px_rgba(244,114,182,0.2)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      {CardContent}
                    </Link>
                  ) : (
                    <div className="group flex flex-col h-full bg-[#250f18]/60 backdrop-blur-md rounded-xl overflow-hidden border border-rose-900/30 shadow-sm opacity-90">
                      {CardContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ── Compact Agency Assurance Card ── */}
        <div className="mt-10 bg-[#250f18]/90 backdrop-blur-xl rounded-xl border border-rose-900/50 p-5 text-center shadow-lg">
          <div className="max-w-md mx-auto space-y-2.5">
            <img src={logoElmassa} alt="El Massa" className="h-8 mx-auto object-contain brightness-0 invert opacity-95" />
            <h3 className="font-display text-base font-bold text-white">El Massa Tour &amp; Travel</h3>
            <p className="text-[11px] text-rose-200/70 leading-relaxed font-medium">
              Penyelenggara Perjalanan Ibadah Umrah Resmi &amp; Terpercaya · Ruko Bes Cinema, Jl. Jendral Sudirman, Pangkal Pinang.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-[0_0_18px_rgba(244,114,182,0.4)] cursor-pointer border border-pink-300/30"
              >
                {WHATSAPP_ICON}
                <span>Hubungi Tim Customer Service</span>
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* ── Compact Footer ── */}
      <footer className="relative z-10 py-4 border-t border-rose-900/40 bg-[#1b0a11]/95 text-center">
        <p className="text-[11px] text-rose-200/50 font-medium">
          © 2026 El Massa Tour &amp; Travel · Katalog Digital Itinerary Umrah
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
