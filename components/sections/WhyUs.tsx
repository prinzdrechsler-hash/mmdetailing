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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            Warum M&M Detailing?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Dein Fahrzeug. Unsere Leidenschaft.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Vier Gründe, warum über 38 Kunden uns mit 5 Sternen bewerten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-colors"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
