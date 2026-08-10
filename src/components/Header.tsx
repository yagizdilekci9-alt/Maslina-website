import { CartWidget } from "@/components/CartWidget";

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#sheer-curtains", label: "Sheer Curtains" },
  { href: "#curtain-panels", label: "Curtain Panels" },
  { href: "#pillows", label: "Pillows" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="absolute top-0 z-20 w-full">
      <div className="page-width flex items-center justify-between py-6">
        <a href="#" className="text-2xl tracking-[0.15em] text-white uppercase">
          Maslina Home
        </a>
        <nav className="hidden gap-8 text-sm tracking-wide text-white uppercase md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-70">
              {link.label}
            </a>
          ))}
        </nav>
        <CartWidget className="flex items-center gap-1 text-sm tracking-wide text-white uppercase" />
      </div>
    </header>
  );
}
