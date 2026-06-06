"use client";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

import { itemVariants } from "./BentoGrid";

interface HeroTileProps {
  name: string;
  date: string;
  streakDays: number;
}

function HeroTile({ name, date, streakDays }: HeroTileProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bento-card col-span-1 md:col-span-12 p-6 md:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[200px]"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="font-technical-sm text-technical-sm text-on-surface-variant uppercase tracking-widest mb-2">
              {date}
            </p>
            <h1 className="font-display text-headline-lg md:text-display text-on-surface leading-tight">
              Welcome back, {name}{" "}
              <span className="inline-block animate-bounce" aria-hidden="true">
                &#128075;{/* 👋 */}
              </span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              You&apos;re on a roll. Keep pushing through today&apos;s goals.
            </p>
          </div>

          {/* Streak badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-tertiary-fixed-dim/30 bg-tertiary-fixed-dim/10 shrink-0">
            <Flame
              size={18}
              className="text-tertiary-fixed-dim"
              style={{ filter: "drop-shadow(0 0 6px rgba(251,188,0,0.6))" }}
            />
            <span className="font-technical-lg text-technical-lg text-tertiary-fixed-dim">
              {streakDays}-day streak
            </span>
          </div>
        </div>

        {/* Decorative gradient bar */}
        <div className="mt-6 h-px w-full bg-linear-to-r from-primary-container/40 via-secondary-container/40 to-transparent" />
      </div>
    </motion.div>
  );
}

export default HeroTile;
