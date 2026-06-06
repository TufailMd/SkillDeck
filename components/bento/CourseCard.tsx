"use client";
import { motion } from "framer-motion";

import AnimatedProgressBar from "@/components/ui/AnimatedProgressBar";
import DynamicIcon from "@/components/ui/DynamicIcon";
import GlowCard from "@/components/ui/GlowCard";
import type { Course } from "@/lib/supabase/types";

import { itemVariants } from "./BentoGrid";

interface CourseCardProps {
  course: Course;
  animationDelay?: number;
}

function CourseCard({ course, animationDelay = 0 }: CourseCardProps) {
  return (
    <motion.div variants={itemVariants} transition={{ delay: animationDelay }}>
      <GlowCard className="p-5 flex flex-col gap-4 h-full cursor-pointer">
        <div className="relative z-10 flex flex-col gap-4 flex-1">
          <div className="w-12 h-12 rounded-lg bg-secondary-container/20 border border-secondary-container/30 flex items-center justify-center flex-0">
            <DynamicIcon
              name={course.icon_name}
              size={22}
              className="text-on-secondary-container"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-headline-md text-headline-md text-on-surface leading-snug">
              {course.title}
            </h3>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-technical-sm text-technical-sm text-on-surface-variant uppercase tracking-wider">
                Progress
              </span>
              <span className="font-technical-lg text-technical-lg text-primary-fixed">
                {course.progress}%
              </span>
            </div>
            <AnimatedProgressBar progress={course.progress} />
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default CourseCard;
