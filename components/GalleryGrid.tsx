"use client";

// กริดรูป Gallery: hover โชว์ caption + คลิกดูรูปเต็มจอ (lightbox)
import Image from "next/image";
import { useState } from "react";
import { gallery } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {gallery.map((img, index) => (
          <figure
            key={img.src}
            className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-label={`ดูรูปเต็ม: ${img.caption}`}
              className="block w-full"
            >
              <Image
                src={img.src}
                alt={img.caption}
                width={900}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 2}
              />
              {/* ไอคอนแว่นขยายตอน hover */}
              <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-lg text-background">
                  🔍
                </span>
              </span>
            </button>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/90 to-transparent p-4 text-sm text-foreground transition-transform duration-300 group-hover:translate-y-0">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {active !== null && (
        <Lightbox
          image={gallery[active].src}
          alt={gallery[active].caption}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
