import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Außenaufbereitung",
    description:
      "Gründliche Autoaufbereitung für Lack, Felgen und Glasflächen. Wir entfernen Schmutz, Ablagerungen und Umwelteinflüsse für ein gepflegtes Gesamtbild.",
    href: "/leistungen/aussenaufbereitung",
    cta: "Mehr erfahren",
  },
  {
    num: "02",
    title: "Innenraumaufbereitung",
    description:
      "Umfassende Autoinnenreinigung von Sitzen, Teppichen, Kunststoffteilen und Detailbereichen – für einen sauberen und gepflegten Innenraum.",
    href: "/leistungen/innenraumaufbereitung",
    cta: "Mehr erfahren",
  },
  {
    num: "03",
    title: "Komplettaufbereitung",
    favorite: true,
    description:
      "Kombination aus Innen- und Außenaufbereitung für ein ganzheitliches Ergebnis. Ideal zur Werterhaltung oder als umfassendes Detailing in Bielefeld.",
    href: "/leistungen/komplettpaket",
    cta: "Mehr erfahren",
  },
  {
    num: "04",
    title: "Verkaufsaufbereitung",
    description:
      "Professionelle Aufbereitung vor dem Fahrzeugverkauf. Optische Aufwertung für einen überzeugenden ersten Eindruck bei Interessenten.",
    href: "/leistungen/verkaufsaufbereitung",
    cta: "Mehr erfahren",
  },
  {
    num: "05",
    title: "Leasingrückgabe Aufbereitung",
    description:
      "Gründliche Fahrzeugaufbereitung zur Vorbereitung auf die Leasingrückgabe – für einen gepflegten Gesamteindruck bei der Begutachtung.",
    href: "/leistungen/leasingrueckgabe",
    cta: "Mehr erfahren",
  },
  {
    num: "06",
    title: "Extras & Spezialleistungen",
    description:
      "Lackversiegelung, Lederpflege, Polsterreinigung, Tierhaarentfernung und mehr – ergänzende Leistungen für jede Aufbereitung in Bielefeld.",
    href: "/leistungen/extras",
    cta: "Alle ansehen",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="leistungen">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#00ADB5] text-[11px] font-bold tracking-[1.65px] uppercase mb-2">
              Unsere Leistungen
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Was wir für dein
              <br />
              <span className="text-[#00ADB5]">Fahrzeug tun.</span>
            </h2>
          </div>
          <span className="text-slate-400 text-sm pb-1 whitespace-nowrap">06 Leistungen</span>
        </div>

        {/* List */}
        <div>
          {services.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-8 py-6 border-b border-gray-200"
            >
              <span className="text-[28px] font-extrabold text-[#00ADB5] opacity-35">
                {s.num}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[17px] font-bold text-slate-900">{s.title}</span>
                  {s.favorite && (
                    <span
                      className="text-white text-[10px] font-bold px-3 py-1 rounded-[14px] uppercase tracking-wide"
                      style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
                    >
                      Kundenfavorit
                    </span>
                  )}
                </div>
                <p className="text-[13.5px] text-gray-500 leading-relaxed max-w-2xl">
                  {s.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[#00ADB5] text-xs font-bold whitespace-nowrap">
                  {s.cta}
                </span>
                <div className="w-9 h-9 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-slate-600 group-hover:border-[#00ADB5] group-hover:text-[#00ADB5] transition-colors shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10">
          <p className="text-slate-600 text-sm">
            Informiere dich über unsere Pakete & transparenten Preise.
          </p>
          <Link
            href="#preise"
            className="text-white font-semibold px-6 py-3 rounded-[14px] transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
          >
            Preise ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
