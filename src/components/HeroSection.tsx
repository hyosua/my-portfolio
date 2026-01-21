import { personalInfo } from "@/lib/data";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTranslations } from "@/i18n/utils";

export default function HeroSection({ lang }: { readonly lang: "fr" | "en" }) {
  const t = useTranslations(lang);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const blurIn: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
              variants={blurIn}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground font-light tracking-wide mb-8"
              variants={blurIn}
            >
              {t("hero.role")}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-6"
              variants={blurIn}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
              >
                <Mail size={16} strokeWidth={1.5} /> Email
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
              >
                <Github size={16} strokeWidth={1.5} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
              >
                <Linkedin size={16} strokeWidth={1.5} /> LinkedIn
              </a>
              <Button
                asChild
                variant="secondary"
                className="hover:scale-105 transition-transform duration-300"
              >
                <a
                  href={personalInfo.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.downloadCv")}
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div variants={blurIn} className="relative group">
            <div className="absolute -inset-0.5 bg-foreground/5 rounded-full blur-2xl transition duration-500"></div>
            <img
              src={personalInfo.profilePicture}
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-border"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-16 pt-16 border-t border-border/40"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl font-light">
            {t("hero.description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
