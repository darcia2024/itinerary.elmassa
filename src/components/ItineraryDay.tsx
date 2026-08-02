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
        <div className="group h-full rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-350 border border-black/[0.05] flex flex-col">

          {/* Image or fallback */}
          <div className="relative overflow-hidden flex-shrink-0" style={{ height: "clamp(100px, 22vw, 150px)" }}>
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-600 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon className="w-8 h-8 text-white/30" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            {/* Day badge */}
            <div className="absolute top-2 left-2">
              <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-primary rounded-full px-2 py-0.5 text-[9px] md:text-[10px] font-bold shadow-sm">
                Hari {day}{date ? ` · ${date}` : ""}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-2.5 md:p-3.5">
            {/* Location */}
            <div className="flex items-center gap-1 text-muted-foreground text-[9px] md:text-[10px] mb-1.5">
              <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
              <span className="truncate leading-tight">{location}</span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-semibold text-[11px] md:text-sm text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200 leading-snug flex-1">
              {title}
            </h3>

            {/* Activities preview — desktop only */}
            <ul className="hidden md:flex flex-col gap-1 mb-2.5">
              {activities.slice(0, 2).map((activity, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[10px]">
                  <span className={`w-1.5 h-1.5 ${accentDot} rounded-full mt-[3px] flex-shrink-0`} />
                  <span className="text-muted-foreground line-clamp-1 leading-tight">{activity.description}</span>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-auto flex items-center text-[9px] md:text-[10px] font-semibold text-primary group-hover:text-accent transition-colors duration-200">
              Lihat Detail
              <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
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
