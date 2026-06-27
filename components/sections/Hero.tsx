import Link from "next/link";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm px-4 py-2 rounded-full mb-8">
          <span>📍</span>
          Mobiler Service in Bielefeld & Umgebung
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Professionelle{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #A0832B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Fahrzeugaufbereitung
          </span>{" "}
          bei dir vor Ort
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Professionell, effizient und direkt an deinem Standort. Kein Aufschlag für den Hausbesuch.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/termin-buchen"
            className="bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-lg shadow-[#C9A84C]/20"
          >
            Termin anfragen
          </Link>
          <Link
            href="#preise"
            className="border border-white/20 hover:border-[#C9A84C]/50 text-white hover:text-[#C9A84C] font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Preise ansehen
          </Link>
        </div>

        {/* Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-[#C9A84C] text-[#C9A84C]" />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            <span className="text-white font-semibold">5.0</span> Sterne bei über{" "}
            <span className="text-white font-semibold">38+ Google-Bewertungen</span>
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
