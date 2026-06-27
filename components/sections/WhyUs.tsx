const reasons = [
  {
    icon: "🏆",
    title: "Premium Markenprodukte",
    description:
      "Wir setzen ausschließlich auf hochwertige, professionelle Markenprodukte für bestmögliche Ergebnisse.",
  },
  {
    icon: "🎯",
    title: "Individuelle Beratung",
    description:
      "Kein Massengeschäft. Wir nehmen uns Zeit für dich und dein Fahrzeug — jeder Auftrag ist einzigartig.",
  },
  {
    icon: "📅",
    title: "Flexible Termine",
    description:
      "Wir passen uns deinem Zeitplan an. Wochentags, abends, am Wochenende — wir finden einen Termin.",
  },
  {
    icon: "✅",
    title: "100% Zufriedenheitsgarantie",
    description:
      "Nicht zufrieden? Wir kommen nochmal. Deine Zufriedenheit ist unser Anspruch — ohne Wenn und Aber.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Warum M&M Detailing die richtige Wahl für dein Fahrzeug ist
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Vier Gründe, warum über 38 Kunden uns mit 5 Sternen bewerten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
