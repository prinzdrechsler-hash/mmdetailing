import Link from "next/link";
import { Star, Check } from "lucide-react";

const benefits = [
  "13% Rabatt auf alle Leistungen",
  "Fester Pflegeplan für dein Fahrzeug",
  "Prioritätsbuchung bei Terminen",
  "Persönlicher Ansprechpartner",
  "Regelmäßige Qualitätskontrolle",
];

export default function Select() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#C9A84C]/30 bg-gradient-to-br from-[#C9A84C]/10 via-[#111111] to-[#111111] p-8 md:p-12">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                M&M Select
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Premium-Pflege für{" "}
                <span className="text-[#C9A84C]">anspruchsvolle Fahrer</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Unser exklusives Abo-Programm für Kunden, die mehr wollen.
                Nur <strong className="text-white">20 Plätze</strong> verfügbar —
                sichere dir deinen jetzt.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#C9A84C]" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/termin-buchen"
                className="inline-block bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Jetzt Platz sichern
              </Link>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 w-full max-w-xs">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
                <div className="text-5xl font-bold text-[#C9A84C] mb-1">5.0</div>
                <div className="text-gray-400 text-sm mb-6">Google-Bewertung</div>
                <div className="border-t border-white/10 pt-6">
                  <div className="text-3xl font-bold text-white mb-1">13%</div>
                  <div className="text-gray-400 text-sm">Ersparnis mit Select</div>
                </div>
                <div className="border-t border-white/10 pt-6 mt-6">
                  <div className="text-3xl font-bold text-[#C9A84C] mb-1">20</div>
                  <div className="text-gray-400 text-sm">Limitierte Plätze</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
