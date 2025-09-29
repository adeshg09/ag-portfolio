"use client";
import React, { useState } from "react";
import Image from "next/image";
import { workExperiences } from "@/constants";
import { morona } from "../../../public/fonts";
import CardCorners from "@/components/card-corners";

// Types
interface WorkExperience {
  id: number;
  name: string;
  pos: string;
  duration: string;
  title: string;
  icon: string;
  animation: string;
}

interface WorkExperienceItemProps {
  item: WorkExperience;
  onAnimationChange: (animation: string) => void;
}

interface WorkExperienceProps {
  className?: string;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  item,
  onAnimationChange,
}) => {
  /* Constants */
  const ACCENT_COLOR = "#61cc9c" as const;

  /* Functions */
  const handlePointerOver = (): void => {
    onAnimationChange(item.animation.toLowerCase());
  };

  const handlePointerOut = (): void => {
    onAnimationChange("idle");
  };

  const parseBulletPoints = (text: string): string[] => {
    // Split by bullet points (• character) and filter empty strings
    return text
      .split("•")
      .map((point) => point.trim())
      .filter((point) => point.length > 0);
  };

  const renderBulletPoints = (): React.ReactNode => {
    const bulletPoints = parseBulletPoints(item.title);

    return (
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li
            key={index}
            className="flex gap-3 transition-all duration-500 ease-in-out group-hover:text-white"
          >
            <span
              style={{ color: ACCENT_COLOR }}
              className="mt-1 flex-shrink-0"
            >
              •
            </span>
            <span className="flex-1">{point}</span>
          </li>
        ))}
      </ul>
    );
  };

  /* Output */
  return (
    <div
      onClick={handlePointerOver}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      className="grid grid-cols-[auto_1fr] items-start gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5 group"
      role="button"
      tabIndex={0}
      aria-label={`View ${item.name} experience`}
    >
      <div className="flex h-full flex-col items-center justify-start py-2">
        <div className="rounded-3xl w-16 h-16 p-2 bg-black-600">
          <Image
            src={item.icon}
            alt={`${item.name} logo`}
            width={100}
            height={100}
          />
        </div>
        <div
          className="flex-1 w-0.5 mt-4 h-full group-hover:bg-black-500 group-last:hidden"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
      </div>

      <div className="px-2.5 py-5 sm:p-5">
        <p className="font-bold text-white-800">{item.name}</p>
        <p className="text-sm">{item.pos}</p>
        <p className="mb-6 text-xs text-gray-400">{item.duration}</p>
        {renderBulletPoints()}
      </div>
    </div>
  );
};

const WorkExperience: React.FC<WorkExperienceProps> = ({ className = "" }) => {
  /* Constants */
  const SECTION_CONTENT = {
    subtitle: "a glimpse into my journey",
    title: "professional experience & internships",
  } as const;

  /* States */
  const [animationName, setAnimationName] = useState<string>("idle");

  /* Functions */
  const renderSectionHeader = (): React.ReactNode => (
    <div className="flex flex-col items-center text-2xl">
      <span className={`opacity-80 font-normal ${morona.className}`}>
        {SECTION_CONTENT.subtitle}
      </span>
      <h1 className="text-4xl md:text-4xl font-medium text-center">
        {SECTION_CONTENT.title}
      </h1>
    </div>
  );

  const renderExperienceCard = (): React.ReactNode => (
    <div className="gap-5 mt-12 w-full">
      <div className="flex flex-col justify-start items-start p-4 relative min-h-[250px] border bg-black/20 border-white/25 gap-8">
        <CardCorners />
        {workExperiences.map((item: WorkExperience) => (
          <WorkExperienceItem
            key={item.id}
            item={item}
            onAnimationChange={setAnimationName}
          />
        ))}
      </div>
    </div>
  );

  /* Output */
  return (
    <div
      className={`w-full text-white-600 flex flex-col items-center py-20 px-5 md:px-12 lg:px-20 xl:px-32 2xl:px-48 gap-10 ${className}`}
    >
      {renderSectionHeader()}
      {renderExperienceCard()}
    </div>
  );
};

export default WorkExperience;
