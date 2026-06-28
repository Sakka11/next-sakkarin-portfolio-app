// หน้า Home ( / ) — หน้าสรุป: Hero → Skills → Projects → Gallery → Contact (มี See More ไปหน้าเต็ม)
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { gallery } from "@/data/gallery";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import {
  GitHubIcon,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  ReactAtomIcon,
  LogoMark,
} from "@/components/Icons";

const socials = [
  {
    href: profile.contact.github,
    label: "GitHub",
    icon: <GitHubIcon className="h-5 w-5" />,
  },
  {
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`,
    label: "Email",
    icon: <EmailIcon className="h-5 w-5" />,
  },
  {
    href: `https://line.me/ti/p/~${profile.contact.lineId}`,
    label: "Line",
    icon: <LineIcon className="h-5 w-5" />,
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: <FacebookIcon className="h-5 w-5" />,
  },
];

// ปุ่ม See More ไปหน้าเต็ม
function SeeMore({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-10 text-center">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 font-mono text-sm font-bold text-accent transition-colors hover:bg-accent/10"
      >
        {label} →
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[130px]" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-2/10 blur-[130px]" />
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-6 md:grid-cols-2">
          {/* ฝั่งซ้าย: ข้อความ */}
          <div className="order-2 md:order-1">
            <p className="animate-fade-up flex items-center gap-3 font-mono text-sm text-muted">
              <span className="h-px w-8 bg-accent" />
              {profile.position} | Software Developer
            </p>

            <h1 className="animate-fade-up mt-4 font-mono text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl [animation-delay:0.1s]">
              <span className="text-foreground">Hello, I&apos;m</span>
              <br />
              <span className="text-gradient">{profile.nameEn}</span>
            </h1>

            <p className="animate-fade-up mt-3 font-display text-lg text-muted [animation-delay:0.15s]">
              {profile.nameTh} · ({profile.nickname})
            </p>

            <p className="animate-fade-up mt-4 max-w-md font-accent text-base leading-relaxed text-muted [animation-delay:0.2s]">
              {profile.intro}
            </p>

            <div className="animate-fade-up mt-7 flex flex-wrap items-center gap-4 [animation-delay:0.25s]">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-accent transition-colors hover:bg-accent/10"
              >
                Download CV ⬇
              </a>

              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ฝั่งขวา: รูป + กราฟิกเทค */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              <div className="absolute inset-4 rounded-full bg-accent/25 blur-3xl" />
              <div
                aria-hidden
                className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-accent/30"
              />

              {/* ไอคอนโค้ด (ซ้ายล่าง) ลอยขึ้น */}
              <div className="animate-float absolute -bottom-3 -left-3 h-14 w-14 overflow-hidden rounded-2xl shadow-lg shadow-black/40">
                <LogoMark className="h-full w-full" />
              </div>

              {/* React (ขวาบน) ลอยสลับ */}
              <div className="animate-float absolute -right-3 -top-3 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lg shadow-black/40 [animation-delay:-3s]">
                <ReactAtomIcon className="h-9 w-9 text-[#149eca]" />
              </div>

              <div className="absolute inset-5 overflow-hidden rounded-full border-2 border-white/10 shadow-2xl">
                <Image
                  src={profile.photo}
                  alt={`รูปโปรไฟล์ของ ${profile.nameEn}`}
                  fill
                  priority
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SKILLS PREVIEW ===================== */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <SectionTitle
          eyebrow="Skills"
          title="ทักษะของผม"
          subtitle="ความสามารถด้าน Frontend, Backend, Database และ Tools"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
        <SeeMore href="/me/skills" label="ดูทักษะทั้งหมด" />
      </section>

      {/* ===================== PROJECTS PREVIEW ===================== */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <SectionTitle
          eyebrow="Projects"
          title="ผลงานเด่น"
          subtitle="ตัวอย่างผลงานบางส่วน — ดูทั้งหมดได้ในหน้า Projects"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <SeeMore href="/me/projects" label="ดูผลงานทั้งหมด" />
      </section>

      {/* ===================== GALLERY PREVIEW ===================== */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <SectionTitle
          eyebrow="Gallery"
          title="บรรยากาศการเขียนโปรแกรม"
          subtitle="ภาพบางส่วนจากแกลเลอรี"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {gallery.slice(0, 4).map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <SeeMore href="/me/gallery" label="ดูแกลเลอรีทั้งหมด" />
      </section>

      {/* ===================== CONTACT CTA ===================== */}
      <section className="mx-auto w-full max-w-4xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent/15 to-accent-2/15 p-10 text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            สนใจร่วมงานกันไหมครับ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            ยินดีพูดคุยเกี่ยวกับโอกาสในการทำงานหรือร่วมพัฒนาโปรเจกต์ — ติดต่อผมได้เลย
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 font-display font-semibold text-background shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              ติดต่อผม →
            </Link>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface/60 px-7 py-3 font-display font-semibold transition-colors hover:border-accent/50 hover:text-accent"
            >
              ⬇ Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
