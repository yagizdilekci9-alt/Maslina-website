import Image from "next/image";
import { pillows } from "@/lib/products";

export function PillowCollection() {
  return (
    <section id="pillows" className="section-padding bg-secondary-background">
      <div className="page-width">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-foreground-muted uppercase">Pillows</p>
          <h2 className="font-serif text-3xl">Pillow Collection</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {pillows.map((pillow) => (
            <figure key={pillow.slug} className="relative aspect-square overflow-hidden bg-white">
              <Image
                src={pillow.image}
                alt={pillow.title}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
