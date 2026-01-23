import { personalInfo } from "@/lib/data";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ThemeToggle from "./ui/theme-toggle";
import { useTranslations } from "@/i18n/utils";

export default function GlassHeader({ lang }: { readonly lang: "fr" | "en" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // Valeur par défaut
  const t = useTranslations(lang);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const blurVariant: Variants = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <header className="fixed top-4 w-full z-50 px-4">
      <nav className="max-w-4xl mx-auto backdrop-blur-xl bg-background/60 border border-border/40 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/5">
        <motion.a
          href={lang === "fr" ? "/" : "/en/"}
          className="text-sm font-bold tracking-tighter uppercase"
          initial="hidden"
          animate="visible"
          variants={blurVariant}
          custom={0}
        >
          {personalInfo.name}
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {["experience", "skills", "projects", "education","veille", "contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  activeSection === item
                    ? "text-foreground font-black"
                    : "text-muted-foreground"
                } hover:text-foreground`}
                initial="hidden"
                animate="visible"
                variants={blurVariant}
                custom={i + 1}
              >
                {t(`nav.${item}` as any)}
              </motion.a>
            ),
          )}
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-4 right-4 mt-2  flex flex-col items-center max-h-[80vh] overflow-y-auto bg-background/98 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-2xl shadow-primary/20 md:hidden"
            >
              {["experience", "skills", "projects", "education","veille", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-5 w-full text-xs text-center  font-medium border-b border-primary/30 last:border-0 transition-colors ${
                      activeSection === item
                        ? "text-foreground font-black bg-primary/10"
                        : "text-muted-foreground"
                    } hover:text-foreground`}
                  >
                    <span className="relative uppercase tracking-[0.2em]">
                      {t(`nav.${item}` as any)}
                    </span>
                  </a>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4">
          {/* Sélecteur de langue */}
          <div className="flex gap-3 border-r border-border/40 pr-4 mr-1">
            <a
              href="/"
              className={`text-[10px] font-bold ${
                lang === "fr" ? "text-foreground" : "text-muted-foreground/40"
              }`}
            >
              FR
            </a>
            <a
              href="/en/"
              className={`text-[10px] font-bold ${
                lang === "en" ? "text-foreground" : "text-muted-foreground/40"
              }`}
            >
              EN
            </a>
          </div>

          <ThemeToggle />

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
