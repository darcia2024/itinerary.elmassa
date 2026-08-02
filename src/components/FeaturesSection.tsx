import madinahImage from "@/assets/madinah-mosque.jpg";
import heroImage from "@/assets/hero-makkah.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";
import masjidQubaImage from "@/assets/masjid-quba.jpg";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Shield, Users, Hotel, Compass } from "lucide-react";

const destinationsList = [
  {
    id: 1,
    title: "Rawdhah & Ziarah Masjid Nabawi",
    subtitle: "Madinah Al-Munawwarah",
    description: "Nikmati ketenangan beribadah di Masjid Nabawi, ziarah Makam Rasulullah SAW, serta kunjungan ke Raudhah.",
    image: madinahImage,
    flag: "🇸🇦 Madinah",
    rating: "4.9",
  },
  {
    id: 2,
    title: "Tawaf & Sa'i di Masjidil Haram",
    subtitle: "Makkah Al-Mukarramah",
    description: "Menjalankan prosesi umrah khusyuk dengan bimbingan Muthawwif berpengalaman di Masjidil Haram.",
    image: heroImage,
    flag: "🇸🇦 Makkah",
    rating: "5.0",
  },
  {
    id: 3,
    title: "Jelajah Sejarah & Mawar Thaif",
    subtitle: "Kota Thaif (Bonus Tour)",
    description: "City Tour gratis ke Kebun Mawar, Masjid Abdullah Ibn Abbas & Kereta Gantung.",
    image: cityTaifImage,
    flag: "🇸🇦 Thaif",
    rating: "4.8",
  },
  {
    id: 4,
    title: "Napak Tilas Jabal Uhud & Quba",
    subtitle: "Madinah & Sekitarnya",
    description: "Mengunjungi masjid pertama Islam dan makam syuhada Uhud.",
    image: masjidQubaImage,
    flag: "🇸🇦 Madinah",
    rating: "4.9",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-[#F6F3EC] text-stone-900 relative font-sans space-y-24">
      
      {/* ── 1. Traveme "Recommended Destination" Slider Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Slider Arrows */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-sans text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
              Rekomendasi Destinasi Utama
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
              Rangkaian destinasi utama dan tempat bersejarah selama 14 hari di Tanah Suci.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-900 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-900 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Destination Cards Grid (Traveme Crisp Light Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Card Cover Image */}
              <div className="relative h-52 overflow-hidden bg-stone-100 p-2">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Top Right Flag Badge */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="bg-white/95 backdrop-blur-md text-stone-900 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                      {item.flag}
                    </span>
                  </div>

                  {/* Bottom Left Rating */}
                  <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-bold text-amber-400">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span className="text-white">{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-sans text-base font-extrabold text-stone-900 mb-1.5 leading-snug group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-black">
                  <span>Lihat Detail</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── 2. Traveme "Elevate Your Spiritual Journey" Split Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & 2x2 Feature List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="font-sans text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
                Tingkatkan Kualitas Ibadah Anda
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                El Massa Tour &amp; Travel menghadirkan standar pelayanan ibadah terbaik agar setiap detik perjalanan Anda terasa berkesan dan tenang.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-stone-200/70 flex items-center justify-center text-stone-900 mb-3">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-sans text-sm font-black text-stone-900">Bimbingan Sunnah Resmi</h4>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  Bimbingan manasik dan pelaksanaan ibadah umrah sesuai tuntunan Al-Quran &amp; Sunnah.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-stone-200/70 flex items-center justify-center text-stone-900 mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-sans text-sm font-black text-stone-900">Muthawwif Berpengalaman</h4>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  Pendampingan ustadz &amp; Muthawwif ahli yang siap membantu setiap kebutuhan jemaah.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-stone-200/70 flex items-center justify-center text-stone-900 mb-3">
                  <Hotel className="w-4 h-4" />
                </div>
                <h4 className="font-sans text-sm font-black text-stone-900">Hotel Bintang 5 Dekat Masjid</h4>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  Akomodasi berjarak dekat dari Masjidil Haram &amp; Masjid Nabawi untuk kemudahan shalat 5 waktu.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-stone-200/70 flex items-center justify-center text-stone-900 mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-sans text-sm font-black text-stone-900">Full City Tour Eksklusif</h4>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  Ziarah napak tilas sejarah Islam di Madinah, Makkah, serta Bonus City Tour Kota Thaif.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Large Photo Banner */}
          <div className="lg:col-span-6">
            <div className="relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200 group">
              <img
                src={heroImage}
                alt="Umrah Journey"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 text-stone-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  🇸🇦 Makkah
                </span>
                <span className="bg-black/60 text-white border border-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  Eksklusif
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
