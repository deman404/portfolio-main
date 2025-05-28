import { Skill, Experience, Education } from "../types";

export const skills: Skill[] = [
  { name: "React", level: 95, category: "development" },
  { name: "TypeScript", level: 90, category: "development" },
  { name: "Node.js", level: 85, category: "development" },
  { name: "Next.js", level: 80, category: "development" },
  { name: "React Native", level: 85, category: "development" },
  { name: "MongoDB", level: 80, category: "development" },
  { name: "Firebase", level: 80, category: "development" },
  { name: "Java", level: 65, category: "development" },
  { name: "C", level: 50, category: "development" },
  { name: "C#", level: 60, category: "development" },
  { name: "UI/UX Design", level: 80, category: "design" },
  { name: "Figma", level: 85, category: "design" },
  { name: "Sketch", level: 75, category: "design" },
  { name: "Adobe XD", level: 70, category: "design" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "Jest", level: 80, category: "tools" },
  { name: "CI/CD", level: 75, category: "tools" },
];

export const experiences: Experience[] = [
  {
    company: "Self learn",
    position: "Senior Frontend Developer",
    duration: "2023 - Present",
    description:
      "Lead development of multiple high-traffic web applications, mentored junior developers, and implemented performance optimizations resulting in 40% faster load times.",
  },
  {
    company: "Self learn",
    position: "Full Stack Developer",
    duration: "2023 - 2025",
    description:
      "Developed and maintained client projects using React, Node.js, and various databases. Created responsive and accessible interfaces for clients in finance, healthcare, and e-commerce.",
  },
  {
    company: "Self learn",
    position: "Frontend Developer",
    duration: "2019 - 2021",
    description:
      "Built interactive user interfaces for early-stage startups, implemented modern frontend frameworks, and collaborated with UX designers to create engaging user experiences.",
  },
];

export const education: Education[] = [
  {
    institution: "Youtube",
    degree: "Web dev",
    duration: "2017 - 2019",
  },
  {
    institution: "udemy",
    degree: "NextJS",
    duration: "2020",
  },
  {
    institution: "udemy",
    degree: "mobile dev",
    duration: "2022",
  },
  {
    institution: "SAGIM",
    degree: "Development degital",
    duration: "2025",
  },
];
