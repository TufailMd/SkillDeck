"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <motion.article
      className={`bento-card h-full hover:translate-y-[-5px] ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 0 24px rgba(0, 229, 255, 0.15), 0 8px 32px rgba(0,0,0,0.3)",
        borderColor: "rgba(0, 229, 255, 0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.article>
  );
}

export default GlowCard;
