import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoElmassa from "@/assets/logo-elmassa.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const sections = ["jadwal", "lokasi", "tips"];
      let found = false;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 100) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Home", id: "home" },
    { href: "#jadwal", label: "Itinerary", id: "jadwal" },
    { href: "#tips", label: "Tips", id: "tips" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh",
      "_blank"
    );
  };

  return (
    <>
      {/* ── Full navbar — visible only at top ── */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.header
            key="full-nav"
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -70, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#1c0c11]/40 backdrop-blur-md border-b border-rose-500/10"
          >
            <div className="max-w-6xl mx-auto px-5 md:px-8">
              <div className="flex items-center justify-between h-16 md:h-[68px]">

                {/* Logo */}
                <a
                  href="/"
                  className="flex items-center flex-shrink-0 group"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                  <img
                    src={logoElmassa}
                    alt="El Massa Tour & Travel"
                    className="h-8 md:h-9 w-auto brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </a>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center gap-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.href)}
                      className={`relative font-sans px-4 py-2 text-[12px] font-semibold tracking-widest uppercase transition-colors duration-200 ${
                        activeSection === link.id
                          ? "text-pink-300"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <motion.span
                          layoutId="underline"
                          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)]"
                        />
                      )}
                    </button>
                  ))}
                </nav>

                {/* Desktop CTA + Mobile hamburger */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={openWhatsApp}
                    className="hidden md:flex items-center gap-2 font-sans text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-[0_0_18px_rgba(244,114,182,0.35)] hover:shadow-[0_0_26px_rgba(244,114,182,0.55)] border border-pink-300/30 transition-all hover:scale-[1.02]"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Hubungi
                  </button>

                  {/* Mobile hamburger in full navbar */}
                  <button
                    className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-all"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <AnimatePresence mode="wait">
                      {isMobileMenuOpen ? (
                        <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                          <X className="w-5 h-5" />
                        </motion.span>
                      ) : (
                        <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                          <Menu className="w-5 h-5" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ── Floating hamburger — appears when scrolled ── */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            key="fab-menu"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="fixed top-4 right-4 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg shadow-black/15 border border-stone-100 text-stone-700 hover:bg-stone-50 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Dropdown menu — shared by both states ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: isScrolled ? 8 : -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: isScrolled ? 8 : -16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`fixed z-50 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden ${
                isScrolled
                  ? "top-[68px] right-4 w-64"
                  : "top-16 left-0 right-0"
              }`}
            >
              {/* Nav links */}
              <div className="px-2 pt-2 pb-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`flex w-full items-center justify-between px-4 py-3.5 text-sm font-sans font-medium rounded-xl transition-colors ${
                      activeSection === link.id
                        ? "text-brown bg-brown/5"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brown" />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="mx-4 h-px bg-stone-100" />

              {/* WhatsApp CTA */}
              <div className="p-2">
                <button
                  onClick={openWhatsApp}
                  className="w-full font-sans flex items-center justify-center gap-2.5 bg-brown hover:bg-brown-dark text-white rounded-xl py-3.5 text-sm font-semibold transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi via WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
