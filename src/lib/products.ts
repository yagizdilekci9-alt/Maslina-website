export type Category = "sheer-curtains" | "pillows";

export type Product = {
  slug: string;
  category: Category;
  title: string;
  /** [main product photo, styled/in-room photo, optional close-up detail] */
  images: string[];
  description?: string;
  dimensions?: string;
};

export const categoryLabels: Record<Category, string> = {
  "sheer-curtains": "Sheer Curtains",
  pillows: "Pillows",
};

const pillowData: {
  slug: string;
  title: string;
  images: string[];
  description: string;
  dimensions: string;
}[] = [
  {
    slug: "knotted-jute-stripe",
    title: "Knotted Jute Stripe Pillow",
    images: [
      "/images/products/yastik/yastik-01-dugumlu-jut.jpg",
      "/images/products/yastik/yastik-01-dugumlu-jut-studio.jpg",
    ],
    description:
      "Hand-knotted jute threads trace soft vertical lines across natural linen, adding warmth and texture to any sofa or bed. Finished with a hidden zip closure and a plush, feather-blend insert for a full, inviting shape that never looks flat.",
    dimensions: "45 × 45 cm",
  },
  {
    slug: "coiled-rope",
    title: "Coiled Rope Pillow",
    images: [
      "/images/products/yastik/yastik-02-sarmal-halat.jpg",
      "/images/products/yastik/yastik-02-sarmal-halat-studio.jpg",
    ],
    description:
      "Bold, hand-embroidered loops coil and cross over soft natural linen, creating a sculptural, tactile pattern that catches the light from every angle. Finished with a hidden zip closure and a plush, feather-blend insert for a full, inviting shape.",
    dimensions: "45 × 45 cm",
  },
  {
    slug: "coral-branch",
    title: "Coral Branch Pillow",
    images: [
      "/images/products/yastik/yastik-03-mercan-dal.jpg",
      "/images/products/yastik/yastik-03-mercan-dal-studio.jpg",
    ],
    description:
      "Delicate tufted branches spread like coral across warm, textured linen, framed by a clean piped edge for a refined, gallery-quality finish. Finished with a hidden zip closure and a plush, feather-blend insert for a full, inviting shape.",
    dimensions: "45 × 45 cm",
  },
  {
    slug: "wandering-line",
    title: "Wandering Line Pillow",
    images: [
      "/images/products/yastik/yastik-04-dalgali-cizgi.jpg",
      "/images/products/yastik/yastik-04-dalgali-cizgi-studio.jpg",
    ],
    description:
      "A single continuous thread winds and curves freely across soft natural linen, tracing an organic, hand-drawn pattern that feels both playful and refined. Finished with a hidden zip closure and a plush, feather-blend insert for a full, inviting shape.",
    dimensions: "45 × 45 cm",
  },
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
  ...pillowData.map((p) => ({
    slug: p.slug,
    category: "pillows" as Category,
    title: p.title,
    images: p.images,
    description: p.description,
    dimensions: p.dimensions,
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
