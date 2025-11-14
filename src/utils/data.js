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

// Optimized WebP images
import PROJECT_IMG_1 from "../assets/images/optimized/SurveyRails.webp";
import PROJECT_IMG_2 from "../assets/images/optimized/Portfolio.webp";
import PROJECT_IMG_3 from "../assets/images/Personal.jpg";
import PROJECT_IMG_4 from "../assets/images/optimized/CarRental.webp";
import PROJECT_IMG_5 from "../assets/images/optimized/SyncSpace.webp";

// Responsive variants for srcset
import PROJECT_IMG_1_400 from "../assets/images/optimized/SurveyRails-400w.webp";
import PROJECT_IMG_1_800 from "../assets/images/optimized/SurveyRails-800w.webp";
import PROJECT_IMG_1_1200 from "../assets/images/optimized/SurveyRails-1200w.webp";

import PROJECT_IMG_2_400 from "../assets/images/optimized/Portfolio-400w.webp";
import PROJECT_IMG_2_800 from "../assets/images/optimized/Portfolio-800w.webp";
import PROJECT_IMG_2_1200 from "../assets/images/optimized/Portfolio-1200w.webp";

import PROJECT_IMG_4_400 from "../assets/images/optimized/CarRental-400w.webp";
import PROJECT_IMG_4_800 from "../assets/images/optimized/CarRental-800w.webp";
import PROJECT_IMG_4_1200 from "../assets/images/optimized/CarRental-1200w.webp";

import PROJECT_IMG_5_400 from "../assets/images/optimized/SyncSpace-400w.webp";
import PROJECT_IMG_5_800 from "../assets/images/optimized/SyncSpace-800w.webp";
import PROJECT_IMG_5_1200 from "../assets/images/optimized/SyncSpace-1200w.webp";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 80, color: "bg-blue-500" },
      { name: "TypeScript", level: 65, color: "bg-blue-600" },
      { name: "Next.js", level: 65, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 80, color: "bg-cyan-500" },
      { name: "Bootstrap", level: 70, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Ruby on Rails", level: 90, color: "bg-green-500" },
      { name: "Node.js", level: 70, color: "bg-gray-700" },
      { name: "Express.js", level: 70, color: "bg-yellow-500" },
      { name: "JavaScript", level: 70, color: "bg-pink-600" },
      { name: "REST APIs", level: 80, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "PostgreSQL", level: 80, color: "bg-green-600" },
      { name: "MongoDB", level: 65, color: "bg-blue-700" },
      { name: "Redis", level: 40, color: "bg-red-500" },
      { name: "Prisma", level: 65, color: "bg-indigo-600" },
      { name: "Firebase", level: 40, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 60, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-gray-900" },
      { name: "Git", level: 99, color: "bg-orange-700" },
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
    imageSrcSet: `${PROJECT_IMG_1_400} 400w, ${PROJECT_IMG_1_800} 800w, ${PROJECT_IMG_1_1200} 1200w`,
    tags: ["Ruby on Rails", "Tailwind", "Hotwire", "PostgreSQL"],
    liveUrl: "https://surveyrails.fly.dev",
    githubUrl: "https://github.com/DanielEsLoH/course-rails",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Portfolio Website 1",
    description:
      "Responsive personal portfolio built with ReactJS, featuring projects, skills, contact info, and smooth UI with dark mode.",
    image: PROJECT_IMG_2,
    imageSrcSet: `${PROJECT_IMG_2_400} 400w, ${PROJECT_IMG_2_800} 800w, ${PROJECT_IMG_2_1200} 1200w`,
    tags: ["React", "Node.js", "Tailwind"],
    liveUrl: "https://danielesloh.github.io/portfolio/",
    githubUrl: "https://github.com/DanielEsLoH/portfolio",
    featured: false,
    category: "Frontend",
  },
  {
    id: 3,
    title: "CarRental App",
    description:
      "Car rental booking app with real-time availability, secure user authentication, and streamlined reservation management.",
    image: PROJECT_IMG_4,
    imageSrcSet: `${PROJECT_IMG_4_400} 400w, ${PROJECT_IMG_4_800} 800w, ${PROJECT_IMG_4_1200} 1200w`,
    tags: ["Express.js", "React", "Node.js", "MongoDb"],
    liveUrl: "https://car-rental-phi-one.vercel.app/",
    githubUrl: "https://github.com/DanielEsLoH/CarRental",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "SyncSpace",
    description:
      "A modern real-time social platform built with Next.js 16 and Ruby on Rails 8 — share ideas, connect instantly, and experience live updates across posts, comments, reactions and notifications.",
    image: PROJECT_IMG_5,
    imageSrcSet: `${PROJECT_IMG_5_400} 400w, ${PROJECT_IMG_5_800} 800w, ${PROJECT_IMG_5_1200} 1200w`,
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Ruby on Rails 8",
      "PostgreSQL 17",
      "WebSockets",
    ],
    liveUrl: "https://sync-space-cyan.vercel.app",
    githubUrl: "https://github.com/DanielEsLoH/SyncSpace",
    featured: true,
    category: "Full Stack",
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
    year: "2020",
    title: "Starting Coding Journey",
    company: "Make It Real",
    description:
      "Completed a one-year intensive in-person bootcamp focused on full-stack web development, gaining comprehensive knowledge of both front-end and back-end technologies.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2021",
    title: "Self-Directed Learning and Programming Growth",
    company: "Udemy, YouTube",
    description:
      "Spent the following year further developing programming expertise through continuous practice, personal projects, and self-directed learning.",
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
    title: "Backend Developer",
    company: "Freelance",
    description:
      "Freelance Backend Developer, building scalable web applications and backend systems with Ruby on Rails, delivering secure APIs and efficient database management.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Full-Stack Development with Ruby on Rails 7 & Hotwire",
    company: "Learning Platform",
    description:
      "Focused on mastering full-stack development with Ruby on Rails 7, exploring Hotwire (Turbo & Stimulus) to create dynamic, real-time applications with minimal JavaScript.",
    icon: Award,
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Building Full-Stack Applications with Modern JS Frameworks",
    company: "Freelance",
    description:
      "Developed personal projects and client websites using Node.js, Express.js, React, and Next.js, building both backend–frontend architectures and full-stack applications with responsive design.",
    icon: Zap,
    color: "bg-cyan-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
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
