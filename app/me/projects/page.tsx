// หน้า Projects ( /me/projects )
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { GitHubIcon } from "@/components/Icons";
import { projects, otherRepos, githubProfile } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Sakkarin Opasri",
  description: "ผลงานโครงการจริงบน GitHub พร้อมเทคโนโลยีและบทบาทหน้าที่",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        eyebrow="Projects"
        title="ผลงานของผม"
        subtitle="ตัวอย่างโครงการจริงจาก GitHub แสดงเทคโนโลยีที่ใช้ บทบาทหน้าที่ และปีที่พัฒนา"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* ผลงานอื่น ๆ บน GitHub */}
      <div className="mt-14 rounded-2xl border border-white/10 bg-surface/60 p-8 text-center">
        <h2 className="font-display text-xl font-semibold">
          ผลงานอื่น ๆ บน GitHub
        </h2>
        <p className="mt-2 text-sm text-muted">
          ยังมีผลงานอีกหลายโครงการ (เว็บ, React Native, Flutter, Python)
          สามารถเข้าดูได้ทั้งหมดบน GitHub
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {otherRepos.map((repo) => (
            <a
              key={repo}
              href={`${githubProfile}/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition-colors hover:border-accent/50 hover:text-accent"
            >
              {repo}
            </a>
          ))}
        </div>

        <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-display font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          <GitHubIcon className="h-5 w-5" />
          ดูผลงานทั้งหมดบน GitHub
        </a>
      </div>
    </section>
  );
}
