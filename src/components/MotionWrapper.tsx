import React from "react";
import { motion } from "framer-motion";
import type { Variants, HTMLMotionProps } from "framer-motion";

// On étend HTMLMotionProps pour conserver l'accès aux props HTML classiques (id, className, etc.)
interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  readonly children: React.ReactNode;
  readonly delay?: number;
}

// Les animations utilisant le scale pour un effet "chill" et organique
const scaleAnimations: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95, // Commencer légèrement plus petit
    filter: "blur(4px)" // Optionnel : ajoute un léger flou pour la douceur
  },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.16, 1, 0.3, 1], // Cubic-bezier pour une sortie très fluide
    },
  }),
};

export default function MotionWrapper({
  children,
  delay = 0,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scaleAnimations}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
}