"use client";

// Shared Component #5 : ProjectCard
// รูปเต็มกล่อง (gallery style) → hover ค่อยโชว์รายละเอียด, คลิกรูปดูเต็มจอ
// บนมือถือ (ไม่มี hover) จะโชว์รายละเอียดครบตลอด
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { GitHubIcon } from "@/components/Icons";
import Lightbox from "@/components/Lightbox";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-surface">
      {/* รูปเต็มกล่อง */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      {/* เลเยอร์คลิกเพื่อดูรูปเต็ม */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`ดูรูปเต็มของ ${project.title}`}
        className="absolute inset-0 z-10"
      />

      {/* ป้ายปี (โชว์ตลอด) */}
      <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-full bg-background/80 px-3 py-1 font-display text-xs font-semibold text-accent backdrop-blur">
        {project.year}
      </span>

      {/* แถบชื่อ (โชว์ตลอดบนเดสก์ท็อป, ซ่อนตอน hover) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0">
        <h3 className="font-display text-base font-bold text-white">
          {project.title}
        </h3>
        <p className="mt-0.5 text-xs text-white/70">{project.role}</p>
      </div>

      {/* แผงรายละเอียด (ขึ้นตอน hover บนเดสก์ท็อป, โชว์ตลอดบนมือถือ) */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/85 to-black/20 p-5 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
        <h3 className="font-display text-lg font-bold text-white">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/80">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs text-white/70">
          <span className="font-semibold text-white">บทบาท: </span>
          {project.role}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-accent hover:text-background"
        >
          <GitHubIcon className="h-4 w-4" />
          View on GitHub
        </a>
      </div>

      {open && (
        <Lightbox
          image={project.image}
          alt={project.title}
          onClose={() => setOpen(false)}
        />
      )}
    </article>
  );
}
