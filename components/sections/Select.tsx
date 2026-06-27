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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-[#1F2937] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00ADB5]/20 text-[#00ADB5] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                M&M Select
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Das Pflegeprogramm für Kunden, die{" "}
                <span className="text-[#00ADB5]">mehr wollen</span>
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Unser exklusives Programm für anspruchsvolle Fahrer. Nur{" "}
                <strong className="text-white">20 Plätze</strong> verfügbar —
                sichere dir deinen jetzt.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#00ADB5]/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#00ADB5]" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/termin-buchen"
                className="inline-block bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Jetzt Platz sichern
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/select.jpeg"
                  alt="M&M Select Pflegeprogramm"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              {/* floating stat badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-5 py-3 flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#00ADB5] text-[#00ADB5]" />
                  ))}
                </div>
                <div className="text-slate-900 font-extrabold">5.0</div>
                <div className="text-slate-500 text-xs">Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
