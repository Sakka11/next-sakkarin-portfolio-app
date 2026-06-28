// หน้า Contact ( /contact )
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactChannels from "@/components/ContactChannels";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact | Sakkarin Opasri",
  description:
    "ช่องทางการติดต่อ Email, เบอร์โทร, Line, Facebook, Instagram, GitHub และดาวน์โหลด Resume",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <SectionTitle
        eyebrow="Contact"
        title="ติดต่อผม"
        subtitle="ยินดีพูดคุยเกี่ยวกับโอกาสในการทำงานหรือร่วมพัฒนาโปรเจกต์"
      />

      <ContactChannels />

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
