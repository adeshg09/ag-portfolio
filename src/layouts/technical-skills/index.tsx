import { SKILL_CATEGORIES } from "@/constants";
import dynamic from "next/dynamic";
import { memo } from "react";
import { morona } from "../../../public/fonts";

// Dynamic import with proper configuration
const SkillRow = dynamic(() => import("../../components/skill-row"), {
  ssr: true,
  loading: () => (
    <div className="h-20 md:h-[100px] w-full animate-pulse bg-gray-800 rounded-lg" />
  ),
});

const TechnicalSkills = memo(function TechnicalSkills() {
  const renderSkillRows = () => {
    return SKILL_CATEGORIES.map((category, index) => (
      <SkillRow
        key={`skill-category-${index}`}
        skills={category.skills}
        reverse={category.reverse}
        aria-label={category.label}
      />
    ));
  };

  return (
    <section className="relative min-h-screen w-screen flex flex-col justify-center items-center pb-10">
      <div className={`flex flex-col items-center text-2xl`}>
        <span className={`opacity-80 font-normal ${morona.className}`}>
          collection of my core skills
        </span>
        <h1 className={`text-4xl md:text-4xl font-medium text-center`}>
          and technologies I work with
        </h1>
      </div>
      <div
        id="skills"
        className="
          flex flex-col w-full items-center gap-4 mt-24 md:gap-8 
          skew-y-12 bg-[#61cc9c] py-10
          shadow-2xl
        "
        role="region"
        aria-labelledby="technical-skills-title"
      >
        {/* Hidden title for screen readers */}
        <h2 id="technical-skills-title" className="sr-only">
          Technical Skills
        </h2>

        <div
          className="
          flex flex-col w-full lg:w-[70%] md:gap-8 items-center
          max-w-7xl mx-auto px-4
        "
        >
          {renderSkillRows()}
        </div>
      </div>
    </section>
  );
});

TechnicalSkills.displayName = "TechnicalSkills";

export default TechnicalSkills;
