// ผลงานโครงการจริงจาก GitHub ของ Sakkarin Opasri (github.com/Sakka11)
// รูปทั้งหมดเป็นรูปจริงจาก README/เว็บที่ deploy แล้ว (static import จาก assets)
import type { StaticImageData } from "next/image";

import rnAutoLoanImg from "@/assets/images/projects/rn-autoloan.jpg";
import rnMoneyImg from "@/assets/images/projects/rn-money.jpg";
import rnRunImg from "@/assets/images/projects/rn-run.jpg";
import rnCoffeeImg from "@/assets/images/projects/rn-coffee.jpg";
import flutterCakeImg from "@/assets/images/projects/flutter-cake.png";
import flutterHotlineImg from "@/assets/images/projects/flutter-hotline.png";

export const githubProfile = "https://github.com/Sakka11";

export type Project = {
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  role: string;
  year: string;
  github: string; // ลิงก์ repo จริงบน GitHub
};

export const projects: Project[] = [
  {
    title: "Smart Auto Loan",
    image: rnAutoLoanImg,
    description:
      "แอปมือถือคำนวณค่างวดรถ/วางแผนสินเชื่อรถยนต์ เลือกราคารถ เงินดาวน์ และจำนวนงวด แล้วคำนวณค่างวดให้ทันที พัฒนาด้วย React Native",
    technologies: ["React Native", "TypeScript", "Expo"],
    role: "Mobile Developer",
    year: "2026",
    github: "https://github.com/Sakka11/rn-smart-auto-loan-app",
  },
  {
    title: "Money Tracking",
    image: rnMoneyImg,
    description:
      "แอปมือถือบันทึกและติดตามรายรับ-รายจ่าย มีหน้า Dashboard สรุปยอดเงินคงเหลือ ยอดเงินเข้า-ออก และแนบสลิปได้ พัฒนาด้วย React Native",
    technologies: ["React Native", "TypeScript", "Expo"],
    role: "Mobile Developer",
    year: "2026",
    github: "https://github.com/Sakka11/rn-money-tracking-app",
  },
  {
    title: "Top BKK Coffee",
    image: rnCoffeeImg,
    description:
      "แอปมือถือรวมร้านกาแฟเด็ดในกรุงเทพฯ แสดงรายละเอียดร้าน เมนูแนะนำ และช่องทางติดต่อ พัฒนาด้วย React Native",
    technologies: ["React Native", "TypeScript", "Expo"],
    role: "Mobile Developer",
    year: "2026",
    github: "https://github.com/Sakka11/rn-top-bkk-coffee-app",
  },
  {
    title: "สายด่วนกินเค้ก (Cake Call Fast)",
    image: flutterCakeImg,
    description:
      "แอปมือถือรวมร้านขนมเค้ก แสดงรายชื่อร้าน เมนู และเบอร์ติดต่อ สั่งซื้อได้สะดวก พัฒนาด้วย Flutter",
    technologies: ["Flutter", "Dart"],
    role: "Mobile Developer",
    year: "2026",
    github: "https://github.com/Sakka11/flutter_cake_shop_app",
  },
  {
    title: "Run Tracker",
    image: rnRunImg,
    description:
      "แอปมือถือติดตามการวิ่งเพื่อสุขภาพ สรุปจำนวนครั้งและระยะทางรวม พร้อมบันทึกสถานที่ที่ไปวิ่ง พัฒนาด้วย React Native",
    technologies: ["React Native", "TypeScript", "Expo"],
    role: "Mobile Developer",
    year: "2026",
    github: "https://github.com/Sakka11/rn-run-tracker-app",
  },
  {
    title: "Thai Hot Line (สายด่วน)",
    image: flutterHotlineImg,
    description:
      "แอปมือถือรวมเบอร์สายด่วน/ฉุกเฉินในไทย แยกหมวดหมู่ เช่น สาธารณูปโภค กดโทรออกได้ทันทีจากในแอป พัฒนาด้วย Flutter",
    technologies: ["Flutter", "Dart"],
    role: "Mobile Developer",
    year: "2026",
    github: "https://github.com/Sakka11/flutter_hot_line-main",
  },
];

// ผลงานอื่น ๆ บน GitHub (เป็น repo จริง) แสดงเป็นลิงก์ให้ดูเพิ่มเติม
export const otherRepos: string[] = [
  "next-second-app",
  "next-third-app",
  "next-first-app",
  "rn-6852D10030-app",
  "rn-bmr-v2-app",
  "rn-hopeline-app",
  "flutter_body_health_calculator_app",
  "flutter_sau_life_app",
  "react-task-app",
  "react-dti-sau-third-app",
  "MyPythonGit",
  "WorkShop-Quiz01",
];
