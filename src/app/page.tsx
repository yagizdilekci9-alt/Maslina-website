import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { ProductCategories } from "@/components/ProductCategories";
import { ProductSegmentShowcase } from "@/components/ProductSegmentShowcase";
import { PillowCollection } from "@/components/PillowCollection";
import { Footer } from "@/components/Footer";
import { tulUrunleri, fonUrunleri } from "@/lib/products";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <Story />
      <ProductCategories />
      <ProductSegmentShowcase id="sheer-curtains" kicker="Sheer Curtains" product={tulUrunleri[0]} />
      <ProductSegmentShowcase id="curtain-panels" kicker="Curtain Panels" product={fonUrunleri[0]} />
      <PillowCollection />
      <Footer />
    </div>
  );
}
