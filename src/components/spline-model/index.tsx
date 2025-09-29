"use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Spline from "@splinetool/react-spline";
// import NoodleArrow from "../../../public/assets/noodle_arrow.svg";
// import { sacramento } from "../../../public/fonts";

// // Types
// interface SplineModelConfig {
//   sceneUrl: string;
//   fallbackComponent: React.ReactNode;
//   enableSSR: boolean;
// }

// interface LayoutConfig {
//   containerPosition: string;
//   robotInitialPosition: string;
//   robotFinalPosition: string;
// }

// interface SplineModelProps {
//   className?: string;
// }

// const SplineModel: React.FC<SplineModelProps> = ({ className = "" }) => {
//   /* Constants */
//   const SPLINE_CONFIG: SplineModelConfig = {
//     sceneUrl: "https://prod.spline.design/ZVMNdX7xz6580anx/scene.splinecode",
//     fallbackComponent: null,
//     enableSSR: false,
//   } as const;

//   const LAYOUT_CONFIG: LayoutConfig = {
//     containerPosition:
//       "absolute top-0 left-0 w-full h-[200vh] pointer-events-none z-10",
//     robotInitialPosition:
//       "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-screen",
//     robotFinalPosition:
//       "absolute top-[66vh] md:top-[79vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-screen ",
//   } as const;

//   const ANIMATION_DELAY = 3000; // 3 seconds delay before sliding down

//   /* States */
//   const [isAnimationComplete, setIsAnimationComplete] =
//     useState<boolean>(false);

//   /* Side-Effects */
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsAnimationComplete(true);
//     }, ANIMATION_DELAY);

//     return () => clearTimeout(timer);
//   }, []);

//   /* Output */
//   return (
//     <div className={`${LAYOUT_CONFIG.containerPosition} ${className}`}>
//       {/* Robot 3D Model with slide-down animation */}
//       <div
//         className={`
//           ${
//             isAnimationComplete
//               ? LAYOUT_CONFIG.robotFinalPosition
//               : LAYOUT_CONFIG.robotInitialPosition
//           }
//           transition-all duration-[2000ms] ease-out
//         `}
//       >
//         <Spline
//           scene={SPLINE_CONFIG.sceneUrl}
//           className=" flex items-center justify-center"
//         />
//       </div>

//       {/* Description Text - Top right corner */}
//       {/* <div
//         className={`${sacramento.className} gap-4 absolute left-8 md:left-12 lg:left-28 top-130 rotate-[-20deg] pointer-events-none hidden md:flex`}
//       >
//         <h1 className={`text-4xl md:text-5xl`}>
//           meet my digital <b className="text-[#61cc9c]">assistant</b> <br />{" "}
//           companion workflow
//         </h1>

//         <Image
//           src={NoodleArrow}
//           alt="noodle-arrow"
//           className="w-[100px] translate-y-[10px] translate-x-[-20px]"
//         />
//       </div> */}
//     </div>
//   );
// };

// export default SplineModel;

import React, { Suspense } from "react";
import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import NoodleArrow from "../../../public/assets/noodle_arrow.svg";
import { sacramento } from "../../../public/fonts";

// Types
interface SplineSceneContent {
  title: string;
  highlightWord: string;
  subtitle: string;
  sceneUrl: string;
  arrowAlt: string;
}

interface SplineSceneProps {
  className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ className = "" }) => {
  /* Constants */
  const SCENE_CONTENT: SplineSceneContent = {
    title: "the ultimate",
    highlightWord: "dev",
    subtitle: "keyboard workflow",
    sceneUrl: "https://prod.spline.design/YTurGkXAz-yWLxOO/scene.splinecode",
    arrowAlt: "decorative arrow pointing to 3D scene",
  } as const;

  const ACCENT_COLOR = "#61cc9c" as const;

  /* Hooks */
  const SplineComponent = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => null,
  });

  /* Functions */
  const renderSceneTitle = (): React.ReactNode => (
    <h1 className="text-4xl md:text-5xl">
      {SCENE_CONTENT.title}{" "}
      <b style={{ color: ACCENT_COLOR }}>{SCENE_CONTENT.highlightWord}</b>{" "}
      <br />
      {SCENE_CONTENT.subtitle}
    </h1>
  );

  const renderArrowImage = (): React.ReactNode => (
    <Image
      src={NoodleArrow as StaticImageData}
      alt={SCENE_CONTENT.arrowAlt}
      className="w-[100px] translate-y-[10px] translate-x-[-20px]"
      priority={false}
    />
  );

  const renderDescriptionOverlay = (): React.ReactNode => (
    <div
      className={`${sacramento.className} flex gap-4 absolute left-8 md:left-12 lg:left-28 top-8 rotate-6 pointer-events-none`}
    >
      {renderSceneTitle()}
      {renderArrowImage()}
    </div>
  );

  const renderSplineScene = (): React.ReactNode => (
    <SplineComponent scene={SCENE_CONTENT.sceneUrl} />
  );

  /* Output */
  return (
    <div
      className={`absolute top-[100vh] -translate-y-[35%] w-full h-[100vh] ${className}`}
    >
      {renderDescriptionOverlay()}
      {renderSplineScene()}
    </div>
  );
};

export default SplineScene;
