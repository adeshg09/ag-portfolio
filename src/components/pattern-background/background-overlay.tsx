import React from "react";

interface BackgroundOverlayProps {
  className?: string;
}

export const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({
  className = "",
}) => (
  <div
    className={`absolute inset-0 w-full h-full ${className}`}
    style={{
      backgroundImage:
        "radial-gradient(circle, transparent, rgb(0, 0, 0, 0.9))",
    }}
  />
);
