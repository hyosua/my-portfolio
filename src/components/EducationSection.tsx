import { education } from "@/lib/data.tsx";
import TimelineItem from "./TimelineItem";
import { Award } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/utils";
import Markdown from "./ui/markdown";

export default function EducationSection({
  lang,
}: {
  readonly lang: "fr" | "en";
}) {
  const t = useTranslations(lang);
  return (
    <section
      id="education"
      className="py-12 bg-linear-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tighter mb-16 text-center md:text-left uppercase bg-clip-text text-transparent bg-linear-to-tr from-foreground to-primary">
            {t("section.education")}
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={
                <a
                  href={edu.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t(edu.degree as any)}
                </a>
              }
              subtitle={
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  🏛️ {t(edu.institution as any)}
                </a>
              }
              date={`${edu.period}`}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3">
                📍 {edu.location}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <motion.div
                  className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-primary/20 dark:bg-card/10 dark:border-primary/10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 mr-2">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-sm text-primary font-medium">
                      {t("education.achievements")}
                    </h4>
                  </div>
                  <ul className="list-none ml-4 space-y-2 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      
                      <motion.li
                        key={achievement}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-4 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >                      
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300" />
                        <span className="group-hover/item:text-foreground transition-colors duration-300">
                          <Markdown content={t(achievement as any)} />
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
