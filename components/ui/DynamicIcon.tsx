"use client";
import {
  Code2,
  Layers,
  Network,
  FileCode,
  BookOpen,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Code2,
  Layers,
  Network,
  FileCode,
  BookOpen,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

function DynamicIcon({ name, className, size = 24 }: DynamicIconProps) {
  const IconComponent = ICON_MAP[name] ?? BookOpen;

  return <IconComponent size={size} className={className} />;
}

export default DynamicIcon;
