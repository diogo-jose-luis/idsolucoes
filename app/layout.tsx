import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDS — Império Dourado Soluções",
  description: "Serviços que capacitam, conectam e desenvolvem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}