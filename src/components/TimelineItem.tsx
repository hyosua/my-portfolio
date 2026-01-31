import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  readonly title: React.ReactNode;
  readonly subtitle: React.ReactNode;
  readonly date: string;
  readonly isLast?: boolean;
  readonly index?: number;
  readonly children?: React.ReactNode;
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center">
        {/* LA PUCE : Utilise maintenant la couleur Primary du thème */}
        <motion.div
          className="flex h-4.5 w-4.5 rounded-full border-2 border-primary bg-background z-10 shadow-[0_0_15px_rgba(var(--color-primary),0.2)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: index * 0.2 + 0.2,
          }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        {/* LA LIGNE : Gradient dynamique basé sur Primary */}
        {!isLast && (
          <motion.div
            className="w-px grow bg-linear-to-b from-primary/50 via-primary/20 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          />
        )}
      </div>

      <div className={cn("pb-12", isLast ? "pb-0" : "")}>
        <motion.div
          className="flex flex-col gap-1"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm font-medium text-primary/80 uppercase tracking-wider">
            {subtitle}
          </div>
          <p className="text-xs font-mono text-muted-foreground/60 mt-1 uppercase tracking-widest">
            {date}
          </p>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}