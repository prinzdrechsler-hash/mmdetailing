import Link from "next/link";
import { Star } from "lucide-react";

const badges = [
  { value: "5.0", label: "38+ Google-Bewertungen", stars: true },
  { value: "100%", label: "Mobiler Service" },
  { value: "ab 60 €", label: "Premium-Pflege" },
  { value: "0 €", label: "Aufpreis für Hausbesuch" },
];

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-16 overflow-hidden bg-white">
      {/* subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#00ADB5]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00ADB5]/10 text-[#00897e] text-sm font-medium px-4 py-2 rounded-full mb-6">
              📍 Mobiler Service in Bielefeld & Umgebung
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] font-extrabold text-slate-900 mb-6">
              Autoaufbereitung Bielefeld:{" "}
              <span className="text-[#00ADB5]">Professionell. Mobil.</span>{" "}
              Bei dir vor Ort.
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Wir bringen den Showroom-Glanz direkt zu dir nach Hause oder ins Büro —
              professionell, effizient und mit höchstem Anspruch. Kein Aufpreis für den Hausbesuch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/termin-buchen"
                className="bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors shadow-lg shadow-[#00ADB5]/20"
              >
                Jetzt Termin anfragen
              </Link>
              <Link
                href="#preise"
                className="border-2 border-slate-200 hover:border-[#00ADB5] text-slate-700 hover:text-[#00ADB5] font-semibold px-8 py-4 rounded-lg text-center transition-colors"
              >
                Preise ansehen
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 overflow-hidden flex flex-col items-center justify-center shadow-xl">
              <span className="text-6xl mb-3">🚗</span>
              <span className="text-slate-400 text-sm">Bild folgt</span>
            </div>
          </div>
        </div>

        {/* Stat badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {badges.map((b) => (
            <div
              key={b.label}
              className="bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-2xl font-extrabold text-[#00ADB5]">{b.value}</span>
                {b.stars && (
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#00ADB5] text-[#00ADB5]" />
                    ))}
                  </div>
                )}
              </div>
              <div className="text-sm text-slate-500">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
