import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <Story />
      <CategorySection id="sheer-curtains" category="sheer-curtains" title="Sheer Curtains" />
      <CategorySection id="pillows" category="pillows" title="Pillow Collection" tinted />
      <Footer />
    </div>
  );
}
