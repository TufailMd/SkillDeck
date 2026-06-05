"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  GraduationCap,
  Calendar,
  BarChart2,
  type LucideProps,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  LayoutDashboard: LayoutDashboard,
  GraduationCap: GraduationCap,
  Calendar: Calendar,
  BarChart2: BarChart2,
};

interface SidebarNavItemProps {
  icon: string;
  label: string;
  href: string;
  isActive: boolean;
}

function SidebarNavItem({ icon, label, href, isActive }: SidebarNavItemProps) {
  const Icon = ICON_MAP[icon] ? ICON_MAP[icon] : LayoutDashboard;

  return (
    <Link
      href={href}
      id={`nav-${label.toLowerCase()}`}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
      className="relative w-full flex items-center justify-center h-10 rounded-lg group"
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-surface-variant/30 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}
      </AnimatePresence>

      {isActive && (
        <motion.div
          layoutId="active-indicator"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary-container rounded-l-full"
          style={{ boxShadow: "0 0 8px rgba(0, 229, 255, 0.6)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}

      <Icon
        size={20}
        className={`relative z-10 transition-colors ${
          isActive
            ? "text-primary-container"
            : "text-on-surface-variant group-hover:text-on-surface"
        }`}
      />
    </Link>
  );
}

export default SidebarNavItem;
// git commit -m "feat: add animated sidebar navigation item with framer-motion and lucide icons"
