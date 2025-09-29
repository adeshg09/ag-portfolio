import React from "react";
import Image, { StaticImageData } from "next/image";
import me from "../../../public/assets/images/me.png";
import AboutCard from "@/components/about-card";
import StoryAndDetailsCard from "@/components/story-details-card";
import UselessFacts from "@/components/useless-facts";
import {
  sacramento,
  stretch,
  montserrat_alternates,
} from "../../../public/fonts";

// Types
interface PersonalInfo {
  name: string;
  displayName: string;
  title: string;
  greeting: string;
  profileImage: StaticImageData;
  altText: string;
}

interface AboutStyleConfig {
  container: string;
  leftSection: {
    container: string;
    factSection: {
      container: string;
      divider: string;
      content: string;
      title: string;
    };
    greeting: string;
    name: string;
    title: string;
  };
  rightSection: {
    container: string;
    imageCard: {
      position: string;
      image: string;
    };
    detailsCard: {
      position: string;
      header: string;
    };
  };
}

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = "" }) => {
  /* Constants */
  const PERSONAL_INFO: PersonalInfo = {
    name: "Adesh Gadage",
    displayName: "Adesh",
    title: "Full-Stack Developer",
    greeting: "Hey mate! I'm",
    profileImage: me,
    altText: "Profile photo of Adesh Gadage",
  } as const;

  const ABOUT_STYLES: AboutStyleConfig = {
    container: `relative flex flex-col w-screen md:max-lg:min-h-screen lg:h-[80vh] xl:h-[90vh] 
                px-4 py-16 pb-0 lg:flex-row md:px-[50px] lg:px-[40px] xl:px-[100px] xl:pl-[80px] 
                2xl:px-[180px] 2xl:pl-[180px] gap-8 md:gap-0 pointer-events-none`,
    leftSection: {
      container: "flex md:flex-1 flex-col items-center md:items-start",
      factSection: {
        container: "flex flex-1 w-full gap-4",
        divider: "w-[2px] h-full bg-slate-200 rounded-lg ml-4",
        content: "hidden sm:flex flex-col mt-2 gap-2",
        title: "text-lg font-medium",
      },
      greeting: "mb-4 md:mb-8 text-2xl mt-9 md:text-4xl",
      name: "text-4xl mb-5 font-semibold md:text-6xl 2xl:text-7xl md:text-nowrap",
      title: "text-base md:text-xl",
    },
    rightSection: {
      container: `relative min-h-[70vh] md:max-xl:min-h-[90vh] md:flex mt-[250px] md:mt-0 
                  flex-1 mx-auto lg:ml-auto items-center justify-center lg:gap-8 md:px-2 w-full pointer-events-auto`,
      imageCard: {
        position: "",
        image: "test-card absolute w-full h-full top-0 left-0 object-cover",
      },
      detailsCard: {
        position: "details-card top-[40%] right-0 md:top-auto",
        header: "text-[#61cc9c] font-semibold text-lg md:text-2xl",
      },
    },
  } as const;

  const SECTION_ID = "about" as const;
  const DEV_HEADER = "# Dev-101" as const;
  const ACCENT_COLOR = "#61cc9c" as const;

  /* Functions */
  const renderFactSection = (): React.ReactNode => (
    <div className={ABOUT_STYLES.leftSection.factSection.container}>
      <div className={ABOUT_STYLES.leftSection.factSection.divider} />
      <div className={ABOUT_STYLES.leftSection.factSection.content}>
        <h2 className={ABOUT_STYLES.leftSection.factSection.title}>
          Did you know?{" "}
          <i style={{ color: ACCENT_COLOR }}>
            {"{"} Useless, but true facts {"}"}
          </i>
        </h2>
        <UselessFacts />
      </div>
    </div>
  );

  const renderPersonalIntro = (): React.ReactNode => (
    <>
      <span
        className={`${sacramento.className} ${ABOUT_STYLES.leftSection.greeting}`}
      >
        {PERSONAL_INFO.greeting}
      </span>
      <h1 className={`${stretch.className} ${ABOUT_STYLES.leftSection.name}`}>
        {PERSONAL_INFO.displayName}
      </h1>
      <span
        className={`${ABOUT_STYLES.leftSection.title} ${montserrat_alternates.className}`}
      >
        Full - <code style={{ color: ACCENT_COLOR }}> Stack </code> De
        <code style={{ color: ACCENT_COLOR }}> V </code>
        eloper 😎
      </span>
    </>
  );

  const renderLeftSection = (): React.ReactNode => (
    <div className={ABOUT_STYLES.leftSection.container}>
      {renderFactSection()}
      {renderPersonalIntro()}
    </div>
  );

  const renderImageCard = (): React.ReactNode => (
    <AboutCard detailsCard={false}>
      <Image
        height={100}
        width={100}
        className={ABOUT_STYLES.rightSection.imageCard.image}
        src={PERSONAL_INFO.profileImage}
        alt={PERSONAL_INFO.altText}
        priority
      />
    </AboutCard>
  );

  const renderDetailsCard = (): React.ReactNode => (
    <AboutCard
      detailsCard={true}
      className={ABOUT_STYLES.rightSection.detailsCard.position}
    >
      <span className={ABOUT_STYLES.rightSection.detailsCard.header}>
        {DEV_HEADER}
      </span>
      <StoryAndDetailsCard />
    </AboutCard>
  );

  const renderRightSection = (): React.ReactNode => (
    <div className={ABOUT_STYLES.rightSection.container}>
      {renderImageCard()}
      {renderDetailsCard()}
    </div>
  );

  /* Output */
  return (
    <div id={SECTION_ID} className={`${ABOUT_STYLES.container} ${className}`}>
      {renderLeftSection()}
      {renderRightSection()}
    </div>
  );
};

export default About;
