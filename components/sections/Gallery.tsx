import Link from "next/link";

const placeholders = [
  { label: "Außenaufbereitung", tag: "Exterior" },
  { label: "Innenraumreinigung", tag: "Interior" },
  { label: "Vorher / Nachher", tag: "Before & After" },
  { label: "Felgenreinigung", tag: "Wheels" },
  { label: "Mobiler Einsatz", tag: "Mobile" },
  { label: "Ergebnis", tag: "Result" },
  { label: "Cockpit-Reinigung", tag: "Cockpit" },
  { label: "Lackversiegelung", tag: "Sealant" },
];

export default function Gallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="galerie">
      <div className="text-center mb-16">
        <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
          Galerie
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Unsere Ergebnisse sprechen für sich
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Vorher/Nachher-Bilder aus echten Aufbereitungen — kein Filter, kein Trick.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {placeholders.map((item, i) => (
          <div
            key={i}
            className="relative aspect-square bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 group hover:border-[#C9A84C]/40 transition-colors"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl mb-2">🚗</div>
              <span className="text-xs text-gray-600">{item.tag}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-white text-xs font-medium">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/galerie"
          className="inline-block border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Alle Bilder ansehen
        </Link>
      </div>
    </section>
  );
}
