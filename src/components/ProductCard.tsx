import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { AddToCartButton } from "@/components/AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-field">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <Link href={`/products/${product.slug}`} className="mt-3 text-sm tracking-wide hover:underline">
        {product.title}
      </Link>
      <div className="mt-2">
        <AddToCartButton
          slug={product.slug}
          title={product.title}
          image={product.images[0]}
          className="w-full border border-foreground/20 px-4 py-2 text-xs tracking-widest uppercase transition-colors hover:bg-foreground hover:text-background"
        />
      </div>
    </div>
  );
}
