import type { ReactNode } from "react";

interface SkeletonTileProps {
  className?: string;
  children?: ReactNode;
}

function SkeletonTile({ children, className = "" }: SkeletonTileProps) {
  return (
    <div className={`skeleton-shimmer ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}

export default SkeletonTile;
