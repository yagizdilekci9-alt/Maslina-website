"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductGallery({ images, title }: { images: [string, string, string]; title: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square w-full overflow-hidden bg-field">
        <Image src={images[active]} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden bg-field ${
              active === i ? "ring-2 ring-foreground" : "opacity-80 hover:opacity-100"
            }`}
          >
            <Image src={src} alt={`${title} thumbnail ${i + 1}`} fill sizes="200px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
