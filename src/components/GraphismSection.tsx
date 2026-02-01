import React, { useState, useEffect } from "react";
import Modal from "./ui/modal";
import { logos } from "@/lib/data.tsx";
import {
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/utils";
import { Info } from "lucide-react";
import Markdown from "./ui/markdown";

// Simple hook to detect mobile screen size
const useIsMobile = (query: string = "(max-width: 768px)") => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Set initial value
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [query]);

  return isMobile;
};

export default function GraphismSection({
  lang,
}: {
  readonly lang: "fr" | "en";
}) {
  const t = useTranslations(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<any>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllLogos, setShowAllLogos] = useState(false);
  const isMobile = useIsMobile();

  const openModal = (logo: any) => {
    setSelectedLogo(logo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLogo(null);
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  const displayedLogos = isMobile && !showAllLogos ? logos.slice(0, 3) : logos;

  return (
    <section id="graphism" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tighter mb-2 text-center md:text-left uppercase bg-clip-text text-transparent bg-linear-to-tr from-foreground to-primary">
            {t("section.interests")}
          </h2>
          <h3 className="text-lg md:text-xl font-medium mb-8 text-center md:text-left text-muted-foreground">
            {t("section.graphism.description")}
          </h3>
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedLogos.map((logo, index) => (
            <MotionWrapper key={logo.title} delay={index * 0.1}>
              <div onClick={() => openModal(logo)} className="cursor-pointer">
                <GlassCard className="group h-full flex flex-col border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  <div className="relative overflow-hidden aspect-square">
                    <motion.img
                      src={logo.image}
                      alt={t(logo.title as any)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <div className="
                        bg-primary/90 p-3 rounded-full text-white shadow-xl
                        hidden md:block
                        md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 
                        transition-all duration-300
                      ">
                        <Info size={28} />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="bg-primary/5 border-t border-border/40">
                    <CardTitle className="text-xl text-center group-hover:text-primary transition-colors duration-300">
                      {logo.title}
                    </CardTitle>
                  </CardHeader>
                </GlassCard>
              </div>
            </MotionWrapper>
          ))}
        </div>
        {isMobile && !showAllLogos && logos.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllLogos(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              {t("logos.showMore")}
            </button>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedLogo && (
          <div className="flex flex-col gap-6 max-h-[85vh] overflow-y-auto p-2 scrollbar-thin">
            <h3 className="text-2xl font-bold mb-2 text-primary">{selectedLogo.title}</h3>
            
            {/* Brief */}
            <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
                    {t("logos.brief")}
                </h4>
                <div className="text-sm text-muted-foreground leading-relaxed">
                    <Markdown content={t(selectedLogo.brief)} />
                </div>
            </div>

            {/* Sketch */}
            {selectedLogo.sketch && (
            <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
                    {t("logos.sketch")}
                </h4>
                <img src={selectedLogo.sketch} alt="Sketch" className="rounded-lg shadow-lg" />
            </div>
            )}

            {/* Logo */}
            <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
                    {t("logos.logo")}
                </h4>
                <img src={selectedLogo.image} alt="Logo" className="rounded-lg shadow-lg bg-white p-4" />
            </div>

            {/* Mockups */}
            <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
                    {t("logos.mockups")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedLogo.mockups.map((mockup: string, index: number) => (
                        <img 
                            key={index} 
                            src={mockup} 
                            alt={`Mockup ${index + 1}`} 
                            className="rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
                            onClick={() => openImageModal(mockup)}
                        />
                    ))}
                </div>
            </div>

          </div>
        )}
      </Modal>

      {/* Image Fullscreen Modal */}
      <Modal isOpen={isImageModalOpen} onClose={closeImageModal} isImage={true}>
        {selectedImage && (
          <div 
            className="relative flex items-center justify-center w-full h-full" 
            onClick={closeImageModal} // Ferme si on clique sur l'overlay
          >
            <img 
              src={selectedImage} 
              alt="Selected Mockup" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} // EMPÊCHE la fermeture si on clique sur l'image elle-même
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
