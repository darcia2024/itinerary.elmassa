import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import { ArrowRight, Calendar, Search, MapPin, SlidersHorizontal } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroSectionProps {
  dateText?: string;
  bgImage?: string;
  monthLabel?: string;
}

const HeroSection = ({
  dateText = "30 Sep – 13 Okt 2026",
  bgImage = madinahImage,
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], ["0%", "12%"]);

  const scrollToItinerary = () =>
    document.getElementById("jadwal")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={sectionRef} className="relative bg-[#F6F3EC] text-stone-900 pt-20 sm:pt-24 md:pt-28 pb-12 overflow-hidden font-sans">
      
      {/* ── Traveme Panoramic Hero Banner ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative h-[480px] sm:h-[560px] rounded-3xl overflow-hidden shadow-xl border border-stone-300/70 group">
          
          {/* Parallax Hero Image */}
          <motion.img
            style={{ y: bgY }}
            src={bgImage}
            alt="El Massa Umrah"
            className="w-full h-full object-cover origin-center scale-105 group-hover:scale-108 transition-transform duration-1000 ease-out brightness-95"
          />
          
          {/* Dark Overlay Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75" />

          {/* ── Traveme Giant Brand Typography (Top Left) ── */}
          <div className="absolute top-6 left-6 sm:left-10 z-10">
            <h1 className="font-sans text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white leading-none lowercase drop-shadow-md select-none">
              elmassa
            </h1>
          </div>

          {/* Bottom Left Floating Tag Pills */}
          <div className="absolute bottom-8 left-6 sm:left-10 flex flex-wrap gap-2 z-10">
            {["travel", "sunnah", "eksklusif"].map((pill) => (
              <span
                key={pill}
                className="bg-black/50 backdrop-blur-md text-white/95 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/30 shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Bottom Right Floating Content Block (Traveme Style) */}
          <div className="absolute bottom-8 right-6 sm:right-10 max-w-sm sm:max-w-md text-right z-10 space-y-3">
            <h2 className="font-sans text-3xl sm:text-5xl font-black text-white leading-tight drop-shadow-md">
              Ibadah Khusyuk, <br /> Perjalanan Tenang.
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 font-medium leading-relaxed max-w-xs ml-auto">
              Nikmati kemudahan umrah 14 hari bersama El Massa Tour &amp; Travel dengan bimbingan sunnah &amp; fasilitas bintang 5.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={scrollToItinerary}
                className="inline-flex items-center gap-2.5 bg-black hover:bg-stone-900 text-white text-xs font-bold px-6 py-3.5 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
              >
                <span>Lihat Detail Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Centered Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-[11px] text-white/70 font-semibold tracking-wider uppercase z-10">
            <span>(0) Scroll Down</span>
          </div>

        </div>
      </div>

      {/* ── Traveme Horizontal Floating Search / Filter Bar (Crisp White Card) ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-7 relative z-20">
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-3 sm:p-4 border border-stone-200 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-stone-900">
          
          {/* Item 1: City or Address */}
          <div className="flex items-center gap-3 px-3 py-1.5 w-full md:w-auto border-b md:border-b-0 md:border-r border-stone-200">
            <MapPin className="w-4 h-4 text-stone-700 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Destinasi Rute</p>
              <p className="text-xs font-black text-stone-900">Madinah • Makkah • Thaif</p>
            </div>
          </div>

          {/* Item 2: Add Dates */}
          <div className="flex items-center gap-3 px-3 py-1.5 w-full md:w-auto border-b md:border-b-0 md:border-r border-stone-200">
            <Calendar className="w-4 h-4 text-stone-700 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Jadwal Keberangkatan</p>
              <p className="text-xs font-black text-stone-900">{dateText}</p>
            </div>
          </div>

          {/* Item 3: Package Type */}
          <div className="flex items-center gap-3 px-3 py-1.5 w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-stone-700 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Tipe Paket</p>
              <p className="text-xs font-black text-stone-900">Paket Regular 14 Hari (Bintang 5)</p>
            </div>
          </div>

          {/* Item 4: Search Circle Button */}
          <button
            type="button"
            onClick={scrollToItinerary}
            className="w-12 h-12 rounded-full bg-black hover:bg-stone-800 text-white flex items-center justify-center shrink-0 shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
