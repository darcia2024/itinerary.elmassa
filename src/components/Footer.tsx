import { Heart, Phone, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logoElmassa from "@/assets/logo-elmassa.png";

const Footer = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh",
      "_blank"
    );
  };

  return (
    <footer className="bg-[#12050b] text-white pt-12 pb-8 border-t border-rose-900/40 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-rose-900/40">
          
          {/* Brand */}
          <div className="space-y-3">
            <img
              src={logoElmassa}
              alt="El Massa Tour & Travel"
              className="h-10 w-auto brightness-0 invert opacity-95"
            />
            <p className="text-xs text-rose-200/70 leading-relaxed font-medium">
              Penyelenggara Perjalanan Ibadah Umrah Resmi & Terpercaya. Memberikan bimbingan ibadah khusyuk dan fasilitas kelas satu.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Layanan Konsultasi</h4>
            <p className="text-xs text-rose-200/70 font-medium">
              Ruko Bes Cinema, Jl. Jendral Sudirman, Pangkal Pinang, Kepulauan Bangka Belitung.
            </p>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white text-xs font-bold px-4 py-2 rounded-xl mt-2 hover:scale-105 transition-transform cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Hubungi CS WhatsApp</span>
            </button>
          </div>

        </div>

        {/* ── Giant Editorial Footer Text ── */}
        <div className="pt-8 text-center">
          <h2 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white/10 select-none leading-none">
            EL MASSA ITINERARIES
          </h2>
          <p className="mt-4 text-[11px] font-medium text-rose-200/50 uppercase tracking-widest">
            © 2026 EL MASSA TOUR &amp; TRAVEL · EDITORIAL DIGITAL ITINERARY BROCHURE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;