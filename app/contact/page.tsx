// หน้า Contact ( /contact )
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import {
  GitHubIcon,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  PhoneIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact | Sakkarin Opasri",
  description: "ช่องทางการติดต่อ Email, เบอร์โทร, Line, Facebook, GitHub และดาวน์โหลด Resume",
};

const channels = [
  {
    icon: <EmailIcon className="h-6 w-6" />,
    label: "Email",
    value: profile.contact.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`,
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    label: "เบอร์โทรศัพท์",
    value: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/-/g, "")}`,
  },
  {
    icon: <LineIcon className="h-6 w-6" />,
    label: "Line ID",
    value: profile.contact.lineId,
    href: `https://line.me/ti/p/~${profile.contact.lineId}`,
  },
  {
    icon: <FacebookIcon className="h-6 w-6" />,
    label: "Facebook",
    value: profile.contact.facebook,
    href: "https://www.facebook.com/",
  },
  {
    icon: <GitHubIcon className="h-6 w-6" />,
    label: "GitHub",
    value: profile.contact.github.replace("https://", ""),
    href: profile.contact.github,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <SectionTitle
        eyebrow="Contact"
        title="ติดต่อผม"
        subtitle="ยินดีพูดคุยเกี่ยวกับโอกาสในการทำงานหรือร่วมพัฒนาโปรเจกต์"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={/^(mailto|tel):/.test(c.href) ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 p-5 transition-colors hover:border-accent/50"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-accent">
              {c.icon}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-sm font-semibold text-accent">
                {c.label}
              </span>
              <span className="block truncate text-foreground">{c.value}</span>
            </span>
          </a>
        ))}
      </div>

      {/* ปุ่ม Download Resume */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 font-display font-semibold text-background shadow-lg transition-transform hover:-translate-y-0.5"
        >
          ⬇️ Download Resume
        </a>
        <p className="text-sm text-muted">ดาวน์โหลดประวัติย่อ (Resume) ในรูปแบบ PDF</p>
      </div>
    </section>
  );
}
