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
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex flex-col items-center justify-center px-3 py-2 bg-muted/80 backdrop-blur-sm rounded-md text-3xl border border-purple-500/10 shadow-sm"
    >
      {skill.icon}
      <span className="mt-2 text-xs text-foreground">
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
      className="py-12 bg-linear-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center md:text-left uppercase">
            {t("section.skills")}
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                {t("skills.frontend")}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {skills.frontendDevelopment.map((skill, index) => (
                  <SkillTag key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                {t("skills.backend")}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {skills.backendDevelopment.map((skill, index) => (
                  <SkillTag key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                {t("skills.database")}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {skills.databaseAndStorage.map((skill, index) => (
                  <SkillTag key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                {t("skills.devops")}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {skills.cloudAndDevOps.map((skill, index) => (
                  <SkillTag key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                {t("skill.tools")}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {skills.toolsAndServices.map((skill, index) => (
                  <SkillTag key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
