"use client";
import React, { useEffect, useCallback } from "react";
import { PatternSVG } from "./pattern-svg";
import { BackgroundOverlay } from "./background-overlay";
import { BACKGROUND_CONFIG } from "@/constants/pattern-background";

interface PatternBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const PatternBackground: React.FC<PatternBackgroundProps> = ({
  className = "",
  children,
}) => {
  /* Functions */
  const fillPath = useCallback((paths: NodeListOf<SVGPathElement>) => {
    const selectedIndices = new Set<number>();

    while (selectedIndices.size < 5) {
      const pathIndex = Math.floor(Math.random() * paths.length);
      selectedIndices.add(pathIndex);
    }

    selectedIndices.forEach((pathIndex) => {
      const path = paths[pathIndex];
      path.classList.add("animate-animateSVG");

      const handleAnimationEnd = () => {
        path.classList.remove("animate-animateSVG");
        path.removeEventListener("animationend", handleAnimationEnd);
      };

      path.addEventListener("animationend", handleAnimationEnd);
    });
  }, []);

  const startAnimation = useCallback(() => {
    const paths: NodeListOf<SVGPathElement> =
      document.querySelectorAll("#pattern-bg path");
    let animationFrameId: number;

    const animatePaths = () => {
      fillPath(paths);
      animationFrameId = requestAnimationFrame(() =>
        setTimeout(animatePaths, 6000)
      );
    };

    animatePaths();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [fillPath]);

  /* Side-Effects */
  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, [startAnimation]);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-center ${className}`}
      style={BACKGROUND_CONFIG}
    >
      <PatternSVG />
      <BackgroundOverlay />
      {children}
    </div>
  );
};

export default PatternBackground;
