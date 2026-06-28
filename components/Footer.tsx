// Shared Component #2 : Footer
// เลย์เอาต์: โลโก้ซ้าย | ลิขสิทธิ์กลาง | ช่องทางติดต่อ (dropdown) ขวา
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import {
  GitHubIcon,
  EmailIcon,
  FacebookIcon,
  LineIcon,
} from "@/components/Icons";
import nameImg from "@/assets/images/name.png";

export default function Footer() {
  const year = new Date().getFullYear();

  // เปิด Gmail compose ตรง ๆ (กดได้ชัวร์ ไม่ต้องพึ่งโปรแกรมเมลในเครื่อง)
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`;

  const channels = [
    {
      label: "Email",
      value: profile.contact.email,
      href: gmail,
      icon: <EmailIcon className="h-4 w-4" />,
    },
    {
      label: "Line",
      value: profile.contact.lineId,
      href: `https://line.me/ti/p/~${profile.contact.lineId}`,
      icon: <LineIcon className="h-4 w-4" />,
    },
    {
      label: "Facebook",
      value: profile.contact.facebook,
      href: "https://www.facebook.com/",
      icon: <FacebookIcon className="h-4 w-4" />,
    },
    {
      label: "GitHub",
      value: "github.com/Sakka11",
      href: profile.contact.github,
      icon: <GitHubIcon className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-surface/50">
      <div className="mx-auto grid max-w-6xl items-center gap-5 px-5 py-7 text-center sm:grid-cols-3">
        {/* ซ้าย: แบรนด์ */}
        <div className="flex justify-center sm:justify-start">
          <Link href="/" className="block">
            <span className="relative block h-12 w-44 shrink-0 transition-transform hover:scale-105">
              <Image
                src={nameImg}
                alt="Sakkarin Opasri"
                fill
                sizes="176px"
                className="object-cover object-center mix-blend-screen brightness-200 contrast-150 invert"
              />
            </span>
          </Link>
        </div>

        {/* กลาง: ลิขสิทธิ์ + tagline */}
        <div className="text-sm">
            <p className="font-mono text-xs text-muted/70">
                Developed by {profile.nameEn} • DTI Student at SAU © {year}
            </p>
        </div>

        {/* ขวา: ช่องทางติดต่อ (hover = เปิด dropdown ขึ้นด้านบน) */}
        <div className="flex justify-center sm:justify-end">
          <div className="group relative">
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-mono text-sm transition-colors group-hover:border-accent/50 group-hover:text-accent">
              ช่องทางติดต่อ
              <span className="transition-transform group-hover:-rotate-180">
                ▾
              </span>
            </button>

            {/* เมนู dropdown */}
            <div className="invisible absolute bottom-full right-0 z-10 mb-2 w-56 translate-y-1 rounded-2xl border border-white/10 bg-surface p-2 text-left opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-accent">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-foreground">
                      {c.label}
                    </span>
                    <span className="block truncate text-xs text-muted">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
