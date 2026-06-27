import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Außenaufbereitung",
    description:
      "Beseitigt Schmutz, Ablagerungen und Umweltverschmutzungen vom Lack. Schaumbad, Handwäsche, Felgenreinigung und streifenfreie Trocknung.",
    price: "ab 60€",
    href: "/leistungen/aussenaufbereitung",
    icon: "🚗",
  },
  {
    title: "Innenraumaufbereitung",
    description:
      "Sitze, Teppiche, Kunststoffbauteile und Detailbereiche. Tiefenreinigung & Absaugen, Cockpitpflege, Innenglasreinigung und Frischeduft.",
    price: "ab 160€",
    href: "/leistungen/innenraumaufbereitung",
    icon: "✨",
  },
  {
    title: "Komplettpaket",
    description:
      "Innen- und Außenaufbereitung in einem. Die Kombination für ganzheitliche Ergebnisse — dein Fahrzeug strahlt von A bis Z.",
    price: "ab 240€",
    href: "/leistungen/komplettpaket",
    icon: "⭐",
    featured: true,
  },
  {
    title: "Verkaufsaufbereitung",
    description:
      "Optische Aufwertung für maximale Käuferattraktivität. Dein Fahrzeug präsentiert sich von seiner besten Seite.",
    price: "Auf Anfrage",
    href: "/leistungen/verkaufsaufbereitung",
    icon: "💎",
  },
  {
    title: "Leasingrückgabe",
    description:
      "Bereitet dein Fahrzeug optimal auf die Leasinggeberinspekition vor. Kein Stresspotenzial beim Rückgabetermin.",
    price: "Auf Anfrage",
    href: "/leistungen/leasingrueckgabe",
    icon: "📋",
  },
  {
    title: "Extras & Spezialleistungen",
    description:
      "Lackversiegelung, Lederpflege, Polsterreinigung, Geruchsbeseitigung, Tierhaare entfernen, Motorraumreinigung.",
    price: "Auf Anfrage",
    href: "/leistungen/extras",
    icon: "🔧",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="leistungen">
      <div className="text-center mb-16">
        <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
          Unsere Leistungen
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Was wir für dich tun
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Von der schnellen Außenwäsche bis zur kompletten Aufbereitung — wir kommen direkt zu dir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#C9A84C] transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
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
    </section>
  );
}
