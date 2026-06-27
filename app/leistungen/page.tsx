import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen – M&M Detailing Bielefeld",
  description:
    "Alle Leistungen von M&M Detailing: Innenraumaufbereitung, Außenaufbereitung, Komplettpaket, Verkaufsaufbereitung, Leasingrückgabe und Spezialleistungen.",
};

const services = [
  {
    title: "Außenaufbereitung",
    description: "Schaumbad, Handwäsche, Felgenreinigung und streifenfreie Trocknung. Ab 60€.",
    href: "/leistungen/aussenaufbereitung",
    icon: "🚗",
    price: "ab 60€",
  },
  {
    title: "Innenraumaufbereitung",
    description: "Tiefenreinigung von Sitzen, Teppichen, Cockpit und Detailbereichen. Ab 160€.",
    href: "/leistungen/innenraumaufbereitung",
    icon: "✨",
    price: "ab 160€",
  },
  {
    title: "Komplettpaket",
    description: "Innen & Außen in einem Termin — das Rundum-sorglos-Paket. Ab 240€.",
    href: "/leistungen/komplettpaket",
    icon: "⭐",
    price: "ab 240€",
    featured: true,
  },
  {
    title: "Verkaufsaufbereitung",
    description: "Optimale Präsentation deines Fahrzeugs für einen besseren Verkaufspreis.",
    href: "/leistungen/verkaufsaufbereitung",
    icon: "💎",
    price: "Auf Anfrage",
  },
  {
    title: "Leasingrückgabe",
    description: "Stressfreie Übergabe — wir bereiten dein Fahrzeug für die Inspektion vor.",
    href: "/leistungen/leasingrueckgabe",
    icon: "📋",
    price: "Auf Anfrage",
  },
  {
    title: "Extras & Spezialleistungen",
    description: "Lackversiegelung, Lederpflege, Geruchsbeseitigung, Tierhaare u.v.m.",
    href: "/leistungen/extras",
    icon: "🔧",
    price: "Auf Anfrage",
  },
];

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative bg-[#111111] border-b border-white/10 py-20 px-4 sm:px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
            Leistungen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Was wir für dich tun
          </h1>
          <p className="text-gray-400 text-lg">
            Professionelle Fahrzeugaufbereitung — mobil, direkt bei dir vor Ort.
            Kein Aufschlag für den Hausbesuch.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                service.featured
                  ? "bg-[#C9A84C]/10 border-[#C9A84C]/50 hover:border-[#C9A84C]"
                  : "bg-[#111111] border-white/10 hover:border-[#C9A84C]/30"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-6 bg-[#C9A84C] text-black text-xs font-bold px-3 py-1 rounded-full">
                  Beliebt
                </span>
              )}
              <div className="text-3xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[#C9A84C] transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#C9A84C] font-bold">{service.price}</span>
                <ArrowRight
                  size={18}
                  className="text-gray-600 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
