"use client";
import { AnimatePresence } from "framer-motion";
import { Settings, GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";

import SidebarNavItem from "./SidebarNavItem";

const NAV_ITEMS = [
  { icon: "LayoutDashboard", label: "Dashboard", href: "/dashboard" },
  { icon: "GraduationCap", label: "Courses", href: "/dashboard/courses" },
  { icon: "Calendar", label: "Planner", href: "/dashboard/planner" },
  { icon: "BarChart2", label: "Analytics", href: "/dashboard/analytics" },
] as const;

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden md:flex fixed left-0 top-0 h-full w-18 flex-col items-center py-6 gap-2 border-r border-outline-variant bg-surface-container-lowest/80 backdrop-blur-md z-40"
    >
      <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary-container/60 to-secondary-container/60 border border-primary-container/30 flex items-center justify-center mb-4 shrink-0">
        <GraduationCap size={20} className="text-primary-container" />
      </div>

      {/* Nav items */}
      <div className="flex flex-col items-center gap-1 flex-1 w-full px-2">
        <AnimatePresence>
          {NAV_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
            />
          ))}
        </AnimatePresence>
      </div>

      <button
        id="sidebar-settings-btn"
        aria-label="Settings"
        className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
      >
        <Settings size={20} />
      </button>
    </nav>
  );
}

export default Sidebar;
