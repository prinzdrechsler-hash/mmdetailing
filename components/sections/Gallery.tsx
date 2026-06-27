import Link from "next/link";

const images = [
  "/images/gallery/g01.jpg",
  "/images/gallery/g02.webp",
  "/images/gallery/g03.webp",
  "/images/gallery/g04.webp",
  "/images/gallery/g05.webp",
  "/images/gallery/g06.webp",
  "/images/gallery/g07.webp",
  "/images/gallery/g08.webp",
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]" id="galerie">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            So schön kann Autopflege sein
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Vorher/Nachher-Bilder aus echten Aufbereitungen — kein Filter, kein Trick.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-sm group"
            >
              <img
                src={src}
                alt={`M&M Detailing Aufbereitung Beispiel ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/galerie"
            className="inline-block border-2 border-slate-200 hover:border-[#00ADB5] text-slate-700 hover:text-[#00ADB5] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Alle Bilder ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
