import { personalInfo } from "@/lib/data.tsx";
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
    <section id="hero" className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* EFFET DE FOND : Pour le côté "chill/ambiance" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
              variants={blurIn}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-lg text-primary/80 font-medium tracking-wide mb-8"
              variants={blurIn}
            >
              {t("hero.role")}
            </motion.p>

            <motion.div className="flex flex-wrap justify-center md:justify-start gap-6" variants={blurIn}>
              {/* LIENS : On ajoute un hover avec la couleur primary */}
              <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                <Mail size={16} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" /> Email
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
                variant="default" 
                className="hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
              >
                <a href={personalInfo.cvPath} target="_blank" rel="noopener noreferrer">
                  {t("hero.downloadCv")}
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div variants={blurIn} className="relative group">
            <div className="absolute -inset-1 bg-linear-to-tr from-primary/40 to-primary/0 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            <img
              src={personalInfo.profilePicture}
              alt="Profile"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover transition-all duration-700 border-2 border-primary/20 group-hover:border-primary/50 shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 pt-16 border-t border-primary/10"
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
