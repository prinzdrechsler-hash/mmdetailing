const steps = [
  {
    number: "01",
    title: "Anfrage & Buchung",
    description:
      "Online-Anfrage mit schneller Rückmeldung. Wir besprechen deine Wünsche und finden den passenden Termin.",
  },
  {
    number: "02",
    title: "Wir kommen zu dir",
    description:
      "Unser Team erscheint pünktlich bei dir. Du brauchst nur Zugang zu Wasser und Strom.",
  },
  {
    number: "03",
    title: "Wir arbeiten, du entspannst",
    description:
      "Innenreinigung, Wäsche, Lackversiegelung — alles läuft professionell ab, während du deine Zeit genießt.",
  },
  {
    number: "04",
    title: "Übergabe & Ergebnis",
    description:
      "Gemeinsame Abnahme, Schlüsselübergabe. Dein Fahrzeug erstrahlt in neuem Glanz — garantiert.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]" id="ablauf">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            So läuft es ab
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            In 4 Schritten zum perfekten Fahrzeug
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Einfach, unkompliziert und direkt bei dir vor Ort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-0px)] w-full h-px bg-gradient-to-r from-[#C9A84C]/50 to-transparent z-0" />
              )}

              <div className="relative z-10 bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 h-full hover:border-[#C9A84C]/30 transition-colors">
                <div className="text-4xl font-bold text-[#C9A84C]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
