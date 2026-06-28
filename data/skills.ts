// หมวดหมู่ความสามารถ (Skills) แบ่งเป็น 4 กลุ่มตามตัวอย่างในโจทย์

export type SkillCategory = {
  title: string;
  icon: string;
  color: string; // ใช้คุมสี accent ของการ์ดแต่ละหมวด
  skills: { name: string; level: number }[]; // level = 0-100 สำหรับ progress bar
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "#38bdf8",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS / Tailwind", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 78 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "#34d399",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "#a78bfa",
    skills: [
      { name: "MySQL", level: 78 },
      { name: "PostgreSQL", level: 70 },
      { name: "Supabase", level: 68 },
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "#f59e0b",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 60 },
    ],
  },
];
