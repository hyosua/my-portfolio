import React from "react";
import { skills } from "@/lib/data.tsx";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { useTranslations } from "@/i18n/utils";

function SkillTag({
  skill,
  index,
}: {
  readonly skill: { name: string; icon: React.ReactNode };
  readonly index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.02 }}
      className="group/tag relative flex flex-col items-center justify-center px-4 py-3 
                bg-primary/5 hover:bg-primary/15 
                backdrop-blur-sm rounded-xl text-3xl 
                border border-primary/10 hover:border-primary/40 
                transition-all duration-300 ease-out
                hover:shadow-[0_0_20px_rgba(var(--color-primary),0.15)]"    >
<div className="text-primary/60 group-hover/tag:text-primary transition-colors duration-300">
        {skill.icon}
      </div>
      
      <span className="mt-2 text-[10px] uppercase tracking-tighter text-muted-foreground group-hover/tag:text-primary transition-colors duration-300 font-bold">
        {skill.name}
      </span>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection({
  lang,
}: {
  readonly lang: "fr" | "en";
}) {
  const t = useTranslations(lang);

  return (
    <section
  id="skills"
  className="py-24 relative overflow-hidden" // Suppression du bg-linear brut pour un contrôle plus fin
>
  {/* Effet d'ambiance en arrière-plan */}
  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10" />

  <div className="container max-w-4xl mx-auto px-6 md:px-4">
    <MotionWrapper>
      <h2 className="text-3xl font-bold tracking-tighter mb-16 text-center md:text-left uppercase bg-clip-text text-transparent bg-linear-to-tr from-foreground to-primary">
        {t("section.skills")}
      </h2>
    </MotionWrapper>

    <motion.div
      className="grid grid-cols-1 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {[
        { title: t("skills.frontend"), data: skills.frontendDevelopment },
        { title: t("skills.backend"), data: skills.backendDevelopment },
        { title: t("skills.database"), data: skills.databaseAndStorage },
        { title: t("skills.devops"), data: skills.cloudAndDevOps },
        { title: t("skill.tools"), data: skills.toolsAndServices },
      ].map((category) => (
        <motion.div key={category.title} variants={skillCategoryVariants} className="group">
          <GlassCard className="p-6 transition-all duration-500 border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
            <h3 className="text-sm font-bold mb-6 flex items-center gap-3 uppercase tracking-widest text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {category.data.map((skill, index) => (
                <SkillTag 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
  );
}
