import { workExperience } from "@/lib/data.tsx";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTranslations } from "@/i18n/utils";

export default function ExperienceSection({
  lang,
}: {
  readonly lang: "fr" | "en";
}) {
  const t = useTranslations(lang);
  // Définition des variantes pour l'effet de flou
  const blurIn: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter mb-12 text-center md:text-left uppercase"
            variants={blurIn}
          >
            {t("section.experience")}
          </motion.h2>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div key={job.company + job.period}>
                <TimelineItem
                  title={`${t(job.position as any)} — ${job.company}`}
                  subtitle={job.location}
                  date={job.period}
                  isLast={index === workExperience.length - 1}
                  index={index}
                >
                  <motion.div
                    className="mt-4 p-6 bg-secondary/30 backdrop-blur-md rounded-2xl border border-border/40 shadow-sm"
                    variants={blurIn}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase
                        className="h-4 w-4 text-muted-foreground"
                        strokeWidth={1.5}
                      />
                      <h4 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                        {t("experience.achievements")}
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {job.achievements.map((achievement) => (
                        <motion.li
                          key={achievement}
                          className="text-sm text-muted-foreground leading-relaxed flex gap-3"
                          variants={blurIn}
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                          {t(achievement as any)}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </TimelineItem>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
