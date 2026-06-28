"use client";

// Component กลางสำหรับ "เบอร์โทร" ใช้ซ้ำทุกที่ (Home, Footer, Contact)
// มือถือ = แตะเพื่อโทร (tel:) / คอม = คลิกเพื่อคัดลอกเบอร์ + ขึ้น toast (ไม่เปิดแท็บขาว/ไม่ค้าง)
import { useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/data/profile";

const phoneDigits = profile.contact.phone.replace(/-/g, "");

export default function PhoneLink({
  className,
  ariaLabel,
  children,
}: {
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const [toast, setToast] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    // คอม (มีเมาส์) = กัน tel: ไม่ให้ทำงาน (ไม่มี prompt/ค้าง) → คัดลอกแทน
    if (!isTouch) e.preventDefault();

    const text = profile.contact.phone;
    const fallback = () => {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        /* ผู้ใช้ยังอ่านเบอร์จาก toast ได้ */
      }
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(fallback);
    } else {
      fallback();
    }
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };

  return (
    <>
      <a
        href={`tel:${phoneDigits}`}
        onClick={handleClick}
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </a>

      {/* toast แสดงเฉพาะตอนคลิก (client) — render ที่ body กัน transform ของการ์ดทำให้เพี้ยน */}
      {toast &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="animate-fade-up fixed inset-x-0 bottom-6 z-[9999] mx-auto w-fit rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-background shadow-lg">
            ✓ คัดลอกเบอร์โทรแล้ว ({profile.contact.phone})
          </div>,
          document.body
        )}
    </>
  );
}
