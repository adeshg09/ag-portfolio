import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "500"],
  fallback: ["sans-serif", "arial"],
});

export const metadata: Metadata = {
  title: "Adesh Gadage | Full Stack Developer",
  description:
    "Adesh Gadage's personal portfolio showcasing projects, skills, experience, and contact information.",
  authors: [{ name: "Adesh Gadage", url: "https://adeshgadage.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScroll />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
