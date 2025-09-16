import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Manrope } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDS — Imperio Dourado Soluções",
  description:
    "Formação & Capital Humano • Serviços Técnicos & Industriais • Comércio Geral e Combustíveis",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://www.exemplo-ids.co.ao"), // trocar depois
  openGraph: {
    title: "IDS — Imperio Dourado Soluções",
    description:
      "Excelência em Formação, Serviços Industriais e Comércio de Combustíveis.",
    url: "https://www.exemplo-ids.co.ao",
    siteName: "IDS",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "IDS" }],
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${playfair.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
