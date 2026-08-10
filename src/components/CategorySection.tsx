import { productsByCategory, type Category } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function CategorySection({
  id,
  category,
  title,
  tinted,
}: {
  id: string;
  category: Category;
  title: string;
  tinted?: boolean;
}) {
  const items = productsByCategory(category);

  return (
    <section id={id} className={`section-padding ${tinted ? "bg-secondary-background" : ""}`}>
      <div className="page-width">
        <h2 className="mb-10 text-center font-serif text-3xl">{title}</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
