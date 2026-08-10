export function Footer() {
  return (
    <footer id="contact" className="section-padding bg-foreground text-background">
      <div className="page-width flex flex-col items-center gap-2 text-center">
        <p className="text-xl tracking-[0.2em] uppercase">Maslina Home</p>
        <p className="text-sm opacity-70">Sheer curtains, curtain panels and pillows, crafted with care in Turkey</p>
        <p className="mt-4 text-xs opacity-50">© {new Date().getFullYear()} Maslina Home. All rights reserved.</p>
      </div>
    </footer>
  );
}
