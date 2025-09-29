import React from "react";
import { stretch, morona, sacramento } from "../../../public/fonts";

// Types
interface HeroContent {
  brand: string;
  mainTitle: string;
  subtitle: string;
  emphasis: string;
  script: string;
  buttonTarget: string;
}

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  /* Constants */
  const HERO_CONTENT: HeroContent = {
    brand: "ag09.dev",
    mainTitle: "mmoodeern",
    subtitle: "problems require",
    emphasis: "opptimaLL",
    script: "solutions",
    buttonTarget: "projects",
  } as const;

  const SECTION_ID = "hero" as const;

  /* Functions */
  const renderBrandHeader = (): React.ReactNode => (
    <span className="text-base sm:text-lg text-gray-400 mb-4">
      {HERO_CONTENT.brand}
    </span>
  );

  const renderMainTitle = (): React.ReactNode => (
    <h1
      className={`${stretch.className} text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl`}
    >
      {HERO_CONTENT.mainTitle}
    </h1>
  );

  const renderSubtitleSection = (): React.ReactNode => (
    <div className="w-full flex items-center gap-4 md:gap-8">
      <span
        className={`${morona.className} text-center text-2xl sm:text-3xl md:text-6xl xl:text-[50px] 2xl:text-[60px] gap-4`}
      >
        {HERO_CONTENT.subtitle}
      </span>
      <div className="h-2 flex-1 bg-gray-50 rounded-lg" />
    </div>
  );

  const renderEmphasisSection = (): React.ReactNode => (
    <div className="relative">
      <span
        className={`${stretch.className} text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl`}
      >
        {HERO_CONTENT.emphasis}
      </span>
      <span
        className={`${sacramento.className} absolute bottom-2 md:bottom-3 right-1 text-3xl sm:text-4xl md:text-6xl xl:text-[60px] 2xl:text-[80px]`}
      >
        {HERO_CONTENT.script}
      </span>
    </div>
  );

  const renderMainContent = (): React.ReactNode => (
    <div className="flex flex-col items-center gap-3 lg:gap-5">
      {renderMainTitle()}
      {renderSubtitleSection()}
      {renderEmphasisSection()}
    </div>
  );

  const renderHeaderSection = (): React.ReactNode => (
    <div className="relative flex flex-col items-center w-fit mt-[100px] md:mt-[120px]">
      {renderBrandHeader()}
      {renderMainContent()}
    </div>
  );

  // const renderCallToAction = (): React.ReactNode => (
  //   <div className="mb-auto">
  //     <FancyButton target={HERO_CONTENT.buttonTarget} />
  //   </div>
  // );

  /* Output */
  return (
    <div
      id={SECTION_ID}
      className={`relative flex flex-col min-h-[100vh] px-2 items-center w-screen ${className}`}
    >
      {renderHeaderSection()}
      {/* {renderCallToAction()} */}
    </div>
  );
};

export default Hero;
