import {
  Code,
  Database,
  Layout,
  Terminal,
  Cpu,
  BriefcaseBusiness,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: [
      "C++",
      "C",
      "Python",
      "SQL",
      "TypeScript",
      "Javascript",
      "HTML/CSS",
    ],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: [
      "Next.js",
      "React",
      "Redux",
      "jQuery",
      "ShadCn",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "JWT", "Cloudfare", "REST APIs", "CORS"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", , "Firebase", "PostgreSQL"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Github", "Postman", "Vercel", "Render", "Netlify"],
  },
  {
    name: "Tools & Technologies",
    icon: BriefcaseBusiness,
    skills: [
      "Data Structures",
      "OOPS",
      "Database Management System",
      "Operating System",
      "Computer Network",
    ],
  },
];
