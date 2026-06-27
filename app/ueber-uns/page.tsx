import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über Uns – M&M Detailing Bielefeld",
  description:
    "Mo, Max und Robin — drei Freunde aus Bielefeld mit einer Leidenschaft für Fahrzeugaufbereitung. Die Geschichte von M&M Detailing.",
};

const team = [
  { name: "Mo Ajak", role: "Co-Founder", initial: "M" },
  { name: "Max Drechsler", role: "Co-Founder", initial: "M" },
  { name: "Robin Willms", role: "Co-Founder", initial: "R" },
];

const values = [
  {
    title: "Ehrlichkeit",
    description:
      "Wir hören zu, wir verstehen, wir liefern. Keine versteckten Kosten, keine leeren Versprechen.",
  },
  {
    title: "Zuverlässigkeit",
    description:
      "Jedes Fahrzeug behandeln wir so, als wäre es unser eigenes. Pünktlichkeit und Sorgfalt sind selbstverständlich.",
  },
  {
    title: "Nachhaltigkeit",
    description:
      "Wir setzen auf umweltbewusste Reinigungslösungen und gehen schonend mit Ressourcen um.",
  },
];

export default function Page() {
  return (
    <div className="pt-20">
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00ADB5] text-sm font-bold tracking-widest uppercase mb-4">
            Über uns
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Eure Experten für Autoaufbereitung
          </h1>
          <p className="text-slate-600 text-lg">
            Mo, Max und Robin — drei Freunde aus Bielefeld mit einer Leidenschaft für
            professionelle Fahrzeugaufbereitung.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* Story */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Unsere Geschichte</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              M&M Detailing begann als Experiment — die Aufbereitung eines befreundeten Golf 4.
              Was als Hobby startete, entwickelte sich schnell zu einer professionellen
              Leidenschaft für erstklassige Fahrzeugpflege.
            </p>
            <p>
              Heute stehen Mo, Max und Robin für individuelle Beratung, hochwertige Ergebnisse
              und ehrlichen Service — direkt bei dir vor Ort, in Bielefeld und Gütersloh.
              Kein Massengeschäft, kein Aufpreis für den Hausbesuch.
            </p>
            <p>
              Mit über fünf Jahren Teamerfahrung und mehr als 38 Fünf-Sterne-Bewertungen
              auf Google wissen wir, worauf es ankommt: Sorgfalt, Qualität und 100%
              Kundenzufriedenheit.
            </p>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Das Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-20 h-20 rounded-full bg-[#00ADB5]/10 flex items-center justify-center text-3xl font-extrabold text-[#00ADB5] mx-auto mb-4">
                  {member.initial}
                </div>
                <div className="font-bold text-slate-900 text-lg">{member.name}</div>
                <div className="text-sm text-slate-500 mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-[#00ADB5] mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="bg-[#1F2937] rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-4">
            &ldquo;Wir behandeln jedes Fahrzeug so, als wäre es unser eigenes.&rdquo;
          </blockquote>
          <div className="text-slate-400">— Das M&M Detailing Team</div>
        </div>

        <div className="text-center">
          <Link
            href="/termin-buchen"
            className="inline-block bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Jetzt Termin anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}
