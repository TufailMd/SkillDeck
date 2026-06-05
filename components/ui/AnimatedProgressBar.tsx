"use client";
import { motion } from "framer-motion";

interface AnimatedProgressBarProps {
  progress: number;
}

function AnimatedProgressBar({ progress }: AnimatedProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden"
    >
      <motion.div
        className="progress-bar-fill h-full rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 1.2,
          ease: [0.34, 1.56, 0.64, 1],
          delay: 0.3,
        }}
      />
    </div>
  );
}

export default AnimatedProgressBar;
