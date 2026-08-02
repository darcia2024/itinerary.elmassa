import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, MapPin, Clock, Plane, Building, Sunrise, Moon, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Activity {
  time?: string;
  description: string;
}

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number;
  date?: string;
  title: string;
  location: string;
  activities: Activity[];
  image?: string;
  highlight?: string;
}

type HighlightKey = "departure" | "umrah" | "worship" | "ziarah" | "travel";

const highlightConfig: Record<HighlightKey, {
  label: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  icon: typeof Plane;
  timeColor: string;
  timeBg: string;
  dotColor: string;
  lineColor: string;
}> = {
  departure: {
    label: "Perjalanan",
    badgeColor: "text-sky-700", badgeBg: "bg-sky-50", badgeBorder: "border-sky-200",
    icon: Plane,
    timeColor: "text-sky-700", timeBg: "bg-sky-50",
    dotColor: "bg-sky-500", lineColor: "bg-sky-200",
  },
  umrah: {
    label: "Ibadah Umroh",
    badgeColor: "text-amber-700", badgeBg: "bg-amber-50", badgeBorder: "border-amber-200",
    icon: Building,
    timeColor: "text-amber-700", timeBg: "bg-amber-50",
    dotColor: "bg-amber-500", lineColor: "bg-amber-200",
  },
  worship: {
    label: "Ibadah",
    badgeColor: "text-emerald-700", badgeBg: "bg-emerald-50", badgeBorder: "border-emerald-200",
    icon: Sunrise,
    timeColor: "text-emerald-700", timeBg: "bg-emerald-50",
    dotColor: "bg-emerald-500", lineColor: "bg-emerald-200",
  },
  ziarah: {
    label: "Ziarah",
    badgeColor: "text-rose-700", badgeBg: "bg-rose-50", badgeBorder: "border-rose-200",
    icon: Moon,
    timeColor: "text-rose-700", timeBg: "bg-rose-50",
    dotColor: "bg-rose-500", lineColor: "bg-rose-200",
  },
  travel: {
    label: "City Tour",
    badgeColor: "text-purple-700", badgeBg: "bg-purple-50", badgeBorder: "border-purple-200",
    icon: Star,
    timeColor: "text-purple-700", timeBg: "bg-purple-50",
    dotColor: "bg-purple-500", lineColor: "bg-purple-200",
  },
};

const defaultConfig = {
  label: "Kegiatan",
  badgeColor: "text-stone-600", badgeBg: "bg-stone-50", badgeBorder: "border-stone-200",
  icon: Star,
  timeColor: "text-stone-600", timeBg: "bg-stone-100",
  dotColor: "bg-stone-400", lineColor: "bg-stone-200",
};

const ItineraryModal = ({
  isOpen,
  onClose,
  day,
  date,
  title,
  location,
  activities,
  image,
  highlight,
}: ItineraryModalProps) => {
  const cfg = (highlight && highlightConfig[highlight as HighlightKey]) || defaultConfig;
  const Icon = cfg.icon;

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <DialogPrimitive.Portal forceMount>

            {/* Backdrop */}
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>

            {/* Centering container */}
            <DialogPrimitive.Content
              forceMount
              className="fixed inset-0 z-50 flex items-center justify-center p-4 focus:outline-none"
              aria-describedby={undefined}
              onClick={onClose}
            >
              <motion.div
                key="modal"
                initial={{ opacity: 0, y: 36, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-white"
                style={{ maxHeight: "88vh" }}
                onClick={(e) => e.stopPropagation()}
              >

                {/* ── Hero Image ── */}
                <div className="relative h-48 md:h-56 w-full flex-shrink-0 overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                      style={{ filter: "brightness(0.68) saturate(1.1)" }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-black" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5" />

                  {/* Close */}
                  <DialogPrimitive.Close
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
                  >
                    <X className="w-4 h-4" />
                    <span className="sr-only">Tutup</span>
                  </DialogPrimitive.Close>

                  {/* Day number */}
                  <div className="absolute top-4 left-4">
                    <p className="text-white/45 text-[9px] uppercase tracking-[0.22em] font-semibold leading-none mb-0.5">Hari</p>
                    <p
                      className="font-display font-extrabold leading-none text-white"
                      style={{ fontSize: "clamp(2.6rem, 9vw, 3.6rem)", textShadow: "0 3px 20px rgba(0,0,0,0.7)" }}
                    >
                      {String(day).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Category badge — top right, next to close */}
                  <div className="absolute top-3.5 right-14">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold border backdrop-blur-sm ${cfg.badgeBg} ${cfg.badgeColor} ${cfg.badgeBorder}`}>
                      <Icon className="w-3 h-3" />
                      {cfg.label}
                    </span>
                  </div>

                  {/* Title block */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                    {date && (
                      <p className="text-white/50 text-[10px] uppercase tracking-[0.18em] font-medium mb-1">{date}</p>
                    )}
                    <DialogPrimitive.Title className="font-serif font-bold text-white text-xl md:text-2xl leading-tight mb-1.5">
                      {title}
                    </DialogPrimitive.Title>
                    <div className="flex items-center gap-1.5 text-white/55 text-xs">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>

                {/* ── Activities — light background ── */}
                <div className="bg-white flex flex-col" style={{ minHeight: 0 }}>

                  {/* Section label */}
                  <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-stone-100 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-semibold">
                      Jadwal Kegiatan
                    </span>
                    <span className="ml-auto text-stone-300 text-[10px]">{activities.length} kegiatan</span>
                  </div>

                  <div className="overflow-y-auto" style={{ maxHeight: "42vh", WebkitOverflowScrolling: "touch" }}>
                    <ul className="px-5 pt-3 pb-10">
                      {activities.map((activity, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.28, delay: 0.06 + index * 0.05, ease: "easeOut" }}
                          className="flex gap-3 relative"
                        >
                          {/* Timeline spine */}
                          <div className="flex flex-col items-center flex-shrink-0 pt-[3px]">
                            <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ring-2 ring-white shadow-sm ${cfg.dotColor}`} />
                            {index < activities.length - 1 && (
                              <div className={`w-px flex-1 mt-1 mb-1 ${cfg.lineColor}`} style={{ minHeight: "1.5rem" }} />
                            )}
                          </div>

                          {/* Content block */}
                          <div className="flex-1 min-w-0 pb-4">
                            {activity.time ? (
                              <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md mb-1.5 ${cfg.timeBg}`}>
                                <Clock className={`w-3 h-3 flex-shrink-0 ${cfg.timeColor}`} />
                                <span className={`text-[11px] font-bold tracking-wide ${cfg.timeColor}`}>
                                  {activity.time}
                                </span>
                              </div>
                            ) : (
                              <div className="mb-1" />
                            )}
                            <p className="text-stone-700 text-sm leading-relaxed">
                              {activity.description}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            </DialogPrimitive.Content>

          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
};

export default ItineraryModal;
