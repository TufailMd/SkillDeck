"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

interface BentoGridProps {
  children: ReactNode;
}

function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-12 gap-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export default BentoGrid;
