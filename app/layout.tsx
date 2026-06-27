import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M&M Detailing – Professionelle Autoaufbereitung in Bielefeld",
  description:
    "Mobiler Autoaufbereitungsservice in Bielefeld & Umgebung. Innenraumaufbereitung, Außenaufbereitung und Komplettpaket – direkt bei dir vor Ort. Jetzt Termin buchen!",
  keywords: "Autoaufbereitung Bielefeld, mobile Autoaufbereitung, Fahrzeugaufbereitung, Innenraumreinigung, Lackversiegelung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
