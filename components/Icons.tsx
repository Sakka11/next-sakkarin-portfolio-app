// Shared Component : ชุดไอคอน SVG แบรนด์ต่าง ๆ (ใช้ซ้ำได้ทั้งเว็บ)
// ใช้ currentColor เพื่อให้คุมสีด้วย Tailwind ได้

type IconProps = { className?: string };

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M2 4.5h20A1.5 1.5 0 0 1 23.5 6v12a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 18V6A1.5 1.5 0 0 1 2 4.5Zm10 7.2 9-5.7H3l9 5.7Zm0 1.8L2.5 7.4V18h19V7.4L12 13.5Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

export function LineIcon({ className }: IconProps) {
  // ไอคอน LINE: กล่องข้อความโค้งมน + ตัวอักษร "LINE" ให้จำได้ชัด
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.2 2 1.5 5.85 1.5 10.6c0 4.25 3.74 7.81 8.79 8.48.34.07.81.23.93.52.1.27.07.69.03.96l-.15.9c-.04.27-.21 1.05.92.57 1.13-.48 6.08-3.58 8.3-6.13C21.84 14.07 22.5 12.42 22.5 10.6 22.5 5.85 17.8 2 12 2Z" />
      <text
        x="12"
        y="12.4"
        textAnchor="middle"
        fontSize="5"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="var(--background)"
      >
        LINE
      </text>
    </svg>
  );
}

export function ReactAtomIcon({ className }: IconProps) {
  // โลโก้ React (อะตอม) สำหรับตกแต่งรอบรูปโปรไฟล์
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function ExpoIcon({ className }: IconProps) {
  // โลโก้ Expo: เครื่องหมาย "A" (ใช้ currentColor เพื่อวางบนป้ายพื้นขาวให้เห็นชัด)
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className} aria-hidden>
      <path d="M23.1 14.2c.5-.7 1.3-.7 1.8 0l11.4 17.1c.5.8.2 1.7-.3 2.3-.6.6-1.5.9-2.3.4-.4-.2-.7-.6-1-1.1L24 19.9l-8.7 13c-.3.5-.6.9-1 1.1-.8.5-1.7.2-2.3-.4-.5-.6-.8-1.5-.3-2.3l11.4-17.1Z" />
    </svg>
  );
}

export function LogoMark({ className }: IconProps) {
  // โลโก้ส่วนตัว: สไตล์ </> ของสาย Developer
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logo-grad)" />
      <path
        d="M15 14l-5 6 5 6M25 14l5 6-5 6M22 12l-4 16"
        fill="none"
        stroke="#06121f"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
