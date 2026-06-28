import type { Metadata } from "next";
import { Kanit, Poppins, Sarabun, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import bgImage from "@/assets/images/background.png";

// ===== Font Optimization: ใช้ 3 ฟอนต์จาก Google Fonts ผ่าน next/font =====
// 1) Kanit  -> ฟอนต์หลัก (body) รองรับภาษาไทย
const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// 2) Poppins -> ฟอนต์หัวข้อ/ตัวเลข ดูโมเดิร์น
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// 3) Sarabun -> ฟอนต์เนื้อความภาษาไทยแบบทางการ
const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
});

// 4) JetBrains Mono -> ฟอนต์ monospace สไตล์ Developer ใช้กับหัวข้อ/เมนู/ปุ่ม
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sakkarin Opasri | Full Stack Developer Portfolio",
  description:
    "Portfolio ส่วนตัวของ ศักรินทร์ โอภาษี (Sakkarin Opasri) สำหรับสมัครตำแหน่ง Full Stack Developer พัฒนาด้วย Next.js",
  keywords: [
    "Sakkarin Opasri",
    "ศักรินทร์ โอภาษี",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
  ],
  authors: [{ name: "Sakkarin Opasri" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${poppins.variable} ${sarabun.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* พื้นหลังภาพทั้งเว็บ (fixed) + overlay มืดให้อ่านตัวอักษรออก */}
        <div
          aria-hidden
          className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        />
        <div aria-hidden className="fixed inset-0 -z-10 bg-background/80" />

        <NavBar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
