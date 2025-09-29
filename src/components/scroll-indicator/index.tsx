"use client";

import React, { useEffect, useState, useCallback } from "react";
import { sacramento } from "../../../public/fonts";

// Types
interface ScrollIndicatorProps {
  className?: string;
  position?: "left" | "right";
  showPercentage?: boolean;
  color?: string;
  width?: string;
  height?: string;
}

// Constants
const DEFAULT_CONFIG = {
  position: "right" as const,
  showPercentage: true,
  color: "#61cc9c",
  width: "w-1",
  height: "h-[80vh]",
  transitionDuration: "0.3s",
} as const;

const STYLES = {
  container:
    "hidden md:flex fixed top-[50%] translate-y-[-50%] bg-[#61cc9c]/[0.04] before:absolute before:w-full before:aspect-[1/2] before:top-0 before:border before:border-b-0 after:absolute after:w-full after:aspect-[1/2] after:bottom-0 after:border after:border-t-0",
  indicator: "absolute w-full h-0 top-0 rounded-full",
  percentage: "absolute top-[101%] font-semibold left-[50%] translate-x-[-50%]",
} as const;

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className = "",
  position = DEFAULT_CONFIG.position,
  showPercentage = DEFAULT_CONFIG.showPercentage,
  color = DEFAULT_CONFIG.color,
  width = DEFAULT_CONFIG.width,
  height = DEFAULT_CONFIG.height,
}) => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const calculateScrollPercentage = useCallback((): number => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight === 0) return 0;

    return Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
  }, []);

  const updateScrollIndicator = useCallback(() => {
    const percentage = calculateScrollPercentage();
    setScrollPercentage(Math.ceil(percentage));
  }, [calculateScrollPercentage]);

  useEffect(() => {
    // Initial calculation
    updateScrollIndicator();

    // Throttled scroll handler for better performance
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollIndicator();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollIndicator, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollIndicator);
    };
  }, [updateScrollIndicator]);

  const positionClass = position === "left" ? "left-8" : "right-8";

  const indicatorStyle: React.CSSProperties = {
    height: `${scrollPercentage}%`,
    backgroundImage: `linear-gradient(transparent, ${color})`,
    transition: `height ${DEFAULT_CONFIG.transitionDuration} ease`,
  };

  return (
    <div
      className={`${STYLES.container} ${positionClass} ${width} ${height} ${className}`}
      role="progressbar"
      aria-valuenow={scrollPercentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      {/* Scroll indicator bar */}
      <div
        className={STYLES.indicator}
        style={indicatorStyle}
        aria-hidden="true"
      />

      {/* Percentage display */}
      {showPercentage && (
        <span
          className={`${sacramento.className} ${STYLES.percentage}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {scrollPercentage}%
        </span>
      )}
    </div>
  );
};

export default ScrollIndicator;
