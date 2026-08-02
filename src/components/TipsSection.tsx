import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shirt,
  Stethoscope,
  BookOpen,
  Smartphone,
  Heart,
  FileText,
  Lightbulb,
  ChevronDown,
  ExternalLink,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TipItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
  color: string;
  externalLink?: string;
}

const tips: TipItem[] = [
  {
    icon: Shirt,
    title: "Pakaian Ihram",
    description: "Siapkan 2 set pakaian ihram untuk pria.",
    details: [
      "Pakaian ihram putih bersih (2 lembar kain)",
      "Sandal nyaman tanpa jahitan atas",
      "Jaket tipis untuk AC pesawat",
      "Ikat pinggang ihram",
      "Tas kecil untuk perlengkapan sholat"
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Kesehatan",
    description: "Bawa obat pribadi, vitamin, dan masker.",
    details: [
      "Vaksin meningitis wajib",
      "Obat-obatan rutin pribadi",
      "Vitamin dan suplemen",
      "Hand sanitizer dan masker",
      "Plester dan obat luka",
      "Obat maag dan diare"
    ],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Buku Doa",
    description: "Buku panduan manasik dan kumpulan doa.",
    details: [
      "Download buku panduan manasik dari Kemenag",
      "Berisi tuntunan lengkap haji dan umrah",
      "Doa-doa thawaf dan sa'i",
      "Panduan ziarah ke tempat bersejarah"
    ],
    color: "bg-rose-light/15 text-rose-dark",
    externalLink: "https://cdn.kemenag.go.id/storage/archives/buku-tuntunan-manasik-haji-dan-umrah-1-2pdf.pdf",
  },
  {
    icon: Smartphone,
    title: "Komunikasi",
    description: "SIM card lokal atau paket roaming.",
    details: [
      "Aktifkan paket roaming sebelum berangkat",
      "Bawa power bank kapasitas besar",
      "Download offline maps Makkah & Madinah",
      "Simpan nomor darurat travel",
      "Siapkan aplikasi penerjemah"
    ],
    color: "bg-brown/10 text-brown",
  },
  {
    icon: Heart,
    title: "Niat Ikhlas",
    description: "Mohon maaf dan lunasi hutang piutang.",
    details: [
      "Mohon maaf kepada keluarga dan kerabat",
      "Lunasi semua hutang piutang",
      "Niatkan ibadah karena Allah",
      "Buat wasiat sebelum berangkat",
      "Titipkan anak dan keluarga"
    ],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: FileText,
    title: "Dokumen",
    description: "Paspor min. 6 bulan, visa, fotokopi KTP.",
    details: [
      "Paspor aktif minimal 6 bulan",
      "Visa umrah (diurus travel)",
      "Fotokopi KTP dan KK",
      "Pas foto 4x6 background putih",
      "Buku kuning vaksin",
      "Surat keterangan sehat"
    ],
    color: "bg-rose/10 text-rose-dark",
  },
];

interface TipCardProps {
  tip: typeof tips[0];
  index: number;
}

const TipCard = ({ tip, index }: TipCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (tip.externalLink) {
      window.open(tip.externalLink, '_blank', 'noopener,noreferrer');
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const xDir = index % 2 === 0 ? -15 : 15;
  return (
    <motion.div
      initial={{ opacity: 0, x: xDir, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.48, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-20px" }}
    >
      <Card
        className="border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 group cursor-pointer h-full relative"
        onClick={handleClick}
      >
        <CardContent className="p-3 md:p-4">
          {/* Click indicator icon */}
          <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
            {tip.externalLink ? (
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-accent" />
            ) : (
              <Info className="w-3 h-3 md:w-4 md:h-4 text-accent" />
            )}
          </div>
          
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${tip.color} flex items-center justify-center mb-2`}>
            <tip.icon className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <h3 className="font-sans font-semibold text-foreground text-xs md:text-sm mb-1 pr-4">
            {tip.title}
          </h3>
          <p className="font-sans text-[10px] md:text-xs text-muted-foreground leading-relaxed mb-2">
            {tip.description}
          </p>

          {!tip.externalLink && (
            <>
              <AnimatePresence>
                {isExpanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1 mb-2 overflow-hidden"
                  >
                    {tip.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[10px] md:text-xs">
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <button className="flex items-center gap-0.5 text-[10px] md:text-xs font-medium text-accent">
                {isExpanded ? "Tutup" : "Detail"}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </>
          )}

          {tip.externalLink && (
            <button className="flex items-center gap-1 text-[10px] md:text-xs font-medium text-accent">
              Download PDF
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TipsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary text-xs font-medium tracking-widest uppercase"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            Persiapan Umrah
          </motion.div>

          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Tips Perjalanan
          </h2>

          <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Persiapkan diri dengan baik untuk ibadah yang lebih lancar dan bermakna.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <TipCard key={tip.title} tip={tip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;