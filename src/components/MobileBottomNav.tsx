import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, MapPin, Gift, MessageCircle } from "lucide-react";

const WA_NUMBER = "6281249476778";

const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState("jadwal");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["jadwal", "lokasi", "fasilitas", "tips"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        "Halo El Massa, saya ingin bertanya mengenai Itinerary Paket Umrah"
      )}`,
      "_blank"
    );
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-safe">
      <div className="flex items-center justify-around">
        {/* Home Link */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center py-1 px-2 min-w-[56px] rounded-xl transition-all ${
            isHomePage
              ? "text-stone-900 font-extrabold scale-105"
              : "text-stone-400 font-medium hover:text-stone-700"
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Katalog</span>
        </Link>

        {/* Jadwal / Itinerary Section */}
        <button
          type="button"
          onClick={() => scrollToSection("jadwal")}
          className={`flex flex-col items-center justify-center py-1 px-2 min-w-[56px] rounded-xl transition-all ${
            !isHomePage && activeTab === "jadwal"
              ? "text-stone-900 font-extrabold scale-105"
              : "text-stone-400 font-medium hover:text-stone-700"
          }`}
        >
          <Calendar className="w-5 h-5 mb-0.5 text-stone-900" />
          <span className="text-[10px] tracking-tight">Jadwal</span>
        </button>

        {/* Destinasi / Lokasi */}
        <button
          type="button"
          onClick={() => scrollToSection("lokasi")}
          className={`flex flex-col items-center justify-center py-1 px-2 min-w-[56px] rounded-xl transition-all ${
            !isHomePage && activeTab === "lokasi"
              ? "text-stone-900 font-extrabold scale-105"
              : "text-stone-400 font-medium hover:text-stone-700"
          }`}
        >
          <MapPin className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Lokasi</span>
        </button>

        {/* Fasilitas */}
        <button
          type="button"
          onClick={() => scrollToSection("fasilitas")}
          className={`flex flex-col items-center justify-center py-1 px-2 min-w-[56px] rounded-xl transition-all ${
            !isHomePage && activeTab === "fasilitas"
              ? "text-stone-900 font-extrabold scale-105"
              : "text-stone-400 font-medium hover:text-stone-700"
          }`}
        >
          <Gift className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Fasilitas</span>
        </button>

        {/* Floating WhatsApp Action Pill */}
        <button
          type="button"
          onClick={openWhatsApp}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl bg-emerald-600 text-white shadow-md active:scale-95 transition-all"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 fill-current" />
          <span className="text-[10px] font-bold tracking-tight">Tanya WA</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
