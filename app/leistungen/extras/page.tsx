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
    <div className="pt-20">
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#00ADB5] text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Leistungen
          </Link>
          <div className="inline-block bg-[#00ADB5]/10 text-[#00897e] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Extras
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Extras & Spezialleistungen</h1>
          <p className="text-xl text-slate-600">
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
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{extra.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{extra.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{extra.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#00ADB5]/10 border border-[#00ADB5]/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Individuelles Angebot</h2>
          <p className="text-slate-600 mb-6">
            Alle Spezialleistungen werden individuell kalkuliert. Kontaktiere uns für ein
            persönliches Angebot — wir beraten dich gerne.
          </p>
          <Link
            href="/termin-buchen"
            className="inline-block bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Anfrage stellen
          </Link>
        </div>
      </div>
    </div>
  );
}
