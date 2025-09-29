"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type SmoothScrollProps = object;

const SmoothScroll: React.FC<SmoothScrollProps> = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
};

export default SmoothScroll;
