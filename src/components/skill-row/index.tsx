"use client";

import Image from "next/image";
import { memo, useEffect, useRef, useState, useCallback } from "react";

interface Skill {
  name: string;
  img: string;
}

interface SkillRowProps {
  skills: Skill[];
  reverse?: boolean;
}

const BREAKPOINT_MD = 768;
const CARD_WIDTH_MOBILE = 150;
const CARD_WIDTH_DESKTOP = 250;
const INTERSECTION_ROOT_MARGIN = "50px";
const ANIMATION_DELAY_MULTIPLIER = 30;

const SkillRow = memo<SkillRowProps>(function SkillRow({
  skills,
  reverse = false,
}) {
  const [isMdBreakpoint, setIsMdBreakpoint] = useState(false);

  const skillsRef = useRef<HTMLDivElement>(null);

  const containerWidth = isMdBreakpoint
    ? skills.length * CARD_WIDTH_DESKTOP
    : skills.length * CARD_WIDTH_MOBILE;

  const handleResize = useCallback(() => {
    setIsMdBreakpoint(window.innerWidth > BREAKPOINT_MD);
  }, []);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0,
      rootMargin: INTERSECTION_ROOT_MARGIN,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const skillElements = entry.target.querySelectorAll<HTMLElement>(
          "[data-skill-element]"
        );
        const playState = entry.isIntersecting ? "running" : "paused";

        skillElements.forEach((element) => {
          element.style.animationPlayState = playState;
        });
      });
    }, options);

    const skillsElement = document.querySelector("#skills");
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Set initial value
    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    return () => resizeObserver.disconnect();
  }, [handleResize]);

  const renderSkillCards = () => {
    return skills.map((skill, index) => (
      <div
        key={`${skill.name}-${index}`}
        data-skill-element
        className={`
          absolute h-20 w-[150px] md:h-[100px] md:w-[250px]
          bg-black rounded-lg border border-white/50
          flex items-center justify-center
          transition-all
          ${
            reverse
              ? "right-full animate-animateSkillsReverse"
              : "left-full animate-animateSkills"
          }
        `}
        style={{
          boxShadow: "0 10px 24px -20px #61cc9c",
          animationDelay: `${
            (index * ANIMATION_DELAY_MULTIPLIER) / skills.length
          }s`,
        }}
      >
        <Image
          src={skill.img}
          alt={`${skill.name} logo`}
          height={100}
          width={100}
          className="absolute left-2 h-4/5 w-auto object-contain opacity-60"
          loading="lazy"
          sizes="(max-width: 768px) 150px, 250px"
        />
        <h1 className="z-10 text-white font-medium">{skill.name}</h1>
      </div>
    ));
  };

  return (
    <div
      ref={skillsRef}
      className="relative h-[100px] flex items-center overflow-hidden"
      style={{
        width: `${containerWidth}px`,
        maskImage: "radial-gradient(circle, black, transparent)",
      }}
    >
      {renderSkillCards()}
    </div>
  );
});

SkillRow.displayName = "SkillRow";

export default SkillRow;
export type { Skill, SkillRowProps };
