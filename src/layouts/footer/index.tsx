"use client";

import { poiret_one } from "../../../public/fonts";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${poiret_one.className} w-full flex justify-center gap-2 py-4 opacity-70`}
    >
      &copy; <span>builtbyag09.tech, {year}</span>
    </footer>
  );
};

export default Footer;
