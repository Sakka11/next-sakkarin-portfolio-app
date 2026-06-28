const fs = require("fs");

const lines = [
  ["/F1 20 Tf", "Sakkarin Opasri"],
  ["/F2 12 Tf", "Full Stack Developer"],
  ["/F2 11 Tf", "Email: sakkarin.opa@gmail.com"],
  ["/F2 11 Tf", "GitHub: github.com/Sakka11"],
  ["/F2 11 Tf", "Line ID: beer10487"],
  ["/F1 14 Tf", "Career Objective"],
  ["/F2 11 Tf", "To become a Full Stack Developer who turns ideas into"],
  ["/F2 11 Tf", "efficient, user-friendly web applications."],
  ["/F1 14 Tf", "Education"],
  ["/F2 11 Tf", "- Bachelor Degree (studying), South-East Asia University"],
  ["/F2 11 Tf", "- Diploma / Vocational Cert., Than Technology College"],
  ["/F1 14 Tf", "Experience"],
  ["/F2 11 Tf", "- 2024-2026 Wire & Wireless (CP Group)"],
  ["/F2 11 Tf", "- 2018-2024 True Internet Corporation"],
  ["/F2 11 Tf", "- 2016-2018 Fujiko & Kenpro (CCTV)"],
  ["/F1 14 Tf", "Skills"],
  ["/F2 11 Tf", "HTML, CSS, JavaScript, React, Next.js, Node.js, Express,"],
  ["/F2 11 Tf", "PHP, MySQL, PostgreSQL, Supabase, Git, Docker"],
  ["/F2 9 Tf", "Note: Placeholder resume for the portfolio. Replace public/resume.pdf with your own."],
];

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

let y = 800;
let content = "BT\n";
for (const [font, text] of lines) {
  y -= font.includes("20") ? 30 : font.includes("14") ? 24 : 18;
  content += `${font}\n1 0 0 1 60 ${y} Tm\n(${esc(text)}) Tj\n`;
}
content += "ET";

const objects = [];
objects.push("<< /Type /Catalog /Pages 2 0 R >>");
objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
objects.push(
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>"
);
objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((obj, i) => {
  offsets.push(pdf.length);
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
});
const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
offsets.forEach((off) => {
  pdf += String(off).padStart(10, "0") + " 00000 n \n";
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

fs.writeFileSync("public/resume.pdf", pdf, "binary");
console.log("resume.pdf written, bytes=", pdf.length);
