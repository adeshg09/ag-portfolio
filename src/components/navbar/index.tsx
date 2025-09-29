"use client";
import { navItems } from "@/constants";
import React from "react";
import { Link } from "react-scroll";
import { montserrat_alternates } from "../../../public/fonts";

// Types
interface NavItem {
  name: string;
  link: string;
}

interface NavbarConfig {
  scrollDuration: number;
  smoothScroll: boolean;
  hoverColor: string;
}

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  /* Constants */
  const NAVBAR_CONFIG: NavbarConfig = {
    scrollDuration: 600,
    smoothScroll: true,
    hoverColor: "#61cc9c",
  } as const;

  /* Functions */
  const renderNavItem = (navItem: NavItem, index: number): React.ReactNode => (
    <Link
      key={index}
      to={navItem.link}
      smooth={NAVBAR_CONFIG.smoothScroll}
      duration={NAVBAR_CONFIG.scrollDuration}
    >
      <span
        className="opacity-80 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
        style={
          {
            "--hover-color": NAVBAR_CONFIG.hoverColor,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.color = NAVBAR_CONFIG.hoverColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "";
        }}
      >
        {navItem.name}
      </span>
    </Link>
  );

  const renderNavigation = (): React.ReactNode => (
    <div
      className={`${montserrat_alternates.className} flex flex-1 justify-around text-sm sm:gap-10`}
    >
      {navItems.map((navItem: NavItem, index: number) =>
        renderNavItem(navItem, index)
      )}
    </div>
  );

  /* Output */
  return (
    <div
      className={`fixed z-50 top-4 w-[90vw] sm:w-max bg-[#000000]/75 backdrop-blur-md border border-white/[0.1] p-4 sm:px-8 rounded-lg flex justify-center ${className}`}
    >
      {renderNavigation()}
    </div>
  );
};

export default Navbar;
