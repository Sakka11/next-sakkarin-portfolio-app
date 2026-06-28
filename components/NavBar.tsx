"use client";

// Shared Component #1 : NavBar
// แถบนำทางหลัก ใช้ร่วมกันทุกหน้าผ่าน layout.tsx รองรับการ highlight เมนูที่ active
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import nameImg from "@/assets/images/name.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/me/skills", label: "Skills" },
  { href: "/me/projects", label: "Projects" },
  { href: "/me/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* ลายเซ็น (กดกลับหน้าแรกได้) — crop เฉพาะเส้น + invert/screen ให้เป็นสีอ่อนบนพื้นมืด */}
        <Link href="/" className="block">
          <span className="relative block h-14 w-52 shrink-0 transition-transform hover:scale-105">
            <Image
              src={nameImg}
              alt="Sakkarin Opasri"
              fill
              sizes="208px"
              priority
              className="object-cover object-center mix-blend-screen brightness-200 contrast-150 invert"
            />
          </span>
        </Link>

        {/* เมนูสำหรับจอใหญ่ */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-3.5 py-2 font-mono text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ปุ่มเมนูสำหรับมือถือ */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-foreground md:hidden"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* เมนูแบบ dropdown สำหรับมือถือ */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-5 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-2 font-mono text-sm transition-colors ${
                  isActive(link.href)
                    ? "bg-accent/15 text-accent"
                    : "text-muted hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
