import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plane, Building, Sunrise, Moon, ChevronRight } from "lucide-react";
import ItineraryModal from "./ItineraryModal";
import { motion } from "framer-motion";

interface Activity {
  time?: string;
  description: string;
}

interface ItineraryDayProps {
  day: number;
  date?: string;
  title: string;
  location: string;
  mapsUrl?: string;
  activities: Activity[];
  image?: string;
  highlight?: "departure" | "umrah" | "worship" | "ziarah" | "travel";
  index?: number;
}

const getIcon = (highlight?: string) => {
  switch (highlight) {
    case "departure":
    case "travel": return Plane;
    case "umrah": return Building;
    case "worship": return Sunrise;
    default: return Moon;
  }
};

const getAccentColor = (highlight?: string) => {
  switch (highlight) {
    case "departure": return "bg-blue-500";
    case "umrah": return "bg-accent";
    case "worship": return "bg-emerald-500";
    case "ziarah": return "bg-rose-400";
    case "travel": return "bg-purple-400";
    default: return "bg-primary";
  }
};

const ItineraryDay = ({
  day,
  date,
  title,
  location,
  activities,
  image,
  highlight,
  index = 0,
}: ItineraryDayProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Icon = getIcon(highlight);
  const accentDot = getAccentColor(highlight);

  const animX = index % 2 === 0 ? -18 : 18;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: animX, y: 16 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-20px" }}
        whileHover={{ y: -5, transition: { duration: 0.25 } }}
        className="h-full cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="group h-full rounded-2xl overflow-hidden bg-white/95 backdrop-blur-xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_35px_rgba(225,29,72,0.12)] transition-all duration-300 border border-stone-200/80 hover:border-rose-300 flex flex-col">

          {/* Image or fallback */}
          <div className="relative overflow-hidden flex-shrink-0" style={{ height: "clamp(110px, 24vw, 160px)" }}>
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-rose-700 via-pink-700 to-amber-700 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white/40" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-black/20 to-transparent" />

            {/* Day badge */}
            <div className="absolute top-2.5 left-2.5">
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-rose-600 to-pink-600 text-white border border-pink-300/40 rounded-xl px-2.5 py-1 text-[10px] md:text-[11px] font-black shadow-md tracking-wide">
                Hari {day}{date ? ` · ${date}` : ""}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-3.5 md:p-4 space-y-2">
            {/* Location */}
            <div className="flex items-center gap-1 text-[10px] md:text-[11px] font-extrabold text-rose-700 bg-rose-50 border border-rose-200/60 px-2 py-0.5 rounded-lg self-start">
              <MapPin className="w-3 h-3 flex-shrink-0 text-rose-500" />
              <span className="truncate leading-tight">{location}</span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-extrabold text-xs md:text-sm text-stone-900 line-clamp-2 group-hover:text-rose-600 transition-colors duration-200 leading-snug flex-1">
              {title}
            </h3>

            {/* Activities preview — desktop only */}
            <ul className="hidden md:flex flex-col gap-1.5 pt-1 border-t border-stone-100">
              {activities.slice(0, 2).map((activity, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] text-stone-700">
                  {activity.time && (
                    <span className="bg-stone-900 text-amber-300 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 border border-stone-700">
                      {activity.time}
                    </span>
                  )}
                  <span className="line-clamp-1 leading-tight font-medium">{activity.description}</span>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-auto pt-2 flex items-center justify-between text-[10px] md:text-[11px] font-extrabold text-rose-600 group-hover:text-rose-700 transition-colors">
              <span>Buka Rincian Lengkap</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>

      <ItineraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        day={day}
        date={date}
        title={title}
        location={location}
        activities={activities}
        image={image}
        highlight={highlight}
      />
    </>
  );
};

export default ItineraryDay;
