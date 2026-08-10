import type { Metadata } from "next";
import { Andada_Pro } from "next/font/google";
import "./globals.css";

const andadaPro = Andada_Pro({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const andadaProBody = Andada_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Maslina Tekstil",
  description:
    "Türkiye'de özenle üretilen doğal kumaşlardan tül perde, fon perde ve yastıklar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${andadaPro.variable} ${andadaProBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
