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
    date: "30 Sep 2026",
    title: "Pangkal Pinang – Jakarta",
    location: "Pangkal Pinang → Jakarta",
    image: departureImage,
    activities: [
      { time: "09:00 WIB", description: "Jemaah berkumpul di Bandar Udara Internasional Depati Amir, Pangkal Pinang untuk persiapan keberangkatan" },
      { time: "12:25 WIB", description: "Take-off menuju Jakarta (Garuda Indonesia GA137)" },
      { time: "13:54 WIB", description: "Tiba di Bandara Jakarta. Jemaah disediakan lounge bandara untuk beristirahat sambil menunggu penerbangan ke Jeddah" },
      { time: "19:30 WIB", description: "Jemaah berkumpul di keberangkatan internasional Terminal 3 Soekarno-Hatta untuk persiapan proses check-in" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 2,
    date: "01 Okt 2026",
    title: "Jakarta – Jeddah – Madinah",
    location: "Jakarta → Jeddah → Madinah",
    image: jeddahAirportImage,
    activities: [
      { time: "00:40 WIB", description: "Take-off menuju Jeddah (Saudia Airline SV827)" },
      { time: "06:40 LT", description: "Landing di Bandara Internasional King Abdul Aziz, Jeddah" },
      { description: "Perjalanan menggunakan bus menuju kota Madinah" },
      { description: "Check-in hotel Madinah dan beristirahat" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 3,
    date: "02 Okt 2026",
    title: "Madinah – Rawdhah & Ziarah",
    location: "Madinah Al-Munawwarah",
    image: madinahImage,
    activities: [
      { time: "Subuh–11.00", description: "Rawdhah jemaah perempuan (InsyaAllah apabila Tasreh keluar)" },
      { time: "11.00–Isya", description: "Rawdhah jemaah laki-laki" },
      { time: "Isya–23.30", description: "Rawdhah jemaah perempuan" },
      { time: "23.30–Subuh", description: "Rawdhah jemaah laki-laki" },
      { description: "Ziarah & pengenalan sekitar Masjid Nabawi: Bani Tsaqifah, Makam Rasulullah & Sahabat (dari luar masjid), Masjid Ali, Masjid Ghamamah, Pemakaman Baqi" },
      { description: "Shalat Jumat di Masjid Nabawi. Setelah shalat Jumat acara bebas" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 4,
    date: "03 Okt 2026",
    title: "Tour Sejarah Madinah",
    location: "Madinah & Sekitarnya",
    image: masjidQubaImage,
    activities: [
      { time: "08.00–12.00", description: "Tour & Ziarah jejak sejarah Islam: Masjid Quba (masjid pertama yang dibangun Rasulullah SAW), Jabal Uhud (makam para syuhada Perang Uhud), Kebun Kurma (kondisional). Melewati Masjid Qiblatain dan Masjid Khandaq" },
      { time: "12.00–15.00", description: "Shalat Dhuhur, makan siang dan istirahat" },
      { time: "15.00–16.00", description: "Persiapan shalat Ashar" },
      { time: "16.00–18.00", description: "Waktu bebas (ibadah atau berbelanja)" },
      { time: "18.00–21.00", description: "ISHOMA" },
      { time: "21.00–23.00", description: "Agenda bebas: berbelanja atau menikmati kuliner Kota Madinah" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 5,
    date: "04 Okt 2026",
    title: "Agenda Bebas Madinah",
    location: "Madinah Al-Munawwarah",
    image: madinahImage,
    activities: [
      { description: "Agenda bebas: memperbanyak ibadah di Masjid Nabawi, berbelanja, atau berkunjung ke destinasi wisata opsional (transportasi ditanggung masing-masing)" },
      { description: "Opsi kunjungan: Sumur Ghars (air untuk memandikan jenazah Rasulullah SAW), Mendaki Jabal Uhud naik mobil GMC, Trip Al-Ula, dll." },
    ],
    highlight: "worship" as const,
  },
  {
    day: 6,
    date: "05 Okt 2026",
    title: "City Tour Madinah 2 & Manasik",
    location: "Madinah Al-Munawwarah",
    image: masjidQubaImage,
    activities: [
      { time: "08.00–12.00", description: "City tour Madinah ke-2: Percetakan Al-Quran Malik Fahd Madinah, Jabal Magnet (naik onta opsional)" },
      { time: "12.00–15.00", description: "ISHOMA" },
      { time: "15.00–16.00", description: "Shalat Ashar" },
      { time: "16.00–18.00", description: "Pemantapan manasik umrah" },
      { time: "18.00–21.00", description: "ISHOMA" },
      { time: "21.00–23.00", description: "Agenda bebas: berbelanja atau menikmati kuliner Kota Madinah" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 7,
    date: "06 Okt 2026",
    title: "Madinah – Mekah (Umrah 1)",
    location: "Madinah → Bir Ali → Mekah",
    image: umrahPilgrimsImage,
    activities: [
      { time: "08.00–10.00", description: "Koper diletakkan di depan kamar masing-masing untuk check-out dari hotel Madinah" },
      { time: "10.00–13.00", description: "Makan siang, shalat, dan persiapan check-out" },
      { time: "13.00–14.00", description: "Berangkat ke Masjid Bir Ali/Dzulhulaifah untuk Miqat dan pengambilan niat Umrah. Jemaah mengenakan pakaian Umrah dan Ihram (laki-laki), niat dipandu Muthawwif" },
      { time: "14.00–20.00", description: "Perjalanan menuju Kota Mekah sambil memperbanyak membaca Talbiyah. Tiba di Mekah, check-in hotel. Jika kamar belum ready, langsung melaksanakan prosesi umrah dibimbing Muthawwif" },
      { time: "20.00–22.00", description: "Pembagian kamar, makan malam, bersiap menuju Masjidil Haram" },
      { time: "22.00–04.00", description: "Berangkat ke Masjidil Haram untuk pelaksanaan rukun umrah. Proses umrah diperkirakan selesai pukul 02.30–04.00" },
    ],
    highlight: "umrah" as const,
  },
  {
    day: 8,
    date: "07 Okt 2026",
    title: "Ibadah di Masjidil Haram",
    location: "Mekah Al-Mukarramah",
    image: heroImage,
    activities: [
      { time: "08.00–14.00", description: "Acara bebas: memperbanyak ibadah di Masjidil Haram — Itikaf, Tawaf Sunnah, dan ibadah lainnya" },
      { description: "Shalat Jumat di Masjidil Haram bersama seluruh jemaah" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 9,
    date: "08 Okt 2026",
    title: "Ziarah Sejarah Mekah & Umrah 2",
    location: "Mekah & Sekitarnya",
    image: jabalRahmahImage,
    activities: [
      { time: "08.00–12.00", description: "Tour & Ziarah sejarah Islam di sekitar Mekah: Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdhalifah, Mina, Jabal Nur (kondisional)" },
      { description: "Singgah di Masjid Ji'ranah untuk Miqat. Bagi yang ingin Umrah ke-2 (opsional), bersiap mengambil niat dengan mengenakan pakaian ihram" },
      { time: "12.00–14.00", description: "ISHOMA" },
      { time: "14.00–selesai", description: "Pelaksanaan umrah kedua, dilanjutkan agenda bebas" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 10,
    date: "09 Okt 2026",
    title: "City Tour Mekah 2 & Umrah 3",
    location: "Mekah Al-Mukarramah",
    image: heroImage,
    activities: [
      { time: "08.00–13.30", description: "Agenda bebas dan melaksanakan shalat Jumat di Masjidil Haram" },
      { time: "13.30–18.00", description: "City tour Mekah ke-2: Museum Al-Amoudi, Museum Wahyu, dll. Opsional Umrah ketiga bagi yang berminat" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 11,
    date: "10 Okt 2026",
    title: "City Tour Thaif (Bonus Gratis!)",
    location: "Mekah → Thaif → Mekah",
    image: cityTaifImage,
    activities: [
      { time: "08.00–18.00", description: "City tour Kota Thaif: Masjid Abdullah Ibn Abbas, Masjid Ku', Masjid Addas, Kebun Mawar, Pabrik Parfum, Kereta Gantung (wahana berbayar ditanggung masing-masing)" },
      { description: "Opsional Umrah keempat bagi yang ingin mengambil miqat saat kembali dari Thaif" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 12,
    date: "11 Okt 2026",
    title: "Tawaf Wada' & Menuju Jeddah",
    location: "Mekah → Jeddah",
    image: jeddahAirportImage,
    activities: [
      { description: "Sebelum Subuh, semua koper jemaah diletakkan di depan kamar masing-masing" },
      { description: "Berangkat ke Masjidil Haram untuk shalat Subuh berjamaah dan Tawaf Wada' (pamitan dengan Ka'bah)" },
      { time: "09:30 LT", description: "Check-out dari hotel setelah sarapan" },
      { description: "Perjalanan menuju Kota Jeddah. Singgah city tour Jeddah untuk makan siang dan shalat Dhuhur" },
      { time: "17:30 LT", description: "Take-off dari Jeddah menuju Jakarta (Saudia Airline SV816)" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 13,
    date: "12 Okt 2026",
    title: "Tiba di Jakarta – Transit",
    location: "Jakarta",
    image: departureImage,
    activities: [
      { time: "07:35 WIB", description: "Landing di Bandara Jakarta" },
      { description: "Istirahat di hotel transit yang disediakan travel sambil menunggu penerbangan ke Pangkal Pinang keesokan harinya" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 14,
    date: "13 Okt 2026",
    title: "Jakarta – Pangkal Pinang",
    location: "Jakarta → Pangkal Pinang",
    image: departureImage,
    activities: [
      { time: "05:30 WIB", description: "Jemaah berkumpul di lobi hotel untuk bersiap menuju bandara" },
      { time: "10:20 WIB", description: "Take-off menuju Pangkal Pinang (Garuda Indonesia GA136)" },
      { time: "11:40 WIB", description: "Tiba di Bandar Udara Pangkal Pinang. Pembagian bagasi, zamzam, dan bingkisan kenang-kenangan" },
      { description: "Berakhirlah rangkaian perjalanan ibadah penuh makna bersama El Massa. Sampai berjumpa pada perjalanan selanjutnya!" },
    ],
    highlight: "departure" as const,
  },
];

const ItinerarySectionOktober = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-[#F6F3EC] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3 bg-white border border-stone-200 shadow-sm rounded-full px-4 py-1.5 text-stone-900 text-xs font-bold tracking-wide"
          >
            <Calendar className="w-3.5 h-3.5 text-stone-700" />
            14 Hari Perjalanan Penuh Makna
          </motion.div>

          <h2 className="font-sans text-3xl md:text-5xl font-black text-stone-900 mb-3 tracking-tight">
            Jadwal Perjalanan
          </h2>

          <div className="mx-auto mb-4 h-1 w-12 bg-black rounded-full" />

          <p className="text-stone-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-medium">
            Itinerary lengkap bersama El Massa — 30 September hingga 13 Oktober 2026.{" "}
            <span className="text-stone-900 font-bold underline underline-offset-2">Klik kartu untuk detail.</span>
          </p>
        </motion.div>

        {/* Grid Layout */}
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

export default ItinerarySectionOktober;
