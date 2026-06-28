"use client";

// Lightbox กลาง: แสดงรูปเต็มจอ ใช้ร่วมกันทั้งหน้า Projects และ Gallery
// render ผ่าน Portal ไปที่ body เพื่อไม่ให้ transform ของการ์ดทำให้ตำแหน่งเพี้ยน
import Image, { type StaticImageData } from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Lightbox({
  image,
  alt,
  onClose,
}: {
  image: string | StaticImageData;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="ปิด"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-black/40 text-2xl text-white transition-colors hover:bg-white/15"
      >
        ✕
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[85vh] w-full max-w-4xl"
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>,
    document.body
  );
}
