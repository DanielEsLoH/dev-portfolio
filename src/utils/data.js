import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/SurveyRails.png";
import PROJECT_IMG_2 from "../assets/images/Portfolio.png";
import PROJECT_IMG_3 from "../assets/images/Personal.jpg";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Ruby on Rails", level: 90, color: "bg-green-500" },
      { name: "Node.js", level: 70, color: "bg-gray-700" },
      { name: "Express.js", level: 60, color: "bg-yellow-500" },
      { name: "GraphQL", level: 80, color: "bg-pink-600" },
      { name: "REST APIs", level: 90, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "PostgreSQL", level: 88, color: "bg-green-600" },
      { name: "MongoDB", level: 85, color: "bg-blue-700" },
      { name: "Redis", level: 80, color: "bg-red-500" },
      { name: "Prisma", level: 82, color: "bg-indigo-600" },
      { name: "Firebase", level: 78, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-gray-900" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "Ruby",
  "HTML5",
  "CSS3",
  "Sass",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Figma",
  "Adobe XD",
  "Notion",
  "Slack",
];

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Survey App",
    description:
      "A full-stack survey application with advanced analytics and real-time feedback.",
    image: PROJECT_IMG_1,
    tags: ["Ruby on Rails", "Tailwind", "Hotwire", "PostgreSQL"],
    liveUrl: "https://surveyrails.fly.dev",
    githubUrl: "https://github.com/DanielEsLoH/course-rails",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Portfolio Website 1",
    description:
      "A modern and responsive personal portfolio website built with ReactJS, showcasing featured projects, skills, and contact information. Includes smooth animations, dark mode support, and a clean user-friendly interface.",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "Tailwind"],
    liveUrl: "https://danielesloh.github.io/portfolio/",
    githubUrl: "https://github.com/DanielEsLoH/portfolio",
    featured: false,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management app with real-time updates, user authentication, and drag-and-drop functionality.",
    image: PROJECT_IMG_3,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },
  {
    id: 4,
    title: "AI-powered Interview Prep App",
    description:
      "A Smart AI-powered interview preparation app that helps users practice coding interviews with real-time feedback and analytics.",
    image: PROJECT_IMG_3,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 5,
    title: "Resume Builder App",
    description:
      "A fully functional resume builder app that allows users to create, edit, and download resumes in various formats.",
    image: PROJECT_IMG_3,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 6,
    title: "Expense Tracker App",
    description:
      "A simple yet effective expense tracker app that helps users manage their finances with ease.",
    image: PROJECT_IMG_3,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Starting Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development through online courses and tutorials.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined a startup as a junior developer, working on various projects and gaining hands-on experience.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Freelancing and Building Portfolio",
    company: "Freelance",
    description:
      "Started freelancing, building a diverse portfolio of projects across different industries.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "Full Stack Developer at Tech Company",
    company: "Tech Company",
    description:
      "Currently working as a full stack developer, focusing on building scalable web applications.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Open Source Contributions",
    company: "Open Source Community",
    description:
      "Contributed to various open source projects, enhancing skills and giving back to the community.",
    icon: Award,
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Mentoring and Teaching",
    company: "Self-Employed",
    description:
      "Started mentoring aspiring developers and teaching web development through online platforms.",
    icon: Zap,
    color: "bg-cyan-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Capting intuitive interfaces taht users love",
  },
  {
    icon: Coffee,
    title: "Continuous Learning",
    description: "Always exploring new technologies and trends",
  },
  {
    icon: BookOpen,
    title: "Open Source",
    description: "Contributing to projects that make a difference",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/DanielEsLoH",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/daniel-esteban-londoño-henao-b9212b1b9",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://x.com/Daniel_EsLoH",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-50",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:daniel.esloh@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Medellín, Colombia",
  },
  {
    icon: Mail,
    label: "Email",
    value: "daniel.esloh@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+57 311 795 1525",
  },
];
