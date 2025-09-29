import React from "react";

interface CornerPosition {
  position: string;
  transform: string;
}

interface CardCornersConfig {
  container: string;
  cornerStyles: string;
  cornerPositions: CornerPosition[];
  cornerIcon: string;
}

interface CardCornersProps {
  className?: string;
  icon?: string;
  opacity?: number;
}

const CardCorners: React.FC<CardCornersProps> = ({
  className = "",
  icon = "+",
  opacity = 80,
}) => {
  /* Constants */
  const CARD_CORNERS_CONFIG: CardCornersConfig = {
    container: "absolute inset-0 z-10 pointer-events-none",
    cornerStyles: "absolute text-2xl",
    cornerPositions: [
      {
        position: "top-0 left-0",
        transform: "translate-x-[-50%] translate-y-[-50%]",
      },
      {
        position: "top-0 right-0",
        transform: "translate-x-[50%] translate-y-[-50%]",
      },
      {
        position: "left-0 bottom-0",
        transform: "translate-x-[-50%] translate-y-[50%]",
      },
      {
        position: "bottom-0 right-0",
        transform: "translate-x-[50%] translate-y-[50%]",
      },
    ],
    cornerIcon: icon,
  } as const;

  const OPACITY_CLASS = `opacity-${opacity}` as const;

  /* Functions */
  const renderCorner = (
    corner: CornerPosition,
    index: number
  ): React.ReactNode => {
    return (
      <span
        key={`corner-${index}`}
        className={`${CARD_CORNERS_CONFIG.cornerStyles} ${corner.position} ${corner.transform}`}
        aria-hidden="true"
      >
        {CARD_CORNERS_CONFIG.cornerIcon}
      </span>
    );
  };

  const getContainerClasses = (): string => {
    return [CARD_CORNERS_CONFIG.container, OPACITY_CLASS, className].join(" ");
  };

  /* Output */
  return (
    <div className={getContainerClasses()}>
      {CARD_CORNERS_CONFIG.cornerPositions.map((corner, index) =>
        renderCorner(corner, index)
      )}
    </div>
  );
};

export default CardCorners;
