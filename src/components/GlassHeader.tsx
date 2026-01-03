import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const blurVariant = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <header className="fixed top-4 w-full z-50 px-4">
      <nav className="max-w-4xl mx-auto backdrop-blur-xl bg-background/60 border border-border/40 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/5">
        <motion.a
          className="text-sm font-semibold tracking-tight uppercase"
          href="/"
          initial="hidden"
          animate="visible"
          variants={blurVariant}
        >
          {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["experience", "skills", "projects", "awards", "education"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={blurVariant}
              >
                {item}
              </motion.a>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-20 left-4 right-4 p-6 rounded-3xl backdrop-blur-2xl bg-background/90 border border-border/40 md:hidden"
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
          >
            <div className="flex flex-col gap-6 items-center">
              {["experience", "skills", "projects", "awards", "education"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-sm uppercase tracking-widest"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
