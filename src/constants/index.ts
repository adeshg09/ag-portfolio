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
    name: "React.js",
    img: "/assets/images/tech-stacks/react.png",
  },
  {
    name: "Next.js",
    img: "/assets/images/tech-stacks/next.png",
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
    name: "Tailwind CSS",
    img: "/assets/images/tech-stacks/tailwind.png",
  },
  {
    name: "React Native",
    img: "/assets/images/tech-stacks/react.png",
  },
];

export const BackEndSkills = [
  {
    name: "Node.js",
    img: "/assets/images/tech-stacks/node.png",
  },
  {
    name: "Express.js",
    img: "/assets/images/tech-stacks/express.png",
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

export const projects = [
  {
    title: "Rentiful",
    techs: [
      "/assets/images/tech-stacks/react.png",
      "/assets/images/tech-stacks/next.png",
      "/assets/images/tech-stacks/tailwind.png",
      "/assets/images/tech-stacks/node.png",
      "/assets/images/tech-stacks/express.png",
      "/assets/images/tech-stacks/postgres.png",
      "/assets/images/tech-stacks/aws.png",
    ],
    thumbnail: "/assets/images/projects/LUC.png",
    description: "Full Stack Real Estate Web-App",
    link: "https://github.com/adeshg09/real-estate-webapp",
    github: "https://github.com/adeshg09/real-estate-webapp",
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "Techechelons Infosolutions Pvt. Ltd.",
    pos: "Full Stack Developer Intern",
    duration: "Nov 2024 - April 2025",
    title:
      "• Developed core modules for a scalable SaaS-based HRMS platform with multi-tenant architecture, where each tenant had an isolated Postgresql schema, ensuring data security and strict isolation.\n" +
      "• Implemented advanced role-based access control (RBAC), subscription workflows, and access assignments across 10+ tenants, improving system flexibility and admin control.\n" +
      "• Built and maintained full-stack features using React.js, React Libraries, Material UI, Node.js, and Express.js, streamlining HR processes and accelerating user onboarding.\n" +
      "• Contributed to a client-based skincare mobile application using React Native and React Native packages, focusing on responsive UI and consistent brand experience across Android and iOS.\n" +
      "• Integrated 10+ REST APIs for product listings, order placement, and various modules of this application, resulting in improved app reliability and 25% reduction in development time for new features.\n" +
      "• Ensured code modularity, reusability, and clean architecture across frontend and backend, enabling 30% faster feature rollouts and easier collaboration.",
    icon: "/assets/images/experiences/techechleons.png",
    animation: "victory",
  },
];
