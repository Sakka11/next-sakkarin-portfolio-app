// หน้า Gallery ( /me/gallery )
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Sakkarin Opasri",
  description: "ภาพบรรยากาศการเขียนโปรแกรมและการทำงานของนักพัฒนา",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        eyebrow="Gallery"
        title="บรรยากาศการเขียนโปรแกรม"
        subtitle="รวมภาพบรรยากาศการพัฒนาและเขียนโค้ดในมุมต่าง ๆ (คลิกที่รูปเพื่อดูเต็มจอ)"
      />

      <GalleryGrid />
    </section>
  );
}
