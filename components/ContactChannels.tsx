"use client";

// การ์ดช่องทางติดต่อ (หน้า Contact) — เบอร์โทรใช้ PhoneLink (มือถือโทร / คอมคัดลอก)
import { profile } from "@/data/profile";
import PhoneLink from "@/components/PhoneLink";
import {
  GitHubIcon,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  PhoneIcon,
  InstagramIcon,
} from "@/components/Icons";

type Channel = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  isPhone?: boolean;
};

const channels: Channel[] = [
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
    href: "#",
    isPhone: true,
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
    href: profile.contact.facebook_url,
  },
  {
    icon: <InstagramIcon className="h-6 w-6" />,
    label: "Instagram",
    value: `@${profile.contact.instagram}`,
    href: `https://www.instagram.com/${profile.contact.instagram}`,
  },
  {
    icon: <GitHubIcon className="h-6 w-6" />,
    label: "GitHub",
    value: profile.contact.github.replace("https://", ""),
    href: profile.contact.github,
  },
];

const cardClass =
  "flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 p-5 transition-colors hover:border-accent/50";

function CardInner({ c }: { c: Channel }) {
  return (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-accent">
        {c.icon}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-sm font-semibold text-accent">
          {c.label}
        </span>
        <span className="block truncate text-foreground">{c.value}</span>
      </span>
    </>
  );
}

export default function ContactChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {channels.map((c) =>
        c.isPhone ? (
          <PhoneLink key={c.label} className={cardClass}>
            <CardInner c={c} />
          </PhoneLink>
        ) : (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={cardClass}
          >
            <CardInner c={c} />
          </a>
        )
      )}
    </div>
  );
}
