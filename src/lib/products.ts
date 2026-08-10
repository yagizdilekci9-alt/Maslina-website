export type Category = "sheer-curtains" | "curtain-panels" | "pillows";

export type Product = {
  slug: string;
  category: Category;
  title: string;
  /** exactly 3 images: [main, styled/context, close-up detail] */
  images: [string, string, string];
};

export const categoryLabels: Record<Category, string> = {
  "sheer-curtains": "Sheer Curtains",
  "curtain-panels": "Curtain Panels",
  pillows: "Pillows",
};

const pillowData: { slug: string; title: string; file: string }[] = [
  { slug: "tribal-stripe", title: "Tribal Stripe Pillow", file: "yastik-01-etnik-cizgili" },
  { slug: "woven-diamond", title: "Woven Diamond Pillow", file: "yastik-02-orgu-baklava" },
  { slug: "arc-sun", title: "Arc & Sun Pillow", file: "yastik-03-ark-gunes" },
  { slug: "black-trellis", title: "Black Trellis Pillow", file: "yastik-04-siyah-desenli" },
  { slug: "palm-leaf", title: "Palm Leaf Pillow", file: "yastik-05-palmiye-yaprak" },
  { slug: "arc-circle", title: "Arc Circle Pillow", file: "yastik-06-ark-daire" },
  { slug: "terracotta-aztec", title: "Terracotta Aztec Pillow", file: "yastik-07-terrakota-aztek" },
  { slug: "line-art-face", title: "Line Art Face Pillow", file: "yastik-08-cizgi-sanat-yuz" },
  { slug: "tufted-diamond", title: "Tufted Diamond Pillow", file: "yastik-09-tufted-baklava" },
  { slug: "abstract-shapes", title: "Abstract Shapes Pillow", file: "yastik-10-soyut-sekiller" },
];

export const products: Product[] = [
  {
    slug: "hummingbird-leaf-sheer-curtain",
    category: "sheer-curtains",
    title: "Hummingbird & Leaf Sheer Curtain",
    images: [
      "/images/products/tul-perde/tul-01-kuslu-yaprak/ortam.jpg",
      "/images/products/tul-perde/tul-01-kuslu-yaprak/drape.jpg",
      "/images/products/tul-perde/tul-01-kuslu-yaprak/detay.jpg",
    ],
  },
  {
    slug: "natural-linen-curtain-panel",
    category: "curtain-panels",
    title: "Natural Linen Curtain Panel",
    images: [
      "/images/products/fon-perde/fon-01-linen-panel/ortam.jpg",
      "/images/products/fon-perde/fon-01-linen-panel/drape.jpg",
      "/images/products/fon-perde/fon-01-linen-panel/detay.jpg",
    ],
  },
  ...pillowData.map((p) => ({
    slug: p.slug,
    category: "pillows" as Category,
    title: p.title,
    images: [
      `/images/products/yastik/${p.file}.jpg`,
      `/images/products/yastik/${p.file}-studio.jpg`,
      `/images/products/yastik/${p.file}-detail.jpg`,
    ] as [string, string, string],
  })),
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export const heroVideoUrl =
  "https://video.wixstatic.com/video/1896b4_4b9325ca773240a7b25b1600b0b87909/1080p/mp4/file.mp4";
