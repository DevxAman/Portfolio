// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  drdo,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Experience",
    link: null,
  },
  {
    id: "education",
    title: "Education",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "research",
    title: "Research",
    link: null,
  },
  {
    id: "tech",
    title: "Tech Stack",
    link: null,
  },
  {
    id: "achievements",
    title: "Achievements",
    link: null,
  },
  {
    id: "timeline",
    title: "Timeline",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Artificial & Machine Learning",
    icon: web,
  },
  {
    title: "Data Engineering",
    icon: mobile,
  },
  {
    title: "Backend Systems",
    icon: backend,
  },
  {
    title: "Cloud Infrastructure",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "AI / Data Systems Intern",
    company_name: "DRDO Headquarters",
    icon: drdo,
    iconBg: "#383E56",
    date: "July 2025 - January 2026",
    points: [
      "Built analytical systems processing 3000+ defence R&D datasets.",
      "Designed robust ETL pipelines and deployed scalable analytical models.",
      "Developed decision-support frameworks tailored for defence research analysis.",
      "Contributed to research resulting in an IEEE-indexed publication.",
    ],
  },
  {
    title: "Data Analytics Intern",
    company_name: "TechnoHacks Solutions",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "November 2025 - December 2025",
    points: [
      "Analyzed multidimensional data sets to generate actionable business intelligence.",
      "Created visualizations and predictive models to support tactical decision making.",
      "Engineered automated data processing scripts for improved performance.",
    ],
  },
  {
    title: "Data Analytics & Software Intern",
    company_name: "Plasmid",
    icon: meta,
    iconBg: "#383E56",
    date: "May 2025 - July 2025",
    points: [
      "Developed scalable analytical tools to interpret complex operational metrics.",
      "Optimized database queries and significantly improved data-retrieval times.",
      "Integrated machine learning modules within existing corporate software architecture.",
    ],
  },
] as const;

