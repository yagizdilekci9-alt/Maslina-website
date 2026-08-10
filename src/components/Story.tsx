"use client";

import { useState } from "react";

const slides = [
  {
    heading: "Chosen with care",
    text: "At Maslina Home, every fabric begins its journey long before it reaches your window or sofa. We hand-select each thread, each weave, and each finish with the same care our family has practiced for generations, refusing to let convenience compromise the quality of what we bring into your home.",
  },
  {
    heading: "Rooted in Turkish craft",
    text: "Rooted in Turkey's centuries-old textile tradition, our ateliers work with natural, breathable fibers, cotton, linen, and fine sheers, shaping them into pieces that soften a room without ever feeling heavy. It's a craft passed down through generations of makers who still believe a fabric should feel as good as it looks.",
  },
  {
    heading: "Checked by hand",
    text: "From our sheer curtains to our curtain panels and pillows, every product moves through our production line under close, hands-on supervision. Nothing leaves our workshop without being checked by hand, seam by seam, so that the piece arriving at your door meets the same standard we hold in our own homes.",
  },
  {
    heading: "Growing our reach",
    text: "Just as our name takes root and grows, so does our reach. What began as a small, family-rooted workshop in Bursa has grown into partnerships with retailers and makers across Turkey and abroad, all sharing our commitment to natural materials, honest craftsmanship, and homes that feel lived-in and warm.",
  },
];

export function Story() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = (index: number, dir: "next" | "prev") => {
    setDirection(dir);
    setActive((index + slides.length) % slides.length);
  };

  return (
    <section id="story" className="section-padding bg-secondary-background">
      <div className="page-width mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs tracking-[0.35em] text-foreground-muted uppercase">About Us</p>

        <div className="flex items-center justify-center gap-4 sm:gap-10">
          <button
            type="button"
            onClick={() => goTo(active - 1, "prev")}
            aria-label="Previous"
            className="shrink-0 text-2xl text-foreground-muted transition-opacity hover:opacity-60 sm:text-3xl"
          >
            &#8249;
          </button>

          <div className="min-h-[16rem] overflow-hidden sm:min-h-[12rem]">
            <div
              key={active}
              className={direction === "next" ? "animate-slide-in-from-right" : "animate-slide-in-from-left"}
            >
              <p className="mb-3 font-serif text-lg text-foreground sm:text-xl">{slides[active].heading}</p>
              <p className="text-base leading-relaxed text-foreground-muted sm:text-lg">{slides[active].text}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(active + 1, "next")}
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
              onClick={() => goTo(i, i > active ? "next" : "prev")}
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
