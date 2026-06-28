import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ปิดป้าย Dev indicator ("N") มุมล่างซ้าย ให้หน้าจอสะอาดตอนพัฒนา
  // (ป้ายนี้ขึ้นเฉพาะตอน dev อยู่แล้ว ไม่มีผลกับเว็บที่ deploy จริง)
  devIndicators: false,
  images: {
    // อนุญาตให้ next/image โหลดรูปจากอินเทอร์เน็ต (Unsplash) สำหรับหน้า Projects และ Gallery
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
