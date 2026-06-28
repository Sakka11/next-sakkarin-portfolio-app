// หน้า Skills ( /me/skills )
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills | Sakkarin Opasri",
  description: "ทักษะความสามารถด้าน Frontend, Backend, Database และ Tools",
};

export default function SkillsPage() {
  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-7xl px-5 py-10">
        <SectionTitle
          eyebrow="Skills"
          title="ทักษะและความสามารถ"
          subtitle="แบ่งตามหมวดหมู่ Frontend, Backend, Database และ Tools ที่ใช้ในการพัฒนา"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
