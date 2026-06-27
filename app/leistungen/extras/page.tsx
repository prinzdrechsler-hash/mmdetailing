import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Extras & Spezialleistungen – M&M Detailing",
  description:
    "Lackversiegelung, Lederpflege, Polsterreinigung, Geruchsbeseitigung, Tierhaare entfernen, Motorraumreinigung. Mobil in Bielefeld.",
};

const extras = [
  {
    id: "lack",
    icon: "✨",
    title: "Lackversiegelung",
    description:
      "Schützt deinen Lack langfristig vor Umwelteinflüssen, UV-Strahlung und Schmutz. Verleiht einen tiefen, seidigen Glanz.",
  },
  {
    id: "leder",
    icon: "🪑",
    title: "Lederpflege & -konditionierung",
    description:
      "Reinigung und Konditionierung von Lederoberflächen. Verhindert Austrocknung und Rissbildung, erhält die Flexibilität.",
  },
  {
    id: "polster",
    icon: "🧽",
    title: "Polsterreinigung",
    description:
      "Tiefenreinigung von Stoff- und Alcantara-Sitzen sowie Teppichen. Entfernt hartnäckige Flecken und Verschmutzungen.",
  },
  {
    id: "geruch",
    icon: "🌿",
    title: "Geruchsbeseitigung",
    description:
      "Professionelle Eliminierung von Gerüchen (Rauch, Tiere, Schimmel) — nicht nur überdeckt, sondern dauerhaft beseitigt.",
  },
  {
    id: "tierhaare",
    icon: "🐾",
    title: "Tierhaare entfernen",
    description:
      "Gründliche Entfernung von Tierhaaren aus Teppichen, Sitzen und Kofferraum mit Spezialwerkzeug.",
  },
  {
    id: "motor",
    icon: "🔧",
    title: "Motorraumreinigung",
    description:
      "Professionelle Reinigung des Motorraums. Entfernt Öl, Staub und Schmutz — für ein gepflegtes Gesamtbild.",
  },
];

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative bg-[#111111] border-b border-white/10 py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C9A84C] text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Leistungen
          </Link>
          <div className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Extras
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Extras & Spezialleistungen</h1>
          <p className="text-xl text-gray-400">
            Ergänze deine Aufbereitung mit unseren Spezialleistungen.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {extras.map((extra) => (
            <div
              key={extra.id}
              id={extra.id}
              className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-colors"
            >
              <div className="text-3xl mb-3">{extra.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{extra.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{extra.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Individuelles Angebot</h2>
          <p className="text-gray-400 mb-6">
            Alle Spezialleistungen werden individuell kalkuliert. Kontaktiere uns für ein
            persönliches Angebot — wir beraten dich gerne.
          </p>
          <Link
            href="/termin-buchen"
            className="inline-block bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Anfrage stellen
          </Link>
        </div>
      </div>
    </div>
  );
}
