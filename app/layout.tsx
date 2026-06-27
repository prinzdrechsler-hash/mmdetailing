import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-white text-slate-700">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
