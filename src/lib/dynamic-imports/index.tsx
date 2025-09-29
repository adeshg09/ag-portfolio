import dynamic from "next/dynamic";

export const DynamicInteractiveGradientBg = dynamic(
  () =>
    import("../../components/interactive-gradient-bg").then(
      (mod) => mod.InteractiveGradientBg
    ),
  {
    ssr: true,
  }
);
