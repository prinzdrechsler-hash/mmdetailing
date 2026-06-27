import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Außenaufbereitung",
    description: "Für einen makellosen Außenauftritt",
    prices: [
      { size: "Kleinwagen", example: "VW Polo, Ford Fiesta", price: "ab 60€" },
      { size: "Mittelklasse", example: "VW Passat, BMW 3er", price: "ab 80€" },
      { size: "Großwagen/SUV/Van", example: "BMW X5, Mercedes V-Klasse", price: "ab 100€" },
    ],
    features: [
      "Intensives Schaumbad & Vorwäsche",
      "Felgen- & Radkastenreinigung",
      "Handwäsche (Zwei-Eimer-Methode)",
      "Außenglasreinigung",
      "Trocknung & Finish",
    ],
    duration: "ca. 1–3 Stunden",
    href: "/leistungen/aussenaufbereitung",
  },
  {
    title: "Innenraumaufbereitung",
    description: "Für einen frischen, sauberen Innenraum",
    prices: [
      { size: "Kleinwagen", example: "VW Polo, Ford Fiesta", price: "ab 160€" },
      { size: "Mittelklasse", example: "VW Passat, BMW 3er", price: "ab 180€" },
      { size: "Großwagen/SUV/Van", example: "BMW X5, Mercedes V-Klasse", price: "ab 200€" },
    ],
    features: [
      "Tiefenreinigung & Absaugen",
      "Cockpit- & Kunststoffpflege",
      "Innenglasreinigung",
      "Lüftungsdüsen & Detailarbeit",
      "Frischeduft",
    ],
    duration: "ca. 2–4 Stunden",
    href: "/leistungen/innenraumaufbereitung",
    featured: true,
  },
  {
    title: "Komplettpaket",
    description: "Innen & Außen — das Rundum-sorglos-Paket",
    prices: [
      { size: "Kleinwagen", example: "VW Polo, Ford Fiesta", price: "ab 240€" },
      { size: "Mittelklasse", example: "VW Passat, BMW 3er", price: "ab 270€" },
      { size: "Großwagen/SUV/Van", example: "BMW X5, Mercedes V-Klasse", price: "ab 300€" },
    ],
    features: [
      "Komplette Außenaufbereitung",
      "Komplette Innenraumaufbereitung",
      "Lackpflege & Versiegelung",
      "Felgenservice",
      "Detailarbeit inklusive",
    ],
    duration: "ca. 4–6 Stunden",
    href: "/leistungen/komplettpaket",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="preise">
      <div className="text-center mb-16">
        <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
          Preise
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Transparente Preisgestaltung
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Der genaue Preis richtet sich nach Fahrzeuggröße und Verschmutzungsgrad.
          Wir besprechen alles transparent im Vorfeld.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              pkg.featured
                ? "bg-[#C9A84C]/10 border-[#C9A84C]/50"
                : "bg-[#111111] border-white/10"
            }`}
          >
            {pkg.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-black text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Am beliebtesten
              </span>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
              <p className="text-gray-400 text-sm">{pkg.description}</p>
            </div>

            {/* Price table */}
            <div className="bg-[#1A1A1A] rounded-xl p-4 mb-6 space-y-3">
              {pkg.prices.map((p) => (
                <div key={p.size} className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium">{p.size}</div>
                    <div className="text-xs text-gray-500">{p.example}</div>
                  </div>
                  <div className="text-[#C9A84C] font-bold whitespace-nowrap">{p.price}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check size={16} className="text-[#C9A84C] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="text-xs text-gray-500 mb-6">⏱ {pkg.duration}</div>

            <Link
              href={pkg.href}
              className={`block text-center font-semibold py-3 rounded-lg transition-colors ${
                pkg.featured
                  ? "bg-[#C9A84C] hover:bg-[#E2C97E] text-black"
                  : "border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10"
              }`}
            >
              Mehr erfahren
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        * Preise inkl. Anfahrt. Kein Aufschlag für den Hausbesuch.
        Bei starker Verschmutzung oder Spezialwünschen erstellen wir ein individuelles Angebot.
      </p>
    </section>
  );
}
