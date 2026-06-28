// หน้า About Me ( /about )
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import {
  profile,
  education,
  experience,
  strengths,
  interests,
  hobbies,
} from "@/data/profile";

export const metadata: Metadata = {
  title: "About Me | Sakkarin Opasri",
  description: "ประวัติส่วนตัว ประวัติการศึกษา และเป้าหมายอาชีพของ ศักรินทร์ โอภาษี",
};

// การ์ดครอบกล่องเนื้อหา
function Card({
  title,
  icon,
  children,
  className = "",
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-surface/60 p-6 ${className}`}
    >
      <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionTitle
        eyebrow="About Me"
        title="ทำความรู้จักกับผม"
        subtitle={`${profile.nameTh} (${profile.nameEn}) — ${profile.position}`}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* ประวัติส่วนตัว */}
        <Card title="ประวัติส่วนตัว" icon="🪪">
          <ul className="space-y-2 font-accent text-muted">
            <li>
              <span className="font-semibold text-foreground">ชื่อ-นามสกุล:</span>{" "}
              {profile.nameTh} ({profile.nameEn})
            </li>
            <li>
              <span className="font-semibold text-foreground">ชื่อเล่น:</span>{" "}
              {profile.nickname}
            </li>
            <li>
              <span className="font-semibold text-foreground">วันเกิด:</span>{" "}
              {profile.bio.birthDate}
            </li>
            <li>
              <span className="font-semibold text-foreground">ที่อยู่:</span>{" "}
              {profile.bio.address}
            </li>
            <li className="pt-1">{profile.bio.summary}</li>
          </ul>
        </Card>

        {/* Career Objective */}
        <Card title="Career Objective" icon="🎯">
          <p className="font-accent leading-relaxed text-muted">
            {profile.objective}
          </p>
        </Card>

        {/* ประวัติการศึกษา */}
        <Card title="ประวัติการศึกษา" icon="🎓">
          <ol className="relative space-y-4 border-l border-white/10 pl-5">
            {education.map((edu) => (
              <li key={edu.level} className="relative">
                <span className="absolute -left-[1.55rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="font-semibold">{edu.level}</p>
                <p className="text-sm text-muted">{edu.place}</p>
                {edu.detail && (
                  <p className="text-xs text-muted/80">{edu.detail}</p>
                )}
              </li>
            ))}
          </ol>
        </Card>

        {/* ประวัติการทำงาน */}
        <Card title="ประวัติการทำงาน" icon="💼">
          <ol className="relative space-y-4 border-l border-white/10 pl-5">
            {experience.map((exp) => (
              <li key={exp.company} className="relative">
                <span className="absolute -left-[1.55rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-2" />
                <p className="font-display text-sm font-semibold text-accent-2">
                  {exp.period}
                </p>
                <p className="font-semibold">{exp.company}</p>
                {exp.role && <p className="text-sm text-muted">{exp.role}</p>}
              </li>
            ))}
          </ol>
        </Card>

        {/* จุดแข็ง */}
        <Card title="จุดแข็ง (Strengths)" icon="💪">
          <ul className="space-y-2 font-accent text-muted">
            {strengths.map((s) => (
              <li key={s.text} className="flex gap-2">
                <span>{s.icon}</span>
                {s.text}
              </li>
            ))}
          </ul>
        </Card>

        {/* ความสนใจ */}
        <Card title="ความสนใจ (Interests)" icon="✨">
          <ul className="space-y-2 font-accent text-muted">
            {interests.map((i) => (
              <li key={i.text} className="flex gap-2">
                <span>{i.icon}</span>
                {i.text}
              </li>
            ))}
          </ul>
        </Card>

        {/* งานอดิเรก — เต็มความกว้าง จัดเป็นกริดช่องเท่ากัน */}
        <Card title="งานอดิเรก (Hobbies)" icon="🎈" className="md:col-span-2">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {hobbies.map((h) => (
              <div
                key={h.text}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-colors hover:border-accent/40"
              >
                <span className="text-3xl">{h.icon}</span>
                <span className="font-accent text-sm text-muted">{h.text}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
