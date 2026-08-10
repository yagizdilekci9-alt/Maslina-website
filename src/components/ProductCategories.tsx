import Image from "next/image";

const categories = [
  {
    id: "sheer-curtains",
    title: "Sheer Curtains",
    image: "/images/products/tul-perde/tul-01-kuslu-yaprak/ortam.jpg",
  },
  {
    id: "curtain-panels",
    title: "Curtain Panels",
    image: "/images/products/fon-perde/fon-01-linen-panel/ortam.jpg",
  },
  {
    id: "pillows",
    title: "Pillows",
    image: "/images/products/yastik/yastik-01-etnik-cizgili.jpg",
  },
];

export function ProductCategories() {
  return (
    <section className="section-padding page-width">
      <h2 className="mb-10 text-center font-serif text-3xl">Collections</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="group relative flex aspect-[3/4] items-end overflow-hidden bg-field"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center text-lg tracking-widest text-white uppercase">
              {cat.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
