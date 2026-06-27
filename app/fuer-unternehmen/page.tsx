import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Für Unternehmen – M&M Detailing Bielefeld",
  description:
    "Flottenaufbereitung und Firmenfahrzeugpflege in Bielefeld & Gütersloh. Individuelle Angebote für Unternehmen.",
};

const benefits = [
  "Individuelle Preisgestaltung für Flotten",
  "Regelmäßige Pflegetermine nach Absprache",
  "Rechnungsstellung und Geschäftskundenkonditionen",
  "Aufbereitung direkt auf deinem Firmengelände",
  "Persönlicher Ansprechpartner",
  "Schnelle Reaktionszeiten",
];

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative bg-[#111111] border-b border-white/10 py-20 px-4 sm:px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
            Für Unternehmen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Flottenaufbereitung & Firmenfahrzeuge
          </h1>
          <p className="text-gray-400 text-lg">
            Professionelle Fahrzeugpflege für Unternehmen — flexibel, zuverlässig und
            direkt auf deinem Gelände.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Warum M&M für dein Unternehmen?</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Firmenwagen repräsentieren dein Unternehmen. Sauber aufbereitete Fahrzeuge
              hinterlassen bei Kunden und Partnern einen professionellen Eindruck.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Wir kommen direkt zu dir auf das Firmengelände und kümmern uns um deine
              Fahrzeugflotte — nach Absprache regelmäßig, flexibel und zuverlässig.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#C9A84C]" />
                  </div>
                  <span className="text-gray-300 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4">Individuelles Angebot anfragen</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Jede Flotte ist anders. Kontaktiere uns für ein maßgeschneidertes Angebot —
              wir melden uns schnell zurück.
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@mmdetailing.de"
                className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold py-3 rounded-lg transition-colors"
              >
                info@mmdetailing.de
              </a>
              <Link
                href="/termin-buchen"
                className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-[#C9A84C]/50 text-white hover:text-[#C9A84C] font-semibold py-3 rounded-lg transition-colors"
              >
                Online anfragen
              </Link>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Kein Aufschlag für den Hausbesuch. Schnelle Rückmeldung garantiert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
