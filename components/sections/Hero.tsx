import Link from "next/link";

const stats = [
  { value: "5,0 ★★★★★", label: "Über 38 Google-Bewertungen" },
  { value: "100 % mobil", label: "Zuhause oder im Büro – wir kommen zu dir" },
  { value: "Über ein halbes Jahrzehnt", label: "Erfahrung im Team" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[520px] flex items-center pt-20">
      {/* Background image */}
      <img
        src="/images/hero.webp"
        alt="Professionelle Autoaufbereitung Bielefeld – BMW 5er Außenaufbereitung durch M&M Detailing"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(1.1) contrast(1.05)" }}
      />
      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.25) 38%, rgba(15,23,42,0) 70%), linear-gradient(100deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.45) 38%, rgba(15,23,42,0) 62%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[680px]">
          <div className="inline-flex items-center gap-2 bg-white/[0.14] backdrop-blur-md border border-white/25 text-white text-sm font-medium px-4 py-1.5 rounded-[14px] mb-6">
            📍 Mobil in Bielefeld & Umgebung
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] font-extrabold text-white mb-6">
            Autoaufbereitung Bielefeld:{" "}
            <span className="text-[#00ADB5]">Professionell. Mobil.</span>{" "}
            Bei dir vor Ort.
          </h1>

          <p className="text-lg text-slate-100/90 mb-8 max-w-xl">
            Wir bringen den Showroom-Glanz direkt zu dir nach Hause oder ins Büro.
            Professionell, effizient und mit höchstem Qualitätsanspruch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/termin-buchen"
              className="text-white font-semibold px-7 py-3.5 rounded-[14px] text-center transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
            >
              Jetzt Termin anfragen
            </Link>
            <Link
              href="#preise"
              className="bg-white/[0.12] backdrop-blur-md border border-white/30 text-white font-semibold px-6 py-3.5 rounded-[14px] text-center transition-colors hover:bg-white/20"
            >
              Preise ansehen
            </Link>
          </div>
        </div>

        {/* Stat bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden max-w-3xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/[0.68] backdrop-blur-sm px-5 py-4"
            >
              <div className="text-white font-bold text-base mb-0.5">{stat.value}</div>
              <div className="text-slate-300 text-xs leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
