"use client";
import { useEffect } from "react";

function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Dashboard Error]", error);
  }, [error]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[60vh] 
        text-center space-y-4 p-8"
    >
      <div className="bento-card p-8 max-w-md w-full space-y-4">
        <p
          className="font-technical-sm text-technical-sm text-error 
            uppercase tracking-wider"
        >
          Database Connection Error
        </p>
        <h2 className="font-headline-md text-headline-md text-on-surface">
          Could not load dashboard
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg bg-primary-container/20 
              text-primary-container border border-primary-container/30
              hover:bg-primary-container/30 transition-colors 
              font-technical-sm text-technical-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default DashboardError;
