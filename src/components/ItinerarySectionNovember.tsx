import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import ItineraryDay from "./ItineraryDay";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import departureImage from "@/assets/departure-airport.jpg";
import masjidQubaImage from "@/assets/masjid-quba.jpg";
import umrahPilgrimsImage from "@/assets/umrah-pilgrims.jpg";
import jabalRahmahImage from "@/assets/jabal-rahmah.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";
import jeddahAirportImage from "@/assets/jeddah-airport.jpg";
import { motion } from "framer-motion";

const itineraryData = [
  {
    day: 1,
    date: "08 Nov 2026",
    title: "Pangkal Pinang - Jakarta",
    location: "Pangkal Pinang → Jakarta",
    image: departureImage,
    activities: [
      { time: "09:00 WIB", description: "Jemaah berkumpul di Bandar Udara Internasional Depati Amir, Pangkal Pinang untuk persiapan keberangkatan" },
      { time: "12:25 WIB", description: "Take-off menuju Jakarta (Garuda Indonesia GA137)" },
      { time: "13:54 WIB", description: "Tiba di Bandara Jakarta. Menuju hotel transit untuk istirahat dan menginap 1 malam" },
      { time: "19:30 WIB", description: "Pemantapan manasik umrah di mushalla / meeting room hotel" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 2,
    date: "09 Nov 2026",
    title: "Jakarta - Jeddah - Madinah",
    location: "Jakarta → Jeddah → Madinah",
    image: jeddahAirportImage,
    activities: [
      { time: "05:30 WIB", description: "Berkumpul di lobi hotel untuk persiapan menuju bandara" },
      { time: "11:25 WIB", description: "Take-off menuju Jeddah (Garuda Indonesia G980)" },
      { time: "17:30 LT", description: "Tiba di Bandara Internasional King Abdul Aziz, Jeddah" },
      { description: "Perjalanan menggunakan bus menuju kota Madinah" },
      { description: "Check-in hotel Madinah dan beristirahat" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 3,
    date: "10 Nov 2026",
    title: "Madinah - Rawdah & Ziarah",
    location: "Madinah Al-Munawwarah",
    image: madinahImage,
    activities: [
      { time: "Subuh–11.00", description: "Rawdah jemaah perempuan (InsyaAllah apabila Tasreh keluar)" },
      { time: "11.00–Isya", description: "Rawdah jemaah laki-laki" },
      { time: "Isya–23.30", description: "Rawdah jemaah perempuan" },
      { time: "23.30–Subuh", description: "Rawdah jemaah laki-laki" },
      { description: "Ziarah & pengenalan sekitar Masjid Nabawi: Bani Tsaqifah, Makam Rasulullah & Sahabat (dari luar masjid), Masjid Ali, Masjid Ghamamah, Pemakaman Baqi" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 4,
    date: "11 Nov 2026",
    title: "Tour Sejarah Madinah & Manasik",
    location: "Madinah & Sekitarnya",
    image: masjidQubaImage,
    activities: [
      { description: "Tour & Ziarah jejak sejarah Islam: Masjid Quba (masjid pertama yang dibangun Rasulullah SAW), Jabal Uhud (makam para syuhada Perang Uhud), Kebun Kurma (kondisional)" },
      { description: "Melewati Masjid Qiblatain dan Masjid Khandaq sepanjang perjalanan" },
      { description: "Acara bebas: memperbanyak ibadah di Masjid Nabawi — Itikaf, Tadarus, dan ibadah lainnya" },
      { description: "Manasik singkat pada sore/malam hari sebagai persiapan pelaksanaan ibadah Umroh" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 5,
    date: "12 Nov 2026",
    title: "Madinah - Mekah (Umrah 1)",
    location: "Madinah → Bir Ali → Mekah",
    image: umrahPilgrimsImage,
    activities: [
      { description: "Koper diletakkan di depan kamar masing-masing untuk check-out dari hotel Madinah" },
      { time: "14:00 LT", description: "Bus berangkat menuju Masjid Bir Ali/Dzulhulaifah untuk Miqat dan pengambilan niat Umroh" },
      { description: "Jemaah mengenakan pakaian Umroh dan Ihram (untuk laki-laki). Niat umroh dilafazkan dipandu Muthawif" },
      { description: "Memperbanyak membaca Talbiyah selama perjalanan menuju kota Mekah" },
      { description: "Tiba di Mekah, menuju hotel dan menyimpan barang. Jika kamar belum ready, langsung melaksanakan prosesi umroh dibimbing Muthawif" },
    ],
    highlight: "umrah" as const,
  },
  {
    day: 6,
    date: "13 Nov 2026",
    title: "Ibadah di Masjidil Haram",
    location: "Mekah Al-Mukarramah",
    image: heroImage,
    activities: [
      { description: "Acara bebas, memperbanyak ibadah di Masjidil Haram: Itikaf, Tawaf Sunnah, dan ibadah lainnya" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 7,
    date: "14 Nov 2026",
    title: "Ziarah Sejarah Mekah",
    location: "Mekah & Sekitarnya",
    image: jabalRahmahImage,
    activities: [
      { description: "Tour & Ziarah jejak sejarah Islam di sekitar kota Mekah: Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdhalifah, Mina, Jabal Nur (kondisional)" },
      { description: "Singgah di Masjid Ji'ranah untuk Miqat. Bagi yang ingin Umrah ke-2 (opsional/tidak wajib), bersiap mengenakan pakaian ihram dan mengambil niat" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 8,
    date: "15 Nov 2026",
    title: "City Tour Thaif (Bonus Gratis!)",
    location: "Mekah → Thaif → Mekah",
    image: cityTaifImage,
    activities: [
      { description: "Setelah sarapan, berangkat menuju kota Thaif untuk menikmati Bonus City Tour Thaif Gratis dari El Massa (wahana berbayar ditanggung masing-masing)" },
      { description: "Kembali dari Thaif melewati tempat miqot — bagi yang ingin melaksanakan Umrah ke-3 dapat mengambil ihram di sini" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 9,
    date: "16 Nov 2026",
    title: "Tawaf Wada' & Menuju Jeddah",
    location: "Mekah → Jeddah",
    image: jeddahAirportImage,
    activities: [
      { description: "Setelah sarapan, semua koper diletakkan di depan kamar masing-masing" },
      { description: "Berangkat ke Masjidil Haram untuk melaksanakan Tawaf Wada' (pamitan dengan Ka'bah)" },
      { time: "14:00 LT", description: "Check-out dari hotel setelah selesai makan siang, lalu perjalanan menuju Bandara Jeddah" },
      { time: "21:55 LT", description: "Take-off dari Jeddah menuju Jakarta (Garuda Indonesia G983)" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 10,
    date: "17 Nov 2026",
    title: "Tiba di Jakarta - Transit",
    location: "Jakarta",
    image: departureImage,
    activities: [
      { time: "11:50 WIB", description: "Landing di Bandara Jakarta" },
      { description: "Istirahat di hotel transit yang disediakan travel sambil menunggu penerbangan ke Pangkal Pinang keesokan harinya" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 11,
    date: "18 Nov 2026",
    title: "Jakarta - Pangkal Pinang",
    location: "Jakarta → Pangkal Pinang",
    image: departureImage,
    activities: [
      { time: "05:30 WIB", description: "Berkumpul di lobi hotel untuk bersiap menuju bandara" },
      { time: "10:20 WIB", description: "Take-off menuju Pangkal Pinang (Garuda Indonesia GA136)" },
      { time: "11:40 WIB", description: "Tiba di Bandar Udara Pangkal Pinang. Pembagian bagasi, zamzam, dan bingkisan kenang-kenangan" },
      { description: "Rangkaian perjalanan ibadah penuh makna bersama El Massa telah selesai. Sampai berjumpa pada perjalanan selanjutnya!" },
    ],
    highlight: "departure" as const,
  },
];

const ItinerarySectionNovember = () => {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(349 70% 58%) 0%, hsl(340 60% 48%) 100%)" }}>
      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-white text-xs font-medium tracking-wide shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            11 Hari Perjalanan Penuh Makna
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
            Jadwal Perjalanan
          </h2>

          <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <p className="text-white/85 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Itinerary lengkap bersama El Massa — 08 hingga 18 November 2026.{" "}
            <span className="text-white font-semibold underline underline-offset-2 decoration-white/40">Klik kartu untuk detail.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {itineraryData.map((item, index) => (
            <ItineraryDay
              key={item.day}
              day={item.day}
              date={item.date}
              title={item.title}
              location={item.location}
              activities={item.activities}
              image={item.image}
              highlight={item.highlight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySectionNovember;
