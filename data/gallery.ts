// รูปภาพบรรยากาศ "กำลังเขียนโปรแกรม" สำหรับหน้า Gallery (อย่างน้อย 6 ภาพ)
// อ้างอิงรูปจาก Unsplash (อนุญาตให้ใช้รูปจากอินเทอร์เน็ตได้)

export type GalleryImage = {
  src: string;
  caption: string;
};

export const gallery: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    caption: "เขียนโค้ดบนหน้าจอ Editor",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    caption: "พัฒนาเว็บแอปด้วย JavaScript",
  },
  {
    src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=900&q=80",
    caption: "นั่งโค้ดยามค่ำคืน",
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    caption: "ดูโครงสร้างของโค้ดอย่างใกล้ชิด",
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=900&q=80",
    caption: "Source code บนจอภาพ",
  },
  {
    src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=900&q=80",
    caption: "โต๊ะทำงานของนักพัฒนา",
  },
  {
    src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=900&q=80",
    caption: "ทดสอบและดีบักโปรแกรม",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    caption: "พื้นที่ทำงานสาย Developer",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    caption: "พัฒนาเว็บแอปบนโน้ตบุ๊ก",
  },
];
