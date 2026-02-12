import { type Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "BNY (Bank of New York Mellon)",
    role: "Software Engineer Intern",
    start: "January 2026",
    end: "Present",
    location: "Orlando, FL",
    description:
      "Developing an Infrastructure Digital Engineer, an AI agent based system tailored to automate monitoring, issue detection, and resolution for financial microservices. Engineering the solution using Java, Spring Boot, and PostgreSQL within a Dockerized architecture, while integrating Prometheus, Grafana, and AppDynamics for full-stack observability.",
    achievements: [
      "Working on semester long app development project with Kai Sprunger, Carlos Catala, and Nicole Bustos",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Prometheus", "Grafana", "AppDynamics", "GitLab", "Agile", "Jira"],
    logo: "/images/experience/bny-logo.png",
    links: [
      { label: "Company Website", url: "https://www.bny.com/corporate/global/" },
    ],
    media: [
      { type: "image", src: "/images/experience/bny-office.jpg", alt: "BNY CTOC Lab" },
      { type: "image", src: "/images/experience/bny-ucf.jpg", alt: "BNY x UCF Collaboration" },
    ],
    colorScheme: {
      primary: "#2D9BAD",
      secondary: "#00243E",
      techBg: "#2D9BAD26", // Primary w/ 15% opacity
    },
  },
  {
    company: "Center for Research in Computer Vision",
    role: "Undergraduate Computer Vision Researcher",
    start: "January 2026",
    end: "Present",
    location: "Orlando, FL",
    description:
      "Working with the Meta Superintelligence Lab's SAM 3 computer vision model to build a novel dynamic memory buffer for long-term video understanding.",
    achievements: [
      "Spring 2026 Undergraduate Computer Vision Researcher under Dr. Yogesh S Rawat",
    ],
    technologies: ["Python", "PyTorch", "SAM 3", "COCO", "Anaconda", "Bash", "HPC", "Technical Writing", "Video Segmentation", "Dynamic Memory",],
    logo: "/images/experience/crcv-logo.jpg",
    links: [
      { label: "Company Website", url: "https://www.crcv.ucf.edu/" },
    ],
    media: [
      { type: "image", src: "/images/experience/crcv-building.jpg", alt: "CRCV Research Lab in L3Harris Engineering Center" },
    ],
    colorScheme: {
      primary: "#FFCC00",
      secondary: "#404040",
      techBg: "#FFCC0026", // Primary w/ 15% opacity
    },
  },
  {
    company: "Knight Hacks",
    role: "Outreach Board Member",
    start: "February 2026",
    end: "Present",
    location: "Orlando, FL",
    description:
      "Outreach team at UCF's premier hackathon organization, promoting in workshops, hackathons, and mentorship programs.",
    achievements: [
      "Operation Meetings (Fall 2025)",
      "Kickstart Mentorship (Fall 2025)",
      "Knight Hacks VIII (Oct 2025)",
      "GemiKnights (Jun 2025)",
      "Project Launch (Spring 2025)",
      "Knight Hacks VII (October 2024)",
      "Workshops (Fall 2024 - Present)",
    ],
    technologies: ["Community", "Public Speaking", "Event Planning", "Social Media", "Content Creation", "Content Capturing", "Hackathons"],
    logo: "/images/experience/kh-logo.svg",
    links: [
      { label: "Club Website", url: "https://club.knighthacks.org/" },
    ],
    media: [
      { type: "image", src: "/images/experience/kh-kickstart.jpg", alt: "Knight Hacks Kickstart Mentorship" }
    ],
    colorScheme: {
      primary: "#ffe90d",
      secondary: "#862a5f",
      techBg: "#ffe90d26", // Primary w/ 15% opacity
    },
  },
  {
    company: "Graphics Programming Knights",
    role: "Co-founder / Secretary / Software Engineer",
    start: "July 2025",
    end: "Present",
    location: "Orlando, FL",
    description:
      "Co-founded and lead a nonprofit student organization focused on graphics programming, fostering an inclusive community for aspiring game developers and graphics enthusiasts.",
    achievements: [
      "Co-founded and scaled a nonprofit student organization to 160+ members, fostering an inclusive community",
      "Coordinated Render Jam event logistics and management for over 40 participants, culminating in 5 completed projects",
      "Drove membership growth by 35+ through strategic promotion at Opening Knight and the Knight Hacks RSO Fair",
      "Established a centralized Notion workspace for 6 officers to streamline event planning and operations by 50%",
    ],
    technologies: ["OpenGL", "Vulkan", "C++", "Game Development"],
    logo: "/images/experience/gpk-logo.png",
    links: [
      { label: "KnightConnect", url: "https://knightconnect.campuslabs.com/engage/organization/graphicsprogrammingknights" },
    ],
    media: [
      { type: "image", src: "/images/experience/gpk-renderjam.png", alt: "GPK Render Jam Event" },
      { type: "image", src: "/images/experience/gpk-workshop.png", alt: "GPK x KH Workshop" },
    ],
    colorScheme: {
      primary: "#9D1FAA",
      secondary: "#180d3b",
      techBg: "#9D1FAA26", // Primary w/ 15% opacity
    },
  },
  {
    company: "Data-Enabled Photovoltaics",
    role: "Software Engineer Intern",
    start: "June 2024",
    end: "August 2024",
    location: "Remote",
    description:
      "Conducted research on multimodal deep learning for photovoltaic module analysis, implementing machine learning models for voltage prediction and defect detection.",
    achievements: [
      "Co-authored (as 2nd author) a research paper on the Multimodal Deep Learning for Photovoltaic Modules (in progress)",
      "Improved voltage prediction accuracy from 51% to 77% by implementing wavelet-enhanced LSTM models",
      "Achieved an R² of 53% and MAE of 0.89 for crack defect prediction using Multi-Layer Perceptrons (MLPs)",
      "Engineered an image processing pipeline using Marimo notebooks, reducing data processing time by 25%",
      "Architected a foundational Python package by refactoring 14 scripts to accelerate future research and development",
    ],
    technologies: ["Python", "NumPy", "Pandas", "PyTorch", "Marimo Notebook", "LSTM", "MLP", "Deep Learning", "Computer Vision"],
    logo: "/images/experience/dpv-logo.png",
    links: [
      { label: "Research Program", url: "https://ucf-dpv.notion.site/DARTS-2025-2498d52e715180b18c7fd1065e655faf?p=2498d52e7151801d89c8f4d5ea1a9ac7&pm=c" },
    ],
    media: [
      { type: "image", src: "/images/experience/dpv-team.jpg", alt: "DPV DARTS Showcase" },
    ],
    colorScheme: {
      primary: "#F9C710",
      secondary: "#1A1A1A",
      techBg: "#F9C71026", // Primary w/ 15% opacity
    },
  },
];

