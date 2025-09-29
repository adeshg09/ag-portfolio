import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { projects } from "@/constants";
import { morona, montserrat_alternates } from "../../../public/fonts";

// Types
interface Project {
  title: string;
  description: string;
  techs: string[];
  thumbnail: string;
  link?: string;
}

interface ProjectsContent {
  sectionTitle: string;
  subtitle: string;
  githubUrl: string;
}

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = "" }) => {
  /* Constants */
  const PROJECTS_CONTENT: ProjectsContent = {
    sectionTitle: "recent projects",
    subtitle: "collection of my",
    githubUrl: "https://github.com/adeshg09",
  } as const;

  const ACCENT_COLOR = "#61cc9c" as const;
  const BACKGROUND_COLOR = "#09130f" as const;
  const SECTION_ID = "projects" as const;

  /* Hooks */
  // No custom hooks needed for this component

  /* States */
  // No state management needed for this component

  /* Functions */
  const renderSectionHeader = (): React.ReactNode => (
    <div className="flex flex-col items-center text-2xl">
      <span className={`opacity-80 font-normal ${morona.className}`}>
        {PROJECTS_CONTENT.subtitle}
      </span>
      <h1 className="text-4xl md:text-4xl font-medium">
        {PROJECTS_CONTENT.sectionTitle}
      </h1>
    </div>
  );

  const renderProjectTechs = (techs: string[]): React.ReactNode => (
    <div className="flex mt-4 mb-5 justify-center gap-4">
      {techs.map((tech, id) => (
        <div
          key={id}
          className="size-[40px] md:size-[50px]"
          style={{
            backgroundImage: `url(${tech})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </div>
  );

  const renderProjectCard = (
    project: Project,
    index: number
  ): React.ReactNode => (
    <div
      key={index}
      className="relative min-w-[100%] h-full snap-center flex flex-col items-center pt-14 md:pt-[100px] px-2 md:px-4"
      style={{ backgroundColor: ACCENT_COLOR }}
    >
      <Link href={project.link || PROJECTS_CONTENT.githubUrl} target="_blank">
        <div
          className={`group relative flex items-center gap-2 md:gap-4 text-2xl md:text-5xl lg:text-6xl text-black/80 font-bold ${montserrat_alternates.className}`}
        >
          {project.title}
          <div className="size-[20px] md:size-[30px] text-xl md:text-2xl group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-[35deg] transition-transform">
            <FaArrowRightLong />
          </div>
        </div>
      </Link>

      <span className="text-base text-black/80 mt-2 max-w-[90%] md:max-w-[65%] lg:max-w-[28%] text-center font-medium">
        {project.description}
      </span>

      {renderProjectTechs(project.techs)}

      <div
        className="flex-1 flex items-center justify-center w-full lg:w-[60%]"
        style={{
          backgroundImage: `url(${project.thumbnail})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />
    </div>
  );

  const renderProjectsCarousel = (): React.ReactNode => (
    <div className="relative flex items-center w-full h-[50vh] md:h-[70vh] lg:h-[80vh] translate-y-[-20px] overflow-hidden">
      <div
        className="absolute overflow-hidden left-0 w-full h-full"
        style={
          {
            "--bg-color": BACKGROUND_COLOR,
          } as React.CSSProperties
        }
      >
        <div
          className="absolute content-[''] top-[-1px] left-1/2 -translate-x-1/2 w-[110%] h-[30%] rounded-[100%] translate-y-[-70%] z-10"
          style={{ backgroundColor: BACKGROUND_COLOR }}
        />
        <div
          className="absolute content-[''] bottom-[-1px] left-1/2 -translate-x-1/2 w-[110%] h-[30%] rounded-[100%] translate-y-[70%] z-10"
          style={{ backgroundColor: BACKGROUND_COLOR }}
        />
      </div>

      <div
        className="relative flex items-center w-full h-full gap-[5%] overflow-x-scroll"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        <div />
        {projects.map((project: Project, index: number) =>
          renderProjectCard(project, index)
        )}
        <div />
      </div>
    </div>
  );

  /* Side-Effects */
  // No side effects needed for this component

  /* Output */
  return (
    <div
      id={SECTION_ID}
      className={`relative w-screen min-h-[100vh] flex flex-col items-center justify-center py-10 md:py-20 md:pb-20 lg:pt-[80px] xl:mt-20 gap-8 ${className}`}
    >
      {renderSectionHeader()}
      {renderProjectsCarousel()}
      <HScrollIndicator accentColor={ACCENT_COLOR} />
    </div>
  );
};

export default Projects;

// Scroll Indicator Component
interface HScrollIndicatorProps {
  accentColor: string;
}

const HScrollIndicator: React.FC<HScrollIndicatorProps> = ({ accentColor }) => {
  /* Constants */
  const INDICATOR_DOTS = [0, 1, 2] as const;

  /* Functions */
  const renderScrollText = (): React.ReactNode => (
    <div className="flex items-center gap-3">
      <div
        className="h-[1px] w-16 bg-gradient-to-r from-transparent to-transparent animate-slide-right"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
        }}
      />
      <span className="text-xs uppercase tracking-wider text-white/60">
        scroll
      </span>
      <div
        className="h-[1px] w-16 bg-gradient-to-r from-transparent to-transparent animate-slide-left"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
        }}
      />
    </div>
  );

  const renderIndicatorDots = (): React.ReactNode => (
    <div className="flex gap-2">
      {INDICATOR_DOTS.map((i) => (
        <div
          key={i}
          className="h-1.5 w-1.5 rounded-full animate-pulse"
          style={{
            backgroundColor: `${accentColor}30`,
            animationDelay: `${i * 200}ms`,
          }}
        />
      ))}
    </div>
  );

  /* Output */
  return (
    <div className="absolute bottom-20 flex flex-col items-center gap-4 mt-4 select-none pointer-events-none">
      {renderScrollText()}
      {renderIndicatorDots()}
    </div>
  );
};
