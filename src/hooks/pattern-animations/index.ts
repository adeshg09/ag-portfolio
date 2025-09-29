import {
  ANIMATION_CLASS,
  ANIMATION_CONFIG,
  PATTERN_SVG_ID,
} from "@/constants/pattern-background";
import { useEffect, useRef } from "react";

export const usePatternAnimation = () => {
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomPathIndices = (
    totalPaths: number,
    count: number
  ): Set<number> => {
    const indices = new Set<number>();

    while (indices.size < count) {
      const randomIndex = Math.floor(Math.random() * totalPaths);
      indices.add(randomIndex);
    }

    return indices;
  };

  const animatePaths = (paths: NodeListOf<SVGPathElement>) => {
    const { pathsToAnimate } = ANIMATION_CONFIG;
    const selectedIndices = getRandomPathIndices(paths.length, pathsToAnimate);

    selectedIndices.forEach((pathIndex) => {
      const path = paths[pathIndex];
      if (!path) return;

      path.classList.add(ANIMATION_CLASS);

      const handleAnimationEnd = () => {
        path.classList.remove(ANIMATION_CLASS);
        path.removeEventListener("animationend", handleAnimationEnd);
      };

      path.addEventListener("animationend", handleAnimationEnd);
    });
  };

  const startAnimation = () => {
    const paths = document.querySelectorAll<SVGPathElement>(
      `#${PATTERN_SVG_ID} path`
    );
    if (paths.length === 0) return;

    animatePaths(paths);

    timeoutRef.current = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(startAnimation);
    }, ANIMATION_CONFIG.animationInterval);
  };

  const stopAnimation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    startAnimation();
    return stopAnimation;
  }, []);

  return { startAnimation, stopAnimation };
};
