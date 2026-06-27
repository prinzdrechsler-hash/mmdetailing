import Link from "next/link";

const stats = [
  { num: "20", suffix: ".", label: "Plätze gesamt" },
  { num: "13", suffix: "%", label: "Ersparnis" },
  { num: "5,0", suffix: "★", label: "Google" },
];

export default function Select() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <span className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white/[0.92] text-slate-900 text-[11px] font-bold tracking-[1.1px] px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ADB5]" />
            BEGRENZT AUF 20 PLÄTZE
          </span>
          <img
            src="/images/select.jpeg"
            alt="M&M Pflegeprogramm Select"
            className="w-full h-full object-cover aspect-[4/5]"
          />
        </div>

        {/* Content */}
        <div>
          <div className="text-[#00ADB5] text-[11px] font-bold tracking-[2.2px] uppercase mb-4">
            Neu bei M&M Detailing
          </div>
          <h2 className="text-[34px] sm:text-[42px] leading-[1.1] font-bold text-slate-900 mb-5">
            Das Pflegeprogramm
            <br />
            für Kunden, die
            <br />
            <em className="text-[#00ADB5] not-italic italic">mehr wollen.</em>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-lg">
            Regelmäßige Aufbereitung. Fester Platz. Kein Aufwand. Unser Select-Programm
            betreut dein Fahrzeug dauerhaft – zu besseren Konditionen als jede Einzelbuchung.
          </p>

          <div className="flex gap-10 mb-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[28px] font-extrabold text-slate-900">
                  {s.num}
                  <span className="text-[#00ADB5]">{s.suffix}</span>
                </div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wide mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/termin-buchen"
              className="text-white font-bold px-7 py-3.5 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
            >
              Programm entdecken
            </Link>
            <Link
              href="/termin-buchen"
              className="text-gray-500 font-semibold hover:text-[#00ADB5] transition-colors"
            >
              Direkt anfragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
