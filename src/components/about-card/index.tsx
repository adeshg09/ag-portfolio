import React from "react";
import CardCorners from "../card-corners";
// Types
interface AboutCardProps {
  detailsCard?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface CardStyleConfig {
  base: string;
  dimensions: {
    mobile: string;
    desktop: string;
  };
  background: string;
  border: string;
  padding: string;
  transform: {
    default: string;
    details: string;
  };
}

const AboutCard: React.FC<AboutCardProps> = ({
  detailsCard = false,
  children,
  className = "",
}) => {
  /* Constants */
  const CARD_STYLES: CardStyleConfig = {
    base: "absolute flex flex-col items-start justify-start",
    dimensions: {
      mobile: "w-[85%] h-[480px]",
      desktop: "md:w-[350px] md:h-[500px] md:-skew-x-12",
    },
    background: "bg-black/60",
    border: "border border-white/25",
    padding: "p-4",
    transform: {
      default: "md:translate-y-[-120px] z-[1]",
      details:
        "sm:translate-x-[100px] translate-y-[-150px] md:translate-x-[-100px] md:translate-y-[150px] backdrop-blur-xl",
    },
  } as const;

  /* Functions */
  const getTransformClass = (): string => {
    return detailsCard
      ? CARD_STYLES.transform.details
      : CARD_STYLES.transform.default;
  };

  const getCardClasses = (): string => {
    return [
      CARD_STYLES.base,
      CARD_STYLES.dimensions.mobile,
      CARD_STYLES.dimensions.desktop,
      CARD_STYLES.background,
      CARD_STYLES.border,
      CARD_STYLES.padding,
      getTransformClass(),
      className,
    ].join(" ");
  };

  /* Output */
  return (
    <div className={getCardClasses()}>
      <CardCorners />
      {children}
    </div>
  );
};

export default AboutCard;