// Achievements
export const ACHIEVEMENTS = [
  {
    testimonial:
      "Successfully authored and presented an IEEE-Indexed research paper on advanced data systems at IC2SDT, NIT Delhi.",
    name: "IC2SDT",
    designation: "Research",
    company: "NIT Delhi",
    image: user1,
  },
  {
    testimonial:
      "Winner of the National Bluelearn Hackathon 2023, building highly scalable artificial intelligence and data infrastructure tools.",
    name: "Hackathon",
    designation: "Innovation",
    company: "Bluelearn",
    image: user2,
  },
  {
    testimonial:
      "Played a critical role in developing analytical systems handling over 3000 diverse defence dataset operations.",
    name: "DRDO",
    designation: "Engineering",
    company: "Headquarters",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "ClinicOS",
    description:
      "An AI-enabled clinical operations platform engineered to manage complex healthcare workflows and deliver intelligent analytical insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/DevxAman/ClinicOS_AI_Clinical_Copilot",
    live_site_link: "https://clinic-os-seven.vercel.app/",
  },
  {
    name: "Punjabi Guard",
    description:
      "Advanced web platform acting as a digital information system focused on Punjabi community services and intelligent language processing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ml-models",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/DevxAman/Punjabi_hate_remarks_detection",
    live_site_link: "https://punjabi-guard.vercel.app/",
  },
  {
    name: "Defence R&D System",
    description:
      "An analytical intelligence system managing and processing large-scale technical data for advanced defence research frameworks.",
    tags: [
      {
        name: "data-engineering",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "distributed-systems",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/DevxAman",
    live_site_link: "#",
  },
  {
    name: "OCR Document Extractor",
    description:
      "High-accuracy Natural Language Processing model extracting vital structured data from highly complex unstructured documentation arrays.",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/DevxAman",
    live_site_link: "#",
  },
  {
    name: "GNDEC Portal",
    description:
      "Robust grievance redressal engineering platform designed to handle significant user concurrency and secure public complaints safely.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/DevxAman",
    live_site_link: "#",
  },
  {
    name: "AI Job Recommendation",
    description:
      "In-development machine learning pipeline identifying candidate fitness against industry vacancies utilizing advanced sentiment analysis variants.",
    tags: [
      {
        name: "ml",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/DevxAman",
    live_site_link: "#",
  },
] as const;

// Education
export const EDUCATION = [
  {
    institution: "Guru Nanak Dev Engineering College (GNDEC), Ludhiana",
    degree: "B.Tech — Computer Science & Engineering",
    years: "2022 – 2026",
    gpa: "8.5/10",
  },
  {
    institution: "Akal Academy Jand Sahib, Faridkot, Punjab",
    degree: "12th — Science",
    years: "2021 – 2022",
    percentage: "87%",
  },
  {
    institution: "Akal Academy Jand Sahib, Faridkot, Punjab",
    degree: "10th — Science",
    years: "2019 – 2020",
    percentage: "89%",
  },
] as const;

// Research
export const RESEARCH = [
  {
    badge: "IEEE PUBLISHED",
    venue: "IC2SDT — NIT Delhi · IEEE Xplore Indexed",
    title: "Innovation Orientation Index and Beyond: A Multi Metric Model for Evaluating DRDO-User Investment Patterns",
    description: "Developed a multi-metric analytical model to evaluate investment orientation patterns across DRDO-user collaborations using defence R&D datasets.",
    link: "https://ieeexplore.ieee.org/document/11383708",
    link_label: "View on IEEE Xplore →",
    tags: ["Defence Analytics", "Investment Modelling", "DRDO", "IEEE"],
    visual: "gold",
  },
  {
    badge: "ACCEPTED",
    venue: "ICCT-SD 2026",
    title: "Equipping Machine Learning for Organizational Project Efficiency and Schedule Assurance",
    description: "Proposed an ML-based framework to improve project scheduling accuracy and operational efficiency within organizational systems.",
    tags: ["Machine Learning", "Project Management", "Schedule Optimization"],
  },
  {
    badge: "ACCEPTED",
    venue: "ICCT-SD 2026",
    title: "Towards Verifiable Defence Information: An Evidence-Constrained Fact Verification Framework",
    description: "Designed a fact verification pipeline for defence information systems using evidence-constrained NLP and information retrieval techniques.",
    tags: ["Fact Verification", "NLP", "Defence AI", "Information Retrieval"],
  },
  {
    badge: "ACCEPTED",
    venue: "ICCT-SD 2026",
    title: "Uncertainty-Based Burnout vs Depression Detection from Social Media Screening",
    description: "Built an uncertainty-aware classification model to distinguish burnout from depression signals in social media data using NLP screening methods.",
    tags: ["Mental Health AI", "NLP", "Social Media", "Classification"],
  },
  {
    badge: "ONGOING",
    venue: "Under Review — Final Stage",
    title: "Media & Public Perception of DRDO — A Sentiment and Narrative Analysis Study",
    description: "Investigating media narrative patterns and public sentiment around DRDO using large-scale NLP pipelines and sentiment analysis.",
    tags: ["Sentiment Analysis", "Media Analytics", "DRDO", "NLP"],
    visual: "green",
  },
] as const;

// Timeline
export const TIMELINE = [
  { year: "2022", event: "Started B.Tech Computer Science & Engineering at GNDEC Ludhiana" },
  { year: "2023", event: "Won National Hackathon (Bluelearn Hackathon)" },
  { year: "2024", event: "Completed Data Analytics Training at Ansh Infotech (Skill India Certified)" },
  // { year: "2024", event: "Built ML Projects including Fraud Detection, Spam Classifier, Sentiment Analysis" },
  { year: "2024", event: "Data Science Intern — Bharat Intern" },
  { year: "2024", event: "Data Science Intern — CodeAlpha" },
  { year: "2025", event: "Data Analytics & Software Intern — Plasmid" },
  { year: "2025", event: "Data Analytics Intern — TechnoHacks Solutions" },
  { year: "2025", event: "AI / Data Systems Intern — DRDO Headquarters (Ministry of Defence)" },
  { year: "2025", event: "Developed analytical systems processing 3000+ defence R&D datasets" },
  { year: "2025", event: "IEEE Research Publication — IC2SDT (NIT Delhi)" },
  { year: "2026", event: "Three research papers accepted — ICCT-SD 2026" },
  { year: "2026", event: "Building advanced AI systems, deployed platforms and ongoing research" },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@DevxAman",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/amandeep-singh-991bb1254/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/DevxAman_",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/DevxAman",
  },
] as const;
