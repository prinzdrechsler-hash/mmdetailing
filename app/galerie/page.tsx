import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie – M&M Detailing Bielefeld",
  description:
    "Vorher/Nachher-Bilder aus echten Aufbereitungen von M&M Detailing in Bielefeld.",
};

const categories = ["Alle", "Außen", "Innen", "Vorher/Nachher", "Spezial"];

const placeholders = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  category: ["Außen", "Innen", "Vorher/Nachher", "Spezial"][i % 4],
}));

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative bg-[#111111] border-b border-white/10 py-20 px-4 sm:px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
            Galerie
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unsere Ergebnisse
          </h1>
          <p className="text-gray-400 text-lg">
            Echte Aufbereitungen. Kein Filter, kein Trick — nur Ergebnisse, auf die wir stolz sind.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                cat === "Alle"
                  ? "bg-[#C9A84C] text-black border-[#C9A84C]"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 hover:border-[#C9A84C]/40 transition-colors group cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl mb-2">🚗</span>
                <span className="text-xs text-gray-600">{item.category}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-10">
          Mehr Bilder findest du auf unserem{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C] hover:underline"
          >
            Instagram-Kanal
          </a>
          .
        </p>
      </div>
    </div>
  );
}
