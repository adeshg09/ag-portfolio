"use client";
import React, { memo, useMemo } from "react";
import Link from "next/link";
import { PiFilePdfFill } from "react-icons/pi";
import { RiChatSmile3Line } from "react-icons/ri";
import { DynamicInteractiveGradientBg } from "@/lib/dynamic-imports";
import { DynamicGame } from "@/lib/dynamic-imports/client";
import { montserrat_alternates } from "../../../public/fonts";
import CardCorners from "../card-corners";
import { FancyButtonAlt } from "../fancy-button";
import SkillsShowcaseCard from "./skills-showcase-card";
import { contacts } from "@/constants";

interface TechStack {
  primary: string[];
  secondary: string[];
}

interface PersonalInfo {
  location: {
    country: string;
    state: string;
    city: string;
  };
  education: {
    degree: string;
    institution: string;
  };
  resume: {
    path: string;
  };
}

interface BentoGridProps {
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = memo(function BentoGrid({
  className = "",
}) {
  /* Constants */
  const TECH_STACK: TechStack = {
    primary: [
      "React",
      "Next",
      "TypeScript",
      "React Native",
      "Node",
      "Express",
      "MongoDB",
    ],
    secondary: [
      "Postgres",
      "MySQL",
      "Firebase",
      "AWS",
      "Google Cloud",
      "Docker",
      "Git",
      "Figma",
    ],
  } as const;

  const PERSONAL_INFO: PersonalInfo = {
    location: {
      country: "India",
      state: "Maharashtra",
      city: "Pune",
    },
    education: {
      degree: "B.E in Computer Engineering",
      institution:
        "International Institute of Information Technology (I2IT), Pune",
    },
    resume: {
      path: "https://drive.google.com/file/d/1vIVCJEovXas6yG_ybKe9FJBHTj-IwvEl/view?usp=sharing",
    },
  } as const;

  const ACCENT_COLOR = "#61cc9c" as const;

  /* Hooks */
  const renderTechStack = useMemo(
    () => ({
      primary: TECH_STACK.primary.map((item) => (
        <div
          key={item}
          className="bg-black rounded-lg px-4 py-2 text-sm whitespace-nowrap flex-shrink-0"
        >
          {item}
        </div>
      )),
      secondary: TECH_STACK.secondary.map((item) => (
        <div
          key={item}
          className="bg-black rounded-lg px-4 py-2 text-sm whitespace-nowrap flex-shrink-0"
        >
          {item}
        </div>
      )),
    }),
    []
  );

  /* Functions */
  const renderAddressCard = (): React.ReactNode => (
    <div className="relative flex flex-col items-center p-4 min-h-[250px] border border-white/25 bg-black/20 backdrop-blur-md col-span-2">
      <CardCorners />
      <h1 className={`${montserrat_alternates.className} font-semibold`}>
        Address
      </h1>
      <div className="flex flex-col items-center m-auto gap-2">
        <h1 className="text-2xl font-bold">
          {PERSONAL_INFO.location.country} ~ {PERSONAL_INFO.location.state}
        </h1>
        <span className="text-gray-400">{PERSONAL_INFO.location.city}</span>
      </div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('/assets/images/bento-grid/address-illustration.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );

  const renderEducationCard = (): React.ReactNode => (
    <div className="flex flex-col items-center p-4 relative min-h-[250px] border border-white/25 bg-black/20 backdrop-blur-md col-span-2">
      <CardCorners />
      <h1 className={`${montserrat_alternates.className} font-semibold`}>
        Education
      </h1>
      <div className="flex flex-col items-center m-auto gap-2">
        <h1 className="text-2xl font-bold text-center">
          {PERSONAL_INFO.education.degree}
        </h1>
        <span className="text-center text-gray-400">
          {PERSONAL_INFO.education.institution}
        </span>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('/assets/images/bento-grid/education-illustration.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );

  const renderTechStackCard = (): React.ReactNode => (
    <div className="flex flex-col justify-start items-start p-4 relative min-h-[250px] border bg-black/20 border-white/25 col-span-2 gap-8 overflow-hidden">
      <CardCorners />
      <DynamicInteractiveGradientBg />

      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <h1
          className={`relative ${montserrat_alternates.className} whitespace-nowrap font-semibold text-center `}
        >
          Tech Stack
        </h1>
        <span className="relative text-base text-center">
          a result of <i>half-a-decade</i> of continuous learning and
          self-improvements
        </span>
      </div>

      <div className="flex flex-col gap-2 mt-auto w-full relative">
        {/* First Row - Scrolling Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-2 animate-scroll-right">
            {renderTechStack.primary}
            {renderTechStack.primary}
          </div>
        </div>

        {/* Second Row - Scrolling Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-2 animate-scroll-left">
            {renderTechStack.secondary}
            {renderTechStack.secondary}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
      `}</style>
    </div>
  );

  const renderChessCard = (): React.ReactNode => (
    <div className="flex flex-col items-center p-4 relative min-h-[250px] border border-white/25 xl:row-span-2 col-span-3 xl:col-span-2 bg-black/20 backdrop-blur-md">
      <CardCorners />

      <span className="mb-4">
        Let&apos;s play a game of{" "}
        <b style={{ color: ACCENT_COLOR }}>Classic Chess😎</b>
      </span>

      <div className="relative my-auto w-full flex flex-col items-center">
        <DynamicGame />
      </div>
    </div>
  );

  const renderAvailabilityCard = (): React.ReactNode => (
    <div className="flex justify-center md:hidden p-4 xl:flex flex-col relative min-h-[250px] border border-white/25 bg-black/20 backdrop-blur-md">
      <CardCorners />
      <div className="flex flex-col items-center my-auto gap-4">
        <h2 className="text-xl font-bold text-center">
          Open to <span style={{ color: ACCENT_COLOR }}> Opportunities</span>
        </h2>
        <p className="text-sm text-gray-400 text-center max-w-[85%]">
          Full-time positions, Interships, contract work, or exciting projects
        </p>
      </div>

      <Link
        target="_blank"
        href={contacts[1].link}
        download={true}
        className="flex flex-col mt-auto"
      >
        <FancyButtonAlt icon={<RiChatSmile3Line />} title="Let's Connect" />
      </Link>
    </div>
  );

  const renderResumeCard = (): React.ReactNode => (
    <div className="hidden justify-center p-4 xl:flex flex-col relative min-h-[250px] border border-white/25 bg-black/20 backdrop-blur-md">
      <CardCorners />
      <h1 className="mx-auto">Download Resume</h1>
      <div
        className="flex-1 w-[65%] mt-1 mb-0 mx-auto"
        style={{
          backgroundImage:
            "url('/assets/images/bento-grid/resume-illustration.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />

      <Link
        target="_blank"
        href={PERSONAL_INFO.resume.path}
        download={true}
        className="flex flex-col mt-auto"
      >
        <FancyButtonAlt icon={<PiFilePdfFill />} title="Download" />
      </Link>
    </div>
  );

  /* Output */
  return (
    <div
      className={`flex flex-col md:grid md:grid-cols-6 md:grid-rows-2 xl:grid-rows-3 w-full flex-1 gap-4 ${className}`}
    >
      {renderAddressCard()}
      {renderEducationCard()}
      {renderTechStackCard()}
      <SkillsShowcaseCard />
      {renderChessCard()}
      {renderAvailabilityCard()}
      {renderResumeCard()}
    </div>
  );
});

export default BentoGrid;
