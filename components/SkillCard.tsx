// Shared Component #4 : SkillCard
// การ์ดแสดงทักษะแยกตามหมวดหมู่ พร้อม progress bar
import type { SkillCategory } from "@/data/skills";

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface/60 p-7 transition-transform hover:-translate-y-1">
      <div className="mb-6 flex items-center gap-3">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl text-2xl"
          style={{ backgroundColor: `${category.color}22` }}
        >
          {category.icon}
        </span>
        <h3 className="font-display text-xl font-semibold">{category.title}</h3>
      </div>

      <ul className="space-y-5">
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="font-display text-muted">{skill.level}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: category.color,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
