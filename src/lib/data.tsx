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
    period: "2016 - Présent",
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
    url: "https://www.iut-evry.fr/nos-formations/lp/lp-metiers-de-linformatique-applications-web/", // Placeholder URL
    pdfPath: "/plaquette-miaw.pdf", // Placeholder PDF path
    achievements: [
      "education.miaw.achievements.1",
      "education.miaw.achievements.2",
      "education.miaw.achievements.3",
    ],
  },
  {
    institution: "education.dut.institution",
    location: "Lannion (22)",
    degree: "education.dut.degree",
    period: "2013 - 2015",
    url: "https://formations.univ-rennes.fr/mention/bachelor-universitaire-de-technologie-mention-informatique", // Placeholder URL
    pdfPath: "/iut-lannion.pdf", // Placeholder PDF path
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
    videoDesktop: "/videos/cexquis-c.webm",
    videoMobile: "/videos/cexquis-mobile-c.webm",
    context: "projects.cexquis.context",
    results: [
      "projects.cexquis.results.1",
      "projects.cexquis.results.2",
      "projects.cexquis.results.3",
    ],
    achievements: [
      "projects.cexquis.achievements.1",
      "projects.cexquis.achievements.2",
      "projects.cexquis.achievements.3",
      "projects.cexquis.achievements.4",
    ],
    stackChoices: [
      "projects.cexquis.stack.1",
      "projects.cexquis.stack.2",
      "projects.cexquis.stack.3",
      "projects.cexquis.stack.4",
      "projects.cexquis.stack.5",
      "projects.cexquis.stack.6",
    ],
    challenges: [
      "projects.cexquis.challenges.1",
      "projects.cexquis.challenges.2",
      "projects.cexquis.challenges.3",
    ],
    tags: ["Next.js", "TypeScript", "Redis", "Socket-io","React","Fly.io","Docker", "Tailwind CSS"],
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
    videoDesktop: "/videos/peakture-c.webm",
    videoMobile: "/videos/peakture-mobile-c.webm",
    context: "projects.peakture.context",
    results: [
      "projects.peakture.results.1",
      "projects.peakture.results.2",
      "projects.peakture.results.3",
    ],
    achievements: [
      "projects.peakture.achievements.1",
      "projects.peakture.achievements.2",
      "projects.peakture.achievements.3",
      "projects.peakture.achievements.4",
    ],
    stackChoices: [
      "projects.peakture.stack.1",
      "projects.peakture.stack.2",
      "projects.peakture.stack.3",
      "projects.peakture.stack.4",
      "projects.peakture.stack.5",
      "projects.peakture.stack.6",
    ],
    challenges: [
      "projects.peakture.challenges.1",
      "projects.peakture.challenges.2",
      "projects.peakture.challenges.3",
    ],
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
    videoDesktop: "/videos/gmblackqueen-c.webm",
    videoMobile: "/videos/gmblackqueen-mobile-c.webm",
    context: "projects.gmblackqueen.context",
    stackChoices: [
      "projects.gmblackqueen.stack.1",
      "projects.gmblackqueen.stack.2",
      "projects.gmblackqueen.stack.3",
    ],
    achievements: [
      "projects.gmblackqueen.achievements.1",
      "projects.gmblackqueen.achievements.2",
      "projects.gmblackqueen.achievements.3",
      "projects.gmblackqueen.achievements.4",
    ],
    challenges: [
      "projects.gmblackqueen.challenges.1",
      "projects.gmblackqueen.challenges.2",
      "projects.gmblackqueen.challenges.3",
    ],
    results: [
      "projects.gmblackqueen.results.1",
      "projects.gmblackqueen.results.2",
      "projects.gmblackqueen.results.3",
    ],
    tags: ["HTML", "CSS", "Javascript", "Vanilla", "Swiper.js"],
  },
  {
    title: "projects.miaw.title",
    github: "https://github.com/hyosua/miaw/",
    description: ["projects.miaw.description.1", "projects.miaw.description.2"],
    image: "/miaw2.png",
    website: "https://miaw-techwear.fr/",
    videoDesktop: "/videos/miaw-c.webm",
    videoMobile: "/videos/miaw-mobile-c.webm",
    context: "projects.miaw.context",
    stackChoices: [
      "projects.miaw.stack.1",
      "projects.miaw.stack.2",
      "projects.miaw.stack.3",
    ],
    achievements: [
      "projects.miaw.achievements.1",
      "projects.miaw.achievements.2",
      "projects.miaw.achievements.3",
      "projects.miaw.achievements.4",
    ],
    challenges: [
      "projects.miaw.challenges.1",
      "projects.miaw.challenges.2",
      "projects.miaw.challenges.3",
    ],
    results: [
      "projects.miaw.results.1",
      "projects.miaw.results.2",
    ],
    tags: ["PHP", "MySql", "Wordpress", "Bootstrap"],
  },
  {
    title: "projects.uxgoodpatterns.title",
    github: "https://github.com/hyosua/ux-good-patterns",
    description: ["projects.uxgoodpatterns.description.1"],
    image: "/uxgoodpatterns.png",
    website: "https://uxgoodpatterns.com/",
    context: "projects.uxgoodpatterns.context",
    stackChoices: [
      "projects.uxgoodpatterns.stack.1",
      "projects.uxgoodpatterns.stack.2",
      "projects.uxgoodpatterns.stack.3",
      "projects.uxgoodpatterns.stack.4",
    ],
    achievements: [
      "projects.uxgoodpatterns.achievements.1",
      "projects.uxgoodpatterns.achievements.2",
    ],
    challenges: [
      "projects.uxgoodpatterns.challenges.1",
      "projects.uxgoodpatterns.challenges.2",
    ],
    results: [
      "projects.uxgoodpatterns.results.1",
      "projects.uxgoodpatterns.results.2",
      "projects.uxgoodpatterns.results.3",
    ],
    videoDesktop: "/videos/ux-good-patterns-c.webm",
    videoMobile: "/videos/ux-good-patterns-mobile-c.webm",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Astro","Shadcn UI"],
  },
];

