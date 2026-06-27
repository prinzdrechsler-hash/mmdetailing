import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Außenaufbereitung",
    description:
      "Schaumbad, Handwäsche, Felgenreinigung und streifenfreie Trocknung — für einen makellosen Außenauftritt.",
    href: "/leistungen/aussenaufbereitung",
    icon: "🚗",
  },
  {
    title: "Innenraumaufbereitung",
    description:
      "Tiefenreinigung von Sitzen, Teppichen, Cockpit und Detailbereichen. Inklusive Frischeduft.",
    href: "/leistungen/innenraumaufbereitung",
    icon: "✨",
  },
  {
    title: "Komplettpaket",
    description:
      "Innen- und Außenaufbereitung in einem. Die Kombination für ganzheitliche Ergebnisse.",
    href: "/leistungen/komplettpaket",
    icon: "⭐",
  },
  {
    title: "Verkaufsaufbereitung",
    description:
      "Optische Aufwertung für maximale Käuferattraktivität. Dein Fahrzeug von seiner besten Seite.",
    href: "/leistungen/verkaufsaufbereitung",
    icon: "💎",
  },
  {
    title: "Leasingrückgabe",
    description:
      "Optimale Vorbereitung auf die Leasinggeberinspektion. Kein Stress beim Rückgabetermin.",
    href: "/leistungen/leasingrueckgabe",
    icon: "📋",
  },
  {
    title: "Extras & Spezialleistungen",
    description:
      "Lackversiegelung, Lederpflege, Polsterreinigung, Geruchsbeseitigung, Tierhaare, Motorraum.",
    href: "/leistungen/extras",
    icon: "🔧",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]" id="leistungen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Was wir für dein Fahrzeug tun
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Von der schnellen Außenwäsche bis zur kompletten Aufbereitung — wir kommen direkt zu dir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#00ADB5]/40 transition-all"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#00ADB5] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-[#00ADB5] text-sm font-semibold">
                Mehr erfahren
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
