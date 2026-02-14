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
import { useIsMobile } from "@/lib/hooks";
import { SiGithub } from "react-icons/si";
import { Info, Link } from "lucide-react";
import Markdown from "./ui/markdown";

export default function ProjectsSection({
  lang,
}: {
  readonly lang: "fr" | "en";
}) {
  const t = useTranslations(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = useIsMobile();

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const displayedProjects =
    isMobile && !showAllProjects ? projects.slice(0, 3) : projects;

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
          {displayedProjects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.1}>
              <div
                onClick={() => openModal(project)}
                className="cursor-pointer"
              >
                <GlassCard className="group h-full flex flex-col border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl  overflow-hidden">
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={project.image}
                      alt={t(project.title as any)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Play */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <div
                        className="
                  bg-primary/90 p-3 rounded-full text-white shadow-xl
                  hidden md:block
                  /* Sur desktop (md:) : caché par défaut, apparaît au survol */
                  md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 
                  transition-all duration-300
                "
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="28"
                          height="28"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] font-bold uppercase text-muted-foreground shadow-sm">
                      <Info size={16} className="text-primary" />
                      {t("projects.details")}
                    </div>
                  </div>

                  <CardHeader className="bg-primary/5 border-b border-border/40">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {t(project.title as any)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 pt-6">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground/90">
                      <Markdown
                        content={t(project.description[0] as any)}
                      />
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
                      <SiGithub
                        size={16}
                        className="mr-2 group-hover/link:rotate-12 transition-transform"
                      />
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
                        <Link
                          size={16}
                          className="mr-2 group-hover/link:-rotate-12 transition-transform"
                        />
                        {t("projects.visitWebsite")}
                      </motion.a>
                    )}
                  </CardFooter>
                </GlassCard>
              </div>
            </MotionWrapper>
          ))}
        </div>
        {isMobile && !showAllProjects && projects.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllProjects(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              {t("logos.showMore")}
            </button>
          </div>
        )}
      </div>
  <Modal isOpen={isModalOpen} onClose={closeModal} closeLabel={t("common.close" as any)}>
    {selectedProject && (
    <div className="flex flex-col gap-6 max-h-[85vh] overflow-y-auto p-2 scrollbar-thin">
      
      {/* SECTION VIDÉO */}
      <div className="lg:sticky lg:top-0 h-fit">
        <video
          key={selectedProject.title}
          controls
          muted
          autoPlay
          playsInline
          className="w-full max-h-[50vh] object-cover lg:max-h-full rounded-lg shadow-lg bg-black"
        >
          <source src={selectedProject.videoDesktop} type="video/webm" media="(min-width: 769px)" />
          <source src={selectedProject.videoMobile.replace('.webm', '.mp4')} type="video/mp4" media="(max-width: 768px)" />
          <source src={selectedProject.videoMobile} type="video/webm" media="(max-width: 768px)" />
          <source src={selectedProject.videoDesktop} type="video/webm" />
        </video>
      </div>

      {/* SECTION INFOS*/}
     <div className="flex flex-col gap-6 overflow-y-auto pr-2">
      {/* Titre et Tags */}
      <div>
        <h3 className="text-2xl font-bold mb-2 text-primary">{t(selectedProject.title)}</h3>
        <div className="text-sm text-muted-foreground leading-relaxed">
          <Markdown content={t(selectedProject.context)} />
        </div>
      </div>

      {/* Choix des outils */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
          {t("projects.stack-choice")} 
        </h4>
        <ul className="space-y-2">
          {selectedProject.stackChoices.map((key:string) => (
            <li key={key} className="text-sm text-muted-foreground flex gap-3 group hover:bg-primary/10 p-2 rounded-md transition-colors">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              <Markdown content={t(key as any)} />
            </li>
          ))}
        </ul>
      </div>
      {/* Réalisations (fonctionnalités) */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
          {t("projects.achievements")}
        </h4>
        <ul className="space-y-2">
          {selectedProject.achievements.map((key:string) => (
            <li key={key} className="text-sm text-muted-foreground flex gap-3 group hover:bg-primary/10 p-2 rounded-md transition-colors">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              <Markdown content={t(key as any)} />
            </li>
          ))}
        </ul>
      </div>

      {/* Défis techniques */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2  ">
          {t("projects.challenges")}
        </h4>
        <ul className="space-y-2">
          {selectedProject.challenges.map((key: string) => (
            <li key={key} className="text-sm text-muted-foreground flex gap-3 group hover:bg-primary/10 p-2 rounded-md transition-colors">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              <Markdown content={t(key as any)} />
            </li>
          ))}
        </ul>
      </div>

      {/* Bilan */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          {t("projects.results")}
        </h4>
        <ul className="space-y-2">
          {selectedProject.results.map((key:string) => (
            <li key={key} className="text-sm text-muted-foreground flex gap-3 group hover:bg-primary/10 p-2 rounded-md transition-colors">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              <Markdown content={t(key as any)} />
            </li>
          ))}
        </ul>
      </div>

      
    </div>
    </div>
  )}
  </Modal>
</section>
  );
}
