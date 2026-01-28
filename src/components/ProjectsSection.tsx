import React, { useState } from "react";
import Modal from "./ui/modal";
import { projects } from "@/lib/data.tsx";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/utils";
import { SiGithub } from "react-icons/si";
import { Link } from "lucide-react";

export default function ProjectsSection({
  lang,
}: {
  readonly lang: "fr" | "en";
}) {
  const t = useTranslations(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (project: any) => {
    const isMobile = window.innerWidth <= 768;
    const src = isMobile ? project.videoMobile : project.videoDesktop;
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
  {/* Lueur de fond pour la profondeur */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />

  <div className="container max-w-4xl mx-auto px-6 md:px-4">
    <MotionWrapper>
      <h2 className="text-3xl font-bold tracking-tighter mb-16 text-center md:text-left uppercase bg-clip-text text-transparent bg-linear-to-tr from-foreground to-primary">
        {t("section.projects")}
      </h2>
    </MotionWrapper>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <MotionWrapper key={project.title} delay={index * 0.1}>
          <div onClick={() => openModal(project)} className="cursor-pointer">
            <GlassCard className="group h-full flex flex-col border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl  overflow-hidden">
            <div className="relative overflow-hidden aspect-video">
              <motion.img
                src={project.image}
                alt={t(project.title as any)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Play */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="
                  bg-primary/90 p-3 rounded-full text-white shadow-xl
                  /* Sur mobile : toujours visible, taille normale */
                  opacity-100 scale-100 
                  /* Sur desktop (md:) : caché par défaut, apparaît au survol */
                  md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 
                  transition-all duration-300
                ">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

              </div>
            </div>

            <CardHeader className="bg-primary/5 border-b border-border/40">
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                {t(project.title as any)}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 pt-6">
              <CardDescription className="text-sm leading-relaxed text-muted-foreground/90">
                {t(project.description[0] as any)}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-6 items-center border-t border-border/40 bg-primary/5 py-4">
              <motion.a
                href={project.github}
                onClick={handleLinkClick}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                whileHover={{ x: 1 }}
              >
                <SiGithub size={16} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                {t("projects.viewOnGithub")}
              </motion.a>
              
              {project.website && (
                <motion.a
                  href={project.website}
                  onClick={handleLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                  whileHover={{ x: 1 }}
                >
                  <Link size={16} className="mr-2 group-hover/link:-rotate-12 transition-transform" />
                  {t("projects.visitWebsite")}
                </motion.a>
              )}
            </CardFooter>
          </GlassCard>
        </div>
        </MotionWrapper>
      ))}
    </div>
  </div>
  <Modal isOpen={isModalOpen} onClose={closeModal}>
    {videoSrc && (
      <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden rounded-xl bg-black"
    >
      <video
        src={videoSrc}
        controls
        muted
        autoPlay
        playsInline
        className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
      >
        <source src={videoSrc} type="video/webm" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </motion.div>
      
    )}
  </Modal>
</section>
  );
}
