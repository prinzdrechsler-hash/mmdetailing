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
    <div className="pt-20">
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00ADB5] text-sm font-bold tracking-widest uppercase mb-4">
            Für Unternehmen
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Flottenaufbereitung & Firmenfahrzeuge
          </h1>
          <p className="text-slate-600 text-lg">
            Professionelle Fahrzeugpflege für Unternehmen — flexibel, zuverlässig und
            direkt auf deinem Gelände.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Warum M&M für dein Unternehmen?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Firmenwagen repräsentieren dein Unternehmen. Sauber aufbereitete Fahrzeuge
              hinterlassen bei Kunden und Partnern einen professionellen Eindruck.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Wir kommen direkt zu dir auf das Firmengelände und kümmern uns um deine
              Fahrzeugflotte — nach Absprache regelmäßig, flexibel und zuverlässig.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00ADB5]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#00ADB5]" />
                  </div>
                  <span className="text-slate-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-slate-900 mb-4">Individuelles Angebot anfragen</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Jede Flotte ist anders. Kontaktiere uns für ein maßgeschneidertes Angebot —
              wir melden uns schnell zurück.
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@mmdetailing.de"
                className="flex items-center justify-center gap-2 w-full bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                info@mmdetailing.de
              </a>
              <Link
                href="/termin-buchen"
                className="flex items-center justify-center gap-2 w-full border-2 border-slate-200 hover:border-[#00ADB5] text-slate-700 hover:text-[#00ADB5] font-semibold py-3 rounded-lg transition-colors"
              >
                Online anfragen
              </Link>
            </div>
            <p className="text-xs text-slate-500 text-center">
              Kein Aufpreis für den Hausbesuch. Schnelle Rückmeldung garantiert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
