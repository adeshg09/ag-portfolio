import React from "react";
import Image, { StaticImageData } from "next/image";
import BentoGrid from "@/components/bento-grid";
import { morona, plaster } from "../../../public/fonts";
import profileImage from "../../../public/assets/images/profile.png";

// Types
interface BiographyContent {
  firstName: string;
  lastName: string;
  profileImage: StaticImageData;
  profileAlt: string;
}

interface BiographyProps {
  className?: string;
}

const Biography: React.FC<BiographyProps> = ({ className = "" }) => {
  /* Constants */
  const BIOGRAPHY_CONTENT: BiographyContent = {
    firstName: "ADESH",
    lastName: "GADAGE",
    profileImage: profileImage,
    profileAlt: "Profile picture",
  } as const;

  const ACCENT_COLOR = "#61cc9c" as const;

  /* Functions */
  const renderProfileImage = (): React.ReactNode => (
    <div
      className="size-[65px] md:size-[100px] md:min-w-[100px] lg:size-[150px] lg:min-w-[150px] rounded-full border-2 p-[3px] sm:p-[5px]"
      style={{ borderColor: ACCENT_COLOR }}
    >
      <div className="relative h-full w-full rounded-full border border-white/40 overflow-hidden">
        <Image
          src={BIOGRAPHY_CONTENT.profileImage}
          alt={BIOGRAPHY_CONTENT.profileAlt}
          fill
          sizes="(max-width: 768px) 65px, (max-width: 1024px) 100px, 150px"
          className="object-cover"
          priority={true}
        />
      </div>
    </div>
  );

  const renderNameHeader = (): React.ReactNode => (
    <div
      className={`${plaster.className} flex items-center justify-center w-full gap-1 sm:gap-2 text-[40px] md:text-[80px] lg:text-[100px] xl:text-9xl`}
    >
      <h1
        className="text-transparent"
        style={{
          WebkitTextStroke: "1px white",
        }}
      >
        {BIOGRAPHY_CONTENT.firstName}
      </h1>

      {renderProfileImage()}

      <h1
        className="text-transparent"
        style={{
          WebkitTextStroke: "0.8px white",
        }}
      >
        {BIOGRAPHY_CONTENT.lastName}
      </h1>
    </div>
  );

  const renderBentoSection = (): React.ReactNode => (
    <div className="flex w-full mt-8 md:mt-16">
      <BentoGrid />
    </div>
  );

  /* Output */
  return (
    <div
      className={`relative mt-20 min-h-[100vh] w-screen md:mt-[150px] py-[50px] lg:py-[100px] flex flex-col items-center px-2 md:px-[20px] lg:px-8 xl:px-12 2xl:px-24 ${className}`}
    >
      {/* {renderNameHeader()} */}
      <div className={`flex flex-col items-center text-2xl`}>
        <span className={`opacity-80 font-normal ${morona.className}`}>
          all about me
        </span>
        <h1 className={`text-4xl md:text-4xl font-medium`}>
          in one simple grid
        </h1>
      </div>
      {renderBentoSection()}
    </div>
  );
};

export default Biography;
