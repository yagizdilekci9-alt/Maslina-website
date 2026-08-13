import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, products, categoryLabels } from "@/lib/products";
import { ProductGallery } from "@/components/ProductGallery";
import { AddToCartButton } from "@/components/AddToCartButton";
import { CartWidget } from "@/components/CartWidget";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="page-width section-padding mx-auto max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/" className="inline-block text-xs tracking-widest text-foreground-muted uppercase hover:underline">
          ← Back to Collections
        </Link>
        <CartWidget />
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ProductGallery images={product.images} title={product.title} />
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.35em] text-foreground-muted uppercase">
            {categoryLabels[product.category]}
          </p>
          <h1 className="font-serif text-3xl">{product.title}</h1>
          <p className="text-sm leading-relaxed text-foreground-muted">
            Crafted from natural, breathable fabric and finished by hand in Turkey. Part of the
            Fabricasa Home collection.
          </p>
          <div className="mt-4 max-w-xs">
            <AddToCartButton slug={product.slug} title={product.title} image={product.images[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
