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
    <section id="experience" className="py-24 relative">
  {/* Décoration d'arrière-plan */}
  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,var(--color-primary)/0.03,transparent_50%)] -z-10" />

  <div className="container max-w-4xl mx-auto px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold tracking-tighter mb-16 text-center md:text-left uppercase bg-clip-text text-transparent bg-linear-to-tr from-foreground to-primary"
        variants={blurIn}
      >
        {t("section.experience")}
      </motion.h2>

      <div className="space-y-16">
        {workExperience.map((job, index) => (
          <div key={job.company + job.period} className="group">
            <TimelineItem
              title={`${t(job.position as any)} — ${job.company}`}
              subtitle={job.location}
              date={job.period}
              isLast={index === workExperience.length - 1}
              index={index}
            >
              <motion.div
                className="mt-6 p-8 bg-card/50 backdrop-blur-xl rounded-3xl border border-border/50 shadow-xl shadow-primary/5 group-hover:border-primary/30 transition-colors duration-500"
                variants={blurIn}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase size={14} strokeWidth={2} />
                  </div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/80">
                    {t("experience.achievements")}
                  </h4>
                </div>

                <ul className="space-y-4">
                  {job.achievements.map((achievement) => (
                    <motion.li
                      key={achievement}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-4 group/item"
                      variants={blurIn}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300" />
                      <span className="group-hover/item:text-foreground transition-colors duration-300">
                        {t(achievement as any)}
                      </span>
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
