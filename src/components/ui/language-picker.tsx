import { motion } from "framer-motion";

export default function LanguagePicker({
  currentLang,
}: {
  currentLang: string;
}) {
  return (
    <nav aria-label="Language selection" className="flex gap-2 text-[10px] font-bold tracking-widest border-l border-border/40 pl-4 ml-2">
      {["fr", "en"].map((lang) => (
        <motion.a
          key={lang}
          href={lang === "fr" ? "/" : "/en/"}
          aria-current={currentLang === lang ? "page" : undefined}
          className={`transition-colors hover:text-foreground ${
            currentLang === lang ? "text-foreground" : "text-muted-foreground"
          }`}
          whileHover={{ filter: "blur(0px)" }}
          initial={{ filter: "blur(2px)" }}
          animate={{ filter: "blur(0px)" }}
        >
          {lang.toUpperCase()}
        </motion.a>
      ))}
    </nav>
  );
}
