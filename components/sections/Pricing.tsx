import Link from "next/link";
import { Check } from "lucide-react";

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
      "Tiefenreinigung & Absaugen",
      "Cockpit- & Kunststoffpflege",
      "Innenglasreinigung",
      "Frischeduft zum Abschluss",
    ],
    href: "/leistungen/innenraumaufbereitung",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="preise">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Preise für Autoaufbereitung in Bielefeld
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transparente Richtpreise – der genaue Preis hängt von Fahrzeuggröße und Verschmutzung ab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative rounded-2xl p-8 flex flex-col bg-white transition-shadow ${
                pkg.featured
                  ? "border-2 border-[#00ADB5] shadow-xl"
                  : "border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00ADB5] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Beliebt
                </span>
              )}

              <h3 className="text-lg font-bold text-slate-900 mb-1">{pkg.title}</h3>
              <div className="text-4xl font-extrabold text-[#00ADB5] mb-6">{pkg.price}</div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check size={18} className="text-[#00ADB5] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={pkg.href}
                className={`block text-center font-semibold py-3 rounded-lg transition-colors ${
                  pkg.featured
                    ? "bg-[#00ADB5] hover:bg-[#009098] text-white"
                    : "border-2 border-slate-200 hover:border-[#00ADB5] text-slate-700 hover:text-[#00ADB5]"
                }`}
              >
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Extras wie Tierhaarentfernung, Polsterreinigung oder Versiegelungen können jederzeit ergänzt werden.
        </p>
      </div>
    </section>
  );
}
