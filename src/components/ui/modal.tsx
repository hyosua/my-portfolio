import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom"; // Import indispensable
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isImage?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, isImage = false }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      // On vérifie si le clic est sur l'overlay (l'élément avec le bg-black)
      // plutôt que de vérifier si c'est "hors du ref"
      if (modalRef.current && event.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // On écoute le clic sur la fenêtre entière
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // On utilise createPortal pour injecter le modal à la fin du <body>
  return createPortal(
    <div 
      ref={modalRef} // Le ref est maintenant sur l'overlay sombre
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm",
        isImage ? "bg-opacity-90" : "bg-opacity-50"
      )}
    >
      <div
        className={cn(
          "relative animate-in fade-in zoom-in duration-200",
          {
            "w-full max-w-2xl max-h-[85vh] p-6 bg-white rounded-lg shadow-xl dark:bg-gray-900 overflow-y-auto": !isImage,
            "max-w-[95vw] max-h-[95vh] p-0 bg-transparent shadow-none": isImage,
          }
        )}
        // On stop la propagation pour que le clic sur le contenu ne ferme pas le modal
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
        
        <button
          onClick={onClose}
          className={cn("absolute transition-all", {
            "top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white": !isImage,
            "top-2 right-2 md:top-0 md:right-12 text-white hover:scale-110": isImage,
          })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>,
    document.body // C'est ici que la magie opère
  );
};

export default Modal;