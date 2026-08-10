import { heroVideoUrl } from "@/lib/products";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[560px] w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white">
        <p className="text-xs tracking-[0.35em] uppercase opacity-80">Crafted with Care in Turkey</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
          The Fabric of Nature and Elegance
        </h1>
        <a
          href="#story"
          className="mt-4 rounded-full border border-white/70 px-8 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-white hover:text-black"
        >
          Discover Our Story
        </a>
      </div>
    </section>
  );
}
