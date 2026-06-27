import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie – M&M Detailing Bielefeld",
  description:
    "Vorher/Nachher-Bilder aus echten Aufbereitungen von M&M Detailing in Bielefeld.",
};

const images = [
  "/images/gallery/g01.jpg",
  "/images/gallery/g02.webp",
  "/images/gallery/g03.webp",
  "/images/gallery/g04.webp",
  "/images/gallery/g05.webp",
  "/images/gallery/g06.webp",
  "/images/gallery/g07.webp",
  "/images/gallery/g08.webp",
  "/images/gallery/g09.jpg",
  "/images/gallery/g10.webp",
  "/images/gallery/g11.webp",
  "/images/gallery/g12.jpg",
  "/images/gallery/g13.jpg",
  "/images/gallery/g14.jpg",
  "/images/gallery/g16.jpg",
];

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-sm group"
            >
              <img
                src={src}
                alt={`M&M Detailing Aufbereitung ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
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
