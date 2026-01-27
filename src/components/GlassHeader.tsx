import { personalInfo } from "@/lib/data.tsx";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ThemeToggle from "./ui/theme-toggle";
import { useTranslations } from "@/i18n/utils";

export default function GlassHeader({ lang }: { readonly lang: "fr" | "en" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // Valeur par défaut
  const [isDarkMode, setIsDarkMode] = useState(false); // New state for theme
  const t = useTranslations(lang);

  useEffect(() => {
    // Initial theme check
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    // Observer for theme changes (though ThemeToggle manipulates directly)
    // A more robust solution might involve context or a global state for theme.
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

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

  const logoSrc = isDarkMode ? "/logo/hc-logo-w.png" : "/logo/hc-logo-b.png";
  const logoAlt = personalInfo.name; // Use personalInfo.name as alt text

  return (
    <header className="fixed top-4 w-full z-50 px-4">
      <nav className="max-w-4xl mx-auto backdrop-blur-xl bg-background/70 border border-border/50 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-primary/5">
        <motion.a
          href={lang === "fr" ? "/" : "/en/"}
          initial="hidden"
          animate="visible"
          variants={blurVariant}
          custom={0}
          className="flex items-center hover:opacity-70 transition-opacity"
        >
          <img src={logoSrc} alt={logoAlt} className="h-5 w-auto" />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["experience", "skills", "projects", "education", "veille", "contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`relative text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeSection === item
                    ? "text-primary font-black scale-110" 
                    : "text-muted-foreground/80 hover:text-foreground"
                }`}
                initial="hidden"
                animate="visible"
                variants={blurVariant}
                custom={i + 1}
              >
                {t(`nav.${item}` as any)}
                {activeSection === item && (
                  <motion.span 
                    layoutId="activeDot"
                    className="absolute  top-1 -left-2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                  />
                )}
              </motion.a>
            ),
          )}
        </div>

        {/* Mobile Nav (Update colors here too) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-full left-4 right-4 mt-4 flex flex-col items-center bg-background/95 backdrop-blur-2xl border border-primary/20 rounded-3xl shadow-2xl md:hidden overflow-hidden"
            >
              {["experience", "skills", "projects", "education", "veille", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-6 w-full text-[10px] tracking-[0.3em] uppercase text-center font-bold border-b border-border/50 last:border-0 transition-all ${
                      activeSection === item
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t(`nav.${item}` as any)}
                  </a>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4">
          <div className="flex gap-3 border-r border-border/60 pr-4 mr-1">
            <a
              href="/"
              className={`text-[10px] font-black transition-colors ${
                lang === "fr" ? "text-primary" : "text-muted-foreground/30 hover:text-muted-foreground"
              }`}
            >
              FR
            </a>
            <a
              href="/en/"
              className={`text-[10px] font-black transition-colors ${
                lang === "en" ? "text-primary" : "text-muted-foreground/30 hover:text-muted-foreground"
              }`}
            >
              EN
            </a>
          </div>

          <div className="hover:scale-110 transition-transform">
            <ThemeToggle />
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
