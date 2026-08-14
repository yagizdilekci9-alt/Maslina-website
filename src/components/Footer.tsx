export function Footer() {
  return (
    <footer id="contact" className="section-padding bg-foreground text-background">
      <div className="page-width flex flex-col items-center gap-2 text-center">
        <p className="text-xl tracking-[0.2em] uppercase">Fabricasa Home</p>
        <p className="text-sm opacity-70">Sheer curtains and pillows, crafted with care in Turkey</p>

        <div className="mt-6 flex flex-col items-center gap-1 text-sm opacity-90">
          <p>Yenidoğan OSB Mahallesi, Gürpınar Cad. No:9, 16580 Gürsu/Bursa</p>
          <a href="tel:+902243716055" className="transition-opacity hover:opacity-70">
            +90 224 371 6055
          </a>
          <a href="mailto:info@maslinatekstil.com" className="transition-opacity hover:opacity-70">
            info@maslinatekstil.com
          </a>
        </div>

        <p className="mt-4 text-xs opacity-50">© {new Date().getFullYear()} Fabricasa Home. All rights reserved.</p>
      </div>
    </footer>
  );
}