export const logos = [
  {
    title: "Coyote",
    brief: "logos.coyote.brief",
    sketch: "/graphism/logos/coyote/sketch.jpg",
    image: "/graphism/logos/coyote/logo.webp",
    mockups: [
      "/graphism/logos/coyote/mockup3.webp",
      "/graphism/logos/coyote/mockup2.webp",
      "/graphism/logos/coyote/mockup1.webp",
    ],
  },
  {
    title: "Marco & Monti",
    brief: "logos.mm.brief",
    sketch: "",
    image: "/graphism/logos/mm/logo.png",
    mockups: [
      "/graphism/logos/mm/mockup3.webp",
      "/graphism/logos/mm/mockup2.webp",
      "/graphism/logos/mm/mockup1.webp",
    ],
  },
  {
    title: "Pandacare",
    brief: "logos.pandacare.brief",
    sketch: "/graphism/logos/pandacare/sketch.webp",
    image: "/graphism/logos/pandacare/logo.png",
    mockups: [
      "/graphism/logos/pandacare/mockup2.webp",
      "/graphism/logos/pandacare/mockup1.webp",
    ],
  },
  {
    title: "Ridefit",
    brief: "logos.ridefit.brief",
    sketch: "/graphism/logos/ridefit/sketch.webp",
    image: "/graphism/logos/ridefit/logo.webp",
    mockups: [
      "/graphism/logos/ridefit/mockup1.webp",
      "/graphism/logos/ridefit/mockup2.webp",
      "/graphism/logos/ridefit/mockup3.webp",
    ],
  },
  {
    title: "Aquila",
    brief: "logos.aquila.brief",
    sketch: "/graphism/logos/aquila/sketch.webp",
    image: "/graphism/logos/aquila/logo.webp",
    mockups: [
      "/graphism/logos/aquila/mockup1.webp",
      "/graphism/logos/aquila/mockup2.webp",
      "/graphism/logos/aquila/mockup3.webp",
    ],
  },
  {
    title: "Ferret",
    brief: "logos.ferret.brief",
    sketch: "/graphism/logos/ferret/sketch.webp",
    image: "/graphism/logos/ferret/logo.webp",
    mockups: [
      "/graphism/logos/ferret/mockup1.webp",
      "/graphism/logos/ferret/mockup2.webp",
      "/graphism/logos/ferret/mockup3.webp",
    ],
  },
];
