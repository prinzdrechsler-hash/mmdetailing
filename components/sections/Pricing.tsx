import Link from "next/link";
import { Check, CalendarCheck } from "lucide-react";

const packages = [
  {
    title: "Außenaufbereitung",
    price: "ab 60 €",
    features: [
      "Handwäsche mit hochwertigen Reinigern",
      "Felgenreinigung",
      "Lackpflege",
      "streifenfreie Trocknung",
    ],
    href: "/leistungen/aussenaufbereitung",
  },
  {
    title: "Komplettaufbereitung",
    price: "ab 240 €",
    badge: "Beliebt",
    features: [
      "Innen- und Außenreinigung",
      "Detailreinigung im Innenraum",
      "Lackpflege und Felgenreinigung",
      "perfekt für Verkauf oder Leasing",
    ],
    href: "/leistungen/komplettpaket",
    featured: true,
  },
  {
    title: "Innenraumaufbereitung",
    price: "ab 160 €",
    features: [
      "gründliches Aussaugen",
      "Reinigung aller Kunststoffflächen",
      "Scheibenreinigung innen",
      "Innenraumduft",
    ],
    href: "/leistungen/innenraumaufbereitung",
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="preise">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-center text-[32px] font-bold text-slate-900 mb-2.5">
          Preise für Autoaufbereitung in Bielefeld
        </h2>
        <p className="text-center text-gray-500 text-[15px] mb-12 max-w-xl mx-auto">
          Transparente Richtpreise – der genaue Preis hängt von Fahrzeuggröße und Verschmutzung ab.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative rounded-2xl p-7 bg-white ${
                pkg.featured
                  ? "border-2 border-[#00ADB5] lg:scale-[1.04] z-10"
                  : "border-[1.5px] border-gray-200"
              }`}
              style={pkg.featured ? { boxShadow: "0 4px 20px 0 rgba(0,173,181,0.15)" } : undefined}
            >
              {pkg.badge && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
                >
                  {pkg.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-slate-900 mb-2">{pkg.title}</h3>
              <div className="text-[32px] font-extrabold text-[#00ADB5] mb-6">{pkg.price}</div>

              <ul className="space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-gray-700">
                    <Check size={17} className="text-[#00ADB5] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
          Extras wie Tierhaarentfernung, Polsterreinigung oder Versiegelungen können jederzeit ergänzt werden.
        </p>

        {/* Konfigurator CTA block */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#F0FDFA] border-[1.5px] border-[#99D6D1] rounded-2xl px-6 sm:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0">
              <CalendarCheck size={22} className="text-[#00ADB5]" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-slate-900">
                Dein genauer Preis wird im Buchungsformular berechnet
              </div>
              <div className="text-[13px] text-gray-500">
                Paket wählen, Fahrzeugklasse angeben, Extras dazubuchen – und du siehst sofort was deine Aufbereitung kostet.
              </div>
            </div>
          </div>
          <Link
            href="/termin-buchen"
            className="text-white font-bold px-6 py-3 rounded-[14px] transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
          >
            Zum Konfigurator →
          </Link>
        </div>
      </div>
    </section>
  );
}
