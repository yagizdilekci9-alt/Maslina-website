"use client";

import { useState } from "react";

const slides = [
  "Every fabric is chosen with care, from the thread to the weave.",
  "Drawing on Turkey's deep-rooted textile heritage, we craft natural, breathable fabrics that bring warmth into your home.",
  "From sheer curtains to curtain panels and pillows, every product passes through our production line without compromise, checked by hand at every step.",
  "Just as our name takes root and grows, we continue to expand our reach alongside new partners, at home and abroad.",
];

export function Story() {
  const [active, setActive] = useState(0);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);

  return (
    <section id="story" className="section-padding bg-secondary-background">
      <div className="page-width mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs tracking-[0.35em] text-foreground-muted uppercase">About Us</p>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous"
            className="shrink-0 text-2xl text-foreground-muted transition-opacity hover:opacity-60 sm:text-3xl"
          >
            &#8249;
          </button>

          <p className="min-h-[8rem] font-serif text-xl leading-relaxed text-foreground sm:min-h-[6rem] sm:text-2xl">
            {slides[active]}
          </p>

          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next"
            className="shrink-0 text-2xl text-foreground-muted transition-opacity hover:opacity-60 sm:text-3xl"
          >
            &#8250;
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                active === i ? "bg-foreground" : "bg-foreground-muted/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
