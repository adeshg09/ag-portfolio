"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaMobile, FaRegCopy } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";
import profileImage from "../../../../public/assets/images/profile.png";
import CardCorners from "@/components/card-corners";
import { FancyButtonAlt } from "@/components/fancy-button";
import { InteractiveGradientBg } from "@/components/interactive-gradient-bg";
import { poppins } from "../../../../public/fonts";

const SkillsShowcaseCard = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const skills = [
    {
      name: "Frontend Developer",
      icon: <FaReact />,
      position: { top: "10%", left: "15%" },
      color: "#61DAFB",
    },
    {
      name: "Backend Developer",
      icon: <FaNodeJs />,
      position: { top: "15%", right: "12%" },
      color: "#68A063",
    },
    {
      name: "Full Stack Developer",
      icon: <AiOutlineCode />,
      position: { bottom: "35%", left: "8%" },
      color: "#FF6B6B",
    },
    {
      name: "React Native Developer",
      icon: <FaMobile />,
      position: { bottom: "30%", right: "10%" },
      color: "#61DAFB",
    },
    // {
    //   name: "Next.js Developer",
    //   icon: <SiNextdotjs />,
    //   position: { top: "45%", left: "5%" },
    //   color: "#FFFFFF",
    // },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center p-4 min-h-[250px] border bg-black/20 border-white/25 xl:row-span-2 col-span-3 overflow-hidden">
      <CardCorners />
      <InteractiveGradientBg />

      {/* Skills Icons orbiting around profile */}
      <div className="absolute inset-0 flex items-center justify-center">
        {skills.map(({ name, icon, position, color }) => (
          <div
            key={name}
            className="absolute transition-all duration-300 ease-out cursor-pointer group"
            style={{
              ...position,
              transform: hoveredSkill === name ? "scale(1.2)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredSkill(name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Icon Circle */}
            <div
              className="relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl bg-black/60 border-2 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg"
              style={{
                borderColor: color,
                boxShadow:
                  hoveredSkill === name
                    ? `0 0 20px ${color}50`
                    : "0 0 0 transparent",
              }}
            >
              <span style={{ color }}>{icon}</span>
            </div>

            {/* Animated Badge on Hover */}
            {hoveredSkill === name && (
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-xs md:text-sm font-semibold animate-bounce backdrop-blur-md"
                style={{
                  backgroundColor: `${color}20`,
                  borderColor: color,
                  border: `2px solid ${color}`,
                  color: color,
                }}
              >
                {name}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Large Central Profile Image */}
      <div
        className="relative z-10 w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl cursor-pointer transition-all duration-500"
        onMouseEnter={() => setIsProfileHovered(true)}
        onMouseLeave={() => setIsProfileHovered(false)}
        style={{
          transform: isProfileHovered ? "scale(1.25)" : "scale(1)",
          boxShadow: isProfileHovered
            ? "0 0 40px rgba(97, 204, 156, 0.5)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          src={profileImage}
          alt="Profile"
          fill
          className="object-cover transition-all duration-500"
          style={{
            filter: isProfileHovered ? "grayscale(0%)" : "grayscale(100%)",
          }}
          priority
        />
      </div>

      {/* Name and Title */}
      <div className="relative z-10 mt-6 text-center">
        <h1
          className={`${poppins.className} text-2xl md:text-3xl font-semibold`}
        >
          Adesh Gadage
        </h1>
        <p className="text-sm md:text-base text-gray-400 mt-2">
          Full Stack Developer • Mobile App Developer
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="relative z-10 flex gap-4 mt-6">
        <div className="hidden xl:flex">
          <FancyButtonAlt icon={<FaRegCopy />} title="Copy Email" />
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcaseCard;
