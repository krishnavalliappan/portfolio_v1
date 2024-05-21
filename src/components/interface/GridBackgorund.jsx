import React from "react";

export function GridBackground({ children }) {
  return (
    <div className="h-screen w-full bg-background  bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
