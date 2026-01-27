import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSass,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiCloudinary,
} from "react-icons/si";

export const personalInfo = {
  name: "Hyosua Colléter",
  email: "colleterhyosua@gmail.com",
  github: "https://github.com/hyosua",
  linkedin: "https://linkedin.com/in/hyosua",
  profilePicture: "/profile.jpg",
  heroDescription: "hero.description",
  cvPath: "/cv-colleter.pdf",
};

export const workExperience = [
  {
    company: "La Poste",
    location: "Yerres (91)",
    position: "work.laposte.position",
    period: "2026 - Présent",
    achievements: [
      "work.laposte.achievements.1",
      "work.laposte.achievements.2",
      "work.laposte.achievements.3",
      "work.laposte.achievements.4",
      "work.laposte.achievements.5",
      "work.laposte.achievements.6",
    ],
  },
  {
    company: "Aximum (Groupe COLAS)",
    location: "Lannion (22)",
    position: "work.aximum.position",
    period: "Mar 2015 - Juin 2015",
    achievements: [
      "work.aximum.achievements.1",
      "work.aximum.achievements.2",
      "work.aximum.achievements.3",
      "work.aximum.achievements.4",
    ],
  },
  {
    company: "Teraqua",
    location: "St-Martin-des-Champs (29)",
    position: "work.teraqua.position",
    period: "Avr 2014 - Juin 2014",
    achievements: [
      "work.teraqua.achievements.1",
      "work.teraqua.achievements.2",
      "work.teraqua.achievements.3",
      "work.teraqua.achievements.4",
    ],
  },
];

export const education = [
  {
    institution: "education.miaw.institution",
    location: "Evry (91)",
    degree: "education.miaw.degree",
    period: "2025 - Présent",
    achievements: [
      "education.miaw.achievements.1",
      "education.miaw.achievements.2",
      "education.miaw.achievements.3",
    ],
  },
  {
    institution: "education.dut.institution",
    location: "Lannion (29)",
    degree: "education.dut.degree",
    period: "2013 - 2015",
    achievements: [
      "education.dut.achievements.1",
      "education.dut.achievements.2",
      "education.dut.achievements.3",
      "education.dut.achievements.4",
    ],
  },
];

export const skills = {
  frontendDevelopment: [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "SASS", icon: <SiSass /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
  ],
  backendDevelopment: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <SiPython /> },
    { name: "PHP", icon: <SiPhp /> },
  ],
  databaseAndStorage: [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis", icon: <SiRedis /> },
  ],
  cloudAndDevOps: [
    { name: "Docker", icon: <SiDocker /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "CI/CD", icon: <SiGithubactions /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
  ],
  toolsAndServices: [
    { name: "Vite", icon: <SiVite /> },
    { name: "Framer Motion", icon: <SiFramer /> },
  ],
};

export const projects = [
  {
    title: "projects.cexquis.title",
    github: "https://github.com/hyosua/cadavre-exquis",
    description: [
      "projects.cexquis.description.1",
      "projects.cexquis.description.2",
    ],
    image: "/cexquis2.png",
    website: "https://cadavrexquis.fr",
    tags: ["Next.js", "TypeScript", "Redis", "Socket-io", "Tailwind CSS"],
  },
  {
    title: "projects.peakture.title",
    github: "https://github.com/hyosua/peakture",
    description: [
      "projects.peakture.description.1",
      "projects.peakture.description.2",
    ],
    image: "/peakture.png",
    website: "https://peakture.fr",
    tags: [
      "React",
      "Mongodb",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
  },
  {
    title: "projects.gmblackqueen.title",
    github: "https://github.com/hyosua/GmBlackQueen",
    description: [
      "projects.gmblackqueen.description.1",
      "projects.gmblackqueen.description.2",
    ],
    image: "/gmblackqueen2.png",
    website: "https://gmblackqueen.fr",
    tags: ["HTML", "CSS", "Javascript", "Vanilla", "Swiper.js"],
  },
  {
    title: "projects.miaw.title",
    github: "https://github.com/hyosua/miaw/",
    description: ["projects.miaw.description.1", "projects.miaw.description.2"],
    image: "/miaw2.png",
    website: "https://miaw-techwear.fr/",
    tags: ["PHP", "MySql", "Wordpress", "Bootstrap"],
  },
  {
    title: "projects.uxgoodpatterns.title",
    github: "https://github.com/hyosua/ux-good-patterns",
    description: ["projects.uxgoodpatterns.description.1"],
    image: "/uxgoodpatterns.png",
    website: "https://uxgoodpatterns.com/",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Astro"],
  },
];

export const awards = [
  {
    name: "awards.1.name",
    issuer: "awards.1.issuer",
    date: "Jan 2020",
    type: "awards.1.type",
    position: "awards.1.position",
  },
  {
    name: "awards.2.name",
    issuer: "awards.2.issuer",
    date: "Feb 2021",
    type: "awards.2.type",
    position: "awards.2.position",
  },
  {
    name: "awards.3.name",
    issuer: "awards.3.issuer",
    date: "Mar 2022",
    type: "awards.3.type",
    position: "awards.3.position",
  },
  {
    name: "awards.4.name",
    issuer: "awards.4.issuer",
    date: "Apr 2022",
    type: "awards.4.type",
    position: "awards.4.position",
  },
  {
    name: "awards.5.name",
    issuer: "awards.5.issuer",
    date: "May 2022",
    type: "awards.5.type",
    position: "awards.5.position",
  },
  {
    name: "awards.6.name",
    issuer: "awards.6.issuer",
    date: "Jun 2022",
    type: "awards.6.type",
    position: "awards.6.position",
  },
  {
    name: "awards.7.name",
    issuer: "awards.7.issuer",
    date: "Jul 2022",
    type: "awards.7.type",
    position: "awards.7.position",
  },
];