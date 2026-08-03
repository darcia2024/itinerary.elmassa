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
    date: "03 Nov 2026",
    title: "Pangkal Pinang - Jakarta",
    location: "Pangkal Pinang → Jakarta",
    image: departureImage,
    activities: [
      { time: "09:00 WIB", description: "Jemaah berkumpul di Bandar Udara Internasional Depati Amir, Pangkal Pinang untuk persiapan keberangkatan" },
      { time: "12:25 WIB", description: "Take-off penerbangan feeder menuju Jakarta (Garuda Indonesia GA137)" },
      { time: "13:54 WIB", description: "Tiba di Bandara Jakarta (CGK). Menuju hotel transit / Lounge khusus Jemaah El Massa untuk istirahat" },
      { time: "19:30 WIB", description: "Pengarahan teknis & pemantapan manasik sebelum penerbangan utama ke Arab Saudi" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 2,
    date: "04 Nov 2026",
    title: "Jakarta - Jeddah - Madinah",
    location: "Jakarta → Jeddah → Madinah",
    image: jeddahAirportImage,
    activities: [
      { time: "00:40 WIB", description: "Take-off penerbangan utama menuju Jeddah (Saudia Airlines / Garuda Indonesia)" },
      { time: "06:40 LT", description: "Tiba di Bandara Internasional King Abdulaziz, Jeddah. Imigrasi & bagasi dibantu handling El Massa" },
      { time: "09:00 LT", description: "Perjalanan bus AC Executive menuju Kota Madinah Al-Munawwarah" },
      { description: "Check-in hotel Madinah (Daar El Naeem) dan beristirahat" },
      { time: "16:00 LT", description: "Shalat berjamaah di Masjid Nabawi & pengenalan sekitar area masjid" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 3,
    date: "05 Nov 2026",
    title: "Madinah - Raudhoh",
    location: "Madinah Al-Munawwarah",
    image: madinahImage,
    activities: [
      { time: "Pagi - Sore", description: "Masuk ke Raudhoh (Taman Surga) jemaah Perempuan & Laki-laki sesuai jadwal Tasreh resmi KSA" },
      { time: "16:00 LT", description: "Ziarah ke Makam Rasulullah SAW, Abu Bakar Ash-Shiddiq, Umar bin Khattab & Pemakaman Baqi" },
      { time: "20:00 LT", description: "Tausiyah pemantapan ibadah Nabawi bersama Ustadz Pembimbing" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 4,
    date: "06 Nov 2026",
    title: "Madinah - Perbanyak Ibadah & Shalat Jumat",
    location: "Madinah (Masjid Nabawi)",
    image: madinahImage,
    activities: [
      { time: "09:00 LT", description: "Menuju Masjid Nabawi lebih awal untuk persiapan Shalat Jumat berjamaah di shaf terdepan" },
      { time: "12:15 LT", description: "Pelaksanaan Shalat Jumat berjamaah di Masjid Nabawi Madinah" },
      { description: "Memperbanyak ibadah sunnah, zikir, membaca Al-Qur'an, dan iktikaf" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 5,
    date: "07 Nov 2026",
    title: "Madinah - City Tour",
    location: "Madinah & Sekitarnya",
    image: masjidQubaImage,
    activities: [
      { time: "07:30 LT", description: "City tour luar kota Madinah: Ziarah Masjid Quba (Masjid pertama yang dibangun Rasulullah SAW), Jabal Uhud (Makam Syuhada Uhud)" },
      { time: "10:30 LT", description: "Kunjungan ke Kebun Kurma & Pasar Kurma Madinah" },
      { description: "Melewati Masjid Qiblatain dan Masjid Khandaq" },
      { time: "16:00 LT", description: "Pemantapan manasik Umrah Wajib & latihan niat/ihram di hotel" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 6,
    date: "08 Nov 2026",
    title: "Madinah - Mekkah (Umrah Wajib 1)",
    location: "Madinah → Bir Ali → Mekkah",
    image: umrahPilgrimsImage,
    activities: [
      { time: "09:00 LT", description: "Mandi sunnah ihram & mengenakan pakaian ihram dari Hotel Madinah" },
      { time: "13:00 LT", description: "Singgah di Masjid Bir Ali (Dzulhulaifah) untuk Miqat & Niat Umrah dipandu Muthawwif" },
      { time: "14:00 - 20:00", description: "Perjalanan bus AC Executive menuju Mekkah Al-Mukarramah sambil memperbanyak Talbiyah" },
      { time: "21:00 LT", description: "Check-in Hotel Makkah (Grand Al Massa) & makan malam" },
      { time: "22:30 LT", description: "Pelaksanaan Rukun Umrah Wajib (Tawaf, Sa'i, Tahallul) di Masjidil Haram dibimbing Muthawwif" },
    ],
    highlight: "umrah" as const,
  },
  {
    day: 7,
    date: "09 Nov 2026",
    title: "Mekkah - Perbanyak Ibadah",
    location: "Mekkah Al-Mukarramah",
    image: heroImage,
    activities: [
      { description: "Ibadah mandiri & iktikaf di Masjidil Haram: Tawaf Sunnah, membaca Al-Qur'an, dan shalat khusyuk di depan Ka'bah" },
      { time: "20:00 LT", description: "Kajian rohani malam & evaluasi ibadah jamaah" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 8,
    date: "10 Nov 2026",
    title: "Mekkah City Tour (Umrah Ke-2)",
    location: "Mekkah & Sekitarnya",
    image: jabalRahmahImage,
    activities: [
      { time: "07:30 LT", description: "City tour kota Mekkah: Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdalifah, Mina, & Jabal Nur" },
      { time: "11:30 LT", description: "Singgah di Masjid Ji'ranah untuk Pengambilan Niat Miqat Umrah Ke-2 (Opsional)" },
      { time: "15:00 LT", description: "Pelaksanaan Tawaf & Sa'i Umrah Ke-2 di Masjidil Haram" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 9,
    date: "11 Nov 2026",
    title: "Mekkah Perbanyak Ibadah",
    location: "Mekkah Al-Mukarramah",
    image: heroImage,
    activities: [
      { description: "Fokus memperbanyak ibadah sunnah, berzikir, berdoa di Multazam & Hijir Ismail (kondisional)" },
      { time: "19:30 LT", description: "Persiapan koper & briefing agenda perjalanan ke Kota Thaif esok hari" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 10,
    date: "12 Nov 2026",
    title: "Mekkah - Tour Thaif",
    location: "Mekkah → Kota Thaif → Mekkah",
    image: cityTaifImage,
    activities: [
      { time: "07:30 LT", description: "Perjalanan bus ke Kota Sejuk Thaif melalui pegunungan Al-Hada" },
      { time: "09:30 - 15:30", description: "Ziarah Masjid Abdullah Ibn Abbas, Kebun Mawar & Pabrik Parfum Thaif, Nikmati Kuliner Khas KSA & Kereta Gantung" },
      { time: "17:00 LT", description: "Kembali ke Makkah, singgah di Miqat Qarnul Manazil (Umrah Ke-3 Opsional)" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 11,
    date: "13 Nov 2026",
    title: "Mekkah - Jeddah - Jakarta",
    location: "Mekkah → Jeddah → CGK",
    image: jeddahAirportImage,
    activities: [
      { time: "05:00 LT", description: "Pelaksanaan Tawaf Wada' (Tawaf Perpisahan Ka'bah) di Masjidil Haram bersama Muthawwif" },
      { time: "09:00 LT", description: "Check-out Hotel Makkah & perjalanan bus ke Kota Jeddah" },
      { time: "11:00 LT", description: "City tour Jeddah: Laut Merah, Masjid Terapung Al-Rahmah, Shopping Corniche Al-Balad & Makan Siang Albaik" },
      { time: "17:00 LT", description: "Tiba di Bandara Jeddah (JED), check-in pesawat & pembagian Air Zamzam 5L" },
      { time: "20:30 LT", description: "Take-off penerbangan internasional menuju Jakarta (CGK)" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 12,
    date: "14 Nov 2026",
    title: "Jakarta - Pangkal Pinang",
    location: "CGK → Pangkal Pinang (PGK)",
    image: departureImage,
    activities: [
      { time: "10:30 WIB", description: "Landing di Bandara Soekarno-Hatta Jakarta (CGK)" },
      { time: "14:00 WIB", description: "Take-off penerbangan feeder menuju Pangkal Pinang (Garuda Indonesia GA136)" },
      { time: "15:20 WIB", description: "Tiba di Bandara Depati Amir Pangkal Pinang (PGK). Seluruh rangkaian ibadah Umrah Spesial November El Massa selesai dengan mabrur" },
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
            12 Hari Perjalanan Penuh Makna
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
            Jadwal Perjalanan
          </h2>

          <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <p className="text-white/85 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Itinerary lengkap bersama El Massa — 03 hingga 14 November 2026.{" "}
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
