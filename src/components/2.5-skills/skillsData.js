import {
  MdShoppingCart,
  MdStorefront,
  MdSpeed,
  MdDevices,
  MdBrush,
} from "react-icons/md";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiNpm,
} from "react-icons/si";
import { FiCode, FiPackage } from "react-icons/fi";

export const skillsData = [
  {
    id: "frontend",
    title: "Frontend",
    className: "frontend",
    showIcons: true,
    skills: [
      {
        name: "React",
        icon: SiReact,
        tooltip: "Component-based UI development with React ecosystem",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        tooltip: "Type-safe JavaScript for scalable applications",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        tooltip: "Modern ES6+ features and best practices",
      },
      {
        name: "Redux",
        icon: SiRedux,
        tooltip: "State management for complex React applications",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        tooltip: "Semantic HTML markup and accessibility"
      },
      {
        name: "CSS3",
        icon: SiCss3,
        tooltip: "Modern CSS including Grid, Flexbox, and animations",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        tooltip: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "Material-UI",
        icon: SiMui,
        tooltip: "React component library with Material Design",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        tooltip: "Production-ready animation library for React",
      },
      {
        name: "Figma",
        icon: SiFigma,
        tooltip: "Design systems and pixel-perfect implementation",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    className: "backend",
    showIcons: true,
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        tooltip: "JavaScript runtime for server-side development",
      },
      {
        name: "Express",
        icon: SiExpress,
        tooltip: "Web application framework for Node.js"
      },
      {
        name: "REST APIs",
        icon: FiCode,
        tooltip: "API design, development, and integration",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        tooltip: "NoSQL database and API consumption"
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    className: "tools",
    skills: [
      { name: "Git", tooltip: "Version control and collaboration" },
      {
        name: "GitHub",
        tooltip: "Code hosting, CI/CD, and team collaboration",
      },
      { name: "Postman", tooltip: "API testing and development tool" },
      { name: "npm", tooltip: "Package management for JavaScript projects" },
      {
        name: "Agile",
        tooltip: "Agile methodologies and sprint-based development",
      },
      {
        name: "Performance",
        tooltip: "Web performance optimization and Core Web Vitals",
      },
    ],
  },
];
