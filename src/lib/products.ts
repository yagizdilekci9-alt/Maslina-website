export type PillowDesign = {
  slug: string;
  title: string;
  image: string;
};

export const pillows: PillowDesign[] = [
  { slug: "tribal-stripe", title: "Tribal Stripe", image: "/images/products/yastik/yastik-01-etnik-cizgili.jpg" },
  { slug: "woven-diamond", title: "Woven Diamond", image: "/images/products/yastik/yastik-02-orgu-baklava.jpg" },
  { slug: "arc-sun", title: "Arc & Sun", image: "/images/products/yastik/yastik-03-ark-gunes.jpg" },
  { slug: "black-trellis", title: "Black Trellis", image: "/images/products/yastik/yastik-04-siyah-desenli.jpg" },
  { slug: "palm-leaf", title: "Palm Leaf", image: "/images/products/yastik/yastik-05-palmiye-yaprak.jpg" },
  { slug: "arc-circle", title: "Arc Circle", image: "/images/products/yastik/yastik-06-ark-daire.jpg" },
  { slug: "terracotta-aztec", title: "Terracotta Aztec", image: "/images/products/yastik/yastik-07-terrakota-aztek.jpg" },
  { slug: "line-art-face", title: "Line Art Face", image: "/images/products/yastik/yastik-08-cizgi-sanat-yuz.jpg" },
  { slug: "tufted-diamond", title: "Tufted Diamond", image: "/images/products/yastik/yastik-09-tufted-baklava.jpg" },
  { slug: "abstract-shapes", title: "Abstract Shapes", image: "/images/products/yastik/yastik-10-soyut-sekiller.jpg" },
];

export type TulSegments = {
  slug: string;
  title: string;
  drape: string;
  ortam: string;
  detay: string;
};

export const tulUrunleri: TulSegments[] = [
  {
    slug: "hummingbird-leaf",
    title: "Hummingbird & Leaf Sheer Curtain",
    drape: "/images/products/tul-perde/tul-01-kuslu-yaprak/drape.jpg",
    ortam: "/images/products/tul-perde/tul-01-kuslu-yaprak/ortam.jpg",
    detay: "/images/products/tul-perde/tul-01-kuslu-yaprak/detay.jpg",
  },
];

export const fonUrunleri: TulSegments[] = [
  {
    slug: "natural-linen-panel",
    title: "Natural Linen Curtain Panel",
    drape: "/images/products/fon-perde/fon-01-linen-panel/drape.jpg",
    ortam: "/images/products/fon-perde/fon-01-linen-panel/ortam.jpg",
    detay: "/images/products/fon-perde/fon-01-linen-panel/detay.jpg",
  },
];

export const heroVideoUrl =
  "https://video.wixstatic.com/video/1896b4_4b9325ca773240a7b25b1600b0b87909/1080p/mp4/file.mp4";
