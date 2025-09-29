import React from "react";
import { PATHS_DATA } from "@/constants/pattern-background";
import { PathData } from "@/types/pattern-background";

interface PatternSVGProps {
  className?: string;
}

const PatternPath: React.FC<{ pathData: PathData; index: number }> = ({
  pathData,
}) => (
  <path
    d={pathData.d}
    stroke={pathData.stroke}
    strokeWidth={pathData.strokeWidth}
    strokeLinecap={pathData.strokeLinecap}
  />
);

export const PatternSVG: React.FC<PatternSVGProps> = ({ className = "" }) => {
  return (
    <svg
      id="pattern-bg"
      height="100%"
      width="100%"
      viewBox="0 0 4010 2045"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeDasharray={1100}
      strokeDashoffset={1100}
      className={className}
    >
      {PATHS_DATA.map((pathData, index) => (
        <PatternPath key={`path-${index}`} pathData={pathData} index={index} />
      ))}
    </svg>
  );
};
