export interface PathData {
  d: string;
  stroke: string;
  strokeWidth: string;
  strokeLinecap: "square" | "round" | "butt";
}

export interface AnimationConfig {
  pathsToAnimate: number;
  animationInterval: number;
  strokeDasharray: number;
  strokeDashoffset: number;
}

export interface BackgroundConfig {
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
}
