"use client";

import PlaceholderTextAnimation from "@/components/placeholder-text-animation";
import Link from "next/link";

// Icons
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { poiret_one } from "../../../public/fonts";

// Types
interface ContactItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const contactItems: ContactItem[] = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/adeshg09",
    icon: <FaLinkedin className="text-xl" />,
  },
  {
    name: "GitHub",
    link: "https://github.com/adeshg09",
    icon: <FaGithub className="text-xl" />,
  },
  {
    name: "Email",
    link: "mailto:adeshgadage0908@gmail.com",
    icon: <MdEmail className="text-xl" />,
  },
  // {
  //   name: "Instagram",
  //   link: "https://instagram.com/yourhandle",
  //   icon: <FaInstagram className="text-xl" />,
  // },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center px-4 py-10 justify-around"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Subheading */}
        <span
          className={`${poiret_one.className} mt-auto text-2xl text-gray-300`}
        >
          get in touch
        </span>

        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-12 mt-8 md:px-20 lg:px-48 md:tracking-wide">
          <h2 className="flex flex-col gap-2 md:gap-3 items-center text-center text-3xl md:text-5xl font-medium">
            Ready to make your
            <div className="flex items-center">
              <PlaceholderTextAnimation
                texts={["brand", "service", "business", "product"]}
              />
              <span className="flex whitespace-nowrap">
                &nbsp;appearance&nbsp;
                <span className="hidden md:inline">in the</span>
              </span>
            </div>
            <div>
              <span className="md:hidden">in the&nbsp;</span>
              <span className="relative mt-3 before:absolute before:h-5 before:w-full before:border-t before:top-[120%] before:rotate-[-8deg] before:rounded-full">
                digital world?
              </span>
            </div>
          </h2>
        </div>
      </div>

      {/* Social Links */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
          {contactItems.map((contact) => (
            <Link
              key={contact.name}
              href={contact.link}
              target="_blank"
              className="group flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-all"
            >
              {contact.icon}
              <span>{contact.name}</span>
              <BsArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-[35deg] transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
