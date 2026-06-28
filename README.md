# next-sakkarin-portfolio-app

เว็บไซต์ **Portfolio ส่วนตัว** ของ **ศักรินทร์ โอภาษี (Sakkarin Opasri)**
สำหรับใช้ประกอบการสมัครงานในตำแหน่ง **Full Stack Developer**
พัฒนาด้วย **Next.js (App Router)**

> 🎓 โปรเจกต์นี้เป็นงาน Midterm รายวิชา Web Application Development

---

## 🛠️ พัฒนาด้วยเครื่องมืออะไรบ้าง (Tech Stack)

| ประเภท | เครื่องมือ |
| --- | --- |
| Framework | **Next.js 16** (App Router) |
| Library | **React 19** |
| ภาษา | **TypeScript** |
| CSS | **Tailwind CSS v4** |
| Image Optimization | **next/image** |
| Font Optimization | **next/font/google** (Kanit, Poppins, Sarabun, JetBrains Mono) |
| Editor | **Visual Studio Code** |
| Version Control | **Git + GitHub** |
| Deploy | **Vercel** |

---

## 📄 หน้าเว็บทั้งหมด (Pages & Routes)

| หน้า | Route | รายละเอียด |
| --- | --- | --- |
| Home | `/` | รูปโปรไฟล์ ชื่อ-นามสกุล ตำแหน่งที่สมัคร คำแนะนำตัว และปุ่มเข้าสู่หน้าต่าง ๆ |
| About Me | `/about` | ประวัติส่วนตัว การศึกษา การทำงาน Career Objective จุดแข็ง ความสนใจ งานอดิเรก |
| Skills | `/me/skills` | ทักษะแบ่งหมวด Frontend / Backend / Database / Tools |
| Projects | `/me/projects` | ผลงานจริงจาก GitHub พร้อมรูป เทคโนโลยี บทบาท ปีที่พัฒนา และลิงก์ไป repo |
| Gallery | `/me/gallery` | ภาพบรรยากาศการเขียนโปรแกรม (8 ภาพ) |
| Contact | `/contact` | Email, Line ID, Facebook, GitHub และปุ่ม Download Resume |

---

## 🖼️ ภาพแต่ละหน้า (Screenshots)

### 🏠 Home — `/`
![Home](screenshots/01-home.png)

### 👤 About Me — `/about`
![About Me](screenshots/02-about.png)

### 🧠 Skills — `/me/skills`
![Skills](screenshots/03-skills.png)

### 💼 Projects — `/me/projects`
![Projects](screenshots/04-projects.png)

### 🖼️ Gallery — `/me/gallery`
![Gallery](screenshots/05-gallery.png)

### ✉️ Contact — `/contact`
![Contact](screenshots/06-contact.png)

---

## ✅ ข้อกำหนดด้านเทคนิคที่ทำครบ

- **Layout & Shared Components** — มี Component กลางที่นำกลับมาใช้ซ้ำหลายหน้า:
  `NavBar`, `Footer`, `SectionTitle`, `SkillCard`, `ProjectCard`
- **Image Optimization** — ใช้ `next/image` ทุกรูป (โปรไฟล์, Projects, Gallery) พร้อมตั้งค่า `remotePatterns` สำหรับรูปจาก Unsplash
- **Font Optimization** — ใช้ `next/font/google` รวม **4 ฟอนต์**: **Kanit**, **Poppins**, **Sarabun**, **JetBrains Mono**
- **Navigation & Routing** — ใช้ `next/link` + ไฮไลต์เมนูหน้าปัจจุบันด้วย `usePathname`
- **Responsive UI/UX** — รองรับทั้งจอมือถือและเดสก์ท็อป (มีเมนู Hamburger บนมือถือ)

---

## 📁 โครงสร้างโปรเจกต์

```
next-sakkarin-portfolio-app/
├── app/
│   ├── layout.tsx          # Root layout + ฟอนต์ + NavBar/Footer
│   ├── page.tsx            # Home (/)
│   ├── about/page.tsx      # About Me (/about)
│   ├── me/
│   │   ├── skills/page.tsx     # Skills (/me/skills)
│   │   ├── projects/page.tsx   # Projects (/me/projects)
│   │   └── gallery/page.tsx    # Gallery (/me/gallery)
│   ├── contact/page.tsx    # Contact (/contact)
│   └── globals.css         # ธีมสีและฟอนต์
├── components/             # Shared Components
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   ├── SectionTitle.tsx
│   ├── SkillCard.tsx
│   └── ProjectCard.tsx
├── data/                   # ข้อมูลทั้งหมด (profile, skills, projects, gallery)
├── public/                 # รูปโปรไฟล์ + resume.pdf
└── screenshots/            # ภาพหน้าจอสำหรับ README
```

---

## 🚀 วิธีรันโปรเจกต์

```bash
# ติดตั้ง dependencies
npm install

# รัน development server (พอร์ต 8342)
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:8342](http://localhost:8342)

```bash
# build สำหรับ production
npm run build

# รัน production (พอร์ต 8342)
npm start
```

---

## 🔗 ลิงก์ส่งงาน

- **GitHub Repository:** _<ใส่ลิงก์ repo ของคุณที่นี่>_
- **Vercel (Live Demo):** _<ใส่ Domain ที่ deploy ที่นี่>_

---

## 👤 ผู้พัฒนา

**ศักรินทร์ โอภาษี (Sakkarin Opasri)**
ตำแหน่งที่สมัคร: Full Stack Developer
📧 sakkarin.opa@gmail.com · 🐙 [github.com/Sakka11](https://github.com/Sakka11)
