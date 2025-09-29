import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa6";

export const navItems = [
  {
    name: "Home",
    link: "hero",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

export const FrontEndSkills = [
  {
    name: "React",
    img: "/assets/images/tech-stacks/react.png",
  },
  {
    name: "Sass",
    img: "/assets/images/tech-stacks/sass.png",
  },
  {
    name: "Figma",
    img: "/assets/images/tech-stacks/figma.png",
  },
  {
    name: "Tailwind",
    img: "/assets/images/tech-stacks/tailwind.png",
  },
  {
    name: "Solid",
    img: "/assets/images/tech-stacks/solidjs.png",
  },
  {
    name: "Astro",
    img: "/assets/images/tech-stacks/astro.png",
  },
];
export const BackEndSkills = [
  {
    name: "Node",
    img: "/assets/images/tech-stacks/node.png",
  },
  {
    name: "Express",
    img: "/assets/images/tech-stacks/express.png",
  },
  {
    name: "Next",
    img: "/assets/images/tech-stacks/next.png",
  },
  {
    name: "Firebase",
    img: "/assets/images/tech-stacks/firebase.png",
  },
  {
    name: "Strapi",
    img: "/assets/images/tech-stacks/strapi.png",
  },
];
export const dbSkills = [
  {
    name: "Postgres",
    img: "/assets/images/tech-stacks/postgres.png",
  },
  {
    name: "MySQL",
    img: "/assets/images/tech-stacks/mysql.png",
  },
  {
    name: "Mongo DB",
    img: "/assets/images/tech-stacks/mongo.png",
  },
  {
    name: "Cloud Firestore",
    img: "/assets/images/tech-stacks/firestore.png",
  },
  {
    name: "Supabase",
    img: "/assets/images/tech-stacks/supabase.png",
  },
];
export const otherSkills = [
  {
    name: "Git",
    img: "/assets/images/tech-stacks/git.png",
  },
  {
    name: "AWS",
    img: "/assets/images/tech-stacks/aws.png",
  },
  {
    name: "Google Cloud",
    img: "/assets/images/tech-stacks/gcp.png",
  },
  {
    name: "Spline 3D",
    img: "/assets/images/tech-stacks/spline.png",
  },
  {
    name: "Photoshop",
    img: "/assets/images/tech-stacks/photoshop.png",
  },
];

export const SKILL_CATEGORIES = [
  { skills: FrontEndSkills, reverse: false, label: "Frontend Skills" },
  { skills: BackEndSkills, reverse: true, label: "Backend Skills" },
  { skills: dbSkills, reverse: false, label: "Database Skills" },
  { skills: otherSkills, reverse: true, label: "Other Skills" },
];

export const contacts = [
  {
    name: "Mail",
    link: "mailto:adeshgadage0908@gmail.com",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/adeshg09/",
  },
  {
    name: "Github",
    link: "https://github.com/adeshg09",
  },
];

export const socials = [
  {
    name: "Github",
    Icon: FaGithub,
    link: "https://github.com/creativeambition/",
  },
  {
    name: "YouTube",
    Icon: FaYoutube,
    link: "https://youtube.com/@creative-ambition/",
  },
  {
    name: "Instagram",
    Icon: AiFillInstagram,
    link: "https://instagram.com/_creative_ambition/",
  },
  {
    name: "TikTok",
    Icon: FaTiktok,
    link: "https://tiktok.com/@creative_ambition/",
  },
  {
    name: "Facebook",
    Icon: FaFacebook,
    link: "https://web.facebook.com/share/g/NY81ZaaMtJ6qrrPm/",
  },
];
