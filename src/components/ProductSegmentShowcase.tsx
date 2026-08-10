import Image from "next/image";
import type { TulSegments } from "@/lib/products";

export function ProductSegmentShowcase({
  id,
  kicker,
  product,
}: {
  id: string;
  kicker: string;
  product: TulSegments;
}) {
  return (
    <section id={id} className="section-padding page-width">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs tracking-[0.35em] text-foreground-muted uppercase">{kicker}</p>
        <h2 className="font-serif text-3xl">{product.title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <figure className="relative aspect-[3/4] overflow-hidden bg-field">
          <Image
            src={product.drape}
            alt={`${product.title} - fabric detail`}
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs uppercase">
            Fabric
          </figcaption>
        </figure>
        <figure className="relative aspect-[3/4] overflow-hidden bg-field">
          <Image
            src={product.ortam}
            alt={`${product.title} - styled setting`}
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs uppercase">
            Styled Setting
          </figcaption>
        </figure>
        <figure className="relative aspect-[3/4] overflow-hidden bg-field">
          <Image
            src={product.detay}
            alt={`${product.title} - close-up detail`}
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs uppercase">
            Close-up
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
