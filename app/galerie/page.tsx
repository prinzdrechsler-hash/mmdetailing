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
    <div className="pt-20">
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00ADB5] text-sm font-bold tracking-widest uppercase mb-4">
            Galerie
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            So schön kann Autopflege sein
          </h1>
          <p className="text-slate-600 text-lg">
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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border-2 ${
                cat === "Alle"
                  ? "bg-[#00ADB5] text-white border-[#00ADB5]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#00ADB5] hover:text-[#00ADB5]"
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
              className="relative aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                <span className="text-4xl mb-2">🚗</span>
                <span className="text-xs text-slate-400">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          Mehr Bilder findest du auf unserem{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ADB5] hover:underline font-medium"
          >
            Instagram-Kanal
          </a>
          .
        </p>
      </div>
    </div>
  );
}
