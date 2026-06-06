"use client";
import { motion } from "framer-motion";

import { itemVariants } from "./BentoGrid";

interface ActivityTileProps {
  heatmapData?: number[];
}

const DEFAULT_HEATMAP_DATA: number[] = [
  0, 1, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 0, 0, 1,
  2, 3, 4, 3, 2, 1, 0, 1, 2, 1, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 0, 1, 2, 1, 0, 1,
  2, 3, 4, 3, 2, 1, 1, 2, 3, 2, 1, 0, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 2, 1, 0,
  1, 2, 3, 2, 1, 0,
];

const INTENSITY_CLASSES: Record<number, string> = {
  0: "bg-surface-variant",
  1: "bg-primary-container/30",
  2: "bg-primary-container/55",
  3: "bg-primary-container/80",
  4: "bg-primary-container",
};

const COLS = 12;
const ROWS = 7;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function ActivityTile({
  heatmapData = DEFAULT_HEATMAP_DATA,
}: ActivityTileProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bento-card col-span-1 md:col-span-12 p-6"
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Activity
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Learning consistency over the last 84 days
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-technical-sm text-technical-sm text-on-surface-variant">
              Less
            </span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${INTENSITY_CLASSES[level]}`}
                style={
                  level === 4 ? { boxShadow: "0 0 5px #00e5ff" } : undefined
                }
              />
            ))}
            <span className="font-technical-sm text-technical-sm text-on-surface-variant">
              More
            </span>
          </div>
        </div>

        {/* Month labels */}
        <div className="flex mb-1 pl-8">
          {MONTHS.slice(0, COLS).map((month) => (
            <div
              key={month}
              className="flex-1 font-technical-sm text-technical-sm text-on-surface-variant text-center"
            >
              {month}
            </div>
          ))}
        </div>

        {/* Grid: day labels + heatmap cells */}
        <div className="flex gap-1">
          {/* Day-of-week labels */}
          <div className="flex flex-col gap-1 mr-1">
            {DAYS.map((day) => (
              <div
                key={day}
                className="h-4 flex items-center font-technical-sm text-technical-sm text-on-surface-variant text-right w-7"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Heatmap cells rendered column-major (col × row) */}
          <div className="flex gap-1 flex-1">
            {Array.from({ length: COLS }).map((_, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-1 flex-1">
                {Array.from({ length: ROWS }).map((_, rowIdx) => {
                  const intensity = heatmapData[rowIdx * COLS + colIdx] ?? 0;
                  return (
                    <div
                      key={rowIdx}
                      className={`h-4 rounded-sm transition-colors ${INTENSITY_CLASSES[intensity]}`}
                      style={
                        intensity === 4
                          ? { boxShadow: "0 0 5px rgba(0,229,255,0.5)" }
                          : undefined
                      }
                      aria-label={`Day: intensity ${intensity}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ActivityTile;
