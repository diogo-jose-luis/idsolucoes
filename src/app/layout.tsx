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

import { Rajdhani, Exo_2 } from "next/font/google";

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500","600","700"],
  variable: "--font-rajdhani",
  display: "swap",
});
export const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400","500","600"],
  variable: "--font-exo2",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${rajdhani.variable} ${exo2.variable}`}>
      <body>{children}</body>
    </html>
  );
}
