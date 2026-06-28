// ข้อมูลส่วนตัวจริงทั้งหมด รวมไว้ที่เดียวเพื่อให้แก้ไขง่ายและนำไปใช้ซ้ำได้ทุกหน้า

// ใช้ static import รูปโปรไฟล์จากโฟลเดอร์ assets โดยตรง (รูปแบบเดียวกับที่เรียนใน next-second-app)
// next/image จะ optimize ให้อัตโนมัติ ไม่ต้องก๊อปไฟล์ไปไว้ใน public
import profilePhoto from "@/assets/images/profile.jpg";

export const profile = {
  nameTh: "ศักรินทร์ โอภาษี",
  nameEn: "Sakkarin Opasri",
  nickname: "เบียร์",
  position: "Full Stack Developer",
  photo: profilePhoto,
  resume: "/resume.pdf",

  // คำแนะนำตัวสั้น ๆ สำหรับหน้า Home
  intro:
    "สวัสดีครับ ผม ศักรินทร์ โอภาษี ผู้ที่เชื่อว่าการเขียนโค้ดไม่ใช่แค่การสร้างเว็บไซต์ แต่คือการสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน พร้อมพัฒนาทักษะและเรียนรู้สิ่งใหม่เพื่อก้าวสู่การเป็น Full Stack Developer",

  // ประวัติส่วนตัว
  bio: {
    birthDate: "23 กรกฎาคม 1993",
    address:
      "234/229 หมู่บ้านศุภาลัยวิลล์ เพชรเกษม 69 ถนนเลียบคลองภาษีเจริญฝั่งเหนือ แขวงหนองแขม เขตหนองแขม กรุงเทพมหานคร",
    summary:
      "นิสัย และ ความชอบส่วนตัว ชื่นชอบกีฬาฟุตบอลและฟุตซอล รักการท่องเที่ยวป่าเขา น้ำตก และธรรมชาติสีเขียว ชอบกางเต็นท์นอนฟังเสียงธรรมชาติแบบ สายแคมป์ปิ้ง",
  },

  // Career Objective
  objective:
    "ตั้งเป้าที่จะเป็น Full Stack Developer ที่สามารถเปลี่ยนไอเดียให้กลายเป็น Web Application หรือ Mobile Application ที่มีประสิทธิภาพ ใช้งานง่าย และตอบโจทย์ผู้ใช้งาน พร้อมพัฒนาตนเองอย่างต่อเนื่องและเรียนรู้เทคโนโลยีใหม่เพื่อสร้างนวัตกรรมให้กับองค์กร",

  // ข้อมูลติดต่อจริง
  contact: {
    email: "sakkarin.opa@gmail.com",
    phone: "095-789-2828",
    lineId: "beer10487",
    facebook: "Sakkarin Beer",
    // โปรไฟล์ล็อกอยู่ → ลิงก์ไปหน้า Facebook (เปิดได้เสมอ) แล้วค้นหาชื่อ "Sakkarin Beer" เอง
    facebook_url: "https://www.facebook.com/",
    instagram: "sakkarin_beer.23",
    github: "https://github.com/Sakka11",
  },
};

// ประวัติการศึกษา (เรียงจากปัจจุบัน -> อดีต)
export const education = [
  {
    level: "ปริญญาตรี (กำลังศึกษา)",
    place: "มหาวิทยาลัยเอเชียอาคเนย์",
    detail: "สาขาเทคโนโลยีดิจิทัล และ นวัตกรรม (DTI)",
  },
  {
    level: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
    place: "วิทยาลัยเทคโนโลยีฐานเทคโนโลยี",
    detail: "สาขาเทคนิค คอมพิวเตอร์",
  },
  {
    level: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
    place: "วิทยาลัยเทคโนโลยีฐานเทคโนโลยี",
    detail: "สาขาอิเล็กทรอนิกส์ และ คอมพิวเตอร์",
  },
  {
    level: "มัธยมศึกษาตอนต้น",
    place: "โรงเรียนวังไกลกังวล",
    detail: "",
  },
];

// ประวัติการทำงาน
export const experience = [
  {
    period: "2024 - 2026",
    company: "Wire & Wireless (บริษัทในเครือ CP)",
    role: "ปัจจุบัน ทำงานเป็น IT Officer : ดูและระบบ IT และ ระบบโครงสร้าง ภายในองค์กร ภายใต้ Site True Shop ทั่วประเทศ โดยมีหน้าที่ดูแลระบบ IT ทั้ง Hardware และ Software รวมถึงการแก้ไขปัญหา Remote Desktop , สร้าง Web Application ให้กับทางหน่วยงาน เพื่อความสะดวก ต่อผู้ใช้งาน พร้อมทั้ง ให้คำปรึกษาแก่ผู้ใช้งานภายในองค์กร",
  },
  {
    period: "2018 - 2024",
    company: "True Internet Corporation",
    role: "ช่างเทคนิค : ดูแลและให้บริการลูกค้า ทั้ง Onsite Service และ Onsite Installation ระบบข่ายสาย , สายสัญญาณ ระบบ Fiber Optic และ Cable Optic เพื่อให้ลูกค้าใช้งานอินเทอร์เน็ตได้อย่างมีประสิทธิภาพ",
  },
  {
    period: "2016 - 2018",
    company: "Fujiko & Kenpro (ระบบกล้องวงจรปิด CCTV)",
    role: "ช่างเทคนิค : ดูแลและให้บริการลูกค้า ทั้ง Onsite Service และ Onsite Installation ระบบกล้องวงจรปิด CCTV ทั้งรูปแบบ Analog และ IP Camera ในการติดตั้งและดูแลระบบกล้องวงจรปิดให้กับลูกค้าองค์กรและบ้านพักอาศัย",
  },
];

// จุดแข็ง
export const strengths = [
  { icon: "🚀", text: "เรียนรู้เทคโนโลยีใหม่ได้อย่างรวดเร็ว" },
  { icon: "💡", text: "มีความคิดเชิงวิเคราะห์และแก้ไขปัญหาอย่างเป็นระบบ" },
  { icon: "🤝", text: "ทำงานร่วมกับผู้อื่นและสื่อสารได้ดี" },
  { icon: "🎯", text: "มีความรับผิดชอบและใส่ใจในรายละเอียดของงาน" },
  { icon: "📚", text: "พร้อมพัฒนาทักษะและเรียนรู้อย่างต่อเนื่อง" },
];

// ความสนใจ
export const interests = [
  { icon: "💻", text: "Web Development และ Full Stack Development" },
  { icon: "🤖", text: "Artificial Intelligence (AI)" },
  { icon: "☁️", text: "Cloud Computing" },
  { icon: "📱", text: "Mobile Application Development" },
  { icon: "🎨", text: "UI/UX Design และการออกแบบประสบการณ์ผู้ใช้" },
];

// งานอดิเรก
export const hobbies = [
  { icon: "💻", text: "ฝึกเขียนโปรแกรมและทดลองโปรเจกต์ใหม่ ๆ" },
  { icon: "📖", text: "ศึกษาเทคโนโลยีและเครื่องมือใหม่ด้านไอที" },
  { icon: "🏕️", text: "เดินป่า ตั้งแคมป์" },
  { icon: "🚗", text: "ขับรถเล่นตามหาสถานที่สีเขียว ธรรมชาติสวย ๆ" },
  { icon: "🎵", text: "ฟังเพลง" },
];
