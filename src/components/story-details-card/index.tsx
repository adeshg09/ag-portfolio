"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface ProfileData {
  name: string;
  email: string;
  address: string;
  phone: string;
  nationality: string;
  birthDate: string;
  gender: string;
}

interface StoryContent {
  title: string;
  profileTitle: string;
  storyText: string;
  accentColor: string;
}

interface ButtonConfig {
  baseStyles: string;
  cornerStyles: string;
  textStyles: string;
  iconStyles: string;
}

interface StoryAndDetailsCardProps {
  className?: string;
}

const StoryAndDetailsCard: React.FC<StoryAndDetailsCardProps> = ({
  className = "",
}) => {
  /* Constants */
  const PROFILE_DATA: ProfileData = {
    name: "Adesh Gadage",
    email: "adeshgadage0908@gmail.com",
    address: "Pune",
    phone: "+91 9322342112",
    nationality: "Indian",
    birthDate: "09-12-2004",
    gender: "Male",
  } as const;

  const STORY_CONTENT: StoryContent = {
    title: "From Curiosity to Code",
    profileTitle: "Profile",
    storyText: `My journey into development began with a simple curiosity about how websites and apps work. Small HTML/CSS experiments soon turned into a passion for full-stack development with React.js, Next.js, and Node.js. During my internship, I gained real exposure to building scalable applications and working with production environments. Now, as a final-year Computer Engineering student, I’m focusing on DevOps, cloud,and AI/ML to deliver end-to-end solutions.`,
    accentColor: "#61cc9c",
  } as const;

  const BUTTON_CONFIG: ButtonConfig = {
    baseStyles:
      "relative flex items-center justify-center gap-2 mt-auto border border-[#61cc9c]/40 py-3",
    cornerStyles:
      "before:absolute before:size-[10px] before:left-0 before:top-0 before:border-2 before:border-[#61cc9c] before:border-b-0 before:border-r-0 after:absolute after:size-[10px] after:right-0 after:bottom-0 after:border-2 after:border-[#61cc9c] after:border-t-0 after:border-l-0",
    textStyles: "text-sm md:text-base",
    iconStyles: "text-2xl",
  } as const;

  const ANIMATION_DURATION = 1000; // milliseconds

  /* Hooks */
  const detailsCardRef = useRef<HTMLElement | null>(null);

  /* States */
  const [showStory, setShowStory] = useState<boolean>(true);

  /* Functions */
  const calculateYearsSince = (dateString: string): number => {
    const pastDate = new Date(dateString);
    const currentDate = new Date();

    const yearsDifference = currentDate.getFullYear() - pastDate.getFullYear();
    const monthDifference = currentDate.getMonth() - pastDate.getMonth();
    const dayDifference = currentDate.getDate() - pastDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      return yearsDifference - 1;
    }

    return yearsDifference;
  };

  const handleCardMouseLeave = (): void => {
    const detailsCard = detailsCardRef.current;
    if (detailsCard) {
      detailsCard.classList.add("return");
      setTimeout(() => {
        detailsCard.classList.remove("return");
      }, ANIMATION_DURATION);
    }
  };

  const toggleView = (): void => {
    setShowStory((prevState) => !prevState);
  };

  const renderStoryContent = (): React.ReactNode => (
    <p className="text-md md:text-base tracking-wide">
      {STORY_CONTENT.storyText}
    </p>
  );

  const renderProfileContent = (): React.ReactNode => (
    <div className="text-md md:text-base flex flex-col gap-2 tracking-wide">
      <h2>
        name ~ <i className="font-medium text-[#61cc9c]">{PROFILE_DATA.name}</i>
      </h2>
      <h2>
        email ~{" "}
        <i className="font-medium text-[#61cc9c]">{PROFILE_DATA.email}</i>
      </h2>
      <h2>
        address ~{" "}
        <i className="font-medium text-[#61cc9c]">{PROFILE_DATA.address}</i>
      </h2>
      <h2>
        phone ~{" "}
        <i className="font-medium text-[#61cc9c]">{PROFILE_DATA.phone}</i>
      </h2>
      <hr className="opacity-25" />
      <h2>
        nationality ~{" "}
        <i className="font-medium text-[#61cc9c]">{PROFILE_DATA.nationality}</i>
      </h2>
      <h2>
        age ~{" "}
        <i className="font-medium text-[#61cc9c]">
          {calculateYearsSince(PROFILE_DATA.birthDate)}
        </i>
      </h2>
      <h2>
        gender ~{" "}
        <i className="font-medium text-[#61cc9c]">{PROFILE_DATA.gender}</i>
      </h2>
    </div>
  );

  const renderToggleButton = (): React.ReactNode => (
    <button
      className={`${BUTTON_CONFIG.baseStyles} ${BUTTON_CONFIG.cornerStyles}`}
      onClick={toggleView}
      aria-label={showStory ? "View Profile" : "Back to Story"}
    >
      {showStory ? (
        <>
          <span className={BUTTON_CONFIG.textStyles}>View Profile</span>
          <div className={BUTTON_CONFIG.iconStyles}>
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </>
      ) : (
        <>
          <div className={BUTTON_CONFIG.textStyles}>
            <MdOutlineKeyboardDoubleArrowLeft />
          </div>
          <span className={BUTTON_CONFIG.textStyles}>Back to Story</span>
        </>
      )}
    </button>
  );

  /* Side-Effects */
  useEffect(() => {
    const detailsCard = document.querySelector(".details-card") as HTMLElement;
    detailsCardRef.current = detailsCard;

    if (detailsCard) {
      detailsCard.addEventListener("mouseleave", handleCardMouseLeave);
    }

    return () => {
      if (detailsCard) {
        detailsCard.removeEventListener("mouseleave", handleCardMouseLeave);
      }
    };
  }, []);

  /* Output */
  return (
    <div
      className={`flex flex-1 flex-col mt-1 md:mt-4 gap-2 w-full z-50 ${className}`}
    >
      {/* Header */}
      <h2 className="font-semibold">
        {showStory ? (
          <>
            {STORY_CONTENT.title}{" "}
            <i className="text-[#61cc9c]">
              {"{"} story time! {"}"}
            </i>
          </>
        ) : (
          STORY_CONTENT.profileTitle
        )}
        <hr className="mt-2 md:mt-3" />
      </h2>

      {/* Content */}
      {showStory ? renderStoryContent() : renderProfileContent()}

      {/* Toggle Button */}
      {renderToggleButton()}
    </div>
  );
};

export default StoryAndDetailsCard;
