"use client";

import {
  LayoutDashboard,
  GraduationCap,
  Calendar,
  BarChart2,
  type LucideProps,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  LayoutDashboard,
  GraduationCap,
  Calendar,
  BarChart2,
};

const NAV_ITEMS = [
  { icon: "LayoutDashboard", label: "Dashboard", href: "/dashboard" },
  { icon: "GraduationCap", label: "Courses", href: "/dashboard/courses" },
  { icon: "Calendar", label: "Planner", href: "/dashboard/planner" },
  { icon: "BarChart2", label: "Analytics", href: "/dashboard/analytics" },
] as const;

function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-10 flex items-center justify-around px-4 py-3 border-t border-outline-variant bg-surface-container-lowest/90 backdrop-blur-xl rounded-t-xl ">
      {NAV_ITEMS.map((item) => {
        const Icon = ICON_MAP[item.icon]
          ? ICON_MAP[item.icon]
          : LayoutDashboard;
        const isActive = pathname == item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            id={`bottom-nav-${item.label.toLowerCase()}`}
            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary-container" : "text-on-surface-variant"}`}
          >
            <Icon size={20} />
            <span className="font-technical-sm text-technical-sm">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export default BottomNav;
