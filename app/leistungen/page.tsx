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
    <div className="pt-20">
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00ADB5] text-sm font-bold tracking-widest uppercase mb-4">
            Leistungen
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Was wir für dich tun
          </h1>
          <p className="text-slate-600 text-lg">
            Professionelle Fahrzeugaufbereitung — mobil, direkt bei dir vor Ort.
            Kein Aufpreis für den Hausbesuch.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group relative p-6 rounded-2xl bg-white transition-all ${
                service.featured
                  ? "border-2 border-[#00ADB5] shadow-md"
                  : "border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00ADB5]/40"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-6 bg-[#00ADB5] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Beliebt
                </span>
              )}
              <div className="text-3xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00ADB5] transition-colors">
                {service.title}
              </h2>
              <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#00ADB5] font-extrabold">{service.price}</span>
                <ArrowRight
                  size={18}
                  className="text-slate-400 group-hover:text-[#00ADB5] group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
