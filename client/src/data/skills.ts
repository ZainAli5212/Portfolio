
export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "devops" | "other";
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    level: 5,
    category: "frontend"
  },
  {
    name: "TypeScript",
    icon: "typescript",
    level: 4,
    category: "frontend"
  },
  {
    name: "Node.js",
    icon: "nodejs",
    level: 4,
    category: "backend"
  },
  {
    name: "Express",
    icon: "express",
    level: 4,
    category: "backend"
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    level: 3,
    category: "backend"
  },
  {
    name: "Docker",
    icon: "docker",
    level: 3,
    category: "devops"
  },
  {
    name: "AWS",
    icon: "aws",
    level: 3,
    category: "devops"
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    level: 5,
    category: "frontend"
  }
];
