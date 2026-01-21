import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ThemeToggle from "./ui/theme-toggle";
import { useTranslations } from "@/i18n/utils"; // Ne pas oublier l'import !

export default function GlassHeader({ lang }: { readonly lang: "fr" | "en" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations(lang);

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
          {["experience", "skills", "projects", "education", "contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
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
