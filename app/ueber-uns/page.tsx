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
      "Jedes Fahrzeug behandeln wir so, als wäre es unser eigenes. Pünktlichkeit und Sorgfalt sind für uns selbstverständlich.",
  },
  {
    title: "Nachhaltigkeit",
    description:
      "Wir setzen auf umweltbewusste Reinigungslösungen und gehen schonend mit Ressourcen um.",
  },
];

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative bg-[#111111] border-b border-white/10 py-20 px-4 sm:px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
            Über uns
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Drei Typen. Ein Standard.</h1>
          <p className="text-gray-400 text-lg">
            Mo, Max und Robin — drei Freunde aus Bielefeld mit einer Leidenschaft für
            professionelle Fahrzeugaufbereitung.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* Story */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Unsere Geschichte</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              M&M Detailing begann als Experiment — die Aufbereitung eines befreundeten Golf 4.
              Was als Hobby startete, entwickelte sich schnell zu einer professionellen
              Leidenschaft für erstklassige Fahrzeugpflege.
            </p>
            <p>
              Heute stehen Mo, Max und Robin für individuelle Beratung, hochwertige Ergebnisse
              und ehrlichen Service — direkt bei dir vor Ort, in Bielefeld und Gütersloh.
              Kein Massengeschäft, kein Aufschlag für den Hausbesuch.
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
          <h2 className="text-2xl font-bold mb-8">Das Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#111111] border border-white/10 rounded-2xl p-8 text-center hover:border-[#C9A84C]/30 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-3xl font-bold text-[#C9A84C] mx-auto mb-4">
                  {member.initial}
                </div>
                <div className="font-semibold text-lg">{member.name}</div>
                <div className="text-sm text-gray-500 mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#C9A84C] mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-4">
            &ldquo;Wir behandeln jedes Fahrzeug so, als wäre es unser eigenes.&rdquo;
          </blockquote>
          <div className="text-gray-500">— Das M&M Detailing Team</div>
        </div>

        <div className="text-center">
          <Link
            href="/termin-buchen"
            className="inline-block bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Jetzt Termin anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}
